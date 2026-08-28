//Complete the following program to add the dog object definition.

// TODO: create the dog object here

const dog = {
    name: "Riley",
    species: "German Shepard",
    size: 19,

    bark() {
        return "Grr Grr"
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);