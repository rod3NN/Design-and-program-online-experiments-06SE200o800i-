/* this is…hello.js
<- this is JS comment
*/

// Method 2 <- this is also JS comment

console.log("Hello, World 2!")

function greet(name, num) {
    let username = name + num;
    console.log(`Hello, ${name}!
        Your username is ${username}`);
    return username;
}

function eligibility(age, participation, vision, impairment) {
    if (age >= 18 && age <= 35 && (participation == false) && 
        (vision == true) && (impairment == false)) {
        console.log('Participant is eligible for the experiment.');
    } else {
        console.log('Participant is not eligible for the experiment!');
    }
}
console.log(eligibility(25, true, true, false))
console.log(eligibility(17, false, true, false))
console.log(eligibility(17, true, true, false))
console.log(eligibility(25, true, true, false))
console.log(eligibility(25, false, true, false))