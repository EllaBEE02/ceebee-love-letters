function showEmotion(response) {
  let emotion = response.target.value;
  if (emotion === "elevated") {
    alert("Miss you🥰");
  }

  if (emotion === "low") {
    alert("I'm feeling blue because I miss you😞");
  }

  if (emotion === "normal") {
    alert("Life has no excitement without you😭");
  }
}

let heartRateElement = document.querySelector("#heart-rate");
heartRateElement.addEventListener("change", showEmotion);
console.log(heartRateElement);
