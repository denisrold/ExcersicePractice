const gradingStudent2 = (grades:number[]):number[]=>{

    const roundedGrades: number[] = grades.map(grade => {
        if(grade<38)return grade;
        else{
            let nextMult:number = Math.ceil(grade/5)*5;
            return nextMult - grade < 3?nextMult:grade;
        }
    })
    return roundedGrades;
}



const grading2 = [84, 37, 67, 95, 53];

console.log(gradingStudent2(grading2));