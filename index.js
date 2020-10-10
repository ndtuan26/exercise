// ex21
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
var total = numbers.reduce((a, b) => a + b)
console.log("ex21: total :", total)

// ex22

var max = numbers.reduce((a, b) => {
    if (a - b >= 0) {
        return a
    } else { return b }
})
var min = numbers.reduce((a, b) => {
    if (a - b <= 0) {
        return a
    } else { return b }
})

console.log("ex 22:Averages is", total / numbers.length)
console.log("ex 22:min is", min)
console.log("ex 22:max is", max)


// ex23
var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
function timesMax(a) {
    var max = 0
    var count = 1
    for (var i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            count++
            if (count > max) {
                max = count
            }
        } else {
            count = 1
        }
    }
    return max
}
console.log("ex 23:timesMax: ", timesMax(a))


// ex24
var a = [1, 2, 3, 2, 3, 4, 6, 7];
var arr = []
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
arr = a.filter(function (e) {
    return isPrime(e)
})
console.log("ex 24:prime is", arr)



// ex25
var a = [1, 2, 3, 2, 3, 4, 6, 7]
var b = a.map(item => item * item)
console.log(" ex 25 :output:", b)

// ex26
var a = [1,2,3,4,6,7];
 var k = 8 
function nearest(a, k) {
    
    var b = []
    var c = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] < k) {
            b.push(a[i])
        } else {
            c.push(a[i])
        }
    }
   console.log( Math.max(b))
   console.log(Math.max(c))
}
console.log(nearest(a, k))

// ex27
var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
for (let i = 0; i < students.length; i++) {
    students[i].firstName = students[i].firstName.substring(0, 1).toUpperCase() + (students[i].firstName.substr(1)).toLowerCase();
}
for (let i = 0; i < students.length; i++) {
    if (students[i].firstName.includes("a") && students[i].firstName.length >= 3) {
        console.log("ex 27:", students[i]);
    }
}



// ex28

var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
function individualStudent(params) {


    for (let i = 0; i < students.length; i++) {
        if (students[i].lastName.includes("Do")) {
            console.log("ex 28:individual student is", students[i]);
        }
    }
}
individualStudent("ex 28:", students)
// ex29
var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
function sortName(std) {
    std.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    return std
}
console.log("ex 29",sortName(students))


// ex30
// var a = [1, 2, 3, 4, 5, 6, 7, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
a.sort()

var c = a.filter(items => items < Math.max(...a))
var d = c.indexOf(Math.max(...c))
if (d == -1) {
    console.log("ex 31:", d)
} else {
    console.log("ex 31:", c[d])
}

// ex31




// ex32
var aaaaaa = [1, 3, 6, 9, 11, 20];
var k = 13
var bb = aaaaaa.splice(2,0,k)
function sortUp(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                var temp = a[i]
                a[i] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}
console.log("ex 32:", sortUp(aaaaaa))

// ex33
var a = [9, 8, 7, 6, 4, 5, 3, 2, 1]
console.log("ex 33:", sortUp(a))