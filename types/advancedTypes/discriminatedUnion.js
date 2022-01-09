"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        // Narrow down the union to be used.
        case "bird":
            speed = animal.flyingSpeed; // accessing the field of the type
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const paragraph = document.querySelector("p");
const paragraph2 = document.getElementById("p");
// Inferring an element from another file.
//https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
