// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(event) {

    let altitude = 0;

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function(event) {
      let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff");
      if (confirmation === true) {
            let flightStatus = document.getElementById("flightStatus");
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            flightStatus.innerHTML = "Shuttle in flight.";
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    })
    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
    })
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.")
        if (confirm === true) {
            flightStatus.innerHTML = "Mission aborted.";
            resetRocket();
        }
    })

    let rocket = document.getElementById("rocket");
    let rocketPosX = 0;
    let rocketPosY = 0;

    document.addEventListener("click", function (event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "right"&& rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
    });

    function resetRocket() {
        document.getElementById("shuttleBackground").style.backgroundColor = "";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    }

});