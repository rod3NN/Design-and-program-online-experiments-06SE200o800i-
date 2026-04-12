const config = {
  studyName: "Cognitive Load Task",
  numTrials: 40,
  conditions: ["congruent", "incongruent", "neutral"],
  duration: 20
};
alert('Welcome!')
console.log(`Study loaded: ${config.studyName}`);
console.log(`Trials: ${config.numTrials} | Conditions: ${config.conditions}`);
console.log(`Duration: ${config.duration}`);
