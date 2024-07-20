class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

console.log(tigger);

class Felis extends Felidae {
	constructor() {
	super();
		this.pupils = 'vertical';
	}
}

class Housecat extends Felis {
	constructor() {
	super();
		this.personality = 'judgemental';
	}
}

let kitty = new Housecat();

console.log(kitty);