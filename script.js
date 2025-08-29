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

  // Show popup first
  const confirmPayment = confirm(
    "📌 Make the payment of ₹349 for registration and certificates.\n\n⚡ All the training and internship programs are free. This fee is only for registration and certificates.\n\nClick OK to continue to Google Pay."
  );

  if (confirmPayment) {
    // Open Google Pay with UPI deep link
  const upiID = "mohdtalha206@okicici"; // or your exact UPI ID from GPay/PhonePe
const amount = "349";
const note = "Internship Registration";
const upiLink = `upi://pay?pa=${upiID}&pn=Mohd%20Talha&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
window.location.href = upiLink;


  }
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





