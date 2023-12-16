const qrInput = document.getElementById("qr-input");
const qrButton = document.getElementById("qr-button");
const qrImg = document.getElementById("qr-img");

qrButton.addEventListener("click", () => {
  const qrValue = qrInput.value;

  if (qrValue) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue}`;
    qrImg.alt = `${qrValue}`;
  } else {
    alert("Enter your text or url!");
  }
});
