/*const gradingStudent = (grades) => {
  const roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      continue;
    } else {
      //consigo el proximo multiplo de 5 dentro de lo grados del array.
      const nextMultipleOf5 = Math.ceil(grades[i] / 5) * 5;
      console.log(nextMultipleOf5);
      if (nextMultipleOf5 - grades[i] < 3) {
        roundedGrades.push(nextMultipleOf5);
      } else {
        roundedGrades.push(grades[i]);
      }
    }
  }
  return roundedGrades;
};*/

const gradingStudent = (grades) => {
  const roundedGrades = grades.map((grade) => {
    if (grade < 38) {
      return grade;
    } else {
      const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
      return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
    }
  });
  return roundedGrades;
};

const grading = [84, 37, 67, 95, 53];

console.log(gradingStudent(grading));
