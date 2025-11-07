
        (function() {
            // --- DATA: Questions Array (20 questions) ---
            const questions = [
                // MCQs (type: mcq)
                {
                    question: "What is a common sign that an email is trying to steal your information (phishing)?",
                    te_question: "మీ సమాచారాన్ని దొంగిలించడానికి (ఫిషింగ్) ప్రయత్నిస్తున్నట్లు ఈమెయిల్‌లో కనిపించే సాధారణ సంకేతం ఏమిటి?",
                    type: "mcq",
                    answers: [
                        { text: "It's sent after 5 PM.", te_text: "ఇది సాయంత్రం 5 గంటల తర్వాత పంపబడుతుంది.", correct: false, id: 1 },
                        { text: "It asks you to click a link urgently or face a penalty.", te_text: "తక్షణమే ఒక లింక్‌ను క్లిక్ చేయమని లేదా జరిమానా ఎదుర్కోవాలని అడుగుతుంది.", correct: true, id: 2 },
                        { text: "It contains a simple typo in the subject line.", te_text: "దాని సబ్జెక్ట్ లైన్‌లో సాధారణ అక్షరదోషం ఉంటుంది.", correct: false, id: 3 },
                        { text: "It is sent by your bank.", te_text: "దీనిని మీ బ్యాంకు పంపుతుంది.", correct: false, id: 4 },
                    ],
                    incorrectFeedback: "Phishing emails often create a sense of **URGENCY** or **FEAR** to make you click without thinking. Always pause when you feel rushed. **Real-Life Tip:** Legitimate companies rarely use threats in emails.",
                    te_incorrectFeedback: "ఫిషింగ్ ఈమెయిల్‌లు తరచుగా ఆలోచించకుండా క్లిక్ చేసేలా **తొందర** లేదా **భయం** యొక్క భావాన్ని సృష్టిస్తాయి. మీరు తొందరపాటుకు గురైనప్పుడు ఎల్లప్పుడూ ఆపండి. **రియల్-లైఫ్ చిట్కా:** చట్టబద్ధమైన కంపెనీలు ఈమెయిల్‌లలో బెదిరింపులను అరుదుగా ఉపయోగిస్తాయి.",
                    knowledgePoint: "Knowledge Point: Phishing is the number one cause of security breaches, targeting human psychology over technology.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: భద్రతా ఉల్లంఘనలకు ఫిషింగ్ ప్రధాన కారణం, ఇది సాంకేతికత కంటే మానవ మనస్తత్వాన్ని లక్ష్యంగా చేసుకుంటుంది."
                },
                {
                    question: "Where is it unsafe to use your online banking app or enter credit card information?",
                    te_question: "మీ ఆన్‌లైన్ బ్యాంకింగ్ యాప్‌ను ఉపయోగించడానికి లేదా క్రెడిట్ కార్డ్ సమాచారాన్ని నమోదు చేయడానికి ఎక్కడ అసురక్షితంగా ఉంటుంది?",
                    type: "mcq",
                    answers: [
                        { text: "On your home Wi-Fi network.", te_text: "మీ ఇంటి Wi-Fi నెట్‌వర్క్‌లో.", correct: false, id: 5 },
                        { text: "On the 'Free_Mall_Wi-Fi' network.", te_text: "'ఫ్రీ_మాల్_వై-ఫై' నెట్‌వర్క్‌లో.", correct: true, id: 6 },
                        { text: "Using your mobile data connection.", te_text: "మీ మొబైల్ డేటా కనెక్షన్‌ను ఉపయోగించడం.", correct: false, id: 7 },
                        { text: "On a friend's secured Wi-Fi.", te_text: "స్నేహితుడి సురక్షిత Wi-Fi లో.", correct: false, id: 8 },
                    ],
                    incorrectFeedback: "Public, unsecured Wi-Fi allows criminals to easily 'listen in' on your data traffic. **Real-Life Tip:** Treat any public Wi-Fi as unsafe for sensitive activities. Use mobile data or a trusted Virtual Private Network (VPN) instead.",
                    te_incorrectFeedback: "పబ్లిక్, అసురక్షిత Wi-Fi నేరగాళ్లు మీ డేటా ట్రాఫిక్‌ను సులభంగా 'వినడానికి' అనుమతిస్తుంది. **రియల్-లైఫ్ చిట్కా:** ఏదైనా పబ్లిక్ Wi-Fi ని సున్నితమైన కార్యకలాపాలకు అసురక్షితంగా పరిగణించండి. దానికి బదులుగా మొబైల్ డేటా లేదా నమ్మకమైన VPN ని ఉపయోగించండి.",
                    knowledgePoint: "Knowledge Point: A Man-in-the-Middle (MITM) attack is easy on public Wi-Fi, allowing hackers to intercept passwords and data.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: పబ్లిక్ Wi-Fi లో మ్యాన్-ఇన్-ది-మిడిల్ (MITM) దాడి సులభం, ఇది హ్యాకర్లు పాస్‌వర్డ్‌లు మరియు డేటాను అడ్డగించడానికి అనుమతిస్తుంది."
                },
                {
                    question: "What is the best defense against 'ransomware' (a virus that locks your files)?",
                    te_question: "'రాన్సమ్‌వేర్' (మీ ఫైల్‌లను లాక్ చేసే వైరస్) నుండి ఉత్తమ రక్షణ ఏమిటి?",
                    type: "mcq",
                    answers: [
                        { text: "Paying the ransom immediately.", te_text: "వెంటనే డబ్బు చెల్లించడం.", correct: false, id: 9 },
                        { text: "Turning your computer off and leaving it off.", te_text: "మీ కంప్యూటర్‌ను ఆఫ్ చేసి, అలాగే ఉంచడం.", correct: false, id: 10 },
                        { text: "Having a recent backup of all your important files.", te_text: "మీ ముఖ్యమైన ఫైల్‌లన్నింటికీ ఇటీవలి బ్యాకప్‌ను కలిగి ఉండటం.", correct: true, id: 11 },
                        { text: "Changing your password.", te_text: "మీ పాస్‌వర్డ్‌ను మార్చడం.", correct: false, id: 12 },
                    ],
                    incorrectFeedback: "Since ransomware encrypts your files, the only guaranteed way to recover them without paying is a **GOOD BACKUP**. **Real-Life Tip:** Keep at least one copy of your backup disconnected from your computer/network.",
                    te_incorrectFeedback: "రాన్సమ్‌వేర్ మీ ఫైల్‌లను ఎన్‌క్రిప్ట్ చేస్తుంది కాబట్టి, డబ్బు చెల్లించకుండా వాటిని తిరిగి పొందడానికి హామీ ఇవ్వబడిన ఏకైక మార్గం **మంచి బ్యాకప్**. **రియల్-లైఫ్ చిట్కా:** మీ బ్యాకప్‌లలో కనీసం ఒక కాపీని మీ కంప్యూటర్/నెట్‌వర్క్ నుండి డిస్‌కనెక్ట్ చేసి ఉంచండి.",
                    knowledgePoint: "Knowledge Point: The 3-2-1 backup rule suggests keeping three copies of your data, on two different media, with one copy off-site.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: 3-2-1 బ్యాకప్ నియమం మీ డేటా యొక్క మూడు కాపీలను, రెండు వేర్వేరు మీడియాలో, ఒక కాపీని ఆఫ్-సైట్‌లో ఉంచాలని సూచిస్తుంది."
                },
                {
                    question: "If a pop-up asks you to install a 'missing Flash Player' update, what should you do?",
                    te_question: "'తప్పిపోయిన ఫ్లాష్ ప్లేయర్' అప్‌డేట్‌ను ఇన్‌స్టాల్ చేయమని ఒక పాప్-అప్ అడిగితే, మీరు ఏమి చేయాలి?",
                    type: "mcq",
                    answers: [
                        { text: "Click OK to install the missing component.", te_text: "తప్పిపోయిన భాగాన్ని ఇన్‌స్టాల్ చేయడానికి OK క్లిక్ చేయండి.", correct: false, id: 13 },
                        { text: "Ignore it and navigate away from the site, as Flash is outdated and dangerous.", te_text: "దీనిని విస్మరించండి మరియు సైట్ నుండి దూరంగా నావిగేట్ చేయండి, ఎందుకంటే ఫ్లాష్ పాతది మరియు ప్రమాదకరమైనది.", correct: true, id: 14 },
                        { text: "Search Google for the 'official' Flash Player website and download it from there.", te_text: "'అధికారిక' ఫ్లాష్ ప్లేయర్ వెబ్‌సైట్ కోసం Google లో శోధించి, అక్కడి నుండి డౌన్‌లోడ్ చేయండి.", correct: false, id: 15 },
                        { text: "Call a tech support line for help.", te_text: "సహాయం కోసం టెక్ సపోర్ట్ లైన్‌కు కాల్ చేయండి.", correct: false, id: 16 },
                    ],
                    incorrectFeedback: "Adobe discontinued Flash Player years ago. Any request for a Flash update is almost certainly a malicious attempt to install a virus. **Real-Life Tip:** Never trust software update requests that come from pop-ups.",
                    te_incorrectFeedback: "Adobe ఫ్లాష్ ప్లేయర్‌ను సంవత్సరాల క్రితం నిలిపివేసింది. ఫ్లాష్ అప్‌డేట్ కోసం ఏదైనా అభ్యర్థన దాదాపు ఖచ్చితంగా వైరస్‌ను ఇన్‌స్టాల్ చేయడానికి హానికరమైన ప్రయత్నం. **రియల్-లైఫ్ చిట్కా:** పాప్-అప్‌ల నుండి వచ్చే సాఫ్ట్‌వేర్ అప్‌డేట్ అభ్యర్థనలను ఎప్పుడూ నమ్మకండి.",
                    knowledgePoint: "Knowledge Point: Modern web browsers (Chrome, Edge, Firefox) have security features that block outdated and known risky software like Flash.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: ఆధునిక వెబ్ బ్రౌజర్‌లు (Chrome, Edge, Firefox) ఫ్లాష్ వంటి పాత మరియు తెలిసిన ప్రమాదకర సాఫ్ట్‌వేర్‌ను నిరోధించే భద్రతా లక్షణాలను కలిగి ఉన్నాయి."
                },
                {
                    question: "What does 'HTTPS' at the start of a website address primarily indicate?",
                    te_question: "వెబ్‌సైట్ చిరునామా ప్రారంభంలో 'HTTPS' ప్రధానంగా దేనిని సూచిస్తుంది?",
                    type: "mcq",
                    answers: [
                        { text: "The website is very popular.", te_text: "వెబ్‌సైట్ చాలా ప్రజాదరణ పొందింది.", correct: false, id: 17 },
                        { text: "The website's connection is encrypted and private.", te_text: "వెబ్‌సైట్ కనెక్షన్ ఎన్‌క్రిప్ట్ చేయబడింది మరియు ప్రైవేట్.", correct: true, id: 18 },
                        { text: "The website has a firewall installed.", te_text: "వెబ్‌సైట్‌లో ఫైర్‌వాల్ ఇన్‌స్టాల్ చేయబడింది.", correct: false, id: 19 },
                        { text: "The website is safe from all viruses.", te_text: "వెబ్‌సైట్ అన్ని వైరస్‌ల నుండి సురక్షితం.", correct: false, id: 20 },
                    ],
                    incorrectFeedback: "HTTPS means the data you send (like passwords) is **encrypted** between your computer and the website. It is the basic security level. **Real-Life Tip:** Always check for HTTPS and a padlock icon before logging in or making a purchase.",
                    te_incorrectFeedback: "HTTPS అంటే మీరు పంపే డేటా (పాస్‌వర్డ్‌లు వంటివి) మీ కంప్యూటర్ మరియు వెబ్‌సైట్ మధ్య **ఎన్‌క్రిప్ట్ చేయబడింది** అని అర్థం. ఇది ప్రాథమిక భద్రతా స్థాయి. **రియల్-లైఫ్ చిట్కా:** లాగిన్ చేయడానికి లేదా కొనుగోలు చేయడానికి ముందు ఎల్లప్పుడూ HTTPS మరియు ప్యాడ్‌లాక్ చిహ్నం కోసం తనిఖీ చేయండి.",
                    knowledgePoint: "Knowledge Point: While HTTPS means the connection is private, it does NOT mean the company is trustworthy, so always verify the domain name too.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: HTTPS అంటే కనెక్షన్ ప్రైవేట్ అని అర్థం, కానీ కంపెనీ నమ్మదగినదని కాదు, కాబట్టి డొమైన్ పేరును కూడా ఎల్లప్పుడూ ధృవీకరించండి."
                },
                {
                    question: "What is 'shoulder surfing'?",
                    te_question: "'షోల్డర్ సర్ఫింగ్' అంటే ఏమిటి?",
                    type: "mcq",
                    answers: [
                        { text: "A new kind of virtual reality game.", te_text: "ఒక కొత్త రకం వర్చువల్ రియాలిటీ గేమ్.", correct: false, id: 21 },
                        { text: "Someone secretly watching you enter your PIN or password.", te_text: "మీరు మీ PIN లేదా పాస్‌వర్డ్‌ను నమోదు చేస్తున్నప్పుడు రహస్యంగా ఎవరైనా చూడటం.", correct: true, id: 22 },
                        { text: "Checking a hacker's profile on LinkedIn.", te_text: "LinkedIn లో హ్యాకర్ యొక్క ప్రొఫైల్‌ను తనిఖీ చేయడం.", correct: false, id: 23 },
                        { text: "Using a VPN while on public transport.", te_text: "పబ్లిక్ ట్రాన్స్‌పోర్ట్‌లో ఉన్నప్పుడు VPN ఉపయోగించడం.", correct: false, id: 24 },
                    ],
                    incorrectFeedback: "Shoulder surfing is a simple physical attack. People looking over your shoulder can steal login information. **Real-Life Tip:** Shield your screen and keyboard with your hand or body when entering sensitive information in public.",
                    te_incorrectFeedback: "షోల్డర్ సర్ఫింగ్ అనేది ఒక సాధారణ భౌతిక దాడి. మీ భుజం పైనుండి చూసే వ్యక్తులు లాగిన్ సమాచారాన్ని దొంగిలించగలరు. **రియల్-లైఫ్ చిట్కా:** పబ్లిక్‌లో సున్నితమైన సమాచారాన్ని నమోదు చేసేటప్పుడు మీ స్క్రీన్ మరియు కీబోర్డ్‌ను మీ చేతితో లేదా శరీరంతో కప్పండి.",
                    knowledgePoint: "Knowledge Point: Cybersecurity is not just about technology; it includes physical awareness in public spaces.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: సైబర్ సెక్యూరిటీ అనేది కేవలం సాంకేతికత గురించి మాత్రమే కాదు; ఇందులో పబ్లిక్ ప్రదేశాలలో భౌతిక అవగాహన కూడా ఉంటుంది."
                },
                {
                    question: "If you receive a text message (SMiShing) from your bank asking you to confirm your account number, what should you do?",
                    te_question: "మీ బ్యాంక్ నుండి మీ ఖాతా నంబర్‌ను ధృవీకరించమని అడుగుతూ మీకు టెక్స్ట్ మెసేజ్ (SMiShing) వస్తే, మీరు ఏమి చేయాలి?",
                    type: "mcq",
                    answers: [
                        { text: "Reply with the account number to confirm.", te_text: "ధృవీకరించడానికి ఖాతా నంబర్‌తో ప్రత్యుత్తరం ఇవ్వండి.", correct: false, id: 25 },
                        { text: "Call the official phone number listed on your bank's website or card.", te_text: "మీ బ్యాంక్ వెబ్‌సైట్ లేదా కార్డులో జాబితా చేయబడిన అధికారిక ఫోన్ నంబర్‌కు కాల్ చేయండి.", correct: true, id: 26 },
                        { text: "Click the link in the text to log in.", te_text: "లాగిన్ చేయడానికి టెక్స్ట్‌లోని లింక్‌ను క్లిక్ చేయండి.", correct: false, id: 27 },
                        { text: "Call the number that sent the text.", te_text: "టెక్స్ట్ పంపిన నంబర్‌కు కాల్ చేయండి.", correct: false, id: 28 },
                    ],
                    incorrectFeedback: "Legitimate banks will never ask for sensitive data like account numbers via unsolicited text or email. **Real-Life Tip:** Always use a verified contact method, like calling the number on your bank card, to verify suspicious requests.",
                    te_incorrectFeedback: "చట్టబద్ధమైన బ్యాంకులు అవాంఛిత టెక్స్ట్ లేదా ఈమెయిల్ ద్వారా ఖాతా నంబర్‌ల వంటి సున్నితమైన డేటాను ఎప్పుడూ అడగవు. **రియల్-లైఫ్ చిట్కా:** అనుమానాస్పద అభ్యర్థనలను ధృవీకరించడానికి ఎల్లప్పుడూ మీ బ్యాంక్ కార్డులోని నంబర్‌కు కాల్ చేయడం వంటి ధృవీకరించబడిన సంప్రదింపు పద్ధతిని ఉపయోగించండి.",
                    knowledgePoint: "Knowledge Point: SMiShing (SMS Phishing) is on the rise because people often trust text messages more than emails.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: SMiShing (SMS ఫిషింగ్) పెరుగుతోంది ఎందుకంటే ప్రజలు తరచుగా ఈమెయిల్‌ల కంటే టెక్స్ట్ సందేశాలను ఎక్కువగా విశ్వసిస్తారు."
                },
                {
                    question: "What should you *always* check before installing a new app on your phone?",
                    te_question: "మీ ఫోన్‌లో కొత్త యాప్‌ను ఇన్‌స్టాల్ చేసే ముందు మీరు *ఎల్లప్పుడూ* ఏమి తనిఖీ చేయాలి?",
                    type: "mcq",
                    answers: [
                        { text: "If the app is ranked #1 in the store.", te_text: "యాప్ స్టోర్‌లో #1 స్థానంలో ఉందో లేదో.", correct: false, id: 29 },
                        { text: "The permissions the app is asking for (e.g., access to your microphone or photos).", te_text: "యాప్ అడుగుతున్న అనుమతులు (ఉదా. మీ మైక్రోఫోన్ లేదా ఫోటోలకు యాక్సెస్).", correct: true, id: 30 },
                        { text: "The total size of the app in MB.", te_text: "MB లో యాప్ యొక్క మొత్తం పరిమాణం.", correct: false, id: 31 },
                        { text: "If the app is free.", te_text: "యాప్ ఉచితం కాదా.", correct: false, id: 32 },
                    ],
                    incorrectFeedback: "An app's **PERMISSIONS** determine what data it can access. A flashlight app doesn't need access to your contacts or location. **Real-Life Tip:** Review permissions carefully and deny any that seem excessive or unnecessary.",
                    te_incorrectFeedback: "ఒక యాప్ యొక్క **అనుమతులు** అది ఏ డేటాను యాక్సెస్ చేయగలదో నిర్ణయిస్తాయి. ఫ్లాష్‌లైట్ యాప్‌కు మీ పరిచయాలు లేదా స్థానానికి యాక్సెస్ అవసరం లేదు. **రియల్-లైఫ్ చిట్కా:** అనుమతులను జాగ్రత్తగా సమీక్షించండి మరియు అధికంగా లేదా అనవసరంగా అనిపించే దేనినైనా తిరస్కరించండి.",
                    knowledgePoint: "Knowledge Point: Over-privileged applications are a major source of mobile data theft and privacy invasion.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: అధిక అధికారాలు కలిగిన అప్లికేషన్‌లు మొబైల్ డేటా దొంగతనం మరియు గోప్యతా ఉల్లంఘనకు ప్రధాన మూలం."
                },
                {
                    question: "How should you safely dispose of an old laptop or smartphone?",
                    te_question: "పాత ల్యాప్‌టాప్ లేదా స్మార్ట్‌ఫోన్‌ను మీరు సురక్షితంగా ఎలా పారవేయాలి?",
                    type: "mcq",
                    answers: [
                        { text: "Just delete the files and throw it in the trash.", te_text: "ఫైల్‌లను తొలగించి చెత్తలో పడేయండి.", correct: false, id: 33 },
                        { text: "Perform a factory reset and completely wipe the storage.", te_text: "ఫ్యాక్టరీ రీసెట్ చేసి, నిల్వను పూర్తిగా తుడిచివేయండి.", correct: true, id: 34 },
                        { text: "Sell it online without removing the memory card.", te_text: "మెమరీ కార్డును తీసివేయకుండా ఆన్‌లైన్‌లో అమ్మండి.", correct: false, id: 35 },
                        { text: "Leave all your logins signed in so the new owner can contact you.", te_text: "కొత్త యజమాని మిమ్మల్ని సంప్రదించడానికి మీ అన్ని లాగిన్‌లను సైన్ ఇన్ చేసి ఉంచండి.", correct: false, id: 36 },
                    ],
                    incorrectFeedback: "A simple delete doesn't remove the data. A **FACTORY RESET/WIPE** is necessary to make sure no one can recover your personal photos, files, or accounts. **Real-Life Tip:** Use a professional data destruction service for truly sensitive drives.",
                    te_incorrectFeedback: "సాధారణ తొలగింపు డేటాను తీసివేయదు. మీ వ్యక్తిగత ఫోటోలు, ఫైల్‌లు లేదా ఖాతాలను ఎవరూ తిరిగి పొందకుండా చూసుకోవడానికి **ఫ్యాక్టరీ రీసెట్/తుడిచివేయడం** అవసరం. **రియల్-లైఫ్ చిట్కా:** నిజంగా సున్నితమైన డ్రైవ్‌ల కోసం వృత్తిపరమైన డేటా నాశనం సేవను ఉపయోగించండి.",
                    knowledgePoint: "Knowledge Point: Deleted files can often be recovered easily with simple software tools unless the drive space is overwritten.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: డ్రైవ్ స్థలం తిరిగి రాయబడకపోతే తప్ప తొలగించబడిన ఫైల్‌లను సాధారణ సాఫ్ట్‌వేర్ సాధనాలతో తరచుగా సులభంగా తిరిగి పొందవచ్చు."
                },
                {
                    question: "Why should you be cautious about connecting your phone to a public USB charging station ('Juice Jacking')?",
                    te_question: "మీ ఫోన్‌ను పబ్లిక్ USB ఛార్జింగ్ స్టేషన్‌కు ('జ్యూస్ జాకింగ్') కనెక్ట్ చేయడం గురించి మీరు ఎందుకు జాగ్రత్తగా ఉండాలి?",
                    type: "mcq",
                    answers: [
                        { text: "It charges your phone too slowly.", te_text: "ఇది మీ ఫోన్‌ను చాలా నెమ్మదిగా ఛార్జ్ చేస్తుంది.", correct: false, id: 37 },
                        { text: "It may secretly steal data or load malware onto your phone.", te_text: "ఇది రహస్యంగా డేటాను దొంగిలించవచ్చు లేదా మీ ఫోన్‌లోకి మాల్వేర్‌ను లోడ్ చేయవచ్చు.", correct: true, id: 38 },
                        { text: "It might void your phone's warranty.", te_text: "ఇది మీ ఫోన్ వారంటీని రద్దు చేయవచ్చు.", correct: false, id: 39 },
                        { text: "The power surge could damage your battery.", te_text: "విద్యుత్ పెరుగుదల మీ బ్యాటరీని దెబ్బతీస్తుంది.", correct: false, id: 40 },
                    ],
                    incorrectFeedback: "Public USB ports can be modified to transmit data. This is called **'JUICE JACKING'**. **Real-Life Tip:** Always use a wall socket with your own adapter, or use a 'charge-only' USB cable.",
                    te_incorrectFeedback: "పబ్లిక్ USB పోర్ట్‌లు డేటాను ప్రసారం చేయడానికి సవరించబడవచ్చు. దీనిని **'జ్యూస్ జాకింగ్'** అంటారు. **రియల్-లైఫ్ చిట్కా:** ఎల్లప్పుడూ మీ స్వంత అడాప్టర్‌తో గోడ సాకెట్‌ను ఉపయోగించండి లేదా 'ఛార్జ్-మాత్రమే' USB కేబుల్‌ను ఉపయోగించండి.",
                    knowledgePoint: "Knowledge Point: USB cables carry both power and data. A malicious charger can exploit the data lines.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: USB కేబుల్స్ పవర్ మరియు డేటా రెండింటినీ కలిగి ఉంటాయి. హానికరమైన ఛార్జర్ డేటా లైన్‌లను దోపిడీ చేయగలదు."
                },
                
                // TRUE/FALSE (type: boolean)
                {
                    question: "True or False: It is safe to click on a link in an email as long as your antivirus software is running.",
                    te_question: "నిజం లేదా అబద్ధం: మీ యాంటీవైరస్ సాఫ్ట్‌వేర్ నడుస్తున్నంత వరకు ఒక ఈమెయిల్‌లోని లింక్‌ను క్లిక్ చేయడం సురక్షితం.",
                    type: "boolean",
                    answers: [
                        { text: "True", te_text: "నిజం", correct: false, id: 41 },
                        { text: "False", te_text: "అబద్ధం", correct: true, id: 42 },
                    ],
                    incorrectFeedback: "FALSE. Antivirus software is helpful, but it cannot stop all phishing attacks or links to brand-new scam websites. **Real-Life Tip:** Your brain is your best security tool. Always verify the sender and link address manually.",
                    te_incorrectFeedback: "అబద్ధం. యాంటీవైరస్ సాఫ్ట్‌వేర్ సహాయపడుతుంది, కానీ ఇది అన్ని ఫిషింగ్ దాడులు లేదా సరికొత్త స్కామ్ వెబ్‌సైట్‌ల లింక్‌లను ఆపలేదు. **రియల్-లైఫ్ చిట్కా:** మీ మెదడు మీ ఉత్తమ భద్రతా సాధనం. పంపినవారిని మరియు లింక్ చిరునామాను ఎల్లప్పుడూ మానవీయంగా ధృవీకరించండి.",
                    knowledgePoint: "Knowledge Point: Zero-day exploits (new, unpatched vulnerabilities) can bypass even the best antivirus programs.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: జీరో-డే ఎక్స్‌ప్లోయిట్‌లు (కొత్త, ప్యాచ్ చేయని లోపాలు) ఉత్తమ యాంటీవైరస్ ప్రోగ్రామ్‌లను కూడా దాటవేయగలవు."
                },
                {
                    question: "True or False: Using Multi-Factor Authentication (MFA) or Two-Factor Authentication (2FA) makes it almost impossible for hackers to access your account.",
                    te_question: "నిజం లేదా అబద్ధం: బహుళ-కారకాల ప్రమాణీకరణ (MFA) లేదా రెండు-కారకాల ప్రమాణీకరణ (2FA) ను ఉపయోగించడం వలన హ్యాకర్లు మీ ఖాతాను యాక్సెస్ చేయడం దాదాపు అసాధ్యం అవుతుంది.",
                    type: "boolean",
                    answers: [
                        { text: "True", te_text: "నిజం", correct: true, id: 43 },
                        { text: "False", te_text: "అబద్ధం", correct: false, id: 44 },
                    ],
                    incorrectFeedback: "TRUE. Even if a hacker steals your password, they need the second code from your phone to get in. This stops over 99.9% of automated attacks. **Real-Life Tip:** If a service offers MFA, always turn it on!",
                    te_incorrectFeedback: "నిజం. హ్యాకర్ మీ పాస్‌వర్డ్‌ను దొంగిలించినప్పటికీ, లోపలికి రావడానికి వారికి మీ ఫోన్ నుండి రెండవ కోడ్ అవసరం. ఇది 99.9% కంటే ఎక్కువ ఆటోమేటెడ్ దాడులను ఆపుతుంది. **రియల్-లైఫ్ చిట్కా:** ఒక సేవ MFA ను అందిస్తే, ఎల్లప్పుడూ దాన్ని ఆన్ చేయండి!",
                    knowledgePoint: "Knowledge Point: MFA is considered the single most effective way to prevent account takeover and identity theft.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: ఖాతా స్వాధీనం మరియు గుర్తింపు దొంగతనాన్ని నిరోధించడానికి MFA అత్యంత ప్రభావవంతమైన మార్గంగా పరిగణించబడుతుంది."
                },
                {
                    question: "True or False: You should use the same password for accounts that aren't very important, like a forum or newsletter.",
                    te_question: "నిజం లేదా అబద్ధం: ఫోరం లేదా వార్తాలేఖ వంటి అంత ముఖ్యమైనవి కాని ఖాతాలకు మీరు అదే పాస్‌వర్డ్‌ను ఉపయోగించాలి.",
                    type: "boolean",
                    answers: [
                        { text: "True", te_text: "నిజం", correct: false, id: 45 },
                        { text: "False", te_text: "అబద్ధం", correct: true, id: 46 },
                    ],
                    incorrectFeedback: "FALSE. If a minor website is hacked, the criminal will use that password to try to log into your email and bank accounts. **Real-Life Tip:** Use a unique password for every single service. Use a password manager to help you remember them all.",
                    te_incorrectFeedback: "అబద్ధం. ఒక చిన్న వెబ్‌సైట్ హ్యాక్ అయితే, ఆ పాస్‌వర్డ్‌ను ఉపయోగించి నేరగాడు మీ ఈమెయిల్ మరియు బ్యాంక్ ఖాతాలలోకి లాగిన్ అవ్వడానికి ప్రయత్నిస్తాడు. **రియల్-లైఫ్ చిట్కా:** ప్రతి ఒక్క సేవకు ప్రత్యేకమైన పాస్‌వర్డ్‌ను ఉపయోగించండి. వాటన్నింటినీ గుర్తుంచుకోవడానికి పాస్‌వర్డ్ మేనేజర్‌ను ఉపయోగించండి.",
                    knowledgePoint: "Knowledge Point: A 'credential stuffing' attack uses stolen usernames and passwords from one breach to test against hundreds of other websites.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: 'క్రెడెన్షియల్ స్టఫింగ్' దాడి ఒక ఉల్లంఘన నుండి దొంగిలించబడిన యూజర్‌నేమ్‌లు మరియు పాస్‌వర్డ్‌లను వందలాది ఇతర వెబ్‌సైట్‌లకు వ్యతిరేకంగా పరీక్షించడానికి ఉపయోగిస్తుంది."
                },
                {
                    question: "True or False: It is safe to keep your computer's operating system (Windows, MacOS) set to automatically update.",
                    te_question: "నిజం లేదా అబద్ధం: మీ కంప్యూటర్ యొక్క ఆపరేటింగ్ సిస్టమ్‌ను (Windows, MacOS) స్వయంచాలకంగా అప్‌డేట్ చేయడానికి సెట్ చేయడం సురక్షితం.",
                    type: "boolean",
                    answers: [
                        { text: "True", te_text: "నిజం", correct: true, id: 47 },
                        { text: "False", te_text: "అబద్ధం", correct: false, id: 48 },
                    ],
                    incorrectFeedback: "TRUE. Updates fix newly discovered security holes that hackers can exploit. Auto-updates ensure you are protected immediately. **Real-Life Tip:** Don't delay updates when prompted; security is more important than convenience.",
                    te_incorrectFeedback: "నిజం. అప్‌డేట్‌లు హ్యాకర్లు దోపిడీ చేయగల కొత్తగా కనుగొనబడిన భద్రతా రంధ్రాలను పరిష్కరిస్తాయి. ఆటో-అప్‌డేట్‌లు మీరు వెంటనే రక్షించబడ్డారని నిర్ధారిస్తాయి. **రియల్-లైఫ్ చిట్కా:** అడిగినప్పుడు అప్‌డేట్‌లను ఆలస్యం చేయవద్దు; సౌలభ్యం కంటే భద్రత ముఖ్యం.",
                    knowledgePoint: "Knowledge Point: Most successful cyberattacks exploit vulnerabilities that have already been fixed by a manufacturer but never applied by the user.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: చాలా విజయవంతమైన సైబర్ దాడులు ఇప్పటికే తయారీదారుచే పరిష్కరించబడినప్పటికీ, వినియోగదారుచే ఎప్పుడూ వర్తించని లోపాలను దోపిడీ చేస్తాయి."
                },
                {
                    question: "True or False: A padlock icon in the browser means the website is 100% trustworthy and safe from all scams.",
                    te_question: "నిజం లేదా అబద్ధం: బ్రౌజర్‌లోని ప్యాడ్‌లాక్ చిహ్నం వెబ్‌సైట్ 100% నమ్మదగినది మరియు అన్ని స్కామ్‌ల నుండి సురక్షితం అని అర్థం.",
                    type: "boolean",
                    answers: [
                        { text: "True", te_text: "నిజం", correct: false, id: 49 },
                        { text: "False", te_text: "అబద్ధం", correct: true, id: 50 },
                    ],
                    incorrectFeedback: "FALSE. The padlock only means the connection is encrypted (HTTPS). Scammers often use encryption on their phishing sites to look legitimate. **Real-Life Tip:** Always check the URL in the address bar—is it spelled correctly? Is it the *real* company?",
                    te_incorrectFeedback: "అబద్ధం. ప్యాడ్‌లాక్ అంటే కనెక్షన్ ఎన్‌క్రిప్ట్ చేయబడింది (HTTPS) అని మాత్రమే అర్థం. స్కామర్‌లు చట్టబద్ధంగా కనిపించడానికి తరచుగా వారి ఫిషింగ్ సైట్‌లలో ఎన్‌క్రిప్షన్‌ను ఉపయోగిస్తారు. **రియల్-లైఫ్ చిట్కా:** అడ్రస్ బార్‌లో URL ను ఎల్లప్పుడూ తనిఖీ చేయండి—అది సరిగ్గా స్పెల్లింగ్ చేయబడిందా? ఇది *నిజమైన* కంపెనీనా?",
                    knowledgePoint: "Knowledge Point: Phishing sites often replicate a login page perfectly, but the URL will always contain a subtle, malicious change.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: ఫిషింగ్ సైట్‌లు తరచుగా లాగిన్ పేజీని సంపూర్ణంగా ప్రతిబింబిస్తాయి, కానీ URL లో ఎల్లప్పుడూ సూక్ష్మమైన, హానికరమైన మార్పు ఉంటుంది."
                },

                // MULTI-SELECT (type: multi-select)
                {
                    question: "Which THREE actions help protect your social media privacy?",
                    te_question: "మీ సోషల్ మీడియా గోప్యతను రక్షించడానికి ఏ మూడు చర్యలు సహాయపడతాయి?",
                    type: "multi-select",
                    correctCount: 3,
                    answers: [
                        { text: "Setting your profile to 'Private'.", te_text: "మీ ప్రొఫైల్‌ను 'ప్రైవేట్'కు సెట్ చేయడం.", correct: true, id: 51 },
                        { text: "Accepting friend requests from everyone to be popular.", te_text: "ప్రజాదరణ పొందడానికి అందరి నుండి స్నేహితుల అభ్యర్థనలను అంగీకరించడం.", correct: false, id: 52 },
                        { text: "Turning off location tagging on your posts.", te_text: "మీ పోస్ట్‌లలో లొకేషన్ ట్యాగింగ్‌ను ఆఫ్ చేయడం.", correct: true, id: 53 },
                        { text: "Regularly reviewing and removing old apps that have access to your profile data.", te_text: "మీ ప్రొఫైల్ డేటాకు యాక్సెస్ ఉన్న పాత యాప్‌లను క్రమం తప్పకుండా సమీక్షించడం మరియు తీసివేయడం.", correct: true, id: 54 },
                    ],
                    incorrectFeedback: "To protect your privacy, you need to restrict who sees your life and what data external apps can collect. Only set your profile to **Private**, turn off **Location Tagging**, and **Review App Permissions**.",
                    te_incorrectFeedback: "మీ గోప్యతను రక్షించడానికి, మీ జీవితాన్ని ఎవరు చూస్తారో మరియు బాహ్య యాప్‌లు ఏ డేటాను సేకరించగలవో మీరు పరిమితం చేయాలి. మీ ప్రొఫైల్‌ను **ప్రైవేట్**కు మాత్రమే సెట్ చేయండి, **లొకేషన్ ట్యాగింగ్**ను ఆఫ్ చేయండి మరియు **యాప్ అనుమతులను సమీక్షించండి**.",
                    knowledgePoint: "Knowledge Point: Information you share today (like your pet's name or your high school) can be used by hackers tomorrow to guess security questions.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: మీరు ఈ రోజు పంచుకునే సమాచారం (మీ పెంపుడు జంతువు పేరు లేదా మీ ఉన్నత పాఠశాల వంటివి) భద్రతా ప్రశ్నలను ఊహించడానికి హ్యాకర్లు రేపు ఉపయోగించవచ్చు."
                },
                {
                    question: "If your password is stolen (e.g., from a data leak), what TWO immediate actions should you take?",
                    te_question: "మీ పాస్‌వర్డ్ దొంగిలించబడితే (ఉదా. డేటా లీక్ నుండి), మీరు వెంటనే ఏ రెండు చర్యలు తీసుకోవాలి?",
                    type: "multi-select",
                    correctCount: 2,
                    answers: [
                        { text: "Immediately change the password on the compromised account.", te_text: "ఉల్లంఘన జరిగిన ఖాతాలో పాస్‌వర్డ్‌ను వెంటనే మార్చండి.", correct: true, id: 55 },
                        { text: "Change the password on every other account that used the same password.", te_text: "అదే పాస్‌వర్డ్‌ను ఉపయోగించిన ప్రతి ఇతర ఖాతాలో పాస్‌వర్డ్‌ను మార్చండి.", correct: true, id: 56 },
                        { text: "Send an email to the company complaining about the leak.", te_text: "లీక్ గురించి ఫిర్యాదు చేస్తూ కంపెనీకి ఈమెయిల్ పంపండి.", correct: false, id: 57 },
                        { text: "Wait a week to see if the hackers actually log in.", te_text: "హ్యాకర్లు నిజంగా లాగిన్ అవుతారో లేదో చూడటానికి ఒక వారం వేచి ఉండండి.", correct: false, id: 58 },
                    ],
                    incorrectFeedback: "A stolen password requires quick action! You must change the password on the **Compromised Account** and any **Other Accounts** using the same password to prevent a chain reaction of compromises.",
                    te_incorrectFeedback: "దొంగిలించబడిన పాస్‌వర్డ్‌కు తక్షణ చర్య అవసరం! రాజీపడే గొలుసు ప్రతిచర్యను నిరోధించడానికి మీరు **ఉల్లంఘన జరిగిన ఖాతా** మరియు అదే పాస్‌వర్డ్‌ను ఉపయోగించే ఏదైనా **ఇతర ఖాతాలలో** పాస్‌వర్డ్‌ను మార్చాలి.",
                    knowledgePoint: "Knowledge Point: The average time a hacker remains undetected in a victim's network is over 200 days. Quick response is vital.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: హ్యాకర్ బాధితుడి నెట్‌వర్క్‌లో గుర్తించబడకుండా ఉండే సగటు సమయం 200 రోజులకు పైగా ఉంటుంది. తక్షణ ప్రతిస్పందన చాలా ముఖ్యమైనది."
                },
                {
                    question: "Which TWO details should you never share in response to an unsolicited (unexpected) email?",
                    te_question: "అవాంఛిత (ఊహించని) ఈమెయిల్‌కు ప్రతిస్పందనగా మీరు ఏ రెండు వివరాలను ఎప్పుడూ పంచుకోకూడదు?",
                    type: "multi-select",
                    correctCount: 2,
                    answers: [
                        { text: "Your favorite color.", te_text: "మీకు ఇష్టమైన రంగు.", correct: false, id: 59 },
                        { text: "Your bank account PIN (Personal Identification Number).", te_text: "మీ బ్యాంక్ ఖాతా PIN (వ్యక్తిగత గుర్తింపు సంఖ్య).", correct: true, id: 60 },
                        { text: "Your birth date or Social Security Number.", te_text: "మీ పుట్టిన తేదీ లేదా సామాజిక భద్రతా సంఖ్య.", correct: true, id: 61 },
                        { text: "Your job title.", te_text: "మీ ఉద్యోగ శీర్షిక.", correct: false, id: 62 },
                    ],
                    incorrectFeedback: "Never share confidential information via unexpected emails. **PINs** and **Government IDs** (like Social Security Number or national ID) are the keys to identity theft. No legitimate company asks for these via email.",
                    te_incorrectFeedback: "ఊహించని ఈమెయిల్‌ల ద్వారా గోప్యమైన సమాచారాన్ని ఎప్పుడూ పంచుకోకండి. **PINలు** మరియు **ప్రభుత్వ IDలు** (సామాజిక భద్రతా సంఖ్య లేదా జాతీయ ID వంటివి) గుర్తింపు దొంగతనానికి కీలకం. చట్టబద్ధమైన కంపెనీలు ఈమెయిల్ ద్వారా వీటిని అడగవు.",
                    knowledgePoint: "Knowledge Point: Identity thieves piece together small amounts of personal data to impersonate you for loans or credit cards.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: గుర్తింపు దొంగలు రుణాలు లేదా క్రెడిట్ కార్డుల కోసం మిమ్మల్ని అనుకరించడానికి చిన్న మొత్తంలో వ్యక్తిగత డేటాను ముక్కలుగా చేస్తారు."
                },
                {
                    question: "Which THREE items make a password strong and effective?",
                    te_question: "పాస్‌వర్డ్‌ను బలంగా మరియు ప్రభావవంతంగా చేసే మూడు అంశాలు ఏవి?",
                    type: "multi-select",
                    correctCount: 3,
                    answers: [
                        { text: "Must be a common, easy-to-remember word.", te_text: "సాధారణ, సులభంగా గుర్తుంచుకోగలిగే పదం అయి ఉండాలి.", correct: false, id: 63 },
                        { text: "Includes a mix of UPPERCASE and lowercase letters.", te_text: "పెద్ద అక్షరాలు మరియు చిన్న అక్షరాల మిశ్రమాన్ని కలిగి ఉండాలి.", correct: true, id: 64 },
                        { text: "Includes numbers (0-9).", te_text: "సంఖ్యలను (0-9) కలిగి ఉండాలి.", correct: true, id: 65 },
                        { text: "Includes symbols (@, #, !, $).", te_text: "చిహ్నాలను (@, #, !, $) కలిగి ఉండాలి.", correct: true, id: 66 },
                    ],
                    incorrectFeedback: "A strong password is a mix of three things: **Uppercase/Lowercase Letters**, **Numbers**, and **Symbols**. Complexity and length are your allies against automated guessing tools.",
                    te_incorrectFeedback: "బలమైన పాస్‌వర్డ్ మూడు విషయాల మిశ్రమం: **పెద్ద/చిన్న అక్షరాలు**, **సంఖ్యలు** మరియు **చిహ్నాలు**. ఆటోమేటెడ్ ఊహించే సాధనాలకు వ్యతిరేకంగా సంక్లిష్టత మరియు పొడవు మీకు సహాయపడతాయి.",
                    knowledgePoint: "Knowledge Point: Use a long passphrase that incorporates these elements (e.g., 'Myd0gL0v3s!B@nana$') for maximum security.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: గరిష్ట భద్రత కోసం ఈ అంశాలను కలిగి ఉన్న సుదీర్ఘ పాస్‌ఫ్రేజ్‌ను ఉపయోగించండి (ఉదా. 'Myd0gL0v3s!B@nana$')."
                },
                {
                    question: "What TWO things should you do before downloading a file from an unknown website?",
                    te_question: "తెలియని వెబ్‌సైట్ నుండి ఫైల్‌ను డౌన్‌లోడ్ చేయడానికి ముందు మీరు ఏ రెండు పనులు చేయాలి?",
                    type: "multi-select",
                    correctCount: 2,
                    answers: [
                        { text: "Check user reviews and comments about the file or site.", te_text: "ఫైల్ లేదా సైట్ గురించి వినియోగదారు సమీక్షలు మరియు వ్యాఖ్యలను తనిఖీ చేయండి.", correct: true, id: 67 },
                        { text: "Temporarily turn off your antivirus to speed up the download.", te_text: "డౌన్‌లోడ్‌ను వేగవంతం చేయడానికి మీ యాంటీవైరస్‌ను తాత్కాలికంగా ఆఫ్ చేయండి.", correct: false, id: 68 },
                        { text: "Scan the file with an online file scanner (like VirusTotal) if possible.", te_text: "సాధ్యమైతే ఆన్‌లైన్ ఫైల్ స్కానర్‌తో (VirusTotal వంటివి) ఫైల్‌ను స్కాన్ చేయండి.", correct: true, id: 69 },
                        { text: "Trust the website if it uses a colorful logo.", te_text: "వెబ్‌సైట్ రంగురంగుల లోగోను ఉపయోగిస్తే దాన్ని నమ్మండి.", correct: false, id: 70 },
                    ],
                    incorrectFeedback: "Safety first! You must **Check Reviews** to see if others had issues and **Scan the File** for malware before opening it. Never download files from sources you don't trust.",
                    te_incorrectFeedback: "ముందు భద్రత! ఇతరులకు సమస్యలు ఉన్నాయో లేదో చూడటానికి మీరు తప్పనిసరిగా **సమీక్షలను తనిఖీ చేయాలి** మరియు తెరవడానికి ముందు మాల్వేర్ కోసం **ఫైల్‌ను స్కాన్ చేయాలి**. మీరు విశ్వసించని మూలాల నుండి ఫైల్‌లను ఎప్పుడూ డౌన్‌లోడ్ చేయవద్దు.",
                    knowledgePoint: "Knowledge Point: Malicious files often hide as common, useful downloads like PDF documents or software installers.",
                    te_knowledgePoint: "జ్ఞానం పాయింట్: హానికరమైన ఫైల్‌లు తరచుగా PDF పత్రాలు లేదా సాఫ్ట్‌వేర్ ఇన్‌స్టాలర్‌ల వంటి సాధారణ, ఉపయోగకరమైన డౌన్‌లోడ్‌లుగా దాగి ఉంటాయి."
                },
            ];

            // --- DOM Elements ---
            const body = document.body;
            const landingPage = document.getElementById("landing-page");
            const gameContainer = document.getElementById("game-container");
            const blogSection = document.getElementById("blog-section");
            const startQuizBtn = document.getElementById("start-quiz-btn");
            const viewBlogsBtn = document.getElementById("view-blogs-btn");
            const closeQuizBtn = document.getElementById("close-quiz-btn");
            const backToMenuBlogsBtn = document.getElementById("back-to-menu-blogs-btn");
            
            const questionText = document.getElementById("question-text");
            const answerContainer = document.getElementById("answers");
            const submitBtn = document.getElementById("submit-btn");
            const multiSelectPrompt = document.getElementById("multi-select-prompt");
            
            const currentQNumDisplay = document.getElementById("current-q-num");
            const currentQNumDisplayTe = document.getElementById("current-q-num-te");
            const currentScoreDisplay = document.getElementById("current-score");
            const currentScoreDisplayTe = document.getElementById("current-score-te");
            const totalQuestionsDisplay = document.getElementById("total-questions");
            const finalScoreDisplay = document.getElementById("final-score");
            const finalScoreDisplayTe = document.getElementById("final-score-te");
            const finalMessage = document.getElementById("final-message");
            const scoreAdvice = document.getElementById("score-advice");
            const scoreSection = document.getElementById("score-section");
            const restartButton = document.getElementById("restart-btn");
            
            // Feedback Elements
            const hazardOverlay = document.getElementById("hazard-overlay");
            const hazardExplanation = document.getElementById("hazard-explanation");
            const hazardCloseBtn = document.getElementById("hazard-close-btn");
            const knowledgePopup = document.getElementById("knowledge-popup");
            const knowledgeText = document.getElementById("knowledge-text");
            const knowledgeCloseBtn = document.getElementById("knowledge-close-btn");

            // Navigation Buttons
            const prevQBtn = document.getElementById("prev-q-btn");
            const nextQBtn = document.getElementById("next-q-btn");
            const themeToggleBtn = document.getElementById("theme-toggle");
            const sunIcon = document.getElementById("sun-icon");
            const moonIcon = document.getElementById("moon-icon");

            // Blog Tabs
            const englishTab = document.getElementById('english-tab');
            const teluguTab = document.getElementById('telugu-tab');
            const englishContent = document.getElementById('english-content');
            const teluguContent = document.getElementById('telugu-content');


            // --- Game State ---
            let quizHistory = [];
            let currentQuestionIndex = 0;
            let score = 0;
            let isPaused = false; 
            let isDarkTheme = true;

            totalQuestionsDisplay.textContent = questions.length;

            // --- View Management ---

            function showView(view) {
                landingPage.classList.add('hidden');
                gameContainer.classList.add('hidden');
                blogSection.classList.add('hidden');

                if (view === 'home') {
                    landingPage.classList.remove('hidden');
                } else if (view === 'quiz') {
                    gameContainer.classList.remove('hidden');
                } else if (view === 'blogs') {
                    blogSection.classList.remove('hidden');
                    // Ensure English tab is active by default
                    setActiveBlogTab('english');
                }
            }

            function setActiveBlogTab(language) {
                if (language === 'english') {
                    englishContent.classList.remove('hidden');
                    teluguContent.classList.add('hidden');
                    englishTab.classList.add('border-purple-500', 'text-purple-400');
                    englishTab.classList.remove('border-transparent', 'text-gray-400');
                    teluguTab.classList.add('border-transparent', 'text-gray-400');
                    teluguTab.classList.remove('border-purple-500', 'text-purple-400');
                } else {
                    teluguContent.classList.remove('hidden');
                    englishContent.classList.add('hidden');
                    teluguTab.classList.add('border-purple-500', 'text-purple-400');
                    teluguTab.classList.remove('border-transparent', 'text-gray-400');
                    englishTab.classList.add('border-transparent', 'text-gray-400');
                    englishTab.classList.remove('border-purple-500', 'text-purple-400');
                }
            }

            // --- Theme Management ---
            function toggleTheme() {
                isDarkTheme = !isDarkTheme;
                body.classList.toggle('light', !isDarkTheme);
                body.classList.toggle('dark', isDarkTheme);
                sunIcon.classList.toggle('hidden', !isDarkTheme);
                moonIcon.classList.toggle('hidden', isDarkTheme);
            }
            
            // --- Core Game Functions ---

            function startGame() {
                // Initialize quiz history with a deep copy of questions, adding state tracking
                quizHistory = JSON.parse(JSON.stringify(questions)).map(q => ({
                    ...q,
                    userSelection: [], // Array of selected answer IDs
                    isAnswered: false,
                    isCorrect: null // null, true, or false
                }));
                shuffleArray(quizHistory);
                
                currentQuestionIndex = 0;
                score = 0;
                isPaused = false;
                currentScoreDisplay.textContent = score;
                currentScoreDisplayTe.textContent = score;
                scoreSection.classList.add('hidden');
                document.getElementById("question-section").classList.remove('hidden'); 
                showQuestion();
                showView('quiz');
            }

            function shuffleArray(array) {
                // Only shuffle if it's the beginning of a new game, not on reload/restart
                if (currentQuestionIndex === 0) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }
            }

            function showQuestion() {
                if (currentQuestionIndex < 0) currentQuestionIndex = 0;
                if (currentQuestionIndex >= quizHistory.length) {
                    endGame();
                    return;
                }
                
                const questionData = quizHistory[currentQuestionIndex];
                currentQNumDisplay.textContent = currentQuestionIndex + 1;
                currentQNumDisplayTe.textContent = currentQuestionIndex + 1;

                // Render Bilingual Question
                questionText.innerHTML = `
                    ${questionData.question}
                    <span class="telugu-text font-normal italic block text-xl mt-1">${questionData.te_question}</span>
                `;
                
                answerContainer.innerHTML = ''; 
                isPaused = false; // Ensure unpaused when question loads

                const isMultiSelect = questionData.type === 'multi-select';
                submitBtn.classList.toggle('hidden', !isMultiSelect);
                multiSelectPrompt.classList.toggle('hidden', !isMultiSelect);

                // Update Submit button text based on language
                if (isMultiSelect) {
                    multiSelectPrompt.innerHTML = `
                        **MULTI-SELECT:** Click all the correct options, then click SUBMIT.
                        <span class="telugu-text font-normal italic">బహుళ-ఎంపిక: సరైన ఎంపికలన్నింటినీ క్లిక్ చేసి, ఆపై సమాధానం సమర్పించండి.</span>
                    `;
                }
                
                const hasBeenAnswered = questionData.isAnswered;

                // Create and attach new buttons
                questionData.answers.forEach((answer) => {
                    const button = document.createElement('button');
                    button.classList.add('answer-btn', 'bg-indigo-500', 'text-white', 'py-3', 'px-4', 'rounded-lg', 'font-medium', 'shadow-md', 'disabled:opacity-75', 'text-left');
                    
                    // Render Bilingual Answer
                    button.innerHTML = `
                        ${answer.text}
                        <span class="telugu-text font-normal italic">${answer.te_text}</span>
                    `;
                    
                    button.setAttribute('data-answer-id', answer.id);

                    const isSelected = questionData.userSelection.includes(answer.id);

                    if (isSelected) {
                        button.classList.add('selected-answer');
                    }
                    if (hasBeenAnswered) {
                        button.disabled = true;
                        // Visual feedback for correctness on answered questions
                        if (answer.correct) {
                            button.classList.add('bg-green-600');
                            button.classList.remove('bg-indigo-500');
                        } else if (isSelected && !answer.correct) {
                            button.classList.add('bg-red-600');
                            button.classList.remove('bg-indigo-500');
                        }
                    }

                    if (isMultiSelect) {
                        button.onclick = () => handleMultiSelectClick(button, answer.id);
                    } else {
                        button.onclick = () => checkSingleSelectAnswer(answer.correct, questionData, answer.id, button);
                    }
                    answerContainer.appendChild(button);
                });

                // Update Submit button state and navigation buttons
                submitBtn.disabled = questionData.userSelection.length === 0 || hasBeenAnswered;
                submitBtn.onclick = () => checkMultiSelectAnswer(questionData);
                
                updateNavigationButtons();
            }

            function updateNavigationButtons() {
                // Update Previous button state (disabled only on the first question)
                prevQBtn.disabled = currentQuestionIndex === 0;

                const isLastQuestion = currentQuestionIndex === quizHistory.length - 1;
                
                if (isLastQuestion) {
                    nextQBtn.innerHTML = "Finish Quiz <span class='telugu-text text-sm ml-2'>క్విజ్ ముగించండి</span>";
                    nextQBtn.disabled = false;
                    nextQBtn.classList.remove('bg-blue-600');
                    nextQBtn.classList.add('bg-green-600');
                } else {
                    nextQBtn.innerHTML = "Next &rarr; <span class='telugu-text text-sm ml-2'>తదుపరి</span>";
                    nextQBtn.disabled = false;
                    nextQBtn.classList.add('bg-blue-600');
                    nextQBtn.classList.remove('bg-green-600');
                }
            }

            // --- Multi-Select Logic ---

            function handleMultiSelectClick(button, answerId) {
                if (isPaused) return;

                const index = quizHistory[currentQuestionIndex].userSelection.indexOf(answerId);
                
                if (index > -1) {
                    quizHistory[currentQuestionIndex].userSelection.splice(index, 1);
                    button.classList.remove('selected-answer');
                } else {
                    quizHistory[currentQuestionIndex].userSelection.push(answerId);
                    button.classList.add('selected-answer');
                }
                
                // Enable/disable submit button
                submitBtn.disabled = quizHistory[currentQuestionIndex].userSelection.length === 0;
            }

            function checkMultiSelectAnswer(questionData) {
                isPaused = true;
                
                // Disable buttons and submit
                answerContainer.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
                submitBtn.disabled = true;

                const correctAnswers = questionData.answers.filter(a => a.correct).map(a => a.id);
                const userSelection = questionData.userSelection;
                
                const isCorrect = (
                    userSelection.length === correctAnswers.length &&
                    userSelection.every(id => correctAnswers.includes(id))
                );
                
                // Update history
                questionData.isAnswered = true;
                questionData.isCorrect = isCorrect;
                
                // Score update
                if (isCorrect) {
                    score++;
                    currentScoreDisplay.textContent = score;
                    currentScoreDisplayTe.textContent = score;
                    showCorrectFeedback(questionData.knowledgePoint, questionData.te_knowledgePoint);
                } else {
                    showIncorrectFeedback(questionData.incorrectFeedback, questionData.te_incorrectFeedback);
                }
                
                // Show visual feedback on the buttons
                questionData.answers.forEach(answer => {
                    const button = answerContainer.querySelector(`[data-answer-id="${answer.id}"]`);
                    if (answer.correct) {
                        button.classList.remove('bg-indigo-500', 'selected-answer');
                        button.classList.add('bg-green-600');
                    } else if (userSelection.includes(answer.id) && !answer.correct) {
                        button.classList.remove('bg-indigo-500', 'selected-answer');
                        button.classList.add('bg-red-600');
                    }
                });
                
                updateNavigationButtons();
            }
            
            // --- Single-Select Logic (MCQ/Boolean) ---
            function checkSingleSelectAnswer(isCorrect, questionData, answerId, selectedButton) {
                isPaused = true;
                
                // Disable all buttons
                answerContainer.querySelectorAll('.answer-btn').forEach(button => button.disabled = true);

                // Update history
                questionData.userSelection = [answerId];
                questionData.isAnswered = true;
                questionData.isCorrect = isCorrect;
                
                // Score update
                if (isCorrect) {
                    score++;
                    currentScoreDisplay.textContent = score;
                    currentScoreDisplayTe.textContent = score;
                    showCorrectFeedback(questionData.knowledgePoint, questionData.te_knowledgePoint);
                    selectedButton.classList.remove('bg-indigo-500');
                    selectedButton.classList.add('bg-green-600');
                } else {
                    showIncorrectFeedback(questionData.incorrectFeedback, questionData.te_incorrectFeedback);
                    selectedButton.classList.remove('bg-indigo-500');
                    selectedButton.classList.add('bg-red-600');
                    
                    // Highlight correct answer
                    questionData.answers.forEach(answer => {
                        if (answer.correct) {
                            answerContainer.querySelector(`[data-answer-id="${answer.id}"]`).classList.add('bg-green-600');
                        }
                    });
                }
                updateNavigationButtons();
            }

            // --- Feedback Functions ---

            function hideFeedbackAndProceed() {
                isPaused = false;
                knowledgePopup.classList.remove('popup-show');
                hazardOverlay.style.display = "none";
                
                setTimeout(() => {
                    knowledgePopup.style.display = "none";
                    
                    const currentQ = quizHistory[currentQuestionIndex];

                    // Only automatically advance if an answer was just processed AND it's not the last question
                    if (currentQ.isAnswered) { 
                        if (currentQuestionIndex < quizHistory.length - 1) {
                            currentQuestionIndex++;
                            showQuestion();
                        } else {
                            endGame(); // If it was the last question, show results
                        }
                    } else {
                        // User manually closed popup on an unanswered question, just update nav
                        updateNavigationButtons(); 
                    }
                }, 500); 
            }

            function showCorrectFeedback(knowledgePoint, te_knowledgePoint) {
                knowledgeText.innerHTML = `${knowledgePoint} <span class="telugu-text block">${te_knowledgePoint}</span>`;
                knowledgePopup.style.display = "block";
                setTimeout(() => knowledgePopup.classList.add('popup-show'), 50);
            }

            function showIncorrectFeedback(incorrectFeedback, te_incorrectFeedback) {
                hazardExplanation.innerHTML = `${incorrectFeedback} <span class="telugu-text block text-lg mt-2">${te_incorrectFeedback}</span>`;
                hazardOverlay.style.display = "flex";

                setTimeout(() => {
                    if (isPaused) { // If still paused after 3s, auto-close
                        hideFeedbackAndProceed();
                    }
                }, 3000); 
            }
            
            // --- Navigation ---

            function nextQuestion() {
                if (currentQuestionIndex < quizHistory.length - 1) {
                    currentQuestionIndex++;
                    showQuestion();
                } else if (currentQuestionIndex === quizHistory.length - 1) {
                    endGame();
                }
            }

            function previousQuestion() {
                if (currentQuestionIndex > 0) {
                    currentQuestionIndex--;
                    showQuestion();
                }
            }
            
            // --- Final Score ---

            function endGame() {
                scoreSection.classList.remove('hidden'); 
                const finalScoreText = `${score} out of ${quizHistory.length}`;
                finalScoreDisplay.textContent = finalScoreText; 
                finalScoreDisplayTe.textContent = `${score} లో ${quizHistory.length}`;
                document.getElementById("question-section").classList.add('hidden'); 
                
                let adviceEnglish = "";
                let adviceTelugu = "";

                if (score > 10) {
                    finalMessage.innerHTML = "EXCELLENT CYBER AWARENESS! <span class='telugu-text block text-2xl font-normal'>అద్భుతమైన సైబర్ అవగాహన!</span>";
                    finalMessage.classList.remove('text-blue-400', 'text-red-400');
                    finalMessage.classList.add('text-green-400');
                    adviceEnglish = "Your high score shows you are highly vigilant and ready to handle most common digital threats. Great job staying secure!";
                    adviceTelugu = "మీ అధిక స్కోరు మీరు అత్యంత అప్రమత్తంగా ఉన్నారని మరియు చాలా సాధారణ డిజిటల్ బెదిరింపులను ఎదుర్కోవడానికి సిద్ధంగా ఉన్నారని చూపిస్తుంది. సురక్షితంగా ఉండటం గొప్ప పని!";
                } else {
                    finalMessage.innerHTML = "AWARENESS BOOST NEEDED <span class='telugu-text block text-2xl font-normal'>అవగాహన పెంచాల్సిన అవసరం ఉంది</span>";
                    finalMessage.classList.remove('text-blue-400', 'text-green-400');
                    finalMessage.classList.add('text-red-400');
                    adviceEnglish = "Your score indicates some key concepts need review. To be safe, focus on the real-life tips provided in the quiz and read the resources below to understand more about cyber attacks.";
                    adviceTelugu = "మీ స్కోర్ కొన్ని ముఖ్య అంశాలను సమీక్షించాల్సిన అవసరం ఉందని సూచిస్తుంది. సురక్షితంగా ఉండటానికి, క్విజ్‌లో అందించిన రియల్-లైఫ్ చిట్కాలపై దృష్టి పెట్టండి మరియు సైబర్ దాడుల గురించి మరింత తెలుసుకోవడానికి దిగువ వనరులను చదవండి.";
                }
                
                scoreAdvice.innerHTML = `${adviceEnglish} <span class="telugu-text block mt-2 text-base font-light">${adviceTelugu}</span>`;
            }


            // --- Event Listeners ---
            themeToggleBtn.addEventListener("click", toggleTheme);
            startQuizBtn.addEventListener("click", startGame);
            viewBlogsBtn.addEventListener("click", () => showView('blogs'));
            closeQuizBtn.addEventListener("click", () => showView('home'));
            backToMenuBlogsBtn.addEventListener("click", () => showView('home'));
            restartButton.addEventListener("click", startGame); 

            prevQBtn.addEventListener("click", previousQuestion);
            
            // Modified next button to allow constant movement
            nextQBtn.addEventListener("click", () => {
                if (currentQuestionIndex === quizHistory.length - 1) {
                    endGame();
                } else {
                    currentQuestionIndex++;
                    showQuestion();
                }
            });

            knowledgeCloseBtn.addEventListener('click', () => {
                if (isPaused) { hideFeedbackAndProceed(); }
            });

            hazardCloseBtn.addEventListener('click', () => {
                if (isPaused) { hideFeedbackAndProceed(); }
            });

            // Blog Tab Listeners
            englishTab.addEventListener('click', () => setActiveBlogTab('english'));
            teluguTab.addEventListener('click', () => setActiveBlogTab('telugu'));
            
            // Initial call to set the theme and view
            toggleTheme(); // Set default (Dark) theme on load
            showView('home');

        })();

