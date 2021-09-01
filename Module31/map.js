 numbers =[2,3,4,5,6,7];
const output = [];
const doubleIt = number => number*2;
for(const number of numbers){
   const result = doubleIt(number);
    output.push(result);
}
console.log(output);

// 1.loop through each element 
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

const queve = numbers.map(x => x*3);
console.log(queve);
console.log(numbers.map(x => x*2));

const friends = ['Tanha' , 'Shama' , 'Suma'];
console.log(friends.map(friend => friend.length));
