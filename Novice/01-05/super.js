class Hewan{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hi");
    }
    info() {
        this.greet() ;
        console.log(`nama saya ${this.name}`);
        console.log(`umur saya adalah ${this.age}`);
    }
}

class Dog extends Hewan {
    constructor (name,age ,breed){
        super(name, age);
        this.breed = breed
    }

    info() {
        this.greet() ;
        console.log(`nama saya ${this.name}`);
       
        console.log(`saya adalah jenis ${this.breed}`);

        console.log(`umur saya adalah ${this.age}`);
        const humanAge = this.getHumanAge();
        console.log(`umur saya ${humanAge} dalam umur manusia`);
    }

    getHumanAge() {
        return this.age *7;
    }
}

const dog = new Dog("bruno", 14, "bulldog");
dog.info();

