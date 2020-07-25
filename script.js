// Write your JavaScript code here!

//Adding Alerts
window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               // Access the JSON in the response
               response.json().then( function(json) {
                  //console.log(json[0]); This gets me the first object in the array. Aka Planet Tatooine
                  const missionTarget = document.getElementById("missionTarget");
                  missionTarget.innerHTML = `
                  <h2> Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li> Diameter: ${json[0].diameter}</li>
                     <li> Star: ${json[0].star}</li>
                     <li> Distance from Earth: ${json[0].distance}</li>
                     <li> Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img src= ${json[0].image}>`

               });
            });
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
   
   
   let form = document.querySelector("form");
   
   
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("Oops, you forgot something. All fields are required!");
         // stop the form submission
         
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
            
            }

      document.getElementById("pilotStatus").innerHTML = `${pilotNameValue} is good to go.`;
      document.getElementById("copilotStatus").innerHTML = `${copilotNameValue} is ready to shake and bake!`;
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      if (Number(fuelLevelValue)<10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `${fuelLevelValue}L isn't going to get us far...`;
         launchStatus.innerHTML = `Where Do You Think You're Going???`;
         launchStatus.style.color = "red";

      };

      if(Number(cargoMassValue)>10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `Y'all need to lose some weight! ${cargoMassValue} is too much.`;
         launchStatus.innerHTML = `Where Do You Think You're Going???`;
         launchStatus.style.color = "red";

      };

      if(Number(fuelLevelValue) >= 10000 && Number(cargoMassValue) <= 10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = `Tonight We Fly!!!`;
         launchStatus.style.color = "green";
      };

      if(cargoMassValue === "") {
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "orange";
         launchStatus.style.fontStyle="italic"
      }

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
