//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.type = "Digital"
stopwatch.color = "Green"
stopwatch.currentTime = "12"
stopwatch.weight = "30g"

stopwatch.tellTime = function(time) {
    console.log(`The Current time is ${time}`)
}

stopwatch.start = function() {
    console.log("Start")
}

stopwatch.stop = function() {
    console.log("Stop")
}



