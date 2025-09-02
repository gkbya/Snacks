// Buy Now button functionality
document.addEventListener("DOMContentLoaded", function () {
  const buyBtn = document.getElementById("buyBtn");

  if (buyBtn) {
    buyBtn.addEventListener("click", function () {
      // Redirect to WhatsApp with pre-filled message
      window.open(
        "https://wa.me/916003348883?text=Hello!%20I%20would%20like%20to%20order%20Nutrijan%20Snacks.",
        "_blank"
      );
    });
  }
});
