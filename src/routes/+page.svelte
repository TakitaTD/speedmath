<script lang="ts">
	import mexp from 'math-expression-evaluator';
	export let question = 'LOADING...';
	export let user_input = '';
	function getDiff() {
		if (typeof window === 'undefined') {
			return;
		}
		let diffLocal = localStorage.getItem('diff');
		if (!diffLocal) {
			localStorage.setItem('diff', '0');
			return 0;
		}
		if (!isNaN(parseInt(diffLocal))) {
			return parseInt(diffLocal);
		}
	}
	export let diff = getDiff();
	let maxnum: number;

	if (typeof window !== 'undefined') {
		useDiff(getDiff() || 0);
	}
	let answer = 0;
	function generateQuestion() {
		let num1: number = 0;
		let num2: number = 0;
		function randomNum() {
			num1 = Math.floor(Math.random() * maxnum);
			num2 = Math.floor(Math.random() * maxnum);
			if (num1 === 0 || num1 === 1) {
				randomNum();
			}
			if (num2 === 0 || num2 === 1) {
				randomNum();
			}
		}
		randomNum();
		let op = Math.floor(Math.random() * 4);
		let operation = '';

		if (num1 === 0) {
			num1;
		}
		if (num2 === 0) {
			num2++;
		}
		switch (op) {
			case 0: {
				operation = '+';
				answer = num1 + num2;
				break;
			}
			case 1: {
				operation = '-';
				if (num2 > num1) {
					let buf = num2;
					num2 = num1;
					num1 = buf;
				}
				answer = num1 - num2;
				break;
			}
			case 2: {
				operation = '*';
				answer = num1 * num2;
				break;
			}
			case 3: {
				operation = '/';
				answer = num1 / num2;
				break;
			}
			default: {
				// answer = "ERROR";
				answer = -1;
				operation = 'ERROR';
			}
		}
		question = `${num1} ${operation} ${num2}`;
		answer = parseFloat(answer.toFixed(2));
		console.log(answer);
	}
	if (typeof window !== 'undefined') {
		generateQuestion();
	}
	function useDiff(diff: number) {
		switch (diff) {
			case 0: {
				maxnum = 10;
				break;
			}
			case 1: {
				maxnum = 20;
				break;
			}
			case 2: {
				maxnum = 30;
				break;
			}
			case 3: {
				maxnum = 50;
				break;
			}
		}
	}
	async function selectDiff(e: any) {
		diff = parseInt(e.target.value);
		localStorage.setItem('diff', e.target.value);
		useDiff(diff);
		generateQuestion();
	}

	async function checkAnswer(e: any) {
		if (typeof window !== 'undefined') {
			if (parseFloat(e.target.value) === answer) {
				setTimeout(() => {
					e.target.value = '';
				}, 0);
				generateQuestion();
				// e.preventDefault();
			}
		}
	}
</script>

<div class="options">
	<span>Addition<input type="checkbox" /></span>
</div>
<div class="diff">
	<label for="difficulty">Difficulty</label>
	<select name="difficulty" id="difficulty" on:input={selectDiff}>
		<option value="0"> Lenient </option>
		<option value="1"> Easy </option>
		<option value="2"> Medium </option>
		<option value="3"> Hard </option>
	</select>
</div>
<main>
	<div>{question}</div>
	<input
		placeholder="Answer"
		id="walter"
		bind:value={user_input}
		on:input={checkAnswer}
		on:keypress={(e) => {
			e.key === 'Enter' && generateQuestion();
		}}
	/>
</main>

<style scoped lang="scss" module>
	.diff,
	.options {
		display: flex;
		position: absolute;
		background-color: #ffffff1f;
		outline: solid #fff 2px;
		color: #fff;
		border-radius: 2px;
		padding: 0.3rem;
		gap: 0.3rem;
		padding-inline: 1rem;
		font-size: 1rem;
		flex-direction: column;
	}

	.options {
		font-size: 0.75rem;
		outline: solid #fff 3px;
		top: 50%;
		left: 5%;
	}
	.diff {
		top: 5%;
		right: 5%;
		label {
			font-size: 0.6rem;
		}
		select {
			font-size: 0.5rem;
			background-color: #ececec;
			padding: 0.1rem;
			border-radius: 3px;
			outline: none;
			border: none;
		}
		option {
			border-radius: 0.1rem;
		}
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: 50%;
		background-color: rgba(0, 0, 0, 0.2);
		height: 60%;
		border-radius: 3px;
		z-index: 3;
		color: #fff;
		font-weight: 300;
		font-size: 2rem;
		input {
			font-family: inherit;
			width: 50%;
			height: 10%;
			font-size: 0.8rem;
			background-color: rgba(0, 0, 0, 0);
			color: inherit;
			border: none;
			outline: none;
			border: solid #fff 2px;
			border-radius: 4px;
			text-align: center;
			padding: 0.2rem;
		}
	}
</style>
