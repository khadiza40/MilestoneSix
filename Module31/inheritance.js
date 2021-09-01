// Module31/inheritance.js
class TeamMember{
    name;
    address;
    role= 'Student care web dev';
    constructor(name,address){
        this.name =name;
        this.address = address;

    }
}
class support{
    name;
    adress;
    role = 'support web dev';
    constructor(name,adress){
        this.name  = name;
        this.adress = adress;
    }
    startSession (){
        console.log('start support session');

    }
}
class Studentcare{
    name;
    address;
    role= 'Student care web dev';
    constructor(name,address){
        this.name =name;
        this.address = address;

    }
    buildRoutine (student){
        console.log(this.name, 'Build a Routine for ', student);
    }
}
class Naptun{
    name;
    address;
    designation = 'App create';
    constructor(name,address){
        this.name =name;
        this.address = address;

    }
    buildRoutine (version){
        console.log(this.name, 'Build a version ', version);
    }
}