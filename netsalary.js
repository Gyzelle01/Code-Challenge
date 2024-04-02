//Q3: Net Salary Calculator (Toy Problem)
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below. 
function calculateNetSalary(basicSalary, benefits) {
    const taxThresholds = [0, 24000, 32333, 40333, 48333, 57000, 63000];
    const taxRates = [0.1, 0.15, 0.2, 0.25, 0.3, 0.32, 0.34];
    const nssfRate = 0.06;
     // NSSF contribution rate
    const nhifRates = [0, 500, 750, 1000, 1500, 1700, 2000];

    const grossSalary = basicSalary + benefits;
    let payee = 0;
    let nssfDeductions = 0;
    let nhifDeductions = 0;

    // Calculate Payee (Tax)
    let remainingSalary = grossSalary;
    for (let i = 1; i < taxThresholds.length; i++) {
        if (remainingSalary <= 0) break;
        const taxableAmount = Math.min(remainingSalary, taxThresholds[i] - taxThresholds[i - 1]);
        payee += taxableAmount * taxRates[i - 1];
        remainingSalary -= taxableAmount;
    }

    // Calculate NSSF Deductions
    nssfDeductions = Math.min(grossSalary * nssfRate, 2000);

    // Calculate NHIF Deductions
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossSalary <= (i + 1) * 6000) {
            nhifDeductions = nhifRates[i];
            break;
        }
    }

    // Calculate Net Salary
    const netSalary = grossSalary - payee - nssfDeductions - nhifDeductions;
    
    return {
        grossSalary,
        payee,
        nssfDeductions,
        nhifDeductions,
        netSalary
    };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits) && basicSalary >= 0 && benefits >= 0) {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Payee (Tax):", salaryDetails.payee);
    console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
    console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);
} else {
    console.log("Please enter valid numerical values for salary and benefits.");
}