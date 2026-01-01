//variables
/*Create a variable for each of the following: your favorite color,
 your height in centimeters, and whether you like pizza. 
 Use appropriate variable declarations (let, const, or var). 
 Try logging it using console.log
 */
let favcolor = 'red'
const height = 180
var pizzaShop = 'joes'
console.log('my favourite color is: '+favcolor+' my height is: '+height+'cm  my go to pizza shop is: '+pizzaShop )

//functions
/*Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?
*/
function sum(a,b){
    return a+b
}
console.log('sum of 12 and 17 is: '+sum(12,17))
console.log('sum of "12" and "17" is: '+sum('12','17'))

/*Write a function called canVote that returns true or false if the age of a user is > 18*/

function canVote(age){
    if(age >18){
        return true
    }else{
        return false
    }
}
console.log('my age is 17 and i can vote: '+canVote(17))

/*Write an if/else statement that checks if a number is even or odd. 
If it's even, print "The number is even." Otherwise, print "The number is odd."*/

function oddeven(n){
    if(n%2 ==0){
        console.log(n+' is even')
    }else{
        console.log(n+' is odd')
    }
}
oddeven(19)

/*Write a function called sum that finds the sum from 1 to a number*/

function sum1ton(n){
    let sum=0
    for(let i=1 ;i<=n;i++){
        sum+=i
    }
    return sum
}

console.log('sum from 1 to 100 is: '+sum1ton(100))

//objects
/*Write a function that takes a user as an input 
and greets them with their name and age */

let user = {
    name: "john",
    age: 69,
    gender: 'male'
}
function greet(user){
    console.log(`hello ${user.name} of ${user.age} years old`)
}
greet(user)

/**
 * Write a function that takes a new object as input which has name , age  and gender
 *  and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
 */

function greetMore(user){
    if(user.gender === 'male'){
        console.log(`Hi Mr${user.name}, your age is ${user.age}`+ canVote(user.age) ? " you can vote" : "you cant vote")
    }else if(user.gender === 'female'){
     console.log(`Hi Mrs${user.name}, your age is ${user.age}`+ canVote(user.age) ? " you can vote" : "you cant vote")   
    }else{
        console.log(`Hi Others${user.name}, your age is ${user.age}`+ canVote(user.age) ? " you can vote" : "you cant vote")
    }
}
greetMore(user)

//arrays
/**
 * Write a function that takes an array of numbers as input, and
 *  returns a new array with only even values. Read about filter in JS
 */

let nums=[1,2,3,4,5,6]
function filt(nums){
    let ans=[]
    for(let i=0 ;i<nums.length;i++){
        if(nums[i]%2==0){
            ans.push(nums[i])
        }
    }
    return ans
}
console.log(filt(nums))

/**
 * Create a function that takes an array of objects as input,
 * and returns the users whose age > 18 
 */
const users = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}
]
function filterOut(users){
    let ans=[]
    for(let i=0 ;i<users.length;i++){
        if(users[i].age>21){
            ans.push(users[i])
        }
    }
    return ans
}
console.log(filterOut(users))