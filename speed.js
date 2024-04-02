//Q2: Speed Detector (Toy Problem)
// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
 
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
    //Use if statements
    if (speed > speedLimit) {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
    
    return demeritPoints;
}
//Give a valid positive speed value
function main() {
    const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));
    
    if (!isNaN(speed) && speed >= 0) {
        const demeritPoints = calculateDemeritPoints(speed);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", demeritPoints);
        }
    } else {
        console.log("Please enter a valid positive speed value.");
    }
}

main();