/* Question 1 */ 

let multipleArrays: (number | boolean)[];

/* Question 2 */

let tuple: [string, boolean, number];

tuple = ["erik", false, 33];

/* Question 3 */ 

function getFullName(firstName: string, lastName: string):string {
    return `${firstName} ${lastName}`;
  }

  /* Question 4 */ 

  interface personData {
    name: string;
    age: number;
    jobtitle?: string;
  }
  let persons: Array<personData> = [{
    name: 'Burt',
    age: 77,
    jobtitle: 'Magician' 
  },
  {
    name: 'Walt',
    age: 11,
  },
  {
    name: 'Spencer',
    age: 107,
    jobtitle: 'Bus Driver'
  }
]


/* Question 5 */ 

enum isPaid {
	Paid,
	Unpaid,
	Unknown,
}

/* Question 6 */ 

class Person{
	name: string;

	constructor(nameString: string) {
		this.name = nameString;
	}

	displayName() {
		return "My name is " + this.name;
	}
}

/* Question 7 */ 

type stringBool = string | boolean;
type numString = number | string;
type striBoo = string | boolean;

function getDetails(name: stringBool, details: { id: numString, status: striBoo }){}
