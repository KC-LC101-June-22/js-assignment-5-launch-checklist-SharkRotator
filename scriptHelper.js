// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
};

function validateInput(input) {
   if (input === ""){
    return "Empty"
   }else if (isNaN(input)){
    return "Not a Number"
   } else {
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotMessages = [`Pilot ${pilot} is ready for launch`, `Co-pilot ${copilot} is ready for launch`];
    let fuelLevelMessage = ["Fuel level too low for launch","Fuel level high enough for launch"];
    let cargoLevelMessage = ["Cargo level low enough for launch", "Cargo level too high for launch"];
    let h2 = document.getElementById("launchStatus");
    
    
    // 1st option cargo lvl is too high, 2nd option fuel lvl is too low, 3rd option neither level is acceptable
    let printOuts= [`<ol>
        <li id="pilotStatus" data-testid="pilotStatus">${pilotMessages[0]}</li>
        <li id="copilotStatus" data-testid="copilotStatus">${pilotMessages[1]}</li>
        <li id="fuelStatus" data-testid="fuelStatus">${fuelLevelMessage[1]}</li>
        <li id="cargoStatus" data-testid="cargoStatus">${cargoLevelMessage[0]}</li>
    </ol>`,
    `
    <ol>
        <li id="pilotStatus" data-testid="pilotStatus">${pilotMessages[0]}</li>
        <li id="copilotStatus" data-testid="copilotStatus">${pilotMessages[1]}</li>
        <li id="fuelStatus" data-testid="fuelStatus">${fuelLevelMessage[1]}</li>
        <li id="cargoStatus" data-testid="cargoStatus">${cargoLevelMessage[1]}</li>
    </ol>`,
    `
    <ol>
        <li id="pilotStatus" data-testid="pilotStatus">${pilotMessages[0]}</li>
        <li id="copilotStatus" data-testid="copilotStatus">${pilotMessages[1]}</li>
        <li id="fuelStatus" data-testid="fuelStatus">${fuelLevelMessage[0]}</li>
        <li id="cargoStatus" data-testid="cargoStatus">${cargoLevelMessage[0]}</li>
    </ol>`,
    `<ol>
        <li id="pilotStatus" data-testid="pilotStatus">${pilotMessages[0]}</li>
        <li id="copilotStatus" data-testid="copilotStatus">${pilotMessages[1]}</li>
        <li id="fuelStatus" data-testid="fuelStatus">${fuelLevelMessage[0]}</li>
        <li id="cargoStatus" data-testid="cargoStatus">${cargoLevelMessage[1]}</li>
    </ol>`];

    if(validateInput(cargoLevel) ==="Not a Number" || validateInput(fuelLevel)==="Not a Number"){
        alert("Cargo level and/or Fuel Level need to be a number");
        return
     }else if(!pilot || !copilot || !fuelLevel || !cargoLevel){
        alert("All input required!");
        return
     }


    if(cargoLevel <10000 && fuelLevel >10000){
        list.innerHTML = printOuts[0]
        list.style.visibility = "visible";
        h2.style.color = "green";
        h2.innerHTML = "Shuttle Ready for Launch";
    }else if(cargoLevel>10000 && fuelLevel>10000){
        list.innerHTML = printOuts[1];
        list.style.visibility = "visible"
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
        list.style.visibility = "visible"
    }else if(cargoLevel<10000 && fuelLevel<10000){
        list.innerHTML = printOuts[2];
        list.style.visibility = "visible"
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";   
    }else {
        list.innerHTML = printOuts[3];
        list.style.visibility = "visible"
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for launch";
    }



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let selectedPlanet = Math.floor(Math.random()*planets.length);
    return planets[selectedPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
