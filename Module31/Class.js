// Module31/Class.js
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
const amir = new support('Amir Islam' , 'BD');
console.log(amir);
console.log(new support('Khadiza',"BD"));
amir.startSession();