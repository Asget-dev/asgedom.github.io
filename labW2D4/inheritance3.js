class User{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}

class Student extends User{
    constructor(fname,lname,age,grades){
        super(fname,lname,age);
        this.grades = grades;
    }
    toString(){
        console.log(`${this.fname } ${this.lname} ${this.age}  ${this.grades} `);
    }
}

result = new Student("Asgedom","Nega",20,"A").toString();


