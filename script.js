function showEmotion(response) {
  If(response === "Elevated");
  Alert("Miss you");
}

let heartRateElement = document.querySelector("#heart-rate");
heartRateElement.addEventListener("change", showEmotion);
