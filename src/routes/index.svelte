<script>
	import '../global.css';
	import 'ress/dist/ress.min.css';
	import j2c from '../json2crystal.js';

	let input = '';
	let checkbox = true;
	let forceDisable = false;

	function genCrystalExample(code) {
		const mainStruct = code.match(/struct (?<struct>O_.+)\n/)?.groups?.struct;
		const res = ['require "json"', `${code}`];
		res.push(`\npp ${mainStruct}.from_json(%(${JSON.stringify(JSON.parse(input))}))`);
		return res.join('\n\n');
	}

	async function sendToCarc(code) {
		forceDisable = true;
		const res = await fetch('https://play.crystal-lang.org/run_requests', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({
				run_request: {
					language: 'crystal',
					version: '1.1.1',
					code: genCrystalExample(code)
				}
			})
		}).then((r) => r.json());
		forceDisable = false;
		if (res.run_request.run.exit_code === 1) return;
		window.open(res.run_request.run.html_url, '_blank').focus();
	}

	function isValidJson(json) {
		let res = true;
		try {
			const parsed = JSON.parse(json);
			if (typeof parsed.push === 'function') res = false;
		} catch {
			res = false;
		}
		return res;
	}

	$: output =
		input.length > 0 && isValidJson(input)
			? j2c(input, checkbox)
			: input.length === 0
			? ''
			: 'Invalid JSON';
	$: shouldError = input.length > 0 && !isValidJson(input);
</script>

<main>
	<div class="overlay">
		<div class="column">
			<label>
				<h1>Input</h1>
				<textarea bind:value={input} class="bigInput" class:error={shouldError} />
			</label>
		</div>
		<div class="column">
			<label>
				<h1>Output</h1>
				<textarea readonly bind:value={output} class="bigInput" class:error={shouldError} />
			</label>
			<div class="actions">
				<div style="display:flex;align-content:center;">
					<label class="optimizeText">
						Optimize:
						<input
							style="align-self: center;"
							bind:checked={checkbox}
							type="checkbox"
							title="Optimization will merge similar structs. Making it smaller but also more difficult to maintain."
						/>
					</label>
				</div>
				<button
					disabled={shouldError || input.length === 0 || forceDisable || output.length === 0}
					class="carcBtn"
					title="WARNING: This will send the input to carc.in, please remove private info beforehand."
					on:click={() => sendToCarc(output)}>Run on carc.in</button
				>
			</div>
		</div>
	</div>
</main>

<style>
	.overlay {
		border-radius: 10px 0%;
		background-color: rgba(0, 0, 0, 0.3);
		padding: 15px;
	}

	.bigInput.error {
		outline: none !important;
		border: 5px dashed red;
		padding: calc(1rem - 5px);
	}

	main {
		display: flex;
		justify-content: space-around;
		align-content: center;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		padding: 2rem;
	}

	.bigInput {
		background-color: white;
		color: black;
		resize: none;
		width: 100%;
		height: 30vh;
		border-radius: 10px 0%;
		padding: 1rem;
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	.actions {
		margin-top: 15px;
		display: flex;
		align-content: center;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.optimizeText {
		font-size: large;
		font-weight: bold;
		margin-right: 10px;
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.carcBtn {
		padding: 1rem;
		background-color: black;
		border-radius: 10px 0%;
		transition-duration: 200ms;
		border: 2px solid white;
	}

	.carcBtn:hover {
		border-radius: 10px;
		transition-duration: 200ms;
	}

	.carcBtn[disabled='disabled'],
	.carcBtn:disabled {
		background-color: #ccc;
	}
</style>
