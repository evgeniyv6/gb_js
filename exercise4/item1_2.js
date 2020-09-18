"use strict";


/////ES5/////

function PostEs5(author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

PostEs5.prototype.edit = function(text='new text is empty') {
	this.text = text;
};

function AttachedPostEs5(author, text, date) {
	PostEs5.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.constructor = AttachedPostEs5;
AttachedPostEs5.prototype.makeTextHighlighted = function() {
	this.highlighted = true;
};


// output
console.log('--= ES5 =--');
const postes5 = new PostEs5("Author1", "author1 text", new Date());
console.log(postes5);
postes5.edit("new text");
console.log('');
console.log(postes5);
console.log('');
const attaches5 = new AttachedPostEs5("Attach author1", "attach1 text", new Date());
console.log(attaches5);
attaches5.edit("new attach text"); 
attaches5.makeTextHighlighted();
console.log('');
console.log(attaches5);

/////ES6/////

class PostEs6 {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}

	edit(text='new text is empty') {
		this.text = text;
	}
}

class AttachedPostEs6 extends PostEs6 {
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = false;
	}
	makeTextHighlighted() {
		this.highlighted = true;
	}

}

// output
console.log('');
console.log('--= ES6 =--');
const postes6 = new PostEs6("Author2", "author2 text", new Date());
console.log(postes6);
postes6.edit("new text");
console.log(postes6);
console.log('');
const attaches6 = new AttachedPostEs6("Attach author2", "attach2 text", new Date());
console.log(attaches6);
attaches6.edit("new attach text");
attaches6.makeTextHighlighted()
console.log(attaches6);
