class House{
    constructor(name) {
        this.name = name;
        this.lakok = [];
    }

    csenget() {
        // Valaki véletlen szerűen megy ajtót nyitni a bent levőkből
        if (this.lakok.length > 0) {
            let i = Math.floor(Math.random() * this.lakok.length);
            return "Máris nyitom az ajtót! \n" + this.lakok[i].beszel();
        }
    }

    hazajon(obj) {
        this.lakok.push(obj);
    }
}

class Ember{
    constructor(name) {
        this.name = name;
        this.bemut = "Üdvözlöm, a nevem: " + this.name;
    }

    beszel() {
        alert(this.bemut);
    }
}

class Ferfi extends Ember{
    constructor(name, kor) {
        super(name);
        this.kor = kor;
    }
}

class Women extends Ember{
    constructor(name, kor) {
        super(name);
        this.kor = kor;
    }
}

