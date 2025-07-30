<script>
  const paymentForm = document.getElementById("paymentForm");
  const registerBtn = document.getElementById("registerBtn");
  const verifyBtn = document.getElementById("verifyBtn");
  const qrSection = document.getElementById("qrSection");

  let formData = {};

  paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const course = document.getElementById("course").value;
    const coupon = document.getElementById("refCoupon").value.trim() || "None";

    if (!name || !whatsapp || !course) {
      alert("Please fill out all fields.");
      return;
    }

    // Store data temporarily
    formData = { name, whatsapp, course, coupon };

    // Show QR section
    qrSection.style.display = "block";

    // Scroll to QR
    qrSection.scrollIntoView({ behavior: "smooth" });
  });

  verifyBtn.addEventListener("click", function () {
    const message = `*Alpha Traders Payment Details*\n\nName: ${formData.name}\nEmail: ${formData.whatsapp}\nCourse: ${formData.course}\nReferral Coupon: ${formData.coupon}\n\nScreenshot: (Please send manually)`;

    const whatsappNumber = "917572082633"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
</script>
