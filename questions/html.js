const HTML_QUESTIONS = [
    {
        question: "Sublime Text में कमांड पैलेट (Command Palette) को खोलने के लिए कौन-सा शॉर्टकट उपयोग किया जाता है?",
        options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + Alt + C", "Ctrl + Shift + F"],
        answer: 1
    },
    {
        question: "साधारण Windows Notepad में किसी शब्द को खोजने (Find) के लिए किस शॉर्टकट का उपयोग होता है?",
        options: ["Ctrl + H", "Ctrl + S", "Ctrl + F", "Ctrl + G"],
        answer: 2
    },
    {
        question: "Notepad++ में किसी फाइल को एक नए टैब में खोलने या 'New' फाइल बनाने के लिए शॉर्टकट क्या है?",
        options: ["Ctrl + Shift + N", "Ctrl + T", "Ctrl + Alt + N", "Ctrl + N"],
        answer: 3
    },
    {
        question: "Sublime Text में किसी शब्द को एक साथ कई जगहों पर सेलेक्ट (Multiple Selections) करने के लिए शॉर्टकट क्या है?",
        options: ["Ctrl + K", "Ctrl + D", "Ctrl + Shift + L", "Alt + Click"],
        answer: 1
    },
    {
        question: "Notepad++ में वर्तमान में खुली हुई फाइल को बंद करने के लिए किस शॉर्टकट का उपयोग किया जाता है?",
        options: ["Ctrl + Q", "Alt + F4", "Ctrl + W", "Ctrl + Shift + W"],
        answer: 2
    },
    {
        question: "साधारण Notepad में 'Go to Line' (किसी खास लाइन पर जाने) के लिए शॉर्टकट की क्या होती है होती है?",
        options: ["Ctrl + L", "Ctrl + G", "Ctrl + J", "Ctrl + Shift + G"],
        answer: 1
    },
    {
        question: "Sublime Text में क्विक फाइल ओपन (Quick Open/Goto Anything) करने के लिए कौन-सी की-बोर्ड शॉर्टकट है?",
        options: ["Ctrl + O", "Ctrl + Tab", "Ctrl + Shift + O", "Ctrl + P"],
        answer: 3
    },
    {
        question: "Notepad++ में किसी चुनी हुई लाइन या टेक्स्ट को ऊपर या नीचे डुप्लीकेट (Duplicate) करने की शॉर्टकट की क्या है?",
        options: ["Ctrl + Alt + Down", "Ctrl + D", "Ctrl + Shift + D", "Ctrl + C"],
        answer: 1
    },
    {
        question: "Windows Notepad में 'Save As' करने के लिए कौन-सा शॉर्टकट इस्तेमाल किया जाता है?",
        options: ["Ctrl + S", "F12", "Ctrl + Shift + S", "Ctrl + Alt + S"],
        answer: 2
    },
    {
        question: "Sublime Text में पूरी लाइन को एक साथ डिलीट (Delete line) करने का शॉर्टकट क्या है?",
        options: ["Ctrl + D", "Ctrl + X", "Ctrl + Shift + K", "Ctrl + Del"],
        answer: 2
    },
    {
        question: "Notepad++ में किसी लाइन या पैराग्राफ पर कॉमेंट (Comment/Uncomment) लगाने या हटाने के लिए शॉर्टकट क्या है?",
        options: ["Ctrl + K", "Ctrl + Q", "Ctrl + /", "Ctrl + Shift + C"],
        answer: 1
    },
    {
        question: "इनमें से कौन-सा टेक्स्ट एडिटर विंडोज ऑपरेटिंग सिस्टम के साथ पहले से इन-बिल्ट (Pre-installed) आता है?",
        options: ["Notepad++", "Notepad", "Sublime Text", "VS Code"],
        answer: 1
    },
    {
        question: "Sublime Text में साइडबार (Sidebar) को छिपाने या दिखाने के लिए किस शॉर्टकट का उपयोग होता है?",
        options: ["Ctrl + B", "Ctrl + K, Ctrl + B", "Ctrl + Shift + S", "Alt + S"],
        answer: 1
    },
    {
        question: "Notepad++ किस ओपन-सोर्स फ्रेमवर्क या प्लेटफॉर्म पर आधारित (Built on) है?",
        options: ["Electron", "Scintilla", "Chromium", "Java Swing"],
        answer: 1
    },
    {
        question: "साधारण Notepad में टेक्स्ट का साइज बड़ा (Zoom In) करने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?",
        options: ["Ctrl + +", "Ctrl + Shift + Up", "Ctrl + Mouse Scroll Up", "Alt + Up Arrow"],
        answer: 2
    },
    {
        question: "Sublime Text में एक साथ कई लाइनों के अंत में कर्सर लाने और एडिट करने के लिए किस शॉर्टकट का उपयोग किया जाता है?",
        options: ["Alt + Shift + I", "Ctrl + Alt + Down", "Ctrl + Shift + L", "Ctrl + L"],
        answer: 2
    },
    {
        question: "Notepad++ में 'Find and Replace' विंडो को खोलने के लिए शॉर्टकट क्या है?",
        options: ["Ctrl + F", "Ctrl + R", "Ctrl + H", "Ctrl + Shift + F"],
        answer: 2
    },
    {
        question: "Sublime Text में 'Goto Symbol' (फंक्शन या क्लास पर तुरंत जाने) के लिए शॉर्टकट क्या है?",
        options: ["Ctrl + G", "Ctrl + R", "Ctrl + S", "Ctrl + P"],
        answer: 1
    },
    {
        question: "Notepad++ में खुली हुई सभी फाइलों को एक साथ सेव करने के लिए कौन-सा शॉर्टकट है?",
        options: ["Ctrl + Alt + S", "Ctrl + Shift + S", "F12", "Ctrl + S"],
        answer: 1
    },
    {
        question: "इनमें से कौन-सा एडिटर एक्सटेंशन या पैकेज मैनेजमेंट के लिए 'Package Control' का उपयोग करता है?",
        options: ["Notepad", "Sublime Text", "Notepad++", "MS Word"],
        answer: 1
    },
    {
        question: "HTML का मुख्य रूप से उपयोग किस कार्य के लिए किया जाता है?",
        options: ["सर्वर साइड डेटा प्रोसेसिंग के लिए", "वेब पेजों की संरचना (Structure) तैयार करने के लिए", "डेटाबेस मैनेज करने के लिए", "ऑपरेटिंग सिस्टम का कर्नल लिखने के लिए"],
        answer: 1
    },
    {
        question: "एक सामान्य HTML फाइल को सेव करते समय उसका एक्सटेंशन (Extension) क्या होना चाहिए?",
        options: [".xml", ".java", ".html या .htm", ".js"],
        answer: 2
    },
    {
        question: "लिखे गए HTML कोड को देखने या रन (Run) करने के लिए मुख्य रूप से किसकी आवश्यकता होती है?",
        options: ["वेब ब्राउज़र (Web Browser जैसे Chrome, Edge)", "एंटीवायरस सॉफ्टवेयर", "एक इमेज एडिटर", "केवल एक प्रिंटर"],
        answer: 0
    },
    {
        question: "HTML5 डॉक्यूमेंट की शुरुआत करने के लिए सबसे पहला और जरूरी डिक्लेरेशन टैग कौन-सा होता है?",
        options: ["<html>", "<!DOCTYPE html>", "<head>", "<body>"],
        answer: 1
    },
    {
        question: "HTML में टैग्स (Tags) को हमेशा किस प्रकार के ब्रैकेट्स के अंदर लिखा जाता है?",
        options: ["{} (कर्ली ब्रेसिज़)", "() (पैंथेसिस)", "< > (एंगल ब्रैकेट्स)", "[ ] (स्क्वायर ब्रैकेट्स)"],
        answer: 2
    },
    {
        question: "निम्नलिखित में से कौन-सा एक 'Empty Tag' या 'Unpaired Tag' का उदाहरण है जिसे बंद (Close) करने की आवश्यकता नहीं होती?",
        options: ["<p>", "<div>", "<br>", "<span>"],
        answer: 2
    },
    {
        question: "HTML एलिमेंट्स के बारे में अतिरिक्त जानकारी या सेटिंग्स (Additional Information) देने के लिए किसका उपयोग किया जाता है?",
        options: ["Attributes", "Stylesheets", "Comments", "Scripts"],
        answer: 0
    },
    {
        question: "वेब पेज पर हाइपरलिंक बनाने के लिए इस्तेमाल होने वाले <a> टैग में लिंक का पाथ देने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["src", "href", "link", "url"],
        answer: 1
    },
    {
        question: "वेब पेज में इमेज (तस्वीर) जोड़ने के लिए <img /> टैग में तस्वीर का सोर्स या पाथ देने के लिए कौन-सा एट्रिब्यूट जरूरी है?",
        options: ["alt", "href", "src", "link"],
        answer: 2
    },
    {
        question: "कौन-से HTML एलिमेंट्स हमेशा एक नई लाइन से शुरू होते हैं और पेज की पूरी चौड़ाई (Width) लेते हैं?",
        options: ["Inline Elements", "Block-level Elements", "Script Elements", "Media Elements"],
        answer: 1
    },
    {
        question: "निम्नलिखित में से कौन-सा एक 'Inline Element' का उदाहरण है जो केवल उतनी ही जगह घेरता है जितनी उसकी जरूरत होती है?",
        options: ["<div>", "<p>", "<span>", "<h1>"],
        answer: 2
    },
    {
        question: "HTML कोड के अंदर ब्राउज़र द्वारा न पढ़े जाने वाले नोट्स या कमेंट (Comment) लिखने के लिए सही सिंटैक्स कौन-सा है?",
        options: ["// यह कमेंट है", "/* यह कमेंट है */", "<!-- यह कमेंट है -->", "# यह कमेंट है"],
        answer: 2
    },
    {
        question: "HTML डॉक्यूमेंट का कौन-सा हिस्सा ब्राउज़र की मुख्य स्क्रीन पर सीधे दिखाई नहीं देता, बल्कि मेटा-डेटा, टाइटल और लिंक को होल्ड करता है?",
        options: ["<body>", "<head>", "<title>", "<footer>"],
        answer: 1
    },
    {
        question: "HTML में सबसे बड़ा हेडिंग (Heading) टैग कौन-सा माना जाता है?",
        options: ["<h6>", "<h3>", "<h10>", "<h1>"],
        answer: 3
    },
    {
        question: "क्या HTML के टैग्स केस-सेंसिटिव (Case-sensitive) होते हैं (जैसे <P> और <p> में अंतर)?",
        options: ["हाँ, कैपिटल और स्मॉल लेटर में फर्क पड़ता है", "नहीं, HTML केस-सेंसिटिव नहीं है (आप दोनों लिख सकते हैं)", "केवल कैपिटल लेटर्स ही मान्य हैं", "यह पूरी तरह ऑपरेटिंग सिस्टम पर निर्भर करता है"],
        answer: 1
    },
        {
        question: "HTML डॉक्यूमेंट के मुख्य ढांचे की शुरुआत करने के लिए किस मुख्य टैग (HTML Section) का उपयोग किया जाता है[span_0](start_span)[span_0](end_span)?",
        options: ["<head>", "<html>", "<body>", "<document>"],
        answer: 1
    },
    {
        question: "HTML डॉक्यूमेंट के 'Head Section' को परिभाषित करने के लिए किस टैग का उपयोग होता है[span_1](start_span)[span_1](end_span)?",
        options: ["<header>", "<meta>", "<head>", "<top>"],
        answer: 2
    },
    {
        question: "वेब पेज के शीर्षक (Title) को सेट करने के लिए 'Title Section' के अंतर्गत किस टैग का उपयोग किया जाता है[span_2](start_span)[span_2](end_span)?",
        options: ["<name>", "<title>", "<caption>", "<header-title>"],
        answer: 1
    },
    {
        question: "वेब पेज का वह मुख्य भाग जहाँ यूजर को दिखने वाला सारा कंटेंट (टेक्स्ट, इमेज आदि) लिखा जाता है, उसे क्या कहते हैं[span_3](start_span)[span_3](end_span)?",
        options: ["Body Section", "Head Section", "Title Section", "Meta Section"],
        answer: 0
    },
    {
        question: "HTML में टेक्स्ट को फॉर्मेट करने के लिए इस्तेमाल होने वाले टैग्स (Formatting Tags) का मुख्य उद्देश्य क्या होता है[span_4](start_span)[span_4](end_span)?",
        options: ["डेटाबेस से कनेक्ट करना", "टेक्स्ट के दिखने के तरीके (Appearance) को बदलना", "सर्वर रन करना", "फाइल कंप्रेस करना"],
        answer: 1
    },
    {
        question: "HTML में लाइन ब्रेक (Line Break) देने यानी अगली लाइन से टेक्स्ट शुरू करने के लिए किस एलिमेंट का उपयोग किया जाता है[span_5](start_span)[span_5](end_span)?",
        options: ["<lb>", "<break>", "<br>", "<nl>"],
        answer: 2
    },
    {
        question: "किसी टेक्स्ट को बोल्ड (Bold face Element) यानी गहरा दिखाने के लिए किस HTML टैग का उपयोग किया जाता है[span_6](start_span)[span_6](end_span)?",
        options: ["<dark>", "<b>", "<heavy>", "<strong-text>"],
        answer: 1
    },
    {
        question: "वेब पेज पर टेक्स्ट के नीचे एक क्षैतिज रेखा (Underline Element) खींचने के लिए किस टैग का उपयोग होता है[span_7](start_span)[span_7](end_span)?",
        options: ["<u>", "<line>", "<underline>", "<un>"],
        answer: 0
    },
    {
        question: "टेक्स्ट को तिरछा (Italic Element) प्रदर्शित करने के लिए किस HTML टैग का उपयोग किया जाता है[span_8](start_span)[span_8](end_span)?",
        options: ["<slant>", "<it>", "<i>", "<斜>"],
        answer: 2
    },
    {
        question: "टेक्स्ट के आकार को सामान्य से बड़ा (Big Element) दिखाने के लिए किस पुराने HTML टैग का उपयोग किया जाता था[span_9](start_span)[span_9](end_span)?",
        options: ["<large>", "<bigger>", "<size-up>", "<big>"],
        answer: 3
    },
    {
        question: "निम्नलिखित में से कौन-सा टैग HTML डॉक्यूमेंट के 'Body Section' को शुरू करने के लिए लिखा जाता है[span_10](start_span)[span_10](end_span)?",
        options: ["<body>", "<main>", "<content>", "<window>"],
        answer: 0
    },
    {
        question: "<head> सेक्शन के अंदर आमतौर पर इनमें से क्या परिभाषित किया जाता है[span_11](start_span)[span_11](end_span)?",
        options: ["वेबपेज का बैकग्राउंड कलर", "वेबपेज का टाइटल और मेटा डेटा", "मुख्य पैराग्राफ और इमेज", "डेटाबेस कनेक्शन स्ट्रिंग"],
        answer: 1
    },
    {
        question: "<br> एलिमेंट किस प्रकार का टैग है (क्या इसे बंद करने की जरूरत होती है)[span_12](start_span)[span_12](end_span)?",
        options: ["पैरेंट टैग", "एम्प्टी (Empty) या अनपेयर्ड टैग", "ब्लॉक-लेवल कंटेनर", "टेबल टैग"],
        answer: 1
    },
    {
        question: "HTML में <b> टैग के अलावा किस दूसरे आधुनिक टैग का उपयोग टेक्स्ट को महत्वपूर्ण और बोल्ड दिखाने के लिए किया जाता है[span_13](start_span)[span_13](end_span)?",
        options: ["<important>", "<strong>", "<bld>", "<highlight>"],
        answer: 1
    },
    {
        question: "अगर आप किसी जरूरी शब्द पर जोर (Emphasis) देना चाहते हैं और उसे इटैलिक रूप में दिखाना चाहते हैं, तो <i> के अलावा किस टैग का उपयोग किया जाता है[span_14](start_span)[span_14](end_span)?",
        options: ["<em>", "<slant>", "<italic>", "<subordinat>"],
        answer: 0
    },
    {
        question: "HTML में <title> टैग को हमेशा किस सेक्शन के अंदर लिखा जाना अनिवार्य होता है[span_15](start_span)[span_15](end_span)?",
        options: ["<body> टैग", "<head> टैग", "<html> टैग के तुरंत बाहर", "<br> टैग के बाद"],
        answer: 1
    },
    {
        question: "निम्नलिखित में से कौन-सा एक फॉर्मेटिंग टैग (Formatting Tag) **नहीं** है[span_16](start_span)[span_16](end_span)?",
        options: ["<b>", "<i>", "<u>", "<br> (यह लाइन ब्रेक के लिए है)"],
        answer: 3
    },
    {
        question: "HTML में <big> टैग का विपरीत (Opposite) यानी टेक्स्ट को छोटा करने के लिए कौन-सा टैग इस्तेमाल होता था[span_17](start_span)[span_17](end_span)?",
        options: ["<small>", "<tiny>", "<min>", "<shrink>"],
        answer: 0
    },
    {
        question: "HTML पेज का बेसिक स्ट्रक्चर बनाते समय सबसे ऊपर इनमें से क्या होना चाहिए[span_18](start_span)[span_18](end_span)?",
        options: ["<html> टैग", "<head> टैग", "<body> टैग", "इनमें से कोई नहीं (ऊपर दिए सभी बॉडी या हेड के हिस्से हैं)"],
        answer: 0
    },
    {
        question: "यदि आप चाहते हैं कि वेब ब्राउज़र का टैब (Tab Title) कुछ खास नाम दिखाए, तो आपको वह नाम किस टैग के बीच लिखना होगा[span_19](start_span)[span_19](end_span)?",
        options: ["<title>...</title>", "<head>...</head>", "<body>...</body>", "<name>...</name>"],
        answer: 0
    },
        {
        question: "<small> टैग का उपयोग HTML में किस कार्य के लिए किया जाता है[span_1](start_span)[span_1](end_span)?",
        options: ["टेक्स्ट का साइज सामान्य से छोटा करने के लिए", "टेक्स्ट को बड़ा करने के लिए", "टेक्स्ट को बोल्ड करने के लिए", "टेक्स्ट छिपाने के लिए"],
        answer: 0
    },
    {
        question: "Strike Element (`<strike>` या `<s>`) का मुख्य कार्य क्या है[span_2](start_span)[span_2](end_span)?",
        options: ["टेक्स्ट को अंडरलाइन करना", "टेक्स्ट के बीच में एक क्षैतिज रेखा (Line-through) खींचना", "टेक्स्ट को तिरछा करना", "टेक्स्ट को सुपरस्क्रिप्ट करना"],
        answer: 1
    },
    {
        question: "रासायनिक सूत्र जैसे $H_2O$ में '2' को नीचे की तरफ दिखाने के लिए Subscript Element (`<sub>`) का उपयोग किस प्रकार होता है[span_3](start_span)[span_3](end_span)?",
        options: ["ऊपर की ओर घात (Power) दिखाने के लिए", "सामान्य टेक्स्ट लिखने के लिए", "बेसलाइन से नीचे छोटे अक्षर प्रदर्शित करने के लिए", "बोल्ड टेक्स्ट बनाने के लिए"],
        answer: 2
    },
    {
        question: "गणितीय घात जैसे $X^2$ को ऊपर की तरफ दिखाने के लिए Superscript Element (`<sup>`) का क्या कार्य है[span_4](start_span)[span_4](end_span)?",
        options: ["टेक्स्ट को छोटा करना", "टेक्स्ट को छिपाना", "टेक्स्ट को सेंटर में लाना", "बेसलाइन से ऊपर की ओर छोटे अक्षर दिखाने के लिए"],
        answer: 3
    },
    {
        question: "<center> टैग का उपयोग वेब पेज पर किस उद्देश्य के लिए किया जाता है[span_5](start_span)[span_5](end_span)?",
        options: ["कंटेंट को पेज के बीच में (Center) संरेखित करने के लिए", "कंटेंट को डिलीट करने के लिए", "कंटेंट को बाईं ओर भेजने के लिए", "टेक्स्ट का रंग बदलने के लिए"],
        answer: 0
    },
    {
        question: "HR Element (`<hr>`) का पूरा नाम और कार्य क्या है[span_6](start_span)[span_6](end_span)?",
        options: ["Header Row - टेबल के लिए", "Horizontal Rule - वेब पेज पर एक क्षैतिज रेखा खींचने के लिए", "Hyper Reference - लिंक बनाने के लिए", "HTML Root - मुख्य ढांचा"],
        answer: 1
    },
    {
        question: "<hr> टैग की मोटाई (Thickness) तय करने के लिए किस एट्रिब्यूट का उपयोग किया जाता है[span_7](start_span)[span_7](end_span)?",
        options: ["width", "color", "size", "noshade"],
        answer: 2
    },
    {
        question: "<hr> टैग में बिना शेड की ठोस लाइन दिखाने के लिए कौन-सा एट्रिब्यूट इस्तेमाल होता है[span_8](start_span)[span_8](end_span)?",
        options: ["shade", "solid", "flat", "noshade"],
        answer: 3
    },
    {
        question: "Paragraph Element (`<p>`) का मुख्य उपयोग HTML में क्या है[span_9](start_span)[span_9](end_span)?",
        options: ["एक नया पैराग्राफ या टेक्स्ट ब्लॉक शुरू करने के लिए", "इमेज जोड़ने के लिए", "लाइन ब्रेक देने के लिए", "टेक्स्ट को बोल्ड करने के लिए"],
        answer: 0
    },
    {
        question: "<p> टैग के साथ टेक्स्ट की एलाइनमेंट सेट करने के लिए किस एट्रिब्यूट का उपयोग किया जाता है[span_10](start_span)[span_10](end_span)?",
        options: ["position", "align", "layout", "dir"],
        answer: 1
    },
    {
        question: "Image Element (`<img>`) का उपयोग वेब पेज पर क्या करने के लिए किया जाता है[span_11](start_span)[span_11](end_span)?",
        options: ["वीडियो चलाने के लिए", "ऑडियो जोड़ने के लिए", "तस्वीर (Image) प्रर्दशित करने के लिए", "बैकग्राउंड बदलने के लिए"],
        answer: 2
    },
    {
        question: "<img> टैग के अंदर तस्वीर का सोर्स या फाइल पाथ बताने के लिए कौन-सा एट्रिब्यूट अनिवार्य है[span_12](start_span)[span_12](end_span)?",
        options: ["href", "alt", "link", "src"],
        answer: 3
    },
    {
        question: "<img> टैग में 'alt' एट्रिब्यूट का उपयोग किस लिए किया जाता है[span_13](start_span)[span_13](end_span)?",
        options: ["तस्वीर लोड न होने पर वैकल्पिक टेक्स्ट (Alternative text) दिखाने के लिए", "तस्वीर की चौड़ाई तय करने के लिए", "तस्वीर का बॉर्डर सेट करने के लिए", "तस्वीर का नाम बदलने के लिए"],
        answer: 0
    },
    {
        question: "Marquee Element (`<marquee>`) का मुख्य कार्य वेब पेज पर क्या होता है[span_14](start_span)[span_14](end_span)?",
        options: ["स्टैटिक इमेज दिखाना", "टेक्स्ट या इमेज को स्क्रॉल (Moving) कराना", "टेक्स्ट को ज़ूम इन करना", "लिंक बनाना"],
        answer: 1
    },
    {
        question: "<marquee> टैग में स्क्रॉल होने की दिशा (जैसे ऊपर, नीचे, दाएं, बाएं) तय करने के लिए किस एट्रिब्यूट का उपयोग होता है[span_15](start_span)[span_15](end_span)?",
        options: ["movement", "behavior", "direction", "speed"],
        answer: 2
    },
    {
        question: "बॉडी टैग (Body Tag Elements) के अंतर्गत पूरे पेज का बैकग्राउंड कलर बदलने के लिए किस एट्रिब्यूट का उपयोग किया जाता है[span_16](start_span)[span_16](end_span)?",
        options: ["color", "backcolor", "background-color", "bgcolor"],
        answer: 3
    },
    {
        question: "HTML बॉडी के अंदर डिफॉल्ट टेक्स्ट का रंग बदलने के लिए किस एट्रिब्यूट का उपयोग होता है[span_17](start_span)[span_17](end_span)?",
        options: ["text", "fontcolor", "textcolor", "color"],
        answer: 0
    },
    {
        question: "<body> टैग में बैकग्राउंड इमेज सेट करने के लिए कौन-सा एट्रिब्यूट इस्तेमाल होता है[span_18](start_span)[span_18](end_span)?",
        options: ["img", "background", "bg-image", "pic"],
        answer: 1
    },
    {
        question: "वेब पेज के ऊपरी हिस्से का मार्जिन सेट करने के लिए बॉडी एट्रिब्यूट कौन-सा है[span_19](start_span)[span_19](end_span)?",
        options: ["margin-top", "spacing", "topmargin", "vmargin"],
        answer: 2
    },
    {
        question: "<small> टैग का विपरीत यानी टेक्स्ट के आकार को बड़ा करने के लिए कौन-सा पुराना टैग इस्तेमाल होता था[span_20](start_span)[span_20](end_span)?",
        options: ["<large>", "<size-up>", "<greater>", "<big>"],
        answer: 3
    },
    {
        question: "निम्नलिखित में से कौन-सा टैग एक 'Empty Tag' (जिसे बंद करने की आवश्यकता नहीं होती) का उदाहरण है[span_21](start_span)[span_21](end_span)?",
        options: ["<hr>", "<p>", "<div>", "<span>"],
        answer: 0
    },
    {
        question: "<marquee> टैग में स्क्रॉलिंग का व्यवहार (जैसे स्लाइड या बाउंस होना) तय करने के लिए कौन-सा एट्रिब्यूट होता है[span_22](start_span)[span_22](end_span)?",
        options: ["scrollamount", "behavior", "loop", "direction"],
        answer: 1
    },
    {
        question: "इमेज एलिमेंट (`<img>`) किस प्रकार का टैग माना जाता है[span_23](start_span)[span_23](end_span)?",
        options: ["Paired Tag", "Block Tag", "Empty / Unpaired Tag", "Container Tag"],
        answer: 2
    },
    {
        question: "<hr> टैग की चौड़ाई (Width) तय करने के लिए किस एट्रिब्यूट का उपयोग किया जाता है[span_24](start_span)[span_24](end_span)?",
        options: ["size", "length", "space", "width"],
        answer: 3
    },
    {
        question: "टेक्स्ट को सब्सक्रिप्ट रूप में दिखाने के लिए किस टैग का उपयोग किया जाता है[span_25](start_span)[span_25](end_span)?",
        options: ["<sub>", "<sup>", "<small>", "<strike>"],
        answer: 0
    },
    {
        question: "पैराग్రాफ एलिमेंट (`<p>`) को बंद करने के लिए सही सिंटैक्स क्या है[span_26](start_span)[span_26](end_span)?",
        options: ["<end-p>", "</p>", "< /paragraph >", "<p/>"],
        answer: 1
    },
    {
        question: "<marquee> टैग में यह तय करने के लिए कि टेक्स्ट कितनी बार लूप (Repeat) हो, किस एट्रिब्यूट का उपयोग होता है[span_27](start_span)[span_27](end_span)?",
        options: ["count", "times", "loop", "repeat"],
        answer: 2
    },
    {
        question: "वेब पेज पर बाईं तरफ जगह छोड़ने के लिए बॉडी एट्रिब्यूट कौन-सा है[span_28](start_span)[span_28](end_span)?",
        options: ["margin-left", "left-space", "offsetLeft", "leftmargin"],
        answer: 3
    },
    {
        question: "<img> टैग में तस्वीर की ऊंचाई और चौड़ाई तय करने के लिए किन एट्रिब्यूट्स का उपयोग होता है[span_29](start_span)[span_29](end_span)?",
        options: ["width और height", "size और scale", "dimension और depth", "tall और wide"],
        answer: 0
    },
    {
        question: "सुपरस्क्रिप्ट एलिमेंट (`<sup>`) का उपयोग इनमें से किसके लिए किया जाता है[span_30](start_span)[span_30](end_span)?",
        options: ["बेसलाइन से नीचे लिखने के लिए", "घात (Power जैसे $X^2$) दिखाने के लिए", "टेक्स्ट को तिरछा करने के लिए", "टेक्स्ट को स्ट्राइकथ्रू करने के लिए"],
        answer: 1
    },
        {
        question: "HTML में बॉडी टैग के भीतर बैकग्राउंड इमेज (Background Image) सेट करने के लिए कौन-सा एट्रिब्यूट इस्तेमाल होता है[span_1](start_span)[span_1](end_span)?",
        options: ["img", "background", "bg-image", "picture"],
        answer: 1
    },
    {
        question: "बॉडी टैग में `BGCOLOR` एट्रिब्यूट का मुख्य कार्य क्या होता है[span_2](start_span)[span_2](end_span)?",
        options: ["वेब पेज का बैकग्राउंड कलर बदलना", "टेक्स्ट का रंग बदलना", "लिंक का रंग बदलना", "इमेज जोड़ना"],
        answer: 0
    },
    {
        question: "HTML बॉडी में `Text` एट्रिब्यूट का उपयोग किस लिए किया जाता है[span_3](start_span)[span_3](end_span)?",
        options: ["हेडिंग का रंग बदलने के लिए", "टेक्स्ट का साइज बढ़ाने के लिए", "सामान्य बॉडी टेक्स्ट का डिफॉल्ट रंग तय करने के लिए", "पैराग్రాफ एलाइनमेंट के लिए"],
        answer: 2
    },
    {
        question: "बॉडी टैग के अंदर `Link` एट्रिब्यूट का उपयोग किन लिंक्स का रंग तय करने के लिए होता है[span_4](start_span)[span_4](end_span)?",
        options: ["क्लिक किए जा चुके लिंक", "एक्टिव लिंक", "माउस ओवर वाले लिंक", "अनविजिटेड (Unvisited) हाइपरलिंक का"],
        answer: 3
    },
    {
        question: "`Alink` (Active Link) एट्रिब्यूट का उपयोग HTML में कब होता है[span_5](start_span)[span_5](end_span)?",
        options: ["जब लिंक पर क्लिक किया जा रहा हो (Active state)", "जब पेज लोड हो रहा हो", "जब कर्सर लिंक पर हो", "जब लिंक पुराना हो जाए"],
        answer: 0
    },
    {
        question: "`Vlink` (Visited Link) एट्रिब्यूट का क्या कार्य है[span_6](start_span)[span_6](end_span)?",
        options: ["नए लिंक का रंग बदलना", "पहले से देखे जा चुके (Visited) हाइपरलिंक का रंग तय करना", "बिना देखे लिंक को छिपाना", "लिंक को डिलीट करना"],
        answer: 1
    },
    {
        question: "HTML में कुल कितने प्रकार के Heading Elements (`<h1>` से लेकर `<h6>`) उपलब्ध हैं[span_7](start_span)[span_7](end_span)?",
        options: ["4", "5", "6", "8"],
        answer: 2
    },
    {
        question: "हेडिंग टैग्स में से सबसे छोटा हेडिंग एलिमेंट इनमें से कौन-सा माना जाता है[span_8](start_span)[span_8](end_span)?",
        options: ["`<h1>`", "`<h3>`", "`<h5>`", "`<h6>`"],
        answer: 3
    },
    {
        question: "हेडिंग एलिमेंट्स (`<h1>` से `<h6>`) का मुख्य उपयोग वेब पेज पर क्या दर्शाने के लिए होता है[span_9](start_span)[span_9](end_span)?",
        options: ["शीर्षक या हेडलाइंस (Headlines)", "डेटाबेस टेबल", "इमेज गैलरी", "फॉर्म इनपुट फील्ड्स"],
        answer: 0
    },
    {
        question: "क्या हेडिंग टैग्स (जैसे `<h1>`) अपने आप एक नई लाइन से शुरू होते हैं और बोल्ड दिखते हैं[span_10](start_span)[span_10](end_span)?",
        options: ["नहीं, यह सामान्य टेक्स्ट जैसे होते हैं", "हाँ, ये ब्लॉक-लेवल और बोल्ड होते हैं", "केवल एच1 बोल्ड होता है बाकी नहीं", "यह ब्राउज़र पर निर्भर करता है"],
        answer: 1
    },
    {
        question: "निम्नलिखित में से कौन-सा टैग सबसे बड़े हेडिंग (Largest Heading) को प्रदर्शित करता है[span_11](start_span)[span_11](end_span)?",
        options: ["`<h6>`", "`<h3>`", "`<h1>`", "`<head>`"],
        answer: 2
    },
    {
        question: "हेडिंग टैग्स HTML के सामान्यतः किस मुख्य सेक्शन के अंदर लिखे जाते हैं[span_12](start_span)[span_12](end_span)?",
        options: ["`<head>` सेक्शन", "`<meta>` सेक्शन", "`<title>` सेक्शन", "`<body>` सेक्शन"],
        answer: 3
    },
    {
        question: "HTML में फॉंट का आकार, रंग और प्रकार बदलने के लिए किस टैग (`Font Tags`) का उपयोग किया जाता है[span_13](start_span)[span_13](end_span)?",
        options: ["`<font>`", "<textstyle>", "<fontsize>", "<stylefont>"],
        answer: 0
    },
    {
        question: "`<font>` टैग के साथ टेक्स्ट का रंग बदलने के लिए किस एट्रिब्यूट का उपयोग होता है[span_14](start_span)[span_14](end_span)?",
        options: ["text-color", "color", "bgcolor", "fontcolor"],
        answer: 1
    },
    {
        question: "`<font>` टैग में टेक्स्ट का फॉंट फेस या स्टाइल (जैसे Arial, Times New Roman) बदलने के लिए कौन-सा एट्रिब्यूट होता है[span_15](start_span)[span_15](end_span)?",
        options: ["family", "style", "face", "type"],
        answer: 2
    },
    {
        question: "`<font>` टैग के माध्यम से टेक्स्ट का साइज तय करने के लिए किस एट्रिब्यूट का इस्तेमाल किया जाता है[span_16](start_span)[span_16](end_span)?",
        options: ["length", "tall", "dimension", "size"],
        answer: 3
    },
    {
        question: "HTML में `<font>` टैग किस प्रकार का एलिमेंट माना जाता है[span_17](start_span)[span_17](end_span)?",
        options: ["कंटेनर या पेयर्ड टैग (Paired tag)", "एम्प्टी टैग (Empty tag)", "हेडर टैग", "रूट टैग"],
        answer: 0
    },
    {
        question: "यदि आप HTML में किसी फॉंट का साइज relative रूप से बढ़ाना चाहते हैं, तो कौन-सा फॉर्मेट सही है[span_18](start_span)[span_18](end_span)?",
        options: ["`<font size=\"large\">`", "`<font size=\"+2\">`", "`<font text=\"plus2\">`", "`<font scale=\"up\">`"],
        answer: 1
    },
    {
        question: "HTML में `<Div>` Elements का पूरा नाम क्या है और यह क्या दर्शाता है[span_19](start_span)[span_19](end_span)?",
        options: ["Division - यह एक इनलाइन एलिमेंट है", "Divider - यह केवल लाइन खींचता है", "Division - यह एक ब्लॉक-लेवल कंटेनर है", "Document - मुख्य पेज"],
        answer: 2
    },
    {
        question: "`<div>` टैग का मुख्य उपयोग वेब पेज पर किस कार्य के लिए होता है[span_20](start_span)[span_20](end_span)?",
        options: ["इमेज लोड करने के लिए", "टेक्स्ट को तिरछा करने के लिए", "लिंक बनाने के लिए", "लेआउट बनाने और एलिमेंट्स को समूहीकृत (Group) करने के लिए"],
        answer: 3
    },
    {
        question: "क्या `<div>` टैग एक ब्लॉक-लेवल एलिमेंट है जो पेज की पूरी चौड़ाई घेरता है[span_21](start_span)[span_21](end_span)?",
        options: ["हाँ, यह एक ब्लॉक-लेवल एलिमेंट है", "नहीं, यह इनलाइन है", "यह सिर्फ टेबल के लिए है", "यह हेड सेक्शन में आता है"],
        answer: 0
    },
    {
        question: "CSS या स्टाइलिंग लागू करने के लिए `<div>` टैग के साथ आमतौर पर किन एट्रिब्यूट्स का उपयोग किया जाता है[span_22](start_span)[span_22](end_span)?",
        options: ["src और href", "class और id", "size और color", "face और width"],
        answer: 1
    },
    {
        question: "निम्नलिखित में से कौन-सा एलिमेंट `<div>` के विपरीत एक 'इनलाइन कंटेनर' (Inline container) के रूप में जाना जाता है[span_23](start_span)[span_23](end_span)?",
        options: ["`<p>`", "`<br>`", "`<span>`", "`<table>`"],
        answer: 2
    },
    {
        question: "वेब पेज के विभिन्न खंडों (Sections) को अलग-अलग डिवीजनों में बांटने के लिए सबसे लोकप्रिय ब्लॉक टैग कौन-सा है[span_24](start_span)[span_24](end_span)?",
        options: ["`<section>`", "<part>", "<division>", "`<div>`"],
        answer: 3
    },
    {
        question: "Pre-formatted Elements (`<pre>`) का मुख्य कार्य HTML में क्या होता है[span_25](start_span)[span_25](end_span)?",
        options: ["जैसा टेक्स्ट लिखा है, बिल्कुल वैसा ही स्पेस और लाइन ब्रेक के साथ प्रदर्शित करना", "टेक्स्ट को कोड में बदलना", "टेक्स्ट को छिपाना", "टेक्स्ट को एनिमेट करना"],
        answer: 0
    },
    {
        question: "`<pre>` टैग के अंदर दिए गए अतिरिक्त स्पेस और न्यू-लाइन को वेब ब्राउज़र क्या करता है[span_26](start_span)[span_26](end_span)?",
        options: ["इग्नोर कर देता है", "वैसे ही सुरक्षित रखता है (Preserve करता है)", "ऑटो डिलीट कर देता है", "एरर दिखाता है"],
        answer: 1
    },
    {
        question: "कम्प्यूटर कोड या प्रोग्रामिंग आउटपुट को उसकी मूल फॉर्मेटिंग (Spacing & Indentation) के साथ ज्यों का त्यों दिखाने के लिए किस टैग का उपयोग होता है[span_27](start_span)[span_27](end_span)?",
        options: ["`<code>`", "`<p>`", "`<pre>`", "`<text>`"],
        answer: 2
    },
    {
        question: "`<pre>` टैग आमतौर पर टेक्स्ट को किस प्रकार के फॉंट में प्रदर्शित करता है[span_28](start_span)[span_28](end_span)?",
        options: ["Arial", "Times New Roman", "Cursive", "मोनोस्पेस (Monospace font)"],
        answer: 3
    },
    {
        question: "HTML में `<pre>` टैग का उपयोग करते समय क्या बार-बार स्पेस एंटिटी (`&nbsp;`) लिखने की जरूरत पड़ती है[span_29](start_span)[span_29](end_span)?",
        options: ["नहीं, क्योंकि यह खुद स्पेस और फॉर्मेटिंग संभाल लेता है", "हाँ, इसके बिना स्पेस काम नहीं करता", "केवल मोबाइल व्यू में पड़ती है", "हाँ, हमेशा"],
        answer: 0
    },
    {
        question: "निम्नलिखित में से कौन-सा टैग यूजर द्वारा दिए गए व्हाइट-स्पेस (White-spaces) और लाइन्स को ब्राउज़र द्वारा एक सिंगल स्पेस में बदलने से रोकता है[span_30](start_span)[span_30](end_span)?",
        options: ["`<pre>`", "`<div>`", "`<font>`", "`<hr>`"],
        answer: 1
    },
        {
        question: "HTML में हेडिंग एलिमेंट्स (`<h1>` से `<h6>`) का उपयोग मुख्य रूप से किस लिए किया जाता है[span_1](start_span)[span_1](end_span)?",
        options: ["डेटाबेस मैनेज करने के लिए", "वेब पेज पर शीर्षक या हेडलाइंस (Headlines) देने के लिए", "इमेज अपलोड करने के लिए", "फॉर्म डिजाइन करने के लिए"],
        answer: 1
    },
    {
        question: "HTML में फॉंट का साइज, रंग और फेस बदलने के लिए किस टैग (`Font Tags`) का उपयोग किया जाता है[span_2](start_span)[span_2](end_span)?",
        options: ["`<font>`", "<textstyle>", "<fontsize>", "<stylefont>"],
        answer: 0
    },
    {
        question: "`<font>` टैग के साथ टेक्स्ट का फॉंट स्टाइल (जैसे Arial या Times New Roman) बदलने के लिए कौन-सा एट्रिब्यूट इस्तेमाल होता है[span_3](start_span)[span_3](end_span)?",
        options: ["family", "style", "face", "type"],
        answer: 2
    },
    {
        question: "HTML में `<Div>` Elements किस प्रकार का कंटेनर माना जाता है[span_4](start_span)[span_4](end_span)?",
        options: ["इनलाइन कंटेनर (Inline container)", "ब्लॉक-लेवल कंटेनर (Block-level container)", "एम्प्टी कंटेनर", "टेक्स्ट कंटेनर"],
        answer: 1
    },
    {
        question: "`<div>` टैग का मुख्य उपयोग वेब पेज पर क्या करने के लिए होता है[span_5](start_span)[span_5](end_span)?",
        options: ["लेआउट बनाने और एलिमेंट्स को समूहीकृत (Group) करने के लिए", "सिर्फ लाइन खींचने के लिए", "लिंक बनाने के लिए", "तस्वीर दिखाने के लिए"],
        answer: 0
    },
    {
        question: "Pre-formatted Elements (`<pre>`) का मुख्य कार्य HTML में क्या होता है[span_6](start_span)[span_6](end_span)?",
        options: ["टेक्स्ट को कोड में बदलना", "जैसा टेक्स्ट लिखा है, बिल्कुल वैसा ही स्पेस और लाइन ब्रेक के साथ प्रदर्शित करना", "टेक्स्ट को छिपाना", "टेक्स्ट को एनिमेट करना"],
        answer: 1
    },
    {
        question: "`<pre>` टैग के अंदर दिए गए अतिरिक्त स्पेस और न्यू-लाइन को वेब ब्राउज़र क्या करता है[span_7](start_span)[span_7](end_span)?",
        options: ["इग्नोर कर देता है", "ऑटो डिलीट कर देता है", "वैसे ही सुरक्षित रखता है (Preserve करता है)", "एरर दिखाता है"],
        answer: 2
    },
    {
        question: "HTML में कमेंट (Comment in HTML) लिखने के लिए सही सिंटैक्स कौन-सा है[span_8](start_span)[span_8](end_span)?",
        options: ["<!-- यह कमेंट है -->", "// यह कमेंट है", "/* यह कमेंट है */", "# यह कमेंट है"],
        answer: 0
    },
    {
        question: "वेब ब्राउज़र HTML कोड के अंदर लिखे गए कमेंट्स (Comments) के साथ क्या करता है[span_9](start_span)[span_9](end_span)?",
        options: ["स्क्रीन पर प्रदर्शित करता है", "उन्हें पूरी तरह इग्नोर (Display नहीं) करता है", "एरर देता है", "उन्हें लिंक में बदल देता है"],
        answer: 1
    },
    {
        question: "वेब पेज पर हाइपरलिंक (Hyperlink) बनाने के लिए किस Anchor Element का उपयोग किया जाता है[span_10](start_span)[span_10](end_span)?",
        options: ["`<link>`", "`<a>`", "`<href>`", "`<hyper>`"],
        answer: 1
    },
    {
        question: "Anchor Element (`<a>`) के साथ हाइपरटेक्स्ट रेफ़रेंस देने के लिए किस एट्रिब्यूट (Hypertext reference attribute) का उपयोग होता है[span_11](start_span)[span_11](end_span)?",
        options: ["src", "link", "href", "url"],
        answer: 2
    },
    {
        question: "Anchor Element में `Name attribute` का मुख्य उपयोग किस लिए किया जाता है[span_12](start_span)[span_12](end_span)?",
        options: ["पेज के भीतर किसी विशिष्ट हिस्से (Bookmark/Target) को चिन्हित करने के लिए", "एक्सटर्नल वेबसाइट खोलने के लिए", "लिंक का रंग बदलने के लिए", "फाइल डाउनलोड करने के लिए"],
        answer: 0
    },
    {
        question: "Anchor Element में `Title Attribute` का क्या कार्य होता है[span_13](start_span)[span_13](end_span)?",
        options: ["लिंक का मुख्य यूआरएल बदलना", "माउस ले जाने पर टूलटिप (Tooltip) या अतिरिक्त जानकारी दिखाना", "लिंक को नए टैब में खोलना", "लिंक का नाम छिपाना"],
        answer: 1
    },
    {
        question: "लिंक को किसी नए ब्राउज़र टैब या विंडो में खोलने के लिए Anchor Tag में किस `Target Attribute` का उपयोग किया जाता है[span_14](start_span)[span_14](end_span)?",
        options: ["target=\"_self\"", "target=\"_parent\"", "target=\"_blank\"", "target=\"_top\""],
        answer: 2
    },
    {
        question: "Global Link का संबंध HTML में किससे होता है[span_15](start_span)[span_15](end_span)?",
        options: ["एक ही पेज के अंदर कूदने से", "किसी बाहरी वेबसाइट या इंटरनेट के दूसरे सर्वर पर मौजूद पेज के पूर्ण URL से लिंक करने से", "लोकल फाइल खोलने से", "इमेज लिंक करने से"],
        answer: 1
    },
    {
        question: "HTML में लिस्ट (Create List) बनाने के मुख्य रूप से कितने प्रकार होते हैं[span_16](start_span)[span_16](end_span)?",
        options: ["केवल 1", "केवल 2", "3 मुख्य प्रकार (Ordered, Unordered, Definition)", "5 प्रकार"],
        answer: 2
    },
    {
        question: "Ordered List Element (`<ol>`) में आइटम्स को किस रूप में प्रदर्शित किया जाता है[span_17](start_span)[span_17](end_span)?",
        options: ["क्रमांकित (Numbered या Alphabetical sequence) रूप में", "बुललेट्स (Bullets) के रूप में", "बिना किसी क्रम के", "डिफ़िनिशन के रूप में"],
        answer: 0
    },
    {
        question: "Unordered List Element (`<ul>`) में आइटम्स को दर्शाने के लिए डिफ़ॉल्ट रूप से क्या उपयोग होता है[span_18](start_span)[span_18](end_span)?",
        options: ["नंबर (1, 2, 3)", "अक्षर (A, B, C)", "बुललेट्स (Bullets या Dots)", "रोमन अंक"],
        answer: 2
    },
    {
        question: "Ordered या Unordered लिस्ट के प्रत्येक आइटम को जोड़ने के लिए किस टैग (`List Item`) का उपयोग होता है[span_19](start_span)[span_19](end_span)?",
        options: ["`<item>`", "`<li>`", "`<ul>`", "`<ol>`"],
        answer: 1
    },
    {
        question: "Definition List Element (`<dl>`) के अंतर्गत शब्दों (Terms) को परिभाषित करने के लिए मुख्य रूप से किन दो टैग्स का जोड़ा इस्तेमाल होता है[span_20](start_span)[span_20](end_span)?",
        options: ["`<dt>` और `<dd>`", "`<ul>` और `<li>`", "`<ol>` और `<li>`", "`<heading>` और `<paragraph>`"],
        answer: 0
    },
    {
        question: "Nested Lists का क्या अर्थ है[span_21](start_span)[span_21](end_span)?",
        options: ["एक ही लाइन में कई सारे लिंक देना", "एक लिस्ट के अंदर दूसरी लिस्ट (List inside a list) बनाना", "टेबल के अंदर लिस्ट बनाना", "इमेज के साथ लिस्ट जोड़ना"],
        answer: 1
    },
    {
        question: "HTML में `<head>` सेक्शन के अंदर सबसे बड़ा हेडिंग टैग कौन-सा माना जाता है[span_22](start_span)[span_22](end_span)?",
        options: ["`<h6>`", "`<h3>`", "`<h1>`", "`<h10>`"],
        answer: 2
    },
    {
        question: "`<font>` टैग के माध्यम से टेक्स्ट का रंग बदलने के लिए कौन-सा एट्रिब्यूट होता है[span_23](start_span)[span_23](end_span)?",
        options: ["text-color", "color", "bgcolor", "fontcolor"],
        answer: 1
    },
    {
        question: "निम्नलिखित में से कौन-सा एक ब्लॉक-लेवल एलिमेंट (Block-level element) है[span_24](start_span)[span_24](end_span)?",
        options: ["`<span>`", "`<a>`", "`<div>`", "`<img>`"],
        answer: 2
    },
    {
        question: "कम्प्यूटर प्रोग्रामिंग कोड को उसकी मूल फॉर्मेटिंग के साथ वेब पेज पर दिखाने के लिए `<pre>` के साथ और किस टैग का अक्सर उपयोग होता है[span_25](start_span)[span_25](end_span)?",
        options: ["`<code>`", "`<text>`", "`<format>`", "`<p>`"],
        answer: 0
    },
    {
        question: "HTML कोड में मल्टी-लाइन कमेंट लिखने का सही तरीका इनमें से कौन-सा है[span_26](start_span)[span_26](end_span)?",
        options: ["<!-- लाइन 1 \n लाइन 2 -->", "// लाइन 1 \n // लाइन 2", "/* लाइन 1 \n लाइन 2 */", "# लाइन 1 \n # लाइन 2"],
        answer: 0
    },
    {
        question: "Anchor Element (`<a>`) के बिना `href` एट्रिब्यूट के क्या यह एक वास्तविक हाइपरलिंक की तरह काम करेगा[span_27](start_span)[span_27](end_span)?",
        options: ["हाँ, यह अपने आप लिंक बन जाएगा", "नहीं, यह सामान्य टेक्स्ट या प्लेसहॉल्डर की तरह रहेगा", "यह एरर देगा", "यह इमेज बन जाएगा"],
        answer: 1
    },
    {
        question: "यदि आप चाहते हैं कि लिंक पर क्लिक करने पर पेज उसी विंडो में खुले, तो `target` एट्रिब्यूट में क्या मान देना चाहिए (या डिफ़ॉल्ट क्या होता है)[span_28](start_span)[span_28](end_span)?",
        options: ["`_blank`", "`_new`", "`_self`", "`_parent`"],
        answer: 2
    },
    {
        question: "Ordered List (`<ol>`) में नंबरिंग का स्टाइल (जैसे रोमन या एबीसी) बदलने के लिए किस एट्रिब्यूट का उपयोग किया जाता है[span_29](start_span)[span_29](end_span)?",
        options: ["bullet", "type", "style", "format"],
        answer: 1
    },
    {
        question: "Unordered List (`<ul>`) में बुलेट का स्टाइल (जैसे disc, circle, square) बदलने के लिए किस एट्रिब्यूट या प्रॉपर्टी का उपयोग किया जाता है[span_30](start_span)[span_30](end_span)?",
        options: ["type", "shape", "style", "mode"],
        answer: 0
    },
    {
        question: "Definition List में `<dt>` का पूरा नाम या अर्थ क्या होता है[span_31](start_span)[span_31](end_span)?",
        options: ["Data Text", "Definition Term", "Display Title", "Document Tag"],
        answer: 1
    },
    {
        question: "Definition List में `<dd>` टैग का उपयोग किस लिए होता है[span_32](start_span)[span_32](end_span)?",
        options: ["Definition Data या उस टर्म का विवरण (Description) देने के लिए", "डेटाबेस जोड़ने के लिए", "डॉट डिजाइन करने के लिए", "डायरेक्टरी बनाने के लिए"],
        answer: 0
    },
    {
        question: "Nested Lists बनाते समय आमतौर पर `<ul>` या `<ol>` को किसके अंदर नेस्ट किया जाता है[span_33](start_span)[span_33](end_span)?",
        options: ["किसी दूसरे `<li>` (List Item) के भीतर", "सीधे `<body>` के बाहर", "`<head>` के अंदर", "`<title>` के अंदर"],
        answer: 0
    },
    {
        question: "HTML में `<heading>` नाम का कोई टैग होता है या हेडिंग के लिए `<h1>` से `<h6>` तक का उपयोग होता है[span_34](start_span)[span_34](end_span)?",
        options: ["`<heading>` टैग होता है", "`<h1>` से `<h6>` टैग्स का उपयोग होता है", "केवल `<head>` होता है", "इनमें से कोई नहीं"],
        answer: 1
    },
    {
        question: "`<font size=\"5\">` लिखने पर टेक्स्ट का साइज डिफ़ॉल्ट बेससाइज के मुकाबले कैसा हो जाता है[span_35](start_span)[span_35](end_span)?",
        options: ["छोटा हो जाता है", "बड़ा हो जाता है", "गायब हो जाता है", "कोई असर नहीं होता"],
        answer: 1
    },
    {
        question: "वेब पेज पर डिवीजनों (`<div>`) का उपयोग करने से वेब डेवलपर्स को किस कार्य में आसानी होती है[span_36](start_span)[span_36](end_span)?",
        options: ["CSS और JavaScript के जरिए स्टाइलिंग और लेआउट मैनेज करने में", "सिर्फ स्पेलिंग चेक करने में", "प्रिंट निकालने में", "इंटरनेट स्पीड बढ़ाने में"],
        answer: 0
    },
    {
        question: "HTML डॉक्यूमेंट में `<pre>` टैग के भीतर लिखे गए स्पेस ब्राउज़र द्वारा कैसे दिखते हैं[span_37](start_span)[span_37](end_span)?",
        options: ["हटा दिए जाते हैं", "एक स्पेस में बदल जाते हैं", "बिल्कुल वैसे ही दिखते हैं जैसे कोड में टाइप किए गए हैं", "अक्षरों को उल्टा कर देते हैं"],
        answer: 2
    },
    {
        question: "अगर आप किसी इमेज को भी हाइपरलिंक बनाना चाहते हैं, तो उसे किसके अंदर रैप (Wrap) करना होगा[span_38](start_span)[span_38](end_span)?",
        options: ["`<a>` टैग के अंदर", "`<p>` टैग के अंदर", "`<br>` टैग के अंदर", "`<hr>` टैग के अंदर"],
        answer: 0
    },
    {
        question: "HTML लिस्ट्स में यदि आप क्रम को उल्टे क्रम (Descending order जैसे 10, 9, 8...) में चलाना चाहते हैं, तो `<ol>` में किस एट्रिब्यूट का उपयोग किया जाता है[span_39](start_span)[span_39](end_span)?",
        options: ["reverse", "backward", "reversed", "down"],
        answer: 2
    },
    {
        question: "निम्नलिखित में से कौन-सा विकल्प HTML में लिस्ट का सही प्रकार **नहीं** है[span_40](start_span)[span_40](end_span)?",
        options: ["Ordered List", "Unordered List", "Definition List", "Table List"],
        answer: 3
    },
    {
        question: "HTML में एक नई टेबल (Table) बनाने के लिए किस मुख्य टैग का उपयोग किया जाता है?",
        options: ["<table>", "<tab>", "<tbl>", "<grid>"],
        answer: 0
    },
    {
        question: "HTML टेबल के अंदर एक नई रो (Table Row) जोड़ने के लिए किस टैग का उपयोग होता है?",
        options: ["<trow>", "<tr>", "<td-row>", "<r>"],
        answer: 1
    },
    {
        question: "टेबल के भीतर सामान्य डेटा सेल (Table Data) बनाने के लिए किस टैग का उपयोग किया जाता है?",
        options: ["<data>", "<tc>", "<td>", "<cell>"],
        answer: 2
    },
    {
        question: "HTML टेबल में हेडिंग सेल (Table Header) को परिभाषित करने के लिए कौन-सा टैग इस्तेमाल होता है?",
        options: ["<heading>", "<head-cell>", "<th-row>", "<th>"],
        answer: 3
    },
    {
        question: "`<th>` टैग के अंदर लिखा गया टेक्स्ट डिफ़ॉल्ट रूप से वेब ब्राउज़र में कैसा दिखाई देता है?",
        options: ["बोल्ड (Bold) और सेंटर एलाइन", "केवल तिरछा (Italic)", "अंडरलाइन के साथ", "छोटे अक्षरों में"],
        answer: 0
    },
    {
        question: "टेबल के चारों ओर बॉर्डर की मोटाई तय करने के लिए `<table>` टैग में किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["width", "border", "lines", "thickness"],
        answer: 1
    },
    {
        question: "सेल के भीतर के कंटेंट और सेल बॉर्डर के बीच की आंतरिक दूरी (Internal padding) तय करने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["cell-space", "spacing", "cellpadding", "padding-box"],
        answer: 2
    },
    {
        question: "दो अलग-अलग सेल्स के बीच की बाहरी दूरी (Space between cells) तय करने के लिए कौन-सा एट्रिब्यूट इस्तेमाल होता है?",
        options: ["cell-margin", "distance", "grid-gap", "cellspacing"],
        answer: 3
    },
    {
        question: "एक से अधिकrows को вертикально आपस में मिलाने (Merge करने) के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["rowspan", "colspan", "mergerow", "combinerows"],
        answer: 0
    },
    {
        question: "एक ही रो की कई सेल्स को क्षैतिज रूप से (Horizontally) आपस में मिलाने के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["rowspan", "colspan", "mergecol", "span-horizontal"],
        answer: 1
    },
    {
        question: "HTML टेबल में शीर्षक या कैप्शन (Table Caption) जोड़ने के लिए किस टैग का उपयोग किया जाता है?",
        options: ["<title>", "<label>", "<caption>", "<table-name>"],
        answer: 2
    },
    {
        question: "टेबल के भीतर बैकग्राउंड का रंग (Background Color) बदलने के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["color", "backcolor", "table-color", "bgcolor"],
        answer: 3
    },
    {
        question: "टेबल की कुल चौड़ाई (Width) प्रतिशत या पिक्सेल में सेट करने के लिए `<table>` में कौन-सा एट्रिब्यूट होता है?",
        options: ["width", "size", "dimension", "span"],
        answer: 0
    },
    {
        question: "टेबल की ऊंचाई (Height) तय करने के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["tall", "height", "depth", "vertical-size"],
        answer: 1
    },
    {
        question: "टेबल के भीतर टेक्स्ट या कंटेंट की क्षैतिज स्थिति (जैसे left, right, center) तय करने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["valign", "position", "align", "direction"],
        answer: 2
    },
    {
        question: "सेल के भीतर कंटेंट की ऊर्ध्वाधर स्थिति (जैसे top, middle, bottom) तय करने के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["vertical-align", "cell-align", "top-bottom", "valign"],
        answer: 3
    },
    {
        question: "बड़े डेटा को व्यवस्थित करने के लिए टेबल के शीर्ष हिस्से को अलग से ग्रुप करने हेतु किस टैग का उपयोग होता है?",
        options: ["<thead>", "<top-table>", "<head-part>", "<table-header>"],
        answer: 0
    },
    {
        question: "टेबल के मुख्य बॉडी भाग को समूहीकृत करने के लिए किस टैग का उपयोग किया जाता है?",
        options: ["<tdata>", "<tbody>", "<main-table>", "<table-body>"],
        answer: 1
    },
    {
        question: "टेबल के सबसे नीचे फुटर हिस्से (जैसे टोटल या समरी) को दर्शाने के लिए किस टैग का उपयोग होता है?",
        options: ["<bottom>", "<table-footer>", "<tfoot>", "<summary>"],
        answer: 2
    },
    {
        question: "HTML में नेस्टेड टेबल (Nested Table) का क्या अर्थ है?",
        options: ["टेबल के बिना लिस्ट बनाना", "दो अलग-अलग फाइलों की टेबल जोड़ना", "केवल बॉर्डर हटाना", "एक टेबल के भीतर दूसरी टेबल (Table inside a table) बनाना"],
        answer: 3
    },
    {
        question: "यदि आप चाहते हैं कि टेबल सेल का बॉर्डर गायब रहे या बॉर्डर न दिखे, तो `border` एट्रिब्यूट का मान क्या होना चाहिए?",
        options: ["border=\"0\" या बॉर्डर न लिखें", "border=\"1\"", "border=\"none\"", "border=\"hidden\""],
        answer: 0
    },
    {
        question: "HTML टेबल में किसी एक विशिष्ट सेल का बैकग्राउंड कलर बदलने के लिए `<td>` टैग के साथ क्या उपयोग किया जा सकता है?",
        options: ["color", "bgcolor", "background", "cellcolor"],
        answer: 1
    },
    {
        question: "निम्नलिखित में से कौन-सा टैग टेबल संरचना का अनिवार्य हिस्सा **नहीं** है (यानी इसके बिना बेसिक टेबल नहीं बनती)?",
        options: ["<table>", "<tr>", "<caption>", "<td>"],
        answer: 2
    },
    {
        question: "यदि किसी टेबल में `colspan=\"3\"` लिखा गया है, तो इसका क्या मतलब है?",
        options: ["तीन रो आपस में मिल गई हैं", "टेबल की चौड़ाई 3 गुना हो गई है", "तीन टेबल एक साथ हैं", "वह सेल अपने दाईं ओर के तीन कॉलम की जगह घेर रही है"],
        answer: 3
    },
    {
        question: "यदि किसी टेबल सेल में `rowspan=\"2\"` दिया गया है, तो वह सेल कितनी रो की जगह घेरेगी?",
        options: ["ऊपर और नीचे मिलाकर 2 रो की", "केवल 1 रो की", "2 कॉलम की", "कोई जगह नहीं"],
        answer: 0
    },
    {
        question: "HTML में `<caption>` टैग को हमेशा `<table>` टैग के तुरंत बाद किस रूप में लिखा जाना चाहिए?",
        options: ["अंत में", "सबसे पहले (First child of table)", "बॉडी टैग के बाहर", "हेड सेक्शन में"],
        answer: 1
    },
    {
        question: "पारंपरिक HTML में टेबल को वेब पेज के बीचों-बीच (Center) दिखाने के लिए `<table>` में किस एट्रिब्यूट का उपयोग होता था?",
        options: ["middle", "position=\"center\"", "align=\"center\"", "center=\"true\""],
        answer: 2
    },
    {
        question: "निम्नलिखित में से कौन-सा टैग टेबल सेल के अंदर बोल्ड और सेंटर हेडिंग बनाने के लिए सबसे उचित है?",
        options: ["<td>", "<tr>", "<table>", "<th>"],
        answer: 3
    },
    {
        question: "HTML टेब्लों में सेल के अंदर की सामग्री (Content) का स्पेस मैनेज करने के लिए मुख्य रूप से किसका उपयोग होता है?",
        options: ["cellpadding और cellspacing", "margin और padding", "width और height", "align और valign"],
        answer: 0
    },
    {
        question: "क्या एक ही टेबल में `<thead>`, `<tbody>` और `<tfoot>` तीनों का एक साथ उपयोग किया जा सकता है?",
        options: ["नहीं, केवल एक ही टैग आ सकता है", "हाँ, बड़े डेटा को струк्चर करने के लिए इनका एक साथ उपयोग होता है", "केवल <thead> और <tbody> मान्य हैं", "यह केवल सीएसएस में संभव है"],
        answer: 1
    },
{
        question: "HTML फॉर्म में यूजर से सिंगल-लाइन टेक्स्ट इनपुट लेने के लिए किस इनपुट टाइप का उपयोग किया जाता है?",
        options: ["type=\"text\"", "type=\"password\"", "type=\"input\"", "type=\"string\""],
        answer: 0
    },
    {
        question: "पासवर्ड फील्ड के अंदर कैरेक्टर्स को डॉट या स्टार के रूप में छिपाने के लिए कौन-सा टाइप उपयोग होता है?",
        options: ["type=\"secure\"", "type=\"hidden\"", "type=\"password\"", "type=\"text\""],
        answer: 2
    },
    {
        question: "इनपुट फील्ड के अंदर हल्का सा प्लेसहॉल्डर टेक्स्ट (हिंट) दिखाने के लिए किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["value", "placeholder", "title", "alt"],
        answer: 1
    },
    {
        question: "किसी इनपुट फील्ड को अनिवार्य (बिना भरे फॉर्म आगे न बढ़े) बनाने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["validate", "mandatory", "required", "needed"],
        answer: 2
    },
    {
        question: "HTML फॉर्म में कई विकल्पों में से केवल एक विकल्प चुनने के लिए किस इनपुट टाइप का उपयोग होता है?",
        options: ["checkbox", "radio", "select", "option"],
        answer: 1
    },
    {
        question: "चेकबॉक्स (Checkbox) इनपुट टाइप का मुख्य उपयोग किस लिए होता है?",
        options: ["केवल एक विकल्प चुनने के लिए", "एक से अधिक विकल्प (Multiple options) चुनने के लिए", "पासवर्ड छिपाने के लिए", "फाइल अपलोड करने के लिए"],
        answer: 1
    },
    {
        question: "फॉर्म सबमिट करने के लिए क्लिक करने योग्य बटन बनाने के लिए कौन-सा इनपुट टाइप होता है?",
        options: ["type=\"button\"", "type=\"send\"", "type=\"submit\"", "type=\"go\""],
        answer: 2
    },
    {
        question: "इनपुट फील्ड में केवल नंबर स्वीकार हों, इसके लिए कौन-सा टाइप उपयोग किया जाता है?",
        options: ["type=\"number\"", "type=\"digit\"", "type=\"numeric\"", "type=\"integer\""],
        answer: 0
    },
    {
        question: "फॉर्म की सभी फील्ड्स को उनकी डिफॉल्ट वैल्यू पर वापस लाने (रीसेट करने) के लिए किस टाइप का उपयोग होता है?",
        options: ["type=\"clear\"", "type=\"refresh\"", "type=\"reset\"", "type=\"default\""],
        answer: 2
    },
    {
        question: "यूजर से कंप्यूटर से कोई फाइल (जैसे इमेज या डॉक्यूमेंट) अपलोड कराने के लिए कौन-सा इनपुट टाइप होता है?",
        options: ["type=\"media\"", "type=\"file\"", "type=\"upload\"", "type=\"document\""],
        answer: 1
    },
    {
        question: "इनपुट फील्ड को रीड-ऑनली (केवल पढ़ने के लिए, एडिट न किया जा सके) बनाने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["disabled", "uneditable", "readonly", "locked"],
        answer: 2
    },
    {
        question: "किसी इनपुट फील्ड को पूरी तरह निष्क्रिय या डिसेबल करने के लिए कौन-सा एट्रिब्यूट उपयोग होता है?",
        options: ["disabled", "inactive", "off", "block"],
        answer: 0
    },
    {
        question: "कैलेंडर से तारीख (Date) चुनने के लिए HTML5 में किस इनपुट टाइप का उपयोग होता है?",
        options: ["type=\"calendar\"", "type=\"time\"", "type=\"date\"", "type=\"sched\""],
        answer: 2
    },
    {
        question: "वेब पेज पर कलर पिकर (रंग चुनने का टूल) दिखाने के लिए कौन-सा इनपुट टाइप होता है?",
        options: ["type=\"paint\"", "type=\"color\"", "type=\"palette\"", "type=\"rgb\""],
        answer: 1
    },
    {
        question: "स्लाइडर कंट्रोल बनाने के लिए (एक रेंज में वैल्यू चुनने के लिए) किस इनपुट टाइप का उपयोग होता है?",
        options: ["type=\"slider\"", "type=\"scroll\"", "type=\"range\"", "type=\"scale\""],
        answer: 2
    },
    {
        question: "इनपुट फील्ड के अंदर पहले से प्रीडिफ़ाइंड वैल्यू सेट करके रखने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["default", "value", "data", "set"],
        answer: 1
    },
    {
        question: "सर्वर को डेटा भेजते समय इनपुट फील्ड की पहचान (Identification) के लिए कौन-सा एट्रिब्यूट सबसे जरूरी होता है?",
        options: ["id", "class", "name", "key"],
        answer: 2
    },
    {
        question: "रेडियो बटन्स के ग्रुप को आपस में जोड़ने के लिए सभी रेडियो इनपुट का कौन-सा एट्रिब्यूट एक जैसा होना चाहिए?",
        options: ["id", "value", "group", "name"],
        answer: 3
    },
    {
        question: "टेक्स्ट इनपुट में यूजर अधिकतम कितने कैरेक्टर्स टाइप कर सकता है, यह लिमिट सेट करने के लिए कौन-सा एट्रिब्यूट है?",
        options: ["size", "maxlength", "limit", "length"],
        answer: 1
    },
    {
        question: "ऐसा इनपुट टाइप जो यूजर को स्क्रीन पर दिखाई नहीं देता लेकिन फॉर्म सबमिट होने पर बैकएंड पर डेटा भेजता है, वह कौन-सा है?",
        options: ["type=\"invisible\"", "type=\"secret\"", "type=\"hidden\"", "type=\"none\""],
        answer: 2
    },
    {
        question: "ईमेल एड्रेस का सही फॉर्मेट (जैसे @ सिंबल होना) ऑटोमैटिक चेक कराने के लिए किस इनपुट टाइप का उपयोग होता है?",
        options: ["type=\"mail\"", "type=\"email\"", "type=\"at\"", "type=\"text/email\""],
        answer: 1
    },
    {
        question: "वेबसाइट का URL या वेब एड्रेस लेने के लिए इनपुट का कौन-सा टाइप सबसे बेहतर माना जाता है?",
        options: ["type=\"website\"", "type=\"link\"", "type=\"url\"", "type=\"web\""],
        answer: 2
    },
    {
        question: "नंबर या रेंज टाइप में न्यूनतम और अधिकतम लिमिट सेट करने के लिए किन एट्रिब्यूट्स का उपयोग होता है?",
        options: ["min और max", "start aur end", "low aur high", "limit-min aur limit-max"],
        answer: 0
    },
    {
        question: "रेंज या नंबर इनपुट में वैल्यूज कितने गैप (इंक्रीमेंट वैल्यू) से आगे बढ़ेंगी, यह तय करने के लिए कौन-सा एट्रिब्यूट है?",
        options: ["jump", "gap", "increment", "step"],
        answer: 3
    },
    {
        question: "चेकबॉक्स या रेडियो बटन को पेज लोड होते ही पहले से टिक किया हुआ (Selected) रखने के लिए किस एट्रिब्यूट का उपयोग होता है?",
        options: ["selected", "checked", "active", "ticked"],
        answer: 1
    },
        {
        question: "CSS का पूरा नाम (Full Form) क्या है?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 1
    },
    {
        question: "CSS का प्रस्ताव सबसे पहले किसने दिया था?",
        options: ["टिम बर्नर्स-ली", "ब्रेंडन आइक", "हाकॉन वियम ली (Håkon Wium Lie)", "बिल गेट्स"],
        answer: 2
    },
    {
        question: "CSS का प्रस्ताव किस वर्ष दिया गया था?",
        options: ["1991", "1994", "1996", "1998"],
        answer: 1
    },
    {
        question: "CSS के विकास में हाकॉन वियम ली के साथ किसने सहयोग किया था?",
        options: ["लैरी पेज", "डेनिस रिची", "जेम्स गोसलिंग", "बर्ट बॉस (Bert Bos)"],
        answer: 3
    },
    {
        question: "CSS का पहला आधिकारिक संस्करण CSS1 कब W3C Recommendation बना था?",
        options: ["17 दिसंबर 1996", "10 जनवरी 1994", "15 अगस्त 1998", "1 जनवरी 2000"],
        answer: 0
    },
    {
        question: "CSS का मुख्य उपयोग किस कार्य के लिए किया जाता है?",
        options: ["वेबसाइट का डेटाबेस बनाने के लिए", "वेबसाइट को स्टाइल और डिजाइन देने के लिए", "वेबसाइट पर सर्वर चलाने के लिए", "वेबसाइट में प्रोग्रामिंग लॉजिक लिखने के लिए"],
        answer: 1
    },
    {
        question: "CSS फाइल का एक्सटेंशन क्या होता है?",
        options: [".html", ".js", ".css", ".xml"],
        answer: 2
    },
    {
        question: "CSS कोड लिखने के लिए सामान्यतः किस सिंटैक्स का उपयोग किया जाता है?",
        options: ["Selector { Property: Value; }", "Property (Selector = Value)", "Selector [Value: Property]", "Value { Selector = Property; }"],
        answer: 0
    },
    {
        question: "CSS में किसी HTML एलिमेंट को चुनने वाले भाग को क्या कहा जाता है?",
        options: ["Value", "Property", "Declaration", "Selector"],
        answer: 3
    },
    {
        question: "CSS में Property और Value को अलग करने के लिए किस चिन्ह का उपयोग होता है?",
        options: ["सेमीकोलन (;)", "कोलन (:)", "कॉमा (,)", "डॉट (.)"],
        answer: 1
    },
    {
        question: "CSS में एक Declaration के अंत में सामान्यतः कौन-सा चिन्ह लगाया जाता है?",
        options: ["कोलन (:)", "हैश (#)", "सेमीकोलन (;)", "स्लैश (/)"],
        answer: 2
    },
    {
        question: "CSS के मुख्य प्रकार कितने होते हैं?",
        options: ["तीन", "दो", "चार", "पाँच"],
        answer: 0
    },
    {
        question: "HTML एलिमेंट के style एट्रिब्यूट में CSS लिखने की विधि क्या कहलाती है?",
        options: ["External CSS", "Internal CSS", "Embedded CSS", "Inline CSS"],
        answer: 3
    },
    {
        question: "HTML डॉक्यूमेंट के <style> टैग के अंदर CSS लिखने की विधि क्या कहलाती है?",
        options: ["Inline CSS", "Internal CSS", "External CSS", "Global CSS"],
        answer: 1
    },
    {
        question: "अलग .css फाइल बनाकर HTML से जोड़ने वाली विधि क्या कहलाती है?",
        options: ["Internal CSS", "Inline CSS", "External CSS", "Local CSS"],
        answer: 2
    },
        {
        question: "Inline CSS लिखने के लिए HTML में किस एट्रिब्यूट का उपयोग किया जाता है?",
        options: ["class", "style", "id", "href"],
        answer: 1
    },
    {
        question: "Inline CSS का सही सिंटैक्स कौन-सा है?",
        options: ["<p css='color:red'>Hello</p>", "<p href='color:red'>Hello</p>", "<p style='color:red;'>Hello</p>", "<p class='color:red'>Hello</p>"],
        answer: 2
    },
    {
        question: "Internal CSS लिखने के लिए किस HTML टैग का उपयोग किया जाता है?",
        options: ["<css>", "<script>", "<link>", "<style>"],
        answer: 3
    },
    {
        question: "Internal CSS में <style> टैग सामान्यतः HTML डॉक्यूमेंट के किस भाग में लिखा जाता है?",
        options: ["<head> सेक्शन में", "<footer> सेक्शन में", "<body> के अंत में ही", "<title> टैग के अंदर"],
        answer: 0
    },
    {
        question: "Internal CSS का सही सिंटैक्स कौन-सा है?",
        options: ["<style> p = color:red; </style>", "<style> p { color: red; } </style>", "<css> p { color: red; } </css>", "<script> p { color: red; } </script>"],
        answer: 1
    },
    {
        question: "External CSS फाइल को HTML डॉक्यूमेंट से जोड़ने के लिए किस टैग का उपयोग होता है?",
        options: ["<style>", "<script>", "<link>", "<css>"],
        answer: 2
    },
    {
        question: "External CSS को जोड़ने के लिए <link> टैग में कौन-सा rel एट्रिब्यूट लिखा जाता है?",
        options: ["stylesheet", "style", "cssfile", "external"],
        answer: 0
    },
    {
        question: "External CSS फाइल को जोड़ने का सही HTML सिंटैक्स कौन-सा है?",
        options: ["<style src='style.css'>", "<css href='style.css'>", "<script src='style.css'></script>", "<link rel='stylesheet' href='style.css'>"],
        answer: 3
    },
    {
        question: "यदि CSS फाइल का नाम design.css है और वह HTML फाइल के समान फोल्डर में है, तो सही href वैल्यू क्या होगी?",
        options: ["href='/design.html'", "href='design.css'", "href='design.js'", "href='#design.css'"],
        answer: 1
    },
    {
        question: "External CSS फाइल में सामान्यतः कौन-सा कोड लिखा जाता है?",
        options: ["<style> p { color: red; } </style>", "<p style='color:red'>", "p { color: red; }", "<link rel='stylesheet'>"],
        answer: 2
    },
    {
        question: "एक ही HTML पेज के कई एलिमेंट्स को एक जैसी स्टाइल देने के लिए कौन-सी CSS विधि उपयोगी होती है?",
        options: ["External CSS", "केवल Inline CSS", "केवल HTML एट्रिब्यूट", "केवल JavaScript"],
        answer: 0
    },
    {
        question: "Inline CSS में एक से अधिक CSS प्रॉपर्टी लिखने पर उन्हें किस चिन्ह से अलग किया जाता है?",
        options: ["कॉमा (,)", "डॉट (.)", "कोलन (:)", "सेमीकोलन (;)"],
        answer: 3
    },
    {
        question: "यदि HTML में Internal CSS लिखी गई है, तो उसे किस टैग के बीच रखा जाता है?",
        options: ["<css> और </css>", "<style> और </style>", "<link> और </link>", "<script> और </script>"],
        answer: 1
    },
    {
        question: "External CSS फाइल को HTML में जोड़ने के लिए href एट्रिब्यूट का क्या कार्य है?",
        options: ["CSS फाइल का पता बताना", "HTML का शीर्षक बताना", "फॉन्ट का आकार तय करना", "वेबपेज का रंग बदलना"],
        answer: 0
    },
    {
        question: "यदि HTML पेज में External CSS फाइल किसी अलग css फोल्डर में रखी गई है, तो सही लिंक कौन-सा होगा?",
        options: ["<link rel='stylesheet' href='style.css'>", "<link rel='stylesheet' src='css/style.css'>", "<link rel='stylesheet' href='css/style.css'>", "<style href='css/style.css'>"],
        answer: 2
    },
        {
        question: "CSS में एक Rule Set मुख्य रूप से किन दो भागों से मिलकर बनता है?",
        options: ["HTML और JavaScript", "Selector और Declaration Block", "Property और HTML Tag", "Class और ID"],
        answer: 1
    },
    {
        question: "CSS में किसी Class Selector को लिखने से पहले किस चिन्ह का उपयोग किया जाता है?",
        options: ["#", ".", "*", ":"],
        answer: 1
    },
    {
        question: "CSS में ID Selector को पहचानने के लिए किस चिन्ह का उपयोग किया जाता है?",
        options: [".", "*", "#", "&"],
        answer: 2
    },
    {
        question: "सभी HTML एलिमेंट्स को चुनने के लिए CSS में किस Selector का उपयोग किया जाता है?",
        options: ["Universal Selector (*)", "Class Selector (.)", "ID Selector (#)", "Element Selector"],
        answer: 0
    },
    {
        question: "CSS में एक से अधिक Selectors पर एक जैसी Styling लागू करने के लिए किसका उपयोग किया जाता है?",
        options: ["Child Selector", "Universal Selector", "Attribute Selector", "Grouping Selector"],
        answer: 3
    },
    {
        question: "CSS में Comment लिखने का सही सिंटैक्स कौन-सा है?",
        options: ["// Comment", "<!-- Comment -->", "/* Comment */", "# Comment"],
        answer: 2
    },
    {
        question: "CSS में किसी HTML एलिमेंट के अंदर मौजूद दूसरे एलिमेंट को चुनने के लिए कौन-सा Selector उपयोग होता है?",
        options: ["Descendant Selector", "Universal Selector", "ID Selector", "Grouping Selector"],
        answer: 0
    },
    {
        question: "CSS में Direct Child Selector के लिए किस चिन्ह का उपयोग किया जाता है?",
        options: ["+", "~", ">", "^"],
        answer: 2
    },
    {
        question: "CSS में किसी एलिमेंट की Hover स्थिति को दर्शाने के लिए कौन-सा सिंटैक्स सही है?",
        options: ["p hover { color: red; }", "p:hover { color: red; }", "p#hover { color: red; }", "p.hover() { color: red; }"],
        answer: 1
    },
    {
        question: "CSS में Attribute Selector का सही उदाहरण कौन-सा है?",
        options: ["input#type { color: red; }", "input.type { color: red; }", "input:type { color: red; }", "input[type='text'] { color: red; }"],
        answer: 3
    },
    {
        question: "CSS में किसी एलिमेंट के पहले आने वाले Pseudo-element को चुनने के लिए किसका उपयोग किया जाता है?",
        options: ["::before", ":hover", "::after", ":first-child"],
        answer: 0
    },
    {
        question: "CSS में Adjacent Sibling Selector के लिए किस चिन्ह का उपयोग किया जाता है?",
        options: ["~", ">", "+", "*"],
        answer: 2
    },
    {
        question: "CSS में General Sibling Selector का सही उदाहरण कौन-सा है?",
        options: ["div > p", "div + p", "div p", "div ~ p"],
        answer: 3
    },
    {
        question: "CSS में @media Rule का उपयोग किस उद्देश्य से किया जाता है?",
        options: ["HTML एलिमेंट बनाने के लिए", "अलग-अलग स्क्रीन और डिवाइस स्थितियों के अनुसार Styling लागू करने के लिए", "JavaScript चलाने के लिए", "CSS फाइल का नाम बदलने के लिए"],
        answer: 1
    },
    {
        question: "CSS में दूसरी Stylesheet को Import करने के लिए किस At-rule का उपयोग किया जाता है?",
        options: ["@import", "@include", "@link", "@style"],
        answer: 0
    },
        {
        question: "CSS में किसी विशेष ID वाले HTML एलिमेंट को चुनने के लिए किस Selector का उपयोग किया जाता है?",
        options: ["Class Selector", "ID Selector", "Element Selector", "Grouping Selector"],
        answer: 1
    },
    {
        question: "यदि HTML एलिमेंट की ID header है, तो उसे चुनने का सही CSS सिंटैक्स क्या होगा?",
        options: [".header", "header", "*header", "#header"],
        answer: 3
    },
    {
        question: "CSS में एक ही एलिमेंट पर दो Class मौजूद हों, तो दोनों क्लास को एक साथ चुनने का सही सिंटैक्स क्या है?",
        options: [".box.active", ".box .active", ".box, active", "#box.active"],
        answer: 0
    },
    {
        question: "CSS में एक ही Class को कई HTML एलिमेंट्स पर लागू किया जा सकता है या नहीं?",
        options: ["नहीं, केवल एक बार", "केवल Head में", "हाँ, कई एलिमेंट्स पर", "केवल एक ID के साथ"],
        answer: 2
    },
    {
        question: "यदि किसी HTML एलिमेंट की Class का नाम container है, तो सही CSS Selector कौन-सा होगा?",
        options: ["#container", "container", ".container", "*container"],
        answer: 2
    },
    {
        question: "CSS में h1, h2 और p को एक साथ चुनने के लिए किस Selector का उपयोग किया जाता है?",
        options: ["Grouping Selector", "ID Selector", "Attribute Selector", "Child Selector"],
        answer: 0
    },
    {
        question: "Grouping Selector में अलग-अलग Selectors को किस चिन्ह से अलग किया जाता है?",
        options: ["कोलन (:)", "सेमीकोलन (;)", "प्लस (+)", "कॉमा (,)"],
        answer: 3
    },
    {
        question: "निम्नलिखित में से Grouping Selector का सही उदाहरण कौन-सा है?",
        options: ["h1 h2 p { color: blue; }", "h1, h2, p { color: blue; }", "h1 > h2 > p { color: blue; }", "h1.h2.p { color: blue; }"],
        answer: 1
    },
    {
        question: "CSS में किसी ऐसे HTML एलिमेंट को चुनने के लिए कौन-सा Attribute Selector उपयोग होता है जिसमें disabled एट्रिब्यूट मौजूद हो?",
        options: ["[disabled]", ".disabled", "#disabled", "::disabled"],
        answer: 0
    },
    {
        question: "CSS में उन Input एलिमेंट्स को चुनने का सही सिंटैक्स क्या है जिनका type password है?",
        options: ["input.password", "input#password", "input[type='password']", "input::password"],
        answer: 2
    },
    {
        question: "CSS में Attribute Selector के माध्यम से किसी एट्रिब्यूट की वैल्यू का अंत किसी विशेष शब्द से होने पर कौन-सा ऑपरेटर उपयोग होता है?",
        options: ["^=", "*=", "~=", "$="],
        answer: 3
    },
    {
        question: "CSS में किसी Attribute की वैल्यू किसी विशेष शब्द से शुरू होती है या नहीं, यह जाँचने के लिए कौन-सा ऑपरेटर उपयोग होता है?",
        options: ["$=", "^=", "*=", "~="],
        answer: 1
    },
    {
        question: "CSS में किसी Attribute की वैल्यू में कोई शब्द कहीं भी मौजूद हो, तो उसे चुनने के लिए कौन-सा ऑपरेटर उपयोग होता है?",
        options: ["^=", "$=", "*=", "|="],
        answer: 2
    },
    {
        question: "CSS में किसी Attribute की वैल्यू में अलग शब्द के रूप में मौजूद किसी शब्द को चुनने के लिए कौन-सा ऑपरेटर उपयोग होता है?",
        options: ["~=", "^=", "$=", "*="],
        answer: 0
    },
    {
        question: "CSS में किसी Attribute की वैल्यू बिल्कुल बराबर होने पर एलिमेंट चुनने का सही सिंटैक्स कौन-सा है?",
        options: ["[type^='text']", "[type*='text']", "[type~='text']", "[type='text']"],
        answer: 3
    },
    {
        question: "CSS में किसी HTML एलिमेंट को उसकी lang एट्रिब्यूट वैल्यू के आधार पर चुनने के लिए कौन-सा सिंटैक्स सही है?",
        options: ["lang.en", "[lang='en']", "#lang='en'", "::lang='en'"],
        answer: 1
    },
        {
        question: "CSS में सभी <h1> एलिमेंट्स को चुनने के लिए कौन-सा Selector लिखा जाता है?",
        options: ["#h1", ".h1", "h1", "*h1"],
        answer: 2
    },
    {
        question: "CSS में p टैग के साथ note क्लास वाले एलिमेंट को चुनने का सही सिंटैक्स कौन-सा है?",
        options: ["p.note", "p#note", "p note", ".p#note"],
        answer: 0
    },
    {
        question: "CSS में किसी सूची के पहले बच्चे को चुनने के लिए कौन-सी Pseudo-class उपयोग होती है?",
        options: [":last-child", ":nth-child(1)", ":first", ":first-child"],
        answer: 3
    },
    {
        question: "CSS में किसी एलिमेंट के अंतिम बच्चे को चुनने के लिए कौन-सा Selector उपयोग किया जाता है?",
        options: [":first-child", ":last-child", ":nth-child(1)", ":only"],
        answer: 1
    },
    {
        question: "CSS में किसी Parent के दूसरे Child को चुनने का सही सिंटैक्स कौन-सा है?",
        options: [":second-child", ":child(2)", ":nth-child(2)", ":last-child(2)"],
        answer: 2
    },
    {
        question: "CSS में किसी विशेष क्लास वाले एलिमेंट को छोड़कर बाकी एलिमेंट्स चुनने के लिए कौन-सी Pseudo-class उपयोग होती है?",
        options: [":not()", ":has()", ":is()", ":where()"],
        answer: 0
    },
    {
        question: "CSS में किसी Input Field पर क्लिक करके उसे सक्रिय करने पर Styling लगाने के लिए कौन-सी Pseudo-class उपयोग होती है?",
        options: [":active-input", ":click", ":selected", ":focus"],
        answer: 3
    },
    {
        question: "CSS में Checked Checkbox या Radio Button को चुनने के लिए कौन-सा Selector उपयोग होता है?",
        options: [":selected", ":checked", ":enabled", ":focus"],
        answer: 1
    },
    {
        question: "CSS में पहले से Visit किए गए लिंक को चुनने के लिए कौन-सी Pseudo-class उपयोग होती है?",
        options: [":link", ":hover", ":visited", ":active"],
        answer: 2
    },
    {
        question: "CSS में किसी Text के पहले अक्षर को चुनने के लिए कौन-सा Pseudo-element उपयोग किया जाता है?",
        options: ["::first-letter", "::first-line", ":first-child", "::before"],
        answer: 0
    },
    {
        question: "CSS में किसी Paragraph की पहली लाइन को स्टाइल करने के लिए सही Selector कौन-सा है?",
        options: [":first-line", "::first-child", "::first-line", "::line-first"],
        answer: 2
    },
    {
        question: "CSS में उपयोगकर्ता द्वारा Select किए गए Text को स्टाइल करने के लिए कौन-सा Pseudo-element उपयोग होता है?",
        options: ["::selected", ":selection", "::highlighted", "::selection"],
        answer: 3
    },
    {
        question: "CSS में उन सभी एलिमेंट्स को चुनने का सही सिंटैक्स क्या है जिनमें href एट्रिब्यूट मौजूद हो?",
        options: ["a.href", "a[href]", "a#href", "a::href"],
        answer: 1
    },
    {
        question: "CSS में उन एलिमेंट्स को चुनने के लिए कौन-सा Attribute Selector उपयोग होता है जिनकी class वैल्यू btn से शुरू होती है?",
        options: ["[class^='btn']", "[class$='btn']", "[class*='btn']", "[class~='btn']"],
        answer: 0
    },
    {
        question: "CSS में उन एलिमेंट्स को चुनने के लिए कौन-सा Attribute Selector उपयोग होता है जिनकी class वैल्यू में card शब्द मौजूद हो?",
        options: ["[class^='card']", "[class$='card']", "[class~='card']", "[class*='card']"],
        answer: 3
    },
        {
        question: "CSS में चारों तरफ Border लगाने के लिए कौन-सी Property उपयोग की जाती है?",
        options: ["border-style", "border-width", "border", "border-color"],
        answer: 2
    },
    {
        question: "CSS में Border की मोटाई निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["border-width", "border-height", "border-size", "border-weight"],
        answer: 0
    },
    {
        question: "CSS में Border को डॉटेड (बिंदुओं वाला) बनाने के लिए किस Value का उपयोग किया जाता है?",
        options: ["solid", "double", "dashed", "dotted"],
        answer: 3
    },
    {
        question: "CSS में Border को दोहरी लाइन में दिखाने के लिए कौन-सी Value उपयोग होती है?",
        options: ["groove", "double", "ridge", "inset"],
        answer: 1
    },
    {
        question: "CSS में केवल नीचे की तरफ Border लगाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["border-top", "border-left", "border-bottom", "border-right"],
        answer: 2
    },
    {
        question: "निम्नलिखित में से लाल रंग का 2px Solid Border लगाने का सही सिंटैक्स कौन-सा है?",
        options: ["border: 2px solid red;", "border: red 2 solid;", "border-color: 2px red;", "border-style: 2px solid red;"],
        answer: 0
    },
    {
        question: "CSS में Border के कोनों को गोल करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["border-style", "border-radius", "border-round", "corner-radius"],
        answer: 1
    },
    {
        question: "किस Property से किसी एलिमेंट के केवल ऊपर-बाएँ कोने को गोल किया जा सकता है?",
        options: ["border-top", "border-left-radius", "border-radius-top", "border-top-left-radius"],
        answer: 3
    },
    {
        question: "CSS में किसी एलिमेंट के चारों कोनों को पूरी तरह गोल दिखाने के लिए सामान्यतः कौन-सी Value उपयोग की जाती है?",
        options: ["border-radius: 0;", "border-radius: 10%;", "border-radius: 50%;", "border-radius: 100px 0;"],
        answer: 2
    },
    {
        question: "CSS में Border की जगह Outline लगाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["outline", "border", "box-outline", "outline-style"],
        answer: 0
    },
    {
        question: "Border और Outline में मुख्य अंतर क्या है?",
        options: ["दोनों हमेशा समान स्थान घेरते हैं", "Outline एलिमेंट के Layout में जगह नहीं घेरता", "Border केवल Text पर लगता है", "Outline केवल Image पर लगता है"],
        answer: 1
    },
    {
        question: "CSS में Outline और एलिमेंट के Border के बीच दूरी निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["outline-space", "border-spacing", "outline-padding", "outline-offset"],
        answer: 3
    },
    {
        question: "CSS में Outline को डबल लाइन में दिखाने के लिए कौन-सी Declaration सही है?",
        options: ["outline: 2px solid red;", "outline: 2px dotted red;", "outline: 2px double red;", "outline: 2px dashed red;"],
        answer: 2
    },
    {
        question: "CSS में एलिमेंट की कुल चौड़ाई और ऊँचाई की गणना को नियंत्रित करने वाली Property कौन-सी है?",
        options: ["box-sizing", "box-model", "box-layout", "box-width"],
        answer: 0
    },
    {
        question: "box-sizing Property की border-box Value का क्या प्रभाव होता है?",
        options: ["Padding और Border को हटा देती है", "Width और Height में Content, Padding तथा Border शामिल होते हैं", "केवल Margin को शामिल करती है", "केवल Border को शामिल करती है"],
        answer: 1
    },
    {
        question: "CSS में एलिमेंट के अंदरूनी Content और Border के बीच की जगह किस Property से निर्धारित होती है?",
        options: ["margin", "border-spacing", "padding", "outline-offset"],
        answer: 2
    },
    {
        question: "CSS में एलिमेंट के बाहर की जगह निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["padding", "border", "spacing", "margin"],
        answer: 3
    },
    {
        question: "CSS में एलिमेंट की न्यूनतम चौड़ाई निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["min-width", "max-width", "width-min", "minimum-size"],
        answer: 0
    },
    {
        question: "CSS में एलिमेंट की अधिकतम ऊँचाई निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["min-height", "max-height", "height-max", "maximum-height"],
        answer: 1
    },
    {
        question: "CSS में Content के बाहर जाने पर उसे छिपाने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["overflow: visible;", "overflow: scroll;", "overflow: hidden;", "overflow: auto;"],
        answer: 2
    },
    {
        question: "CSS में List के Bullet या Number का प्रकार बदलने के लिए कौन-सी Property उपयोग होती है?",
        options: ["list-style-type", "list-type", "bullet-style", "list-marker"],
        answer: 0
    },
    {
        question: "Unordered List के Bullet को हटाने के लिए कौन-सी CSS Declaration सही है?",
        options: ["list-style-type: circle;", "list-style-type: square;", "list-style: disc;", "list-style-type: none;"],
        answer: 3
    },
    {
        question: "Ordered List में रोमन अंकों को छोटे अक्षरों में दिखाने के लिए कौन-सी Value उपयोग होती है?",
        options: ["upper-roman", "lower-roman", "lower-alpha", "upper-alpha"],
        answer: 1
    },
    {
        question: "CSS में List Marker को List Item के अंदर रखने के लिए कौन-सी Property उपयोग होती है?",
        options: ["list-style-type", "list-style-image", "list-style-position", "list-style-marker"],
        answer: 2
    },
    {
        question: "CSS में List के Bullet के स्थान पर Image लगाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["list-style-image", "background-image", "list-marker-image", "image-list"],
        answer: 0
    },
    {
        question: "CSS में Element की Position निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["display", "float", "align", "position"],
        answer: 3
    },
    {
        question: "CSS में position: relative का क्या अर्थ है?",
        options: ["एलिमेंट हमेशा Viewport के अनुसार रहता है", "एलिमेंट अपनी सामान्य स्थिति के आधार पर स्थान बदलता है", "एलिमेंट सामान्य Flow से पूरी तरह हट जाता है", "एलिमेंट हमेशा स्क्रीन के नीचे रहता है"],
        answer: 1
    },
    {
        question: "CSS में position: absolute वाला एलिमेंट सामान्यतः किसके अनुसार Position होता है?",
        options: ["हमेशा Browser Window के अनुसार", "हमेशा Body के अनुसार", "निकटतम Positioned Ancestor के Padding Box के अनुसार", "हमेशा Footer के अनुसार"],
        answer: 2
    },
    {
        question: "CSS में position: fixed का उपयोग किस उद्देश्य से किया जाता है?",
        options: ["एलिमेंट को Viewport के अनुसार स्थिर रखने के लिए", "एलिमेंट को केवल Parent के अंदर रखने के लिए", "एलिमेंट को सामान्य Flow में रखने के लिए", "एलिमेंट को छिपाने के लिए"],
        answer: 0
    },
    {
        question: "CSS में position: sticky का व्यवहार किस प्रकार का होता है?",
        options: ["केवल Absolute की तरह", "केवल Fixed की तरह", "हमेशा Static की तरह", "सामान्य Flow में रहता है और Scroll पर निर्धारित सीमा पर चिपक सकता है"],
        answer: 3
    },
    {
        question: "CSS में Positioned Elements के Stack Order को नियंत्रित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["stack-order", "z-index", "layer-index", "position-index"],
        answer: 1
    },
    {
        question: "CSS में किसी एलिमेंट को ऊपर से 20px दूर रखने के लिए कौन-सी Declaration सही है?",
        options: ["left: 20px;", "bottom: 20px;", "top: 20px;", "right: 20px;"],
        answer: 2
    },
    {
        question: "CSS में Text का रंग बदलने के लिए कौन-सी Property उपयोग होती है?",
        options: ["color", "font-color", "text-color", "foreground"],
        answer: 0
    },
    {
        question: "CSS में Text को बीच में Align करने के लिए कौन-सी Declaration सही है?",
        options: ["text-align: left;", "text-align: right;", "vertical-align: center;", "text-align: center;"],
        answer: 3
    },
    {
        question: "CSS में Text को Underline करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["text-style", "text-decoration", "font-decoration", "text-transform"],
        answer: 1
    },
    {
        question: "CSS में Text को Capital Letters में दिखाने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["text-decoration: uppercase;", "font-style: uppercase;", "text-transform: uppercase;", "font-variant: capital;"],
        answer: 2
    },
    {
        question: "CSS में अक्षरों के बीच की दूरी निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
        answer: 0
    },
    {
        question: "CSS में शब्दों के बीच की दूरी निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["letter-spacing", "text-spacing", "line-height", "word-spacing"],
        answer: 3
    },
    {
        question: "CSS में Paragraph की पहली Line को अंदर की ओर खिसकाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["text-align", "text-indent", "line-height", "word-spacing"],
        answer: 1
    },
    {
        question: "CSS में Text की Lines के बीच की दूरी नियंत्रित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["letter-spacing", "word-spacing", "line-height", "text-indent"],
        answer: 2
    },
    {
        question: "CSS में Text के पीछे Shadow लगाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["text-shadow", "box-shadow", "font-shadow", "shadow-text"],
        answer: 0
    },
    {
        question: "CSS में किसी Box के चारों ओर Shadow लगाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["text-shadow", "border-shadow", "font-shadow", "box-shadow"],
        answer: 3
    },
    {
        question: "CSS में Box Shadow के पहले दो Length Values सामान्यतः क्या निर्धारित करती हैं?",
        options: ["रंग और मोटाई", "Horizontal और Vertical Offset", "ऊँचाई और चौड़ाई", "Border और Padding"],
        answer: 1
    },
    {
        question: "CSS में Box Shadow को Element के अंदर दिखाने के लिए कौन-सा Keyword उपयोग होता है?",
        options: ["inside", "inner", "inset", "internal"],
        answer: 2
    },
    {
        question: "CSS में Box Shadow की तीसरी Length Value सामान्यतः किसे नियंत्रित करती है?",
        options: ["Blur Radius", "Border Width", "Text Size", "Margin"],
        answer: 0
    },
    {
        question: "CSS में Font का आकार बदलने के लिए कौन-सी Property उपयोग होती है?",
        options: ["font-style", "font-weight", "font-family", "font-size"],
        answer: 3
    },
    {
        question: "CSS में Font को Bold बनाने के लिए कौन-सी Declaration सही है?",
        options: ["font-style: bold;", "font-weight: bold;", "font-size: bold;", "text-weight: bold;"],
        answer: 1
    },
    {
        question: "CSS में Font का प्रकार या परिवार बदलने के लिए कौन-सी Property उपयोग होती है?",
        options: ["font-size", "font-style", "font-family", "font-weight"],
        answer: 2
    },
    {
        question: "CSS में Text को Italic बनाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["font-style", "font-weight", "font-family", "text-transform"],
        answer: 0
    },
    {
        question: "CSS में Font की मोटाई को संख्यात्मक रूप से निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["font-size", "font-family", "font-style", "font-weight"],
        answer: 3
    },
    {
        question: "CSS में एक ही Declaration में Font की कई विशेषताएँ सेट करने के लिए कौन-सी Shorthand Property उपयोग होती है?",
        options: ["font-family", "font", "font-size", "font-style"],
        answer: 1
    },
    {
        question: "CSS में किसी एलिमेंट का Background Color बदलने के लिए कौन-सी Property उपयोग होती है?",
        options: ["color", "background-style", "background-color", "bg-color"],
        answer: 2
    },
    {
        question: "CSS में Background Image लगाने का सही सिंटैक्स कौन-सा है?",
        options: ["background-image: url('image.jpg');", "background: image('image.jpg');", "image-background: url('image.jpg');", "background-src: 'image.jpg';"],
        answer: 0
    },
    {
        question: "CSS में Background Image को दोहराने से रोकने के लिए कौन-सी Value उपयोग होती है?",
        options: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
        answer: 3
    },
    {
        question: "CSS में Background Image का आकार Container के पूरे क्षेत्र को कवर करने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["background-size: contain;", "background-size: cover;", "background-size: auto;", "background-size: 100px;"],
        answer: 1
    },
    {
        question: "CSS में Background Image की Position निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["background-repeat", "background-size", "background-position", "background-origin"],
        answer: 2
    },
    {
        question: "CSS में Background Image को Scroll करने के बजाय Viewport के साथ स्थिर रखने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["background-attachment: fixed;", "background-position: fixed;", "background-repeat: fixed;", "background-size: fixed;"],
        answer: 0
    },
    {
        question: "CSS में Linear Gradient बनाने के लिए किस Function का उपयोग किया जाता है?",
        options: ["radial-gradient()", "conic-gradient()", "color-gradient()", "linear-gradient()"],
        answer: 3
    },
    {
        question: "CSS में Radial Gradient किस प्रकार फैलता है?",
        options: ["केवल क्षैतिज दिशा में", "एक केंद्रीय बिंदु से बाहर की ओर", "केवल ऊर्ध्वाधर दिशा में", "केवल तिरछी सीधी लाइन में"],
        answer: 1
    },
    {
        question: "CSS में Conic Gradient किस प्रकार का Gradient बनाता है?",
        options: ["सीधी क्षैतिज पट्टियाँ", "केवल एक रंग", "केंद्र के चारों ओर कोण के आधार पर रंग परिवर्तन", "केवल ऊर्ध्वाधर पट्टियाँ"],
        answer: 2
    },
    {
        question: "CSS में नीचे से ऊपर की ओर Linear Gradient बनाने का सही सिंटैक्स कौन-सा है?",
        options: ["background: linear-gradient(to top, red, blue);", "background: linear-gradient(to bottom, red, blue);", "background: radial-gradient(to top, red, blue);", "background: conic-gradient(to top, red, blue);"],
        answer: 0
    },
    {
        question: "CSS में Background की सभी मुख्य Properties को एक साथ सेट करने के लिए कौन-सी Shorthand Property उपयोग होती है?",
        options: ["background-image", "background-color", "background-position", "background"],
        answer: 3
    },
        {
        question: "CSS में Table के Border को एक साथ जोड़ने के लिए कौन-सी Property उपयोग होती है?",
        options: ["border-spacing", "border-collapse", "table-border", "border-merge"],
        answer: 1
    },
    {
        question: "CSS में Table के अलग-अलग Cells के बीच दूरी निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["cell-padding", "table-spacing", "border-spacing", "cell-spacing"],
        answer: 2
    },
    {
        question: "Table के सभी Borders को एक Single Border में दिखाने के लिए कौन-सी Declaration सही है?",
        options: ["border-collapse: collapse;", "border-collapse: separate;", "border-spacing: 0;", "table-layout: fixed;"],
        answer: 0
    },
    {
        question: "CSS में Table की Caption की Position निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["caption-align", "table-caption", "caption-position", "caption-side"],
        answer: 3
    },
    {
        question: "Table की Caption को नीचे दिखाने के लिए कौन-सी Declaration सही है?",
        options: ["caption-side: top;", "caption-side: bottom;", "caption-position: bottom;", "text-align: bottom;"],
        answer: 1
    },
    {
        question: "CSS में Table की Width निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["table-size", "cell-width", "width", "table-width"],
        answer: 2
    },
    {
        question: "CSS में Table के Columns की Width को नियंत्रित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["table-layout", "column-style", "column-position", "table-column"],
        answer: 0
    },
    {
        question: "table-layout Property की fixed Value का क्या कार्य है?",
        options: ["Table को छिपाना", "Border हटाना", "Cells को गोल करना", "Table के Column Layout को निर्धारित Width के आधार पर नियंत्रित करना"],
        answer: 3
    },
    {
        question: "CSS में Table के खाली Cells के Border और Background को दिखाने या छिपाने के लिए कौन-सी Property उपयोग होती है?",
        options: ["empty-table", "empty-cells", "cell-visibility", "blank-cells"],
        answer: 1
    },
    {
        question: "Table के खाली Cells को छिपाने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["empty-cells: show;", "display: none;", "empty-cells: hide;", "visibility: hidden;"],
        answer: 2
    },
    {
        question: "CSS में Table Cell के अंदर Content की Vertical Position निर्धारित करने के लिए कौन-सी Property उपयोग होती है?",
        options: ["vertical-align", "text-align", "cell-align", "content-position"],
        answer: 0
    },
    {
        question: "Table के Text को Horizontal रूप से बीच में लाने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["vertical-align: middle;", "text-align: left;", "align-content: center;", "text-align: center;"],
        answer: 3
    },
    {
        question: "CSS में Table के Rows पर Hover Effect लगाने के लिए कौन-सा Selector सही है?",
        options: ["tr:active", "tr:hover", "tr:focus", "tr:visited"],
        answer: 1
    },
    {
        question: "Table की हर दूसरी Row को चुनने के लिए कौन-सा CSS Selector उपयोग किया जा सकता है?",
        options: ["tr:first-child", "tr:last-child", "tr:nth-child(even)", "tr:only-child"],
        answer: 2
    },
    {
        question: "Table की विषम संख्या वाली Rows को चुनने के लिए कौन-सा Selector सही है?",
        options: ["tr:nth-child(odd)", "tr:nth-child(even)", "tr:first-child", "tr:last-child"],
        answer: 0
    },
    {
        question: "CSS में Table के Border की दूरी 5px रखने का सही सिंटैक्स कौन-सा है?",
        options: ["border-collapse: 5px;", "cell-spacing: 5px;", "table-spacing: 5px;", "border-spacing: 5px;"],
        answer: 3
    },
    {
        question: "HTML Table के Header Cells को CSS में चुनने के लिए सामान्यतः कौन-सा Selector उपयोग होता है?",
        options: ["td", "th", "tr", "table"],
        answer: 1
    },
    {
        question: "HTML Table के Data Cells को CSS में चुनने के लिए कौन-सा Selector उपयोग होता है?",
        options: ["th", "tr", "td", "caption"],
        answer: 2
    },
    {
        question: "HTML Table की पूरी Row को CSS में चुनने के लिए कौन-सा Selector उपयोग किया जाता है?",
        options: ["tr", "td", "th", "table"],
        answer: 0
    },
    {
        question: "CSS में Table के Border को लाल रंग देने का सही सिंटैक्स कौन-सा है?",
        options: ["table: border-color red;", "table { color: border red; }", "table { border: red; }", "table { border: 1px solid red; }"],
        answer: 3
    },
    {
        question: "Table के सभी Cells में 10px Padding लगाने के लिए कौन-सा CSS सिंटैक्स सही है?",
        options: ["table { padding: 10px; }", "td, th { padding: 10px; }", "tr { margin: 10px; }", "table { border-spacing: 10px; }"],
        answer: 1
    },
    {
        question: "CSS में Table के Background को हल्का नीला करने के लिए कौन-सी Declaration सही है?",
        options: ["table-color: blue;", "color-background: lightblue;", "background-color: lightblue;", "table-style: lightblue;"],
        answer: 2
    },
    {
        question: "CSS में Table के Header Row का Background Color बदलने के लिए कौन-सा Selector सही है?",
        options: ["thead { background-color: lightgray; }", "table-header { color: gray; }", "header { table-color: gray; }", "tr:footer { background-color: gray; }"],
        answer: 0
    },
    {
        question: "CSS में Table के अंदर Text को ऊपर की तरफ Align करने के लिए कौन-सी Declaration उपयोग होती है?",
        options: ["text-align: top;", "vertical-align: bottom;", "align: top;", "vertical-align: top;"],
        answer: 3
    },
    {
        question: "CSS में Table के Border को अलग-अलग रखने के लिए border-collapse की कौन-सी Value उपयोग होती है?",
        options: ["collapse", "separate", "hidden", "none"],
        answer: 1
    },
    [
    {
        question: "CSS में Specificity के आधार पर सबसे अधिक प्राथमिकता किस Selector की होती है?",
        options: [":hover", ".container", "#header", "div"],
        answer: 2
    },
    {
        question: "CSS में !important का उपयोग किसलिए किया जाता है?",
        options: ["Font बदलने के लिए", "Declaration की प्राथमिकता बढ़ाने के लिए", "Element छिपाने के लिए", "Animation बनाने के लिए"],
        answer: 1
    },
    {
        question: "CSS Custom Property (Variable) का नाम किस Prefix से शुरू होता है?",
        options: ["@@", "$", "--", "##"],
        answer: 2
    },
    {
        question: "CSS Variable की Value प्राप्त करने के लिए किस Function का उपयोग होता है?",
        options: ["get()", "var()", "value()", "property()"],
        answer: 1
    },
    {
        question: "CSS में calc() Function का मुख्य उपयोग क्या है?",
        options: ["रंग बदलना", "गणितीय गणना करके CSS Value निर्धारित करना", "Element हटाना", "Font Load करना"],
        answer: 1
    },
    {
        question: "CSS Grid में repeat() Function का उपयोग किसलिए किया जाता है?",
        options: ["Animation दोहराने के लिए", "Grid Tracks को दोहराने के लिए", "Text दोहराने के लिए", "Selector दोहराने के लिए"],
        answer: 1
    },
    {
        question: "CSS Grid में minmax() Function क्या निर्धारित करता है?",
        options: ["Element का रंग", "Grid Track की न्यूनतम और अधिकतम Size", "Font की मोटाई", "Animation की अवधि"],
        answer: 1
    },
    {
        question: "CSS Grid में auto-fit और auto-fill का संबंध किससे है?",
        options: ["Responsive Grid Tracks बनाने से", "Text Alignment से", "Border Styling से", "Font Loading से"],
        answer: 0
    },
    {
        question: "Flexbox में flex-grow Property का उपयोग किसलिए होता है?",
        options: ["Item को छिपाने के लिए", "Available Space में Item को बढ़ने की अनुमति देने के लिए", "Item को Rotate करने के लिए", "Item की Position बदलने के लिए"],
        answer: 1
    },
    {
        question: "Flexbox में flex-shrink Property क्या नियंत्रित करती है?",
        options: ["Item कितना सिकुड़ सकता है", "Item कितना चमकेगा", "Item का रंग", "Item की Border Width"],
        answer: 0
    },
    {
        question: "CSS में aspect-ratio Property का उपयोग किसलिए किया जाता है?",
        options: ["Element का रंग निर्धारित करने के लिए", "Element की Width और Height का अनुपात निर्धारित करने के लिए", "Text का आकार बदलने के लिए", "Shadow लगाने के लिए"],
        answer: 1
    },
    {
        question: "CSS में object-fit: cover का क्या प्रभाव होता है?",
        options: ["Image अपने Container को बिना Crop हुए भरती है", "Image Container को भरती है और आवश्यकता पड़ने पर Crop होती है", "Image गायब हो जाती है", "Image केवल Repeat होती है"],
        answer: 1
    },
    {
        question: "CSS में @keyframes का उपयोग किसलिए किया जाता है?",
        options: ["Media Query बनाने के लिए", "Animation के अलग-अलग चरण निर्धारित करने के लिए", "Grid बनाने के लिए", "Font Import करने के लिए"],
        answer: 1
    },
    {
        question: "CSS Animation में animation-iteration-count: infinite का क्या अर्थ है?",
        options: ["Animation एक बार चलेगी", "Animation दो बार चलेगी", "Animation लगातार दोहराई जाएगी", "Animation तुरंत बंद हो जाएगी"],
        answer: 2
    },
    {
        question: "CSS में transform-origin Property क्या निर्धारित करती है?",
        options: ["Transform का शुरुआती Reference Point", "Element का Background", "Font का आकार", "Border का रंग"],
        answer: 0
    },
    {
        question: "CSS में :has() Pseudo-class का उपयोग किसलिए किया जाता है?",
        options: ["किसी Element के अंदर मौजूद संबंधित Element के आधार पर Parent या अन्य Element को Select करने के लिए", "केवल Text को Select करने के लिए", "Animation रोकने के लिए", "Font बदलने के लिए"],
        answer: 0
    },
    {
        question: "CSS में @supports Rule का उपयोग किसलिए किया जाता है?",
        options: ["Browser में CSS Feature Support की जाँच करने के लिए", "Image Compress करने के लिए", "JavaScript चलाने के लिए", "HTML Tag बनाने के लिए"],
        answer: 0
    },
    {
        question: "CSS में @font-face Rule का मुख्य उपयोग क्या है?",
        options: ["Text को Bold करना", "Custom Font को Define और Load करना", "Text को Center करना", "Font का रंग बदलना"],
        answer: 1
    },
    {
        question: "CSS में prefers-reduced-motion Media Feature किससे संबंधित है?",
        options: ["Screen Brightness", "User की Motion कम रखने की Preference", "Browser की भाषा", "Screen की Width"],
        answer: 1
    },
    {
        question: "CSS में Cascade Layers बनाने के लिए किस At-rule का उपयोग किया जाता है?",
        options: ["@layer", "@group", "@cascade", "@priority"],
        answer: 0
    }
]
];

