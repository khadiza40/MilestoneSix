// Module31/Filter.js
numbers =[2,3,4,5,6,7];
const products = [
    {name:'smart watch', Price:3000, color:'black'},
    {name:'sticky note', Price:30, color:'pink'},
    {name:'water glass', Price:3, color:'white'},
]
console.log(products.filter(x => x.Price >10 ));
console.log(numbers.filter(x => x > 4 ));
console.log(products.filter(x => x.color == "black" )); //array akare dibe
console.log(products.find(x => x.color == "black" )); //element ta dibe