//TODO: Add Your Code Below
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    response.json().then( function (json) {
        let displayScreen = document.getElementById("container");
        json.sort(function(a, b) {return b.hoursInSpace - a.hoursInSpace});
        console.log(json)
        displayScreen.innerHTML += `<h3>Count: ${json.length}</h3>`;
        for(let i = 0; i<json.length; i++){
            if (json[i].active) {
                displayScreen.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li style="color:green;">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                    `;  
            } else {
            displayScreen.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
                `;  
            }
        }
    });
});