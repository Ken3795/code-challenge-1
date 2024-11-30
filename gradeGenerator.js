const readline = require("readline");

function gradeGenerator() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter student marks (0-100): ", (marks) => {
        const score = parseInt(marks);

        if (score > 100 || score < 0 || isNaN(score)) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        } else if (score > 79) {
            console.log("Grade: A");
        } else if (score >= 60) {
            console.log("Grade: B");
        } else if (score >= 50) {
            console.log("Grade: C");
        } else if (score >= 40) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }

        rl.close();
    });
}

// Call the function
gradeGenerator();
