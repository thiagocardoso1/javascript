let val = [5, 8, 9, 4, 3]
val.sort()
console.log(`${val.length}`)

/*
for (var pos = 0; pos <= val.length; pos++) {
    console.log(`Na posição ${pos} temos ${val[pos]}`)
}
*/

for (let pos in val) [
    console.log(`Na posição ${pos} temos ${val[pos]}`)
]