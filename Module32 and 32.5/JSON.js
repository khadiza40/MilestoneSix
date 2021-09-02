//javascript object notation =     json
const user = {id:11, name:'Khadiza' , job : 'developer'};
const stringfied = JSON.stringify(user);
console.log(stringfied);
console.log(user);

const shop= {
    name : 'Khadiza',
    road:'Thana',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name:'Kakui',
        profession:'Teacher'
    },
    isExpensive : false
}
const shopStringfied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringfied);
const convertes = JSON.parse(shopStringfied);
console.log(convertes);
console.log(convertes.owner);