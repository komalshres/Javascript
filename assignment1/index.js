/* 1.A woman lost her child named `Rupesh Poudel` help her find him. Given a sequence of rooms find the index of the room in which she can find `Rupesh Poudel`.
[["ram", "sita"], ["hari", "haris", "Rupesh karki"], ["portgas", "Rupesh poudel"]] */

const rooms = [
  ["ram", "sita"],
  ["hari", "haris", "Rupesh karki"],
  ["portgas", "Rupesh poudel"],
];

const PERSON_TO_FIND = "Rupesh Poudel";
let personFound = 0;

for (let room = 0; room < rooms.length; room++) {
  for (let person = 0; person < rooms[room].length; person++) {
    if (rooms[room][person] === PERSON_TO_FIND) {
      console.log(`${rooms[room][person]} is in room ${room}`);
      personFound++;
    }
  }
}
if (!personFound) console.log(`${PERSON_TO_FIND} is not here`);

/* 2. A farmer has lots of horses in a farm. There are n number of horses and he is unable to count the total number of horses, male horses & female horses. Help him count with the knowledge of loop.
["mh", "mh", "fh", "cw", "cw", "ct", "fh", "mh", "fm", "fm", "ct", "cw", "gh", "mh", "gh", "mh"] where
mh is male horse,
fm is female horse,
gh is goat
cw is cow
ct is cat */

const animals = [
  "mh",
  "mh",
  "fh",
  "cw",
  "cw",
  "ct",
  "fh",
  "mh",
  "fm",
  "fm",
  "ct",
  "cw",
  "gh",
  "mh",
  "gh",
  "mh",
];
let maleHorses = 0;
let femaleHorses = 0;
const MALE_HORSE_CODE = "mh";
const FEMALE_HORSE_CODE = "fh";

for (let i = 0; i < animals.length; i++) {
  if (animals[i] === MALE_HORSE_CODE) {
    maleHorses++;
  } else if (animals[i] === FEMALE_HORSE_CODE) {
    femaleHorses++;
  }
}
console.log(`Total horses = ${maleHorses + femaleHorses}`);
console.log(`Male horses = ${maleHorses}`);
console.log(`Female horses = ${femaleHorses}`);

/*Given a donations of cash in Rupees for a cause. Find out what's the total collection.
  `"1770, 2680, 3100, 4530, 600, 500, 80, 6000, 4500"; */

const donations = "1770, 2680, 3100, 4530, 600, 500, 80, 6000, 4500";
const donationList = donations.split(",");
let sum = 0;
for (let i = 0; i < donationList.length; i++) {
  donationListNumber = parseInt(donationList[i]);
  sum += donationListNumber;
}
// console.log(donationList);
console.log(`Total collection: ${sum}`);

/* A doctor has to sort between positive and negative corona patient by their result. They are sitting in chairs numbered from 1 to 15. What are chair numbers of the positive corona patients and the negative corona patient.
  ["+ve", "+ve", "-ve", "+ve", "-ve", "-ve", "+ve", "+ve", "+ve", "-ve", "+ve", "-ve", "-ve", "+ve", "-ve"] */

const report = [
  "+ve",
  "+ve",
  "-ve",
  "+ve",
  "-ve",
  "-ve",
  "+ve",
  "+ve",
  "+ve",
  "-ve",
  "+ve",
  "-ve",
  "-ve",
  "+ve",
  "-ve",
];
const POSITIVE_CORONA_PATIENT = "+ve";
let positiveChairNo = [];
let negativeChairNo = [];
for (let i = 0; i < report.length; i++) {
  if (report[i] === POSITIVE_CORONA_PATIENT) {
    positiveChairNo.push(i + 1);
  } else negativeChairNo.push(i + 1);
}

console.log(`Chair numbers of +ve corona patient : ${positiveChairNo}`);
console.log(`Chair numbers of -ve corona patient : ${negativeChairNo}`);

// Write a program to reverse an array.

const arr = [1, 2, 3, 4, 5, 6];
let arrInReverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  arrInReverse.push(arr[i]);
}

console.log(arrInReverse);

//Find out the outcome of the game between player O and player X. The end result is given in the diagram.

const tictac = [
  ["O", "X", "X"],
  ["X", "O", "O"],
  ["X", "O", "O"],
];

if (tictac[0][0] == tictac[1][1]) {
  if (tictac[1][1] == tictac[2][2]) {
    alert(`${tictac[1][1]} is the winner`);
    console.log("1");
  }
} else if (tictac[0][0] == tictac[0][1]) {
  if (tictac[0][1] == tictac[0][2]) {
    alert(`${tictac[0][1]} is the winner`);
    console.log("2");
  }
} else if (tictac[1][0] == tictac[1][1]) {
  if (tictac[1][1] == tictac[1][2]) {
    alert(`${tictac[1][1]} is the winner`);
    console.log("3");
  }
} else if (tictac[2][0] == tictac[2][1]) {
  if (tictac[2][1] == tictac[2][2]) {
    alert(`${tictac[2][1]} is the winner`);
    console.log("4");
  }
} else if (tictac[0][0] == tictac[1][0]) {
  if (tictac[1][0] == tictac[2][0]) {
    alert(`${tictac[1][0]} is the winner`);
    console.log("5");
  }
} else if (tictac[0][1] == tictac[1][1]) {
  if (tictac[1][1] == tictac[3][1]) {
    alert(`${tictac[1][1]} is the winner`);
    console.log("6");
  }
} else if (tictac[0][2] == tictac[1][2]) {
  if (tictac[1][2] == tictac[1][3]) {
    alert(`$tictac[1][2]} is the winner`);
    console.log("7");
  }
} else if (tictac[0][2] == tictac[1][1]) {
  if (tictac[1][1] == tictac[2][1]) {
    alert(`${tictac[1][1]} is the winner`);
    console.log("8");
  }
} else alert("Its a draw");

// Write a program to flatten a given array. Given [[1,2], null, true, [4,5,6], [12, 14], "test"]

const arr2 = [[1, 2], null, true, [4, 5, 6], [12, 14], "test"];

// console.log(Array.isArray(arr2[2]));
[1, 2, null, true, [4, 5, 6], [12, 14], "test"];
for (let i = 0; i < arr2.length; i++) {
  if (Array.isArray(arr2[i])) {
    for (let j = arr2[i].length - 1; j >= 0; j--) {
      let storage = arr2[i][j];
      arr2.splice(i + 1, 0, storage);
    }
    arr2.splice(i, 1);
    [1, 2, null, true, [4, 5, 6], [12, 14], "test"];
  }
}
console.log(arr2);

const arrayBeforeFlattened = [[1, 2], null, true, [4, 5, 6], [12, 14], "test"];
const flattenedArray = [];

for (let i = 0; i < arrayBeforeFlattened.length; i++) {
  if (Array.isArray(arrayBeforeFlattened[i])) {
    for (let j = 0; j < arrayBeforeFlattened[i].length; j++) {
      flattenedArray.push(arrayBeforeFlattened[i][j]);
    }
  } else flattenedArray.push(arrayBeforeFlattened[i]);
}
console.log(flattenedArray);

// Write a program to get a sum of 2d Array. [[1,2], [4,5], [6,7,8]]

const sum = [
  [1, 2],
  [4, 5],
  [6, 7, 8],
];
let sum1 = 0;
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    sum1 = arr3[i][j] + sum1;
  }
}

console.log(sum1);

// Write a program to multiply all the numbers in an array by 3. (Mapping) Given [1,3,5,6,7,8,2,1] // returns array

const num = [1, 3, 5, 6, 7, 8, 2, 1];
const numMultiplyByThree = num.map((num) => num * 3);

console.log(numMultiplyByThree);

//Write a program to check if a sorted numeric array is a duplicate.

const arr4 = [1, 3, 4, 5];
const arr5 = [1, 3, 4, 5];
let count = 0;
if (arr4.length == arr5.length) {
  for (i = 0; i < arr4.length; i++) {
    if (arr4[i] == arr5[i]) {
      count++;
    }
  }
  if (count == arr4.length) {
    console.log(`${arr4} and ${arr5} is duplicate`);
  } else console.log(`${arr4} and ${arr5} is not duplicate`);
} else console.log(`${arr4} and ${arr5} is not duplicate`);

const numericArray = [1, 2, 4, 2, 4];
let arrayChecker = false;
for (let i = 0; i < numericArray.length; i++) {
  for (let j = i + 1; j < numericArray.length; j++) {
    if (numericArray[i] === numericArray[j]) {
      arrayChecker = true;
    }
  }
}

if (arrayChecker) console.log("The array is duplicate");
else console.log("The array is not duplicate");

// Write a program to check if a numeric array is a duplicate.

const arr6 = [1, 3, 4, 2];
const arr7 = [3, 1, 2, 4];
let count1 = 0;

if (arr6.length == arr7.length) {
  for (let i = 0; i < arr6.length; i++) {
    for (let j = 0; j < arr6.length; j++) {
      if (arr6[i] == arr7[j]) {
        count1++;
      }
    }
  }
  if (count1 == arr6.length) {
    console.log(`${arr6} and ${arr7} is duplicate`);
  } else console.log(`${arr6} and ${arr7} is not duplicate`);
} else console.log(`${arr6} and ${arr7} is not duplicate`);

// Given three numbers a, b & c. Find out which is the greatest and smallest.

const a = 1;
const b = 2;
const c = 3;

if (a > b && b > c) {
  console.log(`${a} is the greatest and ${c} is the smallest`);
} else if (a > c && c > b) {
  console.log(`${a} is the greatest and ${b} is the smallest`);
} else if (b > c && c > a) {
  console.log(`${b} is the greatest and ${a} is the smallest`);
} else if (b > a && a > c) {
  console.log(`${b} is the greatest and ${c} is the smallest`);
} else if (c > b && b > a) {
  console.log(`${c} is the greatest and ${a} is the smallest`);
} else console.log(`${c} is the greatest and ${b} is the smallest`);

//Bubble sort

const arrayToSort = [3, 2, 1, 8, 4, 9, 0];
let dummy;

const bubbleSort = () => {
  for (let i = 0; i < arrayToSort.length; i++) {
    if (arrayToSort[i] > arrayToSort[i + 1]) {
      dummy = arrayToSort[i];
      arrayToSort[i] = arrayToSort[i + 1];
      arrayToSort[i + 1] = dummy;
      bubbleSort();
    }
  }
};
bubbleSort();
console.log(arrayToSort);

// Insertion sort

const arrayToSort1 = [3, 2, 1, 8, 4, 9, 0];
let dummy1;

for (let i = 0; i < arrayToSort.length; i++) {
  for (let j = i + 1; j < arrayToSort.length; j++)
    if (arrayToSort1[i] < arrayToSort1[j]) {
      dummy1 = arrayToSort1[i];
    }
}

console.log(arrayToSort1);
