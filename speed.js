function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
    
    if (speed > speedLimit) {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
    }
    
    return demeritPoints;
}

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