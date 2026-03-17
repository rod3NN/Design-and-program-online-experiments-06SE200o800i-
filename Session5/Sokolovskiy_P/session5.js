/*
let ageGroup;
let age = 12;
if (age < 18) {
    ageGroup = 'Child';
} else {
    ageGroup = 'Adult';
}
console.log(ageGroup); 

//let result = condition ? `Value if true` : `Value if false`;
ageGroup = age < 18 ? `Child` : `Adult`;
console.log(ageGroup); 

let reactionTime = 300;
switch (true) {
    case reactionTime < 200 && reactionTime > 0:
        console.log("Fast Response!");
        break;
    case reactionTime <= 500 && reactionTime >= 200:
        console.log("Moderate Response!");
        break;
    case reactionTime > 500:
        console.log("Slow Reponse");
        break;
    default: 
        console.log("Invalid Response Time");
}
        */
for (let i = 1; i < 6; i++) {
    console.log(`Number : ${i}`)
}
const responseTimes = [350, 420, 510];
for (const time of responseTimes) {
    console.log(`Response Time: ${time} ms`);
}

const trial = {id: 1, responseTime: 350, correct: true};
console.log(trial.id);
console.log(trial["id"]);
for (const key in trial) {
    console.log(`${key}: ${trial[key]}`);
}

