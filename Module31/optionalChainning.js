//destructing
const myObject = { x: 2, y: 45, o: 23, p: 34 }
const { x, p } = myObject;
console.log(x, p);

const [w, y, z] = [23, 45, 67];
console.log(y, z, w);

//
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fucka' },
    web: {
        work: 'web develop', employee: 22,
        language: {
            name: 'PHP',
            framework: {
                fname: 'laravel', tech: {
                    first: 'html',
                    second: 'CSS',
                    third: 'JS'

                }
            }
        }
    }
}
console.log(company.web.language.framework.tech.third);
console.log(company.web.language.framework.tech?.fourth); // ? mark confirm optional chain
//if have value in object /array then  if have question mark then 
const { fname } = company.web.language.framework;
console.log(fname);