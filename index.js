// Leap year:
const leapYear = (year) => {
  let leap;
  if (year % 4 === 0 || year % 400 === 0) {
    leap = true;
  } else leap = false;
  return leap;
};
// Ticket pricing:
const ticketPrice = () => {
  let age = parseInt(prompt("Enter your age"));
  let price;
  switch (true) {
    case age <= 12:
      price = "$10";
      break;
    case age >= 13 && age <= 17:
      price = "$15";
      break;
    case age >= 18:
      price = "$20";
      break;
  }
  console.log(price);
};
// Weather clothing adviser:
const adviser = () => {
  let rain = prompt("is it raining (yes or no only)").toLowerCase();
  let umbrella;
  switch (true) {
    case rain === "yes":
      umbrella = "hez s7aba";
      break;
    case rain === "no":
      umbrella = "bara rabi m3ak";
      break;
  }
  console.log(umbrella);
};
