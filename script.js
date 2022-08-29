// Write your JavaScript code here!

//consts/require statements dont allow code to run properly 

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper")
window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets);
       console.log(randomPlanet);
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
   });
   let form = document.querySelector("form");
   console.log(form);
   form.addEventListener("submit", function (event){

    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems")
    
    console.log(list)
    //event.preventDefault()

    formSubmission (document, list, pilot, copilot, fuelLevel, cargoLevel);

    event.preventDefault()
   });
   
});