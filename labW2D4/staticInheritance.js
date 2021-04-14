class Animale{
    constructor(name , speed){
        this.name = name;
        this.speed=speed;
    }

    run(speed = 0){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`)
    }

    static compare(animalA, animalB){
        return animalA.spped - animalB.speed;
    }
}

class Rabit extends Animale{
    hide(){
        console.log(`${this.name} hides!`)
    }
}
let rabbits =[  new Rabit("White rabit",20),//call constractor
                new Rabit("Ahite rabit",10)]//call constractor
// rabbit.run(5);
console.log(rabbits.sort(Rabit.compare));
