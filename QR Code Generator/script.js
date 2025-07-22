const QRContainer = document.querySelector(".qr-container");
const QRText = document.querySelector(".qr-text");
const generateQR = document.querySelector(".generate-qr-code");
const QRGenerateErrorMessage = document.querySelector(".error-message");

generateQR.addEventListener("click",()=>{
	if (QRText?.value.trim()!== "") {

		QRContainer.innerHTML = ""
		new QRCode(QRContainer, {
		  text: `${QRText.value}`,
		  width: 500,
		  height: 500,
		  colorDark: "#000000",
		  colorLight: "#ffffff",
		  correctLevel: QRCode.CorrectLevel.H,
		});

		QRText.value=""

	}else {
		QRGenerateErrorMessage.innerHTML="Please Type Something!"
	}
})

