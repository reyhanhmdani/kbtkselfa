// --- JS YANG DISEMPURNAKAN UNTUK SELURUH FUNGSI ---

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------
  // Seleksi Elemen
  // ----------------------------------------------------
  const hamburgerButton = document.getElementById("hamburger-button");
  const mobileMenuContainer = document.getElementById("mobile-menu-container");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
  const navLinksMobile = document.querySelectorAll("#mobile-menu-container a[data-nav-link]");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  const mainNav = document.getElementById("mainNav");
  const navLinksDesktop = document.querySelectorAll("#mainNav .space-x-8 a");
  const backToTopButton = document.getElementById("backToTop");

  // ----------------------------------------------------
  // Fungsi untuk Menu Mobile
  // ----------------------------------------------------
  const toggleMobileMenu = () => {
    mobileMenuContainer.classList.toggle("-translate-x-full");
    mobileMenuOverlay.classList.toggle("opacity-0");
    mobileMenuOverlay.classList.toggle("invisible");

    // Toggle animasi hamburger
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("translate-y-1.5");
    line2.classList.toggle("opacity-0");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("-translate-y-1.5");
  };

  hamburgerButton.addEventListener("click", toggleMobileMenu);
  mobileMenuOverlay.addEventListener("click", toggleMobileMenu);

  navLinksMobile.forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenuContainer.classList.contains("-translate-x-full")) {
        toggleMobileMenu();
      }
    });
  });

  // ----------------------------------------------------
  // Fungsi untuk Efek Scroll Navbar
  // ----------------------------------------------------
  const handleScroll = () => {
    const isScrolled = window.scrollY > 100;

    mainNav.classList.toggle("scrolled", isScrolled);
    mainNav.classList.toggle("md:bg-white", isScrolled);
    mainNav.classList.toggle("md:bg-transparent", !isScrolled);

    const isMobileMenuOpen = !mobileMenuContainer.classList.contains("-translate-x-full");

    if (!isMobileMenuOpen) {
      navLinksDesktop.forEach((link) => {
        link.classList.toggle("text-secondary", isScrolled);
        link.classList.toggle("text-white", !isScrolled);
      });
    }

    // Tampilkan/sembunyikan tombol Back to Top
    const isFarDown = window.scrollY > 300;
    backToTopButton.classList.toggle("opacity-100", isFarDown);
    backToTopButton.classList.toggle("visible", isFarDown);
    backToTopButton.classList.toggle("opacity-0", !isFarDown);
    backToTopButton.classList.toggle("invisible", !isFarDown);
  };

  window.addEventListener("scroll", handleScroll);
  // Jalankan sekali saat load agar kondisi awal sesuai
  handleScroll();

  // ----------------------------------------------------
  // Smooth Scrolling untuk Anchor Links
  // ----------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navHeight = mainNav.offsetHeight; // Ambil tinggi navbar
        const offsetPosition = targetElement.offsetTop - navHeight; // Kurangi dengan tinggi navbar

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
