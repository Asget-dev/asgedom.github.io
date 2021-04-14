class Animale{
    constructor(name){
        this.name = name;
        this.speed=0;
    }

    run(speed){
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}.`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

}

class Rabit extends Animale{
    //constructor(){} defualt constractor
    // super();
    hide(){
        console.log(`${this.name} hides!`)
    }
    //oerriding
    stop(){
        super.stop();//means the parent in this case animal
        this.hide();
    }
}
let rabbit = new Rabit("White rabit");//call constractor
rabbit.stop();
rabbit.run(5);
rabbit.hide();


//animal--> animal.prototaype
//rabit---->rabit.prototype
//new rabbit--->rabit--->animal