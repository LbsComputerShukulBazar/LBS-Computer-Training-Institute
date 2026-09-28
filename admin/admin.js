/* =========================================================
   LBS ADMIN PANEL
   FIREBASE SECURITY + PREMIUM LOGOUT
   ========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
    getStorage,
    ref as storageRef,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import {
    getDatabase,
    ref,
    set,
    get,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

/* =========================================================
   FIREBASE CONFIG
   SAME CONFIG AS ADMIN-LOGIN.JS
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
const storage = getStorage(app);
const database = getDatabase(app);


/* =========================================================
   LOGOUT STATE
   IMPORTANT:
   Prevents security guard from destroying
   premium logout message after signOut().
   ========================================================= */

let isLoggingOut = false;


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeLogout();

    }
);


/* =========================================================
   FIREBASE AUTH SECURITY GUARD
   ========================================================= */

onAuthStateChanged(
    auth,
    function (user) {

        /* ---------------------------------------------
           AUTHENTICATED ADMIN
           --------------------------------------------- */

        if (user) {

            console.log(
                "Admin authenticated:",
                user.email
            );

            return;
        }


        /* ---------------------------------------------
           USER IS LOGGING OUT
           
           Do NOT show the security screen here.
           Premium logout message must remain visible.
           --------------------------------------------- */

        if (isLoggingOut) {

            return;

        }


        /* ---------------------------------------------
           NOT LOGGED IN
           
           Direct admin.html access is blocked.
           --------------------------------------------- */

        showSecurityScreen();

    }
);


/* =========================================================
   PREMIUM SECURITY SCREEN
   ========================================================= */

function showSecurityScreen() {

    /*
     * Prevent duplicate security screens.
     */

    if (
        document.querySelector(
            ".security-screen"
        )
    ) {

        return;

    }


    document.body.innerHTML = `

        <div class="security-screen">

            <div class="security-card">

                <div class="security-icon">

                    <i class="fa-solid fa-shield-halved"></i>

                </div>


                <div class="security-badge">

                    <i class="fa-solid fa-lock"></i>

                    SECURE ADMIN AREA

                </div>


                <h1>
                    Login Required
                </h1>


                <p>
                    This Admin Panel is protected for
                    authorized administrators only.
                </p>


                <p class="security-note">
                    For security reasons, please login
                    to continue.
                </p>


                <div class="security-loader">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>


                <button
                    type="button"
                    class="security-login-btn"
                    id="securityLoginBtn"
                >

                    <i class="fa-solid fa-right-to-bracket"></i>

                    Go to Admin Login

                </button>

            </div>

        </div>

    `;


    /* ---------------------------------------------
       MANUAL LOGIN BUTTON
       --------------------------------------------- */

    const securityLoginBtn =
        document.getElementById(
            "securityLoginBtn"
        );


    if (securityLoginBtn) {

        securityLoginBtn.addEventListener(
            "click",
            function () {

                window.location.replace(
                    "admin-login.html"
                );

            }
        );

    }


    /* ---------------------------------------------
       AUTOMATIC REDIRECT
       --------------------------------------------- */

    setTimeout(
        function () {

            window.location.replace(
                "admin-login.html"
            );

        },
        3000
    );

}


/* =========================================================
   PREMIUM LOGOUT
   ========================================================= */

function initializeLogout() {

    const logoutBtn =
        document.getElementById(
            "adminLogoutBtn"
        );


    const logoutModal =
        document.getElementById(
            "logoutModal"
        );


    const closeLogoutModal =
        document.getElementById(
            "closeLogoutModal"
        );


    const cancelLogout =
        document.getElementById(
            "cancelLogout"
        );


    const confirmLogout =
        document.getElementById(
            "confirmLogout"
        );


    const logoutSuccess =
        document.getElementById(
            "logoutSuccess"
        );


    const closeSuccessToast =
        document.getElementById(
            "closeSuccessToast"
        );


    /* =====================================================
       OPEN LOGOUT MODAL
       ===================================================== */

    if (
        logoutBtn &&
        logoutModal
    ) {

        logoutBtn.addEventListener(
            "click",
            function () {

                logoutModal.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }


    /* =====================================================
       CLOSE LOGOUT MODAL
       ===================================================== */

    function closeLogoutPopup() {

        if (logoutModal) {

            logoutModal.classList.remove(
                "show"
            );

        }


        document.body.style.overflow =
            "";

    }


    if (closeLogoutModal) {

        closeLogoutModal.addEventListener(
            "click",
            closeLogoutPopup
        );

    }


    if (cancelLogout) {

        cancelLogout.addEventListener(
            "click",
            closeLogoutPopup
        );

    }


    /* =====================================================
       CLICK OUTSIDE MODAL
       ===================================================== */

    if (logoutModal) {

        logoutModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === logoutModal ||
                    event.target.classList.contains(
                        "premium-modal-overlay"
                    )
                ) {

                    closeLogoutPopup();

                }

            }
        );

    }


    /* =====================================================
       CONFIRM LOGOUT
       ===================================================== */

    if (confirmLogout) {

        confirmLogout.addEventListener(
            "click",
            async function () {

                /*
                 * Prevent double click
                 */

                if (isLoggingOut) {

                    return;

                }


                /*
                 * IMPORTANT:
                 * Set this BEFORE Firebase signOut().
                 *
                 * Otherwise onAuthStateChanged(null)
                 * would immediately replace the page
                 * and destroy the success message.
                 */

                isLoggingOut = true;


                confirmLogout.disabled =
                    true;


                const originalHTML =
                    confirmLogout.innerHTML;


                confirmLogout.innerHTML = `

                    <i class="fa-solid fa-spinner fa-spin"></i>

                    Logging Out...

                `;


                try {

                    /* ---------------------------------
                       FIREBASE REAL SIGN OUT
                       --------------------------------- */

                    await signOut(auth);


                    /* ---------------------------------
                       CLOSE CONFIRMATION MODAL
                       --------------------------------- */

                    closeLogoutPopup();


                    /* ---------------------------------
                       PREMIUM SUCCESS MESSAGE
                       --------------------------------- */

                    if (logoutSuccess) {

                        logoutSuccess.classList.add(
                            "show"
                        );

                    }


                    /* ---------------------------------
                       REDIRECT TO LOGIN
                       --------------------------------- */

                    setTimeout(
                        function () {

                            window.location.replace(
                                "admin-login.html"
                            );

                        },
                        2000
                    );


                } catch (error) {

                    console.error(
                        "Admin Logout Error:",
                        error
                    );


                    /*
                     * Logout failed.
                     * Allow user to try again.
                     */

                    isLoggingOut = false;


                    confirmLogout.disabled =
                        false;


                    confirmLogout.innerHTML =
                        originalHTML;


                    /*
                     * Use the existing success
                     * element only if your HTML
                     * provides an error state.
                     *
                     * Otherwise browser console
                     * contains the actual error.
                     */

                    console.error(
                        "Firebase logout failed. Please try again."
                    );

                }

            }
        );

    }


    /* =====================================================
       CLOSE SUCCESS MESSAGE
       ===================================================== */

    if (closeSuccessToast) {

        closeSuccessToast.addEventListener(
            "click",
            function () {

                if (logoutSuccess) {

                    logoutSuccess.classList.remove(
                        "show"
                    );

                }

            }
        );

    }


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLogoutPopup();

            }

        }
    );

}


/*Yaha tak login or logout sahi chal raha hai*/


/* =====================================================
   ADD STUDENT MODULE
   ===================================================== */


/* =====================================================
   ADD STUDENT INITIALIZATION
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    initializeAddStudent();

});


function initializeAddStudent() {

    const form =
        document.getElementById("addStudentForm");

    if (!form) {
        return;
    }


    initializePremiumDropdowns();

    initializePhotoPreview();

    initializeRollNumber();

    initializeStudentReset();

    initializeStudentSubmit();

}


/* =====================================================
   PREMIUM DROPDOWNS
   ===================================================== */

function initializePremiumDropdowns() {

    const selects =
        document.querySelectorAll(".premium-select");


    selects.forEach(function (select) {

        const trigger =
            select.querySelector(
                ".premium-select-trigger"
            );

        const menu =
            select.querySelector(
                ".premium-select-menu"
            );

        const valueBox =
            select.querySelector(
                ".premium-select-value"
            );

        const hiddenInput =
            select.querySelector(
                'input[type="hidden"]'
            );


        if (!trigger || !menu) {
            return;
        }


        trigger.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                document
                    .querySelectorAll(".premium-select")
                    .forEach(function (other) {

                        if (other !== select) {

                            other.classList.remove("open");

                            const otherTrigger =
                                other.querySelector(
                                    ".premium-select-trigger"
                                );

                            if (otherTrigger) {

                                otherTrigger.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }

                        }

                    });


                const open =
                    select.classList.toggle("open");


                trigger.setAttribute(
                    "aria-expanded",
                    open ? "true" : "false"
                );

            }
        );


        const options =
            select.querySelectorAll(
                ".premium-option"
            );


        options.forEach(function (option) {

            option.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    const value =
                        option.dataset.value ||
                        option.textContent.trim();


                    if (hiddenInput) {

                        hiddenInput.value = value;

                    }


                    if (valueBox) {

                        valueBox.innerHTML =
                            option.innerHTML;

                    }


                    options.forEach(
                        function (item) {

                            item.classList.remove(
                                "selected"
                            );

                        }
                    );


                    option.classList.add(
                        "selected"
                    );


                    select.classList.remove("open");


                    trigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


        const search =
            select.querySelector(
                ".premium-select-search input"
            );


        if (search) {

            search.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                }
            );


            search.addEventListener(
                "input",
                function () {

                    const text =
                        search.value
                            .toLowerCase()
                            .trim();


                    options.forEach(
                        function (option) {

                            const optionText =
                                option.textContent
                                    .toLowerCase();


                            if (
                                optionText.includes(text)
                            ) {

                                option.style.display =
                                    "flex";

                            } else {

                                option.style.display =
                                    "none";

                            }

                        }
                    );

                }
            );

        }

    });


    document.addEventListener(
        "click",
        function () {

            document
                .querySelectorAll(".premium-select")
                .forEach(function (select) {

                    select.classList.remove("open");

                    const trigger =
                        select.querySelector(
                            ".premium-select-trigger"
                        );

                    if (trigger) {

                        trigger.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });

        }
    );

}


/* =====================================================
   PHOTO PREVIEW
   ===================================================== */

function initializePhotoPreview() {

    const input =
        document.getElementById(
            "studentPhoto"
        );

    const preview =
        document.getElementById(
            "studentPhotoPreview"
        );


    if (!input || !preview) {
        return;
    }


    input.addEventListener(
        "change",
        function () {

            const file =
                input.files[0];


            if (!file) {

                preview.innerHTML =
                    '<i class="fa-solid fa-user"></i>';

                return;

            }


            if (!file.type.startsWith("image/")) {

                alert(
                    "Please select a valid image."
                );

                input.value = "";

                return;

            }


            if (file.size > 2 * 1024 * 1024) {

                alert(
                    "Photo size must be maximum 2 MB."
                );

                input.value = "";

                return;

            }


            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    preview.innerHTML = `
                        <img
                            src="${event.target.result}"
                            alt="Student Photo"
                        >
                    `;

                };


            reader.readAsDataURL(file);

        }
    );

}


/* =====================================================
   AUTOMATIC ROLL NUMBER
   FORMAT: STU-0001
   ===================================================== */

async function generateStudentRollNumber() {

    const rollInput =
        document.getElementById(
            "studentRollNumber"
        );


    if (!rollInput) {
        return;
    }


    rollInput.value = "Generating...";


    try {

        const studentsRef =
            ref(database, "students");


        const snapshot =
            await get(studentsRef);


        let nextNumber = 1;


        if (snapshot.exists()) {

            const students =
                snapshot.val();


            Object.values(students)
                .forEach(function (student) {

                    if (
                        student &&
                        student.rollNumber
                    ) {

                        const match =
                            String(
                                student.rollNumber
                            ).match(
                                /^STU-(\d+)$/
                            );


                        if (match) {

                            const number =
                                parseInt(
                                    match[1],
                                    10
                                );


                            if (
                                number >= nextNumber
                            ) {

                                nextNumber =
                                    number + 1;

                            }

                        }

                    }

                });

        }


        rollInput.value =
            "STU-" +
            String(nextNumber).padStart(
                4,
                "0"
            );


    } catch (error) {

        console.error(
            "Roll Number Error:",
            error
        );


        rollInput.value =
            "STU-" +
            Date.now()
                .toString()
                .slice(-4);

    }

}


function initializeRollNumber() {

    generateStudentRollNumber();

}


/* =====================================================
   RESET FORM
   ===================================================== */

function initializeStudentReset() {

    const resetButton =
        document.getElementById(
            "resetStudentForm"
        );


    if (!resetButton) {
        return;
    }


    resetButton.addEventListener(
        "click",
        function () {

            setTimeout(
                function () {

                    resetStudentFormUI();

                    generateStudentRollNumber();

                },
                50
            );

        }
    );

}


function resetStudentFormUI() {

    const preview =
        document.getElementById(
            "studentPhotoPreview"
        );


    const photoInput =
        document.getElementById(
            "studentPhoto"
        );


    if (photoInput) {

        photoInput.value = "";

    }


    if (preview) {

        preview.innerHTML =
            '<i class="fa-solid fa-user"></i>';

    }


    const defaults = {

        genderSelect:
            '<i class="fa-solid fa-venus-mars"></i> Select Gender',

        districtSelect:
            '<i class="fa-solid fa-map"></i> Select District',

        courseSelect:
            '<i class="fa-solid fa-laptop-code"></i> Select Course',

        studentStatusSelect:
            '<i class="fa-solid fa-circle-check"></i> Select Status'

    };


    Object.keys(defaults)
        .forEach(function (id) {

            const select =
                document.getElementById(id);


            if (!select) {
                return;
            }


            const value =
                select.querySelector(
                    ".premium-select-value"
                );


            const hidden =
                select.querySelector(
                    'input[type="hidden"]'
                );


            if (value) {

                value.innerHTML =
                    defaults[id];

            }


            if (hidden) {

                hidden.value = "";

            }


            select
                .querySelectorAll(
                    ".premium-option"
                )
                .forEach(function (option) {

                    option.classList.remove(
                        "selected"
                    );

                    option.style.display =
                        "flex";

                });


            const search =
                select.querySelector(
                    ".premium-select-search input"
                );


            if (search) {

                search.value = "";

            }

        });

}


/* =====================================================
   SAVE STUDENT
   ===================================================== */

function initializeStudentSubmit() {

    const form =
        document.getElementById(
            "addStudentForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            if (!auth.currentUser) {

                alert(
                    "Admin session expired. Please login again."
                );

                window.location.replace(
                    "admin-login.html"
                );

                return;

            }


            const getValue =
                function (id) {

                    const element =
                        document.getElementById(id);

                    return element
                        ? element.value.trim()
                        : "";

                };


            const rollNumber =
                getValue("studentRollNumber");

            const studentName =
                getValue("studentName");

            const fatherName =
                getValue("fatherName");

            const motherName =
                getValue("motherName");

            const dateOfBirth =
                getValue("dateOfBirth");

            const gender =
                getValue("gender");

            const mobileNumber =
                getValue("mobileNumber");

            const alternateMobile =
                getValue("alternateMobile");

            const studentEmail =
                getValue("studentEmail");

            const village =
                getValue("village");

            const post =
                getValue("post");

            const district =
                getValue("district");

            const pincode =
                getValue("pincode");

            const course =
                getValue("course");

            const admissionDate =
                getValue("admissionDate");

            const studentStatus =
                getValue("studentStatus");
const totalCourseFee =
    Number(
        getValue("totalCourseFee")
    ) || 0;

            /* -------------------------------------
               VALIDATION
               ------------------------------------- */

            if (!studentName) {

                alert("Please enter student name.");

                return;

            }
            if (totalCourseFee <= 0) {

    alert(
        "Please enter total course fee."
    );

    return;

}


            if (!fatherName) {

                alert("Please enter father's name.");

                return;

            }


            if (!/^[0-9]{10}$/.test(mobileNumber)) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                return;

            }


            if (!/^[0-9]{6}$/.test(pincode)) {

                alert(
                    "Please enter a valid 6-digit pincode."
                );

                return;

            }


            if (!district) {

                alert("Please select district.");

                return;

            }


            if (!course) {

                alert("Please select course.");

                return;

            }


            if (!admissionDate) {

                alert("Please select admission date.");

                return;

            }


            if (!studentStatus) {

                alert("Please select student status.");

                return;

            }


            const saveButton =
                document.getElementById(
                    "saveStudentBtn"
                );


            if (saveButton) {

                saveButton.disabled = true;

                saveButton.innerHTML = `
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    <span>Saving Student...</span>
                `;

            }


            try {

                /* -------------------------------------
                   CREATE UNIQUE STUDENT KEY
                   ------------------------------------- */

                const studentKey =
                    "student_" +
                    Date.now();


                /* -------------------------------------
                   STUDENT DATA
                   ------------------------------------- */

/* -------------------------------------
   STUDENT PHOTO UPLOAD
   ------------------------------------- */

let uploadedStudentPhotoURL = "";

const photoInput =
    document.getElementById("studentPhoto");

if (
    photoInput &&
    photoInput.files &&
    photoInput.files.length > 0
) {

    const photoFile =
        photoInput.files[0];

    if (
        photoFile.size >
        2 * 1024 * 1024
    ) {

        throw new Error(
            "Student photo must be maximum 2 MB."
        );

    }

    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ];

    if (
        !allowedTypes.includes(
            photoFile.type
        )
    ) {

        throw new Error(
            "Only JPG, PNG or WEBP photos are allowed."
        );

    }

    const photoPath =
        "student-photos/" +
        studentKey +
        "_" +
        Date.now() +
        "_" +
        photoFile.name;

    const photoReference =
        storageRef(
            storage,
            photoPath
        );

    const uploadResult =
        await uploadBytes(
            photoReference,
            photoFile
        );

    uploadedStudentPhotoURL =
        await getDownloadURL(
            uploadResult.ref
        );
}


/* -------------------------------------
   STUDENT DATA
   ------------------------------------- */


                const studentData = {

                    studentId:
                        studentKey,

                    rollNumber:
                        rollNumber,

                    studentName:
                        studentName,

                    fatherName:
                        fatherName,

                    motherName:
                        motherName,

                    dateOfBirth:
                        dateOfBirth,

                    gender:
                        gender,

                    mobileNumber:
                        mobileNumber,

                    alternateMobile:
                        alternateMobile,

                    email:
                        studentEmail,

                    village:
                        village,

                    post:
                        post,

                    district:
                        district,

                    pincode:
                        pincode,

                    course:
                        course,

                    admissionDate:
                        admissionDate,

                    status:
                        studentStatus,

                    registrationFee:
                        0,

                    monthlyFee:
                        0,

                    examFee:
                        0,

                    bagFee:
                        0,

                    totalFee:
    totalCourseFee,
    
    collectedFee:
    0,
    
    pendingFee:
    totalCourseFee,

                    photo:
                        uploadedStudentPhotoURL,

                    createdAt:
                        new Date().toISOString(),

                    createdBy:
                        auth.currentUser.email || ""

                };
                /* -------------------------------------
                   SAVE TO FIREBASE REALTIME DATABASE
                   ------------------------------------- */

                await set(
                    ref(
                        database,
                        "students/" + studentKey
                    ),
                    studentData
                );


                /* -------------------------------------
                   SUCCESS
                   ------------------------------------- */

                showStudentSuccess(
                    studentName,
                    rollNumber
                );


                form.reset();

                resetStudentFormUI();

                generateStudentRollNumber();


            } catch (error) {

                console.error(
                    "Student Save Error:",
                    error
                );


                alert(
                    "Student save failed.\n\n" +
                    error.message
                );


            } finally {

                if (saveButton) {

                    saveButton.disabled = false;

                    saveButton.innerHTML = `
                        <i class="fa-solid fa-user-plus"></i>
                        <span>Save Student</span>
                    `;

                }

            }

        }
    );

}


/* =====================================================
   SUCCESS MESSAGE
   ===================================================== */
/* =====================================================
   SUCCESS MESSAGE
   ===================================================== */

function showStudentSuccess(
    studentName,
    rollNumber
) {

    const toast =
        document.getElementById(
            "studentSuccessToast"
        );

    const message =
        document.getElementById(
            "studentSuccessMessage"
        );

    if (!toast) {
        return;
    }

    if (message) {

        message.textContent =
            studentName +
            " added successfully • Roll No: " +
            rollNumber;

    }

    toast.classList.add("show");


    setTimeout(
        function () {

            toast.classList.remove("show");

        },
        5000
    );


    const close =
        document.getElementById(
            "closeStudentSuccess"
        );


    if (
        close &&
        !close.dataset.bound
    ) {

        close.dataset.bound = "true";


        close.addEventListener(
            "click",
            function () {

                toast.classList.remove(
                    "show"
                );

            }
        );

    }

}


/* =====================================================
   END — ADD STUDENT MODULE
   ===================================================== */
   /*Totaly Working*/
   
   /* =====================================================
   FEES MANAGEMENT
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeFeesManagement();

    }
);


/* =====================================================
   FEES MANAGEMENT INITIALIZATION
   ===================================================== */

function initializeFeesManagement() {

    const form =
        document.getElementById("feesForm");

    if (!form) {
        return;
    }

    initializeFeesStudentDropdown();

    initializeFeesDropdown(
        "feeTypeSelect",
        "Select Fee Type",
        "fa-receipt"
    );

    initializeFeesDropdown(
        "paymentModeSelect",
        "Select Payment Mode",
        "fa-wallet"
    );

    initializeFeesFormSubmit();

    initializeFeesReset();

    initializeFeesSuccessClose();

}


/* =====================================================
   STUDENT SEARCH DROPDOWN
   ===================================================== */

function initializeFeesStudentDropdown() {

    const select =
        document.getElementById(
            "feesStudentSelect"
        );

    if (!select) {
        return;
    }


    const trigger =
        select.querySelector(
            ".fees-select-trigger"
        );

    const menu =
        select.querySelector(
            ".fees-select-menu"
        );

    const valueBox =
        select.querySelector(
            ".fees-select-value"
        );

    const search =
        document.getElementById(
            "feesStudentSearch"
        );

    const results =
        document.getElementById(
            "feesStudentResults"
        );

    const hiddenStudentId =
        document.getElementById(
            "feesStudentId"
        );


    if (
        !trigger ||
        !menu ||
        !valueBox ||
        !search ||
        !results ||
        !hiddenStudentId
    ) {

        return;

    }


    /* ---------------------------------------------
       OPEN / CLOSE
       --------------------------------------------- */

    trigger.addEventListener(
        "click",
        async function (event) {

            event.stopPropagation();


            closeAllFeesDropdowns(
                select
            );


            const isOpen =
                select.classList.contains(
                    "open"
                );


            if (isOpen) {

                select.classList.remove(
                    "open"
                );

                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                return;

            }


            select.classList.add(
                "open"
            );

            trigger.setAttribute(
                "aria-expanded",
                "true"
            );


            search.focus();


            await loadFeesStudents();

        }
    );


    /* ---------------------------------------------
       SEARCH
       --------------------------------------------- */

    search.addEventListener(
        "input",
        function () {

            filterFeesStudents(
                search.value
            );

        }
    );


    /* ---------------------------------------------
       PREVENT MENU CLOSE
       --------------------------------------------- */

    menu.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );


    /* ---------------------------------------------
       OUTSIDE CLICK
       --------------------------------------------- */

    document.addEventListener(
        "click",
        function () {

            select.classList.remove(
                "open"
            );

            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    /* ---------------------------------------------
       SELECT STUDENT
       --------------------------------------------- */

    results.addEventListener(
        "click",
        function (event) {

            const studentButton =
                event.target.closest(
                    ".fees-student-result"
                );

            if (!studentButton) {
                return;
            }


            const studentId =
                studentButton.dataset.studentId;


            const studentName =
                studentButton.dataset.studentName;


            const fatherName =
                studentButton.dataset.fatherName;


            const rollNumber =
                studentButton.dataset.rollNumber;


            const course =
                studentButton.dataset.course;


            hiddenStudentId.value =
                studentId;


            document.getElementById(
                "feesStudentName"
            ).value =
                studentName;


            document.getElementById(
                "feesFatherName"
            ).value =
                fatherName;


            document.getElementById(
                "feesRollNumber"
            ).value =
                rollNumber;


            document.getElementById(
                "feesCourse"
            ).value =
                course;


            valueBox.innerHTML = `
                <i class="fa-solid fa-user-graduate"></i>
                ${escapeFeesHTML(studentName)}
                — Father:
                ${escapeFeesHTML(fatherName)}
            `;


            select.classList.remove(
                "open"
            );


            trigger.setAttribute(
                "aria-expanded",
                "false"
            );


            search.value = "";

        }
    );

}


/* =====================================================
   LOAD STUDENTS FROM FIREBASE
   ===================================================== */

let feesStudentsCache = [];


async function loadFeesStudents() {

    const results =
        document.getElementById(
            "feesStudentResults"
        );

    if (!results) {
        return;
    }


    results.innerHTML = `
        <div class="fees-empty-result">

            <i class="fa-solid fa-spinner fa-spin"></i>

            <span>
                Loading students...
            </span>

        </div>
    `;


    try {

        const snapshot =
            await get(
                ref(
                    database,
                    "students"
                )
            );


        feesStudentsCache = [];


        if (
            !snapshot.exists()
        ) {

            showFeesEmptyStudents(
                "No students found."
            );

            return;

        }


        const students =
            snapshot.val();


        Object.keys(students)
            .forEach(
                function (key) {

                    const student =
                        students[key];


                    if (!student) {
                        return;
                    }


                    feesStudentsCache.push({

                        id:
                            student.studentId ||
                            key,

                        name:
                            student.studentName ||
                            "",

                        fatherName:
                            student.fatherName ||
                            "",

                        rollNumber:
                            student.rollNumber ||
                            "",

                        course:
                            student.course ||
                            ""

                    });

                }
            );


        feesStudentsCache.sort(
            function (a, b) {

                return a.name.localeCompare(
                    b.name
                );

            }
        );


        renderFeesStudents(
            feesStudentsCache
        );


    } catch (error) {

        console.error(
            "Fees Student Load Error:",
            error
        );


        showFeesEmptyStudents(
            "Unable to load students."
        );

    }

}


/* =====================================================
   FILTER STUDENTS
   ===================================================== */

function filterFeesStudents(
    searchText
) {

    const searchValue =
        String(
            searchText || ""
        )
        .trim()
        .toLowerCase();


    if (!searchValue) {

        renderFeesStudents(
            feesStudentsCache
        );

        return;

    }


    const filtered =
        feesStudentsCache.filter(
            function (student) {

                return (

                    student.name
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    student.fatherName
                        .toLowerCase()
                        .includes(searchValue)

                    ||

                    student.rollNumber
                        .toLowerCase()
                        .includes(searchValue)

                );

            }
        );


    renderFeesStudents(
        filtered
    );

}


/* =====================================================
   RENDER STUDENT RESULTS
   ===================================================== */

function renderFeesStudents(
    students
) {

    const results =
        document.getElementById(
            "feesStudentResults"
        );

    if (!results) {
        return;
    }


    results.innerHTML = "";


    if (
        !students ||
        students.length === 0
    ) {

        showFeesEmptyStudents(
            "No matching student found."
        );

        return;

    }


    students.forEach(
        function (student) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "fees-student-result";


            button.dataset.studentId =
                student.id;


            button.dataset.studentName =
                student.name;


            button.dataset.fatherName =
                student.fatherName;


            button.dataset.rollNumber =
                student.rollNumber;


            button.dataset.course =
                student.course;


            button.innerHTML = `

                <div class="fees-student-result-icon">

                    <i class="fa-solid fa-user-graduate"></i>

                </div>


                <div class="fees-student-result-content">

                    <span class="fees-student-result-name">

                        ${escapeFeesHTML(
                            student.name
                        )}

                    </span>


                    <div class="fees-student-result-meta">

                        <span>

                            <i class="fa-solid fa-person"></i>

                            Father:
                            ${escapeFeesHTML(
                                student.fatherName
                            )}

                        </span>


                        <span>

                            <i class="fa-solid fa-hashtag"></i>

                            Roll:
                            ${escapeFeesHTML(
                                student.rollNumber
                            )}

                        </span>


                        <span>

                            <i class="fa-solid fa-graduation-cap"></i>

                            ${escapeFeesHTML(
                                student.course
                            )}

                        </span>

                    </div>

                </div>

            `;


            results.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   FEES PREMIUM DROPDOWNS
   ===================================================== */

function initializeFeesDropdown(
    selectId,
    defaultText,
    defaultIcon
) {

    const select =
        document.getElementById(
            selectId
        );

    if (!select) {
        return;
    }


    const trigger =
        select.querySelector(
            ".fees-select-trigger"
        );

    const menu =
        select.querySelector(
            ".fees-select-menu"
        );

    const valueBox =
        select.querySelector(
            ".fees-select-value"
        );

    const hidden =
        select.querySelector(
            'input[type="hidden"]'
        );


    if (
        !trigger ||
        !menu ||
        !valueBox ||
        !hidden
    ) {

        return;

    }


    trigger.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            closeAllFeesDropdowns(
                select
            );


            const open =
                select.classList.contains(
                    "open"
                );


            select.classList.toggle(
                "open",
                !open
            );


            trigger.setAttribute(
                "aria-expanded",
                String(!open)
            );

        }
    );


    menu.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            const option =
                event.target.closest(
                    ".fees-premium-option"
                );


            if (!option) {
                return;
            }


            const value =
                option.dataset.value;


            if (!value) {
                return;
            }


            hidden.value =
                value;


            const icon =
                option.querySelector(
                    "i"
                );


            const iconClass =
                icon
                    ? icon.className
                    : "fa-solid fa-check";


            valueBox.innerHTML = `

                <i class="${iconClass}"></i>

                ${escapeFeesHTML(value)}

            `;


            select
                .querySelectorAll(
                    ".fees-premium-option"
                )
                .forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


            option.classList.add(
                "selected"
            );


            select.classList.remove(
                "open"
            );


            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    document.addEventListener(
        "click",
        function () {

            select.classList.remove(
                "open"
            );

            trigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

}


/* =====================================================
   CLOSE FEES DROPDOWNS
   ===================================================== */

function closeAllFeesDropdowns(
    exceptSelect
) {

    document
        .querySelectorAll(
            ".premium-fees-select"
        )
        .forEach(
            function (select) {

                if (
                    select !== exceptSelect
                ) {

                    select.classList.remove(
                        "open"
                    );


                    const trigger =
                        select.querySelector(
                            ".fees-select-trigger"
                        );


                    if (trigger) {

                        trigger.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            }
        );

}


/* =====================================================
   SAVE FEE
   ===================================================== */

function initializeFeesFormSubmit() {

    const form =
        document.getElementById(
            "feesForm"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            if (!auth.currentUser) {

                alert(
                    "Admin session expired. Please login again."
                );

                window.location.replace(
                    "admin-login.html"
                );

                return;

            }


            const studentId =
                document.getElementById(
                    "feesStudentId"
                ).value.trim();


            const studentName =
                document.getElementById(
                    "feesStudentName"
                ).value.trim();


            const fatherName =
                document.getElementById(
                    "feesFatherName"
                ).value.trim();


            const rollNumber =
                document.getElementById(
                    "feesRollNumber"
                ).value.trim();


            const course =
                document.getElementById(
                    "feesCourse"
                ).value.trim();


            const feeType =
                document.getElementById(
                    "feeType"
                ).value.trim();


            const feeAmount =
                Number(
                    document.getElementById(
                        "feeAmount"
                    ).value
                );


            const paymentMode =
                document.getElementById(
                    "paymentMode"
                ).value.trim();


            const paymentDate =
                document.getElementById(
                    "feePaymentDate"
                ).value.trim();


            const transactionNumber =
                document.getElementById(
                    "transactionNumber"
                ).value.trim();


            const remarks =
                document.getElementById(
                    "feeRemarks"
                ).value.trim();


            /* -----------------------------------------
               VALIDATION
               ----------------------------------------- */

                        /* -----------------------------------------
               VALIDATION
               ----------------------------------------- */

            if (!studentId) {

                alert(
                    "Please select a student."
                );

                return;

            }


            if (!feeType) {

                alert(
                    "Please select fee type."
                );

                return;

            }


            if (
                !feeAmount ||
                feeAmount <= 0
            ) {

                alert(
                    "Please enter a valid fee amount."
                );

                return;

            }


            if (!paymentMode) {

                alert(
                    "Please select payment mode."
                );

                return;

            }


            if (!paymentDate) {

                alert(
                    "Please select payment date."
                );

                return;

            }


            if (
                (
                    paymentMode === "Online" ||
                    paymentMode === "Bank"
                ) &&
                !transactionNumber
            ) {

                alert(
                    "Please enter transaction/reference number."
                );

                return;

            }


            const saveButton =
                document.getElementById(
                    "saveFeesBtn"
                );


            if (saveButton) {

                saveButton.disabled =
                    true;

                saveButton.innerHTML = `

                    <i class="fa-solid fa-spinner fa-spin"></i>

                    <span>
                        Saving Fee...
                    </span>

                `;

            }


            try {

                /* -----------------------------------------
                   GET CURRENT STUDENT
                   ----------------------------------------- */

                const studentRef =
                    ref(
                        database,
                        "students/" +
                        studentId
                    );


                const studentSnapshot =
                    await get(
                        studentRef
                    );


                if (
                    !studentSnapshot.exists()
                ) {

                    throw new Error(
                        "Selected student was not found."
                    );

                }


                const student =
                    studentSnapshot.val();


                /* -----------------------------------------
                   CREATE FEE RECORD
                   ----------------------------------------- */

                const feeId =
                    "fee_" +
                    Date.now();


                const feeData = {

                    feeId:
                        feeId,

                    studentId:
                        studentId,

                    studentName:
                        studentName,

                    fatherName:
                        fatherName,

                    rollNumber:
                        rollNumber,

                    course:
                        course,

                    feeType:
                        feeType,

                    amount:
                        feeAmount,

                    paymentMode:
                        paymentMode,

                    paymentDate:
                        paymentDate,

                    transactionNumber:
                        transactionNumber,

                    remarks:
                        remarks,

                    createdAt:
                        new Date().toISOString(),

                    createdBy:
                        auth.currentUser.email || ""

                };


                /* -----------------------------------------
                   SAVE FEE RECORD
                   ----------------------------------------- */

                await set(
                    ref(
                        database,
                        "fees/" +
                        feeId
                    ),
                    feeData
                );


                /* -----------------------------------------
                   UPDATE STUDENT FEE TOTAL
                   ----------------------------------------- */

                const updatedStudent =
                    {
                        ...student
                    };


                const feeFieldMap = {

                    "Registration Fee":
                        "registrationFee",

                    "Monthly Fee":
                        "monthlyFee",

                    "Exam Fee":
                        "examFee",

                    "Bag Fee":
                        "bagFee"

                };


                const feeField =
                    feeFieldMap[
                        feeType
                    ];


                if (feeField) {

                    updatedStudent[
                        feeField
                    ] =
                        Number(
                            student[
                                feeField
                            ] || 0
                        ) +
                        feeAmount;

                }


                /* -----------------------------------------
   UPDATE STUDENT FEE TOTALS
   ----------------------------------------- */

const oldCollectedFee =
    Number(
        student.collectedFee || 0
    );

const totalStudentFee =
    Number(
        student.totalFee || 0
    );


/* -----------------------------------------
   NEW COLLECTED FEE
   ----------------------------------------- */

const newCollectedFee =
    oldCollectedFee +
    feeAmount;


/* -----------------------------------------
   NEW PENDING FEE
   ----------------------------------------- */

const newPendingFee =
    Math.max(
        totalStudentFee -
        newCollectedFee,
        0
    );


updatedStudent.collectedFee =
    newCollectedFee;


updatedStudent.pendingFee =
    newPendingFee;


/* -----------------------------------------
   SAVE UPDATED STUDENT
   ----------------------------------------- */

await set(
    studentRef,
    updatedStudent
);


                /* -----------------------------------------
                   SUCCESS
                   ----------------------------------------- */

                showFeesSuccess(
                    studentName,
                    feeType,
                    feeAmount
                );


                /* -----------------------------------------
                   RESET
                   ----------------------------------------- */

                form.reset();

                resetFeesFormUI();


            } catch (error) {

                console.error(
                    "Fee Save Error:",
                    error
                );


                alert(
                    "Fee save failed.\n\n" +
                    error.message
                );


            } finally {

                if (saveButton) {

                    saveButton.disabled =
                        false;

                    saveButton.innerHTML = `

                        <i class="fa-solid fa-money-bill-transfer"></i>

                        <span>
                            Save Fee
                        </span>

                    `;

                }

            }

        }
    );

}


/* =====================================================
   RESET FEES FORM
   ===================================================== */

function initializeFeesReset() {

    const form =
        document.getElementById(
            "feesForm"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "reset",
        function () {

            setTimeout(
                function () {

                    resetFeesFormUI();

                },
                0
            );

        }
    );

}
/* =====================================================
   RESET FEES DROPDOWN
   ===================================================== */

function resetFeesDropdown(
    dropdownId,
    defaultText
) {

    const dropdown =
        document.getElementById(
            dropdownId
        );

    if (!dropdown) {
        return;
    }


    const valueElement =
        dropdown.querySelector(
            ".fees-select-value"
        );

    if (valueElement) {

        valueElement.innerHTML =
            defaultText;

    }


    dropdown.classList.remove(
        "active",
        "open",
        "selected"
    );


    dropdown
        .querySelectorAll(
            ".fees-option"
        )
        .forEach(
            function (option) {

                option.classList.remove(
                    "selected",
                    "active"
                );

            }
        );

}

function resetFeesFormUI() {

    const studentSelect =
        document.getElementById(
            "feesStudentSelect"
        );


    const studentValue =
        studentSelect
            ? studentSelect.querySelector(
                ".fees-select-value"
            )
            : null;


    const studentId =
        document.getElementById(
            "feesStudentId"
        );


    if (studentValue) {

        studentValue.innerHTML = `

            <i class="fa-solid fa-user-graduate"></i>

            Search Student

        `;

    }


    if (studentId) {

        studentId.value = "";

    }


    const fields = [

        "feesStudentName",
        "feesFatherName",
        "feesRollNumber",
        "feesCourse"

    ];


    fields.forEach(
        function (id) {

            const element =
                document.getElementById(
                    id
                );

            if (element) {

                element.value = "";

            }

        }
    );


    resetFeesDropdown(
        "feeTypeSelect",
        '<i class="fa-solid fa-receipt"></i> Select Fee Type'
    );


    resetFeesDropdown(
        "paymentModeSelect",
        '<i class="fa-solid fa-wallet"></i> Select Payment Mode'
    );


    const search =
        document.getElementById(
            "feesStudentSearch"
        );


    if (search) {

        search.value = "";

    }


    const results =
        document.getElementById(
            "feesStudentResults"
        );


    if (results) {

        showFeesEmptyStudents(
            "Search student to continue"
        );

    }

}


/* =====================================================
   FEES SUCCESS MESSAGE
   ===================================================== */

function showFeesSuccess(
    studentName,
    feeType,
    amount
) {

    const toast =
        document.getElementById(
            "feesSuccessToast"
        );


    const message =
        document.getElementById(
            "feesSuccessMessage"
        );


    if (!toast) {
        return;
    }


    if (message) {

        message.textContent =
            studentName +
            " • " +
            feeType +
            " • ₹" +
            amount +
            " saved successfully.";

    }


    toast.classList.add(
        "show"
    );


    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        5000
    );

}


/* =====================================================
   CLOSE SUCCESS MESSAGE
   ===================================================== */

function initializeFeesSuccessClose() {

    const close =
        document.getElementById(
            "closeFeesSuccess"
        );


    const toast =
        document.getElementById(
            "feesSuccessToast"
        );


    if (
        !close ||
        !toast
    ) {

        return;

    }


    close.addEventListener(
        "click",
        function () {

            toast.classList.remove(
                "show"
            );

        }
    );

}


/* =====================================================
   EMPTY STUDENT RESULT
   ===================================================== */

function showFeesEmptyStudents(
    message
) {

    const results =
        document.getElementById(
            "feesStudentResults"
        );


    if (!results) {
        return;
    }


    results.innerHTML = `

        <div class="fees-empty-result">

            <i class="fa-solid fa-user-graduate"></i>

            <span>
                ${escapeFeesHTML(message)}
            </span>

        </div>

    `;

}


/* =====================================================
   HTML SAFETY
   ===================================================== */

function escapeFeesHTML(
    value
) {

    return String(
        value || ""
    )
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


/* =====================================================
   END — FEES MANAGEMENT
   ===================================================== */
   
   /* =====================================================
   REAL FIREBASE DASHBOARD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeRealDashboard();

    }
);


/* =====================================================
   INITIALIZE DASHBOARD
   ===================================================== */

/* =====================================================
   INITIALIZE DASHBOARD
   ===================================================== */

async function initializeRealDashboard() {

    try {

        const studentsSnapshot =
            await get(
                ref(
                    database,
                    "students"
                )
            );

        const feesSnapshot =
            await get(
                ref(
                    database,
                    "fees"
                )
            );


        const students =
            studentsSnapshot.exists()
                ? Object.values(
                    studentsSnapshot.val()
                )
                : [];


        const fees =
            feesSnapshot.exists()
                ? Object.values(
                    feesSnapshot.val()
                )
                : [];


        /* =============================================
           STUDENTS
           ============================================= */

        const totalStudents =
            students.length;


        const activeStudents =
            students.filter(
                function (student) {

                    return String(
                        student.status || ""
                    ).toLowerCase() === "active";

                }
            ).length;


        const completedStudents =
            students.filter(
                function (student) {

                    return String(
                        student.status || ""
                    ).toLowerCase() === "completed";

                }
            ).length;


        /* =============================================
           STUDENT FEE TOTALS
           ============================================= */

        /* =============================================
   STUDENT FEE TOTALS
   ============================================= */

let totalFees = 0;

let collectedFees = 0;


/* ---------------------------------------------
   TOTAL FEE + COLLECTED FEE
   --------------------------------------------- */

students.forEach(
    function(student) {
        
        /* Total course fee */
        totalFees +=
            Number(
                student.totalFee || 0
            );
        
        
        /* Actual collected fee */
        collectedFees +=
            Number(
                student.collectedFee || 0
            );
        
    }
);


/* ---------------------------------------------
   PENDING FEE
   ALWAYS CALCULATED FROM TOTAL - COLLECTED
   --------------------------------------------- */

const pendingFees =
    Math.max(
        totalFees -
        collectedFees,
        0
    );

        /* =============================================
           FEE BREAKDOWN
           ============================================= */

        let registrationFees = 0;

        let monthlyFees = 0;

        let examFees = 0;

        let bagFees = 0;


        fees.forEach(
            function (fee) {

                const amount =
                    Number(
                        fee.amount || 0
                    );


                const type =
                    String(
                        fee.feeType || ""
                    )
                    .trim()
                    .toLowerCase();


                if (
                    type ===
                    "registration fee"
                ) {

                    registrationFees +=
                        amount;

                }


                if (
                    type ===
                    "monthly fee"
                ) {

                    monthlyFees +=
                        amount;

                }


                if (
                    type ===
                    "exam fee"
                ) {

                    examFees +=
                        amount;

                }


                if (
                    type ===
                    "bag fee"
                ) {

                    bagFees +=
                        amount;

                }

            }
        );


        const breakdownTotal =
            registrationFees +
            monthlyFees +
            examFees +
            bagFees;


        /* =============================================
           TODAY
           ============================================= */

        const today =
            new Date()
                .toISOString()
                .slice(
                    0,
                    10
                );


        const newAdmissions =
    students.filter(
        function(student) {
            
            const createdDate =
                String(
                    student.createdAt || ""
                ).slice(
                    0,
                    10
                );
            
            return createdDate === today;
            
        }
    ).length;


        const totalPayments =
            fees.filter(
                function (fee) {

                    return String(
                        fee.paymentDate || ""
                    ) === today;

                }
            ).length;


        const paymentRecords =
            fees.length;


        /* =============================================
           MAIN DASHBOARD
           ============================================= */

        updateDashboardNumber(
            "totalStudents",
            totalStudents
        );


        updateDashboardNumber(
            "activeStudents",
            activeStudents
        );


        updateDashboardNumber(
            "completedStudents",
            completedStudents
        );


        updateDashboardNumber(
            "totalFees",
            totalFees
        );


        updateDashboardNumber(
            "collectedFees",
            collectedFees
        );


        updateDashboardNumber(
            "pendingFees",
            pendingFees
        );


        /* =============================================
           FEE BREAKDOWN
           ============================================= */

        updateDashboardNumber(
            "registrationFees",
            registrationFees
        );


        updateDashboardNumber(
            "monthlyFees",
            monthlyFees
        );


        updateDashboardNumber(
            "examFees",
            examFees
        );


        updateDashboardNumber(
            "bagFees",
            bagFees
        );


        updateDashboardNumber(
            "breakdownTotal",
            breakdownTotal
        );


        /* =============================================
           QUICK OVERVIEW
           ============================================= */

        updateDashboardNumber(
            "newAdmissions",
            newAdmissions
        );


        updateDashboardNumber(
            "totalPayments",
            totalPayments
        );


        updateDashboardNumber(
            "paymentRecords",
            paymentRecords
        );


        console.log(
            "Real Dashboard Loaded",
            {
                totalStudents,
                activeStudents,
                completedStudents,

                totalFees,
                collectedFees,
                pendingFees,

                registrationFees,
                monthlyFees,
                examFees,
                bagFees,

                breakdownTotal,

                newAdmissions,
                totalPayments,
                paymentRecords
            }
        );


    } catch (error) {

        console.error(
            "Dashboard Firebase Error:",
            error
        );

    }

}

/* =====================================================
   DASHBOARD NUMBER UPDATE
   ===================================================== */

function updateDashboardNumber(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {

        return;

    }


    const numericValue =
        Number(value) || 0;


    element.dataset.value =
        numericValue;


    /*
     * Premium counting animation
     */

    const duration =
        700;


    const startTime =
        performance.now();


    function animateNumber(
        currentTime
    ) {

        const elapsed =
            currentTime -
            startTime;


        const progress =
            Math.min(
                elapsed /
                duration,
                1
            );


        /*
         * Smooth easing
         */

        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const currentValue =
            Math.round(
                numericValue *
                eased
            );


        element.textContent =
            currentValue.toLocaleString(
                "en-IN"
            );


        if (
            progress <
            1
        ) {

            requestAnimationFrame(
                animateNumber
            );

        }

    }


    requestAnimationFrame(
        animateNumber
    );

}


/* =====================================================
   REFRESH DASHBOARD
   ===================================================== */

window.refreshRealDashboard =
    function () {

        initializeRealDashboard();

    };
    
    /* =====================================================
   MANAGE STUDENTS
   FIREBASE LOAD + SEARCH + ACTIVE / COMPLETED
   ===================================================== */

let manageStudentsData = [];

let currentManageStudentStatus = "Active";


/* =====================================================
   LOAD STUDENTS
   ===================================================== */

async function loadManageStudents() {

    const tableBody =
        document.getElementById(
            "manageStudentsTableBody"
        );

    const emptyState =
        document.getElementById(
            "studentEmptyState"
        );

    const resultInfo =
        document.getElementById(
            "manageStudentResultInfo"
        );

    if (!tableBody) {

        return;

    }


    try {

        const snapshot =
            await get(
                ref(
                    database,
                    "students"
                )
            );


        if (
            snapshot.exists()
        ) {

            const data =
                snapshot.val();


            manageStudentsData =
                Object.entries(
                    data
                ).map(
                    function ([id, student]) {

                        return {
                            id: id,
                            ...student
                        };

                    }
                );

        } else {

            manageStudentsData = [];

        }


        updateManageStudentCounts();

        renderManageStudents();


    } catch (error) {

        console.error(
            "Manage Students Firebase Error:",
            error
        );


        tableBody.innerHTML = `
            <tr>
                <td colspan="9">
                    <div class="student-empty-state">
                        <div class="student-empty-icon">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>

                        <h3>
                            Unable to Load Students
                        </h3>

                        <p>
                            Please refresh the page and try again.
                        </p>
                    </div>
                </td>
            </tr>
        `;

    }

}


/* =====================================================
   UPDATE ACTIVE / COMPLETED COUNTS
   ===================================================== */

function updateManageStudentCounts() {

    const activeCount =
        manageStudentsData.filter(
            function (student) {

                return String(
                    student.status || ""
                ).toLowerCase() ===
                "active";

            }
        ).length;


    const completedCount =
        manageStudentsData.filter(
            function (student) {

                return String(
                    student.status || ""
                ).toLowerCase() ===
                "completed";

            }
        ).length;


    const activeElement =
        document.getElementById(
            "manageActiveCount"
        );


    const completedElement =
        document.getElementById(
            "manageCompletedCount"
        );


    if (activeElement) {

        activeElement.textContent =
            activeCount;

    }


    if (completedElement) {

        completedElement.textContent =
            completedCount;

    }

}


/* =====================================================
   RENDER STUDENTS
   ===================================================== */

function renderManageStudents() {

    const tableBody =
        document.getElementById(
            "manageStudentsTableBody"
        );


    const emptyState =
        document.getElementById(
            "studentEmptyState"
        );


    const resultInfo =
        document.getElementById(
            "manageStudentResultInfo"
        );


    const searchInput =
        document.getElementById(
            "manageStudentSearch"
        );


    if (!tableBody) {

        return;

    }


    const searchText =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    let filteredStudents =
        manageStudentsData.filter(
            function (student) {

                const status =
                    String(
                        student.status || ""
                    ).toLowerCase();


                const selectedStatus =
                    currentManageStudentStatus
                        .toLowerCase();


                if (
                    status !==
                    selectedStatus
                ) {

                    return false;

                }


                if (!searchText) {

                    return true;

                }


                const studentName =
                    String(
                        student.studentName ||
                        student.name ||
                        ""
                    ).toLowerCase();


                const fatherName =
                    String(
                        student.fatherName ||
                        ""
                    ).toLowerCase();


                const rollNumber =
                    String(
                        student.studentRollNumber ||
                        student.rollNumber ||
                        ""
                    ).toLowerCase();


                return (
                    studentName.includes(
                        searchText
                    ) ||
                    fatherName.includes(
                        searchText
                    ) ||
                    rollNumber.includes(
                        searchText
                    )
                );

            }
        );


    if (
        filteredStudents.length ===
        0
    ) {

        tableBody.innerHTML = "";

        if (emptyState) {

            emptyState.hidden = false;

        }


        if (resultInfo) {

            resultInfo.textContent =
                "No students found.";

        }

        return;

    }


    if (emptyState) {

        emptyState.hidden = true;

    }


    if (resultInfo) {

        resultInfo.textContent =
            `${filteredStudents.length} student${
                filteredStudents.length === 1
                    ? ""
                    : "s"
            } found`;

    }


    tableBody.innerHTML =
        filteredStudents
            .map(
                function (student) {

                    const studentName =
                        student.studentName ||
                        student.name ||
                        "Unknown";


                    const fatherName =
                        student.fatherName ||
                        "—";


                    const rollNumber =
                        student.studentRollNumber ||
                        student.rollNumber ||
                        "—";


                    const course =
                        student.course ||
                        "—";


                    const totalFee =
                        Number(
                            student.totalFee || 0
                        );


                    const collectedFee =
                        Number(
                            student.collectedFee || 0
                        );


                    const pendingFee =
    Math.max(
        totalFee -
        collectedFee,
        0
    );


                    const status =
                        String(
                            student.status ||
                            "Active"
                        );


                    const statusClass =
                        status.toLowerCase() ===
                        "completed"
                            ? "completed"
                            : "active";


                    return `

                        <tr>

                            <td>
                                <strong>
                                    ${escapeManageStudentHTML(
                                        studentName
                                    )}
                                </strong>
                            </td>


                            <td>
                                ${escapeManageStudentHTML(
                                    fatherName
                                )}
                            </td>


                            <td>
                                ${escapeManageStudentHTML(
                                    rollNumber
                                )}
                            </td>


                            <td>
                                ${escapeManageStudentHTML(
                                    course
                                )}
                            </td>


                            <td>
                                ₹${totalFee.toLocaleString(
                                    "en-IN"
                                )}
                            </td>


                            <td>
                                ₹${collectedFee.toLocaleString(
                                    "en-IN"
                                )}
                            </td>


                            <td>
                                ₹${pendingFee.toLocaleString(
                                    "en-IN"
                                )}
                            </td>


                            <td>

                                <span
                                    class="student-status-badge ${statusClass}"
                                >

                                    ${
                                        statusClass ===
                                        "completed"
                                            ? '<i class="fa-solid fa-graduation-cap"></i>'
                                            : '<i class="fa-solid fa-circle-check"></i>'
                                    }

                                    ${escapeManageStudentHTML(
                                        status
                                    )}

                                </span>

                            </td>


                            <td>

                                <div class="student-action-buttons">

                                    <button
                                        type="button"
                                        class="student-view-btn"
                                        data-student-view="${student.id}"
                                        title="View Student"
                                    >
                                        <i class="fa-solid fa-eye"></i>
                                    </button>


                                    ${
                                        statusClass ===
                                        "active"
                                            ? `
                                                <button
                                                    type="button"
                                                    class="student-complete-btn"
                                                    data-student-complete="${student.id}"
                                                    title="Mark Completed"
                                                >
                                                    <i class="fa-solid fa-graduation-cap"></i>
                                                </button>
                                              `
                                            : ""
                                    }


                                    <button
                                        type="button"
                                        class="student-delete-btn"
                                        data-student-delete="${student.id}"
                                        title="Delete Student"
                                    >
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                </div>

                            </td>

                        </tr>

                    `;

                }
            )
            .join("");

}


/* =====================================================
   HTML ESCAPE
   ===================================================== */

function escapeManageStudentHTML(
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


/* =====================================================
   STATUS TAB CLICK
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const tab =
            event.target.closest(
                ".student-status-tab"
            );


        if (!tab) {

            return;

        }


        currentManageStudentStatus =
            tab.dataset.studentStatus ||
            "Active";


        document
            .querySelectorAll(
                ".student-status-tab"
            )
            .forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );


        tab.classList.add(
            "active"
        );


        renderManageStudents();

    }
);


/* =====================================================
   SEARCH
   ===================================================== */

document.addEventListener(
    "input",
    function (event) {

        if (
            event.target.id !==
            "manageStudentSearch"
        ) {

            return;

        }


        renderManageStudents();

    }
);


/* =====================================================
   CLEAR SEARCH
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "#clearStudentSearch"
            );


        if (!button) {

            return;

        }


        const input =
            document.getElementById(
                "manageStudentSearch"
            );


        if (input) {

            input.value = "";

            input.focus();

        }


        renderManageStudents();

    }
);


/* =====================================================
   REFRESH STUDENTS
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "#refreshStudentsBtn"
            );


        if (!button) {

            return;

        }


        loadManageStudents();

    }
);


/* =====================================================
   AUTO LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadManageStudents();

    }
);
/* =====================================================
   MANAGE STUDENTS — VIEW / COMPLETE / DELETE
   ===================================================== */


/* =====================================================
   VIEW STUDENT
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-student-view]"
            );

        if (!button) {
            return;
        }

        const studentId =
            button.dataset.studentView;

        const student =
            manageStudentsData.find(
                function (item) {
                    return item.id === studentId;
                }
            );

        if (!student) {
            return;
        }

        const modal =
            document.getElementById(
                "studentDetailsModal"
            );

        const content =
            document.getElementById(
                "studentDetailsContent"
            );

        if (!modal || !content) {
            return;
        }

        const studentName =
            student.studentName ||
            student.name ||
            "—";

        const fatherName =
            student.fatherName ||
            "—";

        const rollNumber =
            student.studentRollNumber ||
            student.rollNumber ||
            "—";

        const course =
            student.course ||
            "—";

        const mobile =
            student.mobileNumber ||
            "—";

        const email =
            student.studentEmail ||
            "—";

        const totalFee =
            Number(
                student.totalFee || 0
            );

        const collectedFee =
            Number(
                student.collectedFee || 0
            );

        const pendingFee =
    Math.max(
        totalFee -
        collectedFee,
        0
    );

        const status =
            student.status ||
            "—";


        content.innerHTML = `

    <div class="premium-student-profile">

        <!-- PROFILE HEADER -->

        <div class="student-profile-header">

            <div class="student-profile-avatar">
                <i class="fa-solid fa-user-graduate"></i>
            </div>

            <div class="student-profile-heading">

                <span class="student-profile-label">
                    STUDENT PROFILE
                </span>

                <h2>
                    ${escapeManageStudentHTML(studentName)}
                </h2>

                <div class="student-profile-meta">

                    <span>
                        <i class="fa-solid fa-id-badge"></i>
                        ${escapeManageStudentHTML(rollNumber)}
                    </span>

                    <span>
                        <i class="fa-solid fa-book-open"></i>
                        ${escapeManageStudentHTML(course)}
                    </span>

                </div>

            </div>

            <div class="student-profile-status">

                <i class="fa-solid fa-circle-check"></i>

                ${escapeManageStudentHTML(status)}

            </div>

        </div>


        <!-- BASIC INFORMATION -->

        <div class="student-info-section">

            <div class="student-info-section-title">

                <div class="student-info-title-icon">
                    <i class="fa-solid fa-user"></i>
                </div>

                <div>
                    <h3>Personal Information</h3>
                    <p>Student's basic details</p>
                </div>

            </div>


            <div class="student-detail-grid">

                <div class="student-detail-item">

                    <span>
                        <i class="fa-solid fa-user"></i>
                        Student Name
                    </span>

                    <strong>
                        ${escapeManageStudentHTML(studentName)}
                    </strong>

                </div>


                <div class="student-detail-item">

                    <span>
                        <i class="fa-solid fa-person"></i>
                        Father Name
                    </span>

                    <strong>
                        ${escapeManageStudentHTML(fatherName)}
                    </strong>

                </div>


                <div class="student-detail-item">

                    <span>
                        <i class="fa-solid fa-id-card"></i>
                        Roll Number
                    </span>

                    <strong>
                        ${escapeManageStudentHTML(rollNumber)}
                    </strong>

                </div>


                <div class="student-detail-item">

                    <span>
                        <i class="fa-solid fa-graduation-cap"></i>
                        Course
                    </span>

                    <strong>
                        ${escapeManageStudentHTML(course)}
                    </strong>

                </div>

            </div>

        </div>


        <!-- CONTACT INFORMATION -->

        <div class="student-info-section">

            <div class="student-info-section-title">

                <div class="student-info-title-icon">
                    <i class="fa-solid fa-address-book"></i>
                </div>

                <div>
                    <h3>Contact Information</h3>
                    <p>Student communication details</p>
                </div>

            </div>


            <div class="student-detail-grid">

                <div class="student-detail-item">

                    <span>
                        <i class="fa-solid fa-phone"></i>
                        Mobile Number
                    </span>

                    <strong>
                        ${escapeManageStudentHTML(mobile)}
                    </strong>

                </div>


                <div class="student-detail-item">

                    <span>
                        <i class="fa-solid fa-envelope"></i>
                        Email Address
                    </span>

                    <strong>
                        ${escapeManageStudentHTML(email)}
                    </strong>

                </div>

            </div>

        </div>


        <!-- FEE INFORMATION -->

        <div class="student-info-section student-fee-section">

            <div class="student-info-section-title">

                <div class="student-info-title-icon fee-icon">
                    <i class="fa-solid fa-wallet"></i>
                </div>

                <div>
                    <h3>Fee Information</h3>
                    <p>Current student fee status</p>
                </div>

            </div>


            <div class="student-fee-cards">

                <div class="student-fee-card total">

                    <div class="student-fee-card-icon">
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                    </div>

                    <div>

                        <span>Total Fee</span>

                        <strong>
                            ₹${totalFee.toLocaleString("en-IN")}
                        </strong>

                    </div>

                </div>


                <div class="student-fee-card collected">

                    <div class="student-fee-card-icon">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>

                    <div>

                        <span>Collected</span>

                        <strong>
                            ₹${collectedFee.toLocaleString("en-IN")}
                        </strong>

                    </div>

                </div>


                <div class="student-fee-card pending">

                    <div class="student-fee-card-icon">
                        <i class="fa-solid fa-clock"></i>
                    </div>

                    <div>

                        <span>Pending</span>

                        <strong>
                            ₹${pendingFee.toLocaleString("en-IN")}
                        </strong>

                    </div>

                </div>

            </div>

        </div>

    </div>

`;

        modal.hidden = false;

    }
);


/* =====================================================
   CLOSE VIEW MODAL
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest(
                "#closeStudentDetailsModal"
            ) ||
            event.target.closest(
                "[data-close-student-modal]"
            )
        ) {

            const modal =
                document.getElementById(
                    "studentDetailsModal"
                );

            if (modal) {
                modal.hidden = true;
            }

        }

    }
);


/* =====================================================
   MARK STUDENT COMPLETED
   ===================================================== */

document.addEventListener(
    "click",
    async function (event) {

        const button =
            event.target.closest(
                "[data-student-complete]"
            );

        if (!button) {
            return;
        }

        const studentId =
            button.dataset.studentComplete;

        const student =
            manageStudentsData.find(
                function (item) {
                    return item.id === studentId;
                }
            );

        if (!student) {
            return;
        }

        const studentName =
            student.studentName ||
            student.name ||
            "this student";


        const confirmed =
    await showCompleteStudentModal(
        studentName
    );

if (!confirmed) {
    return;
}

        if (!confirmed) {
            return;
        }


        try {

            await update(
                ref(
                    database,
                    "students/" + studentId
                ),
                {
                    status: "Completed"
                }
            );


            showPremiumCompletionSuccess(
    student.studentName ||
    student.name ||
    "Student"
);

            await loadManageStudents();

            initializeRealDashboard();

        } catch (error) {

            console.error(
                "Complete Student Error:",
                error
            );

            alert(
                "Unable to update student status."
            );

        }

    }
);


/* =====================================================
   DELETE STUDENT — OPEN CONFIRMATION
   ===================================================== */

let studentPendingDelete = null;


document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-student-delete]"
            );

        if (!button) {
            return;
        }

        const studentId =
            button.dataset.studentDelete;

        const student =
            manageStudentsData.find(
                function (item) {
                    return item.id === studentId;
                }
            );

        if (!student) {
            return;
        }


        studentPendingDelete =
            student;


        const modal =
            document.getElementById(
                "deleteStudentModal"
            );

        const message =
            document.getElementById(
                "deleteStudentMessage"
            );


        const studentName =
            student.studentName ||
            student.name ||
            "this student";


        const fatherName =
            student.fatherName ||
            "—";


        if (message) {

            message.innerHTML = `
                You are about to permanently delete
                <strong>
                    ${escapeManageStudentHTML(studentName)}
                </strong>
                <br>
                Father:
                <strong>
                    ${escapeManageStudentHTML(fatherName)}
                </strong>
                <br><br>
                This action cannot be undone.
            `;

        }


        if (modal) {

            modal.hidden = false;

        }

    }
);


/* =====================================================
   CANCEL DELETE
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest(
                "#cancelStudentDelete"
            ) ||
            event.target.closest(
                "[data-close-delete-modal]"
            )
        ) {

            studentPendingDelete =
                null;


            const modal =
                document.getElementById(
                    "deleteStudentModal"
                );


            if (modal) {

                modal.hidden = true;

            }

        }

    }
);


/* =====================================================
   CONFIRM DELETE
   ===================================================== */

document.addEventListener(
    "click",
    async function (event) {

        const button =
            event.target.closest(
                "#confirmStudentDelete"
            );

        if (!button) {
            return;
        }


        if (!studentPendingDelete) {
            return;
        }


        const student =
            studentPendingDelete;


        const studentId =
            student.id;


        try {

            button.disabled = true;


            /*
             * Delete student record only.
             *
             * Fee records are NOT automatically
             * deleted here because we must first
             * match their student ID safely.
             */

            await remove(
                ref(
                    database,
                    "students/" +
                    studentId
                )
            );


            const modal =
                document.getElementById(
                    "deleteStudentModal"
                );


            if (modal) {

                modal.hidden = true;

            }


            studentPendingDelete =
                null;


        showAdminNotification(
    "Student deleted successfully.",
    "success"
);


            await loadManageStudents();

            initializeRealDashboard();


        } catch (error) {

            console.error(
                "Delete Student Error:",
                error
            );


            showAdminNotification(
    "Unable to delete student.",
    "error"
);

        } finally {

            button.disabled = false;

        }

    }
);
/* =====================================================
   PREMIUM ADMIN NOTIFICATION
   ===================================================== */

function showAdminNotification(
    message,
    type = "success"
) {

    let notification =
        document.getElementById(
            "adminPremiumNotification"
        );


    if (!notification) {

        notification =
            document.createElement(
                "div"
            );

        notification.id =
            "adminPremiumNotification";

        notification.innerHTML = `

            <div class="admin-notification-icon">
                <i></i>
            </div>

            <div class="admin-notification-content">

                <strong>
                    <span class="admin-notification-title">
                        Success
                    </span>
                </strong>

                <p></p>

            </div>

            <button
                type="button"
                class="admin-notification-close"
                aria-label="Close"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

        `;

        document.body.appendChild(
            notification
        );

    }


    const title =
        notification.querySelector(
            ".admin-notification-title"
        );

    const text =
        notification.querySelector(
            ".admin-notification-content p"
        );

    const icon =
        notification.querySelector(
            ".admin-notification-icon i"
        );


    notification.className =
        "admin-premium-notification " +
        type;


    if (type === "error") {

        title.textContent =
            "Error";

        icon.className =
            "fa-solid fa-circle-exclamation";

    } else {

        title.textContent =
            "Success";

        icon.className =
            "fa-solid fa-circle-check";

    }


    text.textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        window.adminNotificationTimer
    );


    window.adminNotificationTimer =
        setTimeout(
            function () {

                notification.classList.remove(
                    "show"
                );

            },
            3500
        );


    const closeButton =
        notification.querySelector(
            ".admin-notification-close"
        );


    closeButton.onclick =
        function () {

            notification.classList.remove(
                "show"
            );

        };

}
/* =====================================================
   PREMIUM COMPLETE STUDENT MODAL
   ===================================================== */

function showCompleteStudentModal(studentName) {

    return new Promise(
        function (resolve) {

            const oldModal =
                document.getElementById(
                    "completeStudentModal"
                );

            if (oldModal) {
                oldModal.remove();
            }


            const modal =
                document.createElement("div");

            modal.id =
                "completeStudentModal";

            modal.className =
                "complete-student-modal";


            modal.innerHTML = `

                <div class="complete-student-overlay"></div>


                <div class="complete-student-card">

                    <button
                        type="button"
                        class="complete-modal-close"
                        id="completeModalClose"
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>


                    <div class="complete-modal-icon">

                        <div class="complete-icon-ring">

                            <i class="fa-solid fa-graduation-cap"></i>

                        </div>

                    </div>


                    <div class="complete-modal-badge">

                        <i class="fa-solid fa-certificate"></i>

                        COURSE COMPLETION

                    </div>


                    <h3>
                        Mark Student as Completed?
                    </h3>


                    <p class="complete-student-name">
                        ${escapeManageStudentHTML(
                            studentName
                        )}
                    </p>


                    <p class="complete-modal-description">

                        This will change the student's
                        status from

                        <strong>Active</strong>

                        to

                        <strong>Completed</strong>.

                    </p>


                    <div class="complete-modal-actions">

                        <button
                            type="button"
                            class="complete-cancel-btn"
                            id="completeModalCancel"
                        >

                            <i class="fa-solid fa-xmark"></i>

                            Cancel

                        </button>


                        <button
                            type="button"
                            class="complete-confirm-btn"
                            id="completeModalConfirm"
                        >

                            <i class="fa-solid fa-graduation-cap"></i>

                            Mark Completed

                        </button>

                    </div>

                </div>

            `;


            document.body.appendChild(
                modal
            );


            requestAnimationFrame(
                function () {

                    modal.classList.add(
                        "show"
                    );

                }
            );


            function closeModal(
                result
            ) {

                modal.classList.remove(
                    "show"
                );


                setTimeout(
                    function () {

                        modal.remove();

                        resolve(
                            result
                        );

                    },
                    250
                );

            }


            document
                .getElementById(
                    "completeModalClose"
                )
                .addEventListener(
                    "click",
                    function () {

                        closeModal(
                            false
                        );

                    }
                );


            document
                .getElementById(
                    "completeModalCancel"
                )
                .addEventListener(
                    "click",
                    function () {

                        closeModal(
                            false
                        );

                    }
                );


            document
                .getElementById(
                    "completeModalConfirm"
                )
                .addEventListener(
                    "click",
                    function () {

                        closeModal(
                            true
                        );

                    }
                );


            modal
                .querySelector(
                    ".complete-student-overlay"
                )
                .addEventListener(
                    "click",
                    function () {

                        closeModal(
                            false
                        );

                    }
                );

        }
    );

}

/* =====================================================
   PREMIUM COMPLETION SUCCESS
   ===================================================== */

function showPremiumCompletionSuccess(studentName) {

    const existing =
        document.getElementById(
            "premiumCompletionToast"
        );

    if (existing) {
        existing.remove();
    }


    const toast =
        document.createElement("div");

    toast.id =
        "premiumCompletionToast";

    toast.className =
        "premium-completion-toast";


    toast.innerHTML = `

        <div class="premium-completion-icon">
            <i class="fa-solid fa-graduation-cap"></i>
        </div>

        <div class="premium-completion-content">

            <strong>
                Student Completed
            </strong>

            <span>
                ${escapeManageStudentHTML(studentName)}
                has been marked as Completed successfully.
            </span>

        </div>

        <button
            type="button"
            class="premium-completion-close"
            aria-label="Close"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>

    `;


    document.body.appendChild(toast);


    requestAnimationFrame(
        function () {

            toast.classList.add("show");

        }
    );


    const closeButton =
        toast.querySelector(
            ".premium-completion-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                closePremiumCompletionToast(
                    toast
                );

            }
        );

    }


    setTimeout(
        function () {

            closePremiumCompletionToast(
                toast
            );

        },
        4500
    );

}


/* =====================================================
   CLOSE PREMIUM COMPLETION TOAST
   ===================================================== */

function closePremiumCompletionToast(toast) {

    if (!toast) {
        return;
    }

    toast.classList.remove("show");

    setTimeout(
        function () {

            if (toast.parentNode) {
                toast.remove();
            }

        },
        350
    );

}

/* =====================================================
   EXPENSE MANAGEMENT
   FIREBASE + PREMIUM DROPDOWNS
   ===================================================== */


/* =====================================================
   EXPENSE DROPDOWNS
   ===================================================== */

function initializeExpenseDropdowns() {

    const selects =
        document.querySelectorAll(
            ".expense-premium-select"
        );


    selects.forEach(
        function (select) {

            const trigger =
                select.querySelector(
                    ".premium-select-trigger"
                );

            const valueElement =
                select.querySelector(
                    ".premium-select-value"
                );

            const hiddenInput =
                select.querySelector(
                    "input[type='hidden']"
                );

            const options =
                select.querySelectorAll(
                    ".premium-option"
                );


            if (
                !trigger ||
                !valueElement ||
                !hiddenInput
            ) {

                return;

            }


            /* -----------------------------------------
               OPEN / CLOSE DROPDOWN
               ----------------------------------------- */

            trigger.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    /*
                     * Close other expense dropdowns
                     */

                    selects.forEach(
                        function (otherSelect) {

                            if (
                                otherSelect !==
                                select
                            ) {

                                otherSelect.classList.remove(
                                    "open"
                                );

                                const otherTrigger =
                                    otherSelect.querySelector(
                                        ".premium-select-trigger"
                                    );

                                if (otherTrigger) {

                                    otherTrigger.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    );

                                }

                            }

                        }
                    );


                    select.classList.toggle(
                        "open"
                    );


                    trigger.setAttribute(
                        "aria-expanded",
                        select.classList.contains(
                            "open"
                        )
                    );

                }
            );


            /* -----------------------------------------
               SELECT OPTION
               ----------------------------------------- */

            options.forEach(
                function (option) {

                    option.addEventListener(
                        "click",
                        function (event) {

                            event.stopPropagation();


                            const selectedValue =
                                option.dataset.value ||
                                "";


                            const selectedText =
                                option.querySelector(
                                    "span"
                                )?.textContent
                                    .trim() ||
                                selectedValue;


                            const selectedIcon =
                                option.querySelector(
                                    "i"
                                );


                            /* SAVE VALUE */

                            hiddenInput.value =
                                selectedValue;


                            /* SHOW SELECTED VALUE */

                            valueElement.innerHTML = `

                                ${
                                    selectedIcon
                                        ? selectedIcon.outerHTML
                                        : ""
                                }

                                ${selectedText}

                            `;


                            /* SELECTED STATE */

                            options.forEach(
                                function (item) {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                            option.classList.add(
                                "selected"
                            );


                            /* CLOSE */

                            select.classList.remove(
                                "open"
                            );


                            trigger.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                }
            );

        }
    );


    /* ---------------------------------------------
       CLOSE DROPDOWN OUTSIDE CLICK
       --------------------------------------------- */

    document.addEventListener(
        "click",
        function () {

            selects.forEach(
                function (select) {

                    select.classList.remove(
                        "open"
                    );


                    const trigger =
                        select.querySelector(
                            ".premium-select-trigger"
                        );


                    if (trigger) {

                        trigger.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }
    );

}


/* =====================================================
   SAVE EXPENSE
   ===================================================== */

function initializeExpenseManagement() {

    const form =
        document.getElementById(
            "expenseForm"
        );


    if (!form) {

        return;

    }


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* -----------------------------------------
               GET VALUES
               ----------------------------------------- */

            const expenseTitle =
                document.getElementById(
                    "expenseTitle"
                )?.value.trim() || "";


            const amount =
                Number(
                    document.getElementById(
                        "expenseAmount"
                    )?.value || 0
                );


            const category =
                document.getElementById(
                    "expenseCategory"
                )?.value.trim() || "";


            const paymentMode =
                document.getElementById(
                    "expensePaymentMode"
                )?.value.trim() || "";


            const expenseDate =
                document.getElementById(
                    "expenseDate"
                )?.value || "";


            const transactionNumber =
                document.getElementById(
                    "expenseTransactionNumber"
                )?.value.trim() || "";


            const remarks =
                document.getElementById(
                    "expenseRemarks"
                )?.value.trim() || "";


            /* -----------------------------------------
               VALIDATION
               ----------------------------------------- */

            if (!expenseTitle) {

                showExpenseMessage(
                    "Please enter expense title.",
                    "error"
                );

                return;

            }


            if (
                !amount ||
                amount <= 0
            ) {

                showExpenseMessage(
                    "Please enter a valid expense amount.",
                    "error"
                );

                return;

            }


            if (!category) {

                showExpenseMessage(
                    "Please select expense category.",
                    "error"
                );

                return;

            }


            if (!paymentMode) {

                showExpenseMessage(
                    "Please select payment mode.",
                    "error"
                );

                return;

            }


            if (!expenseDate) {

                showExpenseMessage(
                    "Please select expense date.",
                    "error"
                );

                return;

            }


            /* -----------------------------------------
               ADMIN CHECK
               ----------------------------------------- */

            if (!auth.currentUser) {

                showExpenseMessage(
                    "Admin login session not found.",
                    "error"
                );

                return;

            }


            /* -----------------------------------------
               SAVE BUTTON
               ----------------------------------------- */

            const saveButton =
                document.getElementById(
                    "saveExpenseBtn"
                );


            if (saveButton) {

                saveButton.disabled =
                    true;

                saveButton.innerHTML = `

                    <i class="fa-solid fa-spinner fa-spin"></i>

                    <span>
                        Saving...
                    </span>

                `;

            }


            try {

                /* -------------------------------------
                   CREATE EXPENSE ID
                   ------------------------------------- */

                const expenseId =
                    "expense_" +
                    Date.now();


                /* -------------------------------------
                   EXPENSE DATA
                   ------------------------------------- */

                const expenseData = {

                    expenseId:
                        expenseId,

                    expenseTitle:
                        expenseTitle,

                    amount:
                        amount,

                    category:
                        category,

                    paymentMode:
                        paymentMode,

                    expenseDate:
                        expenseDate,

                    transactionNumber:
                        transactionNumber,

                    remarks:
                        remarks,

                    createdAt:
                        new Date().toISOString(),

                    createdBy:
                        auth.currentUser.email || ""

                };


                /* -------------------------------------
                   SAVE TO FIREBASE
                   ------------------------------------- */

                await set(
                    ref(
                        database,
                        "expenses/" +
                        expenseId
                    ),
                    expenseData
                );


                console.log(
                    "Expense Saved Successfully:",
                    expenseData
                );


                /* -------------------------------------
                   SUCCESS
                   ------------------------------------- */

                showExpenseMessage(
                    expenseTitle +
                    " • ₹" +
                    amount.toLocaleString(
                        "en-IN"
                    ) +
                    " saved successfully.",
                    "success"
                );


                /* -------------------------------------
                   RESET FORM
                   ------------------------------------- */

                form.reset();


                resetExpenseDropdowns();


            } catch (error) {

                console.error(
                    "Expense Save Error:",
                    error
                );


                showExpenseMessage(
                    "Expense save failed: " +
                    error.message,
                    "error"
                );


            } finally {

                if (saveButton) {

                    saveButton.disabled =
                        false;

                    saveButton.innerHTML = `

                        <i class="fa-solid fa-floppy-disk"></i>

                        <span>
                            Save Expense
                        </span>

                    `;

                }

            }

        }
    );

}


/* =====================================================
   RESET EXPENSE DROPDOWNS
   ===================================================== */

function resetExpenseDropdowns() {

    const categorySelect =
        document.getElementById(
            "expenseCategorySelect"
        );


    const paymentSelect =
        document.getElementById(
            "expensePaymentModeSelect"
        );


    /* ---------------------------------------------
       CATEGORY
       --------------------------------------------- */

    if (categorySelect) {

        const value =
            categorySelect.querySelector(
                ".premium-select-value"
            );


        const hidden =
            document.getElementById(
                "expenseCategory"
            );


        if (value) {

            value.innerHTML = `

                <i class="fa-solid fa-layer-group"></i>

                Select Category

            `;

        }


        if (hidden) {

            hidden.value = "";

        }


        categorySelect.classList.remove(
            "open",
            "active"
        );


        categorySelect
            .querySelectorAll(
                ".premium-option"
            )
            .forEach(
                function (option) {

                    option.classList.remove(
                        "selected"
                    );

                }
            );

    }


    /* ---------------------------------------------
       PAYMENT MODE
       --------------------------------------------- */

    if (paymentSelect) {

        const value =
            paymentSelect.querySelector(
                ".premium-select-value"
            );


        const hidden =
            document.getElementById(
                "expensePaymentMode"
            );


        if (value) {

            value.innerHTML = `

                <i class="fa-solid fa-wallet"></i>

                Select Payment Mode

            `;

        }


        if (hidden) {

            hidden.value = "";

        }


        paymentSelect.classList.remove(
            "open",
            "active"
        );


        paymentSelect
            .querySelectorAll(
                ".premium-option"
            )
            .forEach(
                function (option) {

                    option.classList.remove(
                        "selected"
                    );

                }
            );

    }

}


/* =====================================================
   EXPENSE MESSAGE
   ===================================================== */

/* =====================================================
   PREMIUM EXPENSE MESSAGE
   ===================================================== */

function showExpenseMessage(
    message,
    type
) {

    /* -----------------------------------------
       REMOVE OLD TOAST
       ----------------------------------------- */

    const oldToast =
        document.getElementById(
            "expensePremiumToast"
        );

    if (oldToast) {

        oldToast.remove();

    }


    /* -----------------------------------------
       MESSAGE TYPE
       ----------------------------------------- */

    const isSuccess =
        type === "success";


    const icon =
        isSuccess
            ? "fa-circle-check"
            : "fa-circle-exclamation";


    const title =
        isSuccess
            ? "Expense Saved"
            : "Something went wrong";


    /* -----------------------------------------
       CREATE TOAST
       ----------------------------------------- */

    const toast =
        document.createElement(
            "div"
        );


    toast.id =
        "expensePremiumToast";


    toast.className =
        "expense-premium-toast " +
        (
            isSuccess
                ? "success"
                : "error"
        );


    toast.innerHTML = `

        <div class="expense-toast-icon">

            <i class="fa-solid ${icon}"></i>

        </div>


        <div class="expense-toast-content">

            <strong>
                ${title}
            </strong>

            <span>
                ${message}
            </span>

        </div>


        <button
            type="button"
            class="expense-toast-close"
            aria-label="Close"
        >

            <i class="fa-solid fa-xmark"></i>

        </button>


        <div class="expense-toast-progress"></div>

    `;


    document.body.appendChild(
        toast
    );


    /* -----------------------------------------
       SHOW ANIMATION
       ----------------------------------------- */

    requestAnimationFrame(
        function () {

            toast.classList.add(
                "show"
            );

        }
    );


    /* -----------------------------------------
       CLOSE BUTTON
       ----------------------------------------- */

    const closeButton =
        toast.querySelector(
            ".expense-toast-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                closeExpenseToast(
                    toast
                );

            }
        );

    }


    /* -----------------------------------------
       AUTO CLOSE
       ----------------------------------------- */

    setTimeout(
        function () {

            closeExpenseToast(
                toast
            );

        },
        4500
    );

}


/* =====================================================
   CLOSE EXPENSE TOAST
   ===================================================== */

function closeExpenseToast(
    toast
) {

    if (!toast) {

        return;

    }


    toast.classList.remove(
        "show"
    );


    setTimeout(
        function () {

            if (toast) {

                toast.remove();

            }

        },
        350
    );

}
/* =====================================================
   INITIALIZE EXPENSE SYSTEM
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

    
        initializeExpenseManagement();

    }
);
/* =====================================================
   EXPENSE HISTORY / MANAGE EXPENSES
   FIREBASE LOAD + SEARCH + FILTER
   ===================================================== */

let expenseHistoryData = [];

let currentExpenseCategory = "All";


/* =====================================================
   INITIALIZE EXPENSE HISTORY
   ===================================================== */

function initializeExpenseHistory() {

    const tableBody =
        document.getElementById(
            "expenseHistoryTableBody"
        );

    if (!tableBody) {
        return;
    }


    loadExpenseHistory();


    /* ---------------------------------------------
       SEARCH
       --------------------------------------------- */

    const searchInput =
        document.getElementById(
            "expenseHistorySearch"
        );

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                renderExpenseHistory();

            }
        );

    }


    /* ---------------------------------------------
       DATE FILTER
       --------------------------------------------- */

    const dateInput =
        document.getElementById(
            "expenseHistoryDate"
        );

    if (dateInput) {

        dateInput.addEventListener(
            "change",
            function () {

                renderExpenseHistory();

            }
        );

    }


    /* ---------------------------------------------
       CATEGORY FILTER
       --------------------------------------------- */

    const categorySelect =
        document.getElementById(
            "expenseHistoryCategorySelect"
        );

    if (categorySelect) {

        categorySelect
            .querySelectorAll(
                ".premium-option"
            )
            .forEach(
                function (option) {

                    option.addEventListener(
                        "click",
                        function () {

                            currentExpenseCategory =
                                option.dataset.value ||
                                "All";


                            const valueElement =
                                categorySelect.querySelector(
                                    ".premium-select-value"
                                );


                            if (valueElement) {

                                valueElement.innerHTML =
                                    option.innerHTML;

                            }


                            categorySelect.classList.remove(
                                "open",
                                "active"
                            );


                            const trigger =
                                categorySelect.querySelector(
                                    ".premium-select-trigger"
                                );


                            if (trigger) {

                                trigger.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }


                            renderExpenseHistory();

                        }
                    );

                }
            );

    }

}


/* =====================================================
   LOAD EXPENSES FROM FIREBASE
   ===================================================== */

async function loadExpenseHistory() {

    try {

        const snapshot =
            await get(
                ref(
                    database,
                    "expenses"
                )
            );


        if (snapshot.exists()) {

            const data =
                snapshot.val();


            expenseHistoryData =
                Object.entries(
                    data
                ).map(
                    function ([id, expense]) {

                        return {

                            id:
                                id,

                            ...expense

                        };

                    }
                );

        } else {

            expenseHistoryData = [];

        }


        updateExpenseSummary();

        renderExpenseHistory();


    } catch (error) {

        console.error(
            "Expense History Firebase Error:",
            error
        );

    }

}


/* =====================================================
   UPDATE EXPENSE SUMMARY
   ===================================================== */

function updateExpenseSummary() {

    const totalRecords =
        expenseHistoryData.length;


    let totalAmount = 0;

    let todayAmount = 0;


    const today =
        new Date()
            .toISOString()
            .slice(
                0,
                10
            );


    expenseHistoryData.forEach(
        function (expense) {

            const amount =
                Number(
                    expense.amount || 0
                );


            totalAmount +=
                amount;


            const expenseDate =
                String(
                    expense.expenseDate ||
                    expense.date ||
                    ""
                ).slice(
                    0,
                    10
                );


            if (
                expenseDate ===
                today
            ) {

                todayAmount +=
                    amount;

            }

        }
    );


    const recordsElement =
        document.getElementById(
            "totalExpenseRecords"
        );


    const totalElement =
        document.getElementById(
            "totalExpenseAmount"
        );


    const todayElement =
        document.getElementById(
            "todayExpenseAmount"
        );


    if (recordsElement) {

        recordsElement.textContent =
            totalRecords.toLocaleString(
                "en-IN"
            );

    }


    if (totalElement) {

        totalElement.textContent =
            totalAmount.toLocaleString(
                "en-IN"
            );

    }


    if (todayElement) {

        todayElement.textContent =
            todayAmount.toLocaleString(
                "en-IN"
            );

    }

}


/* =====================================================
   RENDER EXPENSE HISTORY
   ===================================================== */

function renderExpenseHistory() {

    const tableBody =
        document.getElementById(
            "expenseHistoryTableBody"
        );


    const emptyState =
        document.getElementById(
            "expenseHistoryEmpty"
        );


    const resultInfo =
        document.getElementById(
            "expenseHistoryResultInfo"
        );


    if (!tableBody) {
        return;
    }


    const searchInput =
        document.getElementById(
            "expenseHistorySearch"
        );


    const dateInput =
        document.getElementById(
            "expenseHistoryDate"
        );


    const searchText =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const selectedDate =
        dateInput
            ? dateInput.value
            : "";


    /* ---------------------------------------------
       FILTER
       --------------------------------------------- */

    const filteredExpenses =
        expenseHistoryData.filter(
            function (expense) {

                const title =
                    String(
                        expense.title ||
                        expense.expenseTitle ||
                        ""
                    );


                const category =
                    String(
                        expense.category ||
                        expense.expenseCategory ||
                        ""
                    );


                const paymentMode =
                    String(
                        expense.paymentMode ||
                        ""
                    );


                const transaction =
                    String(
                        expense.transactionNumber ||
                        expense.expenseTransactionNumber ||
                        ""
                    );


                const remarks =
                    String(
                        expense.remarks ||
                        expense.expenseRemarks ||
                        ""
                    );


                const expenseDate =
                    String(
                        expense.expenseDate ||
                        expense.date ||
                        ""
                    ).slice(
                        0,
                        10
                    );


                /* SEARCH */

                const matchesSearch =
                    !searchText ||
                    title.toLowerCase().includes(
                        searchText
                    ) ||
                    category.toLowerCase().includes(
                        searchText
                    ) ||
                    paymentMode.toLowerCase().includes(
                        searchText
                    ) ||
                    transaction.toLowerCase().includes(
                        searchText
                    ) ||
                    remarks.toLowerCase().includes(
                        searchText
                    );


                /* CATEGORY */

                const matchesCategory =
                    currentExpenseCategory ===
                    "All" ||
                    category ===
                    currentExpenseCategory;


                /* DATE */

                const matchesDate =
                    !selectedDate ||
                    expenseDate ===
                    selectedDate;


                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesDate
                );

            }
        );


    /* ---------------------------------------------
       EMPTY
       --------------------------------------------- */

    if (
        filteredExpenses.length ===
        0
    ) {

        tableBody.innerHTML = "";


        if (emptyState) {

            emptyState.hidden =
                false;

        }


        if (resultInfo) {

            resultInfo.textContent =
                "No expenses found.";

        }


        return;

    }


    if (emptyState) {

        emptyState.hidden =
            true;

    }


    if (resultInfo) {

        resultInfo.textContent =
            `${filteredExpenses.length} expense${
                filteredExpenses.length === 1
                    ? ""
                    : "s"
            } found`;

    }


    /* ---------------------------------------------
       TABLE
       --------------------------------------------- */

    tableBody.innerHTML =
        filteredExpenses
            .map(
                function (expense) {

                    const title =
                        expense.title ||
                        expense.expenseTitle ||
                        "—";


                    const category =
                        expense.category ||
                        expense.expenseCategory ||
                        "—";


                    const amount =
                        Number(
                            expense.amount || 0
                        );


                    const paymentMode =
                        expense.paymentMode ||
                        "—";


                    const date =
                        String(
                            expense.expenseDate ||
                            expense.date ||
                            "—"
                        ).slice(
                            0,
                            10
                        );


                    const transaction =
                        expense.transactionNumber ||
                        expense.expenseTransactionNumber ||
                        "—";


                    return `

                        <tr>

                            <td>

                                <strong>
                                    ${escapeExpenseHTML(
                                        title
                                    )}
                                </strong>

                            </td>


                            <td>

                                <span class="expense-category-badge">

                                    ${escapeExpenseHTML(
                                        category
                                    )}

                                </span>

                            </td>


                            <td>

                                <strong>
                                    ₹${amount.toLocaleString(
                                        "en-IN"
                                    )}
                                </strong>

                            </td>


                            <td>

                                ${escapeExpenseHTML(
                                    paymentMode
                                )}

                            </td>


                            <td>

                                ${escapeExpenseHTML(
                                    date
                                )}

                            </td>


                            <td>

                                ${escapeExpenseHTML(
                                    transaction
                                )}

                            </td>


                            <td>

                                <div class="expense-action-buttons">

                                    <button
                                        type="button"
                                        class="expense-view-btn"
                                        data-expense-view="${expense.id}"
                                        title="View Expense"
                                    >

                                        <i class="fa-solid fa-eye"></i>

                                    </button>


                                    <button
                                        type="button"
                                        class="expense-delete-btn"
                                        data-expense-delete="${expense.id}"
                                        title="Delete Expense"
                                    >

                                        <i class="fa-solid fa-trash-can"></i>

                                    </button>

                                </div>

                            </td>

                        </tr>

                    `;

                }
            )
            .join("");

}


/* =====================================================
   HTML ESCAPE
   ===================================================== */

function escapeExpenseHTML(
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


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeExpenseHistory();

    }
);
/* =====================================================
   VIEW EXPENSE
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-expense-view]"
            );

        if (!button) {
            return;
        }


        const expenseId =
            button.dataset.expenseView;


        const expense =
            expenseHistoryData.find(
                function (item) {

                    return item.id ===
                        expenseId;

                }
            );


        if (!expense) {
            return;
        }


        const modal =
            document.getElementById(
                "expenseDetailsModal"
            );


        const content =
            document.getElementById(
                "expenseDetailsContent"
            );


        if (!modal || !content) {
            return;
        }


        /* ---------------------------------------------
           EXPENSE DATA
           --------------------------------------------- */

        const title =
            expense.title ||
            expense.expenseTitle ||
            "—";


        const amount =
            Number(
                expense.amount || 0
            );


        const category =
            expense.category ||
            expense.expenseCategory ||
            "—";


        const paymentMode =
            expense.paymentMode ||
            "—";


        const date =
            String(
                expense.expenseDate ||
                expense.date ||
                "—"
            ).slice(
                0,
                10
            );


        const transaction =
            expense.transactionNumber ||
            expense.expenseTransactionNumber ||
            "—";


        const remarks =
            expense.remarks ||
            expense.expenseRemarks ||
            "—";


        const createdBy =
            expense.createdBy ||
            "—";


        const createdAt =
            expense.createdAt ||
            "—";


        /* ---------------------------------------------
           DISPLAY
           --------------------------------------------- */

        content.innerHTML = `

            <div class="expense-detail-grid">


                <!-- AMOUNT -->

                <div class="expense-detail-amount">

                    <span>
                        Expense Amount
                    </span>

                    <strong>
                        ₹${amount.toLocaleString(
                            "en-IN"
                        )}
                    </strong>

                </div>


                <!-- TITLE -->

                <div class="expense-detail-item">

                    <span>
                        Expense Title
                    </span>

                    <strong>
                        ${escapeExpenseHTML(
                            title
                        )}
                    </strong>

                </div>


                <!-- CATEGORY -->

                <div class="expense-detail-item">

                    <span>
                        Category
                    </span>

                    <strong>

                        <span
                            class="expense-detail-category"
                        >

                            <i class="fa-solid fa-layer-group"></i>

                            ${escapeExpenseHTML(
                                category
                            )}

                        </span>

                    </strong>

                </div>


                <!-- PAYMENT MODE -->

                <div class="expense-detail-item">

                    <span>
                        Payment Mode
                    </span>

                    <strong>
                        ${escapeExpenseHTML(
                            paymentMode
                        )}
                    </strong>

                </div>


                <!-- DATE -->

                <div class="expense-detail-item">

                    <span>
                        Expense Date
                    </span>

                    <strong>
                        ${escapeExpenseHTML(
                            date
                        )}
                    </strong>

                </div>


                <!-- TRANSACTION -->

                <div class="expense-detail-item">

                    <span>
                        Transaction Number
                    </span>

                    <strong>
                        ${escapeExpenseHTML(
                            transaction
                        )}
                    </strong>

                </div>


                <!-- CREATED BY -->

                <div class="expense-detail-item">

                    <span>
                        Recorded By
                    </span>

                    <strong>
                        ${escapeExpenseHTML(
                            createdBy
                        )}
                    </strong>

                </div>


                <!-- REMARKS -->

                <div class="expense-detail-item full">

                    <span>
                        Remarks
                    </span>

                    <strong>
                        ${escapeExpenseHTML(
                            remarks
                        )}
                    </strong>

                </div>


            </div>

        `;


        /* ---------------------------------------------
           SHOW MODAL
           --------------------------------------------- */

        modal.hidden = false;


        document.body.classList.add(
            "expense-modal-open"
        );

    }
);


/* =====================================================
   CLOSE EXPENSE DETAILS MODAL
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const closeButton =
            event.target.closest(
                "#closeExpenseDetailsModal, [data-close-expense-modal]"
            );


        const overlay =
            event.target.closest(
                ".expense-details-overlay"
            );


        if (
            !closeButton &&
            !overlay
        ) {

            return;

        }


        closeExpenseDetailsModal();

    }
);


/* =====================================================
   CLOSE FUNCTION
   ===================================================== */

function closeExpenseDetailsModal() {

    const modal =
        document.getElementById(
            "expenseDetailsModal"
        );


    if (!modal) {
        return;
    }


    modal.hidden = true;


    document.body.classList.remove(
        "expense-modal-open"
    );

}


/* =====================================================
   ESC KEY CLOSE
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        const modal =
            document.getElementById(
                "expenseDetailsModal"
            );


        if (
            modal &&
            !modal.hidden
        ) {

            closeExpenseDetailsModal();

        }

    }
);
/* =====================================================
   DELETE EXPENSE
   FIREBASE + PREMIUM CONFIRMATION
   ===================================================== */

let expenseToDeleteId = null;


/* =====================================================
   OPEN DELETE CONFIRMATION
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-expense-delete]"
            );

        if (!button) {
            return;
        }


        const expenseId =
            button.dataset.expenseDelete;


        if (!expenseId) {
            return;
        }


        const expense =
            expenseHistoryData.find(
                function (item) {

                    return item.id ===
                        expenseId;

                }
            );


        if (!expense) {
            return;
        }


        expenseToDeleteId =
            expenseId;


        const modal =
            document.getElementById(
                "expenseDeleteModal"
            );


        const message =
            document.getElementById(
                "expenseDeleteMessage"
            );


        if (!modal) {
            return;
        }


        const title =
            expense.title ||
            expense.expenseTitle ||
            "this expense";


        const amount =
            Number(
                expense.amount || 0
            );


        if (message) {

            message.textContent =
                `"${title}" • ₹${amount.toLocaleString(
                    "en-IN"
                )} will be permanently deleted.`;

        }


        modal.hidden = false;

    }
);


/* =====================================================
   CANCEL DELETE
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "#cancelExpenseDelete"
            );


        const overlay =
            event.target.closest(
                ".expense-delete-overlay"
            );


        if (
            !button &&
            !overlay
        ) {
            return;
        }


        closeExpenseDeleteModal();

    }
);


/* =====================================================
   CLOSE DELETE MODAL
   ===================================================== */

function closeExpenseDeleteModal() {

    const modal =
        document.getElementById(
            "expenseDeleteModal"
        );


    if (modal) {

        modal.hidden = true;

    }


    expenseToDeleteId =
        null;

}


/* =====================================================
   CONFIRM DELETE
   ===================================================== */

document.addEventListener(
    "click",
    async function (event) {

        const button =
            event.target.closest(
                "#confirmExpenseDelete"
            );


        if (!button) {
            return;
        }


        if (!expenseToDeleteId) {
            return;
        }


        const expenseId =
            expenseToDeleteId;


        /* ---------------------------------------------
           BUTTON LOADING
           --------------------------------------------- */

        button.disabled = true;

        button.innerHTML = `

            <i class="fa-solid fa-spinner fa-spin"></i>

            Deleting...

        `;


        try {

            /* -----------------------------------------
               DELETE FROM FIREBASE
               ----------------------------------------- */

            await set(
                ref(
                    database,
                    "expenses/" +
                    expenseId
                ),
                null
            );


            /* -----------------------------------------
               CLOSE MODAL
               ----------------------------------------- */

            closeExpenseDeleteModal();


            /* -----------------------------------------
               RELOAD EXPENSE HISTORY
               ----------------------------------------- */

            await loadExpenseHistory();


            /* -----------------------------------------
               SUCCESS MESSAGE
               ----------------------------------------- */

            showExpenseMessage(
                "Expense deleted successfully.",
                "success"
            );


        } catch (error) {

            console.error(
                "Delete Expense Error:",
                error
            );


            closeExpenseDeleteModal();


            showExpenseMessage(
                "Unable to delete expense. " +
                error.message,
                "error"
            );


        } finally {

            button.disabled = false;

            button.innerHTML = `

                <i class="fa-solid fa-trash-can"></i>

                Delete Expense

            `;

        }

    }
);


/* =====================================================
   ESC KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        const modal =
            document.getElementById(
                "expenseDeleteModal"
            );


        if (
            modal &&
            !modal.hidden
        ) {

            closeExpenseDeleteModal();

        }

    }
);
/* =====================================================
   TOTAL TRANSACTION HISTORY
   INCOME + EXPENSE
   FIREBASE LOAD + SEARCH + FILTER + DATE
   ===================================================== */

let transactionHistoryData = [];

let currentTransactionType = "All";


/* =====================================================
   LOAD TRANSACTIONS
   ===================================================== */

async function loadTransactionHistory() {

    const tableBody =
        document.getElementById(
            "transactionHistoryTableBody"
        );

    const emptyState =
        document.getElementById(
            "transactionHistoryEmpty"
        );

    if (!tableBody) {
        return;
    }


    try {

        /* ---------------------------------------------
           GET FEES
           --------------------------------------------- */

        const feesSnapshot =
            await get(
                ref(
                    database,
                    "fees"
                )
            );


        /* ---------------------------------------------
           GET EXPENSES
           --------------------------------------------- */

        const expensesSnapshot =
            await get(
                ref(
                    database,
                    "expenses"
                )
            );


        let transactions = [];


        /* =================================================
           INCOME / FEES
           ================================================= */

        if (
            feesSnapshot.exists()
        ) {

            const feesData =
                feesSnapshot.val();


            Object.entries(
                feesData
            ).forEach(
                function ([id, fee]) {

                    transactions.push({

                        id: id,

                        type: "Income",

                        title:
                            fee.studentName ||
                            fee.name ||
                            "Student Fee",

                        category:
                            fee.feeType ||
                            "Fee",

                        amount:
                            Number(
                                fee.amount || 0
                            ),

                        paymentMode:
                            fee.paymentMode ||
                            "—",

                        date:
                            fee.paymentDate ||
                            fee.date ||
                            "",

                        reference:
                            fee.transactionNumber ||
                            fee.referenceNumber ||
                            "—",

                        source: "fees"

                    });

                }
            );

        }


        /* =================================================
           EXPENSE
           ================================================= */

        if (
            expensesSnapshot.exists()
        ) {

            const expensesData =
                expensesSnapshot.val();


            Object.entries(
                expensesData
            ).forEach(
                function ([id, expense]) {

                    transactions.push({

                        id: id,

                        type: "Expense",

                        title:
                            expense.title ||
                            expense.expenseTitle ||
                            "Expense",

                        category:
                            expense.category ||
                            expense.expenseCategory ||
                            "Other",

                        amount:
                            Number(
                                expense.amount || 0
                            ),

                        paymentMode:
                            expense.paymentMode ||
                            expense.expensePaymentMode ||
                            "—",

                        date:
                            expense.date ||
                            expense.expenseDate ||
                            "",

                        reference:
                            expense.transactionNumber ||
                            expense.expenseTransactionNumber ||
                            "—",

                        source: "expenses"

                    });

                }
            );

        }


        /* ---------------------------------------------
           SAVE DATA
           --------------------------------------------- */

        transactionHistoryData =
            transactions;


        /* ---------------------------------------------
           UPDATE SUMMARY
           --------------------------------------------- */

        updateTransactionSummary();


        /* ---------------------------------------------
           RENDER TABLE
           --------------------------------------------- */

        renderTransactionHistory();


    } catch (error) {

        console.error(
            "Transaction History Error:",
            error
        );


        tableBody.innerHTML = "";

        if (emptyState) {

            emptyState.hidden =
                false;

        }

    }

}


/* =====================================================
   UPDATE SUMMARY
   ===================================================== */

function updateTransactionSummary() {

    let totalIncome = 0;

    let totalExpense = 0;


    transactionHistoryData.forEach(
        function (transaction) {

            const amount =
                Number(
                    transaction.amount || 0
                );


            /* ---------------------------------------------
   INCOME
   --------------------------------------------- */

if (
    transaction.type ===
    "Income"
) {
    
    totalIncome += amount;
    
}


/* ---------------------------------------------
   EXPENSE
   --------------------------------------------- */

if (
    transaction.type ===
    "Expense"
) {
    
    totalExpense += amount;
    
}
        }
    );


    const netBalance =
        totalIncome -
        totalExpense;


    const totalRecords =
        transactionHistoryData.length;


    const incomeElement =
        document.getElementById(
            "transactionTotalIncome"
        );


    const expenseElement =
        document.getElementById(
            "transactionTotalExpense"
        );


    const balanceElement =
        document.getElementById(
            "transactionNetBalance"
        );


    const recordsElement =
        document.getElementById(
            "transactionTotalRecords"
        );


    if (incomeElement) {

        incomeElement.textContent =
            totalIncome.toLocaleString(
                "en-IN"
            );

    }


    if (expenseElement) {

        expenseElement.textContent =
            totalExpense.toLocaleString(
                "en-IN"
            );

    }


    if (balanceElement) {

        balanceElement.textContent =
            netBalance.toLocaleString(
                "en-IN"
            );

    }


    if (recordsElement) {

        recordsElement.textContent =
            totalRecords;

    }

}


/* =====================================================
   RENDER TRANSACTION HISTORY
   ===================================================== */

function renderTransactionHistory() {

    const tableBody =
        document.getElementById(
            "transactionHistoryTableBody"
        );


    const emptyState =
        document.getElementById(
            "transactionHistoryEmpty"
        );


    const resultInfo =
        document.getElementById(
            "transactionHistoryResultInfo"
        );


    const searchInput =
        document.getElementById(
            "transactionHistorySearch"
        );


    const dateInput =
        document.getElementById(
            "transactionHistoryDate"
        );


    if (!tableBody) {
        return;
    }


    const searchText =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const selectedDate =
        dateInput
            ? dateInput.value
            : "";


    let filteredTransactions =
        transactionHistoryData.filter(
            function (transaction) {


                /* -----------------------------------------
                   TYPE FILTER
                   ----------------------------------------- */

                if (
                    currentTransactionType !==
                    "All"
                ) {

                    if (
                        transaction.type !==
                        currentTransactionType
                    ) {

                        return false;

                    }

                }


                /* -----------------------------------------
                   DATE FILTER
                   ----------------------------------------- */

                if (
                    selectedDate
                ) {

                    const transactionDate =
                        String(
                            transaction.date ||
                            ""
                        ).slice(
                            0,
                            10
                        );


                    if (
                        transactionDate !==
                        selectedDate
                    ) {

                        return false;

                    }

                }


                /* -----------------------------------------
                   SEARCH
                   ----------------------------------------- */

                if (!searchText) {

                    return true;

                }


                const title =
                    String(
                        transaction.title ||
                        ""
                    ).toLowerCase();


                const category =
                    String(
                        transaction.category ||
                        ""
                    ).toLowerCase();


                const paymentMode =
                    String(
                        transaction.paymentMode ||
                        ""
                    ).toLowerCase();


                const reference =
                    String(
                        transaction.reference ||
                        ""
                    ).toLowerCase();


                return (

                    title.includes(
                        searchText
                    ) ||

                    category.includes(
                        searchText
                    ) ||

                    paymentMode.includes(
                        searchText
                    ) ||

                    reference.includes(
                        searchText
                    )

                );

            }
        );


    /* ---------------------------------------------
       SORT NEWEST FIRST
       --------------------------------------------- */

    filteredTransactions.sort(
        function (a, b) {

            return String(
                b.date || ""
            ).localeCompare(
                String(
                    a.date || ""
                )
            );

        }
    );


    /* ---------------------------------------------
       EMPTY
       --------------------------------------------- */

    if (
        filteredTransactions.length ===
        0
    ) {

        tableBody.innerHTML = "";


        if (emptyState) {

            emptyState.hidden =
                false;

        }


        if (resultInfo) {

            resultInfo.textContent =
                "No transactions found.";

        }

        return;

    }


    if (emptyState) {

        emptyState.hidden =
            true;

    }


    if (resultInfo) {

        resultInfo.textContent =
            `${filteredTransactions.length} transaction${
                filteredTransactions.length === 1
                    ? ""
                    : "s"
            } found`;

    }


    /* ---------------------------------------------
       TABLE
       --------------------------------------------- */

    tableBody.innerHTML =
        filteredTransactions
            .map(
                function (transaction) {


                    const amount =
                        Number(
                            transaction.amount ||
                            0
                        );


                    const isIncome =
                        transaction.type ===
                        "Income";


                    const typeClass =
                        isIncome
                            ? "income"
                            : "expense";


                    const amountClass =
                        isIncome
                            ? "transaction-income-amount"
                            : "transaction-expense-amount";


                    const amountSign =
                        isIncome
                            ? "+"
                            : "-";


                    return `

                        <tr>


                            <!-- TYPE -->

                            <td>

                                <span
                                    class="transaction-type-badge ${typeClass}"
                                >

                                    ${
                                        isIncome
                                            ? '<i class="fa-solid fa-arrow-trend-up"></i>'
                                            : '<i class="fa-solid fa-arrow-trend-down"></i>'
                                    }

                                    ${transaction.type}

                                </span>

                            </td>


                            <!-- TRANSACTION -->

                            <td>

                                <strong>

                                    ${escapeTransactionHTML(
                                        transaction.title
                                    )}

                                </strong>

                            </td>


                            <!-- CATEGORY -->

                            <td>

                                ${escapeTransactionHTML(
                                    transaction.category
                                )}

                            </td>


                            <!-- AMOUNT -->

                            <td>

                                <span
                                    class="${amountClass}"
                                >

                                    ${amountSign} ₹${amount.toLocaleString(
                                        "en-IN"
                                    )}

                                </span>

                            </td>


                            <!-- PAYMENT MODE -->

                            <td>

                                ${escapeTransactionHTML(
                                    transaction.paymentMode
                                )}

                            </td>


                            <!-- DATE -->

                            <td>

                                ${escapeTransactionHTML(
                                    transaction.date
                                )}

                            </td>


                            <!-- REFERENCE -->

                            <td>

                                ${escapeTransactionHTML(
                                    transaction.reference
                                )}

                            </td>


                        </tr>

                    `;

                }
            )
            .join("");

}


/* =====================================================
   HTML ESCAPE
   ===================================================== */

function escapeTransactionHTML(
    value
) {

    return String(
        value ?? ""
    )
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


/* =====================================================
   TRANSACTION TYPE DROPDOWN
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const option =
            event.target.closest(
                "#transactionTypeSelect .premium-option"
            );


        if (!option) {
            return;
        }


        currentTransactionType =
            option.dataset.value ||
            "All";


        const select =
            document.getElementById(
                "transactionTypeSelect"
            );


        const valueElement =
            select
                ? select.querySelector(
                    ".premium-select-value"
                )
                : null;


        if (valueElement) {

            valueElement.innerHTML =
                option.innerHTML;

        }


        if (select) {

            select.classList.remove(
                "open"
            );

        }


        renderTransactionHistory();

    }
);


/* =====================================================
   SEARCH
   ===================================================== */

document.addEventListener(
    "input",
    function (event) {

        if (
            event.target.id !==
            "transactionHistorySearch"
        ) {

            return;

        }


        renderTransactionHistory();

    }
);


/* =====================================================
   DATE FILTER
   ===================================================== */

document.addEventListener(
    "change",
    function (event) {

        if (
            event.target.id !==
            "transactionHistoryDate"
        ) {

            return;

        }


        renderTransactionHistory();

    }
);


/* =====================================================
   CLOSE TRANSACTION DROPDOWN
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const select =
            document.getElementById(
                "transactionTypeSelect"
            );


        if (!select) {
            return;
        }


        if (
            !select.contains(
                event.target
            )
        ) {

            select.classList.remove(
                "open"
            );

        }

    }
);


/* =====================================================
   LOAD WHEN DOM READY
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTransactionHistory();

    }
);

/* =====================================================
   QUICK ACCESS NAVIGATION
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const card =
            event.target.closest(
                ".quick-access-card"
            );

        if (!card) {
            return;
        }


        const targetId =
            card.dataset.target;


        if (!targetId) {
            return;
        }


        const target =
            document.getElementById(
                targetId
            );


        if (!target) {
            console.warn(
                "Quick Access target not found:",
                targetId
            );

            return;
        }


        /* ---------------------------------------------
           HEADER OFFSET
           --------------------------------------------- */

        const header =
            document.querySelector(
                ".admin-navbar, .admin-header, header"
            );


        const headerHeight =
            header
                ? header.offsetHeight
                : 0;


        const extraGap = 18;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            extraGap;


        /* ---------------------------------------------
           SMOOTH SCROLL
           --------------------------------------------- */

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });


        /* ---------------------------------------------
           ACTIVE EFFECT
           --------------------------------------------- */

        target.classList.add(
            "quick-access-target-highlight"
        );


        setTimeout(
            function () {

                target.classList.remove(
                    "quick-access-target-highlight"
                );

            },
            1200
        );

    }
);

/* =====================================================
   FINANCIAL REPORTS
   DIRECT FIREBASE REPORT
   ===================================================== */


/* =====================================================
   INITIALIZE FINANCIAL REPORTS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeFinancialReports();

    }
);


/* =====================================================
   INITIALIZE
   ===================================================== */

function initializeFinancialReports() {

    const generateButton =
        document.getElementById(
            "generateFinancialReport"
        );


    if (!generateButton) {
        return;
    }


    const startDate =
        document.getElementById(
            "financialReportStartDate"
        );


    const endDate =
        document.getElementById(
            "financialReportEndDate"
        );


    /* ---------------------------------------------
       DEFAULT DATE RANGE
       CURRENT MONTH
       --------------------------------------------- */

    const today =
        new Date();


    const todayString =
        formatFinancialReportDate(
            today
        );


    const firstDay =
        new Date(
            today.getFullYear(),
            today.getMonth(),
            1
        );


    if (
        startDate &&
        !startDate.value
    ) {

        startDate.value =
            formatFinancialReportDate(
                firstDay
            );

    }


    if (
        endDate &&
        !endDate.value
    ) {

        endDate.value =
            todayString;

    }


    /* ---------------------------------------------
       GENERATE REPORT
       --------------------------------------------- */

    generateButton.addEventListener(
        "click",
        function () {

            generateFinancialReport();

        }
    );

}


/* =====================================================
   GENERATE FINANCIAL REPORT
   ===================================================== */

async function generateFinancialReport() {

    const startDateElement =
        document.getElementById(
            "financialReportStartDate"
        );


    const endDateElement =
        document.getElementById(
            "financialReportEndDate"
        );


    const generateButton =
        document.getElementById(
            "generateFinancialReport"
        );


    if (
        !startDateElement ||
        !endDateElement
    ) {

        return;

    }


    const startDate =
        startDateElement.value;


    const endDate =
        endDateElement.value;


    /* ---------------------------------------------
       VALIDATION
       --------------------------------------------- */

    if (
        !startDate ||
        !endDate
    ) {

        updateFinancialReportStatus(
            "Please select both start date and end date.",
            "error"
        );

        return;

    }


    if (
        startDate >
        endDate
    ) {

        updateFinancialReportStatus(
            "Start date cannot be greater than end date.",
            "error"
        );

        return;

    }


    /* ---------------------------------------------
       BUTTON LOADING
       --------------------------------------------- */

    if (generateButton) {

        generateButton.disabled =
            true;


        generateButton.innerHTML = `

            <i class="fa-solid fa-spinner fa-spin"></i>

            <span>
                Generating...
            </span>

        `;

    }


    try {

        /* =========================================
           FIREBASE — FEES
           ========================================= */

        const feesSnapshot =
            await get(
                ref(
                    database,
                    "fees"
                )
            );


        /* =========================================
           FIREBASE — EXPENSES
           ========================================= */

        const expensesSnapshot =
            await get(
                ref(
                    database,
                    "expenses"
                )
            );


        /* =========================================
           REPORT VARIABLES
           ========================================= */

        let totalIncome = 0;

        let totalExpense = 0;

        let totalTransactions = 0;


        let cashAmount = 0;

        let onlineAmount = 0;

        let bankAmount = 0;


        /* =========================================
           PROCESS INCOME / FEES
           ========================================= */

        if (
            feesSnapshot.exists()
        ) {

            const feesData =
                feesSnapshot.val();


            Object.entries(
                feesData
            ).forEach(
                function ([id, fee]) {

                    if (!fee) {
                        return;
                    }


                    /* -----------------------------
                       INCOME DATE
                       ----------------------------- */

                    const paymentDate =
                        String(
                            fee.paymentDate ||
                            fee.date ||
                            ""
                        ).slice(
                            0,
                            10
                        );


                    if (
                        !paymentDate
                    ) {

                        return;

                    }


                    /* -----------------------------
                       DATE RANGE
                       ----------------------------- */

                    if (
                        paymentDate <
                        startDate ||
                        paymentDate >
                        endDate
                    ) {

                        return;

                    }


                    /* -----------------------------
                       AMOUNT
                       ----------------------------- */

                    const amount =
                        Number(
                            fee.amount || 0
                        );


                    totalIncome +=
                        amount;


                    totalTransactions++;


                    /* -----------------------------
                       PAYMENT MODE
                       ----------------------------- */

                    const paymentMode =
                        String(
                            fee.paymentMode ||
                            ""
                        )
                        .trim()
                        .toLowerCase();


                    if (
                        paymentMode ===
                        "cash"
                    ) {

                        cashAmount +=
                            amount;

                    }
                    else if (
                        paymentMode ===
                        "online"
                    ) {

                        onlineAmount +=
                            amount;

                    }
                    else if (
                        paymentMode ===
                        "bank"
                    ) {

                        bankAmount +=
                            amount;

                    }

                }
            );

        }


        /* =========================================
           PROCESS EXPENSES
           ========================================= */

        if (
            expensesSnapshot.exists()
        ) {

            const expensesData =
                expensesSnapshot.val();


            Object.entries(
                expensesData
            ).forEach(
                function ([id, expense]) {

                    if (!expense) {
                        return;
                    }


                    /* -----------------------------
                       EXPENSE DATE
                       ----------------------------- */

                    const expenseDate =
                        String(
                            expense.expenseDate ||
                            expense.date ||
                            ""
                        ).slice(
                            0,
                            10
                        );


                    if (
                        !expenseDate
                    ) {

                        return;

                    }


                    /* -----------------------------
                       DATE RANGE
                       ----------------------------- */

                    if (
                        expenseDate <
                        startDate ||
                        expenseDate >
                        endDate
                    ) {

                        return;

                    }


                    /* -----------------------------
                       AMOUNT
                       ----------------------------- */

                    const amount =
                        Number(
                            expense.amount || 0
                        );


                    totalExpense +=
                        amount;


                    totalTransactions++;


                    /* -----------------------------
                       PAYMENT MODE
                       ----------------------------- */

                    const paymentMode =
                        String(
                            expense.paymentMode ||
                            expense.expensePaymentMode ||
                            ""
                        )
                        .trim()
                        .toLowerCase();


                    if (
                        paymentMode ===
                        "cash"
                    ) {

                        cashAmount +=
                            amount;

                    }
                    else if (
                        paymentMode ===
                        "online"
                    ) {

                        onlineAmount +=
                            amount;

                    }
                    else if (
                        paymentMode ===
                        "bank"
                    ) {

                        bankAmount +=
                            amount;

                    }

                }
            );

        }


        /* =========================================
           NET BALANCE
           ========================================= */

        const netBalance =
            totalIncome -
            totalExpense;


        /* =========================================
           UPDATE TOTAL INCOME
           ========================================= */

        updateFinancialReportValue(
            "reportTotalIncome",
            totalIncome
        );


        /* =========================================
           UPDATE TOTAL EXPENSE
           ========================================= */

        updateFinancialReportValue(
            "reportTotalExpense",
            totalExpense
        );


        /* =========================================
           UPDATE NET BALANCE
           ========================================= */

        updateFinancialReportValue(
            "reportNetBalance",
            netBalance
        );


        /* =========================================
           UPDATE TRANSACTIONS
           ========================================= */

        updateFinancialReportValue(
            "reportTotalTransactions",
            totalTransactions
        );


        /* =========================================
           PAYMENT MODE
           ========================================= */

        updateFinancialReportValue(
            "reportCashAmount",
            cashAmount
        );


        updateFinancialReportValue(
            "reportOnlineAmount",
            onlineAmount
        );


        updateFinancialReportValue(
            "reportBankAmount",
            bankAmount
        );


        /* =========================================
           SUCCESS STATUS
           ========================================= */

        updateFinancialReportStatus(
            `${totalTransactions} transaction(s) found from ${formatReadableFinancialDate(startDate)} to ${formatReadableFinancialDate(endDate)}.`,
            "success"
        );


        /* =========================================
           DEBUG
           ========================================= */

        console.log(
            "===== FINANCIAL REPORT ====="
        );


        console.log(
            "Start Date:",
            startDate
        );


        console.log(
            "End Date:",
            endDate
        );


        console.log(
            "Total Income:",
            totalIncome
        );


        console.log(
            "Total Expense:",
            totalExpense
        );


        console.log(
            "Net Balance:",
            netBalance
        );


        console.log(
            "Transactions:",
            totalTransactions
        );


        console.log(
            "Cash:",
            cashAmount
        );


        console.log(
            "Online:",
            onlineAmount
        );


        console.log(
            "Bank:",
            bankAmount
        );


    } catch (error) {

        console.error(
            "Financial Reports Error:",
            error
        );


        updateFinancialReportStatus(
            "Unable to generate report: " +
            error.message,
            "error"
        );

    }


    /* ---------------------------------------------
       RESTORE BUTTON
       --------------------------------------------- */

    finally {

        if (generateButton) {

            generateButton.disabled =
                false;


            generateButton.innerHTML = `

                <i class="fa-solid fa-chart-line"></i>

                <span>
                    Generate Report
                </span>

            `;

        }

    }

}


/* =====================================================
   UPDATE REPORT VALUE
   ===================================================== */

function updateFinancialReportValue(
    elementId,
    value
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {

        return;

    }


    element.textContent =
        Number(
            value || 0
        ).toLocaleString(
            "en-IN"
        );

}


/* =====================================================
   FORMAT DATE
   ===================================================== */

function formatFinancialReportDate(
    date
) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}


/* =====================================================
   READABLE DATE
   ===================================================== */

function formatReadableFinancialDate(
    dateString
) {

    const parts =
        String(
            dateString
        ).split(
            "-"
        );


    if (
        parts.length !== 3
    ) {

        return dateString;

    }


    return (
        parts[2] +
        "-" +
        parts[1] +
        "-" +
        parts[0]
    );

}


/* =====================================================
   REPORT STATUS
   ===================================================== */

function updateFinancialReportStatus(
    message,
    type
) {

    const status =
        document.getElementById(
            "financialReportStatus"
        );


    if (!status) {

        return;

    }


    const text =
        status.querySelector(
            "span"
        );


    const icon =
        status.querySelector(
            "i"
        );


    if (text) {

        text.textContent =
            message;

    }


    status.classList.remove(
        "success",
        "error"
    );


    if (type) {

        status.classList.add(
            type
        );

    }


    if (icon) {

        if (
            type ===
            "success"
        ) {

            icon.className =
                "fa-solid fa-circle-check";

        }
        else if (
            type ===
            "error"
        ) {

            icon.className =
                "fa-solid fa-circle-exclamation";

        }
        else {

            icon.className =
                "fa-solid fa-circle-info";

        }

    }

}
/* =====================================================
   STUDENT PAYMENT HISTORY / LEDGER
   FIREBASE
   ===================================================== */

let studentLedgerStudents = [];

let studentLedgerSelectedId = null;


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeStudentPaymentLedger();

    }
);


/* =====================================================
   INITIALIZE LEDGER
   ===================================================== */

function initializeStudentPaymentLedger() {

    const search =
        document.getElementById(
            "studentLedgerSearch"
        );

    if (!search) {
        return;
    }


    /* ---------------------------------------------
       LOAD STUDENTS
       --------------------------------------------- */

    loadStudentLedgerStudents();


    /* ---------------------------------------------
       SEARCH
       --------------------------------------------- */

    search.addEventListener(
        "input",
        function () {

            filterStudentLedgerStudents(
                search.value
            );

        }
    );

}


/* =====================================================
   LOAD STUDENTS
   ===================================================== */

async function loadStudentLedgerStudents() {

    const results =
        document.getElementById(
            "studentLedgerSearchResults"
        );


    if (!results) {
        return;
    }


    results.innerHTML = `

        <div class="student-ledger-loading">

            <i class="fa-solid fa-spinner fa-spin"></i>

            <span>
                Loading students...
            </span>

        </div>

    `;


    try {

        const snapshot =
            await get(
                ref(
                    database,
                    "students"
                )
            );


        studentLedgerStudents = [];


        if (!snapshot.exists()) {

            showStudentLedgerSearchMessage(
                "No students found."
            );

            return;

        }


        const students =
            snapshot.val();


        Object.keys(
            students
        ).forEach(
            function (key) {

                const student =
                    students[key];


                if (!student) {
                    return;
                }


                studentLedgerStudents.push({

                    id:
                        student.studentId ||
                        key,

                    name:
                        student.studentName ||
                        "",

                    fatherName:
                        student.fatherName ||
                        "",

                    rollNumber:
                        student.rollNumber ||
                        "",

                    course:
                        student.course ||
                        "",

                    admissionDate:
                        student.admissionDate ||
                        "",

                    totalFee:
                        Number(
                            student.totalFee || 0
                        ),

                    collectedFee:
                        Number(
                            student.collectedFee || 0
                        ),

                    pendingFee:
                        Number(
                            student.pendingFee || 0
                        ),

                    status:
                        student.status ||
                        "Active"

                });

            }
        );


        studentLedgerStudents.sort(
            function (a, b) {

                return a.name.localeCompare(
                    b.name
                );

            }
        );


        showStudentLedgerSearchMessage(
            "Search by name, roll number or father name."
        );


    } catch (error) {

        console.error(
            "Student Ledger Load Error:",
            error
        );


        showStudentLedgerSearchMessage(
            "Unable to load students."
        );

    }

}


/* =====================================================
   FILTER STUDENTS
   ===================================================== */

function filterStudentLedgerStudents(
    searchText
) {

    const searchValue =
        String(
            searchText || ""
        )
        .trim()
        .toLowerCase();


    if (!searchValue) {

        showStudentLedgerSearchMessage(
            "Search by name, roll number or father name."
        );

        return;

    }


    const filtered =
        studentLedgerStudents.filter(
            function (student) {

                return (

                    String(
                        student.name
                    )
                    .toLowerCase()
                    .includes(
                        searchValue
                    )

                    ||

                    String(
                        student.rollNumber
                    )
                    .toLowerCase()
                    .includes(
                        searchValue
                    )

                    ||

                    String(
                        student.fatherName
                    )
                    .toLowerCase()
                    .includes(
                        searchValue
                    )

                );

            }
        );


    renderStudentLedgerSearchResults(
        filtered
    );

}


/* =====================================================
   RENDER SEARCH RESULTS
   ===================================================== */

function renderStudentLedgerSearchResults(
    students
) {

    const results =
        document.getElementById(
            "studentLedgerSearchResults"
        );


    if (!results) {
        return;
    }


    results.innerHTML = "";


    if (
        !students ||
        students.length === 0
    ) {

        showStudentLedgerSearchMessage(
            "No matching student found."
        );

        return;

    }


    students
        .slice(0, 10)
        .forEach(
            function (student) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "student-ledger-result-item";


                button.dataset.studentId =
                    student.id;


                button.innerHTML = `

                    <div class="student-ledger-result-avatar">

                        <i class="fa-solid fa-user-graduate"></i>

                    </div>


                    <div class="student-ledger-result-info">

                        <strong>
                            ${escapeStudentLedgerHTML(
                                student.name
                            )}
                        </strong>


                        <div class="student-ledger-result-meta">

                            <span>
                                <i class="fa-solid fa-hashtag"></i>
                                ${escapeStudentLedgerHTML(
                                    student.rollNumber
                                )}
                            </span>

                            <span>
                                <i class="fa-solid fa-user"></i>
                                ${escapeStudentLedgerHTML(
                                    student.fatherName
                                )}
                            </span>

                            <span>
                                <i class="fa-solid fa-graduation-cap"></i>
                                ${escapeStudentLedgerHTML(
                                    student.course
                                )}
                            </span>

                        </div>

                    </div>


                    <i class="fa-solid fa-chevron-right student-ledger-result-arrow"></i>

                `;


                results.appendChild(
                    button
                );

            }
        );

}


/* =====================================================
   SELECT STUDENT
   ===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".student-ledger-result-item"
            );


        if (!button) {
            return;
        }


        const studentId =
            button.dataset.studentId;


        if (!studentId) {
            return;
        }


        const student =
            studentLedgerStudents.find(
                function (item) {

                    return item.id ===
                        studentId;

                }
            );


        if (!student) {
            return;
        }


        studentLedgerSelectedId =
            studentId;


        showStudentLedgerProfile(
            student
        );


        loadStudentPaymentHistory(
            student
        );

    }
);


/* =====================================================
   SHOW STUDENT PROFILE
   ===================================================== */

function showStudentLedgerProfile(
    student
) {

    const profile =
        document.getElementById(
            "studentLedgerProfile"
        );


    const summary =
        document.getElementById(
            "studentLedgerSummary"
        );


    const history =
        document.getElementById(
            "studentLedgerHistory"
        );


    if (profile) {
        profile.hidden = false;
    }


    if (summary) {
        summary.hidden = false;
    }


    if (history) {
        history.hidden = false;
    }


    setLedgerText(
        "ledgerStudentName",
        student.name || "—"
    );


    setLedgerText(
        "ledgerStudentRoll",
        student.rollNumber || "—"
    );


    setLedgerText(
        "ledgerStudentCourse",
        student.course || "—"
    );


    setLedgerText(
        "ledgerFatherName",
        student.fatherName || "—"
    );


    setLedgerText(
        "ledgerAdmissionDate",
        student.admissionDate || "—"
    );


    setLedgerText(
        "ledgerTotalFee",
        formatLedgerAmount(
            student.totalFee
        )
    );


    setLedgerText(
        "ledgerSummaryTotal",
        formatLedgerAmount(
            student.totalFee
        )
    );


    setLedgerText(
        "ledgerSummaryPaid",
        formatLedgerAmount(
            student.collectedFee
        )
    );


    setLedgerText(
        "ledgerSummaryPending",
        formatLedgerAmount(
            student.pendingFee
        )
    );


    const status =
        document.getElementById(
            "ledgerStudentStatus"
        );


    if (status) {

        const isActive =
            String(
                student.status || "Active"
            )
            .toLowerCase() ===
            "active";


        status.innerHTML = isActive

            ? `
                <i class="fa-solid fa-circle-check"></i>
                <span>Active</span>
              `

            : `
                <i class="fa-solid fa-circle-xmark"></i>
                <span>
                    ${escapeStudentLedgerHTML(
                        student.status
                    )}
                </span>
              `;

    }

}


/* =====================================================
   LOAD PAYMENT HISTORY
   ===================================================== */

async function loadStudentPaymentHistory(
    student
) {

    const tableBody =
        document.getElementById(
            "studentLedgerTableBody"
        );


    const noPayment =
        document.getElementById(
            "studentLedgerNoPayment"
        );


    const loading =
        document.getElementById(
            "studentLedgerLoading"
        );


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    if (noPayment) {
        noPayment.hidden = true;
    }


    if (loading) {
        loading.hidden = false;
    }


    try {

        const snapshot =
            await get(
                ref(
                    database,
                    "fees"
                )
            );


        let payments = [];


        if (snapshot.exists()) {

            const fees =
                snapshot.val();


            Object.keys(
                fees
            ).forEach(
                function (key) {

                    const fee =
                        fees[key];


                    if (!fee) {
                        return;
                    }


                    const feeStudentId =
                        String(
                            fee.studentId || ""
                        );


                    const selectedStudentId =
                        String(
                            student.id || ""
                        );


                    /*
                       PRIMARY MATCH:
                       studentId
                    */

                    if (
                        feeStudentId ===
                        selectedStudentId
                    ) {

                        payments.push({

                            id:
                                fee.feeId ||
                                key,

                            date:
                                fee.paymentDate ||
                                "",

                            feeType:
                                fee.feeType ||
                                "Fee Payment",

                            amount:
                                Number(
                                    fee.amount || 0
                                ),

                            paymentMode:
                                fee.paymentMode ||
                                "",

                            transactionNumber:
                                fee.transactionNumber ||
                                "",

                            remarks:
                                fee.remarks ||
                                "",

                            createdAt:
                                fee.createdAt ||
                                ""

                        });

                    }

                }
            );

        }


        /*
           SORT:
           NEWEST PAYMENT FIRST
        */

        payments.sort(
            function (a, b) {

                const dateA =
                    new Date(
                        a.date ||
                        a.createdAt ||
                        0
                    );

                const dateB =
                    new Date(
                        b.date ||
                        b.createdAt ||
                        0
                    );


                return dateB - dateA;

            }
        );


        renderStudentPaymentHistory(
            payments
        );


    } catch (error) {

        console.error(
            "Student Payment History Error:",
            error
        );


        tableBody.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="
                        text-align:center;
                        color:#dc2626;
                        padding:25px;
                    "
                >

                    <i class="fa-solid fa-triangle-exclamation"></i>

                    Unable to load payment history.

                </td>

            </tr>

        `;

    } finally {

        if (loading) {
            loading.hidden = true;
        }

    }

}


/* =====================================================
   RENDER PAYMENT HISTORY
   ===================================================== */

function renderStudentPaymentHistory(
    payments
) {

    const tableBody =
        document.getElementById(
            "studentLedgerTableBody"
        );


    const noPayment =
        document.getElementById(
            "studentLedgerNoPayment"
        );


    const count =
        document.getElementById(
            "ledgerHistoryCount"
        );


    const paymentCount =
        payments.length;


    if (count) {

        count.textContent =
            paymentCount +
            (
                paymentCount === 1
                    ? " Payment"
                    : " Payments"
            );

    }


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    if (paymentCount === 0) {

        if (noPayment) {
            noPayment.hidden = false;
        }

        return;

    }


    if (noPayment) {
        noPayment.hidden = true;
    }


    payments.forEach(
        function (payment, index) {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>

                    <strong>
                        ${index + 1}
                    </strong>

                </td>


                <td>

                    <span class="student-ledger-date">

                        <i class="fa-solid fa-calendar-day"></i>

                        ${escapeStudentLedgerHTML(
                            formatLedgerDate(
                                payment.date
                            )
                        )}

                    </span>

                </td>


                <td>

                    ${escapeStudentLedgerHTML(
                        payment.feeType
                    )}

                </td>


                <td class="student-ledger-amount">

                    ₹${formatLedgerAmount(
                        payment.amount
                    )}

                </td>


                <td>

                    <span class="student-ledger-mode">

                        <i class="fa-solid ${getLedgerPaymentIcon(
                            payment.paymentMode
                        )}"></i>

                        ${escapeStudentLedgerHTML(
                            payment.paymentMode ||
                            "—"
                        )}

                    </span>

                </td>


                <td>

                    ${escapeStudentLedgerHTML(
                        payment.transactionNumber ||
                        "—"
                    )}

                </td>


                <td>

                    ${escapeStudentLedgerHTML(
                        payment.remarks ||
                        "—"
                    )}

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );

}


/* =====================================================
   SEARCH MESSAGE
   ===================================================== */
function showStudentLedgerSearchMessage(
    message
) {

    const results =
        document.getElementById(
            "studentLedgerSearchResults"
        );


    if (!results) {
        return;
    }


    results.innerHTML = `

        <div class="student-ledger-search-empty">

            <div class="student-ledger-empty-icon">

                <i class="fa-solid fa-user-graduate"></i>

            </div>

            <div>

                <strong>
                    ${escapeStudentLedgerHTML(
                        message
                    )}
                </strong>

                <span>
                    Enter student name, roll number
                    or father name.
                </span>

            </div>

        </div>

    `;

}


/* =====================================================
   HELPER
   ===================================================== */

function setLedgerText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (element) {

        element.textContent =
            value;

    }

}


/* =====================================================
   FORMAT AMOUNT
   ===================================================== */

function formatLedgerAmount(
    amount
) {

    return Number(
        amount || 0
    )
    .toLocaleString(
        "en-IN"
    );

}


/* =====================================================
   FORMAT DATE
   ===================================================== */

function formatLedgerDate(
    dateValue
) {

    if (!dateValue) {
        return "—";
    }


    const date =
        new Date(
            dateValue
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(
            dateValue
        );

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =====================================================
   PAYMENT ICON
   ===================================================== */

function getLedgerPaymentIcon(
    paymentMode
) {

    const mode =
        String(
            paymentMode || ""
        )
        .toLowerCase();


    if (
        mode === "cash"
    ) {

        return "fa-money-bill";

    }


    if (
        mode === "online"
    ) {

        return "fa-globe";

    }


    if (
        mode === "bank"
    ) {

        return "fa-building-columns";

    }


    return "fa-wallet";

}


/* =====================================================
   HTML SAFETY
   ===================================================== */

function escapeStudentLedgerHTML(
    value
) {

    return String(
        value || ""
    )
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
