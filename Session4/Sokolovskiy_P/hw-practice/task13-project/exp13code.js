const experimentConfig = {
    studyName: "Stroop Interference Task",
    numTrials: 60, 
    duration: 25, 
    minAge: 18,
    maxAge: 35,
    conditions: ["congruent", "incongruent"]
}
const testParticipant1 = {
    id: "P001",
    age: 54,
    consentGiven: "yes",
    completedBefore: "no"
}
const testParticipant2 = {
    id: "P002",
    age: 22,
    consentGiven: "yes",
    completedBefore: "no"
}
function testEligibility (experimentConfig, participant) {
    if (participant.age < experimentConfig.minAge || participant.age > experimentConfig.maxAge) {
        return "Not eligible - age out of range";
    } else if (participant.consentGiven != "yes") {
        return "Not eligible - consent not given";
    } else if (participant.completedBefore != "no") {
        return "Not eligible - already did the study"
    } else {
        return "Eligible!"
    }
}
alert(`Welcome to the ${experimentConfig.studyName}!`)
console.log(`Checking ${testParticipant1.id} (${testParticipant1.age}): ${testEligibility(experimentConfig, testParticipant1)}`)
console.log(`Checking ${testParticipant2.id} (${testParticipant2.age}): ${testEligibility(experimentConfig, testParticipant2)}`)