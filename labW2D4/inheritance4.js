class User{
    constructor(fname,lname,age,grades){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.grades = grades;
    }
}

class Student extends User{
    //generated for extending classes without own constractor // default constractor
    constructor(...args){
        super(...args);
        // this.grades = grades;
    }
    toString(){
        console.log(`${this.fname } ${this.lname} ${this.age}  ${this.grades} `);
    }
}

result = new Student("Asgedom","Nega",20,[90,80,70]).toString();


