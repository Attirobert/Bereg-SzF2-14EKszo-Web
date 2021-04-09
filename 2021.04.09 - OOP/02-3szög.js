class Haromszog{

    // Konstruktorral létrehozom a tagváltozókat
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.f = (this.a + this.b > this.c) && (this.a + this.c > this.b) && (this.b + this.c > this.a);
    }

    Kerulet() {
        if (this.f) {
            alert("A háromszög kerülete = " + (this.a + this.b + this.c));
        } else {
            alert("Rossz adatok!");
        }
    }
}