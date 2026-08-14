let musketeers = ["Athos", "Porthos", "Aramis"]

console.log("Using a standard for loop:")
for (i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}


musketeers.push("D'Artagnan")

console.log("\nUsing forEach:")
musketeers.forEach(musketeer => {
    console.log(musketeer);
})


musketeers.splice(2,1)

console.log("\nUsing for...of:")
for (let musketeer of musketeers) {
    console.log(musketeer)
}

