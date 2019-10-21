"use strict";

const myLink = "http://petlatkea.dk/2019/hogwartsdata/students.json";

function loadData(link) {
    fetch(link).then(e => e.json()).then(data => show(data));
}
function show(data){
    // "Hacks" me into the list, this was actully really easy
    data.push({
        fullname: "Simon Erasmus Johansen",
        gender: "boy",
        house: "Hufflepuff"
    });

    console.log(data);
    data.forEach(object=>{
        //Catch the different objects and made each their own array
        const fullname = object.fullname.split(" ");
        const houses = object.house.split(" ");
        const gender = object.gender.split(" ");

        //Go though each array and remove any that is empty
        //https://stackoverflow.com/questions/33884033/how-can-i-remove-empty-object-in-from-an-array-in-js
        let cleanName = fullname.filter(value => Object.keys(value).length !== 0);
        let cleanHouse = houses.filter(value => Object.keys(value).length !== 0);
        let cleanGender = gender.filter(value => Object.keys(value).length !== 0);


        //Count houses


        //Output the names arcording to length all as lower case, then CSS will make the first char uppercase
        if(cleanName.length > 2){
            console.log(`${cleanName[0].toLowerCase()} ${cleanName[1].toLowerCase()} ${cleanName[2].toLowerCase()} got ${cleanName.length} names`);
            console.log(cleanHouse[0].toLowerCase());
        }else if(cleanName.length > 1){
            console.log(`${cleanName[0].toLowerCase()} ${cleanName[1].toLowerCase()} got ${cleanName.length} names`);
            console.log(cleanHouse[0].toLowerCase());
        }else{
            console.log(`${cleanName[0].toLowerCase()} only got ${cleanName.length} name`);
            console.log(cleanHouse[0].toLowerCase());
        }


        //console.log(object);

    });
}
loadData(myLink);
