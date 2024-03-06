console.log("Connected");

const marbleSeason = document.getElementById("marble-season");
const marbleSoilMoisture = document.getElementById("marble-soil-moisture");
const marbleFertiliser = document.getElementById("marble-fertiliser");
const marbleButton = document.getElementById("marble-submit");
const marbleWaterInstructions = document.getElementById("marble-water-instructions");

// ====== Inputs and instructions ====== //
function MarbleWaterInstructions(event) {
  event.preventDefault();

  // ====== Watering ====== //
  // If it's spring of summer and the top inches or more are dry, give instructions for how to water. If it's autumn or winter, it needs to be completely dry before watering. If values haven't been entered, ask for values.
  if (marbleSoilMoisture.value === "All dry") {
    marbleWaterInstructions.innerHTML =
      "It's time to water your pothos. Pour water into the soil until it comes out of the drainage holes, or reverse water it by putting the pot in some water and let it soak for 10 minutes to an hour.";
  } else if (
    marbleSoilMoisture.value === "Dry top inches" &&
    (marbleSeason.value === "Summer" || marbleSeason.value === "Spring")
  ) {
    marbleWaterInstructions.innerHTML =
      "It's time to water your pothos. Pour water into the soil until it comes out of the drainage holes, or reverse water it by putting the pot in some water and let it soak for 10 minutes to an hour.";
  } else if (
    marbleSeason.value === "Choose" ||
    marbleSoilMoisture.value === "Choose"
  ) {
    marbleWaterInstructions.innerHTML =
      "Please enter the season and soil moisture level.";
  } else {
    marbleWaterInstructions.innerHTML =
      "Your pothos doesn't need watering at the moment.";
  }

  // ====== Fertiliser ====== //
  // If it's spring of summer, the top inches or more are dry and it's been a month or more since the last time it was fertilised, give instructions to fertilise. If it's autumn or winter or wet, no need for fertiliser. If values haven't been entered, ask for values.
  if (
    (marbleSeason.value === "Summer" || marbleSeason.value === "Spring") &&
    (marbleFertiliser.value === ">month" ||
      marbleFertiliser.value === "month") &&
    (marbleSoilMoisture.value === "Dry top inches" ||
      marbleSoilMoisture.value === "All dry")
  ) {
    marbleWaterInstructions.innerHTML +=
      "<br><br> It's also time for some fertiliser! Follow the manufacturer's instructions and make a note in your calendar of when this was done.";
  } else if (
    marbleSeason.value === "Choose" ||
    marbleFertiliser.value === "Choose"
  ) {
    marbleWaterInstructions.innerHTML +=
      "<br><br>Please enter when your was last fertilised.";
  } else if (
    marbleFertiliser.value === "?" &&
    (marbleSeason.value === "Summer" || marbleSeason.value === "Spring")
  ) {
    marbleWaterInstructions.innerHTML +=
      "<br><br>Make a note in your calendar to fertilise your pothos a month from now.";
  } else {
    marbleWaterInstructions.innerHTML +=
      "<br><br>Your pothos doesn't need fertilising right now.";
  }
}
