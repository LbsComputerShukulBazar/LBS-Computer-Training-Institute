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

    description: "A professional computer education course designed to develop computer fundamentals, office productivity, web development, Python programming and emerging technology skills.",

    icon: "fa-solid fa-certificate",

    duration: "18 Months",

    fees: "₹18,000",

    eligibility: "12th Pass",

    mode: "Classroom Training",

    overview: "O Level is a professional computer education program covering information technology, computer applications, office productivity, web designing, Python programming, Internet of Things (IoT), networking and digital security. The course combines theoretical knowledge with practical assignments and project-based learning.",

    skills: [
        "Computer Fundamentals and IT Concepts",
        "Operating System Fundamentals",
        "LibreOffice Writer",
        "LibreOffice Calc",
        "LibreOffice Impress",
        "Internet and Email",
        "Computer Networking",
        "Digital Payment Awareness",
        "Cyber Security Fundamentals",
        "HTML5 and CSS3",
        "JavaScript Fundamentals",
        "Python Programming",
        "Python Data Structures",
        "Internet of Things (IoT)",
        "Problem Solving and Logical Thinking",
        "Practical Project Development"
    ],

    syllabus: [

        {
            module: "M1 — Information Technology Tools and Network Basics",

            theory: [
                "Introduction to Computers",
                "Evolution and Generations of Computers",
                "Characteristics and Applications of Computers",
                "Computer Hardware and Software",
                "Input and Output Devices",
                "CPU and Its Components",
                "Computer Memory and Storage Devices",
                "System Software and Application Software",
                "Operating System Fundamentals",
                "File and Folder Management",
                "Introduction to Linux and Ubuntu",
                "Word Processing Concepts",
                "Spreadsheet Concepts",
                "Presentation Software",
                "Internet and World Wide Web",
                "Web Browsers and Search Engines",
                "Email and Online Communication",
                "Computer Networking Fundamentals",
                "LAN, MAN and WAN",
                "Network Devices and Wi-Fi",
                "Digital Financial Services",
                "Cyber Security Fundamentals",
                "Data Privacy and Online Safety"
            ],

            practical: [
                "Identify Computer Hardware Components",
                "Perform Basic Operating System Operations",
                "Create, Copy, Move and Organize Files and Folders",
                "Install and Manage Applications",
                "Create and Format Documents Using LibreOffice Writer",
                "Create Tables, Letters and Resume Documents",
                "Prepare Spreadsheets Using LibreOffice Calc",
                "Use SUM, AVERAGE, MAX, MIN and COUNT Functions",
                "Create Student Marksheets and Fee Records",
                "Prepare Presentations Using LibreOffice Impress",
                "Insert Images, Tables and Charts into Presentations",
                "Browse Websites and Search for Information",
                "Compose Emails and Attach Documents",
                "Understand Basic Network Configuration",
                "Practice Safe Internet and Digital Payment Habits"
            ],

            project: [
                "Prepare a Professional Resume",
                "Create a Student Marksheet",
                "Design a Computer Institute Presentation",
                "Create a Student Admission Form"
            ]
        },

        {
            module: "M2 — Web Designing and Publishing",

            theory: [
                "Introduction to the Internet and World Wide Web",
                "Website, Webpage and Web Application Concepts",
                "Web Browsers and Web Servers",
                "Introduction to HTML5",
                "HTML Document Structure",
                "HTML Elements and Attributes",
                "Headings, Paragraphs and Text Formatting",
                "Links and Navigation",
                "Images and Multimedia",
                "Ordered and Unordered Lists",
                "HTML Tables",
                "HTML Forms and Input Elements",
                "Introduction to CSS3",
                "Inline, Internal and External CSS",
                "CSS Selectors and Properties",
                "Colors, Backgrounds and Typography",
                "CSS Box Model",
                "Margins, Padding and Borders",
                "Display and Positioning",
                "Flexbox and CSS Grid Fundamentals",
                "Responsive Web Design",
                "Media Queries",
                "Introduction to JavaScript",
                "Variables and Data Types",
                "Operators and Expressions",
                "Conditional Statements",
                "Loops and Functions",
                "Arrays and Objects",
                "DOM Manipulation",
                "Events and Event Handling",
                "Form Validation Fundamentals",
                "Website Testing and Publishing"
            ],

            practical: [
                "Create a Basic HTML Webpage",
                "Design Website Headers and Navigation Menus",
                "Insert Images and Hyperlinks",
                "Create Tables and Registration Forms",
                "Apply CSS Colors, Fonts and Backgrounds",
                "Design Layouts Using the CSS Box Model",
                "Create Responsive Pages Using Flexbox and Grid",
                "Build Mobile-Friendly Website Sections",
                "Use JavaScript Variables and Functions",
                "Perform Calculations Using JavaScript",
                "Create Interactive Buttons",
                "Validate Forms Using JavaScript",
                "Manipulate HTML Elements Through the DOM",
                "Test Websites on Different Screen Sizes"
            ],

            project: [
                "Personal Portfolio Website",
                "Computer Training Institute Website",
                "Student Registration Form",
                "Responsive Landing Page"
            ]
        },

        {
            module: "M3 — Programming and Problem Solving Through Python",

            theory: [
                "Introduction to Programming Languages",
                "Introduction to Python",
                "Python Installation and Development Environment",
                "Python Syntax and Indentation",
                "Variables and Constants",
                "Data Types",
                "Keywords and Identifiers",
                "Operators and Expressions",
                "Input and Output Operations",
                "Type Conversion",
                "Conditional Statements",
                "For and While Loops",
                "Break, Continue and Pass",
                "Strings and String Operations",
                "Lists and List Operations",
                "Tuples and Sets",
                "Dictionaries and Dictionary Operations",
                "Functions and Parameters",
                "Return Values and Scope of Variables",
                "Modules and Packages",
                "File Handling",
                "Exception Handling",
                "Introduction to Object-Oriented Programming",
                "Classes and Objects",
                "Constructors and Methods",
                "Inheritance Fundamentals",
                "Debugging and Testing",
                "Problem-Solving Techniques",
                "Basic Algorithms and Flowcharts"
            ],

            practical: [
                "Install and Run Python Programs",
                "Write Programs Using Variables and Data Types",
                "Perform Arithmetic Calculations",
                "Create Programs Using Conditional Statements",
                "Solve Problems Using Loops",
                "Perform String Operations",
                "Create and Manipulate Lists and Dictionaries",
                "Write Reusable Functions",
                "Read and Write Text Files",
                "Handle Common Programming Errors",
                "Create Classes and Objects",
                "Write Programs Using Modules",
                "Develop Menu-Driven Applications",
                "Debug and Test Python Programs"
            ],

            project: [
                "Student Marks Management System",
                "Simple Calculator",
                "Library Record Management Program",
                "Student Attendance Management System",
                "Basic Inventory Management Program"
            ]
        },

        {
            module: "M4 — Internet of Things and Its Applications",

            theory: [
                "Introduction to the Internet of Things",
                "History and Evolution of IoT",
                "Characteristics and Applications of IoT",
                "Basic IoT Architecture",
                "Sensors and Actuators",
                "Microcontrollers and Development Boards",
                "Introduction to Arduino",
                "Introduction to Raspberry Pi",
                "IoT Communication Technologies",
                "Wi-Fi, Bluetooth and RFID Fundamentals",
                "IoT Protocols and Communication",
                "Introduction to Embedded Systems",
                "Data Collection and Processing",
                "Cloud Computing Fundamentals",
                "IoT Data Monitoring",
                "Smart Homes and Smart Cities",
                "Industrial IoT Applications",
                "Healthcare and Agricultural IoT",
                "IoT Security and Privacy",
                "IoT Project Development"
            ],

            practical: [
                "Identify Common Sensors and Actuators",
                "Understand Basic Microcontroller Components",
                "Create Basic Sensor-Based Demonstrations",
                "Read Sensor Values",
                "Understand Digital and Analog Inputs",
                "Control an LED Using a Development Board",
                "Study Basic Temperature Sensor Applications",
                "Understand Basic IoT Communication",
                "Explore Simple Data Monitoring Dashboards",
                "Learn Basic IoT Device Safety"
            ],

            project: [
                "Automatic Street Light Demonstration",
                "Temperature Monitoring System",
                "Smart Irrigation Concept Model",
                "Basic Sensor-Based Monitoring Project"
            ]
        },

        {
            module: "Additional Practical Training",

            topics: [
                "Typing Practice and Keyboard Shortcuts",
                "Office Productivity Exercises",
                "Computer Maintenance Fundamentals",
                "Internet Research Skills",
                "Professional Email Writing",
                "Practical Assignments and Lab Exercises",
                "Project Documentation",
                "Viva Preparation",
                "Revision and Practice Tests"
            ]
        }
    ],

    assessment: [
        "Theory Assessments",
        "Practical Laboratory Tests",
        "Module-Wise Assignments",
        "Programming Exercises",
        "Project Demonstrations",
        "Final Practical Assessment"
    ],

    durationBreakdown: [
        {
            period: "Months 1–4",
            focus: "Computer Fundamentals, Operating Systems and Office Productivity"
        },
        {
            period: "Months 5–8",
            focus: "Internet, Networking, Digital Security and Practical IT Skills"
        },
        {
            period: "Months 9–12",
            focus: "HTML, CSS, JavaScript and Website Development"
        },
        {
            period: "Months 13–15",
            focus: "Python Programming and Application Development"
        },
        {
            period: "Months 16–17",
            focus: "Internet of Things and Sensor-Based Projects"
        },
        {
            period: "Month 18",
            focus: "Revision, Practical Examinations and Final Projects"
        }
    ]
}
   ,

   "adca": {
    title: "ADCA",
    description: "An Advanced Diploma in Computer Applications designed to develop professional computer, office automation, accounting, programming and web development skills.",
    icon: "fa-solid fa-laptop-code",
    duration: "12 Months",
    fees: "₹9,000",
    eligibility: "10th Pass",
    mode: "Classroom Training",

    overview: "The Advanced Diploma in Computer Applications (ADCA) is a comprehensive computer training program covering computer fundamentals, office productivity, internet applications, accounting software, graphic designing, database management and web development. Students gain theoretical knowledge and practical experience through assignments and projects.",

    skills: [
        "Computer Fundamentals",
        "Windows Operating System",
        "LibreOffice and MS Office",
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "Internet and Email",
        "Computer Networking Basics",
        "Hindi and English Typing",
        "Tally Prime",
        "Accounting Fundamentals",
        "GST Fundamentals",
        "HTML5 and CSS3",
        "JavaScript Basics",
        "Python Programming Basics",
        "Database Management",
        "Graphic Designing",
        "Photoshop Fundamentals",
        "CorelDRAW Fundamentals",
        "Computer Maintenance",
        "Cyber Security Awareness",
        "Project Development"
    ],

    syllabus: [

        {
            module: "Module 1 — Computer Fundamentals",

            theory: [
                "Introduction to Computers",
                "History and Generations of Computers",
                "Characteristics and Applications of Computers",
                "Types of Computers",
                "Computer Hardware and Software",
                "Input Devices and Output Devices",
                "Central Processing Unit (CPU)",
                "RAM, ROM and Cache Memory",
                "Primary and Secondary Storage",
                "System Software and Application Software",
                "Operating System Fundamentals",
                "Windows Desktop and Taskbar",
                "Files, Folders and File Extensions",
                "Computer Ports and Peripheral Devices",
                "Computer Maintenance and Troubleshooting",
                "Introduction to Cyber Security"
            ],

            practical: [
                "Identify Computer Components",
                "Start and Shut Down a Computer Correctly",
                "Create and Organize Files and Folders",
                "Use Keyboard Shortcuts",
                "Manage Desktop Icons and Settings",
                "Install and Uninstall Applications",
                "Check Storage Space and System Information",
                "Perform Basic Computer Troubleshooting"
            ],

            project: [
                "Prepare Computer Fundamentals Notes",
                "Create a Computer Hardware Identification Chart"
            ]
        },

        {
            module: "Module 2 — MS Word and Document Processing",

            theory: [
                "Introduction to Word Processing",
                "Creating, Opening and Saving Documents",
                "Text Selection and Editing",
                "Font Formatting and Paragraph Formatting",
                "Alignment, Indentation and Line Spacing",
                "Bullets and Numbering",
                "Page Setup, Margins and Orientation",
                "Headers and Footers",
                "Page Numbers and Page Borders",
                "Tables and Table Formatting",
                "Inserting Pictures and Shapes",
                "Find and Replace",
                "Spelling and Grammar Tools",
                "Mail Merge",
                "Printing and PDF Export"
            ],

            practical: [
                "Create a Professional Resume",
                "Type an Application Letter",
                "Prepare an Official Notice",
                "Create a Student Admission Form",
                "Design a Certificate",
                "Create and Format Tables",
                "Prepare a Multi-Page Document",
                "Perform Mail Merge for Multiple Recipients",
                "Save and Export Documents as PDF"
            ],

            project: [
                "Complete Resume and Job Application Set",
                "Design a Computer Institute Admission Form"
            ]
        },

        {
            module: "Module 3 — MS Excel and Spreadsheet Management",

            theory: [
                "Introduction to Spreadsheets",
                "Workbook, Worksheet, Rows and Columns",
                "Cells, Cell Addresses and Cell Ranges",
                "Entering and Editing Data",
                "Number Formatting and Cell Formatting",
                "Formulas and Operators",
                "Relative and Absolute Cell References",
                "SUM and AVERAGE Functions",
                "MIN, MAX and COUNT Functions",
                "IF Function Fundamentals",
                "Sorting and Filtering Data",
                "Conditional Formatting",
                "Data Validation",
                "Charts and Graphs",
                "Printing and Page Setup",
                "Basic Data Analysis"
            ],

            practical: [
                "Create a Student Marksheet",
                "Calculate Total Marks and Percentages",
                "Prepare a Monthly Salary Sheet",
                "Create an Institute Fee Register",
                "Calculate Discounts and Commissions",
                "Use IF for Pass and Fail Results",
                "Sort and Filter Student Records",
                "Apply Conditional Formatting",
                "Create Charts from Spreadsheet Data",
                "Prepare a Monthly Expense Report"
            ],

            project: [
                "Student Result Management Sheet",
                "Institute Fee Management Spreadsheet",
                "Monthly Income and Expense Report"
            ]
        },

        {
            module: "Module 4 — MS PowerPoint and Presentation Skills",

            theory: [
                "Introduction to Presentation Software",
                "Creating and Managing Slides",
                "Slide Layouts and Themes",
                "Text and Paragraph Formatting",
                "Inserting Images, Shapes and Icons",
                "Tables and Charts",
                "Slide Transitions",
                "Animation Effects",
                "Slide Master Fundamentals",
                "Presentation Design Principles",
                "Running a Slide Show",
                "Printing and Exporting Presentations"
            ],

            practical: [
                "Create a Computer Institute Presentation",
                "Prepare an Educational Presentation",
                "Insert Images and Charts",
                "Apply Themes and Slide Layouts",
                "Add Transitions and Animations",
                "Create a Business Presentation",
                "Export a Presentation as PDF"
            ],

            project: [
                "Computer Awareness Presentation",
                "Institute Introduction Presentation"
            ]
        },

        {
            module: "Module 5 — Internet, Email and Digital Skills",

            theory: [
                "Introduction to the Internet",
                "World Wide Web and Websites",
                "Web Browsers and Search Engines",
                "URLs, Domains and Webpages",
                "Internet Service Providers",
                "Downloading and Uploading Files",
                "Email Structure and Email Services",
                "Inbox, Sent, Drafts and Spam",
                "Compose, Reply and Forward",
                "CC, BCC and Email Attachments",
                "Cloud Storage Fundamentals",
                "Online Forms and Digital Services",
                "Digital Payments and UPI Awareness",
                "Phishing, Fraud and Online Safety",
                "Strong Passwords and Data Privacy"
            ],

            practical: [
                "Search for Information Online",
                "Create and Organize Email Messages",
                "Attach Documents to Emails",
                "Upload and Download Files",
                "Use Cloud Storage",
                "Fill Out Online Forms",
                "Identify Suspicious Emails and Websites",
                "Practice Safe Internet Browsing"
            ],

            project: [
                "Prepare a Professional Email Portfolio",
                "Organize Documents Using Cloud Storage"
            ]
        },

        {
            module: "Module 6 — Hindi and English Typing",

            theory: [
                "Introduction to Keyboard Layouts",
                "Home Row and Finger Placement",
                "Touch Typing Fundamentals",
                "Typing Accuracy and Speed",
                "Common Typing Errors",
                "Keyboard Shortcuts",
                "Unicode Hindi Typing Fundamentals",
                "Document Typing Standards"
            ],

            practical: [
                "Practice English Typing Exercises",
                "Practice Hindi Unicode Typing",
                "Type Paragraphs and Applications",
                "Prepare Official Letters",
                "Practice Numbers and Special Characters",
                "Complete Timed Typing Tests"
            ],

            project: [
                "Prepare a Hindi and English Typing Test Report"
            ]
        },

        {
            module: "Module 7 — Tally Prime and Accounting",

            theory: [
                "Introduction to Accounting",
                "Basic Accounting Principles",
                "Assets, Liabilities, Capital, Income and Expenses",
                "Accounting Equation",
                "Introduction to Debit and Credit",
                "Golden Rules of Accounting",
                "Journal, Ledger and Trial Balance",
                "Introduction to Tally Prime",
                "Company Creation and Configuration",
                "Groups and Ledgers",
                "Voucher Types",
                "Sales and Purchase Transactions",
                "Receipt and Payment Entries",
                "Bank Reconciliation Fundamentals",
                "Inventory Management",
                "GST Fundamentals",
                "Tax Invoice Fundamentals",
                "Financial Reports"
            ],

            practical: [
                "Create a Company in Tally Prime",
                "Configure Basic Company Settings",
                "Create Groups and Ledgers",
                "Enter Payment and Receipt Vouchers",
                "Record Sales and Purchase Transactions",
                "Record Contra and Journal Vouchers",
                "Maintain Basic Inventory Records",
                "Explore GST Configuration",
                "Generate Day Book and Ledger Reports",
                "View Trial Balance and Profit and Loss Reports"
            ],

            project: [
                "Maintain Accounts for a Sample Business",
                "Prepare a Sample Sales and Purchase Register",
                "Generate Basic Financial Reports"
            ]
        },

        {
            module: "Module 8 — Accounting and GST Fundamentals",

            theory: [
                "Introduction to Financial Accounting",
                "Accounting Transactions and Source Documents",
                "Journal Entries",
                "Ledger Posting",
                "Trial Balance",
                "Cash Book and Bank Book",
                "Trading Account Fundamentals",
                "Profit and Loss Account",
                "Balance Sheet Fundamentals",
                "Introduction to GST",
                "CGST, SGST and IGST",
                "GST Invoice Components",
                "Input Tax Credit Fundamentals",
                "GST Records and Reports"
            ],

            practical: [
                "Record Sample Business Transactions",
                "Prepare a Simple Cash Book",
                "Prepare Ledger Accounts",
                "Create a Trial Balance",
                "Prepare Basic Financial Statements",
                "Calculate Sample GST Amounts",
                "Prepare a Sample Tax Invoice",
                "Maintain a Sales and Purchase Register"
            ],

            project: [
                "Prepare Accounts for a Sample Trading Business",
                "Create a Sample GST Invoice and Transaction Register"
            ]
        },

        {
            module: "Module 9 — HTML and CSS Web Designing",

            theory: [
                "Introduction to Website Development",
                "Websites, Webpages and Web Browsers",
                "HTML Document Structure",
                "HTML Elements and Attributes",
                "Headings, Paragraphs and Text Formatting",
                "Links and Images",
                "Lists and Tables",
                "HTML Forms and Input Elements",
                "Introduction to CSS",
                "Inline, Internal and External CSS",
                "CSS Selectors",
                "Colors, Fonts and Backgrounds",
                "Margins, Padding and Borders",
                "CSS Box Model",
                "Flexbox Fundamentals",
                "CSS Grid Fundamentals",
                "Responsive Web Design",
                "Media Queries"
            ],

            practical: [
                "Create a Basic HTML Webpage",
                "Design Navigation Links",
                "Insert Images and Tables",
                "Create a Contact Form",
                "Style Pages Using CSS",
                "Create a Navigation Bar",
                "Design Cards and Content Sections",
                "Build a Responsive Website Layout",
                "Test a Website on Different Screen Sizes"
            ],

            project: [
                "Personal Portfolio Website",
                "Computer Institute Website",
                "Responsive Landing Page"
            ]
        },

        {
            module: "Module 10 — JavaScript and Programming Basics",

            theory: [
                "Introduction to Programming",
                "JavaScript Fundamentals",
                "Variables and Constants",
                "Data Types",
                "Operators and Expressions",
                "Conditional Statements",
                "For and While Loops",
                "Functions and Parameters",
                "Arrays and Objects",
                "DOM Fundamentals",
                "Events and Event Handling",
                "Form Validation",
                "Basic Error Handling",
                "Debugging Fundamentals"
            ],

            practical: [
                "Write Basic JavaScript Programs",
                "Create a Simple Calculator",
                "Validate Form Inputs",
                "Create Interactive Buttons",
                "Display Messages on Webpages",
                "Perform Calculations Using JavaScript",
                "Manipulate HTML Elements",
                "Create a Basic Quiz Application"
            ],

            project: [
                "Interactive Calculator",
                "Student Registration Form Validation",
                "Basic Quiz Application"
            ]
        },

        {
            module: "Module 11 — Python Programming Fundamentals",

            theory: [
                "Introduction to Python",
                "Python Installation and Environment",
                "Variables and Data Types",
                "Input and Output",
                "Operators and Expressions",
                "Conditional Statements",
                "Loops",
                "Strings and String Operations",
                "Lists, Tuples and Sets",
                "Dictionaries",
                "Functions",
                "Modules and Packages",
                "File Handling Fundamentals",
                "Exception Handling Basics",
                "Problem-Solving and Algorithms"
            ],

            practical: [
                "Write Basic Python Programs",
                "Create a Simple Calculator",
                "Calculate Student Results",
                "Use Conditions and Loops",
                "Work with Lists and Dictionaries",
                "Create Reusable Functions",
                "Read and Write Text Files",
                "Solve Basic Programming Problems"
            ],

            project: [
                "Student Marks Management Program",
                "Simple Billing Application",
                "Basic Inventory Management Program"
            ]
        },

        {
            module: "Module 12 — Database Management",

            theory: [
                "Introduction to Databases",
                "Database and DBMS Concepts",
                "Tables, Records and Fields",
                "Data Types",
                "Primary Keys and Foreign Keys",
                "Relationships Between Tables",
                "Database Design Fundamentals",
                "Introduction to SQL",
                "SELECT Statements",
                "INSERT, UPDATE and DELETE",
                "WHERE Conditions",
                "ORDER BY and Sorting",
                "Basic Aggregate Functions",
                "Database Backup Fundamentals"
            ],

            practical: [
                "Create a Sample Database",
                "Design Tables and Fields",
                "Insert and Update Records",
                "Search and Filter Records",
                "Write Basic SQL Queries",
                "Create a Student Record Database",
                "Back Up Sample Database Records"
            ],

            project: [
                "Student Record Management Database",
                "Basic Library Database"
            ]
        },

        {
            module: "Module 13 — Graphic Designing",

            theory: [
                "Introduction to Graphic Design",
                "Principles of Design",
                "Color Theory",
                "Typography Fundamentals",
                "Image Formats and Resolution",
                "Raster and Vector Graphics",
                "Introduction to Image Editing Software",
                "Introduction to Vector Design Software",
                "Layers and Selections",
                "Shapes, Paths and Text",
                "Image Cropping and Resizing",
                "Exporting Images for Web and Print"
            ],

            practical: [
                "Create a Poster",
                "Design a Visiting Card",
                "Create a Certificate",
                "Design a Social Media Post",
                "Edit and Crop Images",
                "Work with Layers and Text",
                "Create a Simple Logo Concept",
                "Export Designs in Suitable Formats"
            ],

            project: [
                "Computer Institute Advertisement Poster",
                "Visiting Card Design",
                "Social Media Promotion Pack"
            ]
        },

        {
            module: "Module 14 — Computer Maintenance and Cyber Safety",

            theory: [
                "Computer Maintenance Fundamentals",
                "Common Hardware Problems",
                "Basic Software Troubleshooting",
                "Operating System Updates",
                "Data Backup and Recovery Concepts",
                "Computer Viruses and Malware",
                "Phishing and Online Scams",
                "Antivirus and Firewall Fundamentals",
                "Password Safety",
                "Personal Data Protection",
                "Safe Use of USB Storage Devices"
            ],

            practical: [
                "Check Basic System Information",
                "Manage Disk Space",
                "Organize Backup Copies of Files",
                "Identify Common Computer Problems",
                "Practice Safe File Downloads",
                "Recognize Suspicious Links",
                "Apply Basic Data Protection Practices"
            ],

            project: [
                "Create a Computer Maintenance Checklist",
                "Prepare a Cyber Safety Awareness Presentation"
            ]
        },

        {
            module: "Module 15 — Final Practical Training and Projects",

            theory: [
                "Project Planning Fundamentals",
                "Problem Identification",
                "Project Documentation",
                "Testing and Error Correction",
                "Presentation and Viva Preparation"
            ],

            practical: [
                "Complete Office Application Exercises",
                "Complete Accounting Practice Exercises",
                "Build a Website",
                "Complete Database Exercises",
                "Prepare Graphic Design Assignments",
                "Practice Final Practical Tests"
            ],

            project: [
                "Integrated Computer Application Project",
                "Business Accounts and Billing Project",
                "Computer Institute Website Project",
                "Final Project Presentation"
            ]
        }
    ],

    assessment: [
        "Module-Wise Theory Tests",
        "Practical Laboratory Assignments",
        "Office Application Exercises",
        "Accounting Practice Tests",
        "Web Designing Assignments",
        "Programming Exercises",
        "Graphic Design Assignments",
        "Final Project and Viva"
    ],

    durationBreakdown: [
        {
            period: "Months 1–2",
            focus: "Computer Fundamentals, Operating Systems and Typing"
        },
        {
            period: "Months 3–4",
            focus: "MS Word, Excel, PowerPoint and Internet Applications"
        },
        {
            period: "Months 5–6",
            focus: "Accounting Fundamentals, Tally Prime and GST Basics"
        },
        {
            period: "Months 7–8",
            focus: "HTML, CSS and Web Designing"
        },
        {
            period: "Month 9",
            focus: "JavaScript and Interactive Webpages"
        },
        {
            period: "Month 10",
            focus: "Python Programming Fundamentals"
        },
        {
            period: "Month 11",
            focus: "Database Management and SQL Basics"
        },
        {
            period: "Month 12",
            focus: "Graphic Designing, Revision and Final Projects"
        }
    ]
},


    "dca": {
    title: "DCA - Diploma in Computer Application",
    description: "Learn computer fundamentals, office applications, internet, database management, and practical computer skills.",
    icon: "💻",
    duration: "6 Months",
    fees: "₹8,000",
    eligibility: "10th Pass",
    mode: "Classroom / Online",

    overview: `
        The Diploma in Computer Application (DCA) is a practical computer
        training course designed to develop essential computer skills.
        Students learn computer fundamentals, Windows, MS Office,
        internet applications, database basics, and professional
        documentation through hands-on practical training.
    `,

    skills: [
        "Computer Fundamentals",
        "Windows Operating System",
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "Internet and Email",
        "Hindi and English Typing",
        "Database Fundamentals",
        "Basic HTML and CSS",
        "Computer Maintenance",
        "Digital Documentation",
        "Practical Project Development"
    ],

    syllabus: [
        {
            module: "Module 1: Computer Fundamentals",
            theory: [
                "Introduction to Computers",
                "History and Generations of Computers",
                "Types of Computers",
                "Characteristics of Computers",
                "Hardware and Software",
                "Input and Output Devices",
                "CPU and Its Components",
                "Primary and Secondary Memory",
                "RAM and ROM",
                "Storage Devices",
                "Number System Basics",
                "Computer Applications"
            ],
            practical: [
                "Identify Computer Components",
                "Identify Input and Output Devices",
                "Understand Keyboard and Mouse Operations",
                "Practice Basic Computer Operations",
                "Explore Storage Devices"
            ],
            project: [
                "Prepare a Computer Components Chart"
            ]
        },

        {
            module: "Module 2: Windows Operating System",
            theory: [
                "Introduction to Operating Systems",
                "Windows Desktop and Start Menu",
                "Taskbar and Desktop Icons",
                "File and Folder Management",
                "Control Panel and Settings",
                "Software Installation Basics",
                "Recycle Bin",
                "Shortcut Keys",
                "Basic System Maintenance"
            ],
            practical: [
                "Create and Rename Folders",
                "Copy, Move and Delete Files",
                "Create Desktop Shortcuts",
                "Use Windows Settings",
                "Install and Uninstall Applications",
                "Manage Files Using File Explorer"
            ],
            project: [
                "Organize Documents into Folders"
            ]
        },

        {
            module: "Module 3: MS Word",
            theory: [
                "Introduction to Word Processing",
                "Creating and Saving Documents",
                "Text Formatting",
                "Paragraph Formatting",
                "Page Layout and Margins",
                "Bullets and Numbering",
                "Tables and Borders",
                "Headers and Footers",
                "Page Numbers",
                "Find and Replace",
                "Mail Merge",
                "Printing Documents"
            ],
            practical: [
                "Create a Professional Letter",
                "Prepare a Resume",
                "Create a Table",
                "Design a Notice",
                "Prepare an Application",
                "Create Certificates",
                "Practice Mail Merge",
                "Print and Export Documents"
            ],
            project: [
                "Create a Professional Resume",
                "Design an Institute Admission Form"
            ]
        },

        {
            module: "Module 4: MS Excel",
            theory: [
                "Introduction to Spreadsheets",
                "Workbook and Worksheet",
                "Rows, Columns and Cells",
                "Cell Formatting",
                "Formulas and Functions",
                "SUM and AVERAGE",
                "MIN and MAX",
                "COUNT and COUNTA",
                "IF Function Basics",
                "Sorting and Filtering",
                "Charts and Graphs",
                "Page Setup and Printing"
            ],
            practical: [
                "Create Student Mark Sheets",
                "Calculate Total and Percentage",
                "Prepare Monthly Expense Sheets",
                "Create Attendance Sheets",
                "Apply Formulas and Functions",
                "Create Charts",
                "Sort and Filter Data"
            ],
            project: [
                "Create a Student Result Sheet",
                "Prepare a Monthly Expense Report"
            ]
        },

        {
            module: "Module 5: MS PowerPoint",
            theory: [
                "Introduction to Presentations",
                "Slides and Slide Layouts",
                "Themes and Templates",
                "Text and Image Formatting",
                "Shapes and SmartArt",
                "Transitions and Animations",
                "Audio and Video Insertion",
                "Slide Show Settings"
            ],
            practical: [
                "Create a New Presentation",
                "Insert Images and Shapes",
                "Apply Themes and Layouts",
                "Add Transitions and Animations",
                "Run a Slide Show"
            ],
            project: [
                "Create an Institute Introduction Presentation"
            ]
        },

        {
            module: "Module 6: Internet and Email",
            theory: [
                "Introduction to the Internet",
                "Web Browsers and Search Engines",
                "Websites and Web Pages",
                "URL and Hyperlinks",
                "Email Account Basics",
                "Sending and Receiving Emails",
                "Attachments and Downloads",
                "Cloud Storage Basics",
                "Online Safety and Cybersecurity"
            ],
            practical: [
                "Search for Information Online",
                "Send and Receive Emails",
                "Attach Documents to Emails",
                "Download and Upload Files",
                "Use Online Forms",
                "Practice Safe Browsing"
            ],
            project: [
                "Prepare and Email a Digital Document"
            ]
        },

        {
            module: "Module 7: Hindi and English Typing",
            theory: [
                "Keyboard Layout and Key Functions",
                "Touch Typing Basics",
                "Typing Accuracy and Speed",
                "Common Typing Errors",
                "Hindi Typing Introduction",
                "Unicode Typing Basics"
            ],
            practical: [
                "English Typing Practice",
                "Hindi Typing Practice",
                "Paragraph Typing Exercises",
                "Typing Accuracy Tests",
                "Document Formatting Practice"
            ],
            project: [
                "Complete a Timed Typing Test"
            ]
        },

        {
            module: "Module 8: Database Fundamentals",
            theory: [
                "Introduction to Databases",
                "Tables, Records and Fields",
                "Database Management Systems",
                "Primary Key Basics",
                "Data Types",
                "Queries and Reports",
                "Introduction to MS Access or Similar Database Software"
            ],
            practical: [
                "Create a Student Database",
                "Enter and Edit Records",
                "Search for Records",
                "Sort Database Information",
                "Prepare a Simple Report"
            ],
            project: [
                "Create a Student Record Management Database"
            ]
        },

        {
            module: "Module 9: Basic Web Designing",
            theory: [
                "Introduction to Websites",
                "Web Browsers and Web Servers",
                "HTML Document Structure",
                "HTML Headings and Paragraphs",
                "Links and Images",
                "Lists and Tables",
                "Introduction to CSS",
                "Colors, Fonts and Backgrounds",
                "Basic Web Page Layout"
            ],
            practical: [
                "Create an HTML Page",
                "Add Images and Hyperlinks",
                "Create Lists and Tables",
                "Apply Basic CSS Styling",
                "Open and Test Web Pages in a Browser"
            ],
            project: [
                "Create a Simple Personal Website"
            ]
        },

        {
            module: "Module 10: Computer Maintenance and Cyber Safety",
            theory: [
                "Introduction to Computer Maintenance",
                "Common Hardware Components",
                "Basic Software Troubleshooting",
                "Antivirus and Security Updates",
                "Password Safety",
                "Data Backup",
                "Phishing and Online Fraud Awareness",
                "Safe Internet Practices"
            ],
            practical: [
                "Check System Information",
                "Organize and Back Up Files",
                "Identify Common Computer Problems",
                "Practice Safe Password Management",
                "Run Basic System Maintenance Tasks"
            ],
            project: [
                "Prepare a Computer Safety and Maintenance Checklist"
            ]
        },

        {
            module: "Module 11: Final Practical Projects",
            theory: [
                "Project Planning",
                "Document Preparation",
                "Spreadsheet Data Management",
                "Presentation Design",
                "Basic Database Management",
                "Project Documentation"
            ],
            practical: [
                "Prepare a Word Document",
                "Create an Excel Report",
                "Design a PowerPoint Presentation",
                "Organize Student Records",
                "Create a Basic HTML Website"
            ],
            project: [
                "Student Management Project",
                "Institute Admission Documentation Project",
                "Monthly Expense and Report Project"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Computer Fundamentals and Windows",
            duration: "1 Month"
        },
        {
            module: "MS Word",
            duration: "3 Weeks"
        },
        {
            module: "MS Excel",
            duration: "3 Weeks"
        },
        {
            module: "MS PowerPoint",
            duration: "2 Weeks"
        },
        {
            module: "Internet, Email and Typing",
            duration: "2 Weeks"
        },
        {
            module: "Database Fundamentals",
            duration: "2 Weeks"
        },
        {
            module: "Basic Web Designing",
            duration: "2 Weeks"
        },
        {
            module: "Computer Maintenance and Final Projects",
            duration: "2 Weeks"
        }
    ],

    assessment: [
        "Theory Examination",
        "Practical Examination",
        "Typing Test",
        "Project Submission",
        "Viva Voce"
    ]
},


   "ccc": {
    title: "CCC - Course on Computer Concepts",
    description: "Learn computer fundamentals, office applications, internet, digital payments, cybersecurity, and essential digital skills.",
    icon: "🖥️",
    duration: "3 Months",
    fees: "₹3,000",
    eligibility: "No formal educational qualification required",
    mode: "Classroom / Online",

    overview: `
        CCC (Course on Computer Concepts) is a basic computer
        literacy course designed to develop essential digital skills.
        Students learn computer fundamentals, office applications,
        internet usage, email, digital financial services,
        cybersecurity, and practical computer operations.
    `,

    skills: [
        "Computer Fundamentals",
        "Operating System Basics",
        "Word Processing",
        "Spreadsheet Applications",
        "Presentation Software",
        "Internet and Email",
        "Digital Financial Services",
        "UPI and Online Payments",
        "Cybersecurity Awareness",
        "Online Government Services",
        "File Management",
        "Practical Computer Skills"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Computer",
            theory: [
                "Introduction to Computers",
                "Characteristics of Computers",
                "Types of Computers",
                "Hardware and Software",
                "Input and Output Devices",
                "CPU and Its Components",
                "Memory and Storage Devices",
                "RAM and ROM",
                "Computer Applications",
                "Basic Computer Terminology"
            ],
            practical: [
                "Identify Computer Components",
                "Practice Keyboard and Mouse Operations",
                "Identify Input and Output Devices",
                "Explore Storage Devices",
                "Perform Basic Computer Operations"
            ],
            project: [
                "Prepare a Computer Components Chart"
            ]
        },

        {
            module: "Module 2: Introduction to Operating System",
            theory: [
                "Meaning and Functions of an Operating System",
                "Types of Operating Systems",
                "Desktop and Taskbar",
                "Start Menu and Application Icons",
                "File and Folder Management",
                "System Settings",
                "Basic System Utilities"
            ],
            practical: [
                "Start and Shut Down a Computer",
                "Create and Rename Folders",
                "Copy, Move and Delete Files",
                "Use Basic System Settings",
                "Create Desktop Shortcuts"
            ],
            project: [
                "Organize Files and Folders"
            ]
        },

        {
            module: "Module 3: Word Processing",
            theory: [
                "Introduction to Word Processing",
                "Creating and Saving Documents",
                "Text Editing and Formatting",
                "Paragraph Formatting",
                "Page Setup and Margins",
                "Bullets and Numbering",
                "Tables and Borders",
                "Headers and Footers",
                "Find and Replace",
                "Printing Documents"
            ],
            practical: [
                "Create a Letter",
                "Prepare an Application",
                "Create a Table",
                "Format a Document",
                "Save and Print Documents"
            ],
            project: [
                "Create a Formal Letter",
                "Prepare a Simple Resume"
            ]
        },

        {
            module: "Module 4: Spreadsheet",
            theory: [
                "Introduction to Spreadsheets",
                "Workbook and Worksheet",
                "Rows, Columns and Cells",
                "Entering and Editing Data",
                "Cell Formatting",
                "Basic Formulas and Functions",
                "SUM and AVERAGE Functions",
                "Sorting and Filtering",
                "Charts and Graphs",
                "Printing Worksheets"
            ],
            practical: [
                "Create a Student Mark Sheet",
                "Calculate Total and Percentage",
                "Use Basic Spreadsheet Formulas",
                "Format Cells",
                "Create a Simple Chart",
                "Sort and Filter Data"
            ],
            project: [
                "Prepare a Student Result Sheet"
            ]
        },

        {
            module: "Module 5: Presentation",
            theory: [
                "Introduction to Presentation Software",
                "Creating and Saving Presentations",
                "Slide Layouts",
                "Themes and Templates",
                "Text and Image Insertion",
                "Shapes and Objects",
                "Transitions and Animations",
                "Slide Show",
                "Printing Slides"
            ],
            practical: [
                "Create a Presentation",
                "Insert Text and Images",
                "Apply Slide Layouts",
                "Use Themes and Transitions",
                "Run a Slide Show"
            ],
            project: [
                "Create a Computer Awareness Presentation"
            ]
        },

        {
            module: "Module 6: Internet and WWW",
            theory: [
                "Introduction to the Internet",
                "World Wide Web",
                "Web Browsers",
                "Search Engines",
                "Websites and Web Pages",
                "URLs and Hyperlinks",
                "Downloading and Uploading Files",
                "Online Information Search",
                "Internet Safety"
            ],
            practical: [
                "Open and Use a Web Browser",
                "Search for Information Online",
                "Visit Websites",
                "Download Documents",
                "Upload Files to Online Services"
            ],
            project: [
                "Collect and Organize Information from the Internet"
            ]
        },

        {
            module: "Module 7: Email and Social Networking",
            theory: [
                "Introduction to Email",
                "Email Address Structure",
                "Creating and Managing Emails",
                "Sending and Receiving Messages",
                "Attachments",
                "CC and BCC",
                "Email Etiquette",
                "Social Networking Basics",
                "Online Communication Safety"
            ],
            practical: [
                "Compose an Email",
                "Send an Email with an Attachment",
                "Reply to and Forward Messages",
                "Manage Email Folders",
                "Identify Suspicious Emails"
            ],
            project: [
                "Compose and Send a Professional Email"
            ]
        },

        {
            module: "Module 8: Digital Financial Services",
            theory: [
                "Introduction to Digital Payments",
                "Electronic Banking Basics",
                "Internet Banking",
                "Mobile Banking",
                "UPI Fundamentals",
                "Debit and Credit Cards",
                "Digital Wallets",
                "AEPS and Other Digital Services",
                "Online Transaction Safety",
                "Common Digital Payment Frauds"
            ],
            practical: [
                "Understand a Digital Payment Process",
                "Identify UPI Payment Details",
                "Learn Safe Online Banking Practices",
                "Recognize Payment Fraud Warning Signs",
                "Understand Digital Transaction Receipts"
            ],
            project: [
                "Prepare a Digital Payment Safety Guide"
            ]
        },

        {
            module: "Module 9: Cybersecurity and Digital Services",
            theory: [
                "Introduction to Cybersecurity",
                "Strong Passwords",
                "Phishing and Online Fraud",
                "Malware and Viruses",
                "Antivirus Basics",
                "Safe Internet Browsing",
                "Personal Data Protection",
                "Digital Identity Awareness",
                "Government Digital Services",
                "Online Forms and Applications"
            ],
            practical: [
                "Create a Strong Password",
                "Identify Suspicious Links",
                "Practice Safe Browsing",
                "Find Official Government Websites",
                "Fill Out a Sample Online Form"
            ],
            project: [
                "Prepare a Cybersecurity Awareness Poster"
            ]
        },

        {
            module: "Module 10: Final Practical and Revision",
            theory: [
                "Revision of Computer Fundamentals",
                "Revision of Operating Systems",
                "Revision of Office Applications",
                "Revision of Internet and Email",
                "Revision of Digital Payments",
                "Revision of Cybersecurity"
            ],
            practical: [
                "Create and Format a Document",
                "Prepare a Spreadsheet",
                "Create a Presentation",
                "Search for Information Online",
                "Compose an Email",
                "Practice File Management"
            ],
            project: [
                "Complete a Basic Computer Skills Project"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Computer Fundamentals",
            duration: "2 Weeks"
        },
        {
            module: "Operating System",
            duration: "1 Week"
        },
        {
            module: "Word Processing",
            duration: "2 Weeks"
        },
        {
            module: "Spreadsheet",
            duration: "2 Weeks"
        },
        {
            module: "Presentation",
            duration: "1 Week"
        },
        {
            module: "Internet and Email",
            duration: "2 Weeks"
        },
        {
            module: "Digital Financial Services",
            duration: "1 Week"
        },
        {
            module: "Cybersecurity and Revision",
            duration: "1 Week"
        }
    ],

    assessment: [
        "Theory Test",
        "Practical Test",
        "Computer Fundamentals Test",
        "Internet and Email Practical",
        "Final Assessment"
    ]
},

   "ms-office": {
    title: "MS Office Course",
    description: "Master MS Word, Excel, PowerPoint, and essential office productivity skills through practical training.",
    icon: "📊",
    duration: "3 Months",
    fees: "₹5,000",
    eligibility: "Basic Computer Knowledge Preferred",
    mode: "Classroom / Online",

    overview: `
        The MS Office course is designed to develop professional
        office productivity skills. Students learn document creation,
        spreadsheet management, presentations, data handling, and
        essential office tasks through hands-on practical training.
        The course covers Microsoft Word, Excel, PowerPoint, and
        an introduction to Microsoft Access.
    `,

    skills: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Microsoft Access Basics",
        "Professional Document Creation",
        "Spreadsheet Management",
        "Excel Formulas and Functions",
        "Charts and Data Visualization",
        "Presentation Design",
        "Mail Merge",
        "Data Management",
        "Office Productivity"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to MS Office",
            theory: [
                "Introduction to Microsoft Office",
                "Applications of MS Office",
                "Microsoft Office Interface",
                "Ribbon, Tabs and Groups",
                "Creating and Saving Files",
                "Opening and Closing Documents",
                "File Formats",
                "Keyboard Shortcuts",
                "Printing and Exporting Files"
            ],
            practical: [
                "Explore MS Office Applications",
                "Create and Save Office Files",
                "Open and Edit Existing Documents",
                "Use Common Keyboard Shortcuts",
                "Print and Export Documents"
            ],
            project: [
                "Create an Organized Office Documents Folder"
            ]
        },

        {
            module: "Module 2: Microsoft Word - Basic",
            theory: [
                "Introduction to Word Processing",
                "Creating and Saving Documents",
                "Text Selection and Editing",
                "Font Formatting",
                "Paragraph Alignment",
                "Line and Paragraph Spacing",
                "Bullets and Numbering",
                "Page Margins and Orientation",
                "Page Borders and Backgrounds",
                "Find and Replace",
                "Spelling and Grammar Tools"
            ],
            practical: [
                "Create a New Document",
                "Format Text and Paragraphs",
                "Set Page Margins",
                "Create Bulleted and Numbered Lists",
                "Use Find and Replace",
                "Check Spelling and Grammar"
            ],
            project: [
                "Create a Professional Letter",
                "Prepare a Job Application"
            ]
        },

        {
            module: "Module 3: Microsoft Word - Advanced",
            theory: [
                "Tables and Table Formatting",
                "Inserting Pictures and Shapes",
                "Headers and Footers",
                "Page Numbering",
                "Columns and Page Breaks",
                "Styles and Themes",
                "Table of Contents Basics",
                "Hyperlinks",
                "Mail Merge",
                "Labels and Envelopes",
                "Document Protection Basics",
                "Printing and PDF Export"
            ],
            practical: [
                "Create and Format Tables",
                "Insert Images and Shapes",
                "Add Headers and Footers",
                "Insert Page Numbers",
                "Create a Table of Contents",
                "Perform Mail Merge",
                "Save a Document as PDF"
            ],
            project: [
                "Design a Professional Resume",
                "Create an Institute Admission Form",
                "Prepare Certificates Using Mail Merge"
            ]
        },

        {
            module: "Module 4: Microsoft Excel - Basic",
            theory: [
                "Introduction to Spreadsheets",
                "Workbook and Worksheet",
                "Rows, Columns and Cells",
                "Entering and Editing Data",
                "Cell References",
                "Number and Date Formatting",
                "Cell Alignment and Borders",
                "Merging Cells",
                "Basic Formulas",
                "Relative and Absolute References"
            ],
            practical: [
                "Create a New Workbook",
                "Enter and Format Data",
                "Adjust Row Height and Column Width",
                "Apply Cell Borders and Colors",
                "Use Basic Arithmetic Formulas",
                "Prepare a Simple Data Table"
            ],
            project: [
                "Create a Student Mark Sheet"
            ]
        },

        {
            module: "Module 5: Microsoft Excel - Formulas and Functions",
            theory: [
                "Formula Syntax",
                "SUM Function",
                "AVERAGE Function",
                "MIN and MAX Functions",
                "COUNT and COUNTA Functions",
                "IF Function",
                "SUMIF and COUNTIF Basics",
                "ROUND Function",
                "Date and Time Functions",
                "Text Functions Basics",
                "Logical Functions Basics",
                "Introduction to Lookup Functions"
            ],
            practical: [
                "Calculate Total and Percentage",
                "Calculate Student Grades",
                "Use SUM and AVERAGE",
                "Apply IF Conditions",
                "Count and Summarize Data",
                "Calculate Dates and Time",
                "Practice Lookup Functions"
            ],
            project: [
                "Create a Student Result and Grade Sheet",
                "Prepare an Employee Salary Sheet"
            ]
        },

        {
            module: "Module 6: Microsoft Excel - Advanced Tools",
            theory: [
                "Sorting and Filtering Data",
                "Conditional Formatting",
                "Data Validation",
                "Excel Tables",
                "Charts and Graphs",
                "Freeze Panes",
                "Remove Duplicates",
                "PivotTable Introduction",
                "Worksheet Protection",
                "Page Setup and Printing",
                "Data Analysis Basics"
            ],
            practical: [
                "Sort and Filter Records",
                "Apply Conditional Formatting",
                "Create Drop-Down Lists",
                "Create Charts",
                "Generate a PivotTable",
                "Remove Duplicate Records",
                "Set Print Areas",
                "Prepare Printable Reports"
            ],
            project: [
                "Create a Monthly Sales Report",
                "Prepare an Attendance Management Sheet"
            ]
        },

        {
            module: "Module 7: Microsoft PowerPoint - Basic",
            theory: [
                "Introduction to Presentations",
                "Slides and Slide Layouts",
                "Creating and Saving Presentations",
                "Themes and Templates",
                "Text Formatting",
                "Inserting Pictures and Shapes",
                "Tables and Charts",
                "Slide Backgrounds",
                "Slide Transitions",
                "Presentation Modes"
            ],
            practical: [
                "Create a New Presentation",
                "Apply Themes and Layouts",
                "Insert Pictures and Shapes",
                "Format Slide Text",
                "Add Tables and Charts",
                "Apply Slide Transitions",
                "Run a Slide Show"
            ],
            project: [
                "Create an Institute Introduction Presentation"
            ]
        },

        {
            module: "Module 8: Microsoft PowerPoint - Advanced",
            theory: [
                "Advanced Slide Design",
                "Animations and Animation Pane",
                "SmartArt Graphics",
                "Audio and Video Insertion",
                "Hyperlinks and Action Buttons",
                "Slide Master",
                "Custom Slide Shows",
                "Presenter View",
                "Presentation Rehearsal",
                "Exporting Presentations"
            ],
            practical: [
                "Create Animated Slides",
                "Use SmartArt Graphics",
                "Insert Audio and Video",
                "Create Hyperlinks",
                "Customize Slide Master",
                "Prepare a Professional Presentation",
                "Export Slides to PDF"
            ],
            project: [
                "Design a Business Presentation",
                "Create an Educational Presentation"
            ]
        },

        {
            module: "Module 9: Microsoft Access - Basics",
            theory: [
                "Introduction to Database Management",
                "Tables, Records and Fields",
                "Data Types",
                "Primary Keys",
                "Creating Database Tables",
                "Forms and Data Entry",
                "Queries and Filtering",
                "Reports",
                "Basic Relationships"
            ],
            practical: [
                "Create a Database",
                "Create Tables and Fields",
                "Enter and Edit Records",
                "Create a Simple Form",
                "Run Basic Queries",
                "Generate Reports"
            ],
            project: [
                "Create a Student Record Database"
            ]
        },

        {
            module: "Module 10: Office Integration and Final Projects",
            theory: [
                "Copying Data Between Office Applications",
                "Inserting Excel Data into Word",
                "Using Excel Charts in PowerPoint",
                "Document Sharing Basics",
                "File Management",
                "PDF Export",
                "Office Productivity Best Practices"
            ],
            practical: [
                "Create a Word Report Using Excel Data",
                "Insert Excel Charts into PowerPoint",
                "Prepare a Complete Office Report",
                "Organize Office Files",
                "Export Documents to PDF"
            ],
            project: [
                "Prepare a Business Report Using Word and Excel",
                "Create a Sales Presentation Using Excel Charts",
                "Complete an Office Documentation Project"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Introduction to MS Office",
            duration: "1 Week"
        },
        {
            module: "Microsoft Word",
            duration: "3 Weeks"
        },
        {
            module: "Microsoft Excel",
            duration: "4 Weeks"
        },
        {
            module: "Microsoft PowerPoint",
            duration: "2 Weeks"
        },
        {
            module: "Microsoft Access",
            duration: "1 Week"
        },
        {
            module: "Office Integration and Projects",
            duration: "1 Week"
        }
    ],

    assessment: [
        "MS Word Practical Test",
        "MS Excel Formula and Functions Test",
        "PowerPoint Presentation Test",
        "Database Fundamentals Test",
        "Final Practical Examination",
        "Project Submission"
    ]
},


   "excel": {
    title: "Microsoft Excel - Basic to Advanced",
    description: "Master Microsoft Excel with formulas, functions, data analysis, PivotTables, charts, dashboards, and real-world projects.",
    icon: "📊",
    duration: "3 Months",
    fees: "₹5,000",
    eligibility: "Basic Computer Knowledge Preferred",
    mode: "Classroom / Online",

    overview: `
        The Microsoft Excel course is designed to develop practical
        spreadsheet and data analysis skills. Students learn data entry,
        formatting, formulas, functions, data validation, charts,
        PivotTables, reporting, and dashboard creation through
        hands-on exercises and real-world projects.
    `,

    skills: [
        "Excel Interface and Workbook Management",
        "Data Entry and Formatting",
        "Basic and Advanced Formulas",
        "Logical Functions",
        "Lookup Functions",
        "Text and Date Functions",
        "Sorting and Filtering",
        "Conditional Formatting",
        "Data Validation",
        "Charts and Graphs",
        "PivotTables and PivotCharts",
        "Data Cleaning",
        "Dashboard Creation",
        "Report Preparation",
        "Excel Productivity Shortcuts"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Microsoft Excel",
            theory: [
                "Introduction to Microsoft Excel",
                "Uses and Applications of Excel",
                "Workbook and Worksheet",
                "Rows, Columns and Cells",
                "Cell Addresses and Ranges",
                "Excel Ribbon and Tabs",
                "Formula Bar and Name Box",
                "Creating and Saving Workbooks",
                "Opening and Closing Files",
                "Excel File Formats",
                "Worksheet Management"
            ],
            practical: [
                "Create a New Workbook",
                "Enter and Edit Data",
                "Insert and Delete Rows and Columns",
                "Rename Worksheets",
                "Add and Remove Worksheets",
                "Save and Open Excel Files"
            ],
            project: [
                "Create a Personal Information Sheet"
            ]
        },

        {
            module: "Module 2: Data Entry and Formatting",
            theory: [
                "Entering Text, Numbers and Dates",
                "Editing Cell Contents",
                "Copying and Moving Data",
                "AutoFill and Flash Fill",
                "Font and Alignment Formatting",
                "Cell Borders and Fill Colors",
                "Number and Currency Formats",
                "Percentage and Date Formatting",
                "Merge and Center",
                "Wrap Text",
                "Format Painter",
                "Format Cells Dialog Box"
            ],
            practical: [
                "Prepare a Student Information Table",
                "Format Headings and Data",
                "Apply Currency and Percentage Formats",
                "Use AutoFill",
                "Adjust Row Height and Column Width",
                "Apply Borders and Cell Colors"
            ],
            project: [
                "Design a Professional Student Data Sheet"
            ]
        },

        {
            module: "Module 3: Basic Formulas and Operators",
            theory: [
                "Introduction to Formulas",
                "Formula Syntax",
                "Arithmetic Operators",
                "Addition, Subtraction and Multiplication",
                "Division and Percentage Calculations",
                "Order of Operations",
                "Relative Cell References",
                "Absolute Cell References",
                "Mixed Cell References",
                "Copying Formulas",
                "Common Formula Errors"
            ],
            practical: [
                "Calculate Total Marks",
                "Calculate Percentage",
                "Calculate Profit and Loss",
                "Calculate Discounts",
                "Use Relative References",
                "Use Absolute References",
                "Copy Formulas Across Rows and Columns"
            ],
            project: [
                "Create a Student Mark Sheet with Formulas"
            ]
        },

        {
            module: "Module 4: Basic Excel Functions",
            theory: [
                "Introduction to Functions",
                "SUM Function",
                "AVERAGE Function",
                "MIN Function",
                "MAX Function",
                "COUNT Function",
                "COUNTA Function",
                "ROUND Function",
                "ROUNDUP and ROUNDDOWN",
                "AutoSum",
                "Function Arguments"
            ],
            practical: [
                "Calculate Total and Average",
                "Find Highest and Lowest Values",
                "Count Numeric Entries",
                "Count Non-Empty Cells",
                "Round Decimal Values",
                "Apply Functions to Student Data"
            ],
            project: [
                "Create a Result Sheet Using Excel Functions"
            ]
        },

        {
            module: "Module 5: Logical Functions",
            theory: [
                "Introduction to Logical Functions",
                "IF Function",
                "Nested IF Basics",
                "AND Function",
                "OR Function",
                "NOT Function",
                "IFERROR Function",
                "Combining Logical Functions",
                "Conditional Calculations"
            ],
            practical: [
                "Assign Pass or Fail Results",
                "Calculate Student Grades",
                "Identify Eligible Candidates",
                "Use Multiple Conditions",
                "Handle Formula Errors",
                "Create Conditional Status Reports"
            ],
            project: [
                "Build an Automatic Student Grading System"
            ]
        },

        {
            module: "Module 6: Conditional and Statistical Functions",
            theory: [
                "SUMIF Function",
                "SUMIFS Function",
                "COUNTIF Function",
                "COUNTIFS Function",
                "AVERAGEIF Function",
                "AVERAGEIFS Function",
                "LARGE and SMALL Functions",
                "RANK Function",
                "SUBTOTAL Function",
                "Introduction to Statistical Analysis"
            ],
            practical: [
                "Calculate Sales by Category",
                "Count Records Based on Conditions",
                "Calculate Conditional Averages",
                "Rank Student Marks",
                "Summarize Filtered Data",
                "Analyze Department-Wise Performance"
            ],
            project: [
                "Create a Department-Wise Sales Report"
            ]
        },

        {
            module: "Module 7: Text Functions",
            theory: [
                "LEFT Function",
                "RIGHT Function",
                "MID Function",
                "LEN Function",
                "TRIM Function",
                "UPPER Function",
                "LOWER Function",
                "PROPER Function",
                "CONCAT and CONCATENATE",
                "TEXTJOIN",
                "FIND and SEARCH",
                "SUBSTITUTE and REPLACE",
                "TEXT Function"
            ],
            practical: [
                "Clean Extra Spaces",
                "Change Text Case",
                "Extract Names and Codes",
                "Combine First and Last Names",
                "Separate Text Values",
                "Standardize Imported Data"
            ],
            project: [
                "Clean and Format a Customer Database"
            ]
        },

        {
            module: "Module 8: Date and Time Functions",
            theory: [
                "Excel Date and Time Basics",
                "TODAY Function",
                "NOW Function",
                "DATE Function",
                "DAY, MONTH and YEAR",
                "DATEDIF Function",
                "EDATE and EOMONTH",
                "WORKDAY Function",
                "NETWORKDAYS Function",
                "Date Formatting"
            ],
            practical: [
                "Calculate Age from Date of Birth",
                "Calculate Days Between Dates",
                "Calculate Employee Service Period",
                "Find Working Days",
                "Prepare Attendance Dates",
                "Calculate Project Deadlines"
            ],
            project: [
                "Create an Employee Attendance and Service Sheet"
            ]
        },

        {
            module: "Module 9: Lookup Functions",
            theory: [
                "Introduction to Lookup Functions",
                "VLOOKUP Function",
                "HLOOKUP Function",
                "XLOOKUP Function",
                "INDEX Function",
                "MATCH Function",
                "INDEX and MATCH Combination",
                "Exact and Approximate Matches",
                "Handling Lookup Errors",
                "Lookup Best Practices"
            ],
            practical: [
                "Search Employee Information",
                "Retrieve Product Prices",
                "Find Student Records",
                "Create Automatic Data Retrieval",
                "Use INDEX and MATCH",
                "Practice XLOOKUP Where Supported"
            ],
            project: [
                "Create an Automatic Student Record Lookup System"
            ]
        },

        {
            module: "Module 10: Sorting and Filtering",
            theory: [
                "Sorting Data",
                "Multi-Level Sorting",
                "Custom Sorting",
                "AutoFilter",
                "Advanced Filter Basics",
                "Excel Tables",
                "Table Styles",
                "Structured References",
                "Remove Duplicates",
                "Freeze Panes",
                "Find and Replace"
            ],
            practical: [
                "Sort Student Records",
                "Filter Sales Data",
                "Create an Excel Table",
                "Remove Duplicate Records",
                "Freeze Headings",
                "Find Specific Data",
                "Apply Multiple Filters"
            ],
            project: [
                "Organize and Filter a Large Customer Database"
            ]
        },

        {
            module: "Module 11: Conditional Formatting and Data Validation",
            theory: [
                "Introduction to Conditional Formatting",
                "Highlight Cell Rules",
                "Top and Bottom Rules",
                "Data Bars and Color Scales",
                "Icon Sets",
                "Formula-Based Formatting",
                "Introduction to Data Validation",
                "Drop-Down Lists",
                "Input Messages and Error Alerts",
                "Restricting Data Entry"
            ],
            practical: [
                "Highlight Low Marks",
                "Identify Duplicate Values",
                "Highlight Expired Dates",
                "Create Drop-Down Lists",
                "Restrict Invalid Entries",
                "Apply Formula-Based Formatting"
            ],
            project: [
                "Create a Validated Student Admission Form"
            ]
        },

        {
            module: "Module 12: Charts and Data Visualization",
            theory: [
                "Introduction to Charts",
                "Column and Bar Charts",
                "Line Charts",
                "Pie and Doughnut Charts",
                "Area Charts",
                "Combo Charts",
                "Chart Titles and Labels",
                "Legends and Axes",
                "Chart Formatting",
                "Sparklines",
                "Choosing the Right Chart"
            ],
            practical: [
                "Create a Sales Chart",
                "Create a Monthly Trend Chart",
                "Prepare a Department Comparison Chart",
                "Format Chart Elements",
                "Create a Combo Chart",
                "Insert Sparklines"
            ],
            project: [
                "Create a Monthly Business Performance Report"
            ]
        },

        {
            module: "Module 13: PivotTables and PivotCharts",
            theory: [
                "Introduction to PivotTables",
                "Creating a PivotTable",
                "Rows, Columns, Values and Filters",
                "Summarizing Data",
                "Grouping Dates",
                "Sorting PivotTable Data",
                "Filtering PivotTables",
                "Slicers and Timelines",
                "Calculated Fields Basics",
                "PivotCharts",
                "Refreshing PivotTable Data"
            ],
            practical: [
                "Summarize Sales by Region",
                "Analyze Product-Wise Sales",
                "Group Sales by Month",
                "Use PivotTable Filters",
                "Insert Slicers",
                "Create PivotCharts",
                "Refresh PivotTable Reports"
            ],
            project: [
                "Build a Sales Analysis Report Using PivotTables"
            ]
        },

        {
            module: "Module 14: Advanced Data Analysis",
            theory: [
                "What-If Analysis Basics",
                "Goal Seek",
                "Scenario Manager",
                "Data Tables Introduction",
                "Subtotal and Grouping",
                "Consolidating Data",
                "Introduction to Power Query",
                "Importing External Data",
                "Data Cleaning and Transformation",
                "Introduction to Power Pivot Where Available"
            ],
            practical: [
                "Calculate a Target Profit Using Goal Seek",
                "Compare Different Business Scenarios",
                "Group and Summarize Data",
                "Import Data from Files",
                "Clean and Transform Data with Power Query",
                "Prepare a Consolidated Report"
            ],
            project: [
                "Perform a Basic Business Data Analysis"
            ]
        },

        {
            module: "Module 15: Dashboard Creation",
            theory: [
                "Introduction to Excel Dashboards",
                "Dashboard Layout and Design",
                "KPI Selection",
                "Charts and Summary Cards",
                "PivotTables and Slicers",
                "Interactive Report Design",
                "Formatting and Consistency",
                "Dashboard Printing and Sharing"
            ],
            practical: [
                "Prepare KPI Summary Cards",
                "Create Interactive Charts",
                "Connect Slicers to PivotTables",
                "Design a Dashboard Layout",
                "Format a Dashboard for Presentation",
                "Prepare a Printable Summary"
            ],
            project: [
                "Create an Interactive Sales Dashboard",
                "Build a Student Performance Dashboard"
            ]
        },

        {
            module: "Module 16: Excel Productivity and Final Projects",
            theory: [
                "Keyboard Shortcuts",
                "Workbook Protection",
                "Worksheet Protection",
                "Page Setup and Print Areas",
                "Headers and Footers",
                "PDF Export",
                "CSV Import and Export",
                "Formula Auditing",
                "Error Checking",
                "Excel Best Practices"
            ],
            practical: [
                "Protect a Worksheet",
                "Set Print Areas",
                "Export Reports to PDF",
                "Import and Export CSV Files",
                "Trace Formula Errors",
                "Prepare a Professional Report"
            ],
            project: [
                "Employee Salary Management System",
                "Student Result Management System",
                "Inventory Management Sheet",
                "Monthly Sales Dashboard",
                "Business Expense Tracker"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Excel Fundamentals and Formatting",
            duration: "2 Weeks"
        },
        {
            module: "Formulas and Basic Functions",
            duration: "2 Weeks"
        },
        {
            module: "Logical, Statistical and Text Functions",
            duration: "2 Weeks"
        },
        {
            module: "Date and Lookup Functions",
            duration: "2 Weeks"
        },
        {
            module: "Data Management and Validation",
            duration: "2 Weeks"
        },
        {
            module: "Charts and PivotTables",
            duration: "2 Weeks"
        },
        {
            module: "Advanced Analysis and Dashboards",
            duration: "2 Weeks"
        },
        {
            module: "Final Projects and Assessment",
            duration: "1 Week"
        }
    ],

    assessment: [
        "Excel Fundamentals Test",
        "Formula and Functions Test",
        "Data Cleaning Practical",
        "Charts and PivotTables Test",
        "Dashboard Creation Project",
        "Final Practical Examination"
    ]
},

"tally-prime": {
    title: "Tally Prime with GST",
    description: "Learn computerized accounting, Tally Prime, GST, inventory management, taxation, payroll, and financial reporting through practical training.",
    icon: "📒",
    duration: "3 Months",
    fees: "₹6,000",
    eligibility: "Basic Computer Knowledge Preferred",
    mode: "Classroom / Online",

    overview: `
        The Tally Prime with GST course is designed to develop
        practical accounting and bookkeeping skills. Students learn
        accounting fundamentals, company creation, ledger management,
        voucher entries, inventory, GST transactions, banking,
        payroll basics, and financial reporting through practical
        exercises and business case studies.
    `,

    skills: [
        "Accounting Fundamentals",
        "Company Creation and Configuration",
        "Groups and Ledger Creation",
        "Accounting Vouchers",
        "Sales and Purchase Entries",
        "Receipt and Payment Entries",
        "Contra and Journal Entries",
        "Inventory Management",
        "GST Accounting",
        "Tax Invoice Creation",
        "Bank Reconciliation",
        "Credit and Debit Notes",
        "Payroll Fundamentals",
        "Financial Statements",
        "Profit and Loss Account",
        "Balance Sheet Preparation",
        "Practical Business Accounting"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Accounting",
            theory: [
                "Introduction to Accounting",
                "Objectives and Importance of Accounting",
                "Types of Accounts",
                "Golden Rules of Accounting",
                "Assets and Liabilities",
                "Capital and Drawings",
                "Income and Expenses",
                "Debit and Credit Rules",
                "Journal Entries",
                "Ledger and Trial Balance",
                "Cash Book",
                "Trading Account",
                "Profit and Loss Account",
                "Balance Sheet"
            ],
            practical: [
                "Identify Types of Accounts",
                "Pass Basic Journal Entries",
                "Prepare Ledger Accounts",
                "Prepare a Trial Balance",
                "Calculate Profit and Loss",
                "Understand Business Transactions"
            ],
            project: [
                "Prepare a Manual Accounting Book for a Small Business"
            ]
        },

        {
            module: "Module 2: Introduction to Tally Prime",
            theory: [
                "Introduction to Tally Prime",
                "Features and Applications",
                "Tally Prime Interface",
                "Navigation and Keyboard Shortcuts",
                "Company Creation",
                "Company Alteration",
                "Company Features and Settings",
                "Financial Year Configuration",
                "Backup and Restore Basics"
            ],
            practical: [
                "Open Tally Prime",
                "Create a New Company",
                "Configure Company Details",
                "Set Financial Year",
                "Modify Company Information",
                "Practice Navigation and Shortcuts"
            ],
            project: [
                "Create and Configure a Sample Business Company"
            ]
        },

        {
            module: "Module 3: Groups and Ledger Creation",
            theory: [
                "Introduction to Groups",
                "Predefined Accounting Groups",
                "Primary Groups and Subgroups",
                "Introduction to Ledgers",
                "Capital Ledger",
                "Cash and Bank Ledgers",
                "Customer and Supplier Ledgers",
                "Sales and Purchase Ledgers",
                "Expense and Income Ledgers",
                "Opening Balances"
            ],
            practical: [
                "Create Capital and Cash Ledgers",
                "Create Customer and Supplier Ledgers",
                "Create Sales and Purchase Ledgers",
                "Create Expense Ledgers",
                "Create Bank Ledgers",
                "Enter Opening Balances"
            ],
            project: [
                "Create Complete Ledger Accounts for a Trading Business"
            ]
        },

        {
            module: "Module 4: Accounting Vouchers",
            theory: [
                "Introduction to Vouchers",
                "Contra Voucher",
                "Payment Voucher",
                "Receipt Voucher",
                "Journal Voucher",
                "Sales Voucher",
                "Purchase Voucher",
                "Debit Note",
                "Credit Note",
                "Voucher Numbering",
                "Voucher Alteration and Cancellation"
            ],
            practical: [
                "Record Cash Deposits and Withdrawals",
                "Record Payments and Receipts",
                "Enter Journal Transactions",
                "Record Sales Transactions",
                "Record Purchase Transactions",
                "Create Debit and Credit Notes",
                "Alter and Review Voucher Entries"
            ],
            project: [
                "Record One Month of Business Transactions"
            ]
        },

        {
            module: "Module 5: Sales and Purchase Accounting",
            theory: [
                "Cash and Credit Sales",
                "Cash and Credit Purchases",
                "Customer Outstanding Balances",
                "Supplier Outstanding Balances",
                "Trade Discounts",
                "Sales Returns",
                "Purchase Returns",
                "Invoice Formats",
                "Bill-wise Details",
                "Credit Terms"
            ],
            practical: [
                "Record Cash Sales",
                "Record Credit Sales",
                "Enter Cash Purchases",
                "Enter Credit Purchases",
                "Record Sales Returns",
                "Record Purchase Returns",
                "Track Customer and Supplier Balances"
            ],
            project: [
                "Maintain Sales and Purchase Records for a Trading Firm"
            ]
        },

        {
            module: "Module 6: Inventory Management",
            theory: [
                "Introduction to Inventory",
                "Stock Groups",
                "Stock Categories",
                "Stock Items",
                "Units of Measurement",
                "Godowns and Locations",
                "Opening Stock",
                "Stock Valuation Basics",
                "Purchase and Sales with Inventory",
                "Stock Summary",
                "Physical Stock Voucher"
            ],
            practical: [
                "Create Stock Groups",
                "Create Stock Items",
                "Set Units of Measurement",
                "Enter Opening Stock",
                "Record Inventory Purchases",
                "Record Inventory Sales",
                "View Stock Summary",
                "Record Physical Stock"
            ],
            project: [
                "Create an Inventory Management System for a Retail Shop"
            ]
        },

        {
            module: "Module 7: GST Fundamentals",
            theory: [
                "Introduction to GST",
                "Objectives of GST",
                "CGST, SGST and IGST",
                "Intra-State and Inter-State Transactions",
                "GSTIN Basics",
                "GST Registration Overview",
                "Taxable and Exempt Supplies",
                "GST Rates and HSN Basics",
                "Input Tax Credit Fundamentals",
                "Tax Invoice Requirements"
            ],
            practical: [
                "Identify GST Transaction Types",
                "Understand GSTIN Structure",
                "Configure GST Details for a Sample Company",
                "Create Tax Ledgers",
                "Understand Taxable and Exempt Items",
                "Calculate GST on Sample Transactions"
            ],
            project: [
                "Prepare Sample GST Calculations for a Trading Business"
            ]
        },

        {
            module: "Module 8: GST Configuration in Tally Prime",
            theory: [
                "Enabling GST Features",
                "Company GST Details",
                "State and Registration Details",
                "GST Registration Types",
                "GST Tax Ledgers",
                "GST Classification of Stock Items",
                "HSN and SAC Details",
                "Tax Rate Configuration",
                "GST Invoice Configuration"
            ],
            practical: [
                "Enable GST for a Sample Company",
                "Configure GST Registration Details",
                "Create CGST and SGST Ledgers",
                "Create IGST Ledger",
                "Configure GST Rates for Sample Items",
                "Enter HSN Details",
                "Configure Invoice Printing Options"
            ],
            project: [
                "Configure GST for a Sample Trading Company"
            ]
        },

        {
            module: "Module 9: GST Sales and Purchase Entries",
            theory: [
                "GST Sales Transactions",
                "GST Purchase Transactions",
                "Intra-State Sales",
                "Inter-State Sales",
                "Taxable and Exempt Transactions",
                "GST Credit Notes",
                "GST Debit Notes",
                "Purchase Returns",
                "Sales Returns",
                "Input Tax Credit Basics"
            ],
            practical: [
                "Record Local GST Sales",
                "Record Interstate GST Sales",
                "Record Local GST Purchases",
                "Record Interstate GST Purchases",
                "Create GST Sales Invoices",
                "Record Sales Returns",
                "Record Purchase Returns",
                "Review GST Transaction Reports"
            ],
            project: [
                "Maintain GST Sales and Purchase Transactions for One Month"
            ]
        },

        {
            module: "Module 10: GST Reports and Returns",
            theory: [
                "Introduction to GST Reports",
                "GSTR-1 Overview",
                "GSTR-3B Overview",
                "GST Sales Register",
                "GST Purchase Register",
                "Tax Liability Reports",
                "Input Tax Credit Reports",
                "GST Reconciliation Basics",
                "Checking Errors in GST Data",
                "Exporting GST Reports"
            ],
            practical: [
                "View GST Reports in Tally Prime",
                "Review Sales and Purchase Data",
                "Identify Potential GST Entry Errors",
                "Review Tax Liability",
                "Review Input Tax Credit Details",
                "Export Reports for Review"
            ],
            project: [
                "Prepare a Sample GST Report and Reconciliation Worksheet"
            ]
        },

        {
            module: "Module 11: Banking and Reconciliation",
            theory: [
                "Bank Ledger Management",
                "Cheque Entries",
                "Bank Payment and Receipt Entries",
                "Bank Reconciliation Statement",
                "Cheque Printing Basics",
                "Banking Reports",
                "Outstanding Cheques and Deposits"
            ],
            practical: [
                "Create Bank Ledgers",
                "Record Bank Transactions",
                "Enter Cheque Payments",
                "View Bank Reconciliation Details",
                "Compare Bank Statement Transactions",
                "Identify Unreconciled Entries"
            ],
            project: [
                "Prepare a Bank Reconciliation Statement"
            ]
        },

        {
            module: "Module 12: Cost Centres and Budgets",
            theory: [
                "Introduction to Cost Centres",
                "Cost Categories",
                "Department-Wise Expenses",
                "Budget Creation",
                "Budget Variance",
                "Expense Monitoring",
                "Cost Centre Reports"
            ],
            practical: [
                "Enable Cost Centre Features",
                "Create Cost Centres",
                "Allocate Expenses to Departments",
                "Create Sample Budgets",
                "Review Budget Reports"
            ],
            project: [
                "Prepare a Department-Wise Expense Report"
            ]
        },

        {
            module: "Module 13: Payroll Fundamentals",
            theory: [
                "Introduction to Payroll",
                "Employee Records",
                "Employee Groups",
                "Attendance and Pay Heads",
                "Salary Structure Basics",
                "Salary Calculation",
                "Payroll Vouchers",
                "Payslip Generation",
                "Payroll Reports"
            ],
            practical: [
                "Create Sample Employee Records",
                "Configure Basic Pay Heads",
                "Enter Attendance Details",
                "Record Salary Transactions",
                "Generate Sample Payslips",
                "Review Payroll Reports"
            ],
            project: [
                "Prepare a Sample Monthly Payroll Register"
            ]
        },

        {
            module: "Module 14: Financial Reports",
            theory: [
                "Trial Balance",
                "Profit and Loss Account",
                "Balance Sheet",
                "Cash Flow Basics",
                "Cash Book",
                "Bank Book",
                "Day Book",
                "Outstanding Receivables",
                "Outstanding Payables",
                "Stock Summary",
                "Financial Year Reports"
            ],
            practical: [
                "Generate a Trial Balance",
                "View Profit and Loss Account",
                "View Balance Sheet",
                "Generate Cash and Bank Reports",
                "Review Receivables and Payables",
                "Export Financial Reports"
            ],
            project: [
                "Prepare a Complete Financial Report for a Sample Business"
            ]
        },

        {
            module: "Module 15: Final Practical Projects",
            theory: [
                "Accounting Workflow Revision",
                "Voucher Entry Review",
                "Inventory and GST Review",
                "Financial Report Interpretation",
                "Accounting Data Backup",
                "Business Accounting Best Practices"
            ],
            practical: [
                "Create a Company",
                "Create Groups and Ledgers",
                "Enter Opening Balances",
                "Record Sales and Purchase Transactions",
                "Manage Inventory",
                "Record GST Transactions",
                "Review GST Reports",
                "Generate Financial Statements"
            ],
            project: [
                "Complete Accounting for a Trading Business",
                "Complete Accounting for a Retail Shop",
                "Prepare GST and Financial Reports for a Sample Company"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Accounting Fundamentals",
            duration: "2 Weeks"
        },
        {
            module: "Tally Prime and Ledger Management",
            duration: "2 Weeks"
        },
        {
            module: "Voucher Entries and Inventory",
            duration: "3 Weeks"
        },
        {
            module: "GST Configuration and Transactions",
            duration: "3 Weeks"
        },
        {
            module: "GST Reports and Banking",
            duration: "1 Week"
        },
        {
            module: "Payroll and Financial Reports",
            duration: "1 Week"
        },
        {
            module: "Final Practical Projects",
            duration: "1 Week"
        }
    ],

    assessment: [
        "Accounting Fundamentals Test",
        "Ledger and Voucher Entry Practical",
        "Inventory Management Practical",
        "GST Accounting Practical",
        "Financial Reports Test",
        "Final Business Accounting Project",
        "Viva Voce"
    ]
},


"html-css": {
    title: "HTML & CSS - Web Designing Course",
    description: "Learn website development using HTML5 and CSS3, including responsive layouts, modern styling, animations, and real-world website projects.",
    icon: "🌐",
    duration: "3 Months",
    fees: "₹6,000",
    eligibility: "Basic Computer Knowledge Preferred",
    mode: "Classroom / Online",

    overview: `
        The HTML and CSS Web Designing course teaches students how
        to create attractive, responsive, and user-friendly websites.
        Students learn HTML5 for webpage structure and CSS3 for styling,
        layouts, animations, and responsive design. The course includes
        hands-on practice and real-world website development projects.
    `,

    skills: [
        "HTML5 Fundamentals",
        "HTML Elements and Attributes",
        "Forms and Input Fields",
        "Tables and Lists",
        "Semantic HTML",
        "CSS3 Fundamentals",
        "Selectors and Properties",
        "Colors, Fonts and Backgrounds",
        "Box Model",
        "Flexbox Layout",
        "CSS Grid",
        "Responsive Web Design",
        "Media Queries",
        "CSS Transitions and Animations",
        "Website Layout Design",
        "Website Deployment Basics"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Web Designing",
            theory: [
                "Introduction to Web Development",
                "What Is a Website?",
                "Static and Dynamic Websites",
                "Frontend and Backend Basics",
                "Introduction to HTML and CSS",
                "Web Browsers and Web Servers",
                "Domain Names and Hosting Basics",
                "Code Editors and Development Tools",
                "Website File and Folder Structure"
            ],
            practical: [
                "Install and Configure a Code Editor",
                "Create a Project Folder",
                "Create an HTML File",
                "Open a Website in a Browser",
                "Understand Browser Developer Tools"
            ],
            project: [
                "Create Your First Web Page"
            ]
        },

        {
            module: "Module 2: HTML Fundamentals",
            theory: [
                "Introduction to HTML5",
                "HTML Document Structure",
                "DOCTYPE Declaration",
                "Head and Body Elements",
                "Headings and Paragraphs",
                "Line Breaks and Horizontal Rules",
                "HTML Comments",
                "Text Formatting Elements",
                "HTML Entities",
                "Block and Inline Elements"
            ],
            practical: [
                "Create an HTML Document",
                "Add Headings and Paragraphs",
                "Format Text",
                "Insert Line Breaks",
                "Add Comments",
                "Practice Block and Inline Elements"
            ],
            project: [
                "Create a Personal Introduction Page"
            ]
        },

        {
            module: "Module 3: HTML Links, Images and Lists",
            theory: [
                "Anchor Tags and Hyperlinks",
                "Absolute and Relative URLs",
                "Opening Links in New Tabs",
                "Image Elements",
                "Image Paths and Alternative Text",
                "Ordered Lists",
                "Unordered Lists",
                "Description Lists",
                "Nested Lists",
                "Navigation Links"
            ],
            practical: [
                "Create Internal and External Links",
                "Insert Images into a Web Page",
                "Create Ordered and Unordered Lists",
                "Build a Navigation Menu",
                "Organize Website Assets"
            ],
            project: [
                "Create a Personal Profile Website"
            ]
        },

        {
            module: "Module 4: HTML Tables and Forms",
            theory: [
                "Introduction to HTML Tables",
                "Table Rows and Cells",
                "Table Headings",
                "Table Captions",
                "Table Sections",
                "Introduction to HTML Forms",
                "Input Types",
                "Labels and Placeholders",
                "Radio Buttons and Checkboxes",
                "Select Dropdowns",
                "Textarea",
                "Buttons",
                "Required Fields and Basic Validation"
            ],
            practical: [
                "Create a Student Mark Sheet Table",
                "Build a Student Registration Form",
                "Create Login and Contact Forms",
                "Add Dropdown Menus",
                "Use Radio Buttons and Checkboxes",
                "Apply Basic Form Validation"
            ],
            project: [
                "Create an Institute Admission Form"
            ]
        },

        {
            module: "Module 5: Semantic HTML and Multimedia",
            theory: [
                "Semantic HTML Elements",
                "Header and Footer",
                "Navigation Elements",
                "Main and Section Elements",
                "Article and Aside Elements",
                "Audio and Video Elements",
                "Embedding External Content",
                "HTML Metadata",
                "Title and Meta Description",
                "Basic Accessibility Principles"
            ],
            practical: [
                "Create a Semantic Page Layout",
                "Add Audio and Video",
                "Organize Content with Semantic Elements",
                "Add Page Titles and Metadata",
                "Improve Image Alternative Text"
            ],
            project: [
                "Create a News or Blog Article Page"
            ]
        },

        {
            module: "Module 6: CSS Fundamentals",
            theory: [
                "Introduction to CSS3",
                "Inline CSS",
                "Internal CSS",
                "External CSS",
                "CSS Syntax",
                "CSS Selectors",
                "Element Selectors",
                "Class and ID Selectors",
                "Grouping Selectors",
                "Descendant and Child Selectors",
                "Pseudo-Classes",
                "Pseudo-Elements",
                "Cascade and Specificity"
            ],
            practical: [
                "Apply Inline CSS",
                "Create an External Stylesheet",
                "Style Headings and Paragraphs",
                "Use Class and ID Selectors",
                "Change Text and Background Colors",
                "Practice Hover Effects"
            ],
            project: [
                "Style a Personal Introduction Website"
            ]
        },

        {
            module: "Module 7: CSS Colors, Fonts and Backgrounds",
            theory: [
                "CSS Color Values",
                "Named Colors and Hexadecimal Colors",
                "RGB and HSL Colors",
                "Font Families",
                "Font Sizes and Weights",
                "Text Alignment",
                "Line Height and Letter Spacing",
                "Text Decoration",
                "Background Colors",
                "Background Images",
                "Gradients",
                "Borders and Border Radius",
                "Box Shadows and Text Shadows"
            ],
            practical: [
                "Design a Color Scheme",
                "Style Website Typography",
                "Add Background Images",
                "Create Gradient Backgrounds",
                "Style Borders and Shadows",
                "Create Attractive Buttons"
            ],
            project: [
                "Design a Professional Landing Page"
            ]
        },

        {
            module: "Module 8: CSS Box Model and Positioning",
            theory: [
                "Introduction to the CSS Box Model",
                "Content, Padding, Border and Margin",
                "Width and Height",
                "Box Sizing",
                "Display Property",
                "Block and Inline Elements",
                "Inline-Block",
                "Position Static",
                "Position Relative",
                "Position Absolute",
                "Position Fixed",
                "Position Sticky",
                "Overflow and Z-Index"
            ],
            practical: [
                "Create Content Boxes",
                "Control Margins and Padding",
                "Use Box Sizing",
                "Position Elements on a Page",
                "Create Fixed Headers",
                "Create Sticky Navigation",
                "Practice Z-Index"
            ],
            project: [
                "Create a Multi-Section Webpage Layout"
            ]
        },

        {
            module: "Module 9: CSS Flexbox",
            theory: [
                "Introduction to Flexbox",
                "Flex Containers and Items",
                "Flex Direction",
                "Justify Content",
                "Align Items",
                "Align Content",
                "Flex Wrap",
                "Gap Property",
                "Flex Grow and Flex Shrink",
                "Order Property",
                "Responsive Flexbox Layouts"
            ],
            practical: [
                "Create a Horizontal Navigation Bar",
                "Align Content Vertically and Horizontally",
                "Build a Card Layout",
                "Create a Responsive Header",
                "Arrange Items with Flex Wrap",
                "Practice Flexible Layouts"
            ],
            project: [
                "Create a Responsive Services Section"
            ]
        },

        {
            module: "Module 10: CSS Grid",
            theory: [
                "Introduction to CSS Grid",
                "Grid Containers and Items",
                "Grid Rows and Columns",
                "Grid Template Columns",
                "Grid Template Rows",
                "Grid Gaps",
                "Grid Areas",
                "Column and Row Spanning",
                "Fractional Units",
                "Responsive Grid Layouts",
                "Flexbox vs CSS Grid"
            ],
            practical: [
                "Create a Two-Column Layout",
                "Build a Photo Gallery",
                "Create a Product Grid",
                "Use Grid Areas",
                "Create Responsive Card Layouts",
                "Combine Grid with Flexbox"
            ],
            project: [
                "Create a Responsive Image Gallery"
            ]
        },

        {
            module: "Module 11: Responsive Web Design",
            theory: [
                "Introduction to Responsive Design",
                "Mobile-First Design",
                "Viewport Meta Tag",
                "CSS Media Queries",
                "Responsive Units",
                "Percentages and Relative Sizing",
                "REM and EM Units",
                "Responsive Images",
                "Flexible Containers",
                "Responsive Navigation",
                "Mobile, Tablet and Desktop Layouts"
            ],
            practical: [
                "Make a Website Mobile-Friendly",
                "Create Media Queries",
                "Adjust Layouts for Different Screens",
                "Make Images Responsive",
                "Build Responsive Navigation",
                "Test Websites at Different Viewport Sizes"
            ],
            project: [
                "Build a Fully Responsive Business Website"
            ]
        },

        {
            module: "Module 12: CSS Transitions, Transforms and Animations",
            theory: [
                "CSS Transitions",
                "Transition Duration and Timing",
                "Transform Property",
                "Scale, Rotate and Translate",
                "CSS Keyframes",
                "Animation Properties",
                "Hover Effects",
                "Button Animations",
                "Loading Animations",
                "Animation Performance Basics",
                "Reduced Motion Preferences"
            ],
            practical: [
                "Create Animated Buttons",
                "Add Hover Effects to Cards",
                "Rotate and Scale Elements",
                "Create Keyframe Animations",
                "Build a Simple Loading Animation",
                "Apply Smooth Transitions"
            ],
            project: [
                "Create an Animated Portfolio Section"
            ]
        },

        {
            module: "Module 13: Website Components and Layout Design",
            theory: [
                "Website Header Design",
                "Navigation Bar Design",
                "Hero Section",
                "About Section",
                "Services Section",
                "Cards and Content Sections",
                "Testimonials Section",
                "Contact Section",
                "Footer Design",
                "Consistent Spacing and Typography",
                "Reusable CSS Classes"
            ],
            practical: [
                "Create a Website Header",
                "Design a Hero Section",
                "Build Service Cards",
                "Create an About Section",
                "Design a Contact Section",
                "Create a Responsive Footer"
            ],
            project: [
                "Build a Complete Institute Homepage"
            ]
        },

        {
            module: "Module 14: Website Testing and Deployment Basics",
            theory: [
                "Website Testing Fundamentals",
                "Browser Compatibility",
                "HTML Validation",
                "CSS Debugging",
                "Using Browser Developer Tools",
                "Accessibility Basics",
                "Image Optimization",
                "File and Folder Organization",
                "Domain and Hosting Basics",
                "Static Website Deployment",
                "Introduction to Git and Version Control"
            ],
            practical: [
                "Inspect Website Elements",
                "Debug HTML and CSS",
                "Test Responsive Layouts",
                "Check Links and Images",
                "Organize Project Files",
                "Prepare a Website for Deployment",
                "Publish a Static Website Using a Suitable Hosting Service"
            ],
            project: [
                "Publish a Responsive Static Website"
            ]
        },

        {
            module: "Module 15: Final Website Projects",
            theory: [
                "Website Planning",
                "Wireframes and Page Structure",
                "Color and Typography Selection",
                "Responsive Layout Planning",
                "Reusable Components",
                "Testing and Quality Checks",
                "Project Documentation"
            ],
            practical: [
                "Plan Website Pages",
                "Create HTML Structure",
                "Write CSS Styles",
                "Implement Responsive Layouts",
                "Add Images and Navigation",
                "Test on Different Screen Sizes",
                "Prepare the Final Website"
            ],
            project: [
                "Personal Portfolio Website",
                "Computer Training Institute Website",
                "Business Landing Page",
                "Restaurant Website",
                "Responsive Product Showcase Website"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Introduction and HTML Fundamentals",
            duration: "2 Weeks"
        },
        {
            module: "HTML Forms, Tables and Semantic HTML",
            duration: "2 Weeks"
        },
        {
            module: "CSS Fundamentals and Styling",
            duration: "2 Weeks"
        },
        {
            module: "Box Model and Positioning",
            duration: "1 Week"
        },
        {
            module: "Flexbox and CSS Grid",
            duration: "2 Weeks"
        },
        {
            module: "Responsive Web Design",
            duration: "1 Week"
        },
        {
            module: "Animations and Website Components",
            duration: "1 Week"
        },
        {
            module: "Final Projects and Deployment",
            duration: "1 Week"
        }
    ],

    assessment: [
        "HTML Fundamentals Test",
        "HTML Forms and Tables Practical",
        "CSS Styling Test",
        "Flexbox and Grid Layout Practical",
        "Responsive Website Development Test",
        "Final Website Project",
        "Project Presentation"
    ]
},


    "computer-fundamentals": {
    title: "Computer Fundamentals",
    description: "Learn computer basics, hardware, software, operating systems, memory, networking, internet, and essential digital skills.",
    icon: "🖥️",
    duration: "2 Months",
    fees: "₹3,000",
    eligibility: "No Formal Qualification Required",
    mode: "Classroom / Online",

    overview: `
        The Computer Fundamentals course introduces students to
        computers and essential digital skills. Students learn about
        computer hardware, software, input and output devices,
        memory, operating systems, file management, networking,
        internet usage, email, and cybersecurity through practical
        exercises and hands-on computer training.
    `,

    skills: [
        "Computer Fundamentals",
        "History and Generations of Computers",
        "Computer Hardware",
        "Computer Software",
        "Input and Output Devices",
        "CPU and Memory",
        "RAM and ROM",
        "Storage Devices",
        "Operating System Basics",
        "Windows File Management",
        "Computer Networking",
        "Internet and Email",
        "Cybersecurity Awareness",
        "Basic Computer Troubleshooting",
        "Digital Literacy"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Computers",
            theory: [
                "Definition of a Computer",
                "Characteristics of Computers",
                "Applications of Computers",
                "Advantages and Limitations",
                "Basic Computer Terminology",
                "Data and Information",
                "IPO Cycle: Input, Process and Output",
                "Types of Computers",
                "Desktop and Laptop Computers",
                "Supercomputers and Mainframes",
                "Analog, Digital and Hybrid Computers"
            ],
            practical: [
                "Identify Different Types of Computers",
                "Understand Basic Computer Operations",
                "Identify Common Computer Components",
                "Practice Keyboard and Mouse Operations"
            ],
            project: [
                "Prepare a Chart Showing Types of Computers"
            ]
        },

        {
            module: "Module 2: History and Generations of Computers",
            theory: [
                "Early Calculating Devices",
                "Abacus",
                "Pascaline",
                "Charles Babbage and the Analytical Engine",
                "Ada Lovelace",
                "First Generation Computers",
                "Second Generation Computers",
                "Third Generation Computers",
                "Fourth Generation Computers",
                "Fifth Generation Computers",
                "Evolution of Modern Computers"
            ],
            practical: [
                "Identify Important Historical Computer Devices",
                "Compare Different Computer Generations",
                "Prepare a Computer History Timeline"
            ],
            project: [
                "Create a Timeline of Computer Generations"
            ]
        },

        {
            module: "Module 3: Computer Hardware",
            theory: [
                "Introduction to Computer Hardware",
                "System Unit",
                "Motherboard",
                "Processor and CPU",
                "RAM and ROM",
                "Hard Disk Drive",
                "Solid State Drive",
                "Power Supply Unit",
                "Graphics Processing Unit",
                "Ports and Connectors",
                "USB and HDMI",
                "Basic Hardware Compatibility"
            ],
            practical: [
                "Identify Hardware Components",
                "Recognize Common Ports and Connectors",
                "Identify RAM and Storage Devices",
                "Understand Desktop Computer Components",
                "View Basic System Information"
            ],
            project: [
                "Prepare a Computer Hardware Identification Chart"
            ]
        },

        {
            module: "Module 4: Input and Output Devices",
            theory: [
                "Introduction to Input Devices",
                "Keyboard",
                "Mouse",
                "Scanner",
                "Microphone",
                "Webcam",
                "Barcode Reader",
                "Touchscreen",
                "Introduction to Output Devices",
                "Monitor",
                "Printer",
                "Speakers and Headphones",
                "Projector",
                "Impact and Non-Impact Printers"
            ],
            practical: [
                "Practice Keyboard Operations",
                "Use a Mouse and Touchpad",
                "Identify Input Devices",
                "Identify Output Devices",
                "Understand Printer Types",
                "Connect Common Computer Peripherals"
            ],
            project: [
                "Prepare an Input and Output Devices Chart"
            ]
        },

        {
            module: "Module 5: Computer Memory and Storage",
            theory: [
                "Introduction to Computer Memory",
                "Primary and Secondary Memory",
                "RAM and ROM",
                "Cache Memory",
                "Registers",
                "Hard Disk and SSD",
                "Pen Drives",
                "Memory Cards",
                "Optical Discs",
                "Cloud Storage Basics",
                "Bits and Bytes",
                "KB, MB, GB and TB",
                "Volatile and Non-Volatile Memory"
            ],
            practical: [
                "Identify Different Storage Devices",
                "Check Available Disk Space",
                "View RAM and Storage Information",
                "Copy Files to External Storage",
                "Understand Basic Backup Methods"
            ],
            project: [
                "Prepare a Comparison Chart of Storage Devices"
            ]
        },

        {
            module: "Module 6: Computer Software",
            theory: [
                "Definition of Software",
                "System Software",
                "Application Software",
                "Utility Software",
                "Operating Systems",
                "Device Drivers",
                "Programming Software",
                "Open-Source Software",
                "Proprietary Software",
                "Licensed Software",
                "Software Installation and Updates"
            ],
            practical: [
                "Identify Installed Applications",
                "Open and Use Basic Applications",
                "Install Software with Proper Authorization",
                "Check Application Versions",
                "Understand Software Update Settings"
            ],
            project: [
                "Prepare a List of Common Software and Their Uses"
            ]
        },

        {
            module: "Module 7: Operating System Basics",
            theory: [
                "Introduction to Operating Systems",
                "Functions of an Operating System",
                "Types of Operating Systems",
                "Windows Operating System",
                "Linux Basics",
                "Mobile Operating Systems",
                "Graphical User Interface",
                "Desktop and Taskbar",
                "Start Menu",
                "Application Windows",
                "System Settings",
                "User Accounts"
            ],
            practical: [
                "Start and Shut Down a Computer",
                "Navigate the Desktop",
                "Open and Close Applications",
                "Use the Start Menu",
                "Change Basic System Settings",
                "View System Information"
            ],
            project: [
                "Prepare a Guide to Basic Operating System Operations"
            ]
        },

        {
            module: "Module 8: File and Folder Management",
            theory: [
                "Files and Folders",
                "File Names and Extensions",
                "Creating and Renaming Folders",
                "Copying and Moving Files",
                "Deleting and Restoring Files",
                "Recycle Bin",
                "File Explorer",
                "Search and Sort Operations",
                "Compressed Files",
                "File Permissions Basics",
                "Backup and Recovery Basics"
            ],
            practical: [
                "Create and Rename Folders",
                "Copy and Move Files",
                "Delete and Restore Files",
                "Search for Documents",
                "Sort Files by Name and Date",
                "Organize Documents into Folders"
            ],
            project: [
                "Create an Organized Digital Document Folder System"
            ]
        },

        {
            module: "Module 9: Computer Networking",
            theory: [
                "Introduction to Computer Networks",
                "Advantages of Networking",
                "LAN and WAN",
                "MAN Basics",
                "Wired and Wireless Networks",
                "Network Interface Card",
                "Router and Switch",
                "Modem Basics",
                "Wi-Fi and Ethernet",
                "IP Address Basics",
                "Client and Server",
                "Network Sharing Fundamentals"
            ],
            practical: [
                "Identify Networking Devices",
                "Connect to a Wi-Fi Network",
                "Understand Ethernet Connections",
                "View Basic Network Settings",
                "Practice Safe Network Usage"
            ],
            project: [
                "Draw a Basic Computer Network Diagram"
            ]
        },

        {
            module: "Module 10: Internet and Email",
            theory: [
                "Introduction to the Internet",
                "World Wide Web",
                "Websites and Web Pages",
                "Web Browsers",
                "Search Engines",
                "URLs and Hyperlinks",
                "Downloading and Uploading Files",
                "Email Address Structure",
                "Sending and Receiving Emails",
                "Email Attachments",
                "Cloud Storage Basics",
                "Online Forms",
                "Video Conferencing Basics"
            ],
            practical: [
                "Open and Use a Web Browser",
                "Search for Information Online",
                "Visit Websites",
                "Download and Upload Files",
                "Compose and Send an Email",
                "Attach Documents to an Email",
                "Use Online Forms"
            ],
            project: [
                "Prepare and Send a Professional Email with an Attachment"
            ]
        },

        {
            module: "Module 11: Cybersecurity and Computer Safety",
            theory: [
                "Introduction to Cybersecurity",
                "Computer Viruses",
                "Malware and Ransomware",
                "Antivirus Software",
                "Firewall Basics",
                "Strong Passwords",
                "Two-Factor Authentication",
                "Phishing and Online Fraud",
                "Safe Internet Browsing",
                "Personal Data Protection",
                "Software Updates",
                "Data Backup",
                "Social Engineering Awareness"
            ],
            practical: [
                "Identify Suspicious Emails",
                "Recognize Unsafe Links",
                "Practice Strong Password Management",
                "Review Basic Security Settings",
                "Understand Safe File Downloads",
                "Prepare a Data Backup Plan"
            ],
            project: [
                "Create a Computer and Internet Safety Guide"
            ]
        },

        {
            module: "Module 12: Basic Troubleshooting and Maintenance",
            theory: [
                "Introduction to Troubleshooting",
                "Common Computer Problems",
                "Computer Startup Issues",
                "Keyboard and Mouse Problems",
                "Printer Problems",
                "Internet Connectivity Issues",
                "Storage Space Management",
                "Software Not Responding",
                "System Updates",
                "Computer Cleaning and Maintenance",
                "Backup and Recovery",
                "When to Contact a Technician"
            ],
            practical: [
                "Check Cable Connections",
                "Restart Unresponsive Applications",
                "Check Available Storage Space",
                "Identify Basic Printer Issues",
                "Check Internet Connectivity",
                "Review System Updates",
                "Perform Basic File Backup"
            ],
            project: [
                "Prepare a Computer Troubleshooting Checklist"
            ]
        },

        {
            module: "Module 13: Final Practical and Revision",
            theory: [
                "Revision of Computer Fundamentals",
                "Revision of Hardware and Software",
                "Revision of Memory and Storage",
                "Revision of Operating Systems",
                "Revision of Networking",
                "Revision of Internet and Email",
                "Revision of Cybersecurity"
            ],
            practical: [
                "Identify Computer Hardware",
                "Manage Files and Folders",
                "Use Basic Operating System Features",
                "Search for Information Online",
                "Compose an Email",
                "Identify Common Security Risks",
                "Complete Basic Troubleshooting Exercises"
            ],
            project: [
                "Complete a Computer Fundamentals Practical Project"
            ]
        }
    ],

    durationBreakdown: [
        {
            module: "Introduction and Computer History",
            duration: "1 Week"
        },
        {
            module: "Hardware and Input/Output Devices",
            duration: "2 Weeks"
        },
        {
            module: "Memory, Storage and Software",
            duration: "1 Week"
        },
        {
            module: "Operating System and File Management",
            duration: "2 Weeks"
        },
        {
            module: "Computer Networking",
            duration: "1 Week"
        },
        {
            module: "Internet and Email",
            duration: "1 Week"
        },
        {
            module: "Cybersecurity and Troubleshooting",
            duration: "1 Week"
        },
        {
            module: "Final Practical and Assessment",
            duration: "1 Week"
        }
    ],

    assessment: [
        "Computer Fundamentals Theory Test",
        "Hardware Identification Practical",
        "Operating System Practical",
        "File Management Practical",
        "Internet and Email Practical",
        "Cybersecurity Awareness Test",
        "Final Practical Examination",
        "Project Submission"
    ]
},


    "internet-digital-skills": {
    title: "Internet & Digital Skills",
    description: "Learn internet browsing, email, online services, digital payments, cyber safety, and essential digital skills for everyday life and work.",
    icon: "fas fa-globe",
    duration: "2 Months",
    fees: "₹3,000",
    eligibility: "No formal educational qualification required",
    mode: "Offline / Online",

    overview: "The Internet & Digital Skills course helps students develop practical digital literacy. Students learn to use web browsers, search engines, email, online forms, cloud storage, video conferencing, digital payment services, and government portals safely and confidently.",

    skills: [
        "Internet and Web Browser Usage",
        "Search Engine Techniques",
        "Email Creation and Management",
        "Online Forms and Document Uploads",
        "File Downloads and Cloud Storage",
        "Video Conferencing",
        "Digital Payments and UPI Safety",
        "Social Media Awareness",
        "Government Online Services",
        "Cybersecurity and Online Fraud Prevention",
        "Digital Communication and Etiquette",
        "Basic Online Troubleshooting"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to the Internet",
            theory: [
                "What is the Internet?",
                "History and uses of the Internet",
                "Internet, WWW, and websites",
                "Introduction to URLs, domains, and web pages",
                "Understanding internet connections"
            ],
            practical: [
                "Identify common internet services",
                "Connect to a Wi-Fi network",
                "Check basic internet connectivity"
            ],
            project: [
                "Prepare a list of useful educational and informational websites"
            ]
        },
        {
            module: "Module 2: Web Browsers and Search Engines",
            theory: [
                "Introduction to web browsers",
                "Browser tabs, bookmarks, and history",
                "Search engines and search techniques",
                "Using keywords and search filters",
                "Identifying suspicious websites"
            ],
            practical: [
                "Browse websites using a web browser",
                "Search for educational information",
                "Save bookmarks and manage browser history",
                "Download a file from a trusted website"
            ],
            project: [
                "Find and organize ten useful websites for study and work"
            ]
        },
        {
            module: "Module 3: Email and Digital Communication",
            theory: [
                "Introduction to email",
                "Email address and account basics",
                "Inbox, Sent, Drafts, Spam, and Trash",
                "To, CC, and BCC fields",
                "Email etiquette and phishing awareness"
            ],
            practical: [
                "Create an email account where appropriate",
                "Compose, send, and reply to emails",
                "Attach and download files",
                "Organize emails using folders or labels"
            ],
            project: [
                "Write and send a professional email with an attachment"
            ]
        },
        {
            module: "Module 4: Online Forms and File Management",
            theory: [
                "Types of online forms",
                "Required fields and form validation",
                "Common document formats: PDF, JPG, PNG, and DOCX",
                "File size and upload limits",
                "Protecting personal information"
            ],
            practical: [
                "Fill out a sample online registration form",
                "Upload and download documents",
                "Rename and organize downloaded files",
                "Convert documents to PDF using suitable tools"
            ],
            project: [
                "Complete a sample online application using practice data"
            ]
        },
        {
            module: "Module 5: Cloud Storage and Online Collaboration",
            theory: [
                "Introduction to cloud storage",
                "Files, folders, and sharing permissions",
                "Cloud backup and synchronization",
                "Online document collaboration",
                "Privacy and account security"
            ],
            practical: [
                "Upload files to a cloud storage service",
                "Create and organize online folders",
                "Share a file with appropriate permissions",
                "Collaborate on an online document"
            ],
            project: [
                "Create a digital folder containing organized study documents"
            ]
        },
        {
            module: "Module 6: Digital Payments and Online Banking Awareness",
            theory: [
                "Introduction to digital payments",
                "UPI and QR-code payment basics",
                "Online banking and mobile banking awareness",
                "Understanding transaction status and receipts",
                "Recognizing payment scams and fake requests"
            ],
            practical: [
                "Identify legitimate payment interfaces",
                "Learn how to verify a recipient before payment",
                "Understand how to check transaction status",
                "Practice identifying suspicious payment messages"
            ],
            project: [
                "Prepare a digital payment safety checklist"
            ]
        },
        {
            module: "Module 7: Government and Online Public Services",
            theory: [
                "Introduction to online public services",
                "Government websites and official portals",
                "Online appointment and application systems",
                "Downloading certificates and receipts where available",
                "Avoiding fake government websites and agents"
            ],
            practical: [
                "Locate an official government service portal",
                "Find eligibility and application instructions",
                "Navigate a sample public-service website",
                "Identify the official contact and help sections"
            ],
            project: [
                "Prepare a guide to three useful official online services"
            ]
        },
        {
            module: "Module 8: Video Conferencing and Online Learning",
            theory: [
                "Introduction to video conferencing",
                "Microphone, camera, and screen-sharing controls",
                "Online classroom etiquette",
                "Learning platforms and digital resources",
                "Managing audio and video permissions"
            ],
            practical: [
                "Join a practice online meeting",
                "Mute and unmute the microphone",
                "Enable and disable the camera",
                "Share a screen when permitted"
            ],
            project: [
                "Participate in a mock online class or meeting"
            ]
        },
        {
            module: "Module 9: Social Media and Digital Citizenship",
            theory: [
                "Introduction to social media platforms",
                "Privacy settings and account visibility",
                "Responsible online communication",
                "Fake news, misinformation, and fact-checking",
                "Digital footprint and online reputation"
            ],
            practical: [
                "Review privacy settings on a practice account",
                "Check the reliability of an online claim",
                "Identify suspicious profiles and messages",
                "Practice respectful digital communication"
            ],
            project: [
                "Create a checklist for responsible social media use"
            ]
        },
        {
            module: "Module 10: Cybersecurity and Online Safety",
            theory: [
                "Common online threats and cyber fraud",
                "Strong passwords and password managers",
                "Two-factor authentication",
                "Phishing links, fake calls, and fraudulent messages",
                "Safe browsing and secure connections",
                "Protecting personal and financial information"
            ],
            practical: [
                "Create a strong sample password",
                "Identify suspicious emails and links",
                "Review account security settings",
                "Practice reporting and blocking suspicious accounts"
            ],
            project: [
                "Prepare a personal cybersecurity and fraud-prevention plan"
            ]
        },
        {
            module: "Module 11: Online Shopping and Digital Services",
            theory: [
                "Introduction to e-commerce",
                "Product search and comparison",
                "Understanding delivery, returns, and refunds",
                "Secure checkout and payment awareness",
                "Identifying fake offers and shopping websites"
            ],
            practical: [
                "Compare products on legitimate shopping websites",
                "Review a sample order and refund policy",
                "Identify warning signs of fraudulent offers",
                "Track a sample order using its official tracking page"
            ],
            project: [
                "Prepare a safe online shopping checklist"
            ]
        },
        {
            module: "Module 12: Digital Skills Assessment and Final Project",
            theory: [
                "Revision of internet and digital literacy concepts",
                "Online privacy and security review",
                "Digital communication best practices",
                "Common internet problems and solutions"
            ],
            practical: [
                "Search for reliable information online",
                "Send an email with an attachment",
                "Complete a sample online form",
                "Organize and share a digital file safely",
                "Identify suspicious links and messages"
            ],
            project: [
                "Complete a digital skills portfolio demonstrating essential internet tasks"
            ]
        }
    ],

    durationBreakdown: [
        {
            phase: "Internet Basics and Web Browsing",
            duration: "1 Week"
        },
        {
            phase: "Email, Online Forms, and File Management",
            duration: "1 Week"
        },
        {
            phase: "Cloud Storage and Online Collaboration",
            duration: "1 Week"
        },
        {
            phase: "Digital Payments and Government Services",
            duration: "1 Week"
        },
        {
            phase: "Video Conferencing and Social Media",
            duration: "1 Week"
        },
        {
            phase: "Cybersecurity and Online Safety",
            duration: "1 Week"
        },
        {
            phase: "Online Shopping and Digital Services",
            duration: "1 Week"
        },
        {
            phase: "Practical Revision and Final Project",
            duration: "1 Week"
        }
    ],

    assessment: {
        theory: "30%",
        practical: "50%",
        project: "20%"
    }
},


    "data-entry": {
    title: "Data Entry Operator",
    description: "Learn typing, data processing, spreadsheet management, document formatting, data accuracy, and professional data entry skills.",
    icon: "fas fa-keyboard",
    duration: "3 Months",
    fees: "₹5,000",
    eligibility: "Basic Computer Knowledge",
    mode: "Offline / Online",

    overview: "The Data Entry Operator course is designed to develop practical skills in typing, data input, document management, spreadsheet operations, record keeping, and data verification. Students learn to enter, organize, format, and maintain data accurately using common office applications.",

    skills: [
        "English Typing",
        "Hindi Typing Basics",
        "Typing Accuracy and Speed",
        "Data Entry and Data Processing",
        "MS Word Document Formatting",
        "MS Excel Data Management",
        "Spreadsheet Formulas and Functions",
        "Data Sorting and Filtering",
        "Data Cleaning and Validation",
        "PDF and Document Handling",
        "Record Keeping and File Management",
        "Data Confidentiality and Privacy",
        "Data Quality Checking",
        "Professional Data Entry Practices"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Data Entry",
            theory: [
                "Meaning and importance of data entry",
                "Role and responsibilities of a data entry operator",
                "Types of data and data sources",
                "Manual and computerized data entry",
                "Accuracy, speed, and productivity"
            ],
            practical: [
                "Identify different types of data",
                "Enter sample information into a text editor",
                "Practice accurate keyboard input",
                "Compare entered data against the original source"
            ],
            project: [
                "Create a basic student information record"
            ]
        },
        {
            module: "Module 2: Computer and Keyboard Fundamentals",
            theory: [
                "Basic computer operations",
                "Keyboard layout and key functions",
                "Numeric keypad and special characters",
                "Using the mouse and keyboard shortcuts",
                "File and folder management"
            ],
            practical: [
                "Practice typing letters, numbers, and symbols",
                "Use keyboard shortcuts for editing text",
                "Create, rename, copy, and move files",
                "Save documents in appropriate folders"
            ],
            project: [
                "Create an organized folder containing sample data files"
            ]
        },
        {
            module: "Module 3: English Typing Skills",
            theory: [
                "Correct typing posture and finger placement",
                "Home-row keys and touch typing",
                "Typing rhythm and consistency",
                "Common typing errors",
                "Words per minute (WPM) and accuracy percentage"
            ],
            practical: [
                "Practice home-row typing",
                "Complete timed typing exercises",
                "Type paragraphs from printed or digital sources",
                "Identify and correct typing mistakes"
            ],
            project: [
                "Complete a timed English typing test and record the result"
            ]
        },
        {
            module: "Module 4: Hindi Typing Basics",
            theory: [
                "Introduction to Hindi typing",
                "Hindi keyboard layouts and input methods",
                "Unicode Hindi text",
                "Hindi punctuation and special characters",
                "Common Hindi typing mistakes"
            ],
            practical: [
                "Enable a Hindi input method",
                "Type common Hindi words and sentences",
                "Enter Hindi names and addresses",
                "Review and correct Hindi text"
            ],
            project: [
                "Prepare a sample Hindi information sheet"
            ]
        },
        {
            module: "Module 5: MS Word for Data Entry",
            theory: [
                "Introduction to word processing",
                "Creating and saving documents",
                "Text formatting and paragraph alignment",
                "Page setup, margins, and spacing",
                "Tables, headers, and footers",
                "Printing and exporting documents to PDF"
            ],
            practical: [
                "Create a formatted document",
                "Enter and edit customer information",
                "Create a table of names and addresses",
                "Format a simple application or report",
                "Save and export the document"
            ],
            project: [
                "Create a formatted customer or student record sheet"
            ]
        },
        {
            module: "Module 6: MS Excel Fundamentals",
            theory: [
                "Introduction to spreadsheets",
                "Workbooks, worksheets, rows, and columns",
                "Cells, ranges, and cell references",
                "Entering and editing data",
                "Cell formatting and number formats",
                "Saving and managing workbooks"
            ],
            practical: [
                "Create a new workbook",
                "Enter names, dates, numbers, and addresses",
                "Format a spreadsheet for readability",
                "Adjust column widths and row heights",
                "Use AutoFill for repetitive entries"
            ],
            project: [
                "Create a student or employee database in Excel"
            ]
        },
        {
            module: "Module 7: Excel Formulas and Functions",
            theory: [
                "Introduction to formulas",
                "Basic arithmetic operations",
                "SUM, AVERAGE, MIN, and MAX",
                "COUNT and COUNTA",
                "Relative and absolute cell references",
                "Basic IF function"
            ],
            practical: [
                "Calculate totals and averages",
                "Count records in a dataset",
                "Apply formulas to multiple rows",
                "Identify and correct common formula errors"
            ],
            project: [
                "Create a marksheet or daily sales calculation sheet"
            ]
        },
        {
            module: "Module 8: Data Sorting, Filtering, and Validation",
            theory: [
                "Sorting records alphabetically and numerically",
                "Using filters to find specific records",
                "Removing duplicate entries",
                "Data validation and dropdown lists",
                "Finding and correcting inconsistent data"
            ],
            practical: [
                "Sort a customer list",
                "Filter records by category or date",
                "Identify duplicate entries",
                "Create a dropdown list",
                "Correct inconsistent spelling and formatting"
            ],
            project: [
                "Clean and organize a sample customer database"
            ]
        },
        {
            module: "Module 9: Data Cleaning and Verification",
            theory: [
                "Importance of data quality",
                "Identifying missing and incorrect values",
                "Checking names, dates, phone numbers, and addresses",
                "Consistent date and number formats",
                "Cross-checking data against source documents"
            ],
            practical: [
                "Compare records with a source document",
                "Identify missing information",
                "Correct spelling and formatting errors",
                "Check duplicate records",
                "Maintain a list of unresolved discrepancies"
            ],
            project: [
                "Verify and correct a dataset containing intentional errors"
            ]
        },
        {
            module: "Module 10: PDF and Document Handling",
            theory: [
                "Common document file formats",
                "PDF viewing and printing",
                "Copying information from authorized documents",
                "Scanning and OCR basics",
                "Limitations of automatic text recognition",
                "Safe file naming and document storage"
            ],
            practical: [
                "Organize sample PDF files",
                "Extract text from a practice document",
                "Review OCR output for errors",
                "Convert supported documents to PDF",
                "Store files in a structured folder system"
            ],
            project: [
                "Convert a sample document into a verified digital record"
            ]
        },
        {
            module: "Module 11: Database and Record Management",
            theory: [
                "Introduction to databases",
                "Records, fields, and tables",
                "Unique identifiers and duplicate records",
                "Basic database organization",
                "Searching and retrieving records"
            ],
            practical: [
                "Design a simple record table",
                "Assign a unique ID to each record",
                "Search for specific entries",
                "Update records while preserving consistency",
                "Export records to a spreadsheet"
            ],
            project: [
                "Create a basic inventory or employee record database"
            ]
        },
        {
            module: "Module 12: Data Entry Speed and Productivity",
            theory: [
                "Balancing speed with accuracy",
                "Common causes of data entry errors",
                "Efficient keyboard shortcuts",
                "Batch data entry techniques",
                "Time management and task prioritization"
            ],
            practical: [
                "Complete timed data entry exercises",
                "Calculate typing speed and accuracy",
                "Use shortcuts to improve efficiency",
                "Compare results from multiple practice sessions"
            ],
            project: [
                "Complete a timed data entry assignment with an accuracy report"
            ]
        },
        {
            module: "Module 13: Data Privacy and Professional Ethics",
            theory: [
                "Importance of data confidentiality",
                "Handling personal and sensitive information",
                "Password safety and account security",
                "Recognizing phishing and suspicious files",
                "Authorized access and responsible data handling",
                "Secure storage and sharing practices"
            ],
            practical: [
                "Identify confidential fields in sample records",
                "Practice safe file sharing",
                "Create a secure file organization plan",
                "Identify suspicious emails and attachments"
            ],
            project: [
                "Prepare a data privacy and security checklist"
            ]
        },
        {
            module: "Module 14: Data Entry Projects and Final Assessment",
            theory: [
                "Revision of data entry concepts",
                "Accuracy and quality control",
                "Document formatting standards",
                "Reviewing work before submission"
            ],
            practical: [
                "Enter records from a sample source document",
                "Prepare and format an Excel dataset",
                "Sort, filter, and verify records",
                "Correct errors and remove duplicates",
                "Submit the final files using proper naming conventions"
            ],
            project: [
                "Complete an end-to-end data entry project involving data input, formatting, verification, and final submission"
            ]
        }
    ],

    durationBreakdown: [
        {
            phase: "Computer and Keyboard Fundamentals",
            duration: "1 Week"
        },
        {
            phase: "English and Hindi Typing Practice",
            duration: "2 Weeks"
        },
        {
            phase: "MS Word and Document Formatting",
            duration: "2 Weeks"
        },
        {
            phase: "MS Excel and Formulas",
            duration: "3 Weeks"
        },
        {
            phase: "Data Cleaning and Verification",
            duration: "1 Week"
        },
        {
            phase: "PDF and Database Management",
            duration: "1 Week"
        },
        {
            phase: "Speed, Privacy, and Professional Practices",
            duration: "1 Week"
        },
        {
            phase: "Projects and Final Assessment",
            duration: "2 Weeks"
        }
    ],

    assessment: {
        theory: "20%",
        practical: "50%",
        project: "30%"
    }
},


   "graphic-designing": {
    title: "Graphic Designing",
    description: "Learn graphic design, Photoshop, CorelDRAW, Illustrator, logo creation, branding, and professional creative design skills.",
    icon: "fas fa-palette",
    duration: "6 Months",
    fees: "₹12,000",
    eligibility: "Basic Computer Knowledge Preferred",
    mode: "Offline / Online",

    overview: "The Graphic Designing course develops creative and technical skills for creating professional graphics. Students learn design principles, color theory, typography, image editing, vector graphics, logo design, branding, advertising materials, print design, and social media creatives through practical assignments and projects.",

    skills: [
        "Graphic Design Fundamentals",
        "Color Theory and Color Combinations",
        "Typography and Font Selection",
        "Adobe Photoshop",
        "CorelDRAW",
        "Adobe Illustrator",
        "Image Editing and Photo Retouching",
        "Logo and Icon Design",
        "Poster and Banner Design",
        "Business Card and Brochure Design",
        "Social Media Graphics",
        "Brand Identity Design",
        "Print Design and Layout",
        "Digital Advertising Creatives",
        "Portfolio Development"
    ],

    syllabus: [
        {
            module: "Module 1: Introduction to Graphic Designing",
            theory: [
                "What is graphic designing?",
                "Importance of graphic design",
                "Types of graphic design",
                "Raster and vector graphics",
                "Introduction to graphic design software",
                "Common image and design file formats"
            ],
            practical: [
                "Explore graphic design software interfaces",
                "Identify raster and vector images",
                "Open, save, and organize design files",
                "Analyze existing logos and advertisements"
            ],
            project: [
                "Create a simple introductory graphic design composition"
            ]
        },
        {
            module: "Module 2: Design Principles and Composition",
            theory: [
                "Balance and visual hierarchy",
                "Contrast and emphasis",
                "Alignment and proximity",
                "Repetition and consistency",
                "White space and visual flow",
                "Grid systems and layout composition"
            ],
            practical: [
                "Arrange text and images in a layout",
                "Create balanced compositions",
                "Apply alignment and spacing rules",
                "Redesign a poorly arranged poster"
            ],
            project: [
                "Design a promotional poster using design principles"
            ]
        },
        {
            module: "Module 3: Color Theory and Typography",
            theory: [
                "Primary, secondary, and tertiary colors",
                "Color wheel and color harmony",
                "RGB and CMYK color modes",
                "Color psychology and brand colors",
                "Typography terminology",
                "Font families, sizes, weights, and spacing",
                "Readability and font pairing"
            ],
            practical: [
                "Create harmonious color palettes",
                "Compare RGB and CMYK documents",
                "Choose suitable fonts for different designs",
                "Create typographic layouts",
                "Improve readability through spacing"
            ],
            project: [
                "Create a typography and color palette design sheet"
            ]
        },
        {
            module: "Module 4: Adobe Photoshop Fundamentals",
            theory: [
                "Introduction to Adobe Photoshop",
                "Workspace, tools, and panels",
                "Image resolution and canvas size",
                "Layers and layer management",
                "Selection tools and transformations",
                "Common image formats"
            ],
            practical: [
                "Create and save a Photoshop document",
                "Use selection and crop tools",
                "Work with layers and layer groups",
                "Resize and transform images",
                "Export images in suitable formats"
            ],
            project: [
                "Create a promotional graphic using Photoshop"
            ]
        },
        {
            module: "Module 5: Photoshop Image Editing and Retouching",
            theory: [
                "Layer masks and non-destructive editing",
                "Adjustment layers and color correction",
                "Brush tools and painting basics",
                "Healing and retouching tools",
                "Background removal techniques",
                "Blending modes and opacity"
            ],
            practical: [
                "Correct brightness, contrast, and colors",
                "Remove unwanted objects from practice images",
                "Retouch a portrait using suitable tools",
                "Remove or replace an image background",
                "Combine multiple images into one composition"
            ],
            project: [
                "Create a professional photo-editing composition"
            ]
        },
        {
            module: "Module 6: Photoshop Advanced Design Techniques",
            theory: [
                "Photo manipulation fundamentals",
                "Clipping masks and smart objects",
                "Text effects and layer styles",
                "Compositing and realistic shadows",
                "Working with textures and overlays",
                "Export settings for web and print"
            ],
            practical: [
                "Create text effects",
                "Combine images using masks",
                "Design a digital advertising creative",
                "Prepare web-ready graphics",
                "Export a high-quality design"
            ],
            project: [
                "Design an advertising poster using advanced Photoshop techniques"
            ]
        },
        {
            module: "Module 7: CorelDRAW Fundamentals",
            theory: [
                "Introduction to CorelDRAW",
                "Vector graphics and object properties",
                "Shapes, lines, and drawing tools",
                "Fill, outline, and color controls",
                "Object selection and transformation",
                "Page setup and document management"
            ],
            practical: [
                "Create shapes and basic illustrations",
                "Arrange and align objects",
                "Apply fills, outlines, and colors",
                "Use object grouping and duplication",
                "Save and export vector designs"
            ],
            project: [
                "Create a simple vector illustration in CorelDRAW"
            ]
        },
        {
            module: "Module 8: CorelDRAW for Print Design",
            theory: [
                "Working with artistic and paragraph text",
                "Text alignment and formatting",
                "Combining and shaping vector objects",
                "Business card and letterhead layout",
                "Brochure and flyer design",
                "Bleed, margins, and print preparation"
            ],
            practical: [
                "Design a business card",
                "Create a letterhead",
                "Prepare a promotional flyer",
                "Align text and graphics accurately",
                "Export a print-ready PDF"
            ],
            project: [
                "Design a complete business stationery set"
            ]
        },
        {
            module: "Module 9: Adobe Illustrator Fundamentals",
            theory: [
                "Introduction to Adobe Illustrator",
                "Vector paths and anchor points",
                "Pen, shape, and drawing tools",
                "Stroke and fill properties",
                "Pathfinder and object arrangement",
                "Artboards and vector export formats"
            ],
            practical: [
                "Draw shapes and custom paths",
                "Edit anchor points and curves",
                "Combine and subtract vector shapes",
                "Create simple icons",
                "Export vector artwork in suitable formats"
            ],
            project: [
                "Create a set of custom vector icons"
            ]
        },
        {
            module: "Module 10: Logo Design and Brand Identity",
            theory: [
                "Characteristics of effective logos",
                "Types of logos and visual symbols",
                "Brand personality and visual identity",
                "Concept development and sketching",
                "Scalability and logo readability",
                "Logo variations and brand colors"
            ],
            practical: [
                "Develop logo concepts from a design brief",
                "Create vector logo artwork",
                "Prepare color and monochrome versions",
                "Test logo readability at different sizes",
                "Prepare basic brand identity guidelines"
            ],
            project: [
                "Design a logo and basic brand identity for a fictional business"
            ]
        },
        {
            module: "Module 11: Social Media and Digital Marketing Design",
            theory: [
                "Introduction to social media graphics",
                "Design requirements for different platforms",
                "Visual hierarchy for digital advertisements",
                "Promotional banners and campaign graphics",
                "Consistency across multiple designs",
                "Optimizing images for digital use"
            ],
            practical: [
                "Create a social media post",
                "Design a promotional banner",
                "Create a YouTube thumbnail",
                "Design a digital advertisement",
                "Adapt a design to different aspect ratios"
            ],
            project: [
                "Create a social media campaign with five coordinated designs"
            ]
        },
        {
            module: "Module 12: Brochure, Flyer, and Poster Design",
            theory: [
                "Layout planning and information hierarchy",
                "Single-page and multi-page design basics",
                "Image placement and text wrapping",
                "Using grids and consistent spacing",
                "Print dimensions and resolution",
                "Proofreading and pre-print checks"
            ],
            practical: [
                "Design a promotional flyer",
                "Create a multi-section brochure",
                "Design an event poster",
                "Prepare a consistent layout system",
                "Check image quality and document settings"
            ],
            project: [
                "Create a promotional design set for an event or business"
            ]
        },
        {
            module: "Module 13: Image Formats and Print Production",
            theory: [
                "JPEG, PNG, SVG, PDF, TIFF, and PSD",
                "Raster and vector output",
                "Resolution and image quality",
                "RGB and CMYK workflows",
                "Bleed, trim, and safe margins",
                "Fonts, linked images, and file packaging"
            ],
            practical: [
                "Export designs in multiple file formats",
                "Prepare a high-resolution print design",
                "Check page size, margins, and bleed",
                "Review colors and image resolution",
                "Organize editable and final output files"
            ],
            project: [
                "Prepare a print-ready poster and its editable source file"
            ]
        },
        {
            module: "Module 14: Creative Briefs and Professional Workflow",
            theory: [
                "Understanding client requirements",
                "Creating mood boards and design references",
                "Planning design concepts",
                "Managing revisions and feedback",
                "Organizing project files and versions",
                "Copyright and responsible use of design assets"
            ],
            practical: [
                "Interpret a sample client brief",
                "Create a mood board",
                "Present alternative design concepts",
                "Apply revision feedback",
                "Organize source files and final exports"
            ],
            project: [
                "Complete a design assignment based on a simulated client brief"
            ]
        },
        {
            module: "Module 15: Portfolio Development and Final Project",
            theory: [
                "Importance of a graphic design portfolio",
                "Selecting and presenting strong projects",
                "Explaining design decisions",
                "Preparing work for online presentation",
                "Professional communication and file delivery"
            ],
            practical: [
                "Select and refine completed projects",
                "Prepare project previews and mockups",
                "Organize portfolio files",
                "Present design concepts and final outcomes",
                "Review work for quality and consistency"
            ],
            project: [
                "Create a portfolio containing a logo, business stationery, poster, brochure, photo-editing composition, and social media campaign"
            ]
        }
    ],

    durationBreakdown: [
        {
            phase: "Design Fundamentals, Color Theory, and Typography",
            duration: "2 Weeks"
        },
        {
            phase: "Adobe Photoshop Basics and Image Editing",
            duration: "4 Weeks"
        },
        {
            phase: "CorelDRAW and Print Design",
            duration: "3 Weeks"
        },
        {
            phase: "Adobe Illustrator and Vector Graphics",
            duration: "3 Weeks"
        },
        {
            phase: "Logo Design and Brand Identity",
            duration: "2 Weeks"
        },
        {
            phase: "Social Media and Advertising Design",
            duration: "2 Weeks"
        },
        {
            phase: "Print Production and Professional Workflow",
            duration: "2 Weeks"
        },
        {
            phase: "Portfolio Development and Final Projects",
            duration: "2 Weeks"
        }
    ],

    assessment: {
        theory: "20%",
        practical: "50%",
        project: "30%"
    }
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
        
        syllabusItem.className = "syllabus-item";
        
        // Support both string and object syllabus items
        const isObject =
            item !== null && typeof item === "object";
        
        const moduleTitle = isObject ?
            (item.module || item.title || "Course Module") :
            item;
        
        let extraContent = "";
        
        if (isObject) {
            
            if (item.theory && item.theory.length) {
                extraContent += `
                    <h4>Theory Syllabus</h4>
                    <ul>
                        ${item.theory.map(topic =>
                            `<li>${topic}</li>`
                        ).join("")}
                    </ul>
                `;
            }
            
            if (item.practical && item.practical.length) {
                extraContent += `
                    <h4>Practical Training</h4>
                    <ul>
                        ${item.practical.map(topic =>
                            `<li>${topic}</li>`
                        ).join("")}
                    </ul>
                `;
            }
            
            if (item.project && item.project.length) {
                extraContent += `
                    <h4>Practical Projects</h4>
                    <ul>
                        ${item.project.map(topic =>
                            `<li>${topic}</li>`
                        ).join("")}
                    </ul>
                `;
            }
            
            if (item.topics && item.topics.length) {
                extraContent += `
                    <h4>Additional Topics</h4>
                    <ul>
                        ${item.topics.map(topic =>
                            `<li>${topic}</li>`
                        ).join("")}
                    </ul>
                `;
            }
        }
        
        syllabusItem.innerHTML =
            
            '<div class="syllabus-item-number">' +
            String(index + 1).padStart(2, "0") +
            '</div>' +
            
            '<div class="syllabus-item-content">' +
            
            '<strong>' +
            moduleTitle +
            '</strong>' +
            
            '<span>' +
            (isObject ?
                'Detailed Course Module' :
                'Course Module') +
            '</span>' +
            
            extraContent +
            
            '</div>';
        
        syllabusList.appendChild(syllabusItem);
        
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

const moduleTitle = typeof item === "string"
    ? item
    : (item.module || item.title || item.name || `Module ${index + 1}`);

const details = [];

if (typeof item === "object" && item !== null) {

    if (item.description) {
        details.push(`<div style="margin-top:5px;">${item.description}</div>`);
    }

    if (item.theory) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#1d4ed8;">Theory:</strong>
                ${Array.isArray(item.theory) ? item.theory.join(", ") : item.theory}
            </div>
        `);
    }

    if (item.practical) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#059669;">Practical:</strong>
                ${Array.isArray(item.practical) ? item.practical.join(", ") : item.practical}
            </div>
        `);
    }

    if (item.project) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#7c3aed;">Project:</strong>
                ${Array.isArray(item.project) ? item.project.join(", ") : item.project}
            </div>
        `);
    }

    if (Array.isArray(item.projects) && item.projects.length) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#7c3aed;">Projects:</strong>
                ${item.projects.join(", ")}
            </div>
        `);
    }
}

return `
    <div style="
        display:flex;
        align-items:flex-start;
        gap:12px;
        padding:12px;
        margin-bottom:8px;
        background:#f6f8fc;
        border:1px solid #e2e8f0;
        border-radius:8px;
        page-break-inside:avoid;
        break-inside:avoid;
    ">

        <div style="
            width:28px;
            height:28px;
            min-width:28px;
            border-radius:7px;
            background:#2563eb;
            color:white;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:9px;
            font-weight:700;
        ">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <div style="
            flex:1;
            min-width:0;
            color:#334155;
            font-size:11px;
            line-height:1.6;
            overflow-wrap:break-word;
        ">

            <div style="
                font-size:12px;
                font-weight:700;
                color:#1e293b;
            ">
                ${moduleTitle}
            </div>

            ${details.join("")}

        </div>

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
            


        /* Create PDF */

        const {
            jsPDF
        } = window.jspdf;


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
            canvas.height *
            imageWidth /
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
                heightLeft -
                imageHeight +
                10;

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
        pdfContent.style.padding = "32px";
pdfContent.style.border = "3px solid #1d4ed8";
pdfContent.style.borderRadius = "18px";
pdfContent.style.boxSizing = "border-box";
pdfContent.style.width = "794px";
pdfContent.style.background = "#ffffff";
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

const moduleTitle = typeof item === "string"
    ? item
    : (item.module || item.title || item.name || `Module ${index + 1}`);

const details = [];

if (typeof item === "object" && item !== null) {

    if (item.description) {
        details.push(`<div style="margin-top:5px;">${item.description}</div>`);
    }

    if (item.theory) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#1d4ed8;">Theory:</strong>
                ${Array.isArray(item.theory) ? item.theory.join(", ") : item.theory}
            </div>
        `);
    }

    if (item.practical) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#059669;">Practical:</strong>
                ${Array.isArray(item.practical) ? item.practical.join(", ") : item.practical}
            </div>
        `);
    }

    if (item.project) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#7c3aed;">Project:</strong>
                ${Array.isArray(item.project) ? item.project.join(", ") : item.project}
            </div>
        `);
    }

    if (Array.isArray(item.projects) && item.projects.length) {
        details.push(`
            <div style="margin-top:5px;">
                <strong style="color:#7c3aed;">Projects:</strong>
                ${item.projects.join(", ")}
            </div>
        `);
    }
}

return `
    <div style="
        display:flex;
        align-items:flex-start;
        gap:12px;
        padding:12px;
        margin-bottom:8px;
        background:#f6f8fc;
        border:1px solid #e2e8f0;
        border-radius:8px;
        page-break-inside:avoid;
        break-inside:avoid;
    ">

        <div style="
            width:28px;
            height:28px;
            min-width:28px;
            border-radius:7px;
            background:#2563eb;
            color:white;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:9px;
            font-weight:700;
        ">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <div style="
            flex:1;
            min-width:0;
            color:#334155;
            font-size:11px;
            line-height:1.6;
            overflow-wrap:break-word;
        ">

            <div style="
                font-size:12px;
                font-weight:700;
                color:#1e293b;
            ">
                ${moduleTitle}
            </div>

            ${details.join("")}

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

        /* Create PDF */

const { jsPDF } = window.jspdf;

const pdf = new jsPDF("p", "mm", "a4");

const pageWidth = pdf.internal.pageSize.getWidth();
const pageHeight = pdf.internal.pageSize.getHeight();

const margin = 12;
const topMargin = 15;
const bottomMargin = 15;

const imageWidth = pageWidth - (margin * 2);
const imageHeight = canvas.height * imageWidth / canvas.width;

const usableHeight = pageHeight - topMargin - bottomMargin;

let remainingHeight = imageHeight;
let sourceY = 0;

while (remainingHeight > 0) {

const sliceHeight = Math.min(usableHeight, remainingHeight);

const pageCanvas = document.createElement("canvas");

pageCanvas.width = canvas.width;
pageCanvas.height = Math.ceil(sliceHeight * canvas.width / imageWidth);

const ctx = pageCanvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

ctx.drawImage(
    canvas,
    0,
    Math.round(sourceY * canvas.width / imageWidth),
    canvas.width,
    pageCanvas.height,
    0,
    0,
    pageCanvas.width,
    pageCanvas.height
);

if (pdf.getNumberOfPages() > 1) {
    pdf.addPage();
}

pdf.addImage(
    pageCanvas.toDataURL("image/jpeg", 0.95),
    "JPEG",
    margin,
    topMargin,
    imageWidth,
    sliceHeight
);

sourceY += sliceHeight;
remainingHeight -= sliceHeight;

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
