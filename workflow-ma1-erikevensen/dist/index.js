/* Question 1 */
var multipleArrays;
/* Question 2 */
var tuple;
tuple = ["erik", false, 33];
/* Question 3 */
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var persons = [{
        name: 'Burt',
        age: 77,
        jobtitle: 'Magician'
    },
    {
        name: 'Walt',
        age: 11
    },
    {
        name: 'Spencer',
        age: 107,
        jobtitle: 'Bus Driver'
    }
];
/* Question 5 */
var isPaid;
(function (isPaid) {
    isPaid[isPaid["Paid"] = 0] = "Paid";
    isPaid[isPaid["Unpaid"] = 1] = "Unpaid";
    isPaid[isPaid["Unknown"] = 2] = "Unknown";
})(isPaid || (isPaid = {}));
/* Question 6 */
var Person = /** @class */ (function () {
    function Person(nameString) {
        this.name = nameString;
    }
    Person.prototype.displayName = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
function getDetails(name, details) { }
