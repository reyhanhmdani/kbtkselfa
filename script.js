// --- JS BARU UNTUK MOBILE MENU (Sidebar) ---

const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay"); // Ambil elemen overlay
const navLinksMobile = document.querySelectorAll('#mobile-menu-container a[data-nav-link]');

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

// Fungsi untuk toggle menu
function toggleMobileMenu() {
    mobileMenuContainer.classList.toggle("-translate-x-full"); // Geser menu horizontal

    // Toggle overlay
    mobileMenuOverlay.classList.toggle("opacity-0");
    mobileMenuOverlay.classList.toggle("invisible");

    // Efek animasi hamburger (tetap sama)
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("translate-y-1.5");
    line2.classList.toggle("opacity-0");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("-translate-y-1.5");
}

// Tambahkan event listener untuk tombol hamburger
hamburgerButton.addEventListener("click", toggleMobileMenu);

// Tutup menu mobile saat link diklik
navLinksMobile.forEach(link => {
    link.addEventListener("click", function() {
        if (!mobileMenuContainer.classList.contains("-translate-x-full")) {
            toggleMobileMenu();
        }
    });
});

// Tutup menu mobile saat overlay diklik
mobileMenuOverlay.addEventListener("click", toggleMobileMenu);


// --- SCRIPT LAMA ANDA (Tidak Ada Perubahan pada logika ini) ---

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll("#mainNav .space-x-8 a");

    // Periksa apakah hamburger menu sedang terbuka
    // Kita cek apakah menu sidebar sedang terlihat
    const isMobileMenuOpen = !mobileMenuContainer.classList.contains("-translate-x-full");

    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
        nav.classList.remove("md:bg-transparent");
        nav.classList.add("md:bg-white");

        // Hanya ubah warna teks desktop jika menu mobile tidak terbuka
        if (!isMobileMenuOpen) { // Kondisi ini penting
            navLinks.forEach((link) => {
                link.classList.remove("text-white");
                link.classList.add("text-secondary");
            });
        }
    } else {
        nav.classList.remove("scrolled");
        nav.classList.add("md:bg-transparent");
        nav.classList.remove("md:bg-white");

        // Hanya ubah warna teks desktop jika menu mobile tidak terbuka
        if (!isMobileMenuOpen) { // Kondisi ini penting
            navLinks.forEach((link) => {
                link.classList.remove("text-secondary");
                link.classList.add("text-white");
            });
        }
    }

    // Logic untuk Back to Top Button (tetap sama)
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
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    });
});