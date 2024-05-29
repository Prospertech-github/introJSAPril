// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using 
  the formula: BMI = mass / height ** 2 = mass / (height * height). 
  (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether 
    Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let johnHeight = 1.95
let johnWeight = 92
let markHeight = 1.88
let markWeight = 95

// fomular is  mass/height**2
let markBMI = markWeight / markHeight ** 2;
let johnBMI = 92 / 1.95 ** 2;
console.log(markBMI, johnBMI); //27.309968138370508, 24.194608809993426

let markHigherBMI = markBMI > johnBMI; //true
console.log(markHigherBMI);


// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be 
either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI 
   (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/






if (markBMI > johnBMI) {
  console.log('Mark BMI is higher than John');  
} else if (johnBMI > markBMI) {
  console.log('John BMI is higher than Mark');
} else {
  console.log('They have equal BMI');
}

if (markBMI > johnBMI) {
  console.log(`Mark BMI ${markBMI} is higher than John ${johnBMI}`);  
} else if (johnBMI > markBMI) {
  console.log(`John BMI ${johnBMI} is higher than Mark ${markBMI}`);
} else {
  console.log(`They have equal BMI`);
}


// if (condition) {
//   code that should run when condition is met
// }

// if (condition) {
//   code that should run when condition is met
// } else {
//   fallback code if condition fails
// }

// if (condition1) {
//   code that should run when condition1 is met
// } else if (condition2) {
//   code that should run when condition2 is met
// } else {
//   fallback code if condition 1 and 2 fails
// }

// if (condition1) {
//   if (condition2) {
    
//   }
// }

let occupation = 'agbero';
switch (occupation) {
  case 'footballer':
    console.log('Ball like Kroos');
    break;
  case 'musician':
    console.log('Sing like Jon Bellion');
    break;
  case 'teacher':
    console.log('Be like Mr Francis');
    break;
  default:
    console.log('No future ambition')
    break;
}

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

 
// let num = 10
// while (num > 0) {
//   console.log(num)
//   num--;
// }

// let num2 = -1
// do {
//   console.log(num2);
//   num2--;
// } while (num2 >= 0);

// For loop
// for (let index = 0; index <= 10; index += 2){
//   console.log(index)
// }

function BMICalculator(mass, height) {
  const BMI = mass / (height ** 2)
  console.log(BMI)
}

BMICalculator(80, 1.6);
BMICalculator(75, 1.9);

let univelStaffAges = [12, 39, 40, 17, 5, 69, 81, 34, 23, 20]
let civicHive = [23, 47, 38, 45]

function averageAgeCalculator(ages) {
  let numOfAges = ages.length;
  let sum = 0;  
  for (let i = 0; i < ages.length; i++){
    sum += ages[i];
  }
  console.log(sum / numOfAges)
  // BMICalculator(78,1.6)
}

// averageAgeCalculator(univelStaffAges);
averageAgeCalculator(civicHive);

civicHive.push(25, 48);
console.log(civicHive)
civicHive.pop()
console.log(civicHive)

civicHive.shift()
console.log(civicHive)
civicHive.unshift('dannyBoy', 'omoGbolahan');
console.log(civicHive)

let dml = ' Asake na bad guy ';

console.log(dml.split(' ').join("").length);
