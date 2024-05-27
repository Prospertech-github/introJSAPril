var companyName; //declared a variable
companyName = 'Univelcity'; //assigned a variable to a data

var firstLady = 'Remi Tinubu';
let tutor = 'The Wicked Chief'; //string data type
const age = 2930; //number data type
let asakeAge; //undefined data type
const goatBrain = null; //null data type
const pi = 3.14;

// storing my data
let firstName = 'Prosper';
let lastName = 'Ikechukwu';
let gender = 'non-binary';
let nationality = 'non-nigerian';
let religion = 'agnostic';

let prosperData = [
	'Prosper',
	'Ikechukwu',
	'non-binary',
	'non-nigerian',
	'agnostic',
	2,
	1.8,
	15,
];

// console.log(prosperData[0]);
// console.log(prosperData[6]);

let gbolahan = {
	firstName: 'Atobatele',
	lastName: 'Ameer',
	gender: 'male',
};

// console.log(gbolahan.firstName)
// console.log(gbolahan.gender)

// console.log(prosperData);
// console.log(pi)
// console.log('just logging things to the console')

let macBook = [
	{
		productName: 'MacBook Pro 2018',
		price: 500,
		quantity: 15,
	},
	{
		productName: 'MacBook Pro 2019',
		price: 650,
		quantity: 10,
	},
];

let lenovo = [
	['ThinkPad', 700, 8],
	['Chrome', 800, 12],
	['Legion', 1000, 4],
];

// console.log(
// 	'The ' +
// 		macBook[0].productName +
// 		' is sold for ' +
// 		macBook[0].price +
// 		' USD and we have just ' +
// 		macBook[0].quantity +
// 		' left'
// );
// console.log(
// 	`The ${macBook[1].productName} is sold for ${macBook[1].price}USD and we have just ${macBook[1].quantity} left`
// );

// console.log(
// 	`The ${lenovo[0][0]} is sold for ${lenovo[0][1]}USD and we have just ${lenovo[0][2]} left`
// );

let num = 3;
console.log(--num) //num = num - 1;
console.log(num) 

let firstNum = 5
// firstNum = firstNum + 5;
firstNum += 5
console.log(firstNum)

let num5 = 5;
let str5 = '5';
let sum = num5 + str5; //55
console.log(typeof sum);  //55 string
console.log(5 + 5);


let c1 = 5;
if (c1 > 8 || c1 < 6) alert('True');


let response = true;
alert(!response)

let gbolahanInClass = true;
if (gbolahanInClass == false) {
	console.log('Gbolahan is not in class')
};
