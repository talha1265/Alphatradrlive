document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const course = document.getElementById("course").value;

  if (!name || !whatsapp || !course) {
    alert("Please fill out all fields.");
    return;
  }

  const message = `*Alpha Traders Payment Details*\n\nName: ${name}\nWhatsApp: ${whatsapp}\nCourse: ${course}\nScreenshot: (Please send it manually)`;

  const whatsappNumber = "917572082633"; // Replace with your WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});
