let circleRadius = Math.floor(Math.random(9) * 101);

function calculateCircumLength(circleRadius) {
    return Math.PI * (circleRadius + circleRadius);
};

function calculateCircumArea(circleRadius) {
    return 2 * Math.PI * circleRadius;
};
  console.log(circleRadius);
  console.log(calculateCircumLength(1));
  console.log(calculateCircumArea(2));

 