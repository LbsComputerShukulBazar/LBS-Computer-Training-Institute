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


                /* REQUIRED FIELDS */

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


                /* MOBILE */

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


                /* CAPTCHA */

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


                /* GENERATE ROLL NUMBER */

                const rollNumber =
                    generateRollNumber();


                /* STUDENT DATA */

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
                            .toLocaleString()

                };


                /* SAVE BY ROLL NUMBER */

                localStorage.setItem(

                    "lbsStudent_" +
                    rollNumber,

                    JSON.stringify(
                        studentData
                    )

                );


                /* SAVE CURRENT STUDENT */

                localStorage.setItem(

                    "lbsExamStudent",

                    JSON.stringify(
                        studentData
                    )

                );


                /* SAVE CURRENT ROLL */

                localStorage.setItem(

                    "lbsCurrentRollNumber",

                    rollNumber

                );


                /* CLEAR OLD LOGIN */

                localStorage.removeItem(
                    "lbsLoggedInStudent"
                );


                /* SUCCESS POPUP */

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


                if (successStudentName) {

                    successStudentName.textContent =
                        studentName;

                }


                if (successCourse) {

                    successCourse.textContent =
                        course;

                }


                if (successRollNumber) {

                    successRollNumber.textContent =
                        rollNumber;

                }


                if (successPopup) {

                    successPopup.classList.add(
                        "show"
                    );

                    document.body.style.overflow =
                        "hidden";

                }


                /* RESET FORM */

                examForm.reset();

                generateCaptcha();


                console.log(
                    "Student Registered:",
                    studentData
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


    loginForm.addEventListener("submit", function (event) {

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
           FIND STUDENT RECORD
           ================================================= */

        const studentKey =
            "lbsStudent_" + enteredRoll;


        const savedStudent =
            localStorage.getItem(studentKey);


        if (!savedStudent) {

            alert(
                "Student record not found.\n\n" +
                "Please enter the exact Roll Number generated during registration."
            );

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
   START EXAM BUTTON
   SUCCESS POPUP → INSTRUCTIONS POPUP
   ===================================================== */

if (startExamBtn && successPopup) {
    
    startExamBtn.addEventListener(
        "click",
        function() {
            
            /* Close success popup */
            
            successPopup.classList.remove("show");
            
            document.body.style.overflow = "";
            
            
            /* Open examination instructions */
            
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
