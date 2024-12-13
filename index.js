const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Eve", grade: "B" },
];

const r = students.reduce((rs, student) => {
  if (rs[student.grade]) {
    rs[student.grade].push(student.name);
  } else {
    rs[student.grade] = [student.name];
  }
  return rs;
}, {});

console.log(r);
