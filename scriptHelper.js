// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(input) {
   if (input === ""){
    return ("Empty")
   }
   if (isNaN(input)){
    return "Not a Number"
   } else {
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let errorMessages = ["User Input Required!", "Not a number", "Invalid name"];

    if (!pilot || !copilot || !fuelLevel|| !cargoLevel){
        alert(errorMessages[0])
    }

    if ( isNan(fuelLevel) || isNaN(cargoLevel)){
        alert(errorMessages[1])
    }

    let pilotListValue = `${pilot} is Ready!`
    
    let fuelLevelMessage;
    if (Number(fuelLevel) < 10000){
        fuelLevelMessage = "Wahetver means its not good"
    } else {
        fuelLevelMessage = "Is Good."  
    }

    list.innerHtml = `
    <ol>
        <li id="pilotStatus" data-testid="pilotStatus">${pilot} Ready</li>
        <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
        <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    </ol>`;

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
