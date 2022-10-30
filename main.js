// If / else if / else .1


function oddOrEven(num) {
    if (num % 2 == 0) {
        return document.write("The number is even")
    }
    else {
        return document.write("The number is odd")
    }
}

// oddOrEven(20)

// If / else if / else .2

function largestNum(num1, num2) {
    if (num1 > num2) {
        return document.write("The largest number is ", num1)
    }
    else if (num1 < num2) {
        return document.write("The largest number is ", num2)
    }
    else {
        return document.write("The numbers are equal")
    }
}

// largestNum(2, 8)

// If / else if / else .3

function triangles(num1, num2, num3) {
    if (num1 === num2 === num3) {
        return document.write("The triangle is equilateral")
    }
    else if (num1 === num2 || num1 === num3 || num2 === num3) {
        return document.write("The triangle is isosceles")
    }
    else {
        return document.write("The triangle is scalene")
    }
}

// triangles(1, 4, 7)

// Arrays .1

let months1 = ["January", "February", "Marj", "April", "Mei"]

months1[2] = "March"
months1[4] = "May"

let newMonths = ["June", "July", "August", "September"]

let totalMonths = months1.concat(newMonths)

totalMonths.push("October", "Nobember", "December")

// Arrays .2 

function changeArray(num1, num2, num3) {

    if (num1 > num2) {
        totalMonths.pop()
    }
    else if (num2 > num3 && num2 < 10) {
        totalMonths.shift()
    }
    else if (num2 > num1 || num2 > num3) {
        totalMonths.push("October")
    }
    else {
        return "Bad luck"
    }
}
// changeArray(16, 17, 15)

// arrays .3 

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function wednesday(arr) {
    arr.indexOf("Wednesday")
    if (arr[2].length > arr.indexOf("Wednesday")) {
        week.reverse()
    }
}

// wednesday(week)

function compare(arr) {
    if (arr[0].length < arr[1].length) {
        return (week.slice(0, 3))
    }
}
compare(week)

function sunday(str) {
    if (str.includes("Sunday") === true) {
        return "That's nice"
    }
    else {
        str.push("Sunday")
        return "Oh no!"
    }
}

// sunday(week)

// Objetos .1

citizen1 = {
    name: "Tomy",
    lastname: "Culo",
    age: 38
}

// Objetos .2

citizen1.city = "Narnia"
citizen1.age = 20

//Objetos .3 

function checkCitizenship(obj) {
    if (obj.age >= 18) {
        obj.canVote = true
    }
    else {
        obj.canVote = false
    }
}

// checkCitizenship(citizen1)

// If / else if / else .4

function isInRange(num, start, end) {
    if (num > start && num < end) {
        return true
    }
    else {
        return false
    }
}

// console.log(isInRange(5, 1, 10))

// If / else if / else .5

function evalOperation(num1, num2, operation) {

    if (operation == "add") {
        return num1 + num2
    }
    if (operation == "subtract") {
        return num1 - num2
    }
    if (operation == "multiply") {
        return num1 * num2
    }
    if (operation == "divide") {
        return num1 / num2
    }
    if (operation == "modulus") {
        return num1 % num2
    }

}

// console.log(evalOperation(2, 80, "multiply"));

// If / else if / else .6

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true
    }
    if (year % 100 === 0) {
        return false
    }

    if (year % 4 === 0) {
        return true
    }
    else {
        return false
    }
}
isLeapYear()

// If / else if / else .7 + Bonus!

function leapDay(month, year) {
    isLeapYear = year

    if (month == 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        return 31, year
    }
    else if (month == 4 || 6 || 9 || 11) {
        return 30, year
    }
    else {
        return 28, year
    }
}

// console.log(leapDay(2, isLeapYear(1900)))

// Arrays .4

function reverseStr(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

// console.log(reverseStr('Paralelepípedo'));

// Arrays .5

function reverseArr(arr) {
    var newArr = "";
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr += arr[i];
    }
    return newArr;
}
// console.log(reverseArr(['a', 'b']));

// Objetos .4 

function createCitizen(name, lastname, age) {
    if (name == "" || lastname == "" || age == 0) {
        return "Invalid parameters"
    }
    else {
        return citycen = {
            name: name,
            lastName: lastname,
            age: age,
        }
    }
}
// createCitizen("Paco", "Mermela", 35)

// Objetos .5

let citizen2 = createCitizen("tomi", "culo", 27)

// console.log(citizen2);

// Objetos .6 

function checkVoting(obj) {
    if (obj.canVote == true) {
        return true
    }
    else {
        checkCitizenship(obj)
        return false
    }
}
// console.log(checkVoting(citizen2));
// console.log(citizen2);

// Objetos .7

function showValues (obj) {
return Object.values(obj)
}
// console.log(showValues(citizen1));

// Objetos .8 

function deleteLastProp (obj) {
    if (Object.keys(obj) > 4){
        return obj.pop()
    }
    else {
        return false
    }
}

// console.log(deleteLastProp(citizen2));
