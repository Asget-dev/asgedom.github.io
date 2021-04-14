class Animal{
    constructor(name){
       console.log('Animla constractor');
       this.name = name;
    }
}
class Rabit extends Animal{
    constructor(name,age){
        super(name);//cal parent's constractor
        this.age = age;
    }
    hide (){
        console.log( this.name + "is hidding--")
    }
    getProfile(){
        console.log(this.name + this. age)
    }
}

// const rabbit = new Rabit();//call the constractor
// const rabbit2 = new Rabit();
// rabbit2.hide();
// const rabbit1 = new Rabit('Ester');
// rabbit1.hide();
// new Rabit("Easter2",20,"asdfadsf").hide();
new Rabit("Easter2",20,"asdfadsf").getProfile();