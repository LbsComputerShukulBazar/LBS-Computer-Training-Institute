/* =========================================================
   LBS ADMIN LOGIN
   FIREBASE AUTHENTICATION
   ========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


/* =========================================================
   FIREBASE CONFIG
   ========================================================= */

const firebaseConfig = {

    apiKey:
        "AIzaSyAU6_mKdAqkrEXFpSxMw7I70G4OD4ItNEQ",

    authDomain:
        "lbs-computer-admin.firebaseapp.com",

    databaseURL:
        "https://lbs-computer-admin-default-rtdb.firebaseio.com",

    projectId:
        "lbs-computer-admin",

    storageBucket:
        "lbs-computer-admin.firebasestorage.app",

    messagingSenderId:
        "575598429073",

    appId:
        "1:575598429073:web:29bf1083378f28e6405030"
};


/* =========================================================
   FIREBASE INITIALIZE
   ========================================================= */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


/* =========================================================
   ELEMENTS
   ========================================================= */

const loginForm =
    document.getElementById("adminLoginForm");

const emailInput =
    document.getElementById("adminEmail");

const passwordInput =
    document.getElementById("adminPassword");

const loginButton =
    document.getElementById("adminLoginBtn");

const loginStatus =
    document.getElementById("loginStatus");

const togglePassword =
    document.getElementById("togglePassword");


/* =========================================================
   PASSWORD TOGGLE
   ========================================================= */

if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", function () {

        const icon =
            togglePassword.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            if (icon) {
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            if (icon) {
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );
        }

    });
}


/* =========================================================
   LOGIN
   ========================================================= */

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;


        if (!email || !password) {

            showStatus(
                "Please enter email and password.",
                "error"
            );

            return;
        }


        setLoginLoading(true);

        showStatus(
            "Signing in...",
            "loading"
        );


        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


            showStatus(
                "Login successful! Opening Admin Panel...",
                "success"
            );


            setTimeout(function () {

                window.location.replace(
                    "admin.html"
                );

            }, 700);


        } catch (error) {

            console.error(
                "Admin Login Error:",
                error
            );


            let message =
                "Login failed. Please check your email and password.";


            if (error.code === "auth/invalid-credential") {

                message =
                    "Invalid email or password.";

            } else if (error.code === "auth/user-not-found") {

                message =
                    "Admin account not found.";

            } else if (error.code === "auth/wrong-password") {

                message =
                    "Incorrect password.";

            } else if (error.code === "auth/invalid-email") {

                message =
                    "Please enter a valid email address.";

            } else if (error.code === "auth/too-many-requests") {

                message =
                    "Too many login attempts. Please try again later.";

            } else if (error.code === "auth/network-request-failed") {

                message =
                    "Network error. Please check your internet connection.";
            }


            showStatus(
                message,
                "error"
            );

            setLoginLoading(false);
        }

    });
}


/* =========================================================
   STATUS
   ========================================================= */

function showStatus(message, type) {

    if (!loginStatus) {
        return;
    }

    loginStatus.textContent =
        message;

    loginStatus.className =
        "login-status " + type;
}


/* =========================================================
   LOGIN BUTTON LOADING
   ========================================================= */

function setLoginLoading(loading) {

    if (!loginButton) {
        return;
    }


    const icon =
        loginButton.querySelector("i");

    const text =
        loginButton.querySelector("span");


    if (loading) {

        loginButton.disabled = true;
        loginButton.style.opacity = "0.75";


        if (icon) {
            icon.className =
                "fa-solid fa-spinner fa-spin";
        }


        if (text) {
            text.textContent =
                "Signing in...";
        }


    } else {

        loginButton.disabled = false;
        loginButton.style.opacity = "1";


        if (icon) {
            icon.className =
                "fa-solid fa-right-to-bracket";
        }


        if (text) {
            text.textContent =
                "Login to Admin Panel";
        }
    }
}


/* =========================================================
   AUTH STATE
   ========================================================= */

onAuthStateChanged(auth, function (user) {

    if (user) {

        console.log(
            "Admin authenticated:",
            user.email
        );

    }

});


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const themeIcon =
        themeToggle.querySelector("i");

    const savedTheme =
        localStorage.getItem("lbs-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");


        if (isDark) {

            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }

            localStorage.setItem(
                "lbs-theme",
                "dark"
            );

        } else {

            if (themeIcon) {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }

            localStorage.setItem(
                "lbs-theme",
                "light"
            );
        }

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    const menuIcon =
        menuToggle.querySelector("i");


    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");


        const menuOpen =
            navMenu.classList.contains("show");


        menuToggle.setAttribute(
            "aria-expanded",
            menuOpen
        );


        if (menuIcon) {

            if (menuOpen) {

                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-xmark");

            } else {

                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }
        }

    });


    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");


            if (menuIcon) {
                menuIcon.classList.remove("fa-xmark");
                menuIcon.classList.add("fa-bars");
            }


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });


            link.classList.add("active");

        });

    });

}