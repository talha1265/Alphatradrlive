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

  // Payment details
  const upiID = "obaidflex479@okaxis"; // <-- use your valid UPI ID
  const amount = "349"; // fixed amount
  const note = "Internship Registration";

  const upiLink = `upi://pay?pa=${upiID}&pn=Mohd%20Talha&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

  const confirmPayment = confirm(
    "📌 Make the payment of ₹349 for registration and certificates.\n\n⚡ All the training and internship programs are free. This fee is only for registration and certificates.\n\nClick OK to open UPI app or use QR."
  );

  if (confirmPayment) {
    // 1. Show QR Code
    const qrImg = document.getElementById("upiQRImg");
    const qrDownload = document.getElementById("downloadQR");
    const qrDiv = document.getElementById("upiQR");

    const qrAPI = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${encodeURIComponent(upiLink)}`;
    qrImg.src = qrAPI;
    qrDownload.href = qrAPI;
    qrDiv.style.display = "block";

    // 2. Also try opening UPI app
    window.location.href = upiLink;
  }
});
