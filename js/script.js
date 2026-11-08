const promoButton = document.querySelector(".promo-button");

if (promoButton) {
promoButton.addEventListener("click", () => {
  promoButton.textContent = "Gratis kopi untuk 10 pembeli pertama!";
  console.log("tombol promo diklik.");
  console.log("Promo kopi nusa berhasil ditampilkan.");
});
}