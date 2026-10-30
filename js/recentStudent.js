import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getDatabase,
    ref,
    get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// =====================================================
// FIREBASE CONFIG
// =====================================================

const firebaseConfig = {
    apiKey: "AIzaSyAU6_mKdAqkrEXFpSxMw7I70G4OD4ItNEQ",
    authDomain: "lbs-computer-admin.firebaseapp.com",
    databaseURL: "https://lbs-computer-admin-default-rtdb.firebaseio.com",
    projectId: "lbs-computer-admin",
    storageBucket: "lbs-computer-admin.firebasestorage.app",
    messagingSenderId: "575598429073",
    appId: "1:575598429073:web:29bf1083378f28e6405030"
};


// =====================================================
// FIREBASE
// =====================================================

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// =====================================================
// LOAD AFTER HTML IS READY
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    loadRecentStudents();

});


// =====================================================
// LOAD RECENT STUDENTS
// =====================================================

async function loadRecentStudents() {

    const grid = document.getElementById(
        "recentStudentsGrid"
    );


    // Grid nahi mila
    if (!grid) {

        console.error(
            "❌ recentStudentsGrid not found in HTML."
        );

        return;
    }


    try {

        // =================================================
        // FIREBASE REFERENCE
        // =================================================

        const studentsRef = ref(
            database,
            "publicStudents"
        );


        // =================================================
        // GET DATA
        // =================================================

        const snapshot = await get(
            studentsRef
        );


        // =================================================
        // NO DATA
        // =================================================

        if (!snapshot.exists()) {

            grid.innerHTML = `
                <div class="no-students">

                    <i class="fa-solid fa-user-group"></i>

                    <span>
                        No students joined yet.
                    </span>

                </div>
            `;

            return;
        }


        // =================================================
        // FIREBASE DATA
        // =================================================

        const data = snapshot.val();


        // =================================================
        // OBJECT → ARRAY
        // =================================================

        const students = Object.entries(data).map(
            ([id, student]) => ({
                id,
                ...student
            })
        );


        // =================================================
        // NEWEST FIRST
        // =================================================

        students.sort((a, b) => {
    return (
        new Date(b.admissionDate || 0) -
        new Date(a.admissionDate || 0)
    );
});


        // =================================================
        // LATEST 5 ONLY
        // =================================================

        const latestStudents =
            students.slice(0, 5);


        // =================================================
        // CREATE CARDS
        // =================================================

        grid.innerHTML = latestStudents
            .map((student) => {


                // =========================================
                // DATA
                // =========================================

                const name =
                    student.studentName ||
                    "Student";


                const course =
                    student.course ||
                    "Course";


                const gender =
                    student.gender ||
                    "";


                const address =
                    student.address ||
                    "";


                const date = student.admissionDate
    ? new Date(
        student.admissionDate + "T00:00:00"
    ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })
    : "";


                // =========================================
                // CARD
                // =========================================

                return `

                    <div class="recent-student-card">


                        <!-- USER ICON -->

                        <div class="student-avatar">

                            <i class="fa-solid fa-user"></i>

                        </div>


                        <!-- STUDENT INFO -->

                        <div class="student-info">


                            <!-- NAME -->

                            <h3>
                                ${name}
                            </h3>


                            <!-- COURSE -->

                            <p>

                                <i class="fa-solid fa-book"></i>

                                <span>
                                    ${course}
                                </span>

                            </p>


                            <!-- GENDER -->

                            ${
                                gender
                                    ? `
                                        <span class="student-gender">
                                            ${gender}
                                        </span>
                                    `
                                    : ""
                            }


                            <!-- ADDRESS -->

                            ${
                                address
                                    ? `
                                        <div class="student-address">

                                            <i class="fa-solid fa-location-dot"></i>

                                            <span>
                                                ${address}
                                            </span>

                                        </div>
                                    `
                                    : ""
                            }


                            <!-- DATE -->

                            ${
                                date
                                    ? `
                                        <small>

                                            <i class="fa-regular fa-calendar"></i>

                                            <span>
                                                ${date}
                                            </span>

                                        </small>
                                    `
                                    : ""
                            }


                        </div>

                    </div>

                `;

            })
            .join("");


        // =================================================
        // SUCCESS
        // =================================================

        console.log(
            `✅ ${latestStudents.length} recent students loaded.`
        );


    } catch (error) {


        // =================================================
        // ERROR
        // =================================================

        console.error(
            "❌ Firebase Students Error:",
            error
        );


        grid.innerHTML = `

            <div class="students-error">

                <i class="fa-solid fa-triangle-exclamation"></i>

                <span>
                    Unable to load students.
                </span>

            </div>

        `;

    }

}