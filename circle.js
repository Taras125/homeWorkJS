function random(min, max) {
  // from https://javascript.info/task/random-min-max
  let random = min + Math.random() * (max - min)
  return Math.floor(random);
}

function calculateCircumLength(circleRadius) {
  let length = Math.PI * Math.sqrt(circleRadius);
  return Math.floor(length);
}

function calculateCircumArea(circleRadius) {
  let area = 2 * Math.PI * circleRadius;
  return Math.floor(area);
}

let circleRadius = random(10, 100);
console.log("Radius: " + circleRadius);
console.log("Circum Length: " + calculateCircumLength(circleRadius));
console.log("Circum Area: " + calculateCircumArea(circleRadius));