// destructuring.js
const fish = { id: 58, name: 'Hilsha', Price: 590, phone: '01755861962', adress: 'Chadpur', dress: 'silver' };

const { phone, Price, dress, id } = fish;
console.log(Price);
console.log(dress);
console.log(id);

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fucka' },
    web: {
        work: 'web develop', employee: 22,
        language: {
            name: 'PHP',
            framework: {
                fname: 'laravel'
            }
        }
    }
}
const work1 = company.name;
//const { work, framework } = company.web;
const { food } = company.ceo;
const { web, employee, language, fname, name, framework } = company.web.language.framework.fname;
console.log(work1);
console.log(company.ceo);
console.log(food);
console.log(fname);

