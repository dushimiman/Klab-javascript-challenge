// create array contain product name and their price

const products = [
    {product:"Bike", price:"100"},
    {product:"TV", price:"200"},
    {product:"Album", price:"10"},
    {product:"Book", price:"5"},
    {product:"Phone", price:"500"},
    {product:"Computer", price:"1000"},

]
// full price of all products combined
let sum = [100,200,10,5,500,100].reduce(function(previousValue, currentValue){
    return previousValue + currentValue
}, 100);
 console.log("SUM:", sum)

console.log(products)
// for each
products.forEach(item => {
    console.log(`the price for ${item.product} is ${item.price}`);
})
// Map
const newPrice = products.map(item =>{
    return {product:item.name, price:item.price * 2};
})
console.log(newPrice);
// Filter
const productList = products.filter(item => {
    return item.product === 'Book';
})
console.log(productList);
//sort
 const sortedArray = products.sort((a,b) =>{
     return b.price.localeCompare(a.price)
 })
 console.log(sortedArray)