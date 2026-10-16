const EXCEL_QUESTIONS = [

    // =========================
    // EXCEL BASIC
    // =========================

    {
        question: "MS Excel मुख्य रूप से किस कार्य के लिए उपयोग किया जाता है?",
        options: [
            "Video Editing",
            "Spreadsheet और Data Calculation",
            "Operating System बनाने",
            "Photo Editing"
        ],
        answer: 1
    },

    {
        question: "MS Excel की फाइल को सामान्यतः क्या कहा जाता है?",
        options: [
            "Document",
            "Presentation",
            "Workbook",
            "Database Server"
        ],
        answer: 2
    },

    {
        question: "Excel में Row और Column के मिलने से क्या बनता है?",
        options: [
            "Cell",
            "Workbook",
            "Ribbon",
            "Formula Bar"
        ],
        answer: 0
    },

    {
        question: "Excel में Columns की पहचान सामान्यतः किससे होती है?",
        options: [
            "केवल Symbols से",
            "केवल Numbers से",
            "Roman Numbers से",
            "Letters से"
        ],
        answer: 3
    },

    {
        question: "Excel में Rows की पहचान किससे होती है?",
        options: [
            "Letters से",
            "Numbers से",
            "Colors से",
            "Symbols से"
        ],
        answer: 1
    },

    {
        question: "Excel में Formula किस चिन्ह से शुरू होता है?",
        options: [
            "#",
            "@",
            "=",
            "&"
        ],
        answer: 2
    },

    {
        question: "Excel में वर्तमान Cell के Address को क्या कहते हैं?",
        options: [
            "Cell Reference",
            "Page Reference",
            "File Reference",
            "Sheet Reference"
        ],
        answer: 0
    },

    {
        question: "Excel में A1 Cell का अर्थ क्या है?",
        options: [
            "Row A और Column 1",
            "Sheet A और Row 1",
            "Column 1 और Sheet A",
            "Column A और Row 1"
        ],
        answer: 3
    },

    {
        question: "Excel में नई Workbook बनाने की Shortcut Key क्या है?",
        options: [
            "Ctrl + O",
            "Ctrl + N",
            "Ctrl + P",
            "Ctrl + W"
        ],
        answer: 1
    },

    {
        question: "Excel Workbook को Save करने की Shortcut Key क्या है?",
        options: [
            "Ctrl + S",
            "Ctrl + X",
            "Ctrl + F",
            "Ctrl + E"
        ],
        answer: 0
    },

    // =========================
    // EXCEL MENU AND INTERFACE
    // =========================

    {
        question: "Excel में Font, Alignment और Number Formatting के विकल्प मुख्य रूप से किस Tab में मिलते हैं?",
        options: [
            "View",
            "Data",
            "Home",
            "Review"
        ],
        answer: 2
    },

    {
        question: "Excel में Chart बनाने के लिए सामान्यतः किस Tab का उपयोग किया जाता है?",
        options: [
            "Review",
            "Insert",
            "View",
            "File"
        ],
        answer: 1
    },

    {
        question: "Excel में Page Margins और Page Orientation बदलने के लिए कौन-सा Tab उपयोगी है?",
        options: [
            "Formulas",
            "Data",
            "Home",
            "Page Layout"
        ],
        answer: 3
    },

    {
        question: "Excel में Workbook की शीट का नाम बदलने के लिए क्या किया जा सकता है?",
        options: [
            "Sheet Tab पर Double-click करना",
            "Formula Bar बंद करना",
            "Status Bar पर Click करना",
            "Zoom बदलना"
        ],
        answer: 0
    },

    {
        question: "Excel में किसी शब्द या संख्या को खोजने की Shortcut Key क्या है?",
        options: [
            "Ctrl + H",
            "Ctrl + G",
            "Ctrl + F",
            "Ctrl + D"
        ],
        answer: 2
    },

    {
        question: "Excel में Find and Replace खोलने की Shortcut Key क्या है?",
        options: [
            "Ctrl + R",
            "Ctrl + H",
            "Ctrl + K",
            "Ctrl + T"
        ],
        answer: 1
    },

    {
        question: "Excel में चुने हुए Data को Ascending या Descending क्रम में लगाने के लिए किसका उपयोग होता है?",
        options: [
            "Sort",
            "Freeze Panes",
            "Wrap Text",
            "Merge Cells"
        ],
        answer: 0
    },

    {
        question: "Excel में Data में से शर्त के अनुसार कुछ Records दिखाने के लिए किसका उपयोग होता है?",
        options: [
            "WordArt",
            "Page Break",
            "Zoom",
            "Filter"
        ],
        answer: 3
    },

    {
        question: "Excel में किसी Cell के Text को कई Lines में दिखाने के लिए कौन-सा विकल्प उपयोग होता है?",
        options: [
            "Merge & Center",
            "Wrap Text",
            "Sort",
            "AutoSum"
        ],
        answer: 1
    },

    {
        question: "Excel में कई Cells को एक Cell में मिलाने के लिए किस विकल्प का उपयोग किया जाता है?",
        options: [
            "Format Painter",
            "Conditional Formatting",
            "Merge Cells",
            "Data Validation"
        ],
        answer: 2
    },

    // =========================
    // EXCEL FORMULAS AND FUNCTIONS
    // =========================

    {
        question: "A1 से A10 तक की संख्याओं का कुल निकालने के लिए कौन-सा Formula सही है?",
        options: [
            "=SUM(A1:A10)",
            "=TOTAL(A1-A10)",
            "=ADD(A1:A10)",
            "=PLUS(A1:A10)"
        ],
        answer: 0
    },

    {
        question: "A1 से A5 तक की संख्याओं का Average निकालने के लिए कौन-सा Function उपयोग होता है?",
        options: [
            "SUM",
            "COUNT",
            "MAX",
            "AVERAGE"
        ],
        answer: 3
    },

    {
        question: "किसी Range में सबसे बड़ी संख्या खोजने के लिए कौन-सा Function उपयोग होता है?",
        options: [
            "MIN",
            "MAX",
            "COUNT",
            "ROUND"
        ],
        answer: 1
    },

    {
        question: "किसी Range में सबसे छोटी संख्या खोजने के लिए कौन-सा Function उपयोग होता है?",
        options: [
            "MAX",
            "SUM",
            "MIN",
            "AVERAGE"
        ],
        answer: 2
    },

    {
        question: "Excel में शर्त के आधार पर अलग-अलग परिणाम देने के लिए कौन-सा Function उपयोग होता है?",
        options: [
            "IF",
            "SUM",
            "MAX",
            "LEN"
        ],
        answer: 0
    },

    {
        question: "=COUNT(A1:A10) Function क्या गिनता है?",
        options: [
            "सभी खाली Cells",
            "केवल Text वाले Cells",
            "केवल Formula वाले Cells",
            "संख्याएँ रखने वाले Cells"
        ],
        answer: 3
    },

    {
        question: "किसी Range में खाली न होने वाले Cells की संख्या गिनने के लिए कौन-सा Function उपयोग होता है?",
        options: [
            "COUNTBLANK",
            "COUNTA",
            "SUM",
            "AVERAGE"
        ],
        answer: 1
    },

    {
        question: "COUNTIF Function का मुख्य कार्य क्या है?",
        options: [
            "Chart बनाना",
            "Text को Bold करना",
            "शर्त पूरी करने वाले Cells को गिनना",
            "Worksheet Delete करना"
        ],
        answer: 2
    },

    {
        question: "=ROUND(12.567,2) का परिणाम क्या होगा?",
        options: [
            "12.57",
            "12.56",
            "12.60",
            "13.00"
        ],
        answer: 0
    },

    {
        question: "Excel में आज की तारीख दिखाने के लिए कौन-सा Function उपयोग होता है?",
        options: [
            "NOWDATE()",
            "DATEONLY()",
            "CURRENTDATE()",
            "TODAY()"
        ],
        answer: 3
    },

    // =========================
    // MARKSHEET
    // =========================

    {
        question: "पाँच विषयों के अंक B2 से F2 में हैं। कुल अंक निकालने का सही Formula क्या है?",
        options: [
            "=COUNT(B2:F2)",
            "=SUM(B2:F2)",
            "=MAX(B2:F2)",
            "=AVERAGE(B2:F2)"
        ],
        answer: 1
    },

    {
        question: "यदि प्राप्तांक B2 में और कुल अंक C2 में हैं, तो Percentage निकालने का Formula कौन-सा है?",
        options: [
            "=B2+C2",
            "=C2/B2*100",
            "=B2/C2*100",
            "=B2*C2"
        ],
        answer: 2
    },

    {
        question: "यदि D2 में Percentage है, तो 33 या उससे अधिक पर Pass और अन्यथा Fail दिखाने का सही Formula कौन-सा है?",
        options: [
            '=IF(D2>=33,"Pass","Fail")',
            '=SUM(D2>=33,"Pass","Fail")',
            '=COUNT(D2>=33,"Pass","Fail")',
            '=MAX(D2>=33,"Pass","Fail")'
        ],
        answer: 0
    },

    {
        question: "Marksheet में किसी विद्यार्थी के सभी विषयों के औसत अंक निकालने के लिए कौन-सा Function उपयोगी है?",
        options: [
            "COUNT",
            "MIN",
            "MAX",
            "AVERAGE"
        ],
        answer: 3
    },

    {
        question: "Marksheet में विद्यार्थी के सबसे कम अंक निकालने के लिए कौन-सा Function उपयोग होगा?",
        options: [
            "MAX",
            "MIN",
            "SUM",
            "COUNTA"
        ],
        answer: 1
    },

    // =========================
    // INVOICE AND BILLING
    // =========================

    {
        question: "Invoice में Quantity B2 और Rate C2 में हो, तो Amount निकालने का Formula क्या होगा?",
        options: [
            "=B2+C2",
            "=B2-C2",
            "=B2*C2",
            "=B2/C2"
        ],
        answer: 2
    },

    {
        question: "Invoice में अलग-अलग Items के Amount D2 से D10 तक हों, तो Subtotal निकालने के लिए क्या उपयोग करेंगे?",
        options: [
            "=SUM(D2:D10)",
            "=COUNT(D2:D10)",
            "=MAX(D2:D10)",
            "=MIN(D2:D10)"
        ],
        answer: 0
    },

    {
        question: "यदि Subtotal B2 में और GST Rate C2 में प्रतिशत के रूप में है, तो GST Amount निकालने का सही Formula कौन-सा है?",
        options: [
            "=B2+C2",
            "=B2-C2",
            "=B2/C2",
            "=B2*C2/100"
        ],
        answer: 3
    },

    {
        question: "Invoice में Subtotal B2 और Discount C2 में है। यदि Discount की राशि घटानी है, तो Net Amount का Formula क्या होगा?",
        options: [
            "=B2+C2",
            "=B2-C2",
            "=B2*C2",
            "=B2/C2"
        ],
        answer: 1
    },

    {
        question: "Invoice में Items के कुल Amount और Tax को जोड़कर Final Bill निकालने का सही तरीका कौन-सा है?",
        options: [
            "Subtotal में से Tax घटाना",
            "Subtotal को Tax से भाग देना",
            "Subtotal और Tax को जोड़ना",
            "Subtotal को Tax से गुणा करना"
        ],
        answer: 2
    },

    // =========================
    // ATTENDANCE SHEET
    // =========================

    {
        question: "Attendance Sheet में B2:AF2 के अंदर P और A लिखा है। Present Days गिनने के लिए कौन-सा Formula उपयोग होगा?",
        options: [
            '=COUNTIF(B2:AF2,"P")',
            '=SUM(B2:AF2)',
            '=MAX(B2:AF2)',
            '=AVERAGE(B2:AF2)'
        ],
        answer: 0
    },

    {
        question: "Attendance Sheet में Absent Days गिनने के लिए कौन-सा Formula सही है, यदि अनुपस्थिति को A से दर्शाया गया है?",
        options: [
            '=COUNT(B2:AF2)',
            '=SUM(B2:AF2)',
            '=COUNTIF(B2:AF2,"A")',
            '=MAX(B2:AF2)'
        ],
        answer: 2
    },

    {
        question: "Attendance Percentage निकालने के लिए Present Days B2 में और Total Working Days C2 में हैं। सही Formula कौन-सा है?",
        options: [
            "=B2+C2",
            "=B2/C2*100",
            "=C2/B2",
            "=B2-C2"
        ],
        answer: 1
    },

    {
        question: "Excel में किसी Cell में केवल निर्धारित प्रकार का Data दर्ज करवाने के लिए किस विकल्प का उपयोग होता है?",
        options: [
            "Sort",
            "Freeze Panes",
            "Wrap Text",
            "Data Validation"
        ],
        answer: 3
    },

    // =========================
    // SALARY SHEET
    // =========================

    {
        question: "Salary Sheet में Basic Salary B2 और Allowances C2 में हैं। Gross Salary निकालने का Formula क्या होगा?",
        options: [
            "=B2+C2",
            "=B2-C2",
            "=B2/C2",
            "=B2*C2"
        ],
        answer: 0
    },

    {
        question: "Gross Salary B2 और Deductions C2 में हैं। Net Salary निकालने का सही Formula क्या है?",
        options: [
            "=B2*C2",
            "=B2/C2",
            "=B2-C2",
            "=B2+C2"
        ],
        answer: 2
    },

    {
        question: "Basic Salary B2 में है और HRA की दर C2 में प्रतिशत के रूप में दी गई है। HRA निकालने का Formula क्या होगा?",
        options: [
            "=B2+C2",
            "=B2*C2/100",
            "=B2-C2",
            "=B2/C2"
        ],
        answer: 1
    },

    // =========================
    // FORMATTING AND PRINTING
    // =========================

    {
        question: "Excel में चुने हुए Text को Bold करने की Shortcut Key क्या है?",
        options: [
            "Ctrl + I",
            "Ctrl + U",
            "Ctrl + P",
            "Ctrl + B"
        ],
        answer: 3
    },

    {
        question: "Excel में Worksheet को Print करने की Shortcut Key क्या है?",
        options: [
            "Ctrl + P",
            "Ctrl + S",
            "Ctrl + N",
            "Ctrl + F"
        ],
        answer: 0
    },

    {
        question: "Excel में Print करने से पहले Page कैसा दिखाई देगा, यह देखने के लिए किसका उपयोग किया जाता है?",
        options: [
            "Name Box",
            "Formula Bar",
            "Print Preview",
            "Clipboard"
        ],
        answer: 2
    },
    {
    question: "Excel में किसी Cell की Copy करने की Shortcut Key क्या है?",
    options: [
        "Ctrl + X",
        "Ctrl + V",
        "Ctrl + C",
        "Ctrl + Z"
    ],
    answer: 2
},
{
    question: "Excel में Copy किए गए Data को Paste करने की Shortcut Key क्या है?",
    options: [
        "Ctrl + P",
        "Ctrl + V",
        "Ctrl + C",
        "Ctrl + A"
    ],
    answer: 1
},
{
    question: "Excel में किसी कार्य को Undo करने की Shortcut Key क्या है?",
    options: [
        "Ctrl + Y",
        "Ctrl + U",
        "Ctrl + D",
        "Ctrl + Z"
    ],
    answer: 3
},
{
    question: "Excel में Undo किए गए कार्य को दोबारा करने के लिए कौन-सी Shortcut Key उपयोग होती है?",
    options: [
        "Ctrl + Y",
        "Ctrl + X",
        "Ctrl + F",
        "Ctrl + B"
    ],
    answer: 0
},
{
    question: "Excel में पूरी Worksheet को Select करने की Shortcut Key क्या है?",
    options: [
        "Ctrl + S",
        "Ctrl + A",
        "Ctrl + P",
        "Ctrl + H"
    ],
    answer: 1
},
{
    question: "Excel में किसी Cell को Edit करने के लिए कौन-सी Function Key उपयोग होती है?",
    options: [
        "F1",
        "F5",
        "F2",
        "F12"
    ],
    answer: 2
},
{
    question: "Excel में किसी Cell की सामग्री को हटाने के लिए कौन-सी Key उपयोग की जा सकती है?",
    options: [
        "Delete",
        "Shift",
        "Tab",
        "Esc"
    ],
    answer: 0
},
{
    question: "Excel में किसी Cell में लिखी सामग्री को Center Align करने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: [
        "Align Left",
        "Wrap Text",
        "Merge Cells",
        "Center"
    ],
    answer: 3
},
{
    question: "Excel में Cell के Text को Italic करने की Shortcut Key क्या है?",
    options: [
        "Ctrl + B",
        "Ctrl + I",
        "Ctrl + U",
        "Ctrl + T"
    ],
    answer: 1
},
{
    question: "Excel में Text को Underline करने की Shortcut Key क्या है?",
    options: [
        "Ctrl + L",
        "Ctrl + E",
        "Ctrl + U",
        "Ctrl + R"
    ],
    answer: 2
},
{
    question: "Excel में किसी Cell के चारों ओर Border लगाने के विकल्प मुख्य रूप से किस Tab में मिलते हैं?",
    options: [
        "Home",
        "View",
        "Data",
        "Review"
    ],
    answer: 0
},
{
    question: "Excel में Cell का Background Color बदलने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: [
        "Font Color",
        "Cell Styles",
        "Borders",
        "Fill Color"
    ],
    answer: 3
},
{
    question: "Excel में Font Color का उपयोग किस लिए किया जाता है?",
    options: [
        "Cell का आकार बदलने के लिए",
        "Text का रंग बदलने के लिए",
        "Column की चौड़ाई बदलने के लिए",
        "Row हटाने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Format Painter का मुख्य कार्य क्या है?",
    options: [
        "Data को Sort करना",
        "Formula हटाना",
        "एक स्थान की Formatting दूसरे स्थान पर लागू करना",
        "Worksheet को Print करना"
    ],
    answer: 2
},
{
    question: "Excel में Conditional Formatting का उपयोग किस लिए होता है?",
    options: [
        "शर्तों के आधार पर Cells की Formatting बदलने के लिए",
        "Workbook का नाम बदलने के लिए",
        "Worksheet को बंद करने के लिए",
        "नया Folder बनाने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में किसी Column की चौड़ाई अपने Data के अनुसार स्वतः सेट करने के लिए क्या उपयोग किया जाता है?",
    options: [
        "Wrap Text",
        "Merge Cells",
        "Freeze Panes",
        "AutoFit Column Width"
    ],
    answer: 3
},
{
    question: "Excel में किसी Row की ऊँचाई बदलने के लिए कौन-सा विकल्प उपयोगी है?",
    options: [
        "Font Size",
        "Row Height",
        "Page Orientation",
        "Print Area"
    ],
    answer: 1
},
{
    question: "Excel में चुने हुए Cells के Data को Currency के रूप में दिखाने के लिए किसका उपयोग किया जाता है?",
    options: [
        "Text Format",
        "Date Format",
        "Currency Number Format",
        "General Format"
    ],
    answer: 2
},
{
    question: "Excel में किसी संख्या को प्रतिशत के रूप में दिखाने के लिए कौन-सा Number Format उपयोग होता है?",
    options: [
        "Percentage",
        "Currency",
        "Date",
        "Text"
    ],
    answer: 0
},
{
    question: "Excel में किसी संख्या को दो दशमलव स्थानों तक दिखाने के लिए किस प्रकार की Formatting उपयोगी है?",
    options: [
        "Text Formatting",
        "Alignment Formatting",
        "Border Formatting",
        "Number Formatting"
    ],
    answer: 3
},
{
    question: "Excel में A1 से A10 तक की संख्याओं में 50 से अधिक मानों को गिनने का सही Formula कौन-सा है?",
    options: [
        "=COUNT(A1:A10,50)",
        "=COUNTIF(A1:A10,\">50\")",
        "=SUMIF(A1:A10,\">50\")",
        "=MAX(A1:A10)"
    ],
    answer: 1
},
{
    question: "Excel में किसी Range में खाली Cells की संख्या गिनने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "COUNTA",
        "COUNT",
        "COUNTBLANK",
        "COUNTIF"
    ],
    answer: 2
},
{
    question: "SUMIF Function का उपयोग किस लिए किया जाता है?",
    options: [
        "किसी शर्त को पूरा करने वाले मानों का योग निकालने के लिए",
        "सभी Cells को खाली करने के लिए",
        "सबसे बड़ी संख्या खोजने के लिए",
        "Text की लंबाई गिनने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में किसी Range में मौजूद संख्याओं को जोड़ने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "COUNT",
        "MIN",
        "LEN",
        "SUM"
    ],
    answer: 3
},
{
    question: "IF Function में Logical Test का परिणाम TRUE होने पर कौन-सा मान लौटाया जाता है?",
    options: [
        "हमेशा शून्य",
        "Value_if_true में दिया गया मान",
        "हमेशा FALSE",
        "Cell का Address"
    ],
    answer: 1
},
{
    question: "Excel में दो या अधिक Text Strings को जोड़ने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: [
        "COUNT",
        "ROUND",
        "CONCAT",
        "MAX"
    ],
    answer: 2
},
{
    question: "LEN Function का उपयोग किस लिए किया जाता है?",
    options: [
        "Text में Characters की संख्या गिनने के लिए",
        "संख्याओं का योग निकालने के लिए",
        "सबसे छोटी संख्या खोजने के लिए",
        "तारीख बदलने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में Text को बड़े अक्षरों में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "LOWER",
        "PROPER",
        "TRIM",
        "UPPER"
    ],
    answer: 3
},
{
    question: "Excel में Text के प्रत्येक शब्द के पहले अक्षर को बड़ा करने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "UPPER",
        "PROPER",
        "LOWER",
        "LEN"
    ],
    answer: 1
},
{
    question: "TRIM Function का मुख्य कार्य क्या है?",
    options: [
        "संख्याओं को जोड़ना",
        "Text को बड़ा करना",
        "Text में अतिरिक्त Spaces हटाना",
        "तारीख की गणना करना"
    ],
    answer: 2
},
{
    question: "Excel में किसी संख्या का शेषफल निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "MOD",
        "ROUND",
        "ABS",
        "INT"
    ],
    answer: 0
},
{
    question: "ABS Function का उपयोग किस लिए किया जाता है?",
    options: [
        "Average निकालने के लिए",
        "Text को जोड़ने के लिए",
        "Date निकालने के लिए",
        "संख्या का Absolute Value प्राप्त करने के लिए"
    ],
    answer: 3
},
{
    question: "Excel में किसी संख्या को निकटतम पूर्णांक तक Round करने के लिए कौन-सा Function उपयोग किया जाता है?",
    options: [
        "COUNT",
        "ROUND",
        "SUMIF",
        "LEFT"
    ],
    answer: 1
},
{
    question: "Excel में किसी Text के बाएँ तरफ से निर्धारित संख्या में Characters निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "RIGHT",
        "MID",
        "LEFT",
        "LEN"
    ],
    answer: 2
},
{
    question: "RIGHT Function का उपयोग किस लिए किया जाता है?",
    options: [
        "Text के दाएँ तरफ से Characters निकालने के लिए",
        "Text को Bold करने के लिए",
        "संख्या का योग निकालने के लिए",
        "Worksheet को Rename करने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में वर्तमान Date और Time दोनों दिखाने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "TODAY()",
        "DATE()",
        "TIME()",
        "NOW()"
    ],
    answer: 3
},
{
    question: "Excel में DATE Function का उपयोग किस लिए किया जाता है?",
    options: [
        "Text की लंबाई गिनने के लिए",
        "वर्ष, महीना और दिन से Date बनाने के लिए",
        "समय का अंतर निकालने के लिए",
        "संख्याओं को जोड़ने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में दो Dates के बीच दिनों का अंतर निकालने का सामान्य तरीका क्या है?",
    options: [
        "दोनों Dates को जोड़ना",
        "दोनों Dates का गुणा करना",
        "एक Date में से दूसरी Date घटाना",
        "दोनों Dates को Text में बदलना"
    ],
    answer: 2
},
{
    question: "Excel में किसी Cell में Formula दिखाई दे रहा है, लेकिन उसका परिणाम नहीं दिख रहा। इसका एक संभावित कारण क्या है?",
    options: [
        "Cell का Format Text होना",
        "Column का नाम A होना",
        "Workbook में एक से अधिक Sheets होना",
        "Formula Bar का दिखाई देना"
    ],
    answer: 0
},
{
    question: "Excel में Absolute Cell Reference का उदाहरण कौन-सा है?",
    options: [
        "A1",
        "A$1",
        "$A1",
        "$A$1"
    ],
    answer: 3
},
{
    question: "Excel में Relative Cell Reference का उदाहरण कौन-सा है?",
    options: [
        "$A$1",
        "A1",
        "$A1",
        "A$1"
    ],
    answer: 1
},
{
    question: "Excel में Mixed Cell Reference का उदाहरण कौन-सा है?",
    options: [
        "A1",
        "$A$1",
        "$A1",
        "A1:B5"
    ],
    answer: 2
},
{
    question: "Excel में Formula को नीचे की ओर जल्दी Copy करने के लिए किस सुविधा का उपयोग किया जा सकता है?",
    options: [
        "Fill Handle",
        "Print Preview",
        "Page Break",
        "Zoom Slider"
    ],
    answer: 0
},
{
    question: "Excel में किसी Formula को नीचे की ओर Copy करने के लिए Fill Handle को Double-click करने पर सामान्यतः क्या होता है?",
    options: [
        "पूरी Workbook बंद हो जाती है",
        "सभी Formulas हट जाते हैं",
        "Worksheet Print हो जाती है",
        "पास के Data के आधार पर Formula नीचे तक Fill हो सकता है"
    ],
    answer: 3
},
{
    question: "Excel में किसी Worksheet के ऊपर की Rows को Scroll करते समय स्थिर रखने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: [
        "Split Text",
        "Freeze Panes",
        "Wrap Text",
        "Format Painter"
    ],
    answer: 1
},
{
    question: "Excel में Workbook की संरचना या Cells में बदलाव को रोकने के लिए कौन-सी सुविधा उपयोगी है?",
    options: [
        "AutoSum",
        "Sort",
        "Protect Sheet",
        "Find"
    ],
    answer: 2
},
{
    question: "Excel में किसी Range को Table में बदलने की Shortcut Key क्या है?",
    options: [
        "Ctrl + T",
        "Ctrl + M",
        "Ctrl + Q",
        "Ctrl + L"
    ],
    answer: 0
},
{
    question: "Excel में PivotTable का मुख्य उपयोग क्या है?",
    options: [
        "Font का रंग बदलना",
        "Worksheet का नाम बदलना",
        "चित्र Crop करना",
        "बड़े Data का सारांश और विश्लेषण करना"
    ],
    answer: 3
},
{
    question: "Excel में Duplicate Values पहचानने के लिए Conditional Formatting में कौन-सा विकल्प उपयोगी है?",
    options: [
        "Data Bars",
        "Duplicate Values",
        "Color Scales",
        "Icon Sets"
    ],
    answer: 1
},
{
    question: "Excel में किसी Worksheet में बदलावों और टिप्पणियों की समीक्षा के लिए कौन-सा Tab उपयोगी है?",
    options: [
        "Insert",
        "Page Layout",
        "Review",
        "Formulas"
    ],
    answer: 2
},
{
    question: "Excel में VLOOKUP Function का उपयोग किस लिए किया जाता है?",
    options: [
        "Cells को Merge करने के लिए",
        "Table के पहले Column में Value खोजकर संबंधित Data प्राप्त करने के लिए",
        "Chart बनाने के लिए",
        "Worksheet को Protect करने के लिए"
    ],
    answer: 1
},
{
    question: "HLOOKUP Function Data को किस दिशा में खोजता है?",
    options: [
        "केवल दाएँ से बाएँ",
        "तिरछी दिशा में",
        "ऊपर से नीचे",
        "पहली Row में क्षैतिज दिशा में"
    ],
    answer: 3
},
{
    question: "XLOOKUP Function का मुख्य उपयोग क्या है?",
    options: [
        "किसी Range में Value खोजकर संबंधित परिणाम लौटाना",
        "केवल Cells का रंग बदलना",
        "Workbook को बंद करना",
        "Data को Print करना"
    ],
    answer: 0
},
{
    question: "IFERROR Function का उपयोग किस लिए किया जाता है?",
    options: [
        "Formula को Delete करने के लिए",
        "सभी Errors को हमेशा छिपाने के लिए",
        "Formula में Error आने पर निर्धारित वैकल्पिक परिणाम दिखाने के लिए",
        "Cells को Lock करने के लिए"
    ],
    answer: 2
},
{
    question: "AND Function TRUE कब लौटाता है?",
    options: [
        "जब सभी दिए गए Logical Conditions TRUE हों",
        "जब सभी Conditions FALSE हों",
        "जब केवल पहला Condition TRUE हो",
        "जब कोई भी Condition न दी गई हो"
    ],
    answer: 0
},
{
    question: "OR Function TRUE कब लौटाता है?",
    options: [
        "जब सभी Conditions FALSE हों",
        "केवल जब सभी Conditions TRUE हों",
        "जब कोई Condition न हो",
        "जब कम-से-कम एक Condition TRUE हो"
    ],
    answer: 3
},
{
    question: "NOT Function का मुख्य कार्य क्या है?",
    options: [
        "दो संख्याओं को जोड़ना",
        "Logical Value को उलटना",
        "Text की लंबाई गिनना",
        "Date बनाना"
    ],
    answer: 1
},
{
    question: "SUMIFS Function का उपयोग किस लिए होता है?",
    options: [
        "सबसे छोटी संख्या खोजने के लिए",
        "Text को जोड़ने के लिए",
        "एक या अधिक शर्तों के आधार पर संख्याओं का योग निकालने के लिए",
        "खाली Cells गिनने के लिए"
    ],
    answer: 2
},
{
    question: "AVERAGEIF Function का उपयोग किस लिए किया जाता है?",
    options: [
        "शर्त पूरी करने वाले मानों का Average निकालने के लिए",
        "सभी Text को बड़ा करने के लिए",
        "सबसे बड़ी संख्या खोजने के लिए",
        "Worksheet का नाम बदलने के लिए"
    ],
    answer: 0
},
{
    question: "COUNTIFS Function का उपयोग किस लिए होता है?",
    options: [
        "केवल एक Cell को गिनने के लिए",
        "सभी संख्याओं का योग करने के लिए",
        "सबसे छोटा मान खोजने के लिए",
        "एक या अधिक शर्तें पूरी करने वाले Records गिनने के लिए"
    ],
    answer: 3
},
{
    question: "Excel में Rank निकालने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: [
        "COUNTIF",
        "RANK.EQ",
        "CONCAT",
        "TRIM"
    ],
    answer: 1
},
{
    question: "LARGE Function का उपयोग किस लिए होता है?",
    options: [
        "Text को बड़ा करने के लिए",
        "सबसे छोटा मान निकालने के लिए",
        "किसी Range का k-th सबसे बड़ा मान निकालने के लिए",
        "Cells की संख्या गिनने के लिए"
    ],
    answer: 2
},
{
    question: "SMALL Function का उपयोग किस लिए होता है?",
    options: [
        "किसी Range का k-th सबसे छोटा मान निकालने के लिए",
        "Text की लंबाई घटाने के लिए",
        "सभी Cells को छोटा करने के लिए",
        "Workbook का आकार बदलने के लिए"
    ],
    answer: 0
},
{
    question: "MEDIAN Function क्या लौटाता है?",
    options: [
        "सबसे बड़ी संख्या",
        "सभी संख्याओं का योग",
        "सबसे छोटी संख्या",
        "क्रमबद्ध संख्याओं का मध्य मान"
    ],
    answer: 3
},
{
    question: "MODE.SNGL Function क्या बताता है?",
    options: [
        "सबसे बड़ी संख्या",
        "सबसे अधिक बार आने वाला मान",
        "औसत मान",
        "कुल Cells"
    ],
    answer: 1
},
{
    question: "Excel में POWER Function का उपयोग किस लिए होता है?",
    options: [
        "Workbook को चालू करने के लिए",
        "Cell का रंग बदलने के लिए",
        "किसी संख्या की घात निकालने के लिए",
        "Data को Filter करने के लिए"
    ],
    answer: 2
},
{
    question: "SQRT Function का उपयोग किस लिए होता है?",
    options: [
        "संख्या का वर्गमूल निकालने के लिए",
        "संख्या का वर्ग निकालने के लिए",
        "संख्या को Round करने के लिए",
        "संख्या का शेषफल निकालने के लिए"
    ],
    answer: 0
},
{
    question: "INT Function सामान्यतः क्या करता है?",
    options: [
        "Text को जोड़ता है",
        "Date और Time दिखाता है",
        "संख्या का Absolute Value देता है",
        "संख्या को नीचे की ओर निकटतम पूर्णांक तक ले जाता है"
    ],
    answer: 3
},
{
    question: "MOD(17,5) का परिणाम क्या होगा?",
    options: [
        "3",
        "2",
        "5",
        "12"
    ],
    answer: 1
},
{
    question: "PRODUCT Function का उपयोग किस लिए होता है?",
    options: [
        "संख्याओं का योग निकालने के लिए",
        "औसत निकालने के लिए",
        "दी गई संख्याओं का गुणनफल निकालने के लिए",
        "Text को खोजने के लिए"
    ],
    answer: 2
},
{
    question: "Excel में किसी संख्या को शून्य की ओर Truncate करने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "TRUNC",
        "ROUNDUP",
        "MAX",
        "AVERAGE"
    ],
    answer: 0
},
{
    question: "ROUNDUP Function का उपयोग किस लिए किया जाता है?",
    options: [
        "संख्या को हमेशा शून्य करने के लिए",
        "Text को छोटा करने के लिए",
        "सबसे छोटा मान खोजने के लिए",
        "संख्या को निर्दिष्ट दशमलव स्थान तक ऊपर की ओर Round करने के लिए"
    ],
    answer: 3
},
{
    question: "ROUNDDOWN Function का उपयोग किस लिए होता है?",
    options: [
        "संख्या को हमेशा ऊपर Round करने के लिए",
        "संख्या को निर्दिष्ट दशमलव स्थान तक नीचे की ओर Round करने के लिए",
        "संख्याओं को जोड़ने के लिए",
        "Text को बदलने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में किसी Date से वर्ष निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "DAY",
        "MONTH",
        "YEAR",
        "TIME"
    ],
    answer: 2
},
{
    question: "Excel में किसी Date से महीना निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "MONTH",
        "YEAR",
        "HOUR",
        "MINUTE"
    ],
    answer: 0
},
{
    question: "Excel में किसी Date से दिन निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: [
        "YEAR",
        "MONTH",
        "SECOND",
        "DAY"
    ],
    answer: 3
},
{
    question: "WEEKDAY Function का उपयोग किस लिए किया जाता है?",
    options: [
        "वर्ष निकालने के लिए",
        "Date से सप्ताह के दिन का क्रमांक प्राप्त करने के लिए",
        "Text की लंबाई निकालने के लिए",
        "समय को जोड़ने के लिए"
    ],
    answer: 1
},
{
    question: "NETWORKDAYS Function का उपयोग किस लिए होता है?",
    options: [
        "Internet की Speed निकालने के लिए",
        "पूरे Calendar Days गिनने के लिए",
        "दो Dates के बीच कार्यदिवसों की संख्या निकालने के लिए",
        "Workbook को Share करने के लिए"
    ],
    answer: 2
},
{
    question: "EDATE Function का उपयोग किस लिए होता है?",
    options: [
        "किसी Date से निर्धारित महीनों पहले या बाद की Date निकालने के लिए",
        "Text को Edit करने के लिए",
        "किसी Cell को Delete करने के लिए",
        "सभी Dates को जोड़ने के लिए"
    ],
    answer: 0
},
{
    question: "EOMONTH Function क्या लौटाता है?",
    options: [
        "वर्ष का पहला दिन",
        "वर्तमान समय",
        "सप्ताह का पहला दिन",
        "निर्धारित महीनों के अंतर पर महीने का अंतिम दिन"
    ],
    answer: 3
},
{
    question: "Excel में Text को अलग-अलग Columns में बाँटने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: [
        "Flash Fill",
        "Text to Columns",
        "Freeze Panes",
        "Subtotal"
    ],
    answer: 1
},
{
    question: "Flash Fill का उपयोग किस लिए किया जाता है?",
    options: [
        "Worksheet को Print करने के लिए",
        "Chart को रंगने के लिए",
        "उदाहरणों के आधार पर Data का Pattern पहचानकर भरने के लिए",
        "Workbook को Protect करने के लिए"
    ],
    answer: 2
},
{
    question: "Remove Duplicates विकल्प का मुख्य कार्य क्या है?",
    options: [
        "चयनित Data में Duplicate Records हटाना",
        "सभी Formulas हटाना",
        "खाली Rows को रंगना",
        "Cells को Merge करना"
    ],
    answer: 0
},
{
    question: "Excel में Subtotal सुविधा का उपयोग किस लिए होता है?",
    options: [
        "Text का रंग बदलने के लिए",
        "सभी Columns छिपाने के लिए",
        "केवल Chart बनाने के लिए",
        "Grouped Data के लिए Subtotal और Summary निकालने के लिए"
    ],
    answer: 3
},
{
    question: "Text Filter का उपयोग किस लिए होता है?",
    options: [
        "केवल संख्याओं को जोड़ने के लिए",
        "Text आधारित शर्तों से Records Filter करने के लिए",
        "Workbook को बंद करने के लिए",
        "Cells को Lock करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Advanced Filter का उपयोग किस लिए किया जा सकता है?",
    options: [
        "Font बदलने के लिए",
        "Page Orientation बदलने के लिए",
        "जटिल Criteria के आधार पर Data Filter करने के लिए",
        "Formula Bar हटाने के लिए"
    ],
    answer: 2
},
{
    question: "Data Validation में List विकल्प का उपयोग किस लिए होता है?",
    options: [
        "Dropdown List से मान चुनने की सुविधा देने के लिए",
        "Chart का प्रकार बदलने के लिए",
        "Worksheet का नाम बदलने के लिए",
        "Formula को छिपाने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में What-If Analysis का उद्देश्य क्या है?",
    options: [
        "केवल Text Formatting करना",
        "Workbook का नाम बदलना",
        "Data को Delete करना",
        "अलग-अलग Input Values से संभावित परिणामों का विश्लेषण करना"
    ],
    answer: 3
},
{
    question: "Goal Seek का उपयोग किस लिए होता है?",
    options: [
        "कई Worksheets को Merge करने के लिए",
        "वांछित Formula Result पाने के लिए आवश्यक Input Value खोजने के लिए",
        "सभी Cells को Format करने के लिए",
        "Chart को Print करने के लिए"
    ],
    answer: 1
},
{
    question: "Scenario Manager का उपयोग किस लिए किया जाता है?",
    options: [
        "केवल एक Cell को रंगने के लिए",
        "सभी Formulas को हटाने के लिए",
        "अलग-अलग Input Values के Sets बनाकर परिणामों की तुलना करने के लिए",
        "Worksheet को Rename करने के लिए"
    ],
    answer: 2
},
{
    question: "Excel में Consolidate सुविधा का उपयोग किस लिए किया जाता है?",
    options: [
        "अलग-अलग Ranges या Worksheets के Data को Summary में जोड़ने के लिए",
        "Text को Uppercase करने के लिए",
        "एक Cell को Split करने के लिए",
        "Font Size बदलने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में एक ही समय पर कई Worksheets में समान Data या Formatting लागू करने के लिए क्या किया जा सकता है?",
    options: [
        "सभी Worksheets Delete करना",
        "केवल एक Workbook खोलना",
        "सभी Cells को Hide करना",
        "कई Worksheet Tabs को Group करना"
    ],
    answer: 3
},
{
    question: "Excel में किसी Worksheet की Copy बनाने का एक तरीका कौन-सा है?",
    options: [
        "Formula Bar पर Double-click करना",
        "Move or Copy Sheet विकल्प का उपयोग करना",
        "Status Bar को बंद करना",
        "Zoom को 100% करना"
    ],
    answer: 1
},
{
    question: "Excel में Hidden Rows या Columns का क्या अर्थ है?",
    options: [
        "उनका Data हमेशा Delete हो जाता है",
        "उनमें Formula नहीं हो सकता",
        "वे दिखाई नहीं देते, लेकिन उनका Data Worksheet में रहता है",
        "वे अपने आप दूसरी Workbook में चले जाते हैं"
    ],
    answer: 2
},
{
    question: "Excel में Gridlines का मुख्य उद्देश्य क्या है?",
    options: [
        "Worksheet में Cells की सीमाएँ देखने में मदद करना",
        "Formula को Calculate करना",
        "Data को Sort करना",
        "File को Compress करना"
    ],
    answer: 0
},
{
    question: "Excel में Status Bar सामान्यतः क्या दिखा सकती है?",
    options: [
        "केवल Workbook का Password",
        "केवल File का पूरा Path",
        "केवल Formula की भाषा",
        "चयनित संख्याओं का Sum, Average या Count"
    ],
    answer: 3
},
{
    question: "Excel में Zoom Slider का उपयोग किस लिए होता है?",
    options: [
        "Data को Sort करने के लिए",
        "Worksheet को स्क्रीन पर बड़ा या छोटा दिखाने के लिए",
        "Formula को Delete करने के लिए",
        "Column को Lock करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Page Orientation के मुख्य प्रकार कौन-से हैं?",
    options: [
        "Top और Bottom",
        "Left और Right",
        "Portrait और Landscape",
        "Small और Large"
    ],
    answer: 2
},
{
    question: "Excel में Print Area सेट करने का उद्देश्य क्या है?",
    options: [
        "Worksheet के केवल निर्धारित हिस्से को Print करने के लिए",
        "सभी Data को Delete करने के लिए",
        "Workbook को Rename करने के लिए",
        "Formula का रंग बदलने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में विद्यार्थियों के प्राप्तांक को कुल अंकों से विभाजित करके 100 से गुणा करने पर क्या प्राप्त होता है?",
    options: [
        "Division",
        "Rank",
        "Percentage",
        "Attendance"
    ],
    answer: 2
},
{
    question: "Marksheet में विद्यार्थी का Grade निर्धारित करने के लिए किस Function का उपयोग किया जा सकता है?",
    options: [
        "IF",
        "SUM",
        "COUNT",
        "MIN"
    ],
    answer: 0
},
{
    question: "यदि विद्यार्थी के अंक B2 में हैं और 40 से कम अंक पर Fail दिखाना है, तो सही Formula कौन-सा है?",
    options: [
        '=IF(B2>40,"Fail","Pass")',
        '=SUM(B2<40,"Fail","Pass")',
        '=COUNTIF(B2<40,"Fail","Pass")',
        '=IF(B2<40,"Fail","Pass")'
    ],
    answer: 3
},
{
    question: "Marksheet में विद्यार्थी का नाम A2 और प्राप्तांक B2 में हैं। प्राप्तांक के आधार पर विद्यार्थियों को क्रम देने के लिए कौन-सा Function उपयोगी है?",
    options: [
        "LEN",
        "RANK.EQ",
        "LEFT",
        "TRIM"
    ],
    answer: 1
},
{
    question: "Marksheet में सभी विषयों में Pass होने की शर्त जाँचने के लिए AND Function कब उपयोगी है?",
    options: [
        "जब केवल एक विषय के अंक चाहिए",
        "जब सभी विषयों के अंकों का योग चाहिए",
        "जब हर विषय में निर्धारित न्यूनतम अंक आवश्यक हों",
        "जब विद्यार्थी का नाम बदलना हो"
    ],
    answer: 2
},
{
    question: "Marksheet में यदि किसी विषय के अंक 100 से अधिक दर्ज न होने देने हों, तो किस सुविधा का उपयोग किया जा सकता है?",
    options: [
        "Data Validation",
        "Freeze Panes",
        "Page Break",
        "Format Painter"
    ],
    answer: 0
},
{
    question: "Excel में Marksheet के सभी विषयों के प्राप्तांकों का कुल निकालने के लिए कौन-सा Function सबसे उपयुक्त है?",
    options: [
        "MAX",
        "COUNT",
        "LEN",
        "SUM"
    ],
    answer: 3
},
{
    question: "Excel में Marksheet के परिणाम को Pass या Fail के रूप में दिखाने के लिए Formula किस चिन्ह से शुरू होगा?",
    options: [
        "#",
        "=",
        "%",
        "&"
    ],
    answer: 1
},
{
    question: "Marksheet में सबसे अधिक अंक प्राप्त करने वाले विद्यार्थी के अंक निकालने के लिए कौन-सा Function उपयोग होगा?",
    options: [
        "MIN",
        "AVERAGE",
        "MAX",
        "COUNT"
    ],
    answer: 2
},
{
    question: "Excel में विद्यार्थियों की Marksheet में समान अंकों वाले विद्यार्थियों का Rank निर्धारित करने के लिए कौन-सा Function उपयोगी है?",
    options: [
        "RANK.EQ",
        "SUMIF",
        "CONCAT",
        "TODAY"
    ],
    answer: 0
},
{
    question: "Invoice में किसी वस्तु की Quantity C2 और Rate D2 में है। Amount निकालने का Formula क्या होगा?",
    options: [
        "=C2+D2",
        "=C2-D2",
        "=C2/D2",
        "=C2*D2"
    ],
    answer: 3
},
{
    question: "Invoice में सभी वस्तुओं के Amount का कुल जोड़ क्या कहलाता है?",
    options: [
        "Discount Rate",
        "Subtotal",
        "Quantity",
        "Unit"
    ],
    answer: 1
},
{
    question: "Invoice में Discount की राशि निकालने के लिए यदि Subtotal B2 में और Discount Rate C2 में प्रतिशत के रूप में है, तो कौन-सा Formula सही है?",
    options: [
        "=B2+C2",
        "=B2-C2",
        "=B2*C2/100",
        "=B2/C2"
    ],
    answer: 2
},
{
    question: "Invoice में Discount घटाने के बाद GST लगाने से पहले बची राशि को क्या कहा जा सकता है?",
    options: [
        "Discounted Amount",
        "Quantity",
        "Unit Price",
        "Invoice Number"
    ],
    answer: 0
},
{
    question: "Excel में Invoice Number को स्वतः क्रम में भरने के लिए कौन-सी सुविधा उपयोगी है?",
    options: [
        "Spell Check",
        "Goal Seek",
        "Freeze Panes",
        "Fill Handle"
    ],
    answer: 3
},
{
    question: "Invoice में किसी वस्तु की कीमत ₹500 और Quantity 4 है। कुल Amount कितना होगा?",
    options: [
        "₹504",
        "₹2000",
        "₹125",
        "₹1000"
    ],
    answer: 1
},
{
    question: "Invoice में Subtotal ₹2000 और Discount ₹200 है। Discount के बाद Amount कितना होगा?",
    options: [
        "₹2200",
        "₹1800",
        "₹200",
        "₹20000"
    ],
    answer: 1
},
{
    question: "Excel में GST की गणना करते समय यदि Taxable Amount B2 में और GST Rate C2 में प्रतिशत के रूप में है, तो GST Amount का Formula क्या होगा?",
    options: [
        "=B2+C2",
        "=B2-C2",
        "=B2*C2/100",
        "=B2/C2"
    ],
    answer: 2
},
{
    question: "GST Invoice में HSN Code का मुख्य उद्देश्य क्या है?",
    options: [
        "वस्तुओं के वर्गीकरण की पहचान करना",
        "ग्राहक का मोबाइल नंबर बताना",
        "Invoice की तारीख बदलना",
        "कर्मचारी की उपस्थिति दर्ज करना"
    ],
    answer: 0
},
{
    question: "GST की गणना में Taxable Value का क्या अर्थ है?",
    options: [
        "केवल ग्राहक का पता",
        "Invoice का Serial Number",
        "वस्तुओं की कुल Quantity",
        "वह मूल्य जिस पर लागू GST की गणना की जाती है"
    ],
    answer: 3
},
{
    question: "एक सामान्य घरेलू Taxable Supply पर लागू नियमों के अनुसार CGST और SGST का उपयोग कब होता है?",
    options: [
        "हर Import पर",
        "सामान्यतः एक ही राज्य के भीतर होने वाली Taxable Supply पर",
        "केवल विदेश में बिक्री पर",
        "केवल Salary Sheet में"
    ],
    answer: 1
},
{
    question: "GST में IGST सामान्यतः किस प्रकार की Supply पर लागू होता है?",
    options: [
        "केवल एक ही राज्य के भीतर की हर बिक्री पर",
        "केवल कर्मचारियों के वेतन पर",
        "Inter-State Taxable Supply पर",
        "केवल Attendance Sheet पर"
    ],
    answer: 2
},
{
    question: "Excel में GST Invoice पर कुल Taxable Value जोड़ने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: [
        "SUM",
        "LEFT",
        "NOW",
        "LOWER"
    ],
    answer: 0
},
{
    question: "Excel में Invoice को कागज पर सही आकार में Print करने के लिए कौन-सी सुविधा उपयोगी है?",
    options: [
        "Spell Check",
        "Flash Fill",
        "Text to Columns",
        "Page Setup"
    ],
    answer: 3
},
{
    question: "Attendance Sheet में यदि P का अर्थ Present है, तो P की संख्या निकालने के लिए कौन-सा Formula सही है?",
    options: [
        '=COUNT(B2:AF2)',
        '=COUNTIF(B2:AF2,"P")',
        '=SUM(B2:AF2)',
        '=MAX(B2:AF2)'
    ],
    answer: 1
},
{
    question: "Attendance Sheet में यदि L का अर्थ Leave है, तो Leave की संख्या गिनने का सही Formula कौन-सा है?",
    options: [
        '=SUM(B2:AF2)',
        '=MAX(B2:AF2)',
        '=COUNTIF(B2:AF2,"L")',
        '=AVERAGE(B2:AF2)'
    ],
    answer: 2
},
{
    question: "Attendance Sheet में कुल कार्यदिवस 25 और Present Days 20 हैं। Attendance Percentage कितना होगा?",
    options: [
        "80%",
        "75%",
        "50%",
        "90%"
    ],
    answer: 0
},
{
    question: "Attendance Sheet में कर्मचारियों की अनुपस्थिति के Records खोजने के लिए कौन-सा विकल्प उपयोगी है?",
    options: [
        "WordArt",
        "Page Color",
        "SmartArt",
        "Filter"
    ],
    answer: 3
},
{
    question: "Attendance Sheet में तारीखों को क्रमवार लगाने के लिए कौन-सा विकल्प उपयोग किया जाता है?",
    options: [
        "Merge & Center",
        "Sort",
        "Wrap Text",
        "Format Painter"
    ],
    answer: 1
},
{
    question: "Attendance Sheet में Present और Absent को अलग-अलग रंगों में दिखाने के लिए कौन-सी सुविधा उपयोगी है?",
    options: [
        "Goal Seek",
        "Subtotal",
        "Conditional Formatting",
        "Consolidate"
    ],
    answer: 2
},
{
    question: "Salary Sheet में Basic Salary ₹15000 और Allowances ₹3000 हैं। Gross Salary कितनी होगी?",
    options: [
        "₹18000",
        "₹12000",
        "₹15000",
        "₹45000"
    ],
    answer: 0
},
{
    question: "Salary Sheet में Gross Salary ₹25000 और कुल Deductions ₹2500 हैं। Net Salary कितनी होगी?",
    options: [
        "₹27500",
        "₹2500",
        "₹22500",
        "₹20000"
    ],
    answer: 2
},
{
    question: "Salary Sheet में Basic Salary के 10% के बराबर Allowance निकालने के लिए यदि Basic Salary B2 में है, तो सही Formula क्या है?",
    options: [
        "=B2+10",
        "=B2-10",
        "=B2*10",
        "=B2*10%"
    ],
    answer: 3
},
{
    question: "Salary Sheet में कर्मचारियों के Net Salary का कुल जोड़ निकालने के लिए कौन-सा Function उपयोग होगा?",
    options: [
        "COUNT",
        "SUM",
        "MIN",
        "LEN"
    ],
    answer: 1
},
{
    question: "Salary Sheet में केवल Sales Department के कर्मचारियों की कुल Salary निकालने के लिए कौन-सा Function उपयोगी है?",
    options: [
        "SUMIF",
        "LEFT",
        "TODAY",
        "ROUND"
    ],
    answer: 0
},
{
    question: "Salary Sheet में कर्मचारी की ID के आधार पर उसका Department खोजने के लिए कौन-सा Function उपयोगी हो सकता है?",
    options: [
        "COUNTBLANK",
        "MAX",
        "VLOOKUP",
        "MOD"
    ],
    answer: 2
},
{
    question: "Salary Sheet में किसी कर्मचारी का Basic Salary ₹20000 और HRA Rate 20% है। HRA कितना होगा?",
    options: [
        "₹2000",
        "₹4000",
        "₹10000",
        "₹22000"
    ],
    answer: 1
},
{
    question: "Salary Sheet में Overtime Hours और Overtime Rate दिए हों, तो Overtime Amount निकालने के लिए क्या करना होगा?",
    options: [
        "Hours में से Rate घटाना",
        "Hours को Rate से भाग देना",
        "Hours और Rate को जोड़ना",
        "Hours को Rate से गुणा करना"
    ],
    answer: 3
},
{
    question: "Excel में Salary Sheet की केवल चुनिंदा Columns को Print करने के लिए क्या सेट किया जा सकता है?",
    options: [
        "Print Area",
        "Formula Bar",
        "Status Bar",
        "Name Box"
    ],
    answer: 0
},
{
    question: "Salary Sheet में कर्मचारी के नाम के आधार पर Records खोजने के लिए कौन-सी सुविधा उपयोगी है?",
    options: [
        "Page Break",
        "Zoom",
        "Find",
        "Freeze Panes"
    ],
    answer: 2
},
{
    question: "Excel में अलग-अलग उत्पादों की बिक्री की तुलना दिखाने के लिए कौन-सा Chart सामान्यतः उपयोगी है?",
    options: [
        "Pie Chart",
        "Column Chart",
        "Stock Chart",
        "Surface Chart"
    ],
    answer: 1
},
{
    question: "Excel में किसी कुल राशि में विभिन्न श्रेणियों का प्रतिशत हिस्सा दिखाने के लिए कौन-सा Chart उपयोगी हो सकता है?",
    options: [
        "Scatter Chart",
        "Line Chart",
        "Radar Chart",
        "Pie Chart"
    ],
    answer: 3
},
{
    question: "समय के साथ बिक्री में होने वाले बदलाव को दिखाने के लिए कौन-सा Chart सामान्यतः उपयुक्त है?",
    options: [
        "Line Chart",
        "Pie Chart",
        "Doughnut Chart",
        "Treemap"
    ],
    answer: 0
},
{
    question: "Excel Chart में Legend का मुख्य कार्य क्या है?",
    options: [
        "Chart को Delete करना",
        "Data को Sort करना",
        "Data Series के रंगों या चिन्हों की पहचान बताना",
        "Worksheet का नाम बदलना"
    ],
    answer: 2
},
{
    question: "Excel Chart में Axis Titles का उपयोग किस लिए होता है?",
    options: [
        "Workbook को Protect करने के लिए",
        "Chart की Axes का अर्थ या माप बताने के लिए",
        "Formula हटाने के लिए",
        "Cells को Merge करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel Chart में Data Labels क्या दिखा सकते हैं?",
    options: [
        "केवल Workbook का नाम",
        "केवल File का आकार",
        "केवल Sheet का Password",
        "Data Points के मान या अन्य संबंधित जानकारी"
    ],
    answer: 3
},
{
    question: "Excel में Chart का Title बदलने के लिए क्या करना चाहिए?",
    options: [
        "Chart Title पर Click करके नया Text दर्ज करना",
        "पूरी Workbook Delete करना",
        "Status Bar बंद करना",
        "Formula Bar को Hide करना"
    ],
    answer: 0
},
{
    question: "Excel में Sparkline क्या है?",
    options: [
        "एक प्रकार का Password",
        "एक प्रकार का Cell Border",
        "Cell के अंदर दिखने वाला छोटा Chart",
        "एक प्रकार का Worksheet Name"
    ],
    answer: 2
},
{
    question: "Excel में Histogram Chart का उपयोग मुख्यतः किस लिए होता है?",
    options: [
        "Text को Uppercase करने के लिए",
        "संख्यात्मक Data के वितरण को Bins में दिखाने के लिए",
        "Worksheet को Rename करने के लिए",
        "Salary की गणना करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Scatter Chart का उपयोग किस प्रकार के Data को दिखाने में उपयोगी है?",
    options: [
        "केवल एक Text Cell",
        "केवल कर्मचारियों के नाम",
        "केवल Page Numbers",
        "दो संख्यात्मक Variables के बीच संबंध"
    ],
    answer: 3
},
{
    question: "Excel में Workbook और Worksheet में क्या अंतर है?",
    options: [
        "दोनों का अर्थ बिल्कुल अलग-अलग File Format है",
        "Workbook में एक या अधिक Worksheets हो सकती हैं",
        "Worksheet में हमेशा केवल एक Cell होता है",
        "Workbook केवल Chart बनाने के लिए होता है"
    ],
    answer: 1
},
{
    question: "Excel में नई Worksheet जोड़ने की Shortcut Key क्या है?",
    options: [
        "Ctrl + F",
        "Ctrl + P",
        "Shift + F11",
        "Ctrl + H"
    ],
    answer: 2
},
{
    question: "Excel में अगली Worksheet पर जाने के लिए कौन-सी Shortcut Key उपयोग की जा सकती है?",
    options: [
        "Ctrl + Page Down",
        "Ctrl + Page Up",
        "Alt + F4",
        "Ctrl + Home"
    ],
    answer: 0
},
{
    question: "Excel में पिछली Worksheet पर जाने के लिए कौन-सी Shortcut Key उपयोग होती है?",
    options: [
        "Ctrl + End",
        "Ctrl + Tab",
        "Alt + Enter",
        "Ctrl + Page Up"
    ],
    answer: 3
},
{
    question: "Excel में किसी Worksheet का नाम बदलने के लिए कौन-सा विकल्प उपयोग किया जा सकता है?",
    options: [
        "Format Cells",
        "Rename",
        "AutoSum",
        "Data Validation"
    ],
    answer: 1
},
{
    question: "Excel में Worksheet को दूसरी Workbook में ले जाने या Copy करने के लिए कौन-सा विकल्प उपयोगी है?",
    options: [
        "Text to Columns",
        "Flash Fill",
        "Move or Copy Sheet",
        "Remove Duplicates"
    ],
    answer: 2
},
{
    question: "Excel में किसी Worksheet को छिपाने के लिए कौन-सा विकल्प उपयोग किया जाता है?",
    options: [
        "Hide",
        "Delete",
        "Clear Contents",
        "Freeze Panes"
    ],
    answer: 0
},
{
    question: "Excel में छिपी हुई Worksheet को दोबारा दिखाने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: [
        "Protect Sheet",
        "Group",
        "Consolidate",
        "Unhide"
    ],
    answer: 3
},
{
    question: "Excel में किसी Row को Hide करने के लिए कौन-सा तरीका उपयोग किया जा सकता है?",
    options: [
        "Row को Print करना",
        "Row Header पर Right-click करके Hide चुनना",
        "Formula Bar में नाम लिखना",
        "Zoom को कम करना"
    ],
    answer: 1
},
{
    question: "Excel में किसी Column को Unhide करने के लिए सामान्यतः क्या करना होता है?",
    options: [
        "पूरी Workbook बंद करना",
        "Formula को बदलना",
        "छिपे हुए Column के आसपास के Columns चुनकर Unhide करना",
        "सभी Cells को Delete करना"
    ],
    answer: 2
},
{
    question: "Excel में Freeze Top Row का उपयोग किस लिए होता है?",
    options: [
        "Scroll करने पर पहली Row को स्थिर रखने के लिए",
        "पहली Row को Delete करने के लिए",
        "पहली Row का रंग बदलने के लिए",
        "पहली Row को Print से हटाने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में Freeze First Column का क्या कार्य है?",
    options: [
        "पहले Column को Delete करना",
        "पहले Column को Sort करना",
        "पहले Column की चौड़ाई स्वतः बदलना",
        "Horizontal Scrolling के दौरान पहले Column को स्थिर रखना"
    ],
    answer: 3
},
{
    question: "Excel में Split Window का उपयोग किस लिए होता है?",
    options: [
        "Workbook को दो Files में बदलने के लिए",
        "Worksheet Window को अलग-अलग Scrollable Panes में बाँटने के लिए",
        "Cell को दो Cells में बदलने के लिए",
        "Text को अलग-अलग Columns में बाँटने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में View Side by Side का उपयोग किस लिए होता है?",
    options: [
        "दो Cells को Merge करने के लिए",
        "दो Columns को Hide करने के लिए",
        "दो Workbooks को साथ-साथ देखने और तुलना करने के लिए",
        "दो Formulas को जोड़ने के लिए"
    ],
    answer: 2
},
{
    question: "Excel में Formula Bar का मुख्य कार्य क्या है?",
    options: [
        "Active Cell का Data या Formula दिखाना और Edit करने देना",
        "केवल Workbook का नाम दिखाना",
        "केवल Print Settings बदलना",
        "केवल Sheet का रंग बदलना"
    ],
    answer: 0
},
{
    question: "Excel में Name Box सामान्यतः क्या दिखाता है?",
    options: [
        "Workbook का Password",
        "Computer का नाम",
        "File का आकार",
        "Active Cell का Address या चयनित Range का नाम"
    ],
    answer: 3
},
{
    question: "Excel में किसी Cell या Range को एक नाम देने के लिए किस सुविधा का उपयोग किया जा सकता है?",
    options: [
        "Page Break",
        "Define Name",
        "Print Titles",
        "Sort"
    ],
    answer: 1
},
{
    question: "Excel में किसी Named Range का उपयोग करने का क्या लाभ है?",
    options: [
        "Workbook अपने आप Delete हो जाती है",
        "सभी Formulas हट जाते हैं",
        "Formula में Range को पहचानने योग्य नाम से Refer किया जा सकता है",
        "सभी Worksheets छिप जाती हैं"
    ],
    answer: 2
},
{
    question: "Excel में Ctrl + Home दबाने पर सामान्यतः क्या होता है?",
    options: [
        "Worksheet के प्रारंभिक Cell A1 पर जाने में मदद मिलती है",
        "Workbook Print होती है",
        "नई Worksheet बनती है",
        "Active Cell Delete हो जाती है"
    ],
    answer: 0
},
{
    question: "Excel में Ctrl + End दबाने पर सामान्यतः क्या होता है?",
    options: [
        "नई Workbook बनती है",
        "पहली Worksheet खुलती है",
        "Formula Bar बंद होता है",
        "Worksheet के उपयोग किए गए क्षेत्र के अंतिम Cell पर जाने में मदद मिलती है"
    ],
    answer: 3
},
{
    question: "Excel में Ctrl + Arrow Key दबाने का सामान्य उपयोग क्या है?",
    options: [
        "Font का आकार बदलना",
        "Data Region के किनारे तक तेजी से जाना",
        "Workbook का नाम बदलना",
        "Cell में Picture डालना"
    ],
    answer: 1
},
{
    question: "Excel में Ctrl + Shift + L Shortcut Key का उपयोग किस लिए होता है?",
    options: [
        "Workbook Lock करने के लिए",
        "नई Worksheet बनाने के लिए",
        "Data पर Filter चालू या बंद करने के लिए",
        "सभी Cells को Merge करने के लिए"
    ],
    answer: 2
},
{
    question: "Excel में Alt + = Shortcut Key का उपयोग किस लिए किया जाता है?",
    options: [
        "AutoSum लगाने के लिए",
        "Workbook बंद करने के लिए",
        "Text को Underline करने के लिए",
        "Chart हटाने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में Ctrl + 1 Shortcut Key दबाने पर सामान्यतः क्या खुलता है?",
    options: [
        "Find Dialog",
        "Print Dialog",
        "New Workbook",
        "Format Cells Dialog"
    ],
    answer: 3
},
{
    question: "Excel में Ctrl + K Shortcut Key का उपयोग किस लिए होता है?",
    options: [
        "Cell को Lock करने के लिए",
        "Hyperlink Insert करने के लिए",
        "Text को Bold करने के लिए",
        "Worksheet Hide करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Ctrl + ; Shortcut Key का उपयोग किस लिए होता है?",
    options: [
        "Current Time डालने के लिए",
        "Formula हटाने के लिए",
        "Current Date डालने के लिए",
        "Column जोड़ने के लिए"
    ],
    answer: 2
},
{
    question: "Excel में Ctrl + Shift + : Shortcut Key का उपयोग किस लिए किया जाता है?",
    options: [
        "Current Time डालने के लिए",
        "Current Date डालने के लिए",
        "Current Cell Delete करने के लिए",
        "Workbook Print करने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में Ctrl + D Shortcut Key का उपयोग किस लिए किया जाता है?",
    options: [
        "Workbook Delete करने के लिए",
        "Text को Italic करने के लिए",
        "Column Hide करने के लिए",
        "ऊपर वाले Cell की सामग्री या Formula को नीचे Fill करने के लिए"
    ],
    answer: 3
},
{
    question: "Excel में Ctrl + R Shortcut Key का उपयोग किस लिए होता है?",
    options: [
        "Row Delete करने के लिए",
        "बाएँ वाले Cell की सामग्री या Formula को दाएँ Fill करने के लिए",
        "Workbook Rename करने के लिए",
        "Formula Calculate बंद करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Paste Special का उपयोग किस लिए किया जाता है?",
    options: [
        "केवल Workbook बंद करने के लिए",
        "केवल Worksheet Hide करने के लिए",
        "Copy किए गए Data को Values, Formulas या Formatting जैसे चुने हुए रूप में Paste करने के लिए",
        "केवल Chart बनाने के लिए"
    ],
    answer: 2
},
{
    question: "Excel में Paste Special के Values विकल्प का मुख्य कार्य क्या है?",
    options: [
        "Formula के परिणामों को Values के रूप में Paste करना",
        "सभी Cells को Delete करना",
        "केवल Borders Paste करना",
        "केवल Column Width Paste करना"
    ],
    answer: 0
},
{
    question: "Excel में Transpose विकल्प का उपयोग किस लिए किया जाता है?",
    options: [
        "सभी Numbers को Text में बदलने के लिए",
        "Workbook को Rotate करने के लिए",
        "Formula को Delete करने के लिए",
        "Rows को Columns और Columns को Rows के रूप में बदलने के लिए"
    ],
    answer: 3
},
{
    question: "Excel में Paste Special के Multiply विकल्प का उपयोग किस लिए हो सकता है?",
    options: [
        "सभी Cells को Merge करने के लिए",
        "Paste किए गए मान से चुने हुए Cells के मानों का गुणा करने के लिए",
        "Text को बड़ा करने के लिए",
        "Worksheet को Protect करने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में किसी Cell में केवल Formula का परिणाम देखने के लिए क्या किया जा सकता है?",
    options: [
        "Formula Bar को Delete करना",
        "Worksheet Hide करना",
        "Cell को सामान्यतः Formula के साथ Calculate होने देना",
        "Workbook को Rename करना"
    ],
    answer: 2
},
{
    question: "Excel में Show Formulas विकल्प का उपयोग किस लिए होता है?",
    options: [
        "Cells में परिणामों के स्थान पर Formulas दिखाने के लिए",
        "सभी Formulas Delete करने के लिए",
        "सभी Cells को Lock करने के लिए",
        "Workbook को Print करने के लिए"
    ],
    answer: 0
},
{
    question: "Excel में Calculation Options को Manual पर सेट करने का क्या अर्थ है?",
    options: [
        "Workbook Save नहीं हो सकती",
        "कोई Formula बनाया नहीं जा सकता",
        "सभी Cells खाली हो जाते हैं",
        "Formulas की Recalculation सामान्यतः स्वतः होने के बजाय जरूरत पर कराई जाती है"
    ],
    answer: 3
},
{
    question: "Excel में Formula Auditing का उपयोग किस लिए होता है?",
    options: [
        "Font Size बदलने के लिए",
        "Formulas और उनके संबंधित Cells के संबंध को समझने के लिए",
        "Worksheet का नाम बदलने के लिए",
        "सभी Charts हटाने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Trace Precedents विकल्प क्या दिखाता है?",
    options: [
        "कौन-से Cells Active Workbook में छिपे हैं",
        "कौन-से Cells Print होंगे",
        "वे Cells जिनका उपयोग Active Formula में किया गया है",
        "कौन-से Cells का रंग बदला गया है"
    ],
    answer: 2
},
{
    question: "Excel में Trace Dependents विकल्प क्या दिखाता है?",
    options: [
        "वे Cells जिनके Formulas Active Cell पर निर्भर करते हैं",
        "वे Cells जिनका रंग समान है",
        "सभी Hidden Worksheets",
        "सभी Workbook Names"
    ],
    answer: 0
},
{
    question: "Excel में Evaluate Formula सुविधा का उपयोग किस लिए होता है?",
    options: [
        "Worksheet Print करने के लिए",
        "Data Sort करने के लिए",
        "Workbook Lock करने के लिए",
        "Formula को चरण-दर-चरण Calculate होते हुए देखने के लिए"
    ],
    answer: 3
},
{
    question: "Excel में Error Checking सुविधा का उद्देश्य क्या है?",
    options: [
        "सभी Cells का रंग बदलना",
        "संभावित Formula Errors की पहचान करने में मदद करना",
        "नई Worksheet बनाना",
        "Chart का प्रकार बदलना"
    ],
    answer: 1
},
{
    question: "Excel में #DIV/0! Error सामान्यतः कब आती है?",
    options: [
        "जब Text बहुत लंबा हो",
        "जब Workbook का नाम बदलें",
        "जब Formula किसी संख्या को शून्य से Divide करने की कोशिश करे",
        "जब Cell का रंग बदलें"
    ],
    answer: 2
},
{
    question: "Excel में #NAME? Error का एक सामान्य कारण क्या है?",
    options: [
        "Formula में किसी Function या Named Range का नाम गलत लिखा होना",
        "Cell में Border लगा होना",
        "Worksheet में Chart होना",
        "Workbook में कई Sheets होना"
    ],
    answer: 0
},
{
    question: "Excel में #VALUE! Error सामान्यतः किस कारण आ सकती है?",
    options: [
        "Cell में Background Color होने से",
        "Worksheet का नाम छोटा होने से",
        "File Save करने से",
        "Formula में गलत प्रकार का Argument या Data उपयोग होने से"
    ],
    answer: 3
},
{
    question: "Excel में #REF! Error सामान्यतः क्या दर्शाती है?",
    options: [
        "सभी Data सही है",
        "Formula में Invalid Cell Reference है",
        "Worksheet Print हो चुकी है",
        "Workbook में कोई Formula नहीं है"
    ],
    answer: 1
},
{
    question: "Excel में #### दिखाई देने का एक सामान्य कारण क्या है?",
    options: [
        "Workbook में Virus होना",
        "Formula हमेशा गलत होना",
        "Column की चौड़ाई संख्या या Date दिखाने के लिए पर्याप्त न होना",
        "Worksheet का नाम बदलना"
    ],
    answer: 2
},
{
    question: "Excel में Workbook को Password से Encrypt करने का विकल्प सामान्यतः कहाँ मिलता है?",
    options: [
        "File > Info > Protect Workbook",
        "Home > Font",
        "Insert > Shapes",
        "View > Zoom"
    ],
    answer: 0
},
{
    question: "Excel में Protect Sheet का मुख्य उद्देश्य क्या है?",
    options: [
        "Workbook को हमेशा के लिए Delete करना",
        "सभी Formulas को Values में बदलना",
        "Internet Connection बंद करना",
        "Worksheet में अनुमत कार्यों को सीमित करके बदलावों से सुरक्षा देना"
    ],
    answer: 3
},
{
    question: "Excel में Protect Workbook Structure का उपयोग किस लिए किया जाता है?",
    options: [
        "हर Cell का Font बदलने के लिए",
        "Worksheet जोड़ने, हटाने, स्थानांतरित करने या Rename करने जैसे Structure Changes सीमित करने के लिए",
        "सभी Formulas को Delete करने के लिए",
        "केवल Print Area बदलने के लिए"
    ],
    answer: 1
},
{
    question: "Excel में Mark as Final विकल्प का उद्देश्य क्या है?",
    options: [
        "Workbook को हमेशा के लिए Delete करना",
        "हर Cell को Password से Encrypt करना",
        "Workbook को Final बताना और Editing को हतोत्साहित करना",
        "सभी Worksheets को Hide करना"
    ],
    answer: 2
},
{
    question: "Excel में किसी सेल में टिप्पणी (Comment/Note) जोड़ने के लिए किस टैब का उपयोग किया जाता है?",
    options: ["Home", "Insert", "Review", "Data"],
    answer: 2
},
{
    question: "Excel में किसी सेल में Hyperlink जोड़ने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + J"],
    answer: 1
},
{
    question: "Excel में Find और Replace खोलने के लिए कौन-सी शॉर्टकट कुंजी उपयोग होती है?",
    options: ["Ctrl + F", "Ctrl + R", "Ctrl + H", "Ctrl + G"],
    answer: 2
},
{
    question: "Excel में Go To डायलॉग बॉक्स खोलने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + G", "Ctrl + T", "Ctrl + W", "Ctrl + E"],
    answer: 0
},
{
    question: "Excel में नई Workbook बनाने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + O", "Ctrl + S", "Ctrl + N", "Ctrl + W"],
    answer: 2
},
{
    question: "Excel में मौजूदा Workbook खोलने के लिए किस शॉर्टकट का उपयोग होता है?",
    options: ["Ctrl + P", "Ctrl + O", "Ctrl + N", "Ctrl + F"],
    answer: 1
},
{
    question: "Excel में Workbook को Save करने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + S", "Ctrl + D", "Ctrl + E", "Ctrl + M"],
    answer: 0
},
{
    question: "Excel में Save As विकल्प खोलने के लिए कौन-सी Function Key उपयोग की जाती है?",
    options: ["F1", "F5", "F7", "F12"],
    answer: 3
},
{
    question: "Excel में Spelling Check करने के लिए कौन-सी Function Key उपयोग होती है?",
    options: ["F2", "F4", "F7", "F9"],
    answer: 2
},
{
    question: "Excel में सक्रिय सेल को Edit करने के लिए कौन-सी Function Key उपयोग होती है?",
    options: ["F1", "F2", "F3", "F6"],
    answer: 1
},
{
    question: "Excel में किसी Formula में Cell Reference को बदलने के लिए F4 दबाने पर सामान्यतः क्या होता है?",
    options: ["Formula Delete होता है", "Workbook बंद होती है", "Reference के प्रकार बदलते हैं", "नई Sheet बनती है"],
    answer: 2
},
{
    question: "Excel में किसी सेल के अंदर नई लाइन शुरू करने के लिए कौन-सी कुंजी उपयोग होती है?",
    options: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Tab + Enter"],
    answer: 2
},
{
    question: "Excel में कई चुने गए सेल में एक साथ एक ही डेटा भरने के लिए कौन-सा संयोजन उपयोगी है?",
    options: ["Ctrl + Enter", "Ctrl + Delete", "Alt + Tab", "Shift + F5"],
    answer: 0
},
{
    question: "Excel में चयनित सेल की सामग्री को हटाने के लिए कौन-सी कुंजी उपयोग होती है?",
    options: ["Esc", "Delete", "Insert", "Home"],
    answer: 1
},
{
    question: "Excel में Undo करने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + Y", "Ctrl + U", "Ctrl + Z", "Ctrl + X"],
    answer: 2
},
{
    question: "Excel में Redo करने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + R", "Ctrl + Y", "Ctrl + Z", "Ctrl + B"],
    answer: 1
},
{
    question: "Excel में चयनित सेल को Bold करने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + M"],
    answer: 0
},
{
    question: "Excel में चयनित सेल के टेक्स्ट को Italic करने के लिए किस शॉर्टकट का उपयोग होता है?",
    options: ["Ctrl + T", "Ctrl + I", "Ctrl + E", "Ctrl + G"],
    answer: 1
},
{
    question: "Excel में चयनित सेल के टेक्स्ट को Underline करने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + B", "Ctrl + L", "Ctrl + U", "Ctrl + Q"],
    answer: 2
},
{
    question: "Excel में Format Cells डायलॉग बॉक्स खोलने की शॉर्टकट कुंजी क्या है?",
    options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को Percentage Format में बदलने का सामान्य शॉर्टकट क्या है?",
    options: ["Ctrl + Shift + $", "Ctrl + Shift + %", "Ctrl + Shift + #", "Ctrl + Shift + @"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को Currency Format में बदलने के लिए सामान्यतः कौन-सा शॉर्टकट उपयोग होता है?",
    options: ["Ctrl + Shift + $", "Ctrl + Shift + %", "Ctrl + Shift + !", "Ctrl + Shift + &"],
    answer: 0
},
{
    question: "Excel में वर्तमान तारीख डालने के लिए कौन-सा शॉर्टकट उपयोग होता है?",
    options: ["Ctrl + Shift + ;", "Ctrl + ;", "Alt + ;", "Ctrl + D"],
    answer: 1
},
{
    question: "Excel में वर्तमान समय डालने के लिए कौन-सा शॉर्टकट उपयोग होता है?",
    options: ["Ctrl + Shift + ;", "Ctrl + ;", "Alt + Shift + T", "Ctrl + Alt + T"],
    answer: 0
},
{
    question: "Excel में किसी चयनित Cell Range को Table में बदलने का सामान्य शॉर्टकट क्या है?",
    options: ["Ctrl + Shift + T", "Alt + T", "Ctrl + T", "Ctrl + Alt + T"],
    answer: 2
},
{
    question: "Excel में Filter लगाने या हटाने के लिए कौन-सा शॉर्टकट उपयोग होता है?",
    options: ["Ctrl + Shift + L", "Ctrl + Shift + F", "Alt + L", "Ctrl + Alt + L"],
    answer: 0
},
{
    question: "Excel में किसी कॉलम के डेटा को A से Z क्रम में व्यवस्थित करना क्या कहलाता है?",
    options: ["Filtering", "Ascending Sort", "Grouping", "Validation"],
    answer: 1
},
{
    question: "Excel में डेटा को Z से A क्रम में व्यवस्थित करना क्या कहलाता है?",
    options: ["Ascending Sort", "Custom Format", "Descending Sort", "Text to Columns"],
    answer: 2
},
{
    question: "Excel में केवल शर्त पूरी करने वाली Rows दिखाने के लिए किस सुविधा का उपयोग होता है?",
    options: ["Filter", "Merge", "Wrap Text", "Freeze Panes"],
    answer: 0
},
{
    question: "Excel में सेल के लंबे टेक्स्ट को उसी सेल में कई लाइनों में दिखाने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Merge Cells", "Wrap Text", "AutoSum", "Flash Fill"],
    answer: 1
},
{
    question: "Excel में कई सेल को एक सेल की तरह जोड़ने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Wrap Text", "Split Cells", "Merge Cells", "Sort Cells"],
    answer: 2
},
{
    question: "Excel में Merge & Center का मुख्य कार्य क्या है?",
    options: ["सेल हटाना", "सेल जोड़कर टेक्स्ट को बीच में रखना", "डेटा फिल्टर करना", "Formula छिपाना"],
    answer: 1
},
{
    question: "Excel में किसी सेल की सामग्री को क्षैतिज रूप से बीच में रखने के लिए कौन-सा Alignment उपयोग होता है?",
    options: ["Align Left", "Align Right", "Center", "Justify"],
    answer: 2
},
{
    question: "Excel में टेक्स्ट को सेल के बाईं ओर रखने के लिए कौन-सा Alignment उपयोग होता है?",
    options: ["Align Left", "Center", "Align Right", "Bottom Align"],
    answer: 0
},
{
    question: "Excel में सेल के टेक्स्ट को ऊपर की ओर रखने के लिए कौन-सा Vertical Alignment उपयोग होता है?",
    options: ["Middle Align", "Top Align", "Bottom Align", "Center Across"],
    answer: 1
},
{
    question: "Excel में किसी सेल में टेक्स्ट की दिशा बदलने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Orientation", "Indent", "Wrap Text", "Shrink to Fit"],
    answer: 0
},
{
    question: "Excel में सेल के टेक्स्ट को उपलब्ध जगह के अनुसार छोटा दिखाने के लिए Format Cells में कौन-सा विकल्प उपयोग होता है?",
    options: ["Merge Cells", "Wrap Text", "Shrink to Fit", "Center Across Selection"],
    answer: 2
},
{
    question: "Excel में सेल के टेक्स्ट को दाईं ओर से अंदर की तरफ खिसकाने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Orientation", "Indent", "Merge", "Sort"],
    answer: 1
},
{
    question: "Excel में किसी सेल के चारों ओर बॉर्डर लगाने के लिए कौन-सा समूह उपयोग होता है?",
    options: ["Font", "Alignment", "Number", "Border"],
    answer: 3
},
{
    question: "Excel में सेल के पीछे का रंग बदलने के लिए किस विकल्प का उपयोग होता है?",
    options: ["Font Color", "Fill Color", "Text Highlight", "Page Color"],
    answer: 1
},
{
    question: "Excel में सेल के टेक्स्ट का रंग बदलने के लिए किस विकल्प का उपयोग होता है?",
    options: ["Fill Color", "Border Color", "Font Color", "Theme Color"],
    answer: 2
},
{
    question: "Excel में केवल चुने गए क्षेत्र को प्रिंट करने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Print Titles", "Print Selection", "Print Comments", "Print Preview Only"],
    answer: 1
},
{
    question: "Excel में प्रिंट करते समय हर पेज पर शीर्ष पंक्ति दोहराने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Print Titles", "Freeze Panes", "Repeat Cells", "Page Break Preview"],
    answer: 0
},
{
    question: "Excel में प्रिंट पेज पर मार्जिन बदलने के लिए किस टैब का उपयोग होता है?",
    options: ["Review", "Data", "Page Layout", "Formulas"],
    answer: 2
},
{
    question: "Excel में पेज को चौड़ाई के हिसाब से फिट करने के लिए कौन-सी सेटिंग उपयोगी है?",
    options: ["Page Color", "Scale to Fit", "Workbook Views", "Cell Styles"],
    answer: 1
},
{
    question: "Excel में प्रिंट से पहले पेज का स्वरूप देखने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Print Preview", "Name Manager", "Formula Auditing", "Data Validation"],
    answer: 0
},
{
    question: "Excel में वर्कशीट के प्रिंट पेजों की सीमा को देखने और बदलने के लिए कौन-सा View उपयोगी है?",
    options: ["Normal View", "Custom View", "Page Break Preview", "Full Screen View"],
    answer: 2
},
{
    question: "Excel में Workbook की प्रतियां अलग-अलग नाम से सुरक्षित करने के लिए किस विकल्प का उपयोग किया जाता है?",
    options: ["Save As", "Close", "Export Selection", "Refresh All"],
    answer: 0
},
{
    question: "Excel में किसी Workbook को PDF के रूप में सुरक्षित करने के लिए सामान्यतः किस सुविधा का उपयोग किया जा सकता है?",
    options: ["Data Validation", "Export", "Sort", "Freeze Panes"],
    answer: 1
},
{
    question: "Excel में Workbook के डेटा को बाहरी स्रोत से अपडेट करने के लिए कौन-सा विकल्प उपयोगी हो सकता है?",
    options: ["Refresh", "Merge", "Wrap Text", "Spell Check"],
    answer: 0
},
{
    question: "Excel में संख्याओं का औसत निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SUM()", "AVERAGE()", "COUNT()", "MAX()"],
    answer: 1
},
{
    question: "Excel में किसी Range में सबसे छोटी संख्या निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MIN()", "MAX()", "SMALLTEXT()", "LOW()"],
    answer: 0
},
{
    question: "Excel में किसी Range में सबसे बड़ी संख्या निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MIN()", "COUNT()", "MAX()", "TOP()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का वर्ग निकालने के लिए कौन-सा Operator उपयोग किया जाता है?",
    options: ["+", "^", "&", "%"],
    answer: 1
},
{
    question: "Excel में दो टेक्स्ट मानों को जोड़ने के लिए कौन-सा Operator उपयोग किया जा सकता है?",
    options: ["+", "/", "&", "^"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का शेषफल निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MOD()", "INT()", "ABS()", "POWER()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या का धनात्मक मान प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SIGN()", "ABS()", "MOD()", "ROUND()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को निकटतम पूर्णांक तक राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNT()", "SUM()", "ROUND()", "LEN()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या को शून्य की दिशा में पूर्णांक बनाने के लिए कौन-सा Function उपयोग होता है?",
    options: ["TRUNC()", "ROUNDUP()", "CEILING()", "POWER()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को ऊपर की ओर राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ROUNDDOWN()", "ROUNDUP()", "TRUNC()", "INT()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को नीचे की ओर राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ROUNDUP()", "MAX()", "ROUNDDOWN()", "SUM()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का वर्गमूल निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SQRT()", "ROOT()", "POWER()", "SQUARE()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या की घात निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SQRT()", "POWER()", "MOD()", "ABS()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या का साइन निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COS()", "TAN()", "SIN()", "SIGN()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का कोसाइन निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COS()", "SIN()", "TAN()", "ABS()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या का टैंजेंट निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SIN()", "TAN()", "COS()", "MOD()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या का वर्गमूल निकालने के लिए कौन-सा Function सही है?",
    options: ["POWER(A1,2)", "ABS(A1)", "SQRT(A1)", "MOD(A1,2)"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का लॉगरिदम निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["LOG()", "LEN()", "LEFT()", "LOWER()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को रोमन अंक में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ROMANIZE()", "ROMAN()", "ARABIC()", "TEXT()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को बाइनरी टेक्स्ट में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["DECIMAL()", "HEX2DEC()", "DEC2BIN()", "BIN2DEC()"],
    answer: 2
},
{
    question: "Excel में टेक्स्ट की लंबाई ज्ञात करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["LEN()", "SIZE()", "COUNT()", "TEXT()"],
    answer: 0
},
{
    question: "Excel में टेक्स्ट को छोटे अक्षरों में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["UPPER()", "LOWER()", "PROPER()", "SMALL()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट के प्रत्येक शब्द के पहले अक्षर को बड़ा करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["LOWER()", "UPPER()", "PROPER()", "CAPITAL()"],
    answer: 2
},
{
    question: "Excel में टेक्स्ट के बाईं ओर से अक्षर निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["LEFT()", "RIGHT()", "MID()", "LEN()"],
    answer: 0
},
{
    question: "Excel में टेक्स्ट के दाईं ओर से अक्षर निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["LEFT()", "RIGHT()", "MID()", "TRIM()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट के बीच से अक्षर निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["LEFT()", "RIGHT()", "MID()", "UPPER()"],
    answer: 2
},
{
    question: "Excel में किसी टेक्स्ट में एक टेक्स्ट की स्थिति खोजने के लिए कौन-सा Function उपयोग होता है?",
    options: ["FIND()", "JOIN()", "LEN()", "VALUE()"],
    answer: 0
},
{
    question: "Excel में टेक्स्ट के स्थान पर दूसरा टेक्स्ट रखने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SEARCH()", "SUBSTITUTE()", "CONCAT()", "EXACT()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट को संख्या में बदलने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: ["TEXT()", "LEN()", "VALUE()", "PROPER()"],
    answer: 2
},
{
    question: "Excel में संख्या को निर्धारित प्रारूप में टेक्स्ट के रूप में दिखाने के लिए कौन-सा Function उपयोग होता है?",
    options: ["TEXT()", "VALUE()", "COUNT()", "TYPE()"],
    answer: 0
},
{
    question: "Excel में दो टेक्स्ट स्ट्रिंग बिल्कुल समान हैं या नहीं, यह जाँचने के लिए कौन-सा Function उपयोग होता है?",
    options: ["FIND()", "EXACT()", "SEARCH()", "MATCH()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट स्ट्रिंग के अंत में स्पेस जोड़ने या हटाने से संबंधित कार्य के लिए कौन-सा Function उपयोगी है?",
    options: ["LEN()", "UPPER()", "TRIM()", "LEFT()"],
    answer: 2
},
{
    question: "Excel में किसी टेक्स्ट के सभी अक्षरों को बड़ा करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["UPPER()", "LOWER()", "PROPER()", "CAPS()"],
    answer: 0
},
{
    question: "Excel में दो या अधिक टेक्स्ट स्ट्रिंग को जोड़ने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SPLIT()", "CONCAT()", "SEPARATE()", "DIVIDE()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट के एक हिस्से को दूसरे टेक्स्ट से बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MID()", "LEFT()", "REPLACE()", "COUNT()"],
    answer: 2
},
{
    question: "Excel में वर्तमान तारीख और समय प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["NOW()", "TODAY()", "DATE()", "TIMEVALUE()"],
    answer: 0
},
{
    question: "Excel में केवल वर्तमान तारीख प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["NOW()", "TODAY()", "DAY()", "MONTH()"],
    answer: 1
},
{
    question: "Excel में वर्ष, महीना और दिन से तारीख बनाने के लिए कौन-सा Function उपयोग होता है?",
    options: ["TODAY()", "NOW()", "DATE()", "DAY()"],
    answer: 2
},
{
    question: "Excel में किसी तारीख से वर्ष निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["YEAR()", "MONTH()", "DAY()", "DATE()"],
    answer: 0
},
{
    question: "Excel में किसी तारीख से महीने की संख्या निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["YEAR()", "MONTH()", "WEEKDAY()", "DATE()"],
    answer: 1
},
{
    question: "Excel में किसी तारीख से महीने का दिन निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MONTH()", "YEAR()", "DAY()", "DATE()"],
    answer: 2
},
{
    question: "Excel में दो तारीखों के बीच दिनों, महीनों या वर्षों का अंतर निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["DATEDIF()", "DATE()", "DAY()", "TIME()"],
    answer: 0
},
{
    question: "Excel में किसी तारीख का सप्ताह का दिन बताने के लिए कौन-सा Function उपयोग होता है?",
    options: ["WEEKNUM()", "WEEKDAY()", "WORKDAY()", "NETWORKDAYS()"],
    answer: 1
},
{
    question: "Excel में किसी तारीख से सप्ताह संख्या प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["WEEKDAY()", "DAY()", "WEEKNUM()", "MONTH()"],
    answer: 2
},
{
    question: "Excel में दो तारीखों के बीच कार्यदिवसों की संख्या निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["NETWORKDAYS()", "DAYS()", "WEEKNUM()", "DATEDIF()"],
    answer: 0
},
{
    question: "Excel में किसी तारीख के बाद निर्धारित कार्यदिवसों की संख्या जोड़कर तारीख निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["NETWORKDAYS()", "WORKDAY()", "DATEVALUE()", "EDATE()"],
    answer: 1
},
{
    question: "Excel में किसी तारीख में निर्धारित महीनों की संख्या जोड़ने के लिए कौन-सा Function उपयोग होता है?",
    options: ["DAY()", "YEAR()", "EDATE()", "WEEKDAY()"],
    answer: 2
},
{
    question: "Excel में किसी तारीख के महीने के अंतिम दिन की तारीख निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["EOMONTH()", "EDATE()", "TODAY()", "DATE()"],
    answer: 0
},
{
    question: "Excel में किसी सेल में मौजूद डेटा का प्रकार जानने के लिए कौन-सा Function उपयोग होता है?",
    options: ["TYPEOF()", "TYPE()", "VALUE()", "INFO()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को विषम या सम जाँचने के लिए कौन-से Functions उपयोग होते हैं?",
    options: ["MOD() और ABS()", "SUM() और COUNT()", "ISODD() और ISEVEN()", "ODD() और EVEN()"],
    answer: 2
},
{
    question: "Excel में किसी Range में मौजूद संख्यात्मक सेल की गिनती करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNTA()", "COUNT()", "COUNTBLANK()", "SUM()"],
    answer: 1
},
{
    question: "Excel में खाली न होने वाले सेल की गिनती करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNT()", "SUM()", "COUNTA()", "COUNTBLANK()"],
    answer: 2
},
{
    question: "Excel में खाली सेल की गिनती करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNTBLANK()", "COUNTA()", "COUNT()", "BLANKCOUNT()"],
    answer: 0
},
{
    question: "Excel में किसी शर्त के आधार पर संख्याओं का योग निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNTIF()", "SUMIF()", "AVERAGE()", "MAX()"],
    answer: 1
},
{
    question: "Excel में एक से अधिक शर्तों के आधार पर योग निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SUM()", "SUMIF()", "SUMIFS()", "COUNTIFS()"],
    answer: 2
},
{
    question: "Excel में एक शर्त पूरी करने वाले सेल की गिनती करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNTIF()", "SUMIF()", "COUNTBLANK()", "COUNTA()"],
    answer: 0
},
{
    question: "Excel में एक से अधिक शर्तों के आधार पर सेल की गिनती करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["COUNT()", "COUNTIFS()", "SUMIFS()", "COUNTA()"],
    answer: 1
},
{
    question: "Excel में किसी शर्त को पूरा करने वाली संख्याओं का औसत निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["AVERAGE()", "SUMIF()", "AVERAGEIF()", "COUNTIF()"],
    answer: 2
},
{
    question: "Excel में कई शर्तों को पूरा करने वाले डेटा का औसत निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["AVERAGEIFS()", "AVERAGEIF()", "SUMIFS()", "COUNTIFS()"],
    answer: 0
},
{
    question: "Excel में किसी Range की संख्याओं का गुणनफल निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SUM()", "PRODUCT()", "MULTIPLY()", "POWER()"],
    answer: 1
},
{
    question: "Excel में किसी Range की संख्याओं के बीच मध्यिका निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MODE.SNGL()", "AVERAGE()", "MEDIAN()", "RANK.EQ()"],
    answer: 2
},
{
    question: "Excel में किसी डेटा में सबसे अधिक बार आने वाली संख्या निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MODE.SNGL()", "MEDIAN()", "MAX()", "COUNT()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या की रैंक निर्धारित करने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: ["POSITION()", "RANK.EQ()", "ORDER()", "SORT()"],
    answer: 1
},
{
    question: "Excel में किसी Range से तीसरी सबसे बड़ी संख्या निकालने के लिए कौन-सा Function उपयोग होगा?",
    options: ["MAX(A1:A10)", "SMALL(A1:A10,3)", "LARGE(A1:A10,3)", "RANK.EQ(A1,A1:A10)"],
    answer: 2
},
{
    question: "Excel में किसी Range से दूसरी सबसे छोटी संख्या निकालने के लिए कौन-सा Function उपयोग होगा?",
    options: ["SMALL(A1:A10,2)", "LARGE(A1:A10,2)", "MIN(A1:A10)", "MAX(A1:A10)"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को निकटतम सम संख्या तक ऊपर की ओर राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ODD()", "EVEN()", "ROUND()", "INT()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को निकटतम विषम पूर्णांक तक ऊपर की ओर राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["EVEN()", "ROUNDUP()", "ODD()", "TRUNC()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का चिन्ह बताने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SIGN()", "ABS()", "MOD()", "INT()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को निर्दिष्ट आधार पर ऊपर की ओर राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["FLOOR.MATH()", "CEILING.MATH()", "ROUND()", "TRUNC()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को निर्दिष्ट आधार पर नीचे की ओर राउंड करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["CEILING.MATH()", "ROUNDUP()", "FLOOR.MATH()", "EVEN()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या का दशमलव भाग हटाकर पूर्णांक प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["TRUNC()", "ROUNDUP()", "MOD()", "POWER()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को निकटतम पूर्णांक की ओर राउंड करने के लिए ROUND Function में कौन-सा तर्क दशमलव स्थान बताता है?",
    options: ["पहला तर्क", "दूसरा तर्क", "तीसरा तर्क", "कोई तर्क नहीं"],
    answer: 1
},
{
    question: "Excel में किसी सेल में मौजूद टेक्स्ट के पहले अक्षर की स्थिति खोजने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: ["LEN()", "MID()", "FIND()", "VALUE()"],
    answer: 2
},
{
    question: "Excel में टेक्स्ट के भीतर किसी शब्द को खोजने के लिए FIND और SEARCH में मुख्य अंतर क्या है?",
    options: ["FIND अक्षरों के बड़े-छोटे रूप में अंतर करता है, SEARCH सामान्यतः नहीं", "SEARCH केवल संख्याओं पर काम करता है", "FIND केवल तारीखों पर काम करता है", "दोनों में कोई अंतर नहीं है"],
    answer: 0
},
{
    question: "Excel में किसी टेक्स्ट के बीच से निश्चित संख्या में अक्षर निकालने के लिए MID Function में कौन-सी जानकारी आवश्यक है?",
    options: ["केवल टेक्स्ट", "टेक्स्ट, शुरुआती स्थान और अक्षरों की संख्या", "केवल शुरुआती स्थान", "केवल अक्षरों की संख्या"],
    answer: 1
},
{
    question: "Excel में किसी टेक्स्ट के बाईं ओर से निश्चित संख्या में अक्षर निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["RIGHT()", "MID()", "LEFT()", "SEARCH()"],
    answer: 2
},
{
    question: "Excel में किसी टेक्स्ट के दाईं ओर से निश्चित संख्या में अक्षर निकालने के लिए कौन-सा Function उपयोग होता है?",
    options: ["RIGHT()", "LEFT()", "MID()", "TRIM()"],
    answer: 0
},
{
    question: "Excel में टेक्स्ट के अतिरिक्त खाली जगहों को हटाने के लिए कौन-सा Function उपयोग होता है?",
    options: ["CLEAN()", "TRIM()", "SUBSTITUTE()", "REPLACE()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट से अधिकांश गैर-मुद्रण योग्य अक्षर हटाने के लिए कौन-सा Function उपयोग होता है?",
    options: ["TRIM()", "CLEAN()", "PROPER()", "VALUE()"],
    answer: 1
},
{
    question: "Excel में किसी टेक्स्ट को संख्या में बदलने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: ["TEXT()", "VALUE()", "LEN()", "EXACT()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को टेक्स्ट में बदलने के लिए कौन-सा Function उपयोग किया जा सकता है?",
    options: ["VALUE()", "COUNT()", "TEXT()", "SUM()"],
    answer: 2
},
{
    question: "Excel में टेक्स्ट के अंत में किसी दूसरे टेक्स्ट को जोड़ने के लिए कौन-सा तरीका उपयोग किया जा सकता है?",
    options: ["& Operator", "MOD()", "COUNTIF()", "ROUND()"],
    answer: 0
},
{
    question: "Excel में किसी टेक्स्ट में सभी पुराने टेक्स्ट की जगह नया टेक्स्ट रखने के लिए कौन-सा Function उपयोग होता है?",
    options: ["FIND()", "SUBSTITUTE()", "LEN()", "LEFT()"],
    answer: 1
},
{
    question: "Excel में टेक्स्ट के किसी निश्चित स्थान पर मौजूद अक्षरों को बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["SUBSTITUTE()", "SEARCH()", "REPLACE()", "RIGHT()"],
    answer: 2
},
{
    question: "Excel में किसी टेक्स्ट के अंत में लाइन ब्रेक डालने के लिए Windows पर सामान्यतः कौन-सा Function उपयोग किया जा सकता है?",
    options: ["CHAR(10)", "CHAR(1)", "CHAR(0)", "CHAR(5)"],
    answer: 0
},
{
    question: "Excel में दो टेक्स्ट स्ट्रिंग को जोड़ने के लिए CONCAT Function का उपयोग किस काम में होता है?",
    options: ["संख्याओं का औसत निकालना", "टेक्स्ट को जोड़ना", "डेटा को क्रमबद्ध करना", "सेल की गिनती करना"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को बाइनरी से दशमलव में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["DEC2BIN()", "HEX2DEC()", "BIN2DEC()", "DEC2HEX()"],
    answer: 2
},
{
    question: "Excel में किसी संख्या को दशमलव से हेक्साडेसिमल में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["DEC2HEX()", "HEX2DEC()", "BIN2DEC()", "DEC2BIN()"],
    answer: 0
},
{
    question: "Excel में किसी संख्या को हेक्साडेसिमल से दशमलव में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["DEC2HEX()", "HEX2DEC()", "DEC2BIN()", "BIN2DEC()"],
    answer: 1
},
{
    question: "Excel में किसी संख्या को दशमलव से बाइनरी में बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["BIN2DEC()", "HEX2DEC()", "DEC2BIN()", "DEC2HEX()"],
    answer: 2
},
{
    question: "Excel में किसी सेल में संख्या होने की जाँच करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISNUMBER()", "ISTEXT()", "ISBLANK()", "ISLOGICAL()"],
    answer: 0
},
{
    question: "Excel में किसी सेल में टेक्स्ट होने की जाँच करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISNUMBER()", "ISTEXT()", "ISBLANK()", "ISERROR()"],
    answer: 1
},
{
    question: "Excel में किसी सेल के खाली होने की जाँच करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISTEXT()", "ISNUMBER()", "ISBLANK()", "ISLOGICAL()"],
    answer: 2
},
{
    question: "Excel में किसी परिणाम में Error होने की जाँच करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISERROR()", "ISNUMBER()", "ISTEXT()", "ISBLANK()"],
    answer: 0
},
{
    question: "Excel में किसी मान के Error न होने की जाँच करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISERROR()", "ISERR()", "ISNA()", "ISNONTEXT()"],
    answer: 1
},
{
    question: "Excel में किसी मान के #N/A Error होने की जाँच करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISERROR()", "ISBLANK()", "ISNA()", "ISTEXT()"],
    answer: 2
},
{
    question: "Excel में किसी सेल में TRUE या FALSE जैसे Logical Value होने की जाँच के लिए कौन-सा Function उपयोग होता है?",
    options: ["ISLOGICAL()", "ISNUMBER()", "ISTEXT()", "ISBLANK()"],
    answer: 0
},
{
    question: "Excel में किसी Formula के परिणाम को Error आने पर वैकल्पिक मान से बदलने के लिए कौन-सा Function उपयोग होता है?",
    options: ["IF()", "IFERROR()", "IFNA()", "AND()"],
    answer: 1
},
{
    question: "Excel में केवल #N/A Error आने पर वैकल्पिक परिणाम देने के लिए कौन-सा Function उपयोग होता है?",
    options: ["IFERROR()", "IF()", "IFNA()", "NOT()"],
    answer: 2
},
{
    question: "Excel में दो या अधिक शर्तों के सही होने की जाँच करने के लिए कौन-सा Logical Function उपयोग होता है?",
    options: ["AND()", "OR()", "NOT()", "IFERROR()"],
    answer: 0
},
{
    question: "Excel में किसी शर्त के सही होने पर एक परिणाम और गलत होने पर दूसरा परिणाम देने के लिए कौन-सा Function उपयोग होता है?",
    options: ["AND()", "IF()", "OR()", "NOT()"],
    answer: 1
},
{
    question: "Excel में जाँचना हो कि कम से कम एक शर्त सही है, तो कौन-सा Function उपयोग होता है?",
    options: ["AND()", "NOT()", "OR()", "IFERROR()"],
    answer: 2
},
{
    question: "Excel में किसी Logical परिणाम को उलटने के लिए कौन-सा Function उपयोग होता है?",
    options: ["NOT()", "AND()", "OR()", "IF()"],
    answer: 0
},
{
    question: "Excel में A1 का मान 50 से अधिक होने पर Pass और अन्यथा Fail दिखाने का सही Formula कौन-सा है?",
    options: ["=IF(A1>50,Fail,Pass)", "=IF(A1>50,\"Pass\",\"Fail\")", "=IF(A1<50,\"Pass\",\"Fail\")", "=PASS(A1>50)"],
    answer: 1
},
{
    question: "Excel में A1 और B1 दोनों का मान 33 या उससे अधिक होने पर Pass दिखाने के लिए कौन-सा Formula सही है?",
    options: ["=IF(OR(A1>=33,B1>=33),\"Pass\",\"Fail\")", "=AND(A1>=33,B1>=33)", "=IF(AND(A1>=33,B1>=33),\"Pass\",\"Fail\")", "=IF(A1>=33,\"Pass\",\"Fail\")"],
    answer: 2
},
{
    question: "Excel में दो संख्याओं में से बड़ी संख्या प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MAX()", "MIN()", "LARGE()", "HIGH()"],
    answer: 0
},
{
    question: "Excel में दो संख्याओं में से छोटी संख्या प्राप्त करने के लिए कौन-सा Function उपयोग होता है?",
    options: ["MAX()", "MIN()", "SMALL()", "LOW()"],
    answer: 1
},
{
    question: "Excel में A1 से A10 तक के मानों का योग निकालने का सही Formula कौन-सा है?",
    options: ["=ADD(A1:A10)", "=TOTAL(A1:A10)", "=SUM(A1:A10)", "=PLUS(A1:A10)"],
    answer: 2
},
{
    question: "Excel में A1 से A10 तक के मानों का औसत निकालने का सही Formula कौन-सा है?",
    options: ["=AVERAGE(A1:A10)", "=MEANVALUE(A1:A10)", "=AVG(A1:A10)", "=TOTAL(A1:A10)"],
    answer: 0
},
{
    question: "Excel में किसी Range के सभी मानों को जोड़कर औसत निकालने के बजाय केवल संख्याओं की गिनती कौन-सा Function करता है?",
    options: ["COUNTA()", "COUNT()", "SUM()", "AVERAGE()"],
    answer: 1
},
{
    question: "Excel में A1 में 20 और B1 में 30 होने पर =A1+B1 का परिणाम क्या होगा?",
    options: ["10", "20", "50", "600"],
    answer: 2
},
{
    question: "Excel में A1 में 100 और B1 में 25 होने पर =A1/B1 का परिणाम क्या होगा?",
    options: ["4", "25", "75", "125"],
    answer: 0
},
{
    question: "Excel में A1 में 12 और B1 में 5 होने पर =A1*B1 का परिणाम क्या होगा?",
    options: ["17", "60", "7", "2.4"],
    answer: 1
},
{
    question: "Excel में A1 में 17 और B1 में 5 होने पर =MOD(A1,B1) का परिणाम क्या होगा?",
    options: ["3", "5", "2", "12"],
    answer: 2
},
{
    question: "Excel में =LEN(\"COMPUTER\") का परिणाम क्या होगा?",
    options: ["8", "7", "9", "6"],
    answer: 0
},
{
    question: "Excel में =UPPER(\"Excel\") का परिणाम क्या होगा?",
    options: ["Excel", "EXCEL", "excel", "ExCeL"],
    answer: 1
},
{
    question: "Excel में =LOWER(\"COMPUTER\") का परिणाम क्या होगा?",
    options: ["COMPUTER", "Computer", "computer", "ComPUTER"],
    answer: 2
},
{
    question: "Excel में =PROPER(\"computer training\") का परिणाम क्या होगा?",
    options: ["Computer Training", "COMPUTER TRAINING", "computer training", "Computer training"],
    answer: 0
},
{
    question: "Excel में =LEFT(\"COMPUTER\",3) का परिणाम क्या होगा?",
    options: ["PUT", "COM", "TER", "COMPUT"],
    answer: 1
},
{
    question: "Excel में =RIGHT(\"COMPUTER\",3) का परिणाम क्या होगा?",
    options: ["COM", "PUT", "TER", "ER"],
    answer: 2
},
{
    question: "Excel में =MID(\"COMPUTER\",2,3) का परिणाम क्या होगा?",
    options: ["OMP", "COM", "PUT", "MPU"],
    answer: 0
},
{
    question: "Excel में =ROUND(12.567,2) का परिणाम क्या होगा?",
    options: ["12.56", "12.57", "12.60", "13"],
    answer: 1
},
{
    question: "Excel में =ROUNDUP(8.21,1) का परिणाम क्या होगा?",
    options: ["8.2", "8.21", "8.3", "9"],
    answer: 2
},
{
    question: "Excel में =ROUNDDOWN(8.29,1) का परिणाम क्या होगा?",
    options: ["8.2", "8.3", "8.29", "9"],
    answer: 0
},
{
    question: "Excel में =ABS(-45) का परिणाम क्या होगा?",
    options: ["-45", "45", "0", "1"],
    answer: 1
},
{
    question: "Excel में =SQRT(144) का परिणाम क्या होगा?",
    options: ["14", "24", "12", "72"],
    answer: 2
},
{
    question: "Excel में =POWER(3,4) का परिणाम क्या होगा?",
    options: ["81", "12", "64", "27"],
    answer: 0
},
{
    question: "Excel में =INT(9.8) का परिणाम क्या होगा?",
    options: ["10", "9", "9.8", "8"],
    answer: 1
},
{
    question: "Excel में =PRODUCT(2,3,4) का परिणाम क्या होगा?",
    options: ["9", "24", "14", "12"],
    answer: 2
},
{
    question: "Excel में =MEDIAN(2,4,6,8,10) का परिणाम क्या होगा?",
    options: ["6", "4", "8", "10"],
    answer: 0
},
{
    question: "Excel में =MAX(15,28,9,42) का परिणाम क्या होगा?",
    options: ["28", "42", "9", "15"],
    answer: 1
},
{
    question: "Excel में =MIN(15,28,9,42) का परिणाम क्या होगा?",
    options: ["15", "28", "9", "42"],
    answer: 2
},
{
    question: "Excel में A1 में 80 और B1 में 70 होने पर =AVERAGE(A1,B1) का परिणाम क्या होगा?",
    options: ["75", "150", "80", "70"],
    answer: 0
},
{
    question: "Excel में =COUNT(10,20,\"Hello\",30) का परिणाम क्या होगा?",
    options: ["4", "3", "2", "1"],
    answer: 1
},
{
    question: "Excel में =COUNTA(10,\"Hello\",TRUE) का परिणाम क्या होगा?",
    options: ["1", "2", "3", "0"],
    answer: 2
},
{
    question: "Excel में =IF(10>5,\"Yes\",\"No\") का परिणाम क्या होगा?",
    options: ["Yes", "No", "TRUE", "FALSE"],
    answer: 0
},
{
    question: "Excel में =IF(4=5,\"Correct\",\"Wrong\") का परिणाम क्या होगा?",
    options: ["Correct", "Wrong", "TRUE", "5"],
    answer: 1
},
{
    question: "Excel में =AND(5>2,8>3) का परिणाम क्या होगा?",
    options: ["FALSE", "1", "TRUE", "0"],
    answer: 2
},
{
    question: "Excel में =OR(5<2,8>3) का परिणाम क्या होगा?",
    options: ["TRUE", "FALSE", "0", "Error"],
    answer: 0
},
{
    question: "Excel में =NOT(10>5) का परिणाम क्या होगा?",
    options: ["TRUE", "FALSE", "10", "5"],
    answer: 1
},
{
    question: "Excel में =IFERROR(10/0,\"Error\") का परिणाम क्या होगा?",
    options: ["0", "#DIV/0!", "Error", "10"],
    answer: 2
},
{
    question: "Excel में A1 में 25 और B1 में 4 होने पर =A1^B1 का परिणाम क्या होगा?",
    options: ["390625", "100", "29", "625"],
    answer: 0
},
{
    question: "Excel में =DATE(2026,1,15) किस प्रकार का परिणाम देता है?",
    options: ["केवल वर्ष", "15 जनवरी 2026 की तारीख", "केवल महीना", "15 सेकंड"],
    answer: 1
},
{
    question: "Excel में =YEAR(DATE(2025,8,20)) का परिणाम क्या होगा?",
    options: ["8", "20", "2025", "2026"],
    answer: 2
},
{
    question: "Excel में =MONTH(DATE(2026,4,12)) का परिणाम क्या होगा?",
    options: ["4", "12", "2026", "3"],
    answer: 0
},
{
    question: "Excel में =DAY(DATE(2026,7,25)) का परिणाम क्या होगा?",
    options: ["7", "25", "2026", "31"],
    answer: 1
},
{
    question: "Excel में =TODAY() Function क्या लौटाता है?",
    options: ["केवल वर्तमान समय", "कंप्यूटर का नाम", "वर्तमान तारीख", "वर्कबुक का नाम"],
    answer: 2
},
{
    question: "Excel में =NOW() Function क्या लौटाता है?",
    options: ["वर्तमान तारीख और समय", "केवल वर्ष", "केवल समय क्षेत्र", "केवल दिन"],
    answer: 0
},
{
    question: "Excel में =IF(A1>=40,\"Pass\",\"Fail\") में A1 का मान 35 होने पर परिणाम क्या होगा?",
    options: ["Pass", "Fail", "40", "TRUE"],
    answer: 1
},
{
    question: "Excel में A1 से A5 तक 10, 20, 30, 40 और 50 होने पर =SUM(A1:A5) का परिणाम क्या होगा?",
    options: ["100", "120", "150", "50"],
    answer: 2
},
{
    question: "Excel में डेटा को दृश्य रूप में प्रस्तुत करने के लिए किसका उपयोग किया जाता है?",
    options: ["Formula", "Chart", "Comment", "Name Box"],
    answer: 1
},
{
    question: "Excel में समय के साथ होने वाले बदलाव को दिखाने के लिए कौन-सा Chart अधिक उपयोगी है?",
    options: ["Pie Chart", "Doughnut Chart", "Line Chart", "Radar Chart"],
    answer: 2
},
{
    question: "Excel में किसी कुल राशि के अलग-अलग हिस्सों का अनुपात दिखाने के लिए कौन-सा Chart उपयोगी है?",
    options: ["Pie Chart", "Line Chart", "Scatter Chart", "Stock Chart"],
    answer: 0
},
{
    question: "Excel में दो संख्यात्मक Variables के बीच संबंध दिखाने के लिए कौन-सा Chart उपयोगी है?",
    options: ["Pie Chart", "Scatter Chart", "Doughnut Chart", "Area Chart"],
    answer: 1
},
{
    question: "Excel में डेटा के वितरण को समूहों में दिखाने के लिए कौन-सा Chart उपयोग किया जाता है?",
    options: ["Line Chart", "Pie Chart", "Histogram", "Radar Chart"],
    answer: 2
},
{
    question: "Excel में Chart के डेटा की श्रेणियों की पहचान कराने वाला भाग क्या कहलाता है?",
    options: ["Legend", "Gridline", "Plot Area", "Data Table"],
    answer: 0
},
{
    question: "Excel में Chart के क्षैतिज और ऊर्ध्वाधर अक्षों का नाम दिखाने के लिए किसका उपयोग होता है?",
    options: ["Chart Filter", "Axis Titles", "Legend", "Data Labels"],
    answer: 1
},
{
    question: "Excel Chart में प्रत्येक डेटा बिंदु का मान दिखाने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Gridlines", "Legend", "Data Labels", "Plot Area"],
    answer: 2
},
{
    question: "Excel में सेल के भीतर छोटा Chart दिखाने वाली सुविधा क्या कहलाती है?",
    options: ["Sparkline", "PivotChart", "SmartArt", "WordArt"],
    answer: 0
},
{
    question: "Excel में Chart के दिखाई देने वाले डेटा को सीमित करने के लिए कौन-सा विकल्प उपयोग किया जा सकता है?",
    options: ["Chart Title", "Chart Filters", "Axis Titles", "Gridlines"],
    answer: 1
},
{
    question: "Excel में PivotTable का मुख्य उपयोग क्या है?",
    options: ["फॉन्ट बदलना", "चित्र बनाना", "बड़े डेटा का सारांश और विश्लेषण करना", "Workbook बंद करना"],
    answer: 2
},
{
    question: "Excel में PivotTable के डेटा को नए स्रोत डेटा के अनुसार अपडेट करने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Refresh", "Merge", "Wrap Text", "Spell Check"],
    answer: 0
},
{
    question: "Excel में PivotTable में संख्यात्मक डेटा का योग निकालने के लिए कौन-सा Summary Function उपयोग किया जा सकता है?",
    options: ["COUNTBLANK", "SUM", "LEN", "PROPER"],
    answer: 1
},
{
    question: "Excel में PivotTable में किसी फ़ील्ड के डेटा को अलग-अलग समूहों में बाँटने की सुविधा क्या कहलाती है?",
    options: ["Filtering", "Sorting", "Grouping", "Merging"],
    answer: 2
},
{
    question: "Excel में PivotChart का उपयोग किस लिए किया जाता है?",
    options: ["PivotTable के डेटा को Chart में दिखाने के लिए", "सेल का पासवर्ड बदलने के लिए", "टेक्स्ट को अनुवाद करने के लिए", "डेटा को हटाने के लिए"],
    answer: 0
},
{
    question: "Excel में किसी सेल में ड्रॉपडाउन सूची बनाने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Conditional Formatting", "Data Validation", "Flash Fill", "Goal Seek"],
    answer: 1
},
{
    question: "Excel में किसी सेल में केवल निर्धारित तारीखें स्वीकार कराने के लिए कौन-सी सुविधा उपयोगी है?",
    options: ["Sort", "Filter", "Data Validation", "Find"],
    answer: 2
},
{
    question: "Excel में Duplicate Values को हटाने के लिए कौन-सा विकल्प उपयोग किया जाता है?",
    options: ["Remove Duplicates", "Consolidate", "Text to Columns", "Goal Seek"],
    answer: 0
},
{
    question: "Excel में एक कॉलम के डेटा को कई कॉलम में बाँटने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Flash Fill", "Text to Columns", "Subtotal", "Data Table"],
    answer: 1
},
{
    question: "Excel में उदाहरण के आधार पर डेटा का पैटर्न पहचानकर बाकी डेटा भरने वाली सुविधा क्या कहलाती है?",
    options: ["AutoSum", "AutoCorrect", "Flash Fill", "AutoFilter"],
    answer: 2
},
{
    question: "Excel में किसी डेटा सूची में कुल, औसत या गणना जैसे परिणाम समूह के अनुसार निकालने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Subtotal", "Wrap Text", "Freeze Panes", "Format Painter"],
    answer: 0
},
{
    question: "Excel में अलग-अलग Range के डेटा को एक सारांश Range में मिलाने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Text to Columns", "Consolidate", "Remove Duplicates", "Flash Fill"],
    answer: 1
},
{
    question: "Excel में किसी परिणाम को प्राप्त करने के लिए आवश्यक Input Value खोजने वाली सुविधा क्या कहलाती है?",
    options: ["Scenario Manager", "Data Validation", "Goal Seek", "Sort"],
    answer: 2
},
{
    question: "Excel में अलग-अलग Input Values के साथ कई संभावित स्थितियों को सहेजने और तुलना करने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Scenario Manager", "Flash Fill", "AutoSum", "Text to Columns"],
    answer: 0
},
{
    question: "Excel में एक या दो Variables के अलग-अलग मानों से Formula के परिणामों की तुलना करने के लिए कौन-सी What-If Analysis सुविधा उपयोगी है?",
    options: ["Remove Duplicates", "Data Table", "Spell Check", "Name Box"],
    answer: 1
},
{
    question: "Excel में किसी सेल के मान को बदलने पर उससे जुड़े परिणामों का विश्लेषण किस श्रेणी की सुविधा से संबंधित है?",
    options: ["Page Layout", "Font Formatting", "What-If Analysis", "Clipboard"],
    answer: 2
},
{
    question: "Excel में किसी Formula में उपयोग किए गए नामित Range और Names को देखने तथा प्रबंधित करने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Name Manager", "Format Painter", "Page Break", "Data Sort"],
    answer: 0
},
{
    question: "Excel में किसी सेल या Range को अर्थपूर्ण नाम देने के लिए कौन-सी सुविधा उपयोग होती है?",
    options: ["Goal Seek", "Define Name", "Flash Fill", "Subtotal"],
    answer: 1
},
{
    question: "Excel में Formula में किसी सेल का Reference देखने के लिए Formula Bar के अलावा किस क्षेत्र में सेल का पता दिखाई देता है?",
    options: ["Status Bar", "Task Pane", "Name Box", "Title Bar"],
    answer: 2
},
{
    question: "Excel में किसी Formula के परिणाम की जाँच करते समय Formula में उपयोग किए गए मूल सेल कौन-से कहलाते हैं?",
    options: ["Precedents", "Dependents", "Comments", "Labels"],
    answer: 0
},
{
    question: "Excel में किसी सेल के मान पर निर्भर Formula वाले सेल क्या कहलाते हैं?",
    options: ["Precedents", "Dependents", "Headers", "Footers"],
    answer: 1
},
{
    question: "Excel में किसी Formula की गणना को चरण-दर-चरण देखने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Show Formulas", "Trace Dependents", "Evaluate Formula", "Data Validation"],
    answer: 2
},
{
    question: "Excel में वर्कशीट पर सभी Formulas को उनके परिणामों के स्थान पर दिखाने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Show Formulas", "Freeze Panes", "Page Layout", "Protect Sheet"],
    answer: 0
},
{
    question: "Excel में Formula में गलत सेल Reference के कारण सामान्यतः कौन-सा Error दिखाई देता है?",
    options: ["#VALUE!", "#REF!", "#NAME?", "#NUM!"],
    answer: 1
},
{
    question: "Excel में Formula में गलत Function Name लिखने पर सामान्यतः कौन-सा Error आ सकता है?",
    options: ["#REF!", "#DIV/0!", "#NAME?", "#NULL!"],
    answer: 2
},
{
    question: "Excel में किसी संख्या को शून्य से विभाजित करने पर सामान्यतः कौन-सा Error आता है?",
    options: ["#DIV/0!", "#NAME?", "#REF!", "#VALUE!"],
    answer: 0
},
{
    question: "Excel में Formula को अपेक्षित प्रकार के बजाय गलत प्रकार का डेटा मिलने पर कौन-सा Error आ सकता है?",
    options: ["#NAME?", "#VALUE!", "#REF!", "#NULL!"],
    answer: 1
},
{
    question: "Excel में किसी Formula का परिणाम उपलब्ध संख्यात्मक सीमा से बाहर होने पर कौन-सा Error आ सकता है?",
    options: ["#REF!", "#N/A", "#NUM!", "#NAME?"],
    answer: 2
},
{
    question: "Excel में किसी Formula या Function को आवश्यक मान उपलब्ध न होने पर कौन-सा Error सामान्यतः दिखाई देता है?",
    options: ["#N/A", "#DIV/0!", "#REF!", "#NAME?"],
    answer: 0
},
{
    question: "Excel में किसी सेल में Formula को गणना करने के बजाय टेक्स्ट के रूप में दिखाने का एक संभावित कारण क्या है?",
    options: ["सेल का रंग नीला होना", "सेल का Number Format Text होना", "कॉलम की चौड़ाई अधिक होना", "Workbook में कई Sheets होना"],
    answer: 1
},
{
    question: "Excel में Formula की गणना अपने आप होने की सेटिंग सामान्यतः कहाँ मिलती है?",
    options: ["Review टैब", "Insert टैब", "Formulas टैब के Calculation Options में", "View टैब के Zoom विकल्प में"],
    answer: 2
},
{
    question: "Excel में केवल सक्रिय Worksheet की गणना दोबारा करने के लिए कौन-सी Function Key उपयोग होती है?",
    options: ["Shift + F9", "F1", "F5", "Ctrl + F12"],
    answer: 0
},
{
    question: "Excel में सभी खुली Workbooks में Formulas की गणना दोबारा करने के लिए कौन-सी Function Key उपयोग होती है?",
    options: ["F2", "F9", "F7", "F12"],
    answer: 1
},
{
    question: "Excel में किसी Workbook की संरचना सुरक्षित करने से मुख्य रूप से क्या रोका जा सकता है?",
    options: ["सेल में गणना होना", "Formula का परिणाम दिखना", "Sheets को जोड़ना, हटाना या उनका क्रम बदलना", "डेटा को पढ़ना"],
    answer: 2
},
{
    question: "Excel में किसी Worksheet को सुरक्षित करने का मुख्य उद्देश्य क्या है?",
    options: ["सेल में बदलाव को सीमित करना", "Workbook का नाम बदलना", "कंप्यूटर बंद करना", "इंटरनेट की गति बढ़ाना"],
    answer: 0
},
{
    question: "Excel में Workbook को खोलने के लिए पासवर्ड निर्धारित करने का विकल्प किस काम आता है?",
    options: ["सेल का रंग बदलने", "फ़ाइल तक पहुँच को पासवर्ड से नियंत्रित करने", "Chart का आकार बदलने", "Formula का योग निकालने"],
    answer: 1
},
{
    question: "Excel में किसी Worksheet को छिपाने के लिए सामान्यतः किस विकल्प का उपयोग होता है?",
    options: ["Delete Sheet", "Protect Sheet", "Hide Sheet", "Rename Sheet"],
    answer: 2
},
{
    question: "Excel में पहले से छिपी Worksheet को फिर से दिखाने के लिए कौन-सा विकल्प उपयोग होता है?",
    options: ["Unhide Sheet", "Freeze Sheet", "Split Sheet", "Protect Sheet"],
    answer: 0
},
{
    question: "Excel में किसी Worksheet की एक प्रति बनाने के लिए कौन-सा विकल्प उपयोग किया जा सकता है?",
    options: ["Delete", "Move or Copy", "Clear Contents", "Sort"],
    answer: 1
},
{
    question: "Excel में किसी Workbook को PDF फ़ाइल के रूप में निर्यात करने का सामान्य उद्देश्य क्या है?",
    options: ["Formula को संपादित करना", "डेटा को स्वतः अपडेट करना", "दस्तावेज़ को आसानी से साझा और प्रिंट करना", "नई Worksheet बनाना"],
    answer: 2
}

];