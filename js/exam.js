/* =====================================================
   LBS COMPUTER TRAINING INSTITUTE
   ONLINE EXAM SYSTEM
   ===================================================== */


/* =====================================================
   EXAM INSTRUCTIONS POPUP
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const startExamBtn =
        document.getElementById("startExamBtn");

    const examPopup =
        document.getElementById(
            "examInstructionsPopup"
        );

    const closePopup =
        document.getElementById(
            "closeExamInstructions"
        );

    const startExamNowBtn =
        document.getElementById(
            "startExamNowBtn"
        );


    /* =================================================
       OPEN EXAM POPUP
       ================================================= */

    if (startExamBtn && examPopup) {

        startExamBtn.addEventListener(
            "click",
            function () {

                examPopup.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }
        );

    }


    /* =================================================
       CLOSE EXAM POPUP
       ================================================= */

    function closeExamPopup() {

        if (!examPopup) {
            return;
        }

        examPopup.classList.remove("show");

        document.body.style.overflow = "";

    }


    if (closePopup) {

        closePopup.addEventListener(
            "click",
            closeExamPopup
        );

    }


    /* =================================================
       CLICK OUTSIDE POPUP
       ================================================= */

    if (examPopup) {

        examPopup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    examPopup
                ) {

                    closeExamPopup();

                }

            }
        );

    }


    /* =================================================
       START EXAM NOW
       ================================================= */

    if (startExamNowBtn) {

        startExamNowBtn.addEventListener(
            "click",
            function () {

                closeExamPopup();

                startOnlineExam();

            }
        );

    }

});


/* =====================================================
   START ONLINE EXAM
   ===================================================== */

function startOnlineExam() {

/* =================================================
   GET STUDENT SESSION
   ================================================= */

let savedStudent =
    localStorage.getItem(
        "lbsLoggedInStudent"
    );


/*
 * Registration ke baad student
 * lbsExamStudent me saved hota hai.
 */

if (!savedStudent) {

    savedStudent =
        localStorage.getItem(
            "lbsExamStudent"
        );

}


/* =================================================
   SESSION CHECK
   ================================================= */

if (!savedStudent) {

    alert(
        "Student exam session not found.\n\n" +
        "Please register/login again."
    );

    return;

}

    let student;


    try {

        student =
            JSON.parse(savedStudent);

    }

    catch (error) {

        console.error(
            "Student JSON Error:",
            error
        );

        alert(
            "Student information could not be loaded."
        );

        return;

    }


    /* =================================================
       GET COURSE
       ================================================= */

    const course =
        String(
            student.course || ""
        ).toLowerCase();


    /* =================================================
       SELECT QUESTION BANK
       ================================================= */

    let questionBank = [];


    if (
        course.includes("adca")
    ) {

        if (
            typeof ADCA_QUESTIONS !==
            "undefined"
        ) {

            questionBank =
                ADCA_QUESTIONS;

        }

    }


    else if (
        course.includes("ccc")
    ) {

        if (
            typeof CCC_QUESTIONS !==
            "undefined"
        ) {

            questionBank =
                CCC_QUESTIONS;

        }

    }


    else if (
        course.includes("corel")
    ) {

        if (
            typeof COREL_QUESTIONS !==
            "undefined"
        ) {

            questionBank =
                COREL_QUESTIONS;

        }

    }


    else if (
        course.includes("o level") ||
        course.includes("olevel")
    ) {

        if (
            typeof OLEVEL_QUESTIONS !==
            "undefined"
        ) {

            questionBank =
                OLEVEL_QUESTIONS;

        }

    }


    /* =================================================
       QUESTION BANK CHECK
       ================================================= */

    if (
        !Array.isArray(questionBank) ||
        questionBank.length === 0
    ) {

        alert(
            "Question paper is not available for:\n\n" +
            student.course
        );

        return;

    }


    /* =================================================
       RANDOMIZE QUESTIONS
       ================================================= */

    const randomQuestions =
        [...questionBank];


    shuffleArray(
        randomQuestions
    );


    /*
       Maximum 100 questions.
       Agar question bank me 100 se kam
       questions hain to available questions
       hi exam me aayenge.
    */

    const totalQuestions =
        Math.min(
            100,
            randomQuestions.length
        );


    const examQuestions =
        randomQuestions.slice(
            0,
            totalQuestions
        );


    /* =================================================
   CHECK & LOCK EXAM ATTEMPT
   ================================================= */

if (typeof database === "undefined") {

    alert(
        "Exam database is not available.\n\n" +
        "Please try again."
    );

    return;
}


const rollNumber =
    String(
        student.rollNumber || ""
    ).trim();


if (!rollNumber) {

    alert(
        "Roll Number not found.\n\n" +
        "Please login again."
    );

    return;
}


const attemptRef =
    database
        .ref("examAttempts")
        .child(rollNumber);


/* =================================================
   ATOMIC ATTEMPT LOCK
   ================================================= */

attemptRef.transaction(

    function (currentData) {

        /* Already attempted */

        if (currentData !== null) {

            return;

        }


        /* First attempt */

        return {

            rollNumber:
                rollNumber,

            studentName:
                student.name || "",

            course:
                student.course || "",

            status:
                "started",

            startedAt:
                new Date().toISOString(),

            timestamp:
                Date.now()

        };

    },

    function (
        error,
        committed
    ) {

        /* Firebase error */

        if (error) {

            console.error(
                "Exam Attempt Lock Error:",
                error
            );

            alert(
                "Exam start नहीं हो सका.\n\n" +
                "Please try again."
            );

            return;
        }


        /* Already used */

        if (!committed) {

    /* =========================================
       PREMIUM ALREADY ATTEMPTED POPUP
       ========================================= */

    const oldAttemptPopup =
        document.getElementById(
            "examAlreadyAttemptedPopup"
        );

    if (oldAttemptPopup) {
        oldAttemptPopup.remove();
    }


    const attemptPopup =
        document.createElement("div");

    attemptPopup.id =
        "examAlreadyAttemptedPopup";


    attemptPopup.innerHTML = `

        <div class="exam-attempt-overlay">

            <div class="exam-attempt-card">

                <button
                    type="button"
                    class="exam-attempt-close"
                    id="closeAttemptPopup">

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <div class="exam-attempt-icon">

                    <i class="fa-solid fa-shield-check"></i>

                </div>


                <span class="exam-attempt-badge">

                    <i class="fa-solid fa-lock"></i>

                    EXAMINATION STATUS

                </span>


                <h2>
                    Exam Already Attempted
                </h2>


                <p class="exam-attempt-message">

                    This Roll Number has already
                    been used for the examination.

                </p>


                <div class="exam-attempt-roll">

                    <span>
                        ROLL NUMBER
                    </span>

                    <strong>
                        ${escapeHTML(rollNumber)}
                    </strong>

                </div>


                <div class="exam-attempt-info">

                    <i class="fa-solid fa-circle-check"></i>

                    <span>
                        Your previous examination
                        result is safely saved.
                    </span>

                </div>


                <button
                    type="button"
                    id="viewPreviousResultBtn"
                    class="exam-attempt-result-btn">

                    <i class="fa-solid fa-chart-column"></i>

                    View Previous Result

                </button>


                <button
                    type="button"
                    id="closeAttemptPopupBtn"
                    class="exam-attempt-close-btn">

                    Close

                </button>


                <div class="exam-attempt-footer">

                    <i class="fa-solid fa-lock"></i>

                    One Roll Number • One Examination Attempt

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        attemptPopup
    );


    /* =========================================
       PREMIUM POPUP CSS
       ========================================= */

    const attemptStyle =
        document.createElement("style");


    attemptStyle.id =
        "examAttemptPopupStyle";


    attemptStyle.textContent = `

        .exam-attempt-overlay {

            position: fixed;

            inset: 0;

            z-index: 9999999;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(2, 6, 23, .78);

            backdrop-filter:
                blur(12px);

            animation:
                attemptFadeIn .25s ease;

        }


        .exam-attempt-card {

            position: relative;

            width: 100%;

            max-width: 460px;

            padding: 38px 30px 25px;

            border-radius: 26px;

            text-align: center;

            color: #fff;

            background:
                linear-gradient(
                    145deg,
                    #111827,
                    #172554,
                    #111827
                );

            border:
                1px solid
                rgba(255,255,255,.12);

            box-shadow:
                0 30px 100px
                rgba(0,0,0,.55);

            overflow: hidden;

            animation:
                attemptCardIn .35s ease;

        }


        .exam-attempt-card::before {

            content: "";

            position: absolute;

            width: 180px;

            height: 180px;

            top: -90px;

            left: -60px;

            border-radius: 50%;

            background:
                rgba(0,229,255,.12);

            filter:
                blur(5px);

        }


        .exam-attempt-card::after {

            content: "";

            position: absolute;

            width: 150px;

            height: 150px;

            right: -70px;

            bottom: -70px;

            border-radius: 50%;

            background:
                rgba(99,102,241,.14);

            filter:
                blur(5px);

        }


        .exam-attempt-close {

            position: absolute;

            top: 15px;

            right: 15px;

            width: 38px;

            height: 38px;

            border: none;

            border-radius: 50%;

            color: #fff;

            background:
                rgba(255,255,255,.08);

            cursor: pointer;

            z-index: 2;

            transition: .25s;

        }


        .exam-attempt-close:hover {

            transform:
                rotate(90deg)
                scale(1.05);

            background:
                rgba(255,255,255,.16);

        }


        .exam-attempt-icon {

            position: relative;

            z-index: 1;

            width: 78px;

            height: 78px;

            margin:
                0 auto 18px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            font-size: 30px;

            color: #00e5ff;

            background:
                rgba(0,229,255,.10);

            border:
                1px solid
                rgba(0,229,255,.28);

            box-shadow:
                0 0 35px
                rgba(0,229,255,.15);

        }


        .exam-attempt-badge {

            position: relative;

            z-index: 1;

            display: inline-flex;

            align-items: center;

            gap: 7px;

            padding:
                7px 13px;

            border-radius: 30px;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1.2px;

            color: #67e8f9;

            background:
                rgba(0,229,255,.08);

            border:
                1px solid
                rgba(0,229,255,.15);

        }


        .exam-attempt-card h2 {

            position: relative;

            z-index: 1;

            margin:
                17px 0 9px;

            font-size: 27px;

        }


        .exam-attempt-message {

            position: relative;

            z-index: 1;

            margin:
                0 auto 20px;

            max-width: 350px;

            line-height: 1.7;

            font-size: 14px;

            color:
                rgba(255,255,255,.68);

        }


        .exam-attempt-roll {

            position: relative;

            z-index: 1;

            padding:
                14px 16px;

            margin-bottom: 15px;

            border-radius: 14px;

            background:
                rgba(255,255,255,.055);

            border:
                1px solid
                rgba(255,255,255,.10);

        }


        .exam-attempt-roll span {

            display: block;

            margin-bottom: 5px;

            font-size: 10px;

            letter-spacing: 1.5px;

            color:
                rgba(255,255,255,.45);

        }


        .exam-attempt-roll strong {

            font-size: 17px;

            letter-spacing: .5px;

            color: #67e8f9;

        }


        .exam-attempt-info {

            position: relative;

            z-index: 1;

            display: flex;

            align-items: center;

            gap: 9px;

            text-align: left;

            padding:
                12px 14px;

            margin-bottom: 18px;

            border-radius: 12px;

            color: #a7f3d0;

            background:
                rgba(16,185,129,.08);

            border:
                1px solid
                rgba(16,185,129,.15);

            font-size: 12px;

            line-height: 1.5;

        }


        .exam-attempt-info i {

            font-size: 17px;

            flex-shrink: 0;

        }


        .exam-attempt-result-btn {

            position: relative;

            z-index: 1;

            width: 100%;

            min-height: 50px;

            border: none;

            border-radius: 14px;

            cursor: pointer;

            display: inline-flex;

            align-items: center;

            justify-content: center;

            gap: 9px;

            font-size: 14px;

            font-weight: 800;

            color: #06121a;

            background:
                linear-gradient(
                    135deg,
                    #67e8f9,
                    #22d3ee
                );

            box-shadow:
                0 10px 30px
                rgba(34,211,238,.18);

            transition: .25s;

        }


        .exam-attempt-result-btn:hover {

            transform:
                translateY(-2px);

            box-shadow:
                0 14px 35px
                rgba(34,211,238,.28);

        }


        .exam-attempt-close-btn {

            position: relative;

            z-index: 1;

            width: 100%;

            min-height: 44px;

            margin-top: 10px;

            border-radius: 13px;

            cursor: pointer;

            color: rgba(255,255,255,.75);

            background:
                rgba(255,255,255,.06);

            border:
                1px solid
                rgba(255,255,255,.10);

            transition: .25s;

        }


        .exam-attempt-close-btn:hover {

            background:
                rgba(255,255,255,.11);

        }


        .exam-attempt-footer {

            position: relative;

            z-index: 1;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 6px;

            margin-top: 18px;

            font-size: 10px;

            color:
                rgba(255,255,255,.38);

        }


        @keyframes attemptFadeIn {

            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }

        }


        @keyframes attemptCardIn {

            from {

                opacity: 0;

                transform:
                    translateY(20px)
                    scale(.95);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);

            }

        }


        @media (max-width: 600px) {

            .exam-attempt-card {

                padding:
                    34px 19px 23px;

                border-radius: 21px;

            }


            .exam-attempt-card h2 {

                font-size: 23px;

            }

        }

    `;


    document.head.appendChild(
        attemptStyle
    );


    /* =========================================
       CLOSE FUNCTIONS
       ========================================= */

    function closeAttemptPopup() {

        attemptPopup.remove();

    }


    const closeAttempt =
        attemptPopup.querySelector(
            "#closeAttemptPopup"
        );


    const closeAttemptBtn =
        attemptPopup.querySelector(
            "#closeAttemptPopupBtn"
        );


    if (closeAttempt) {

        closeAttempt.addEventListener(
            "click",
            closeAttemptPopup
        );

    }


    if (closeAttemptBtn) {

        closeAttemptBtn.addEventListener(
            "click",
            closeAttemptPopup
        );

    }


    /* =========================================
       VIEW RESULT
       ========================================= */

    const viewResultBtn =
        attemptPopup.querySelector(
            "#viewPreviousResultBtn"
        );


    if (viewResultBtn) {

        viewResultBtn.addEventListener(
            "click",
            function () {

                closeAttemptPopup();


                const existingViewResult =
                    document.getElementById(
                        "viewResultBtn"
                    );


                if (existingViewResult) {

                    existingViewResult.click();

                }

            }
        );

    }


    /* =========================================
       CLICK OUTSIDE
       ========================================= */

    const overlay =
        attemptPopup.querySelector(
            ".exam-attempt-overlay"
        );


    if (overlay) {

        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === overlay
                ) {

                    closeAttemptPopup();

                }

            }
        );

    }


    return;
}


        /* Successfully locked */

        console.log(
            "EXAM ATTEMPT LOCKED:",
            rollNumber
        );


        /* NOW START EXAM */

        createExam(
            student,
            examQuestions
        );

    },

    false

);

}


/* =====================================================
   RANDOM SHUFFLE
   ===================================================== */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

}


/* =====================================================
   CREATE EXAM
   ===================================================== */

function createExam(
    student,
    questions
) {

    /* =================================================
       REMOVE OLD EXAM
       ================================================= */

    const oldExam =
        document.getElementById(
            "lbsOnlineExam"
        );


    if (oldExam) {

        oldExam.remove();

    }


    /* =================================================
       CREATE EXAM CONTAINER
       ================================================= */

    const exam =
        document.createElement(
            "div"
        );


    exam.id =
        "lbsOnlineExam";


    exam.className =
        "lbs-online-exam";


    exam.innerHTML = `

        <div class="lbs-exam-header">

            <div>

                <span class="lbs-exam-tag">

                    <i class="fa-solid fa-graduation-cap"></i>

                    ONLINE EXAM

                </span>


                <h2>

                    ${escapeHTML(
                        student.course ||
                        "Online Examination"
                    )}

                </h2>


                <p>

                    Student:

                    <strong>

                        ${escapeHTML(
                            student.name ||
                            "Student"
                        )}

                    </strong>

                </p>

            </div>


            <div class="lbs-exam-timer">

                <i class="fa-regular fa-clock"></i>

                <span id="examTimer">

                    90:00

                </span>

            </div>

        </div>


        <div class="lbs-exam-progress">

            <span>

                Question

                <strong
                    id="currentQuestionNumber">

                    1

                </strong>

                /

                <strong>

                    ${questions.length}

                </strong>

            </span>


            <span>

                Answered:

                <strong id="answeredCount">

                    0

                </strong>

            </span>

        </div>


        <div
            id="examQuestionArea"
            class="lbs-exam-question-area">

        </div>


        <div class="lbs-exam-navigation">


            <button
                type="button"
                id="previousQuestionBtn"
                class="exam-nav-btn secondary">

                <i class="fa-solid fa-arrow-left"></i>

                Previous

            </button>


            <button
                type="button"
                id="nextQuestionBtn"
                class="exam-nav-btn">

                Next

                <i class="fa-solid fa-arrow-right"></i>

            </button>


            <button
                type="button"
                id="submitExamBtn"
                class="exam-submit-btn">

                <i class="fa-solid fa-paper-plane"></i>

                Submit Exam

            </button>


        </div>

    `;


    document.body.appendChild(
        exam
    );


    document.body.style.overflow =
        "hidden";


    /* =================================================
       EXAM VARIABLES
       ================================================= */

    let currentQuestion = 0;


    const answers =
        new Array(
            questions.length
        ).fill(null);


    let remainingSeconds =
        90 * 60;


    let timerInterval = null;


    let examFinished = false;


    /* =================================================
       GET EXAM ELEMENTS
       ================================================= */

    const questionArea =
        exam.querySelector(
            "#examQuestionArea"
        );


    const currentQuestionNumber =
        exam.querySelector(
            "#currentQuestionNumber"
        );


    const answeredCount =
        exam.querySelector(
            "#answeredCount"
        );


    const previousBtn =
        exam.querySelector(
            "#previousQuestionBtn"
        );


    const nextBtn =
        exam.querySelector(
            "#nextQuestionBtn"
        );


    const submitBtn =
        exam.querySelector(
            "#submitExamBtn"
        );


    const timerElement =
        exam.querySelector(
            "#examTimer"
        );


    /* =================================================
       ANSWER COUNT
       ================================================= */

    function updateAnsweredCount() {

        const count =
            answers.filter(
                function (answer) {

                    return answer !== null;

                }
            ).length;


        answeredCount.textContent =
            count;

    }


    /* =================================================
       SHOW QUESTION
       ================================================= */

    function showQuestion() {

        const question =
            questions[
                currentQuestion
            ];


        if (!question) {

            return;

        }


        currentQuestionNumber.textContent =
            currentQuestion + 1;


        questionArea.innerHTML = `

            <div class="exam-question-card">


                <div class="exam-question-number">

                    Question
                    ${currentQuestion + 1}

                </div>


                <h3>

                    ${escapeHTML(
                        question.question
                    )}

                </h3>


                <div class="exam-options">

                    ${
                        question.options
                            .map(
                                function (
                                    option,
                                    index
                                ) {

                                    const checked =
                                        answers[
                                            currentQuestion
                                        ] === index
                                            ? "checked"
                                            : "";


                                    return `

                                        <label
                                            class="exam-option">

                                            <input
                                                type="radio"
                                                name="examAnswer"
                                                value="${index}"
                                                ${checked}
                                            >


                                            <span
                                                class="option-letter">

                                                ${String.fromCharCode(
                                                    65 + index
                                                )}

                                            </span>


                                            <span>

                                                ${escapeHTML(
                                                    option
                                                )}

                                            </span>

                                        </label>

                                    `;

                                }
                            )
                            .join("")
                    }

                </div>

            </div>

        `;


        /* =================================================
           ANSWER EVENTS
           ================================================= */

        const optionInputs =
            questionArea.querySelectorAll(
                'input[name="examAnswer"]'
            );


        optionInputs.forEach(
            function (input) {

                input.addEventListener(
                    "change",
                    function () {

                        answers[
                            currentQuestion
                        ] =
                            Number(
                                input.value
                            );


                        updateAnsweredCount();

                    }
                );

            }
        );


        /* =================================================
           PREVIOUS BUTTON STATE
           ================================================= */

        previousBtn.disabled =
            currentQuestion === 0;


        /* =================================================
           NEXT BUTTON STATE
           ================================================= */

        if (
            currentQuestion >=
            questions.length - 1
        ) {

            nextBtn.style.display =
                "none";

        }

        else {

            nextBtn.style.display =
                "inline-flex";

        }


        /* =================================================
           SUBMIT ALWAYS AVAILABLE
           ================================================= */

        submitBtn.style.display =
            "inline-flex";

    }


    /* =================================================
       PREVIOUS BUTTON
       ================================================= */

    previousBtn.addEventListener(
        "click",
        function () {

            if (
                currentQuestion > 0 &&
                !examFinished
            ) {

                currentQuestion--;

                showQuestion();

            }

        }
    );


    /* =================================================
       NEXT BUTTON
       ================================================= */

    nextBtn.addEventListener(
        "click",
        function () {

            if (
                currentQuestion <
                questions.length - 1 &&
                !examFinished
            ) {

                currentQuestion++;

                showQuestion();

            }

        }
    );


    /* =================================================
   PREMIUM SUBMIT CONFIRMATION
   ================================================= */

submitBtn.addEventListener(
    "click",
    function () {

        if (examFinished) {
            return;
        }

        const unanswered =
            answers.filter(
                function (answer) {
                    return answer === null;
                }
            ).length;


        /* ALL QUESTIONS ANSWERED */

        if (unanswered === 0) {

            finishExam();

            return;

        }


        /* CREATE PREMIUM POPUP */

        const oldPopup =
            document.getElementById(
                "premiumSubmitPopup"
            );

        if (oldPopup) {
            oldPopup.remove();
        }


        const popup =
            document.createElement("div");

        popup.id =
            "premiumSubmitPopup";


        popup.innerHTML = `

            <div class="premium-submit-overlay">

                <div class="premium-submit-card">

                    <button
                        type="button"
                        class="premium-submit-close"
                        id="premiumSubmitClose">

                        <i class="fa-solid fa-xmark"></i>

                    </button>


                    <div class="premium-submit-icon">

                        <i class="fa-solid fa-triangle-exclamation"></i>

                    </div>


                    <span class="premium-submit-tag">

                        <i class="fa-solid fa-shield-halved"></i>

                        EXAMINATION

                    </span>


                    <h2>
                        Submit Examination?
                    </h2>


                    <p>
                        You have not answered
                        <strong>
                            ${unanswered}
                        </strong>
                        question${unanswered === 1 ? "" : "s"}.
                    </p>


                    <div class="premium-submit-warning">

                        <i class="fa-solid fa-circle-info"></i>

                        <span>
                            Unanswered questions will be
                            marked as incorrect.
                        </span>

                    </div>


                    <div class="premium-submit-actions">

                        <button
                            type="button"
                            id="continueExamBtn"
                            class="premium-continue-btn">

                            <i class="fa-solid fa-arrow-left"></i>

                            Continue Exam

                        </button>


                        <button
                            type="button"
                            id="submitAnywayBtn"
                            class="premium-submit-confirm-btn">

                            <i class="fa-solid fa-paper-plane"></i>

                            Submit Anyway

                        </button>

                    </div>


                    <div class="premium-submit-secure">

                        <i class="fa-solid fa-lock"></i>

                        Your examination data is secure.

                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(
            popup
        );


        /* =================================================
           POPUP STYLING
           ================================================= */

        const style =
            document.createElement("style");


        style.id =
            "premiumSubmitPopupStyle";


        style.textContent = `

            .premium-submit-overlay {

                position: fixed;

                inset: 0;

                z-index: 999999;

                display: flex;

                align-items: center;

                justify-content: center;

                padding: 20px;

                background:
                    rgba(3, 7, 18, 0.78);

                backdrop-filter:
                    blur(10px);

                animation:
                    premiumFadeIn .25s ease;

            }


            .premium-submit-card {

                position: relative;

                width: 100%;

                max-width: 470px;

                padding: 38px 30px 28px;

                border-radius: 24px;

                text-align: center;

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
                    rgba(0,0,0,.45);

                color: #fff;

                animation:
                    premiumPopupIn .3s ease;

            }


            .premium-submit-close {

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


            .premium-submit-close:hover {

                transform: rotate(90deg);

                background:
                    rgba(255,255,255,.16);

            }


            .premium-submit-icon {

                width: 76px;

                height: 76px;

                margin: 0 auto 18px;

                border-radius: 50%;

                display: flex;

                align-items: center;

                justify-content: center;

                font-size: 30px;

                color: #f59e0b;

                background:
                    rgba(245,158,11,.12);

                border:
                    1px solid
                    rgba(245,158,11,.25);

                box-shadow:
                    0 0 35px
                    rgba(245,158,11,.12);

            }


            .premium-submit-tag {

                display: inline-flex;

                align-items: center;

                gap: 7px;

                padding: 7px 13px;

                border-radius: 30px;

                font-size: 11px;

                font-weight: 700;

                letter-spacing: 1px;

                color: #fbbf24;

                background:
                    rgba(245,158,11,.10);

            }


            .premium-submit-card h2 {

                margin:
                    18px 0 10px;

                font-size: 27px;

            }


            .premium-submit-card p {

                margin: 0 auto 20px;

                max-width: 370px;

                line-height: 1.7;

                color:
                    rgba(255,255,255,.72);

                font-size: 15px;

            }


            .premium-submit-card p strong {

                color: #fbbf24;

                font-size: 18px;

            }


            .premium-submit-warning {

                display: flex;

                align-items: center;

                gap: 10px;

                padding: 13px 15px;

                margin-bottom: 22px;

                border-radius: 13px;

                text-align: left;

                color: #fcd34d;

                background:
                    rgba(245,158,11,.08);

                border:
                    1px solid
                    rgba(245,158,11,.15);

                font-size: 13px;

            }


            .premium-submit-warning i {

                font-size: 17px;

                flex-shrink: 0;

            }


            .premium-submit-actions {

                display: flex;

                gap: 12px;

            }


            .premium-submit-actions button {

                flex: 1;

                min-height: 48px;

                border: none;

                border-radius: 13px;

                cursor: pointer;

                font-weight: 700;

                font-size: 14px;

                display: inline-flex;

                align-items: center;

                justify-content: center;

                gap: 8px;

                transition: .25s;

            }


            .premium-continue-btn {

                color: #fff;

                background:
                    rgba(255,255,255,.09);

                border:
                    1px solid
                    rgba(255,255,255,.12) !important;

            }


            .premium-continue-btn:hover {

                transform: translateY(-2px);

                background:
                    rgba(255,255,255,.15);

            }


            .premium-submit-confirm-btn {

                color: #111827;

                background:
                    linear-gradient(
                        135deg,
                        #fbbf24,
                        #f59e0b
                    );

                box-shadow:
                    0 8px 25px
                    rgba(245,158,11,.20);

            }


            .premium-submit-confirm-btn:hover {

                transform: translateY(-2px);

                box-shadow:
                    0 12px 30px
                    rgba(245,158,11,.30);

            }


            .premium-submit-secure {

                margin-top: 18px;

                display: flex;

                align-items: center;

                justify-content: center;

                gap: 7px;

                font-size: 11px;

                color:
                    rgba(255,255,255,.45);

            }


            @keyframes premiumFadeIn {

                from {
                    opacity: 0;
                }

                to {
                    opacity: 1;
                }

            }


            @keyframes premiumPopupIn {

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

                .premium-submit-card {

                    padding:
                        34px 20px 23px;

                    border-radius: 20px;

                }


                .premium-submit-card h2 {

                    font-size: 23px;

                }


                .premium-submit-actions {

                    flex-direction: column;

                }


                .premium-submit-actions button {

                    width: 100%;

                }

            }

        `;


        document.head.appendChild(
            style
        );


        /* =================================================
           POPUP BUTTONS
           ================================================= */

        const closeBtn =
            popup.querySelector(
                "#premiumSubmitClose"
            );

        const continueBtn =
            popup.querySelector(
                "#continueExamBtn"
            );

        const submitAnywayBtn =
            popup.querySelector(
                "#submitAnywayBtn"
            );


        function closeSubmitPopup() {

            popup.remove();

        }


        if (closeBtn) {

            closeBtn.addEventListener(
                "click",
                closeSubmitPopup
            );

        }


        if (continueBtn) {

            continueBtn.addEventListener(
                "click",
                closeSubmitPopup
            );

        }


        if (submitAnywayBtn) {

            submitAnywayBtn.addEventListener(
                "click",
                function () {

                    closeSubmitPopup();

                    finishExam();

                }
            );

        }


        /* CLICK OUTSIDE */

        const overlay =
            popup.querySelector(
                ".premium-submit-overlay"
            );


        if (overlay) {

            overlay.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target === overlay
                    ) {

                        closeSubmitPopup();

                    }

                }
            );

        }

    }
);

    /* =================================================
       TIMER
       ================================================= */

    function updateTimer() {

        if (examFinished) {

            return;

        }


        const minutes =
            Math.floor(
                remainingSeconds / 60
            );


        const seconds =
            remainingSeconds % 60;


        timerElement.textContent =
            String(
                minutes
            ).padStart(
                2,
                "0"
            )
            +
            ":"
            +
            String(
                seconds
            ).padStart(
                2,
                "0"
            );


        if (
            remainingSeconds <= 0
        ) {

            clearInterval(
                timerInterval
            );


            finishExam();

            return;

        }


        remainingSeconds--;

    }


    /* =================================================
       START TIMER
       ================================================= */

    updateTimer();


    timerInterval =
        setInterval(
            updateTimer,
            1000
        );


    /* =================================================
       FINISH EXAM
       ================================================= */

    function finishExam() {

        if (examFinished) {

            return;

        }


        examFinished = true;


        if (timerInterval) {

            clearInterval(
                timerInterval
            );

            timerInterval =
                null;

        }


        /* =================================================
           CALCULATE RESULT
           ================================================= */

        let correctAnswers =
            0;


        questions.forEach(
            function (
                question,
                index
            ) {

                if (
                    answers[index] ===
                    question.answer
                ) {

                    correctAnswers++;

                }

            }
        );


        const wrongAnswers =
            questions.length -
            correctAnswers;


        const percentage =
            (
                correctAnswers /
                questions.length
            ) * 100;


        const passed =
            percentage >= 33;


        /* =================================================
           SAVE RESULT
           ================================================= */

        localStorage.setItem(

            "lbsLastExamResult",

            JSON.stringify({

                studentName:
                    student.name,

                rollNumber:
                    student.rollNumber,

                course:
                    student.course,

                totalQuestions:
                    questions.length,

                correctAnswers:
                    correctAnswers,

                wrongAnswers:
                    wrongAnswers,

                percentage:
                    percentage.toFixed(
                        2
                    ),

                result:
                    passed
                        ? "PASS"
                        : "FAIL",

                completedAt:
                    new Date()
                        .toLocaleString()

            })

        );
        /* =================================================
           SAVE RESULT TO FIREBASE
           ================================================= */

        if (typeof database !== "undefined") {

            const firebaseResult = {

                studentName:
                    student.name || "Student",

                rollNumber:
                    student.rollNumber || "",

                course:
                    student.course || "",

                totalQuestions:
                    questions.length,

                correctAnswers:
                    correctAnswers,

                wrongAnswers:
                    wrongAnswers,

                percentage:
                    Number(
                        percentage.toFixed(2)
                    ),

                result:
                    passed
                        ? "PASS"
                        : "FAIL",

                completedAt:
                    new Date().toISOString(),

                timestamp:
                    Date.now()

            };


            database
                .ref("examResults")
                .push(firebaseResult)
                .then(function () {

                    console.log(
                        "Exam result saved to Firebase."
                    );

                })
                .catch(function (error) {

                    console.error(
                        "Firebase result save error:",
                        error
                    );

                });

        }

        /* =================================================
           RESULT SCREEN
           ================================================= */

        exam.innerHTML = `

            <div class="exam-result-screen">


                <div class="exam-result-icon">

                    <i class="fa-solid fa-trophy"></i>

                </div>


                <span class="exam-popup-tag">

                    EXAM COMPLETED

                </span>


                <h1>

                    ${
                        passed
                            ? "Congratulations!"
                            : "Exam Completed"
                    }

                </h1>


                <p>

                    ${escapeHTML(
                        student.name ||
                        "Student"
                    )}

                </p>


                <div class="exam-result-card">


                    <div>

                        <span>
                            Score
                        </span>


                        <strong>

                            ${correctAnswers}
                            /
                            ${questions.length}

                        </strong>

                    </div>


                    <div>

                        <span>
                            Percentage
                        </span>


                        <strong>

                            ${percentage.toFixed(
                                2
                            )}%

                        </strong>

                    </div>


                    <div>

                        <span>
                            Result
                        </span>


                        <strong>

                            ${
                                passed
                                    ? "PASS"
                                    : "FAIL"
                            }

                        </strong>

                    </div>


                </div>


                <button
                    type="button"
                    id="closeExamBtn"
                    class="exam-finish-btn">

                    <i class="fa-solid fa-house"></i>

                    Back to Student Portal

                </button>


            </div>

        `;


        /* =================================================
           BACK TO STUDENT PORTAL
           ================================================= */

        const closeExamBtn =
            exam.querySelector(
                "#closeExamBtn"
            );


        if (closeExamBtn) {

            closeExamBtn.addEventListener(
                "click",
                function () {

                    exam.remove();

                    document.body.style.overflow =
                        "";

                }
            );

        }

    }


    /* =================================================
       FIRST QUESTION
       ================================================= */

    showQuestion();

}


/* =====================================================
   HTML ESCAPE
   ===================================================== */

function escapeHTML(
    value
) {

    return String(
        value
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