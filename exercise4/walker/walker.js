"use strict";

const config = {
	rowNum: 10,
	colNum: 10,
};


let game = {
	run() {
		while(true) {
			const direction = mover.getDirection();
			if (direction === null) {
				console.log('Game over.');
				return;
			}
			const nextPoint = mover.getNextPosition(direction);

			if (mover.canMove(nextPoint)) {
				renderer.clear();
				player.move(nextPoint);
				renderer.render();
			}
		}
	},

	init() {
		console.log('Your position on the filed as "o"');
		renderer.render();
		console.log('Type "game.run()" to start');
	}
};

const player = {
	x: 0, 
	y: 0,
	move(nextPoint) {
		this.x = nextPoint.x;
		this.y = nextPoint.y;
	}

};


let renderer = {
	map: "",
	render() {
		for (let row = 0; row < config.rowNum; row++) {
			for (let col = 0;col < config.colNum; col++) {
				if (player.y === row && player.x === col) {
					this.map += 'o ';
				} else {
					this.map += 'x ';
				}
			}
			this.map += '\n'
		}
		console.log(this.map);	
	},

	clear() {
		console.clear();
		this.map = "";
	},
	
};


let mover = {
	canMove(direction) {
		return direction.x >= 0 && direction.x < config.colNum
				&& direction.y >= 0 && direction.y < config.rowNum;
	},
	getDirection() {
		const availDirection = [2,4,6,8,1,3,7,9];
		while (true) {
			let direction = parseInt(prompt('Type number (2,4,6,8 for lines) or (1,3,7,9 for diagonals) where u want to move. "Cancel" to exit.'),10);
			if (isNaN(direction)) {
				return null;
			}
			if (!availDirection.includes(direction)) {
				alert('Wrong answer. U need to select 2,4,6 or 8 to move.');
				continue;
			}
			return direction;
		}
	},
	getNextPosition(direction) {
		const nextPosition = {
			x: player.x, 
			y: player.y,
		}

		switch (direction) {
			case 1:
				nextPosition.y++;
				nextPosition.x--;
				break;
			case 2:
				nextPosition.y++;
				break;
			case 3:
				nextPosition.x++;
				nextPosition.y++;
				break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
		}
		return nextPosition;
	},
};


game.init();







