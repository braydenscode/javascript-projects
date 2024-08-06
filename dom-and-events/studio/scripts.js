// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(event) {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function(event) {
      let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff");
      if (confirmation === true) {
            let flightStatus = document.getElementById("flightStatus");
            let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            flightStatus.innerHTML = "Shuttle in flight.";
            spaceShuttleHeight.innerHTML = "10000";
            console.log("Confirms");
        }
    })
    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "";
        spaceShuttleHeight.innerHTML = "0";
    })
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.")
        if (confirm === true) {
            flightStatus.innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = "0";
        }
    })

    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let currentPosition = 0;
    let position = rocket.style.position = "relative";
    up.addEventListener("click", function (event) {

        position.style.top = "10px";
    })
    down.addEventListener("click", function (event) {
        rocket.style.marginBottom = "10px";
    })
    right.addEventListener("click", function (event) {
        rocket.style.marginTop = 10 + "px";
    })
    left.addEventListener("click", function (event) {

    })
})