const readline = require("readline");

function speedDetector() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the car speed (in km/h): ", (speed) => {
        const speedValue = parseInt(speed);

        if (isNaN(speedValue) || speedValue < 0) {
            console.log("Invalid input. Please enter a positive number.");
        } else if (speedValue <= 70) {
            console.log("Ok");
        } else {
            const points = Math.floor((speedValue - 70) / 5);
            if (points > 12) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${points}`);
            }
        }

        rl.close();
    });
}

// Call the function
speedDetector();
