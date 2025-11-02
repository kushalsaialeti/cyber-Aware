
        (function() {
            // --- DATA: Questions Array (20 questions) ---
            const questions = [
                // MCQs (type: mcq)
                {
                    question: "What is a common sign that an email is trying to steal your information (phishing)?",
                    type: "mcq",
                    answers: [
                        { text: "It's sent after 5 PM.", correct: false, id: 1 },
                        { text: "It asks you to click a link urgently or face a penalty.", correct: true, id: 2 },
                        { text: "It contains a simple typo in the subject line.", correct: false, id: 3 },
                        { text: "It is sent by your bank.", correct: false, id: 4 },
                    ],
                    incorrectFeedback: "Phishing emails often create a sense of **URGENCY** or **FEAR** to make you click without thinking. Always pause when you feel rushed. **Real-Life Tip:** Legitimate companies rarely use threats in emails.",
                    knowledgePoint: "Knowledge Point: Phishing is the number one cause of security breaches, targeting human psychology over technology."
                },
                {
                    question: "Where is it unsafe to use your online banking app or enter credit card information?",
                    type: "mcq",
                    answers: [
                        { text: "On your home Wi-Fi network.", correct: false, id: 5 },
                        { text: "On the 'Free_Mall_Wi-Fi' network.", correct: true, id: 6 },
                        { text: "Using your mobile data connection.", correct: false, id: 7 },
                        { text: "On a friend's secured Wi-Fi.", correct: false, id: 8 },
                    ],
                    incorrectFeedback: "Public, unsecured Wi-Fi allows criminals to easily 'listen in' on your data traffic. **Real-Life Tip:** Treat any public Wi-Fi as unsafe for sensitive activities. Use mobile data or a trusted Virtual Private Network (VPN) instead.",
                    knowledgePoint: "Knowledge Point: A Man-in-the-Middle (MITM) attack is easy on public Wi-Fi, allowing hackers to intercept passwords and data."
                },
                {
                    question: "What is the best defense against 'ransomware' (a virus that locks your files)?",
                    type: "mcq",
                    answers: [
                        { text: "Paying the ransom immediately.", correct: false, id: 9 },
                        { text: "Turning your computer off and leaving it off.", correct: false, id: 10 },
                        { text: "Having a recent backup of all your important files.", correct: true, id: 11 },
                        { text: "Changing your password.", correct: false, id: 12 },
                    ],
                    incorrectFeedback: "Since ransomware encrypts your files, the only guaranteed way to recover them without paying is a **GOOD BACKUP**. **Real-Life Tip:** Keep at least one copy of your backup disconnected from your computer/network.",
                    knowledgePoint: "Knowledge Point: The 3-2-1 backup rule suggests keeping three copies of your data, on two different media, with one copy off-site."
                },
                {
                    question: "If a pop-up asks you to install a 'missing Flash Player' update, what should you do?",
                    type: "mcq",
                    answers: [
                        { text: "Click OK to install the missing component.", correct: false, id: 13 },
                        { text: "Ignore it and navigate away from the site, as Flash is outdated and dangerous.", correct: true, id: 14 },
                        { text: "Search Google for the 'official' Flash Player website and download it from there.", correct: false, id: 15 },
                        { text: "Call a tech support line for help.", correct: false, id: 16 },
                    ],
                    incorrectFeedback: "Adobe discontinued Flash Player years ago. Any request for a Flash update is almost certainly a malicious attempt to install a virus. **Real-Life Tip:** Never trust software update requests that come from pop-ups.",
                    knowledgePoint: "Knowledge Point: Modern web browsers (Chrome, Edge, Firefox) have security features that block outdated and known risky software like Flash."
                },
                {
                    question: "What does 'HTTPS' at the start of a website address primarily indicate?",
                    type: "mcq",
                    answers: [
                        { text: "The website is very popular.", correct: false, id: 17 },
                        { text: "The website's connection is encrypted and private.", correct: true, id: 18 },
                        { text: "The website has a firewall installed.", correct: false, id: 19 },
                        { text: "The website is safe from all viruses.", correct: false, id: 20 },
                    ],
                    incorrectFeedback: "HTTPS means the data you send (like passwords) is **encrypted** between your computer and the website. It is the basic security level. **Real-Life Tip:** Always check for HTTPS and a padlock icon before logging in or making a purchase.",
                    knowledgePoint: "Knowledge Point: While HTTPS means the connection is private, it does NOT mean the company is trustworthy, so always verify the domain name too."
                },
                {
                    question: "What is 'shoulder surfing'?",
                    type: "mcq",
                    answers: [
                        { text: "A new kind of virtual reality game.", correct: false, id: 21 },
                        { text: "Someone secretly watching you enter your PIN or password.", correct: true, id: 22 },
                        { text: "Checking a hacker's profile on LinkedIn.", correct: false, id: 23 },
                        { text: "Using a VPN while on public transport.", correct: false, id: 24 },
                    ],
                    incorrectFeedback: "Shoulder surfing is a simple physical attack. People looking over your shoulder can steal login information. **Real-Life Tip:** Shield your screen and keyboard with your hand or body when entering sensitive information in public.",
                    knowledgePoint: "Knowledge Point: Cybersecurity is not just about technology; it includes physical awareness in public spaces."
                },
                {
                    question: "If you receive a text message (SMiShing) from your bank asking you to confirm your account number, what should you do?",
                    type: "mcq",
                    answers: [
                        { text: "Reply with the account number to confirm.", correct: false, id: 25 },
                        { text: "Call the official phone number listed on your bank's website or card.", correct: true, id: 26 },
                        { text: "Click the link in the text to log in.", correct: false, id: 27 },
                        { text: "Call the number that sent the text.", correct: false, id: 28 },
                    ],
                    incorrectFeedback: "Legitimate banks will never ask for sensitive data like account numbers via unsolicited text or email. **Real-Life Tip:** Always use a verified contact method, like calling the number on your bank card, to verify suspicious requests.",
                    knowledgePoint: "Knowledge Point: SMiShing (SMS Phishing) is on the rise because people often trust text messages more than emails."
                },
                {
                    question: "What should you *always* check before installing a new app on your phone?",
                    type: "mcq",
                    answers: [
                        { text: "If the app is ranked #1 in the store.", correct: false, id: 29 },
                        { text: "The permissions the app is asking for (e.g., access to your microphone or photos).", correct: true, id: 30 },
                        { text: "The total size of the app in MB.", correct: false, id: 31 },
                        { text: "If the app is free.", correct: false, id: 32 },
                    ],
                    incorrectFeedback: "An app's **PERMISSIONS** determine what data it can access. A flashlight app doesn't need access to your contacts or location. **Real-Life Tip:** Review permissions carefully and deny any that seem excessive or unnecessary.",
                    knowledgePoint: "Knowledge Point: Over-privileged applications are a major source of mobile data theft and privacy invasion."
                },
                {
                    question: "How should you safely dispose of an old laptop or smartphone?",
                    type: "mcq",
                    answers: [
                        { text: "Just delete the files and throw it in the trash.", correct: false, id: 33 },
                        { text: "Perform a factory reset and completely wipe the storage.", correct: true, id: 34 },
                        { text: "Sell it online without removing the memory card.", correct: false, id: 35 },
                        { text: "Leave all your logins signed in so the new owner can contact you.", correct: false, id: 36 },
                    ],
                    incorrectFeedback: "A simple delete doesn't remove the data. A **FACTORY RESET/WIPE** is necessary to make sure no one can recover your personal photos, files, or accounts. **Real-Life Tip:** Use a professional data destruction service for truly sensitive drives.",
                    knowledgePoint: "Knowledge Point: Deleted files can often be recovered easily with simple software tools unless the drive space is overwritten."
                },
                {
                    question: "Why should you be cautious about connecting your phone to a public USB charging station ('Juice Jacking')?",
                    type: "mcq",
                    answers: [
                        { text: "It charges your phone too slowly.", correct: false, id: 37 },
                        { text: "It may secretly steal data or load malware onto your phone.", correct: true, id: 38 },
                        { text: "It might void your phone's warranty.", correct: false, id: 39 },
                        { text: "The power surge could damage your battery.", correct: false, id: 40 },
                    ],
                    incorrectFeedback: "Public USB ports can be modified to transmit data. This is called **'JUICE JACKING'**. **Real-Life Tip:** Always use a wall socket with your own adapter, or use a 'charge-only' USB cable.",
                    knowledgePoint: "Knowledge Point: USB cables carry both power and data. A malicious charger can exploit the data lines."
                },
                
                // TRUE/FALSE (type: boolean)
                {
                    question: "True or False: It is safe to click on a link in an email as long as your antivirus software is running.",
                    type: "boolean",
                    answers: [
                        { text: "True", correct: false, id: 41 },
                        { text: "False", correct: true, id: 42 },
                    ],
                    incorrectFeedback: "FALSE. Antivirus software is helpful, but it cannot stop all phishing attacks or links to brand-new scam websites. **Real-Life Tip:** Your brain is your best security tool. Always verify the sender and link address manually.",
                    knowledgePoint: "Knowledge Point: Zero-day exploits (new, unpatched vulnerabilities) can bypass even the best antivirus programs."
                },
                {
                    question: "True or False: Using Multi-Factor Authentication (MFA) or Two-Factor Authentication (2FA) makes it almost impossible for hackers to access your account.",
                    type: "boolean",
                    answers: [
                        { text: "True", correct: true, id: 43 },
                        { text: "False", correct: false, id: 44 },
                    ],
                    incorrectFeedback: "TRUE. Even if a hacker steals your password, they need the second code from your phone to get in. This stops over 99.9% of automated attacks. **Real-Life Tip:** If a service offers MFA, always turn it on!",
                    knowledgePoint: "Knowledge Point: MFA is considered the single most effective way to prevent account takeover and identity theft."
                },
                {
                    question: "True or False: You should use the same password for accounts that aren't very important, like a forum or newsletter.",
                    type: "boolean",
                    answers: [
                        { text: "True", correct: false, id: 45 },
                        { text: "False", correct: true, id: 46 },
                    ],
                    incorrectFeedback: "FALSE. If a minor website is hacked, the criminal will use that password to try to log into your email and bank accounts. **Real-Life Tip:** Use a unique password for every single service. Use a password manager to help you remember them all.",
                    knowledgePoint: "Knowledge Point: A 'credential stuffing' attack uses stolen usernames and passwords from one breach to test against hundreds of other websites."
                },
                {
                    question: "True or False: It is safe to keep your computer's operating system (Windows, MacOS) set to automatically update.",
                    type: "boolean",
                    answers: [
                        { text: "True", correct: true, id: 47 },
                        { text: "False", correct: false, id: 48 },
                    ],
                    incorrectFeedback: "TRUE. Updates fix newly discovered security holes that hackers can exploit. Auto-updates ensure you are protected immediately. **Real-Life Tip:** Don't delay updates when prompted; security is more important than convenience.",
                    knowledgePoint: "Knowledge Point: Most successful cyberattacks exploit vulnerabilities that have already been fixed by a manufacturer but never applied by the user."
                },
                {
                    question: "True or False: A padlock icon in the browser means the website is 100% trustworthy and safe from all scams.",
                    type: "boolean",
                    answers: [
                        { text: "True", correct: false, id: 49 },
                        { text: "False", correct: true, id: 50 },
                    ],
                    incorrectFeedback: "FALSE. The padlock only means the connection is encrypted (HTTPS). Scammers often use encryption on their phishing sites to look legitimate. **Real-Life Tip:** Always check the URL in the address bar—is it spelled correctly? Is it the *real* company?",
                    knowledgePoint: "Knowledge Point: Phishing sites often replicate a login page perfectly, but the URL will always contain a subtle, malicious change."
                },

                // MULTI-SELECT (type: multi-select)
                {
                    question: "Which THREE actions help protect your social media privacy?",
                    type: "multi-select",
                    correctCount: 3,
                    answers: [
                        { text: "Setting your profile to 'Private'.", correct: true, id: 51 },
                        { text: "Accepting friend requests from everyone to be popular.", correct: false, id: 52 },
                        { text: "Turning off location tagging on your posts.", correct: true, id: 53 },
                        { text: "Regularly reviewing and removing old apps that have access to your profile data.", correct: true, id: 54 },
                    ],
                    incorrectFeedback: "To protect your privacy, you need to restrict who sees your life and what data external apps can collect. Only set your profile to **Private**, turn off **Location Tagging**, and **Review App Permissions**.",
                    knowledgePoint: "Knowledge Point: Information you share today (like your pet's name or your high school) can be used by hackers tomorrow to guess security questions."
                },
                {
                    question: "If your password is stolen (e.g., from a data leak), what TWO immediate actions should you take?",
                    type: "multi-select",
                    correctCount: 2,
                    answers: [
                        { text: "Immediately change the password on the compromised account.", correct: true, id: 55 },
                        { text: "Change the password on every other account that used the same password.", correct: true, id: 56 },
                        { text: "Send an email to the company complaining about the leak.", correct: false, id: 57 },
                        { text: "Wait a week to see if the hackers actually log in.", correct: false, id: 58 },
                    ],
                    incorrectFeedback: "A stolen password requires quick action! You must change the password on the **Compromised Account** and any **Other Accounts** using the same password to prevent a chain reaction of compromises.",
                    knowledgePoint: "Knowledge Point: The average time a hacker remains undetected in a victim's network is over 200 days. Quick response is vital."
                },
                {
                    question: "Which TWO details should you never share in response to an unsolicited (unexpected) email?",
                    type: "multi-select",
                    correctCount: 2,
                    answers: [
                        { text: "Your favorite color.", correct: false, id: 59 },
                        { text: "Your bank account PIN (Personal Identification Number).", correct: true, id: 60 },
                        { text: "Your birth date or Social Security Number.", correct: true, id: 61 },
                        { text: "Your job title.", correct: false, id: 62 },
                    ],
                    incorrectFeedback: "Never share confidential information via unexpected emails. **PINs** and **Government IDs** (like Social Security Number or national ID) are the keys to identity theft. No legitimate company asks for these via email.",
                    knowledgePoint: "Knowledge Point: Identity thieves piece together small amounts of personal data to impersonate you for loans or credit cards."
                },
                {
                    question: "Which THREE items make a password strong and effective?",
                    type: "multi-select",
                    correctCount: 3,
                    answers: [
                        { text: "Must be a common, easy-to-remember word.", correct: false, id: 63 },
                        { text: "Includes a mix of UPPERCASE and lowercase letters.", correct: true, id: 64 },
                        { text: "Includes numbers (0-9).", correct: true, id: 65 },
                        { text: "Includes symbols (@, #, !, $).", correct: true, id: 66 },
                    ],
                    incorrectFeedback: "A strong password is a mix of three things: **Uppercase/Lowercase Letters**, **Numbers**, and **Symbols**. Complexity and length are your allies against automated guessing tools.",
                    knowledgePoint: "Knowledge Point: Use a long passphrase that incorporates these elements (e.g., 'Myd0gL0v3s!B@nana$') for maximum security."
                },
                {
                    question: "What TWO things should you do before downloading a file from an unknown website?",
                    type: "multi-select",
                    correctCount: 2,
                    answers: [
                        { text: "Check user reviews and comments about the file or site.", correct: true, id: 67 },
                        { text: "Temporarily turn off your antivirus to speed up the download.", correct: false, id: 68 },
                        { text: "Scan the file with an online file scanner (like VirusTotal) if possible.", correct: true, id: 69 },
                        { text: "Trust the website if it uses a colorful logo.", correct: false, id: 70 },
                    ],
                    incorrectFeedback: "Safety first! You must **Check Reviews** to see if others had issues and **Scan the File** for malware before opening it. Never download files from sources you don't trust.",
                    knowledgePoint: "Knowledge Point: Malicious files often hide as common, useful downloads like PDF documents or software installers."
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
            const currentScoreDisplay = document.getElementById("current-score");
            const totalQuestionsDisplay = document.getElementById("total-questions");
            const finalScoreDisplay = document.getElementById("final-score");
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
                questionText.textContent = questionData.question;
                
                answerContainer.innerHTML = ''; 
                isPaused = false; // Ensure unpaused when question loads

                const isMultiSelect = questionData.type === 'multi-select';
                submitBtn.classList.toggle('hidden', !isMultiSelect);
                multiSelectPrompt.classList.toggle('hidden', !isMultiSelect);
                
                const hasBeenAnswered = questionData.isAnswered;

                // Create and attach new buttons
                questionData.answers.forEach((answer) => {
                    const button = document.createElement('button');
                    button.classList.add('answer-btn', 'bg-indigo-500', 'text-white', 'py-3', 'px-4', 'rounded-lg', 'font-medium', 'shadow-md', 'disabled:opacity-75');
                    button.textContent = answer.text;
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
                    nextQBtn.textContent = "Finish Quiz";
                    // Permanently enabled for immediate quiz completion
                    nextQBtn.disabled = false;
                    nextQBtn.classList.remove('bg-blue-600');
                    nextQBtn.classList.add('bg-green-600');
                } else {
                    nextQBtn.textContent = "Next \u2192";
                    // Permanently enabled for free navigation
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
                    showCorrectFeedback(questionData.knowledgePoint);
                } else {
                    showIncorrectFeedback(questionData.incorrectFeedback);
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
                    showCorrectFeedback(questionData.knowledgePoint);
                    selectedButton.classList.remove('bg-indigo-500');
                    selectedButton.classList.add('bg-green-600');
                } else {
                    showIncorrectFeedback(questionData.incorrectFeedback);
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

            function showCorrectFeedback(knowledgePoint) {
                knowledgeText.textContent = knowledgePoint;
                knowledgePopup.style.display = "block";
                setTimeout(() => knowledgePopup.classList.add('popup-show'), 50);
            }

            function showIncorrectFeedback(incorrectFeedback) {
                hazardExplanation.innerHTML = incorrectFeedback;
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
                document.getElementById("question-section").classList.add('hidden'); 
                
                if (score > 10) {
                    finalMessage.textContent = "EXCELLENT CYBER AWARENESS!";
                    finalMessage.classList.remove('text-blue-400', 'text-red-400');
                    finalMessage.classList.add('text-green-400');
                    scoreAdvice.textContent = "Your high score shows you are highly vigilant and ready to handle most common digital threats. Great job staying secure!";
                } else {
                    finalMessage.textContent = "AWARENESS BOOST NEEDED";
                    finalMessage.classList.remove('text-blue-400', 'text-green-400');
                    finalMessage.classList.add('text-red-400');
                    scoreAdvice.textContent = "Your score indicates some key concepts need review. To be safe, focus on the real-life tips provided in the quiz and read the resources below to understand more about cyber attacks.";
                }
            }


            // --- Event Listeners ---
            themeToggleBtn.addEventListener("click", toggleTheme);
            startQuizBtn.addEventListener("click", startGame);
            viewBlogsBtn.addEventListener("click", () => showView('blogs'));
            closeQuizBtn.addEventListener("click", () => showView('home'));
            backToMenuBlogsBtn.addEventListener("click", () => showView('home'));
            restartButton.addEventListener("click", startGame); // restart btn on score screen

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
            
            // Initial call to set the theme and view
            toggleTheme(); // Set default (Dark) theme on load
            showView('home');

        })();
   