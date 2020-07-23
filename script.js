// Write your JavaScript code here!
//Adding Alerts
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("Oops, you forgot something. All fields are required!");
         // stop the form submission
         event.preventDefault();
         }

      // let shuttleArrary = []

      // shuttleArrary.push(pilotName, copilotName, fuelLevel, cargoMass);

      // for (let i = 0; i < shuttleArrary.length; i++) {
      //    if (shuttleArrary[i] === "") {
      //       alert("Oops, you forgot something. All fields are required!");
      //       // stop the form submission
      //       event.preventDefault();
      //    }
      // }


      let pilotNameValue = pilotName.value;
      let copilotNameValue = copilotName.value
      let fuelLevelValue = fuelLevel.value
      let cargoMassValue = cargoMass.value


      //Need to find the data type that is entered into the boxes...
         // if(typeof(pilotNameValue) !== "string") {
         //    alert("Uh oh! Someone did not enter valid info :/");
         //    // stop the form submission
         //    event.preventDefault();
         // }

         // if(typeof(copilotNameValue) !== "string") {
         //    alert("Uh oh! Someone did not enter valid info :/");
         //    // stop the form submission
         //    event.preventDefault();
         // }

         
         // if (isNaN(fuelLevelValue)) {
         //    alert("Uh oh! Someone did not enter valid info :/");
         //    // stop the form submission
         //    event.preventDefault();
         // }


         // if (isNaN(cargoMassValue)) {
         //    alert("Uh oh! Someone did not enter valid info :/");
         //    // stop the form submission
         //    event.preventDefault();
         // }
         
         // Originally wrote the aobve two conditionals and then realized that I could do the same thing in a single conditional
         if (isNaN(fuelLevelValue) || isNaN(cargoMassValue)) {
            alert("Uh oh! Someone did not enter valid info :/");
            // stop the form submission
            event.preventDefault();
            }

      document.getElementById("pilotStatus").innerHTML = `${pilotNameValue} is good to go.`;
      document.getElementById("copilotStatus").innerHTML = `${copilotNameValue} is ready to shake and bake!`
      
   });

});

//Updating Shuttle Requirements 
// function myFunction() {
//    document.getElementById("").style.visibility = "visible";
//  }


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
