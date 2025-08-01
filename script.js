
  const paymentForm = document.getElementById("paymentForm");
  const registerBtn = document.getElementById("registerBtn");
  const verifyBtn = document.getElementById("verifyBtn");
  const qrSection = document.getElementById("qrSection");

  let formData = {};

  paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value;
  const coupon = document.getElementById("refCoupon").value.trim() || "None";

  if (!name || !email || !course) {
    alert("Please fill out all fields.");
    return;
  }

  // Store data correctly
  formData = { name, email, course, coupon };

  // Show QR section
  qrSection.style.display = "block";
  qrSection.scrollIntoView({ behavior: "smooth" });
});

  verifyBtn.addEventListener("click", function () {
    const message = `*Alpha Traders Payment Details*\n\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}\nReferral Coupon: ${formData.coupon}\n\nScreenshot: (Please send manually)`;

    const whatsappNumber = "917572082633"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

