/** Marksheets of students */
const marksheet = [
  {
    name: "Amisha Rijal",
    class: 12,
    roll: 13,
    subjects: [
      {
        name: "Math",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 50,
        total_marks: "",
      },
      {
        name: "Science",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 50,
        total_marks: "",
      },
      {
        name: "History",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 50,
        total_marks: "",
      },
      {
        name: "English",
        pass_marks: 30,
        practical_marks: 18,
        obtained_marks: 60,
        total_marks: "",
      },
      {
        name: "Statistics",
        pass_marks: 35,
        practical_marks: 18,
        obtained_marks: 50,
        total_marks: "",
      },
    ],
  },

  {
    name: "Santosh Sharma",
    class: 12,
    roll: 11,
    subjects: [
      {
        name: "Math",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 65,
        total_marks: "",
      },
      {
        name: "Science",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 25,
        total_marks: "",
      },
      {
        name: "History",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 100,
        total_marks: "",
      },
      {
        name: "English",
        pass_marks: 30,
        practical_marks: 18,
        obtained_marks: 77,
        total_marks: "",
      },
      {
        name: "Statistics",
        pass_marks: 35,
        practical_marks: 18,
        obtained_marks: 88,
        total_marks: "",
      },
    ],
  },
  {
    name: "Agya Aryal",
    class: 12,
    roll: 11,
    subjects: [
      {
        name: "Math",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 65,
        total_marks: "",
      },
      {
        name: "Science",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 100,
        total_marks: "",
      },
      {
        name: "History",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 100,
        total_marks: "",
      },
      {
        name: "English",
        pass_marks: 30,
        practical_marks: 18,
        obtained_marks: 77,
        total_marks: "",
      },
      {
        name: "Statistics",
        pass_marks: 35,
        practical_marks: 18,
        obtained_marks: 88,
        total_marks: "",
      },
    ],
  },

  {
    name: "Kripa Pokhrel",
    class: 12,
    roll: 11,
    subjects: [
      {
        name: "Math",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 65,
        total_marks: "",
      },
      {
        name: "Science",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 100,
        total_marks: "",
      },
      {
        name: "History",
        pass_marks: 45,
        practical_marks: 18,
        obtained_marks: 100,
        total_marks: "",
      },
      {
        name: "English",
        pass_marks: 30,
        practical_marks: 18,
        obtained_marks: 77,
        total_marks: "",
      },
      {
        name: "Statistics",
        pass_marks: 35,
        practical_marks: 18,
        obtained_marks: 88,
        total_marks: "",
      },
    ],
  },
];

for (let i = 0; i < marksheet.length; i++) {
  // console.log("hello");
  for (let j = 0; j < marksheet[i].subjects.length; j++) {
    marksheet[i].subjects[j].total_marks =
      marksheet[i].subjects[j].obtained_marks +
      marksheet[i].subjects[j].practical_marks;
    // console.log(marksheet[i].subjects[j].total_marks);
    // console.log("hello");
  }
}

let marksheetHTML = "";

marksheet.forEach((element) => {
  marksheetHTML += `
  <div class="mark-sheet">
    <h2>${element.name}</h2>
    <p>Class: <span>${element.class}</span></p>
    <p>Roll Number: <span>${element.roll}</span></p>

    <table style="width:100%">
    <thead>
      <th>Subject</th>
      <th>Pass Marks</th> 
      <th>Practical Marks</th> 
      <th>Marks Obtained</th>
      <th>Total Marks</th>
      </thead>
      <tbody class="table-body">
      
      ${element.subjects
        .map((x) => {
          return `<tr>
      <td>${x.name}</td>
      <td>${x.pass_marks}</td>
      <td>${x.obtained_marks}</td>
      <td>${x.practical_marks}</td>
      <td>${x.obtained_marks + x.practical_marks}</td>
      </tr>`;
        })
        .join("\n")}
      </tbody>
    </table>
    </div>
  `.trim();
});
const getMarksheet = document.getElementById("marksheet");
getMarksheet.innerHTML = marksheetHTML;

// <tr>
//   <td>${element.subjects[0].name}</td>
//   <td>${element.subjects[0].pass_marks}</td>
//   <td>${element.subjects[0].obtained_marks}</td>
//   <td>${element.subjects[0].practical_marks}</td>
//   <td>${
//     element.subjects[0].obtained_marks + element.subjects[0].practical_marks
//   }</td>
// </tr>
// <tr>
//   <td>${element.subjects[1].name}</td>
//   <td>${element.subjects[1].pass_marks}</td>
//   <td>${element.subjects[1].obtained_marks}</td>
//   <td>${element.subjects[1].practical_marks}</td>
//   <td>${
//     element.subjects[1].obtained_marks + element.subjects[1].practical_marks
//   }</td>
// </tr>
// <tr>
//   <td>${element.subjects[2].name}</td>
//   <td>${element.subjects[2].pass_marks}</td>
//   <td>${element.subjects[2].obtained_marks}</td>
//   <td>${element.subjects[2].practical_marks}</td>
//   <td>${
//     element.subjects[2].obtained_marks + element.subjects[2].practical_marks
//   }</td>
// </tr>
// <tr>
//   <td>${element.subjects[3].name}</td>
//   <td>${element.subjects[3].pass_marks}</td>
//   <td>${element.subjects[3].obtained_marks}</td>
//   <td>${element.subjects[3].practical_marks}</td>
//   <td>${
//     element.subjects[3].obtained_marks + element.subjects[3].practical_marks
//   }</td>
// </tr>
// <tr>
//   <td>${element.subjects[4].name}</td>
//   <td>${element.subjects[4].pass_marks}</td>
//   <td>${element.subjects[4].obtained_marks}</td>
//   <td>${element.subjects[4].practical_marks}</td>
//   <td>${
//     element.subjects[4].obtained_marks + element.subjects[4].practical_marks
//   }</td>
// </tr>

// const tableBody = document.getElementsByClassName("table-body");

// element.subjects.forEach((el) => {
//   let tableRow = document.createElement("tr");
//   Object.values(el).forEach((value) => {
//     let tableVal = document.createElement("td");
//     tableVal.innerHTML = value;
//     tableRow.appendChild(tableVal);
//   });
//   tableBody[index].appendChild(tableRow);
// });
