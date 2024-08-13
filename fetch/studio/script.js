//TODO: Add Your Code Below
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    response.json().then( function (json) {
        let displayScreen = document.getElementById("container");
        let jsonstr = [];
        json.sort(function(a, b) {return b.hoursInSpace - a.hoursInSpace});

        // let totalHours = 0;
        // let newArray = [];
        // for (astronaut of json) {
        //     if (astronaut.hoursInSpace < totalHours) {
        //         // newArray.unshift(astronaut);
        //         astronaut.hoursInSpace.sort(function(a,b) {
        //             return a - b;
                    
        //         })
        //     } else {
        //         newArray.push(astronaut);
        //     }
        //     totalHours = astronaut.hoursInSpace
        //     console.log(newArray)
        // }
        json.sort(function(a, b) {return b.hoursInSpace - a.hoursInSpace});
        console.log(json)

        for(astronaut of json){
            jsonstr.push(`
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
                `);  
        }
        displayScreen.innerHTML = jsonstr.join('');
    });
});