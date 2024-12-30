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

let letter2Element = document.querySelector("#letter-2");
letter2Element.innerHTML = "Please check-in tomorrow for more letters from BEE";
letter2Element.style.opacity = 0.5;

let heartRateElement = document.querySelector("#heart-rate");
heartRateElement.addEventListener("change", showEmotion);
console.log(heartRateElement);
