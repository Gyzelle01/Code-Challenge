//Q1: Student Grade Generator (Toy Problem)
// Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
// calculate grade and enter a valid mark between 0 and 100
function main() {
    const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
    
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        console.log("The student's grade is:", grade);
    } else {
        console.log("Please enter a valid mark between 0 and 100.");
    }
}

main();