const products = [
    {name:'smart watch', Price:3000, color:'black'},
    {name:'sticky note', Price:30, color:'pink'},
    {name:'water glass', Price:3, color:'white'},
]
console.log(products.map(product => product.name));
products.forEach(product => console.log(product));