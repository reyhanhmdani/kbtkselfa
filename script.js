// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  // Pilih semua tautan <a> di dalam nav utama untuk desktop
  // Kita tidak lagi memilih div .md\:flex, tapi langsung a di dalam space-x-8
  const navLinks = document.querySelectorAll("#mainNav .space-x-8 a");

  // mobile
  const mobileMenu = document.getElementById("mobileMenu");

  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
    nav.classList.remove("md:bg-transparent");
    nav.classList.add("md:bg-white");

    // Ubah warna teks DAN ikon menjadi text-secondary saat discroll
    navLinks.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-secondary");
    });
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("md:bg-transparent");
    nav.classList.remove("md:bg-white");

    // Ubah warna teks DAN ikon kembali menjadi text-white saat di paling atas
    navLinks.forEach((link) => {
      link.classList.remove("text-secondary");
      link.classList.add("text-white");
    });
  }

  // Logic untuk Mobile Menu (mobileMenu)
  // Kita akan menggunakan opacity dan translate-y untuk efek slide/fade
  if (window.scrollY > 100) {
    // Angka 100px ini bisa disesuaikan
    // Munculkan mobile menu
    mobileMenu.classList.remove("opacity-0", "translate-y-full", "invisible");
    mobileMenu.classList.add("opacity-100", "translate-y-0", "visible");
  } else {
    // Sembunyikan mobile menu
    mobileMenu.classList.remove("opacity-100", "translate-y-0", "visible");
    mobileMenu.classList.add("opacity-0", "translate-y-full", "invisible");
  }
});

// Back to Top Button
window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.add("opacity-0", "invisible");
    backToTopButton.classList.remove("opacity-100", "visible");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Baris ini dihapus karena mobileMenu (bottom nav) tidak di-toggle hidden/visible
      // const mobileMenu = document.getElementById("mobileMenu");
      // mobileMenu.classList.add("hidden");

      // Scroll to target
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });

  // --- Animasi Fade-Up untuk Program Cards ---
  function animateProgramCardsFadeUp(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Hapus kelas yang menyembunyikan
        entry.target.classList.remove("opacity-0", "translate-y-8");
        // Tambahkan kelas untuk menampilkan
        entry.target.classList.add("opacity-100", "translate-y-0");

        // Berhenti mengamati elemen ini setelah animasinya dipicu
        observer.unobserve(entry.target);
      }
    });
  }

  const programCardFadeUpOptions = {
    root: null, // Mengamati relatif terhadap viewport
    rootMargin: "0px",
    threshold: 0.1, // Pemicu saat 10% dari kartu terlihat
  };

  const programCardFadeUpObserver = new IntersectionObserver(animateProgramCardsFadeUp, programCardFadeUpOptions);

  // Amati semua program-card dengan atribut data-animate="true"
  const programCardsToAnimate = document.querySelectorAll('.program-card[data-animate="true"]');

  programCardsToAnimate.forEach((card) => {
    programCardFadeUpObserver.observe(card);
  });
});
