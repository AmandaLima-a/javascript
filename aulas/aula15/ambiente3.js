let num = [5, 9, 8, 3, 2]
// num[5] = 6  <= coloque o valor 6 na posição 5
// num.push(6) <=
console.log(num.length) // numero de elementos
console.log(num)
console.log(num.sort())
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/

for (let pos in num) {
    console.log(num[pos])
}