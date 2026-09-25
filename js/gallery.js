/* =====================================================
   LBS COMPUTER TRAINING INSTITUTE
   GALLERY PAGE JAVASCRIPT
   ===================================================== */


/* =====================================================
   GALLERY LIGHTBOX
   ===================================================== */

function openGallery(image, title, description) {

    const lightbox =
        document.getElementById("galleryLightbox");

    const previewImage =
        document.getElementById("galleryPreviewImage");

    const previewTitle =
        document.getElementById("galleryPreviewTitle");

    const previewDescription =
        document.getElementById("galleryPreviewDescription");


    if (!lightbox || !previewImage) {
        return;
    }


    previewImage.src = image;

    previewImage.alt = title;

    if (previewTitle) {
        previewTitle.textContent = title;
    }

    if (previewDescription) {
        previewDescription.textContent = description;
    }


    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}



/* =====================================================
   CLOSE GALLERY
   ===================================================== */

function closeGallery() {

    const lightbox =
        document.getElementById("galleryLightbox");


    if (!lightbox) {
        return;
    }


    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}



/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeGallery();

    }

});



/* =====================================================
   LIGHTBOX BACKGROUND CLICK
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const lightbox =
        document.getElementById("galleryLightbox");


    if (!lightbox) {
        return;
    }


    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeGallery();

        }

    });

});



/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (!menuToggle || !navMenu) {
        return;
    }


    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-open");


        const isOpen =
            navMenu.classList.contains("mobile-open");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            icon.className = isOpen
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";

        }

    });


    /* Close menu after clicking a link */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove(
                "mobile-open"
            );


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.className =
                    "fa-solid fa-bars";

            }

        });

    });

});



/* =====================================================
   THEME TOGGLE
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle =
        document.getElementById("themeToggle");


    if (!themeToggle) {
        return;
    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        const icon =
            themeToggle.querySelector("i");


        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );


        if (icon) {

            icon.className = isDark
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";

        }


        /* Save theme */

        localStorage.setItem(
            "lbs-theme",
            isDark ? "dark" : "light"
        );

    });


    /* Load saved theme */

    const savedTheme =
        localStorage.getItem("lbs-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );


        const icon =
            themeToggle.querySelector("i");


        if (icon) {

            icon.className =
                "fa-solid fa-sun";

        }

    }

});