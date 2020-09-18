"use strict";

let leader = {
    askQuestion(question) {
        let variations = "";
        for (let key in question.variants) {
            variations += `${key}: ${question.variants[key]}\n`;
        }
        let answer = prompt(`${question.text},answers:\n${variations}`);
        if (answer !== null) {
        	return answer === question.correctAnswerIndex;
        } else {
        	return answer;
        }
    }
};

let game = {
	score: 0,
	nextQuestionIdx:0,
	run() {
		if (!this.isQuestionExists()) {
			console.log(`Game over. Your score: ${this.score}`);
			this.nextQuestionIdx = 0;
			this.score = 0;
			if (confirm("Play again?")) {
				this.run();
			}
			return;
		}
		let res = leader.askQuestion(questions[this.nextQuestionIdx]);
		if (res) {
			this.score++;
		} else if (res === null) {
			console.log(`U press Cancel. Game over. Your score is ${this.score}.`);
			return;
		}
		this.nextQuestionIdx++; this.run();
	},
	isQuestionExists() {
		return questions[this.nextQuestionIdx] !== undefined
	},

	init() {
		console.log('Wanna Be a Millionaire? "Cancel" to exit.');
		this.run();
	}

};

game.init()