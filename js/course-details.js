/* =====================================================
   LBS COMPUTER TRAINING INSTITUTE
   COURSE DETAILS JAVASCRIPT
   ===================================================== */


/* =====================================================
   COURSE DATA
   ===================================================== */

const courses = {

   "olevel": {
    title: "O Level",
    description: "A professional computer course designed to develop practical IT, programming and digital skills.",
    icon: "fa-solid fa-certificate",
    duration: "12–15 Months",
    fees: "₹16,000",
    eligibility: "12th Pass",
    mode: "Classroom Training",

    overview: "O Level is a professional computer education program covering computer theory, office productivity, web development, programming and emerging technologies.",

    skills: [
        "Computer Theory",
        "LibreOffice",
        "HTML & CSS",
        "JavaScript",
        "Python Programming",
        "Internet of Things (IoT)"
    ],

    syllabus: [
        "M1 — Computer Theory + LibreOffice",
        "M2 — HTML + CSS + JavaScript",
        "M3 — Python Programming",
        "M4 — Internet of Things (IoT)"
    ]
},

   "adca": {
    title: "ADCA",
    description: "Advanced Diploma in Computer Applications covering computer fundamentals, office applications, designing, web and accounting skills.",
    icon: "fa-solid fa-user-graduate",
    duration: "12 Months",
    fees: "₹8,000",
    eligibility: "9th Pass",
    mode: "Classroom Training",

    overview: "ADCA is designed to provide students with practical knowledge of computer applications, office tools, graphic designing, web development and accounting software.",

    skills: [
        "Computer Fundamentals",
        "MS Office",
        "MS Word",
        "MS PowerPoint",
        "MS Excel",
        "Photoshop",
        "CorelDRAW",
        "HTML",
        "Tally Prime"
    ],

    syllabus: [
        "Computer Fundamentals",
        "MS Paint",
        "Notepad & WordPad",
        "MS Word",
        "MS PowerPoint",
        "MS Excel",
        "Adobe Photoshop",
        "CorelDRAW",
        "HTML & Web Basics",
        "Tally Prime"
    ]
},


    "dca": {
        title: "DCA",
        description: "Diploma in Computer Applications covering essential computer applications and digital skills.",
        icon: "fa-solid fa-desktop",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "To Be Updated",
        mode: "Classroom Training",

        overview: "DCA introduces students to computer applications, office productivity tools and essential digital skills.",

        skills: [
            "Computer Basics",
            "MS Office",
            "Internet",
            "Office Applications",
            "Digital Skills"
        ],

        syllabus: [
            "Computer Fundamentals",
            "MS Word",
            "MS Excel",
            "MS PowerPoint",
            "Internet",
            "Practical Training"
        ]
    },


   "ccc": {
    title: "CCC",
    description: "A basic computer literacy course covering essential computer, internet and digital skills.",
    icon: "fa-solid fa-award",
    duration: "As per Course Schedule",
    fees: "₹3,500",
    eligibility: "Basic Computer Knowledge",
    mode: "Classroom Training",

    overview: "CCC focuses on fundamental computer knowledge, office applications, internet usage and essential digital services.",

    skills: [
        "Computer Fundamentals",
        "Operating System",
        "Word Processing",
        "Internet",
        "Email",
        "Digital Services"
    ],

    syllabus: [
        "Introduction to Computers",
        "Computer Fundamentals",
        "Operating System",
        "Word Processing",
        "Internet & WWW",
        "Email",
        "Digital Financial Services"
    ]
},

    "ms-office": {
        title: "MS Office",
        description: "Learn Word, PowerPoint, Excel and essential office productivity tools.",
        icon: "fa-brands fa-microsoft",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "Basic Computer Knowledge",
        mode: "Classroom Training",

        overview: "MS Office training helps students develop practical skills in commonly used office productivity applications.",

        skills: [
            "MS Word",
            "MS Excel",
            "MS PowerPoint",
            "Document Creation",
            "Office Productivity"
        ],

        syllabus: [
            "MS Word",
            "MS Excel",
            "MS PowerPoint",
            "Document Formatting",
            "Tables & Charts",
            "Practical Office Work"
        ]
    },


   "excel": {
    title: "MS Excel",
    description: "Practical MS Excel training covering spreadsheets, formulas, functions, charts and data management.",
    icon: "fa-solid fa-table-cells-large",
    duration: "As per Course Schedule",
    fees: "₹3,500",
    eligibility: "Basic Computer Knowledge",
    mode: "Classroom Training",

    overview: "MS Excel training helps students develop practical skills for data entry, calculations, formulas, functions, charts and spreadsheet management.",

    skills: [
        "Spreadsheet Management",
        "Data Entry",
        "Formulas",
        "Functions",
        "Charts",
        "Data Management"
    ],

    syllabus: [
        "Excel Interface",
        "Data Entry & Formatting",
        "Basic Formulas",
        "Functions",
        "Charts & Graphs",
        "Data Management",
        "Practical Excel Work"
    ]
},

"tally-prime": {
    title: "Tally Prime",
    description: "Practical accounting training using Tally Prime covering company creation, accounting, inventory and GST basics.",
    icon: "fa-solid fa-calculator",
    duration: "As per Course Schedule",
    fees: "₹4,000",
    eligibility: "Basic Computer Knowledge",
    mode: "Classroom Training",

    overview: "Tally Prime training introduces students to computerized accounting, company management, vouchers, inventory and GST-related accounting concepts.",

    skills: [
        "Tally Prime",
        "Accounting Fundamentals",
        "Company Creation",
        "Ledger & Groups",
        "Voucher Entry",
        "Inventory Management",
        "GST Basics"
    ],

    syllabus: [
        "Introduction to Tally Prime",
        "Company Creation",
        "Accounting Fundamentals",
        "Groups & Ledgers",
        "Voucher Entry",
        "Purchase & Sales",
        "Inventory Management",
        "GST Basics",
        "Practical Accounting"
    ]
},


    "html-css": {
        title: "HTML & CSS",
        description: "Learn website structure, styling and responsive web design fundamentals.",
        icon: "fa-brands fa-html5",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "Basic Computer Knowledge",
        mode: "Classroom Training",

        overview: "HTML and CSS training introduces students to website structure, styling and responsive web design.",

        skills: [
            "HTML",
            "CSS",
            "Website Structure",
            "Web Styling",
            "Responsive Design"
        ],

        syllabus: [
            "HTML Fundamentals",
            "HTML Elements",
            "Links & Images",
            "Forms",
            "CSS Fundamentals",
            "Responsive Web Design"
        ]
    },


    "computer-fundamentals": {
        title: "Computer Fundamentals",
        description: "Understand computer basics, hardware, software and operating systems.",
        icon: "fa-solid fa-keyboard",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "No Previous Experience Required",
        mode: "Classroom Training",

        overview: "This course introduces students to the fundamental concepts of computers, hardware, software and operating systems.",

        skills: [
            "Computer Basics",
            "Hardware Knowledge",
            "Software Knowledge",
            "Operating Systems",
            "Basic Troubleshooting"
        ],

        syllabus: [
            "Introduction to Computers",
            "Computer Hardware",
            "Computer Software",
            "Operating System",
            "Input & Output Devices",
            "Basic Troubleshooting"
        ]
    },


    "internet-digital-skills": {
        title: "Internet & Digital Skills",
        description: "Learn internet usage, online services, email and essential digital skills.",
        icon: "fa-solid fa-globe",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "No Previous Experience Required",
        mode: "Classroom Training",

        overview: "This course develops practical internet and digital skills for everyday online activities.",

        skills: [
            "Internet Browsing",
            "Email",
            "Online Services",
            "Digital Payments",
            "Online Safety"
        ],

        syllabus: [
            "Internet Fundamentals",
            "Web Browsing",
            "Email",
            "Online Services",
            "Digital Payments",
            "Cyber Safety"
        ]
    },


    "data-entry": {
        title: "Data Entry",
        description: "Develop typing, data handling and computer-based office skills.",
        icon: "fa-solid fa-keyboard",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "Basic Computer Knowledge",
        mode: "Classroom Training",

        overview: "Data Entry training focuses on typing, data handling and computer-based office work.",

        skills: [
            "Typing",
            "Data Entry",
            "Data Management",
            "MS Office",
            "Office Work"
        ],

        syllabus: [
            "Typing Practice",
            "Data Entry",
            "MS Word",
            "MS Excel",
            "Data Management",
            "Practical Office Work"
        ]
    },


    "graphic-designing": {
        title: "Graphic Designing",
        description: "Explore digital design concepts and creative computer-based designing skills.",
        icon: "fa-solid fa-pen-nib",
        duration: "To Be Updated",
        fees: "To Be Updated",
        eligibility: "Basic Computer Knowledge",
        mode: "Classroom Training",

        overview: "Graphic Designing introduces students to creative digital design concepts and computer-based designing.",

        skills: [
            "Graphic Design",
            "Digital Creativity",
            "Image Editing",
            "Typography",
            "Design Concepts"
        ],

        syllabus: [
            "Design Fundamentals",
            "Typography",
            "Color Basics",
            "Image Editing",
            "Digital Design",
            "Practical Projects"
        ]
    }

};


/* =====================================================
   GET COURSE FROM URL
   ===================================================== */

const urlParams = new URLSearchParams(window.location.search);

let courseKey = urlParams.get("course");

if (!courseKey || !courses[courseKey]) {
    courseKey = "olevel";
}

const course = courses[courseKey];


/* =====================================================
   FIND HTML ELEMENTS
   ===================================================== */

const courseTitle = document.getElementById("courseTitle");

const courseDescription =
    document.getElementById("courseDescription");

const courseIcon =
    document.getElementById("courseIcon");

const courseDuration =
    document.getElementById("courseDuration");

const courseFees =
    document.getElementById("courseFees");

const courseEligibility =
    document.getElementById("courseEligibility");

const courseMode =
    document.getElementById("courseMode");

const courseOverview =
    document.getElementById("courseOverview");

const courseSkills =
    document.getElementById("courseSkills");

const syllabusList =
    document.getElementById("syllabusList");


/* =====================================================
   SHOW COURSE INFORMATION
   ===================================================== */

if (courseTitle) {
    courseTitle.textContent = course.title;
}

if (courseDescription) {
    courseDescription.textContent = course.description;
}

if (courseIcon) {
    courseIcon.className = course.icon;
}

if (courseDuration) {
    courseDuration.textContent = course.duration;
}

if (courseFees) {
    courseFees.textContent = course.fees;
}

if (courseEligibility) {
    courseEligibility.textContent = course.eligibility;
}

if (courseMode) {
    courseMode.textContent = course.mode;
}

if (courseOverview) {
    courseOverview.textContent = course.overview;
}


/* =====================================================
   SHOW SKILLS
   ===================================================== */

if (courseSkills) {

    courseSkills.innerHTML = "";

    course.skills.forEach(function(skill) {

        const li = document.createElement("li");

        li.innerHTML =
            '<i class="fa-solid fa-check"></i> ' +
            skill;

        courseSkills.appendChild(li);

    });

}


/* =====================================================
   SHOW SYLLABUS
   ===================================================== */

if (syllabusList) {

    syllabusList.innerHTML = "";

    course.syllabus.forEach(function(item, index) {

        const syllabusItem =
            document.createElement("div");

        syllabusItem.className =
            "syllabus-item";

        syllabusItem.innerHTML =

            '<div class="syllabus-item-number">' +
                String(index + 1).padStart(2, "0") +
            '</div>' +

            '<div class="syllabus-item-content">' +

                '<strong>' +
                    item +
                '</strong>' +

                '<span>' +
                    'Course Module' +
                '</span>' +

            '</div>';

        syllabusList.appendChild(
            syllabusItem
        );

    });

}


/* =====================================================
   PAGE TITLE
   ===================================================== */

document.title =
    course.title +
    " | LBS Computer Training Institute";


/* =====================================================
   DARK MODE
   ===================================================== */

const themeToggle =
    document.getElementById("courseThemeToggle");


if (themeToggle) {

    const themeIcon =
        themeToggle.querySelector("i");

    const savedTheme =
        localStorage.getItem("lbs-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        if (themeIcon) {
            themeIcon.className =
                "fa-solid fa-sun";
        }

    }


    themeToggle.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "lbs-theme",
                isDark ? "dark" : "light"
            );


            if (themeIcon) {

                if (isDark) {

                    themeIcon.className =
                        "fa-solid fa-sun";

                } else {

                    themeIcon.className =
                        "fa-solid fa-moon";

                }

            }

        }
    );

}


/* =====================================================
   PREMIUM COURSE PDF DOWNLOAD
   ===================================================== */

async function downloadCoursePDF() {

    const buttonTop =
        document.getElementById("downloadPdfBtn");

    const buttonBottom =
        document.getElementById("downloadPdfBtnBottom");

    try {

        /* Button loading state */

        if (buttonTop) {
            buttonTop.disabled = true;
            buttonTop.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Preparing PDF...';
        }

        if (buttonBottom) {
            buttonBottom.disabled = true;
            buttonBottom.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Preparing PDF...';
        }


        /* Create PDF document area */

        const pdfArea =
            document.createElement("div");

        pdfArea.style.position = "fixed";
        pdfArea.style.left = "-10000px";
        pdfArea.style.top = "0";
        pdfArea.style.width = "800px";
        pdfArea.style.background = "#ffffff";
        pdfArea.style.color = "#172033";
        pdfArea.style.padding = "45px";
        pdfArea.style.fontFamily =
            "Arial, Helvetica, sans-serif";
        pdfArea.style.boxSizing = "border-box";


        /* PDF HTML */

        pdfArea.innerHTML = `

            <div style="
                border: 2px solid #2563eb;
                border-radius: 18px;
                overflow: hidden;
                background: #ffffff;
            ">

                <!-- HEADER -->

                <div style="
                    padding: 25px;
                    background: linear-gradient(
                        135deg,
                        #2563eb,
                        #1d4ed8
                    );
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 18px;
                ">

                    <img
                        src="images/logo.png"
                        style="
                            width: 70px;
                            height: 70px;
                            object-fit: cover;
                            border-radius: 14px;
                            background: white;
                            padding: 4px;
                        "
                    >

                    <div>

                        <div style="
                            font-size: 26px;
                            font-weight: 800;
                        ">
                            LBS
                        </div>

                        <div style="
                            font-size: 16px;
                            font-weight: 600;
                        ">
                            Computer Training Institute
                        </div>

                        <div style="
                            font-size: 11px;
                            margin-top: 6px;
                            opacity: 0.9;
                        ">
                            Shukul Bazar, Amethi – 227811
                        </div>

                    </div>

                </div>


                <!-- COURSE TITLE -->

                <div style="
                    padding: 30px 28px 20px;
                ">

                    <div style="
                        display: inline-block;
                        padding: 7px 13px;
                        border-radius: 30px;
                        background: #eff6ff;
                        color: #2563eb;
                        font-size: 11px;
                        font-weight: 700;
                    ">
                        COURSE DETAILS
                    </div>

                    <h1 style="
                        margin: 14px 0 8px;
                        font-size: 34px;
                        color: #172033;
                    ">
                        ${course.title}
                    </h1>

                    <p style="
                        margin: 0;
                        color: #64748b;
                        font-size: 13px;
                        line-height: 1.7;
                    ">
                        ${course.description}
                    </p>

                </div>


                <!-- INFORMATION -->

                <div style="
                    padding: 10px 28px 25px;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                ">

                    ${createPDFInfoBox(
                        "Duration",
                        course.duration
                    )}

                    ${createPDFInfoBox(
                        "Course Fees",
                        course.fees
                    )}

                    ${createPDFInfoBox(
                        "Eligibility",
                        course.eligibility
                    )}

                    ${createPDFInfoBox(
                        "Learning Mode",
                        course.mode
                    )}

                </div>


                <!-- OVERVIEW -->

                <div style="
                    padding: 10px 28px 25px;
                ">

                    <h2 style="
                        color: #2563eb;
                        font-size: 19px;
                        margin-bottom: 8px;
                    ">
                        Course Overview
                    </h2>

                    <p style="
                        color: #64748b;
                        font-size: 12px;
                        line-height: 1.8;
                    ">
                        ${course.overview}
                    </p>

                </div>


                <!-- SKILLS -->

                <div style="
                    padding: 5px 28px 25px;
                ">

                    <h2 style="
                        color: #2563eb;
                        font-size: 19px;
                        margin-bottom: 12px;
                    ">
                        What You Will Learn
                    </h2>

                    <div style="
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 8px;
                    ">

                        ${course.skills.map(function(skill) {

                            return `
                                <div style="
                                    padding: 9px 12px;
                                    background: #f6f8fc;
                                    border: 1px solid #e6eaf1;
                                    border-radius: 8px;
                                    color: #334155;
                                    font-size: 11px;
                                ">
                                    ✓ ${skill}
                                </div>
                            `;

                        }).join("")}

                    </div>

                </div>


                <!-- SYLLABUS -->

                <div style="
                    padding: 5px 28px 30px;
                ">

                    <h2 style="
                        color: #2563eb;
                        font-size: 19px;
                        margin-bottom: 12px;
                    ">
                        Course Syllabus
                    </h2>

                    ${course.syllabus.map(function(item, index) {

                        return `
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 12px;
                                padding: 10px 12px;
                                margin-bottom: 7px;
                                background: #f6f8fc;
                                border-radius: 8px;
                            ">

                                <div style="
                                    width: 28px;
                                    height: 28px;
                                    min-width: 28px;
                                    border-radius: 7px;
                                    background: #2563eb;
                                    color: white;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 9px;
                                    font-weight: 700;
                                ">
                                    ${String(index + 1).padStart(2, "0")}
                                </div>

                                <span style="
                                    color: #334155;
                                    font-size: 11px;
                                ">
                                    ${item}
                                </span>

                            </div>
                        `;

                    }).join("")}

                </div>


                <!-- FOOTER -->

                <div style="
                    padding: 18px 28px;
                    background: #111827;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    font-size: 10px;
                ">

                    <span>
                        LBS Computer Training Institute
                    </span>

                    <span>
                        Shukul Bazar, Amethi – 227811
                    </span>

                </div>

            </div>

        `;


        document.body.appendChild(pdfArea);


        /* Generate canvas */

        const canvas =
            await html2canvas(
                pdfArea,
                {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: "#ffffff"
                }
            );


        const imageData =
            canvas.toDataURL(
                "image/png"
            );
            


        /* =====================================================
   CREATE PDF — CLEAN PAGE BREAK
   ===================================================== */

const pdf =
    new jsPDF(
        "p",
        "mm",
        "a4"
    );

const pageWidth =
    pdf.internal.pageSize.getWidth();

const pageHeight =
    pdf.internal.pageSize.getHeight();


/*
 * PDF margins
 */

const marginX = 10;
const marginY = 10;

const usableWidth =
    pageWidth - (marginX * 2);

const usableHeight =
    pageHeight - (marginY * 2);


/*
 * Image size
 */

const imageWidth =
    usableWidth;

const imageHeight =
    (canvas.height * imageWidth) /
    canvas.width;


/*
 * First page
 */

let remainingHeight =
    imageHeight;

let sourcePosition = 0;

pdf.addImage(
    imageData,
    "PNG",
    marginX,
    marginY,
    imageWidth,
    imageHeight
);


/*
 * Remaining pages
 */

remainingHeight -= usableHeight;


while (remainingHeight > 0) {

    pdf.addPage();

    sourcePosition =
        remainingHeight - imageHeight + marginY;

    pdf.addImage(
        imageData,
        "PNG",
        marginX,
        sourcePosition,
        imageWidth,
        imageHeight
    );

    remainingHeight -=
        usableHeight;

}


        /* Download */

        const fileName =
            course.title
                .replace(/[^a-z0-9]+/gi, "-")
                .toLowerCase();

        const pdfBlob = pdf.output("blob");

const pdfUrl = URL.createObjectURL(pdfBlob);

const pdfWindow = window.open(pdfUrl, "_blank");

if (!pdfWindow) {
    alert("PDF तैयार है लेकिन browser ने इसे open करने से रोक दिया।");
}


        /* Remove temporary area */

        document.body.removeChild(
            pdfArea
        );


    } catch (error) {

        console.error(
            "PDF Error:",
            error
        );

        alert(
            "PDF generate nahi ho paaya. Please try again."
        );

    }


    /* Restore buttons */

    if (buttonTop) {

        buttonTop.disabled = false;

        buttonTop.innerHTML =
            '<i class="fa-solid fa-file-pdf"></i> Download Details';

    }


    if (buttonBottom) {

        buttonBottom.disabled = false;

        buttonBottom.innerHTML =
            '<i class="fa-solid fa-download"></i> Download PDF';

    }

}


/* =====================================================
   PDF INFORMATION BOX
   ===================================================== */

function createPDFInfoBox(label, value) {

    return `

        <div style="
            padding: 15px;
            background: #f6f8fc;
            border: 1px solid #e6eaf1;
            border-radius: 10px;
        ">

            <div style="
                color: #64748b;
                font-size: 9px;
                margin-bottom: 5px;
            ">
                ${label}
            </div>

            <div style="
                color: #172033;
                font-size: 12px;
                font-weight: 700;
            ">
                ${value}
            </div>

        </div>

    `;

}


/* =====================================================
   PDF DOWNLOAD
   ===================================================== */

async function downloadCoursePDF() {

    const downloadButtons = [
        document.getElementById("downloadPdfBtn"),
        document.getElementById("downloadPdfBtnBottom")
    ];

    downloadButtons.forEach(function(button) {
        if (button) {
            button.disabled = true;
            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Preparing PDF...';
        }
    });


    try {

        const { jsPDF } = window.jspdf;

        /*
         * Create a temporary PDF layout
         */

        const pdfContent = document.createElement("div");

        pdfContent.style.position = "fixed";
        pdfContent.style.left = "-10000px";
        pdfContent.style.top = "0";
        pdfContent.style.width = "794px";
        pdfContent.style.background = "#ffffff";
        pdfContent.style.color = "#172033";
        pdfContent.style.padding = "45px";
        pdfContent.style.fontFamily = "Arial, sans-serif";
        pdfContent.style.boxSizing = "border-box";
        pdfContent.style.zIndex = "-1";


        pdfContent.innerHTML = `

            <div style="
                border-bottom:3px solid #2563eb;
                padding-bottom:20px;
                margin-bottom:30px;
            ">

                <div style="
                    display:flex;
                    align-items:center;
                    gap:15px;
                ">

                    <img
                        src="images/logo.png"
                        style="
                            width:65px;
                            height:65px;
                            object-fit:contain;
                        "
                    >

                    <div>

                        <div style="
                            font-size:28px;
                            font-weight:800;
                            color:#172033;
                        ">
                            LBS
                        </div>

                        <div style="
                            font-size:13px;
                            color:#64748b;
                        ">
                            Computer Training Institute
                        </div>

                    </div>

                </div>

            </div>


            <div style="
                text-align:center;
                margin-bottom:30px;
            ">

                <div style="
                    color:#2563eb;
                    font-size:12px;
                    font-weight:bold;
                    letter-spacing:1px;
                ">
                    COURSE DETAILS
                </div>

                <h1 style="
                    margin:8px 0;
                    font-size:32px;
                    color:#172033;
                ">
                    ${course.title}
                </h1>

                <p style="
                    font-size:13px;
                    line-height:1.7;
                    color:#64748b;
                ">
                    ${course.description}
                </p>

            </div>


            <div style="
                display:grid;
                grid-template-columns:repeat(2,1fr);
                gap:12px;
                margin-bottom:30px;
            ">

                <div style="
                    padding:15px;
                    border:1px solid #e6eaf1;
                    border-radius:12px;
                ">
                    <small style="color:#64748b;">
                        Duration
                    </small>

                    <div style="
                        margin-top:5px;
                        font-weight:bold;
                    ">
                        ${course.duration}
                    </div>
                </div>


                <div style="
                    padding:15px;
                    border:1px solid #e6eaf1;
                    border-radius:12px;
                ">
                    <small style="color:#64748b;">
                        Course Fees
                    </small>

                    <div style="
                        margin-top:5px;
                        font-weight:bold;
                    ">
                        ₹${course.fees}
                    </div>
                </div>


                <div style="
                    padding:15px;
                    border:1px solid #e6eaf1;
                    border-radius:12px;
                ">
                    <small style="color:#64748b;">
                        Eligibility
                    </small>

                    <div style="
                        margin-top:5px;
                        font-weight:bold;
                    ">
                        ${course.eligibility}
                    </div>
                </div>


                <div style="
                    padding:15px;
                    border:1px solid #e6eaf1;
                    border-radius:12px;
                ">
                    <small style="color:#64748b;">
                        Learning Mode
                    </small>

                    <div style="
                        margin-top:5px;
                        font-weight:bold;
                    ">
                        ${course.mode}
                    </div>
                </div>

            </div>


            <h2 style="
                font-size:22px;
                margin-bottom:10px;
                color:#172033;
            ">
                About This Course
            </h2>

            <p style="
                color:#64748b;
                font-size:13px;
                line-height:1.8;
                margin-bottom:30px;
            ">
                ${course.overview}
            </p>


            <h2 style="
                font-size:22px;
                margin-bottom:15px;
                color:#172033;
            ">
                What You Will Learn
            </h2>

            <ul style="
                padding-left:20px;
                color:#475569;
                font-size:13px;
                line-height:2;
            ">

                ${course.skills.map(function(skill) {
                    return `<li>${skill}</li>`;
                }).join("")}

            </ul>


            <h2 style="
                font-size:22px;
                margin-top:30px;
                margin-bottom:15px;
                color:#172033;
            ">
                Course Syllabus
            </h2>


            <div>

                ${course.syllabus.map(function(item, index) {

                    return `

                        <div style="
                            display:flex;
                            align-items:center;
                            gap:12px;
                            padding:12px;
                            margin-bottom:8px;
                            background:#f6f8fc;
                            border:1px solid #e6eaf1;
                            border-radius:9px;
                        ">

                            <div style="
                                width:28px;
                                height:28px;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                background:#2563eb;
                                color:white;
                                border-radius:7px;
                                font-size:10px;
                                font-weight:bold;
                                flex-shrink:0;
                            ">
                                ${String(index + 1).padStart(2,"0")}
                            </div>

                            <div style="
                                font-size:12px;
                                font-weight:bold;
                                color:#172033;
                            ">
                                ${item}
                            </div>

                        </div>

                    `;

                }).join("")}

            </div>


            <div style="
                margin-top:35px;
                padding-top:18px;
                border-top:2px solid #e6eaf1;
                text-align:center;
                color:#64748b;
                font-size:10px;
            ">

                <strong style="color:#172033;">
                    LBS Computer Training Institute
                </strong>

                <br>

                Shukul Bazar, Amethi – 227811

                <br><br>

                © 2026 LBS Computer Training Institute

            </div>

        `;


        document.body.appendChild(pdfContent);


        /*
         * Convert HTML to image
         */

        const canvas = await html2canvas(
            pdfContent,
            {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff"
            }
        );


        const imageData =
            canvas.toDataURL(
                "image/png"
            );


        /*
         * Create PDF
         */

        const pdf =
            new jsPDF(
                "p",
                "mm",
                "a4"
            );


        const pageWidth =
            pdf.internal.pageSize.getWidth();

        const pageHeight =
            pdf.internal.pageSize.getHeight();


        const imageWidth =
            pageWidth - 20;

        const imageHeight =
            (canvas.height * imageWidth) /
            canvas.width;


        let heightLeft =
            imageHeight;

        let position = 10;


        pdf.addImage(
            imageData,
            "PNG",
            10,
            position,
            imageWidth,
            imageHeight
        );


        heightLeft -=
            pageHeight - 20;


        while (heightLeft > 0) {

            position =
                heightLeft - imageHeight + 10;

            pdf.addPage();

            pdf.addImage(
                imageData,
                "PNG",
                10,
                position,
                imageWidth,
                imageHeight
            );

            heightLeft -=
                pageHeight - 20;

        }


        /*
         * Download
         */

        const fileName =
            course.title
                .replace(/[^a-z0-9]/gi, "-")
                .toLowerCase();

        pdf.save(
            "LBS-" + fileName + "-Course-Details.pdf"
        );


        /*
         * Remove temporary content
         */

        document.body.removeChild(
            pdfContent
        );


    } catch (error) {

        console.error(
            "PDF Error:",
            error
        );

        alert(
            "PDF generate nahi ho pa raha. Browser console me error check karein."
        );

    }


    /*
     * Restore buttons
     */

    downloadButtons.forEach(function(button) {

        if (button) {

            button.disabled = false;

            button.innerHTML =
                '<i class="fa-solid fa-download"></i> Download PDF';

        }

    });

}


/* =====================================================
   PDF BUTTON EVENTS
   ===================================================== */

const downloadPdfBtn =
    document.getElementById("downloadPdfBtn");

const downloadPdfBtnBottom =
    document.getElementById("downloadPdfBtnBottom");


if (downloadPdfBtn) {

    downloadPdfBtn.addEventListener(
        "click",
        downloadCoursePDF
    );

}


if (downloadPdfBtnBottom) {

    downloadPdfBtnBottom.addEventListener(
        "click",
        downloadCoursePDF
    );

}

/*Sab working hai bhai*/
