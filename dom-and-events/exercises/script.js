function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    function liftoff() {
        paragraph.innerHTML = "Houston, we have liftoff!"
        console.log("Liftoff achieved.");
    };

    button.addEventListener("click", liftoff);

    missionAbort.addEventListener("mouseover", event => {
        let element = event.target;
        element.style.backgroundColor = "red";
        console.log("Hovering abort!");
    });

    missionAbort.addEventListener("mouseout", event => {
        let element = event.target;
        element.style.backgroundColor = "";
        console.log("Abort avoided.");
    });

    missionAbort.addEventListener("click", function() {
    let boolean = confirm("Are you sure you want to abort the mission?");
     if (boolean === true) {
        paragraph.innerHTML = "Mission aborted! Space shuttle returning home."
     }
    });
    
}

window.addEventListener("load", init)
