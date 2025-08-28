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

  // Store data
  formData = { name, email, course, coupon };

  // Show QR section
  qrSection.style.display = "block";
  qrSection.scrollIntoView({ behavior: "smooth" });

  // Auto-download QR
  const link = document.createElement("a");
  link.href = "qr.png"; // your QR image path
  link.download = "AlphaTech_Payment_QR.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Open Google Pay with UPI deep link
  const upiID = "mohdtalha206@okicici"; // <-- Replace with your UPI ID
  const amount = "349";
  const note = "Internship Registration";
  const upiLink = `upi://pay?pa=${upiID}&pn=Alpha%20Tech&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

  window.location.href = upiLink; // Opens Google Pay / UPI app
});

// WhatsApp verify
verifyBtn.addEventListener("click", function () {
  const message = `*Alpha Tech Payment Details*\n\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}\nReferral Coupon: ${formData.coupon}\n\nScreenshot: (Please send manually)`;

  const whatsappNumber = "917572082633"; // Your WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});

// Mobile menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

