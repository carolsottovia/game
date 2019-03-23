// Write your JS here
const hero = {  // Declare a variable `hero` and assign it an object
    name: "Sotto",  // Hero object should have a name property. The value of name should be a string.
    heroic: true, // Hero object should have a heroic property. The value of heroic should be a boolean.
    inventory: [], // Hero object should have an inventory property. The value of inventory should be an empty array
    health: 10, // Hero object should have an health property. The value health should be the number 10
    weapon: { type: "sword", damage: 2 } //Hero object should have a weapon property. The value of weapon is an object with a type property which is a string and damage property which is 2
}


function rest(hero) { // Functions `rest, pickUpItem and equipWeapon` are all defined
    if (hero.health == 10) {
        alert("Hero already has 10 Health") //Creates an alert popup with a message, If the health property of that object already has the value 10
    }
    else {
        hero.health = 10 //(re)assigns the health property of that object the value 10
    }
    return hero //Returns that same object from the function
}

const btnInn = document.getElementById('inn')
    .onclick = rest.bind(null, hero) //When clicked will reset the `health` property on the hero global variable to 10; bind means that I can that I can use the health from hero global


function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon) //Adds the weapon-like object as the last element of the inventory array of the hero-like object
}

const btnDagger = document.getElementById("dagger")
    .onclick = function () { //If the inventory of the hero-like object is empty, the function should do nothing
        const weaponTest = { type: 'dagger', damage: 2 } //And reassigns the `weapon` property to the first element of the inventory array
        pickUpItem(hero, weaponTest)
    }

function equipWeapon(hero) { // Functions `equipWeapon` is defined
    if (hero.inventory.length > 0) { //reassigns the `weapon` property to the first element of the inventory array
        hero.weapon = hero.inventory[0]
    }
}


const btnBag = document.getElementById("bag") //There is a IMG element with the id `bag`
    .onclick = () => equipWeapon(hero) //When the bag is clicked it will equip the hero with the first item in the inventory array


console.log(hero)  
