/* =====================================================
   LBS COMPUTER TRAINING INSTITUTE
   COMPLETE WEBSITE JAVASCRIPT
   ===================================================== */


/* =====================================================
   DARK / LIGHT MODE
   ===================================================== */

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


    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );

            const isDarkMode =
                document.body.classList.contains(
                    "dark-mode"
                );


            if (isDarkMode) {

                if (themeIcon) {

                    themeIcon.classList.remove(
                        "fa-moon"
                    );

                    themeIcon.classList.add(
                        "fa-sun"
                    );

                }

                localStorage.setItem(
                    "lbs-theme",
                    "dark"
                );

            } else {

                if (themeIcon) {

                    themeIcon.classList.remove(
                        "fa-sun"
                    );

                    themeIcon.classList.add(
                        "fa-moon"
                    );

                }

                localStorage.setItem(
                    "lbs-theme",
                    "light"
                );

            }

        }
    );

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    const menuIcon =
        menuToggle.querySelector("i");


    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("show");


            const menuOpen =
                navMenu.classList.contains(
                    "show"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                menuOpen
            );


            if (menuIcon) {

                if (menuOpen) {

                    menuIcon.classList.remove(
                        "fa-bars"
                    );

                    menuIcon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    menuIcon.classList.remove(
                        "fa-xmark"
                    );

                    menuIcon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "show"
                );


                if (menuIcon) {

                    menuIcon.classList.remove(
                        "fa-xmark"
                    );

                    menuIcon.classList.add(
                        "fa-bars"
                    );

                }


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    });

}


/* =====================================================
   HERO MOUSE PARALLAX
   ===================================================== */

const heroSection =
    document.querySelector(
        ".hero-section"
    );

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (heroSection && heroVisual) {

    heroSection.addEventListener(
        "mousemove",
        function (event) {

            if (window.innerWidth <= 1000) {
                return;
            }


            const rect =
                heroSection.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;


            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;


            const moveX =
                x * 10;

            const moveY =
                y * 10;


            heroVisual.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroSection.addEventListener(
        "mouseleave",
        function () {

            heroVisual.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =====================================================
   ONLINE ADMISSION
   SUBMIT → WHATSAPP
   ===================================================== */

const admissionForm =
    document.getElementById(
        "admissionForm"
    );


if (admissionForm) {

    admissionForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const studentName =
                document
                    .getElementById(
                        "studentName"
                    )
                    .value
                    .trim();


            const studentMobile =
                document
                    .getElementById(
                        "studentMobile"
                    )
                    .value
                    .trim();


            const admissionCourse =
                document
                    .getElementById(
                        "admissionCourse"
                    )
                    .value;


            const studentQualification =
                document
                    .getElementById(
                        "studentQualification"
                    )
                    .value
                    .trim();


            if (
                studentName === "" ||
                studentMobile === "" ||
                admissionCourse === "" ||
                studentQualification === ""
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            if (
                !/^[0-9]{10}$/.test(
                    studentMobile
                )
            ) {

                alert(
                    "Please enter a valid 10 digit mobile number."
                );

                return;

            }


            const whatsappNumber =
                "919807440024";


            const message =

`*LBS COMPUTER TRAINING INSTITUTE*

*ONLINE ADMISSION ENQUIRY*

👤 *Student Name:* ${studentName}

📱 *Mobile Number:* ${studentMobile}

🎓 *Course:* ${admissionCourse}

📚 *Qualification:* ${studentQualification}

📍 *Institute:*
Shukul Bazar, Amethi – 227811`;


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    message
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =====================================================
   ONLINE EXAM REGISTRATION
   CAPTCHA + ROLL NUMBER + STUDENT RECORD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const examForm =
            document.getElementById(
                "examRegistrationForm"
            );


        if (!examForm) {
            return;
        }


        /* =================================================
           HTML ELEMENTS
           ================================================= */

        const nameInput =
            document.getElementById(
                "examStudentName"
            );


        const fatherInput =
            document.getElementById(
                "examFatherName"
            );


        const mobileInput =
            document.getElementById(
                "examMobile"
            );


        const courseInput =
            document.getElementById(
                "examCourse"
            );


        const qualificationInput =
            document.getElementById(
                "examQualification"
            );


        const captchaQuestion =
            document.getElementById(
                "captchaQuestion"
            );


        const captchaInput =
            document.getElementById(
                "captchaAnswer"
            );


        const refreshCaptcha =
            document.getElementById(
                "refreshCaptcha"
            );


        /* =================================================
           CAPTCHA
           ================================================= */

        let captchaAnswer = 0;


        function generateCaptcha() {

            const number1 =
                Math.floor(
                    Math.random() * 9
                ) + 1;


            const number2 =
                Math.floor(
                    Math.random() * 9
                ) + 1;


            captchaAnswer =
                number1 + number2;


            if (captchaQuestion) {

                captchaQuestion.textContent =
                    number1 +
                    " + " +
                    number2 +
                    " = ?";

            }


            if (captchaInput) {

                captchaInput.value = "";

            }

        }


        generateCaptcha();


        if (refreshCaptcha) {

            refreshCaptcha.addEventListener(
                "click",
                function () {

                    generateCaptcha();

                }
            );

        }


        /* =================================================
           ROLL NUMBER GENERATOR
           ================================================= */

        function generateRollNumber() {

            const year =
                new Date().getFullYear();


            let serial =
                parseInt(
                    localStorage.getItem(
                        "lbsExamSerial"
                    )
                ) || 0;


            serial++;


            localStorage.setItem(
                "lbsExamSerial",
                serial
            );


            const formattedSerial =
                String(serial).padStart(
                    4,
                    "0"
                );


            return (
                "LBS-" +
                year +
                "-" +
                formattedSerial
            );

        }


        /* =================================================
   EXAM FORM SUBMIT
   ================================================= */

examForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const studentName =
            nameInput.value.trim();

        const fatherName =
            fatherInput.value.trim();

        const mobile =
            mobileInput.value.trim();

        const course =
            courseInput.value;

        const qualification =
            qualificationInput.value.trim();

        const enteredCaptcha =
            captchaInput.value.trim();


        /* =================================================
           REQUIRED FIELDS
           ================================================= */

        if (
            studentName === "" ||
            fatherName === "" ||
            mobile === "" ||
            course === "" ||
            qualification === "" ||
            enteredCaptcha === ""
        ) {

            alert(
                "Please fill all required fields."
            );

            return;

        }


        /* =================================================
           MOBILE VALIDATION
           ================================================= */

        if (
            !/^[0-9]{10}$/.test(
                mobile
            )
        ) {

            alert(
                "Please enter a valid 10 digit mobile number."
            );

            mobileInput.focus();

            return;

        }


        /* =================================================
           CAPTCHA
           ================================================= */

        if (
            Number(enteredCaptcha) !==
            captchaAnswer
        ) {

            alert(
                "Incorrect CAPTCHA. Please try again."
            );

            generateCaptcha();

            captchaInput.focus();

            return;

        }


        /* =================================================
           FIREBASE CHECK
           ================================================= */

        if (
            typeof database ===
            "undefined"
        ) {

            alert(
                "Database connection is not available.\n\n" +
                "Please try again."
            );

            return;

        }


        /* =================================================
           DISABLE SUBMIT BUTTON
           ================================================= */

        const submitButton =
            examForm.querySelector(
                'button[type="submit"]'
            );


        if (submitButton) {

            submitButton.disabled =
                true;

        }


        /* =================================================
           CENTRAL FIREBASE ROLL NUMBER
           ================================================= */

        const counterRef =
            database.ref(
                "registrationCounter"
            );


        counterRef.transaction(

            function (currentValue) {

                return (
                    Number(
                        currentValue
                    ) || 0
                ) + 1;

            },

            function (
                error,
                committed,
                snapshot
            ) {

                /* =========================================
                   FIREBASE ERROR
                   ========================================= */

                if (error) {

                    console.error(
                        "Registration Counter Error:",
                        error
                    );

                    alert(
                        "Registration failed.\n\n" +
                        "Please try again."
                    );

                    if (submitButton) {

                        submitButton.disabled =
                            false;

                    }

                    return;

                }


                /* =========================================
                   TRANSACTION NOT COMMITTED
                   ========================================= */

                if (!committed) {

                    alert(
                        "Registration could not be completed.\n\n" +
                        "Please try again."
                    );

                    if (submitButton) {

                        submitButton.disabled =
                            false;

                    }

                    return;

                }


                /* =========================================
                   CREATE ROLL NUMBER
                   ========================================= */

                const serial =
                    Number(
                        snapshot.val()
                    );


                const year =
                    new Date()
                        .getFullYear();


                const formattedSerial =
                    String(
                        serial
                    ).padStart(
                        4,
                        "0"
                    );


                const rollNumber =
                    "LBS-" +
                    year +
                    "-" +
                    formattedSerial;


                /* =========================================
                   STUDENT DATA
                   ========================================= */

                const studentData = {

                    rollNumber:
                        rollNumber,

                    name:
                        studentName,

                    fatherName:
                        fatherName,

                    mobile:
                        mobile,

                    course:
                        course,

                    qualification:
                        qualification,

                    registeredAt:
                        new Date()
                            .toISOString(),

                    timestamp:
                        Date.now()

                };


                /* =========================================
                   SAVE STUDENT TO FIREBASE
                   ========================================= */

                database
                    .ref(
                        "students/" +
                        rollNumber
                    )
                    .set(
                        studentData
                    )

                    .then(
                        function () {

                            /* =========================
                               LOCAL STORAGE
                               ========================= */

                            localStorage.setItem(

                                "lbsStudent_" +
                                rollNumber,

                                JSON.stringify(
                                    studentData
                                )

                            );


                            localStorage.setItem(

                                "lbsExamStudent",

                                JSON.stringify(
                                    studentData
                                )

                            );


                            localStorage.setItem(

                                "lbsCurrentRollNumber",

                                rollNumber

                            );


                            /* =========================
                               CLEAR OLD LOGIN
                               ========================= */

                            localStorage.removeItem(
                                "lbsLoggedInStudent"
                            );


                            /* =========================
                               SUCCESS POPUP
                               ========================= */

                            const successPopup =
                                document.getElementById(
                                    "examSuccessPopup"
                                );


                            const successStudentName =
                                document.getElementById(
                                    "successStudentName"
                                );


                            const successCourse =
                                document.getElementById(
                                    "successCourse"
                                );


                            const successRollNumber =
                                document.getElementById(
                                    "successRollNumber"
                                );


                            if (
                                successStudentName
                            ) {

                                successStudentName
                                    .textContent =
                                    studentName;

                            }


                            if (
                                successCourse
                            ) {

                                successCourse
                                    .textContent =
                                    course;

                            }


                            if (
                                successRollNumber
                            ) {

                                successRollNumber
                                    .textContent =
                                    rollNumber;

                            }


                            if (
                                successPopup
                            ) {

                                successPopup
                                    .classList
                                    .add(
                                        "show"
                                    );

                                document.body.style
                                    .overflow =
                                    "hidden";

                            }


                            /* =========================
                               RESET FORM
                               ========================= */

                            examForm.reset();

                            generateCaptcha();


                            console.log(
                                "Student Registered:",
                                studentData
                            );

                        }
                    )

                    .catch(
                        function (error) {

                            console.error(
                                "Student Firebase Save Error:",
                                error
                            );

                            alert(
                                "Registration failed.\n\n" +
                                "Please try again."
                            );

                        }
                    )

                    .finally(
                        function () {

                            if (submitButton) {

                                submitButton.disabled =
                                    false;

                            }

                        }
                    );

            },

            false

        );

    }
);

    }
);


/* =====================================================
   SUCCESS POPUP CONTROLS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        const successPopup =
            document.getElementById(
                "examSuccessPopup"
            );


        const closeExamSuccess =
            document.getElementById(
                "closeExamSuccess"
            );


        const closeSuccessBtn =
            document.getElementById(
                "closeSuccessBtn"
            );


        const copyRollNumber =
            document.getElementById(
                "copyRollNumber"
            );


        if (!successPopup) {
            return;
        }


        function closeSuccessPopup() {

            successPopup.classList.remove(
                "show"
            );

            document.body.style.overflow =
                "";

        }


        if (closeExamSuccess) {

            closeExamSuccess.addEventListener(
                "click",
                closeSuccessPopup
            );

        }


        if (closeSuccessBtn) {

            closeSuccessBtn.addEventListener(
                "click",
                closeSuccessPopup
            );

        }


        successPopup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    successPopup
                ) {

                    closeSuccessPopup();

                }

            }
        );


/* =================================================  
       COPY ROLL NUMBER  
       ================================================= */  
            if (copyRollNumber) {

            copyRollNumber.addEventListener(
                "click",
                function () {

                    const rollNumberElement =
                        document.getElementById(
                            "successRollNumber"
                        );

                    if (!rollNumberElement) {
                        return;
                    }

                    const rollNumber =
                        rollNumberElement.textContent.trim();


                    if (!rollNumber) {
                        return;
                    }


                    /* Copy Roll Number */

                    navigator.clipboard.writeText(
                        rollNumber
                    ).then(function () {

                        copyRollNumber.innerHTML =
                            '<i class="fa-solid fa-check"></i> Copied!';


                        setTimeout(function () {

                            copyRollNumber.innerHTML =
                                '<i class="fa-regular fa-copy"></i> Copy Roll Number';

                        }, 1800);


                    }).catch(function () {

                        /* Fallback copy */

                        const textArea =
                            document.createElement("textarea");

                        textArea.value =
                            rollNumber;

                        document.body.appendChild(
                            textArea
                        );

                        textArea.select();

                        document.execCommand(
                            "copy"
                        );

                        document.body.removeChild(
                            textArea
                        );


                        copyRollNumber.innerHTML =
                            '<i class="fa-solid fa-check"></i> Copied!';


                        setTimeout(function () {

                            copyRollNumber.innerHTML =
                                '<i class="fa-regular fa-copy"></i> Copy Roll Number';

                        }, 1800);

                    });

                }
            );

        }

    }
);
/* =====================================================
   STUDENT PORTAL LOGIN
   ROLL NUMBER → STUDENT DASHBOARD
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("studentLoginForm");

    if (!loginForm) {
        return;
    }


    loginForm.addEventListener("submit",async function (event) {

        event.preventDefault();


        /* =================================================
           GET ROLL NUMBER
           ================================================= */

        const rollInput =
            document.getElementById("studentRollNumber");

        if (!rollInput) {
            return;
        }


        const enteredRoll =
            rollInput.value.trim().toUpperCase();


        if (enteredRoll === "") {

            alert("Please enter your Roll Number.");

            return;
        }

/* =================================================
   FIND STUDENT IN FIREBASE
   ================================================= */

if (
    typeof database === "undefined"
) {
    
    alert(
        "Database connection is not available.\n\n" +
        "Please try again."
    );
    
    return;
}


let savedStudent = null;


try {
    
    const studentSnapshot =
        await database
        .ref(
            "students/" +
            enteredRoll
        )
        .once("value");
    
    
    if (
        studentSnapshot.exists()
    ) {
        
        savedStudent =
            JSON.stringify(
                studentSnapshot.val()
            );
        
    }
    
} catch (error) {
    
    console.error(
        "Student Login Firebase Error:",
        error
    );
    
    alert(
        "Unable to verify Roll Number.\n\n" +
        "Please try again."
    );
    
    return;
    
}


if (!savedStudent) {

    /* =================================================
       PREMIUM INVALID ROLL NUMBER POPUP
       ================================================= */

    const oldErrorPopup =
        document.getElementById(
            "invalidRollPopup"
        );

    if (oldErrorPopup) {
        oldErrorPopup.remove();
    }


    const errorPopup =
        document.createElement("div");

    errorPopup.id =
        "invalidRollPopup";


    errorPopup.innerHTML = `

        <div class="invalid-roll-overlay">

            <div class="invalid-roll-card">

                <button
                    type="button"
                    class="invalid-roll-close"
                    id="invalidRollClose">

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <div class="invalid-roll-icon">

                    <i class="fa-solid fa-circle-exclamation"></i>

                </div>


                <span class="invalid-roll-tag">

                    <i class="fa-solid fa-shield-halved"></i>

                    STUDENT VERIFICATION

                </span>


                <h2>
                    Roll Number Not Found
                </h2>


                <p>

                    We couldn't find any student record
                    associated with this Roll Number.

                </p>


                <div class="invalid-roll-info">

                    <i class="fa-solid fa-circle-info"></i>

                    <span>
                        Please enter the exact Roll Number
                        generated during registration.
                    </span>

                </div>


                <button
                    type="button"
                    id="invalidRollTryAgain"
                    class="invalid-roll-btn">

                    <i class="fa-solid fa-rotate-right"></i>

                    Try Again

                </button>


                <div class="invalid-roll-secure">

                    <i class="fa-solid fa-lock"></i>

                    Secure Student Verification

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        errorPopup
    );


    /* =================================================
       POPUP CSS
       ================================================= */

    if (
        !document.getElementById(
            "invalidRollPopupStyle"
        )
    ) {

        const style =
            document.createElement("style");


        style.id =
            "invalidRollPopupStyle";


        style.textContent = `

            .invalid-roll-overlay {

                position: fixed;

                inset: 0;

                z-index: 999999;

                display: flex;

                align-items: center;

                justify-content: center;

                padding: 20px;

                background:
                    rgba(3, 7, 18, .78);

                backdrop-filter:
                    blur(10px);

                animation:
                    invalidRollFade .25s ease;

            }


            .invalid-roll-card {

                position: relative;

                width: 100%;

                max-width: 440px;

                padding: 38px 30px 28px;

                border-radius: 24px;

                text-align: center;

                color: #fff;

                background:
                    linear-gradient(
                        145deg,
                        #111827,
                        #172033
                    );

                border:
                    1px solid
                    rgba(255,255,255,.12);

                box-shadow:
                    0 25px 80px
                    rgba(0,0,0,.50);

                animation:
                    invalidRollIn .3s ease;

            }


            .invalid-roll-close {

                position: absolute;

                top: 15px;

                right: 15px;

                width: 38px;

                height: 38px;

                border: none;

                border-radius: 50%;

                display: flex;

                align-items: center;

                justify-content: center;

                cursor: pointer;

                color: #fff;

                background:
                    rgba(255,255,255,.08);

                transition: .25s;

            }


            .invalid-roll-close:hover {

                transform:
                    rotate(90deg);

                background:
                    rgba(255,255,255,.16);

            }


            .invalid-roll-icon {

                width: 76px;

                height: 76px;

                margin: 0 auto 18px;

                border-radius: 50%;

                display: flex;

                align-items: center;

                justify-content: center;

                font-size: 31px;

                color: #fb7185;

                background:
                    rgba(244,63,94,.11);

                border:
                    1px solid
                    rgba(244,63,94,.25);

                box-shadow:
                    0 0 35px
                    rgba(244,63,94,.12);

            }


            .invalid-roll-tag {

                display: inline-flex;

                align-items: center;

                gap: 7px;

                padding: 7px 13px;

                border-radius: 30px;

                font-size: 10px;

                font-weight: 800;

                letter-spacing: 1px;

                color: #fb7185;

                background:
                    rgba(244,63,94,.09);

            }


            .invalid-roll-card h2 {

                margin:
                    18px 0 10px;

                font-size: 25px;

            }


            .invalid-roll-card p {

                margin:
                    0 auto 20px;

                max-width: 350px;

                line-height: 1.7;

                font-size: 14px;

                color:
                    rgba(255,255,255,.68);

            }


            .invalid-roll-info {

                display: flex;

                align-items: flex-start;

                gap: 10px;

                padding: 13px 15px;

                margin-bottom: 22px;

                border-radius: 13px;

                text-align: left;

                font-size: 13px;

                line-height: 1.5;

                color: #fda4af;

                background:
                    rgba(244,63,94,.07);

                border:
                    1px solid
                    rgba(244,63,94,.14);

            }


            .invalid-roll-info i {

                margin-top: 2px;

                flex-shrink: 0;

            }


            .invalid-roll-btn {

                width: 100%;

                min-height: 50px;

                border: none;

                border-radius: 13px;

                cursor: pointer;

                display: inline-flex;

                align-items: center;

                justify-content: center;

                gap: 9px;

                font-size: 14px;

                font-weight: 700;

                color: #fff;

                background:
                    linear-gradient(
                        135deg,
                        #fb7185,
                        #e11d48
                    );

                box-shadow:
                    0 10px 28px
                    rgba(225,29,72,.22);

                transition: .25s;

            }


            .invalid-roll-btn:hover {

                transform:
                    translateY(-2px);

                box-shadow:
                    0 14px 34px
                    rgba(225,29,72,.32);

            }


            .invalid-roll-secure {

                margin-top: 17px;

                display: flex;

                align-items: center;

                justify-content: center;

                gap: 7px;

                font-size: 10px;

                color:
                    rgba(255,255,255,.40);

            }


            @keyframes invalidRollFade {

                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }

            }


            @keyframes invalidRollIn {

                from {

                    opacity: 0;

                    transform:
                        translateY(20px)
                        scale(.96);

                }

                to {

                    opacity: 1;

                    transform:
                        translateY(0)
                        scale(1);

                }

            }


            @media (max-width: 600px) {

                .invalid-roll-card {

                    padding:
                        34px 20px 23px;

                    border-radius: 20px;

                }


                .invalid-roll-card h2 {

                    font-size: 22px;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    /* =================================================
       CLOSE POPUP
       ================================================= */

    const closeBtn =
        errorPopup.querySelector(
            "#invalidRollClose"
        );


    const tryAgainBtn =
        errorPopup.querySelector(
            "#invalidRollTryAgain"
        );


    function closeInvalidRollPopup() {

        errorPopup.remove();

    }


    if (closeBtn) {

        closeBtn.addEventListener(
            "click",
            closeInvalidRollPopup
        );

    }


    if (tryAgainBtn) {

        tryAgainBtn.addEventListener(
            "click",
            closeInvalidRollPopup
        );

    }


    /* CLICK OUTSIDE */

    const overlay =
        errorPopup.querySelector(
            ".invalid-roll-overlay"
        );


    if (overlay) {

        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === overlay
                ) {

                    closeInvalidRollPopup();

                }

            }
        );

    }


    return;
}

        /* =================================================
           READ STUDENT DATA
           ================================================= */

        let student;

        try {

            student =
                JSON.parse(savedStudent);

        } catch (error) {

            alert(
                "Student record could not be loaded."
            );

            return;
        }


        /* =================================================
           SAVE LOGIN SESSION
           ================================================= */

        localStorage.setItem(
            "lbsLoggedInStudent",
            JSON.stringify(student)
        );


        /* =================================================
           LOGIN SUCCESS
           ================================================= */

        /* =================================================
   PREMIUM WELCOME POPUP
   ================================================= */

const welcomePopup =
    document.getElementById("loginWelcomePopup");

const welcomeName =
    document.getElementById("loginWelcomeName");

const continueBtn =
    document.getElementById("loginWelcomeContinue");

const closeWelcome =
    document.getElementById("closeLoginWelcome");


if (welcomePopup) {

    welcomeName.textContent =
        student.name || "Student";

    welcomePopup.classList.add("show");

    document.body.style.overflow = "hidden";


    function closeWelcomePopup() {

        welcomePopup.classList.remove("show");

        document.body.style.overflow = "";

    }


    if (continueBtn) {

        continueBtn.onclick =
            function () {

                closeWelcomePopup();

            };

    }


    if (closeWelcome) {

        closeWelcome.onclick =
            function () {

                closeWelcomePopup();

            };

    }

}

        /* =================================================
           GET DASHBOARD
           ================================================= */

        const dashboard =
            document.getElementById(
                "studentDashboard"
            );


        if (!dashboard) {

            alert(
                "Student dashboard section not found."
            );

            return;
        }


        /* =================================================
           DASHBOARD ELEMENTS
           ================================================= */

        const dashboardStudentName =
            document.getElementById(
                "dashboardStudentName"
            );


        const dashboardName =
            document.getElementById(
                "dashboardName"
            );


        const dashboardRollNumber =
            document.getElementById(
                "dashboardRollNumber"
            );


        const dashboardFatherName =
            document.getElementById(
                "dashboardFatherName"
            );


        const dashboardCourse =
            document.getElementById(
                "dashboardCourse"
            );


        const dashboardQualification =
            document.getElementById(
                "dashboardQualification"
            );


        /* =================================================
           SHOW STUDENT DATA
           ================================================= */

        if (dashboardStudentName) {

            dashboardStudentName.textContent =
                student.name || "Student";
        }


        if (dashboardName) {

            dashboardName.textContent =
                student.name || "—";
        }


        if (dashboardRollNumber) {

            dashboardRollNumber.textContent =
                student.rollNumber || "—";
        }


        if (dashboardFatherName) {

            dashboardFatherName.textContent =
                student.fatherName || "—";
        }


        if (dashboardCourse) {

            dashboardCourse.textContent =
                student.course || "—";
        }


        if (dashboardQualification) {

            dashboardQualification.textContent =
                student.qualification || "—";
        }


        /* =================================================
           SHOW DASHBOARD
           ================================================= */

        dashboard.hidden = false;

        dashboard.style.display = "block";


        /* =================================================
           SCROLL TO DASHBOARD
           ================================================= */

        setTimeout(function () {

            dashboard.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);


/* =================================================
   VIEW RESULT
   ================================================= */

const viewResultBtn =
    document.getElementById(
        "viewResultBtn"
    );


if (viewResultBtn) {

    viewResultBtn.onclick =
        function () {

            /* =========================================
               CHECK FIREBASE
               ========================================= */

            if (
                typeof database === "undefined"
            ) {

                alert(
                    "Result database is not available."
                );

                return;

            }


            /* =========================================
               CHECK STUDENT
               ========================================= */

            if (
                !student ||
                !student.rollNumber
            ) {

                alert(
                    "Student information not found."
                );

                return;

            }


            /* =========================================
               SHOW LOADING
               ========================================= */

            viewResultBtn.disabled = true;

            viewResultBtn.innerHTML = `

                <i class="fa-solid fa-spinner fa-spin"></i>

                <span>
                    Loading Result...
                </span>

            `;


            /* =========================================
               GET RESULTS FROM FIREBASE
               ========================================= */

            database
                .ref("examResults")
                .once("value")

                .then(function (snapshot) {

                    const data =
                        snapshot.val();


                    /* =================================
                       NO RESULT
                       ================================= */

                    if (!data) {

                        showStudentResultPopup(
                            null
                        );

                        return;

                    }


                    /* =================================
                       FIND CURRENT STUDENT RESULT
                       ================================= */

                    let studentResult =
                        null;


                    Object.values(data)
                        .forEach(
                            function (result) {

                                if (
                                    String(
                                        result.rollNumber
                                    ).trim()
                                    ===
                                    String(
                                        student.rollNumber
                                    ).trim()
                                ) {

                                    /* Latest result */
                                    if (
                                        !studentResult ||
                                        Number(
                                            result.timestamp || 0
                                        )
                                        >
                                        Number(
                                            studentResult.timestamp || 0
                                        )
                                    ) {

                                        studentResult =
                                            result;

                                    }

                                }

                            }
                        );


                    /* =================================
                       SHOW RESULT
                       ================================= */

                    showStudentResultPopup(
                        studentResult
                    );

                })

                .catch(function (error) {

                    console.error(
                        "View Result Error:",
                        error
                    );


                    alert(
                        "Result load नहीं हो सका।"
                    );

                })

                .finally(function () {

                    viewResultBtn.disabled =
                        false;


                    viewResultBtn.innerHTML = `

                        <i class="fa-solid fa-chart-column"></i>

                        <span>
                            View Result
                        </span>

                    `;

                });

        };

}


/* =================================================
   STUDENT RESULT POPUP
   ================================================= */

function showStudentResultPopup(
    result
) {

    /* =============================================
       REMOVE OLD POPUP
       ============================================= */

    const oldPopup =
        document.getElementById(
            "studentResultPopup"
        );


    if (oldPopup) {

        oldPopup.remove();

    }


    /* =============================================
       NO RESULT
       ============================================= */

    if (!result) {

        const noResultPopup =
            document.createElement(
                "div"
            );


        noResultPopup.id =
            "studentResultPopup";


        noResultPopup.className =
            "student-result-popup";


        noResultPopup.innerHTML = `

            <div class="student-result-card">

                <button
                    type="button"
                    class="student-result-close"
                    id="closeStudentResult">

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <div class="student-result-icon">

                    <i class="fa-solid fa-file-circle-question"></i>

                </div>


                <span class="student-result-tag">

                    RESULT STATUS

                </span>


                <h2>
                    Result Not Available
                </h2>


                <p>

                    अभी आपके Roll Number के लिए
                    कोई examination result नहीं मिला।

                </p>


                <div class="student-result-roll">

                    <i class="fa-solid fa-id-card"></i>

                    ${escapeHTML(
                        student.rollNumber || "—"
                    )}

                </div>


                <button
                    type="button"
                    class="student-result-ok"
                    id="closeStudentResult2">

                    <i class="fa-solid fa-check"></i>

                    Okay

                </button>

            </div>

        `;


        document.body.appendChild(
            noResultPopup
        );


        setTimeout(function () {

            noResultPopup.classList.add(
                "show"
            );

        }, 20);


        bindResultCloseButtons(
            noResultPopup
        );


        return;

    }


    /* =============================================
       RESULT VALUES
       ============================================= */

    const correct =
        Number(
            result.correctAnswers || 0
        );


    const wrong =
        Number(
            result.wrongAnswers || 0
        );


    const total =
        Number(
            result.totalQuestions || 0
        );


    const percentage =
        Number(
            result.percentage || 0
        );


    const passed =
        String(
            result.result || ""
        ).toUpperCase()
        ===
        "PASS";


    /* =============================================
       RESULT POPUP
       ============================================= */

    const popup =
        document.createElement(
            "div"
        );


    popup.id =
        "studentResultPopup";


    popup.className =
        "student-result-popup";


    popup.innerHTML = `

        <div class="student-result-card">

            <button
                type="button"
                class="student-result-close"
                id="closeStudentResult">

                <i class="fa-solid fa-xmark"></i>

            </button>


            <div class="student-result-icon">

                ${
                    passed
                        ? `
                            <i class="fa-solid fa-trophy"></i>
                          `
                        : `
                            <i class="fa-solid fa-clipboard-check"></i>
                          `
                }

            </div>


            <span class="student-result-tag">

                EXAMINATION RESULT

            </span>


            <h2>

                ${escapeHTML(
                    result.studentName ||
                    student.name ||
                    "Student"
                )}

            </h2>


            <div class="student-result-course">

                <i class="fa-solid fa-book-open"></i>

                ${escapeHTML(
                    result.course ||
                    student.course ||
                    "Course"
                )}

            </div>


            <div class="student-result-info">

                <div>

                    <span>
                        Roll Number
                    </span>

                    <strong>

                        ${escapeHTML(
                            result.rollNumber ||
                            student.rollNumber ||
                            "—"
                        )}

                    </strong>

                </div>


                <div>

                    <span>
                        Exam Status
                    </span>

                    <strong class="
                        ${
                            passed
                                ? "result-pass"
                                : "result-fail"
                        }
                    ">

                        ${
                            passed
                                ? "PASS"
                                : "FAIL"
                        }

                    </strong>

                </div>

            </div>


            <div class="student-result-stats">

                <div>

                    <i class="fa-solid fa-circle-check"></i>

                    <span>
                        Correct
                    </span>

                    <strong>
                        ${correct}
                    </strong>

                </div>


                <div>

                    <i class="fa-solid fa-circle-xmark"></i>

                    <span>
                        Wrong
                    </span>

                    <strong>
                        ${wrong}
                    </strong>

                </div>


                <div>

                    <i class="fa-solid fa-list-check"></i>

                    <span>
                        Total
                    </span>

                    <strong>
                        ${total}
                    </strong>

                </div>

            </div>


            <div class="student-result-percentage">

                <span>
                    Percentage
                </span>


                <strong>
                    ${percentage.toFixed(2)}%
                </strong>

            </div>


            <div class="student-result-date">

                <i class="fa-regular fa-calendar"></i>

                ${
                    result.completedAt
                        ? new Date(
                            result.completedAt
                          ).toLocaleString()
                        : "—"
                }

            </div>


            <button
                type="button"
                class="student-result-ok"
                id="closeStudentResult2">

                <i class="fa-solid fa-check"></i>

                Close Result

            </button>

        </div>

    `;


    document.body.appendChild(
        popup
    );


    setTimeout(function () {

        popup.classList.add(
            "show"
        );

    }, 20);


    bindResultCloseButtons(
        popup
    );

}


/* =================================================
   CLOSE RESULT POPUP
   ================================================= */

function bindResultCloseButtons(
    popup
) {

    const closeBtn =
        popup.querySelector(
            "#closeStudentResult"
        );


    const closeBtn2 =
        popup.querySelector(
            "#closeStudentResult2"
        );


    function closeResult() {

        popup.classList.remove(
            "show"
        );


        setTimeout(function () {

            popup.remove();

        }, 300);

    }


    if (closeBtn) {

        closeBtn.onclick =
            closeResult;

    }


    if (closeBtn2) {

        closeBtn2.onclick =
            closeResult;

    }


    popup.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                popup
            ) {

                closeResult();

            }

        }
    );

}

    });

});


/* =====================================================
   EXAM INSTRUCTIONS POPUP
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const startExamBtn =
        document.getElementById("startExamBtn");

    const examPopup =
        document.getElementById("examInstructionsPopup");

    const closePopup =
        document.getElementById("closeExamInstructions");

    const startExamNowBtn =
        document.getElementById("startExamNowBtn");


    /* OPEN POPUP */

    if (startExamBtn && examPopup) {

        startExamBtn.addEventListener("click", function () {

            examPopup.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    }


    /* CLOSE FUNCTION */

    function closeExamPopup() {

        if (!examPopup) {
            return;
        }

        examPopup.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* X BUTTON */

    if (closePopup) {

        closePopup.addEventListener(
            "click",
            closeExamPopup
        );

    }


    /* CLICK OUTSIDE */

    if (examPopup) {

        examPopup.addEventListener(
            "click",
            function (event) {

                if (event.target === examPopup) {

                    closeExamPopup();

                }

            }
        );

    }


/* =====================================================
   SUCCESS POPUP
   CONTINUE TO EXAM
   ===================================================== */

const successPopup =
    document.getElementById(
        "examSuccessPopup"
    );

const continueExamBtn =
    document.getElementById(
        "continueExamBtn"
    );


if (
    successPopup &&
    continueExamBtn
) {
    
    continueExamBtn.addEventListener(
        "click",
        function() {
            
            /* Close registration success popup */
            
            successPopup.classList.remove(
                "show"
            );
            
            document.body.style.overflow =
                "";
            
            
            /* Open exam instructions */
            
            const examInstructionsPopup =
                document.getElementById(
                    "examInstructionsPopup"
                );
            
            
            if (examInstructionsPopup) {
                
                examInstructionsPopup.classList.add(
                    "show"
                );
                
                document.body.style.overflow =
                    "hidden";
                
            }
            
        }
    );
    
}
});

/*Sab working hai bhai*/
/* =====================================================
   PREMIUM COURSE DROPDOWN
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const dropdown =
            document.getElementById(
                "premiumCourseDropdown"
            );

        const selectedButton =
            document.getElementById(
                "premiumCourseSelected"
            );

        const courseText =
            document.getElementById(
                "premiumCourseText"
            );

        const hiddenSelect =
            document.getElementById(
                "examCourse"
            );

        const options =
            dropdown
                ? dropdown.querySelectorAll(
                    ".premium-course-option"
                )
                : [];


        if (
            !dropdown ||
            !selectedButton ||
            !courseText ||
            !hiddenSelect
        ) {

            return;

        }


        /* OPEN / CLOSE */

        selectedButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                dropdown.classList.toggle(
                    "open"
                );

            }
        );


        /* SELECT COURSE */

        options.forEach(
            function (option) {

                option.addEventListener(
                    "click",
                    function () {

                        const value =
                            option.dataset.value;


                        /* Update hidden select */

                        hiddenSelect.value =
                            value;


                        /* Trigger change */

                        hiddenSelect.dispatchEvent(
                            new Event(
                                "change",
                                {
                                    bubbles: true
                                }
                            )
                        );


                        /* Update text */

                        courseText.textContent =
                            value;


                        /* Remove old selected */

                        options.forEach(
                            function (item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                        /* Select current */

                        option.classList.add(
                            "selected"
                        );


                        /* Close */

                        dropdown.classList.remove(
                            "open"
                        );

                    }
                );

            }
        );


        /* CLICK OUTSIDE */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !dropdown.contains(
                        event.target
                    )
                ) {

                    dropdown.classList.remove(
                        "open"
                    );

                }

            }
        );

    }
);
/* =====================================================
   PREMIUM ADMISSION COURSE DROPDOWN
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const dropdown =
        document.getElementById(
            "premiumAdmissionCourseDropdown"
        );

    const selectedButton =
        document.getElementById(
            "premiumAdmissionCourseSelected"
        );

    const courseText =
        document.getElementById(
            "premiumAdmissionCourseText"
        );

    const hiddenSelect =
        document.getElementById(
            "admissionCourse"
        );

    const options =
        dropdown
            ? dropdown.querySelectorAll(
                ".premium-admission-course-option"
            )
            : [];


    if (
        !dropdown ||
        !selectedButton ||
        !courseText ||
        !hiddenSelect
    ) {
        return;
    }


    /* OPEN / CLOSE */

    selectedButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();

            dropdown.classList.toggle(
                "open"
            );

        }
    );


    /* SELECT COURSE */

    options.forEach(
        function (option) {

            option.addEventListener(
                "click",
                function () {

                    const value =
                        option.dataset.value;


                    /* Hidden select update */

                    hiddenSelect.value =
                        value;


                    /* Change event */

                    hiddenSelect.dispatchEvent(
                        new Event(
                            "change",
                            {
                                bubbles: true
                            }
                        )
                    );


                    /* Selected text */

                    courseText.textContent =
                        value;


                    /* Remove previous */

                    options.forEach(
                        function (item) {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    /* Select current */

                    option.classList.add(
                        "selected"
                    );


                    /* Close dropdown */

                    dropdown.classList.remove(
                        "open"
                    );

                }
            );

        }
    );


    /* CLICK OUTSIDE */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !dropdown.contains(
                    event.target
                )
            ) {

                dropdown.classList.remove(
                    "open"
                );

            }

        }
    );

});

/* =====================================================
   CERTIFICATE VERIFICATION - FIREBASE
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const openCertificateBtn =
        document.getElementById(
            "openCertificateBtn"
        );

    const certificatePopup =
        document.getElementById(
            "certificateVerifyPopup"
        );

    const closeCertificatePopup =
        document.getElementById(
            "closeCertificatePopup"
        );

    const certificateVerifyForm =
        document.getElementById(
            "certificateVerifyForm"
        );

    const certificateRollNumber =
        document.getElementById(
            "certificateRollNumber"
        );

    const certificateMobile =
        document.getElementById(
            "certificateMobile"
        );


    /* =================================================
       OPEN POPUP
       ================================================= */

    if (
        openCertificateBtn &&
        certificatePopup
    ) {

        openCertificateBtn.addEventListener(
            "click",
            function () {

                certificatePopup.classList.add(
                    "show"
                );

                document.body.style.overflow =
                    "hidden";

                if (certificateRollNumber) {

                    certificateRollNumber.focus();

                }

            }
        );

    }


    /* =================================================
       CLOSE POPUP
       ================================================= */

    function closeCertificateVerification() {

        if (!certificatePopup) {
            return;
        }

        certificatePopup.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

        if (certificateVerifyForm) {

            certificateVerifyForm.reset();

        }

    }


    if (closeCertificatePopup) {

        closeCertificatePopup.addEventListener(
            "click",
            closeCertificateVerification
        );

    }


    /* =================================================
       CLICK OUTSIDE
       ================================================= */

    if (certificatePopup) {

        certificatePopup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    certificatePopup
                ) {

                    closeCertificateVerification();

                }

            }
        );

    }


    /* =================================================
       MOBILE NUMBER - ONLY DIGITS
       ================================================= */

    if (certificateMobile) {

        certificateMobile.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                        .replace(
                            /\D/g,
                            ""
                        )
                        .slice(
                            0,
                            10
                        );

            }
        );

    }


    /* =================================================
       CERTIFICATE VERIFICATION
       ================================================= */

    if (certificateVerifyForm) {

        certificateVerifyForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const enteredRoll =
                    certificateRollNumber
                        .value
                        .trim()
                        .toUpperCase();


                const enteredMobile =
                    certificateMobile
                        .value
                        .trim();


                /* REQUIRED */

                if (
                    enteredRoll === "" ||
                    enteredMobile === ""
                ) {

                    showCertificateMessage(
                        "warning",
                        "Please enter both Roll Number and Mobile Number."
                    );

                    return;

                }


                /* MOBILE CHECK */

                if (
                    !/^[0-9]{10}$/.test(
                        enteredMobile
                    )
                ) {

                    showCertificateMessage(
                        "warning",
                        "Please enter a valid 10 digit mobile number."
                    );

                    certificateMobile.focus();

                    return;

                }


                /* FIREBASE CHECK */

                if (
                    typeof database ===
                    "undefined"
                ) {

                    showCertificateMessage(
                        "error",
                        "Firebase database is not available. Please try again."
                    );

                    return;

                }


                const verifyButton =
                    certificateVerifyForm.querySelector(
                        ".certificate-verify-btn"
                    );


                const originalButtonHTML =
                    verifyButton
                        ? verifyButton.innerHTML
                        : "";


                if (verifyButton) {

                    verifyButton.disabled =
                        true;

                    verifyButton.innerHTML = `

                        <i class="fa-solid fa-spinner fa-spin"></i>

                        Verifying...

                    `;

                }


                database
                    .ref(
                        "students/" +
                        enteredRoll
                    )
                    .once(
                        "value"
                    )

                    .then(
                        function (snapshot) {

                            /* STUDENT NOT FOUND */

                            if (
                                !snapshot.exists()
                            ) {

                                showCertificateMessage(
                                    "error",
                                    "Roll Number not found. Please check your details."
                                );

                                return;

                            }


                            const student =
                                snapshot.val();


                            const registeredMobile =
                                String(
                                    student.mobile ||
                                    ""
                                ).trim();


                            /* MOBILE MISMATCH */

                            if (
                                registeredMobile !==
                                enteredMobile
                            ) {

                                showCertificateMessage(
                                    "error",
                                    "Mobile Number does not match the registered record."
                                );

                                return;

                            }


                            /* =================================================
                               VERIFIED
                               ================================================= */

                            showCertificateMessage(
                                "success",
                                "Verification successful! Your certificate is ready."
                            );


                            console.log(
                                "Certificate Student Verified:",
                                student
                            );


                            /*
                               अगले step में यहीं से
                               certificate screen खुलेगा.
                            */

                            setTimeout(
                                function () {

                                    closeCertificateVerification();

                                    openCertificatePreview(
                                        student
                                    );

                                },
                                900
                            );

                        }
                    )

                    .catch(
                        function (error) {

                            console.error(
                                "Certificate Verification Error:",
                                error
                            );

                            showCertificateMessage(
                                "error",
                                "Unable to verify your details. Please try again."
                            );

                        }
                    )

                    .finally(
                        function () {

                            if (verifyButton) {

                                verifyButton.disabled =
                                    false;

                                verifyButton.innerHTML =
                                    originalButtonHTML;

                            }

                        }
                    );

            }
        );

    }


    /* =================================================
       VERIFICATION MESSAGE
       ================================================= */

    function showCertificateMessage(
        type,
        message
    ) {

        const oldMessage =
            document.getElementById(
                "certificateVerifyMessage"
            );


        if (oldMessage) {

            oldMessage.remove();

        }


        const messageBox =
            document.createElement(
                "div"
            );


        messageBox.id =
            "certificateVerifyMessage";


        messageBox.className =
            "certificate-verify-message " +
            type;


        let icon =
            "fa-circle-info";


        if (type === "success") {

            icon =
                "fa-circle-check";

        }

        else if (type === "error") {

            icon =
                "fa-circle-xmark";

        }

        else if (type === "warning") {

            icon =
                "fa-triangle-exclamation";

        }


        messageBox.innerHTML = `

            <i class="fa-solid ${icon}"></i>

            <span>
                ${escapeCertificateText(message)}
            </span>

        `;


        const form =
            document.getElementById(
                "certificateVerifyForm"
            );


        if (form) {

            form.appendChild(
                messageBox
            );

        }

    }


    /* =================================================
       SAFE TEXT
       ================================================= */

    function escapeCertificateText(
        value
    ) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


/* =================================================
   PREMIUM CERTIFICATE PREVIEW
   ================================================= */

function openCertificatePreview(student) {

    if (
        typeof database === "undefined"
    ) {

        alert(
            "Firebase database is not available."
        );

        return;

    }


    const rollNumber =
        String(
            student.rollNumber || ""
        ).trim();


    if (!rollNumber) {

        alert(
            "Roll Number not found."
        );

        return;

    }


    /* =========================================
       FIND EXAM RESULT
       ========================================= */

    database
        .ref("examResults")
        .once("value")

        .then(function(snapshot) {

            let examResult = null;


            snapshot.forEach(function(child) {

                const data =
                    child.val();


                if (
                    data &&
                    String(
                        data.rollNumber || ""
                    ).trim().toUpperCase() ===
                    rollNumber.toUpperCase()
                ) {

                    examResult = data;

                }

            });


            /* =================================
               RESULT NOT FOUND
               ================================= */

            if (!examResult) {

                alert(
                    "Exam result not found for this Roll Number."
                );

                return;

            }


            /* =================================
               STUDENT DATA
               ================================= */

            const studentName =
                student.name ||
                examResult.studentName ||
                "Student";


            const fatherName =
                student.fatherName ||
                "—";


            const course =
                student.course ||
                examResult.course ||
                "—";


            /* =================================
               EXAM DATA
               ================================= */

            const totalQuestions =
                Number(
                    examResult.totalQuestions
                ) || 0;


            const correctAnswers =
                Number(
                    examResult.correctAnswers
                ) || 0;


            const percentage =
                Number(
                    examResult.percentage
                ) || 0;


            const result =
                String(
                    examResult.result ||
                    ""
                ).toUpperCase();


            /* =================================
               GRADE
               ================================= */

            let grade = "F";


            if (percentage >= 90) {

                grade = "A+";

            }

            else if (percentage >= 80) {

                grade = "A";

            }

            else if (percentage >= 70) {

                grade = "B+";

            }

            else if (percentage >= 60) {

                grade = "B";

            }

            else if (percentage >= 50) {

                grade = "C";

            }

            else if (percentage >= 33) {

                grade = "D";

            }

            else {

                grade = "F";

            }


            /* =================================
   CERTIFICATE NUMBER
   ================================= */

const certificateNumber =
    "PCTI-" +
    rollNumber.replace(
        /[^A-Z0-9-]/gi,
        ""
    );

            /* =================================
               ISSUE DATE
               ================================= */

            let issueDate = "—";


            if (
                examResult.completedAt
            ) {

                const date =
                    new Date(
                        examResult.completedAt
                    );


                if (
                    !isNaN(
                        date.getTime()
                    )
                ) {

                    issueDate =
                        date.toLocaleDateString(
                            "en-IN",
                            {
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            }
                        );

                }

            }


            /* =================================
               FILL CERTIFICATE
               ================================= */

            setCertificateText(
                "certificateStudentName",
                studentName
            );


            setCertificateText(
                "certificateFatherName",
                fatherName
            );


            setCertificateText(
                "certificateCourse",
                course
            );


            setCertificateText(
                "certificateTotalQuestions",
                totalQuestions
            );


            setCertificateText(
                "certificateCorrectAnswers",
                correctAnswers
            );


            setCertificateText(
                "certificatePercentage",
                percentage + "%"
            );


            setCertificateText(
                "certificateGrade",
                grade
            );


            setCertificateText(
                "certificateResult",
                result || "—"
            );


            setCertificateText(
                "certificateRollNumber",
                rollNumber
            );


            setCertificateText(
                "certificateNumber",
                certificateNumber
            );


            setCertificateText(
                "certificateIssueDate",
                issueDate
            );


            /* =================================
               SHOW CERTIFICATE
               ================================= */

            const certificatePopup =
                document.getElementById(
                    "certificatePreviewPopup"
                );


            if (certificatePopup) {

                certificatePopup.classList.add(
                    "show"
                );

                document.body.style.overflow =
                    "hidden";

            }


            console.log(
                "Certificate Data:",
                examResult
            );

        })

        .catch(function(error) {

            console.error(
                "Certificate Result Error:",
                error
            );


            alert(
                "Unable to load exam result. Please try again."
            );

        });

}


/* =================================================
   CERTIFICATE TEXT HELPER
   ================================================= */

function setCertificateText(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (element) {

        element.textContent =
            value;

    }

}
/* =====================================================
   CERTIFICATE POPUP BUTTONS
   ===================================================== */

const certPopup =
    document.getElementById("certificatePreviewPopup");


/* =====================================================
   CLOSE BUTTON
   ===================================================== */

if (certPopup) {

    certPopup.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest("button");

            if (!button) return;


            const icon =
                button.querySelector("i");


            /* X / CLOSE BUTTON */

            if (
                icon &&
                icon.classList.contains("fa-xmark")
            ) {

                certPopup.classList.remove("show");

                document.body.style.overflow = "";

                return;
            }


            /* DOWNLOAD BUTTON */

            const buttonText =
                button.textContent
                    .trim()
                    .toLowerCase();


            if (
                buttonText.includes("download")
            ) {

                downloadCertificateImage(
                    button
                );

            }

        }
    );

}


/* =====================================================
   DOWNLOAD CERTIFICATE
   ===================================================== */

async function downloadCertificateImage(
    button
) {

    const certificate =
        document.querySelector(
            ".certificate-document"
        );


    if (!certificate) {

        alert(
            "Certificate not found."
        );

        return;

    }


    /* Make sure html2canvas exists */

    if (
        typeof html2canvas !==
        "function"
    ) {

        alert(
            "Certificate download system is not loaded. Please refresh the page and try again."
        );

        return;

    }


    const oldHTML =
        button.innerHTML;


    button.disabled = true;


    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Preparing...';


    try {

        const canvas =
            await html2canvas(
                certificate,
                {
                    scale: 3,

                    useCORS: true,

                    allowTaint: false,

                    backgroundColor:
                        "#fffef9",

                    logging: false
                }
            );


        const image =
            canvas.toDataURL(
                "image/png",
                1.0
            );


        const link =
            document.createElement(
                "a"
            );


        const rollElement =
            document.getElementById(
                "certificateRollNumber"
            );


        const rollNumber =
            rollElement
                ? rollElement.textContent.trim()
                : "Certificate";


        link.download =
            "LBS-Certificate-" +
            rollNumber +
            ".png";


        link.href = image;


        document.body.appendChild(
            link
        );


        link.click();


        document.body.removeChild(
            link
        );


    }

    catch (error) {

        console.error(
            "Certificate Download Error:",
            error
        );


        alert(
            "Certificate download failed. Please try again."
        );

    }


    button.disabled = false;

    button.innerHTML =
        oldHTML;

}
});
/* =====================================================
   ACHIEVEMENT COUNTER ANIMATION
   ===================================================== */

const achievementSection =
    document.querySelector(
        ".achievements-section"
    );

const achievementCounters =
    document.querySelectorAll(
        ".achievement-counter"
    );


if (
    achievementSection &&
    achievementCounters.length
) {

    let counterStarted = false;


    function startAchievementCounters() {

        if (counterStarted) {
            return;
        }

        counterStarted = true;


        achievementCounters.forEach(
            function (counter) {

                const target =
                    Number(
                        counter.dataset.target
                    ) || 0;

                let current = 0;

                const duration = 1800;

                const startTime =
                    performance.now();


                function updateCounter(
                    currentTime
                ) {

                    const progress =
                        Math.min(
                            (
                                currentTime -
                                startTime
                            ) / duration,
                            1
                        );


                    /*
                       Smooth easing
                    */

                    const easedProgress =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    current =
                        Math.floor(
                            target *
                            easedProgress
                        );


                    counter.textContent =
                        current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );

            }
        );

    }


    /* =================================================
       START WHEN SECTION ENTERS SCREEN
       ================================================= */

    const achievementObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            startAchievementCounters();

                            achievementObserver
                                .unobserve(
                                    achievementSection
                                );

                        }

                    }
                );

            },

            {
                threshold: 0.25
            }

        );


    achievementObserver.observe(
        achievementSection
    );

}

/* =====================================================
   STUDENT REVIEWS
   FULL REVIEW POPUP
   ===================================================== */

const reviewPopup =
    document.getElementById("reviewPopup");

const closeReviewPopup =
    document.getElementById("closeReviewPopup");

const reviewPopupName =
    document.getElementById("reviewPopupName");

const reviewPopupCourse =
    document.getElementById("reviewPopupCourse");

const reviewPopupText =
    document.getElementById("reviewPopupText");

const reviewPopupStars =
    document.getElementById("reviewPopupStars");

const reviewPopupOverlay =
    document.querySelector(".review-popup-overlay");


/* =====================================================
   REVIEW DATA
   ===================================================== */

const studentReviews = [

    {
        name: "Rahul Kumar",

        course: "ADCA Student",

        stars: "★★★★★",

        review:
            "The training environment at LBS Computer Training Institute is very good. The computer classes are easy to understand and the practical learning helped me improve my computer skills. The teachers explain every topic in a simple way."
    },


    {
        name: "Priya Singh",

        course: "O Level Student",

        stars: "★★★★★",

        review:
            "I learned many useful computer skills during my training. The learning experience was comfortable and the practical sessions helped me understand the topics better. I really enjoyed learning different computer applications."
    },


    {
        name: "Amit Verma",

        course: "CCC Student",

        stars: "★★★★★",

        review:
            "The overall learning experience was very good. The online examination system is simple and easy to use. I learned important computer concepts and gained more confidence while working with different computer applications."
    }

];


/* =====================================================
   OPEN REVIEW
   ===================================================== */

const readReviewButtons =
    document.querySelectorAll(
        ".read-review-btn"
    );


readReviewButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const reviewIndex =
                    Number(
                        button.dataset.review
                    );


                const review =
                    studentReviews[
                        reviewIndex
                    ];


                if (!review) {
                    return;
                }


                /* Fill popup */

                if (reviewPopupName) {

                    reviewPopupName.textContent =
                        review.name;

                }


                if (reviewPopupCourse) {

                    reviewPopupCourse.textContent =
                        review.course;

                }


                if (reviewPopupStars) {

                    reviewPopupStars.textContent =
                        review.stars;

                }


                if (reviewPopupText) {

                    reviewPopupText.textContent =
                        review.review;

                }


                /* Show popup */

                if (reviewPopup) {

                    reviewPopup.classList.add(
                        "show"
                    );

                    document.body.style.overflow =
                        "hidden";

                }

            }
        );

    }
);


/* =====================================================
   CLOSE REVIEW
   ===================================================== */

function closeStudentReviewPopup() {

    if (reviewPopup) {

        reviewPopup.classList.remove(
            "show"
        );

    }

    document.body.style.overflow = "";

}


/* Close button */

if (closeReviewPopup) {

    closeReviewPopup.addEventListener(
        "click",
        closeStudentReviewPopup
    );

}


/* Click outside popup */

if (reviewPopupOverlay) {

    reviewPopupOverlay.addEventListener(
        "click",
        closeStudentReviewPopup
    );

}


/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            reviewPopup &&
            reviewPopup.classList.contains(
                "show"
            )
        ) {

            closeStudentReviewPopup();

        }

    }
);

/* =====================================================
   FAQ ACCORDION
   ===================================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function(question) {

    question.addEventListener(
        "click",
        function() {

            const currentItem =
                question.closest(".faq-item");


            /* Close other FAQs */

            document
                .querySelectorAll(".faq-item.active")
                .forEach(function(item) {

                    if (item !== currentItem) {

                        item.classList.remove(
                            "active"
                        );

                    }

                });


            /* Toggle current FAQ */

            currentItem.classList.toggle(
                "active"
            );

        }
    );

});
/* =====================================================
   NOTICE DETAILS POPUP
   ===================================================== */

const noticePopup =
    document.getElementById("noticePopup");

const noticePopupClose =
    document.getElementById("noticePopupClose");

const noticePopupDone =
    document.getElementById("noticePopupDone");

const noticePopupOverlay =
    document.querySelector(
        ".notice-popup-overlay"
    );

const noticePopupTitle =
    document.getElementById(
        "noticePopupTitle"
    );

const noticePopupText =
    document.getElementById(
        "noticePopupText"
    );

const noticePopupBadge =
    document.getElementById(
        "noticePopupBadge"
    );

const noticePopupDate =
    document.getElementById(
        "noticePopupDate"
    );

const noticePopupIcon =
    document.getElementById(
        "noticePopupIcon"
    );


/* =====================================================
   NOTICE DATA
   ===================================================== */

const noticeDetails = [

    {
        title:
            "New Course Admissions Open",

        badge:
            "NEW",

        date:
            "Latest Update",

        icon:
            "fa-graduation-cap",

        text:
            "Admissions are now open for selected computer training courses at LBS Computer Training Institute. Students can explore the available courses, eligibility, duration and fee details from the Courses section."
    },


    {
        title:
            "Online Examination Update",

        badge:
            "EXAM",

        date:
            "Important Notice",

        icon:
            "fa-laptop-code",

        text:
            "Students can check the examination section for available online examination information and instructions. Please read all examination instructions carefully before starting the examination."
    },


    {
        title:
            "Certificate Download Available",

        badge:
            "UPDATE",

        date:
            "Student Update",

        icon:
            "fa-certificate",

        text:
            "Eligible students can view their certificate and download the digital certificate after completing the required examination process."
    },


    {
        title:
            "Important Student Information",

        badge:
            "INFO",

        date:
            "Institute Notice",

        icon:
            "fa-circle-info",

        text:
            "Students are advised to regularly check the LBS Computer Training Institute website for important updates, examination information, results, certificates and institute announcements."
    }

];


/* =====================================================
   OPEN POPUP
   ===================================================== */

function openNoticePopup(index) {

    if (!noticePopup) {
        return;
    }

    const notice =
        noticeDetails[index];

    if (!notice) {
        return;
    }


    /* Title */

    if (noticePopupTitle) {

        noticePopupTitle.textContent =
            notice.title;

    }


    /* Description */

    if (noticePopupText) {

        noticePopupText.textContent =
            notice.text;

    }


    /* Badge */

    if (noticePopupBadge) {

        noticePopupBadge.textContent =
            notice.badge;

    }


    /* Date */

    if (noticePopupDate) {

        noticePopupDate.innerHTML =
            '<i class="fa-regular fa-calendar"></i> ' +
            notice.date;

    }


    /* Icon */

    if (noticePopupIcon) {

        noticePopupIcon.innerHTML =
            '<i class="fa-solid ' +
            notice.icon +
            '"></i>';

    }


    /* Show */

    noticePopup.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE POPUP
   ===================================================== */

function closeNoticePopup() {

    if (!noticePopup) {
        return;
    }

    noticePopup.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


/* =====================================================
   READ MORE BUTTONS
   ===================================================== */

const noticeReadMoreButtons =
    document.querySelectorAll(
        ".notice-read-more"
    );


noticeReadMoreButtons.forEach(
    function(button, index) {

        button.addEventListener(
            "click",
            function() {

                openNoticePopup(
                    index
                );

            }
        );

    }
);


/* =====================================================
   CLOSE EVENTS
   ===================================================== */

if (noticePopupClose) {

    noticePopupClose.addEventListener(
        "click",
        closeNoticePopup
    );

}


if (noticePopupDone) {

    noticePopupDone.addEventListener(
        "click",
        closeNoticePopup
    );

}


if (noticePopupOverlay) {

    noticePopupOverlay.addEventListener(
        "click",
        closeNoticePopup
    );

}


/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            noticePopup &&
            noticePopup.classList.contains(
                "show"
            )
        ) {

            closeNoticePopup();

        }

    }
);

/* =====================================================
   TECHNOLOGY SHOWCASE SLIDER
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const technologySlider =
        document.querySelector(".technology-slider");

    if (!technologySlider) {
        return;
    }


    const technologySlides =
        technologySlider.querySelectorAll(
            ".technology-slide"
        );


    const technologyDots =
        technologySlider.querySelectorAll(
            ".technology-dot"
        );


    const technologyPrev =
        document.getElementById(
            "technologyPrev"
        );


    const technologyNext =
        document.getElementById(
            "technologyNext"
        );


    /* =================================================
       CHECK SLIDES
       ================================================= */

    if (!technologySlides.length) {
        return;
    }


    let technologyCurrent =
        0;


    let technologyTimer =
        null;


    /* =================================================
       SHOW SLIDE
       ================================================= */

    function showTechnologySlide(index) {

        /* -----------------------------
           LOOP
           ----------------------------- */

        if (
            index >=
            technologySlides.length
        ) {

            index = 0;

        }


        if (index < 0) {

            index =
                technologySlides.length - 1;

        }


        technologyCurrent =
            index;


        /* -----------------------------
           REMOVE ACTIVE
           ----------------------------- */

        technologySlides.forEach(
            function (slide) {

                slide.classList.remove(
                    "active"
                );

            }
        );


        technologyDots.forEach(
            function (dot) {

                dot.classList.remove(
                    "active"
                );

            }
        );


        /* -----------------------------
           ADD ACTIVE
           ----------------------------- */

        technologySlides[
            technologyCurrent
        ].classList.add(
            "active"
        );


        if (
            technologyDots[
                technologyCurrent
            ]
        ) {

            technologyDots[
                technologyCurrent
            ].classList.add(
                "active"
            );

        }

    }


    /* =================================================
       NEXT SLIDE
       ================================================= */

    function nextTechnologySlide() {

        showTechnologySlide(
            technologyCurrent + 1
        );

    }


    /* =================================================
       PREVIOUS SLIDE
       ================================================= */

    function previousTechnologySlide() {

        showTechnologySlide(
            technologyCurrent - 1
        );

    }


    /* =================================================
       AUTO PLAY
       ================================================= */

    function startTechnologyAutoPlay() {

        stopTechnologyAutoPlay();


        technologyTimer =
            setInterval(
                function () {

                    nextTechnologySlide();

                },
                5000
            );

    }


    /* =================================================
       STOP AUTO PLAY
       ================================================= */

    function stopTechnologyAutoPlay() {

        if (technologyTimer) {

            clearInterval(
                technologyTimer
            );

            technologyTimer =
                null;

        }

    }


    /* =================================================
       NEXT BUTTON
       ================================================= */

    if (technologyNext) {

        technologyNext.addEventListener(
            "click",
            function () {

                nextTechnologySlide();

                startTechnologyAutoPlay();

            }
        );

    }


    /* =================================================
       PREVIOUS BUTTON
       ================================================= */

    if (technologyPrev) {

        technologyPrev.addEventListener(
            "click",
            function () {

                previousTechnologySlide();

                startTechnologyAutoPlay();

            }
        );

    }


    /* =================================================
       DOT NAVIGATION
       ================================================= */

    technologyDots.forEach(
        function (dot, index) {

            dot.addEventListener(
                "click",
                function () {

                    showTechnologySlide(
                        index
                    );

                    startTechnologyAutoPlay();

                }
            );

        }
    );


    /* =================================================
       PAUSE WHEN MOUSE IS OVER SLIDER
       ================================================= */

    technologySlider.addEventListener(
        "mouseenter",
        function () {

            stopTechnologyAutoPlay();

        }
    );


    /* =================================================
       RESUME WHEN MOUSE LEAVES
       ================================================= */

    technologySlider.addEventListener(
        "mouseleave",
        function () {

            startTechnologyAutoPlay();

        }
    );


    /* =================================================
       TOUCH / SWIPE SUPPORT
       ================================================= */

    let technologyTouchStartX =
        0;


    let technologyTouchEndX =
        0;


    technologySlider.addEventListener(
        "touchstart",
        function (event) {

            technologyTouchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    technologySlider.addEventListener(
        "touchend",
        function (event) {

            technologyTouchEndX =
                event.changedTouches[0].screenX;


            const swipeDistance =
                technologyTouchEndX -
                technologyTouchStartX;


            /* Swipe Left */

            if (
                swipeDistance < -50
            ) {

                nextTechnologySlide();

                startTechnologyAutoPlay();

            }


            /* Swipe Right */

            if (
                swipeDistance > 50
            ) {

                previousTechnologySlide();

                startTechnologyAutoPlay();

            }

        },
        {
            passive: true
        }
    );


    /* =================================================
       START
       ================================================= */

    showTechnologySlide(0);

    startTechnologyAutoPlay();


    console.log(
        "Technology Showcase Slider Loaded Successfully"
    );

});
/* =====================================================
   WHY CHOOSE US — SCROLL REVEAL
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const whyCards =
        document.querySelectorAll(".why-card");

    if (!whyCards.length) return;


    /* Initially hidden */

    whyCards.forEach(card => {

        card.classList.add("why-card-hidden");

    });


    /* Observer */

    const whyObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;


                    const card =
                        entry.target;


                    const delay =
                        Number(
                            card.dataset.revealDelay || 0
                        );


                    setTimeout(() => {

                        card.classList.remove(
                            "why-card-hidden"
                        );

                        card.classList.add(
                            "why-card-visible"
                        );

                    }, delay);


                    observer.unobserve(card);

                });

            },

            {
                threshold: 0.15
            }

        );


    /* Observe cards */

    whyCards.forEach((card, index) => {

        card.dataset.revealDelay =
            index * 100;

        whyObserver.observe(card);

    });

});


/* =====================================================
   DIRECTOR'S MESSAGE — MODAL
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const openBtn =
        document.getElementById(
            "openDirectorMessage"
        );

    const closeBtn =
        document.getElementById(
            "closeDirectorMessage"
        );

    const modal =
        document.getElementById(
            "directorMessageModal"
        );

    const overlay =
        document.getElementById(
            "directorModalOverlay"
        );


    /* Safety check */

    if (
        !openBtn ||
        !closeBtn ||
        !modal
    ) {
        return;
    }


    /* =========================
       OPEN MODAL
       ========================= */

    function openDirectorModal() {

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =========================
       CLOSE MODAL
       ========================= */

    function closeDirectorModal() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    /* =========================
       BUTTON
       ========================= */

    openBtn.addEventListener(
        "click",
        openDirectorModal
    );


    closeBtn.addEventListener(
        "click",
        closeDirectorModal
    );


    /* =========================
       OVERLAY CLICK
       ========================= */

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeDirectorModal
        );

    }


    /* =========================
       ESC KEY
       ========================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeDirectorModal();

            }

        }
    );

});

/* =====================================================
   PREMIUM LOCATION — SCROLL REVEAL
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const locationSection =
        document.querySelector(".premium-location-section");

    if (!locationSection) return;


    /* Elements */

    const locationHeading =
        locationSection.querySelector(".location-heading");

    const locationInfo =
        locationSection.querySelector(".location-info-card");

    const locationMap =
        locationSection.querySelector(".location-map-card");


    /* Initial state */

    if (locationHeading)
        locationHeading.classList.add("location-hidden");

    if (locationInfo)
        locationInfo.classList.add("location-hidden-left");

    if (locationMap)
        locationMap.classList.add("location-hidden-right");


    /* Observer */

    const locationObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;


                    /* Heading */

                    if (locationHeading) {

                        locationHeading.classList.add(
                            "location-show"
                        );

                    }


                    /* Left card */

                    if (locationInfo) {

                        setTimeout(() => {

                            locationInfo.classList.add(
                                "location-show"
                            );

                        }, 180);

                    }


                    /* Map */

                    if (locationMap) {

                        setTimeout(() => {

                            locationMap.classList.add(
                                "location-show"
                            );

                        }, 350);

                    }


                    /* Run only once */

                    observer.unobserve(
                        locationSection
                    );

                });

            },
            {
                threshold: 0.18
            }
        );


    locationObserver.observe(
        locationSection
    );

});
/* =====================================================
   GALLERY TEASER — SCROLL REVEAL
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const galleryCard =
        document.querySelector(".gallery-teaser-card");

    if (!galleryCard) return;

    const galleryObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    galleryCard.classList.add(
                        "gallery-visible"
                    );

                    observer.unobserve(
                        galleryCard
                    );

                });

            },
            {
                threshold: 0.18
            }
        );

    galleryObserver.observe(
        galleryCard
    );

});
