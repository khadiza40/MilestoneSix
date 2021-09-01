const products = [
    {name:'smart watch', Price:3000, color:'black'},
    {name:'sticky note', Price:30, color:'pink'},
    {name:'water glass', Price:3, color:'white'},
]
console.log(products.map(product => product.name)); //map kono kaj kore then seta return  kre array te
products.forEach(product => console.log(product)); //for each return kre na , sudhu kaj kore