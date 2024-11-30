const readline = require("readline");

function calculateNetSalary() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter your basic salary: ", (basicSalaryInput) => {
        rl.question("Enter your benefits: ", (benefitsInput) => {
            const basicSalary = parseFloat(basicSalaryInput);
            const benefits = parseFloat(benefitsInput);

            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input. Please enter positive numbers.");
                rl.close();
                return;
            }

            const grossSalary = basicSalary + benefits;

            // PAYE Calculation (Tax based on brackets)
            let tax = 0;
            if (grossSalary <= 24000) {
                tax = grossSalary * 0.1; // 10%
            } else if (grossSalary <= 32333) {
                tax = grossSalary * 0.25; // 25%
            } else {
                tax = grossSalary * 0.3; // 30%
            }

            // NHIF Deductions (based on gross salary)
            let nhif = 0;
            if (grossSalary <= 5999) nhif = 150;
            else if (grossSalary <= 7999) nhif = 300;
            else if (grossSalary <= 11999) nhif = 400;
            else if (grossSalary <= 14999) nhif = 500;
            else if (grossSalary <= 19999) nhif = 600;
            else if (grossSalary <= 24999) nhif = 750;
            else if (grossSalary <= 29999) nhif = 850;
            else if (grossSalary <= 34999) nhif = 900;
            else if (grossSalary <= 39999) nhif = 950;
            else if (grossSalary <= 44999) nhif = 1000;
            else if (grossSalary <= 49999) nhif = 1100;
            else if (grossSalary <= 59999) nhif = 1200;
            else if (grossSalary <= 69999) nhif = 1300;
            else if (grossSalary <= 79999) nhif = 1400;
            else if (grossSalary <= 89999) nhif = 1500;
            else if (grossSalary <= 99999) nhif = 1600;
            else nhif = 1700;

            // NSSF Contribution (6% of gross salary)
            const nssf = grossSalary * 0.06;

            // Calculate Net Salary
            const netSalary = grossSalary - tax - nhif - nssf;

            // Output the details
            console.log("\n--- Salary Breakdown ---");
            console.log(`Gross Salary: ${grossSalary}`);
            console.log(`PAYE (Tax): ${tax}`);
            console.log(`NHIF Deduction: ${nhif}`);
            console.log(`NSSF Deduction: ${nssf}`);
            console.log(`Net Salary: ${netSalary}`);

            rl.close();
        });
    });
}

// Run the function
calculateNetSalary();
