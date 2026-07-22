/* =========================================================
   BRAINBUZZ - INTERACTIVE QUIZ APPLICATION
========================================================= */


/* =========================================================
   QUESTION DATABASE
========================================================= */

const questionBank = {

    general: [

        {
            question: "What is the capital of India?",
            options: [
                "Mumbai",
                "New Delhi",
                "Kolkata",
                "Chennai"
            ],
            answer: 1
        },

        {
            question: "Who wrote the Indian national anthem?",
            options: [
                "Rabindranath Tagore",
                "Bankim Chandra Chattopadhyay",
                "Sarojini Naidu",
                "Subhas Chandra Bose"
            ],
            answer: 0
        },

        {
            question: "How many continents are there in the world?",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 2
        },

        {
            question: "Which is the largest ocean on Earth?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean"
            ],
            answer: 3
        },

        {
            question: "What is the currency of Japan?",
            options: [
                "Won",
                "Yen",
                "Dollar",
                "Peso"
            ],
            answer: 1
        },

        {
            question: "Which country is famous for the Eiffel Tower?",
            options: [
                "Italy",
                "Spain",
                "France",
                "Germany"
            ],
            answer: 2
        },

        {
            question: "How many days are there in a leap year?",
            options: [
                "364",
                "365",
                "366",
                "367"
            ],
            answer: 2
        },

        {
            question: "Which animal is known as the King of the Jungle?",
            options: [
                "Tiger",
                "Lion",
                "Elephant",
                "Leopard"
            ],
            answer: 1
        },

        {
            question: "Which festival is known as the Festival of Lights in India?",
            options: [
                "Holi",
                "Diwali",
                "Onam",
                "Baisakhi"
            ],
            answer: 1
        },

        {
            question: "Which is the largest planet in our solar system?",
            options: [
                "Earth",
                "Saturn",
                "Jupiter",
                "Mars"
            ],
            answer: 2
        }

    ],


    science: [

        {
            question: "What is the chemical symbol for water?",
            options: [
                "CO2",
                "H2O",
                "O2",
                "NaCl"
            ],
            answer: 1
        },

        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Venus",
                "Mars",
                "Mercury",
                "Jupiter"
            ],
            answer: 1
        },

        {
            question: "What gas do humans need to breathe?",
            options: [
                "Carbon Dioxide",
                "Hydrogen",
                "Oxygen",
                "Nitrogen"
            ],
            answer: 2
        },

        {
            question: "Which organ pumps blood through the human body?",
            options: [
                "Brain",
                "Lungs",
                "Liver",
                "Heart"
            ],
            answer: 3
        },

        {
            question: "What is the process by which plants make food?",
            options: [
                "Respiration",
                "Photosynthesis",
                "Digestion",
                "Transpiration"
            ],
            answer: 1
        },

        {
            question: "What is the boiling point of water at sea level?",
            options: [
                "50°C",
                "75°C",
                "100°C",
                "150°C"
            ],
            answer: 2
        },

        {
            question: "What force pulls objects toward Earth?",
            options: [
                "Magnetism",
                "Gravity",
                "Friction",
                "Electricity"
            ],
            answer: 1
        },

        {
            question: "Which part of a plant absorbs water from the soil?",
            options: [
                "Flower",
                "Leaves",
                "Stem",
                "Roots"
            ],
            answer: 3
        },

        {
            question: "What is the closest star to Earth?",
            options: [
                "Sirius",
                "The Sun",
                "Polaris",
                "Alpha Centauri"
            ],
            answer: 1
        },

        {
            question: "Which vitamin is mainly produced when skin is exposed to sunlight?",
            options: [
                "Vitamin A",
                "Vitamin B",
                "Vitamin C",
                "Vitamin D"
            ],
            answer: 3
        }

    ],


    technology: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Transfer Machine Language",
                "Hyper Tool Multi Language",
                "Home Text Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which language is mainly used to style web pages?",
            options: [
                "Python",
                "CSS",
                "SQL",
                "Java"
            ],
            answer: 1
        },

        {
            question: "Which programming language is commonly used to add interactivity to websites?",
            options: [
                "JavaScript",
                "C",
                "SQL",
                "XML"
            ],
            answer: 0
        },

        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],
            answer: 0
        },

        {
            question: "Which of these is a web browser?",
            options: [
                "Google Chrome",
                "Microsoft Word",
                "Adobe Photoshop",
                "Windows Explorer"
            ],
            answer: 0
        },

        {
            question: "What does URL stand for?",
            options: [
                "Uniform Resource Locator",
                "Universal Reading Link",
                "User Resource Language",
                "Unified Routing Location"
            ],
            answer: 0
        },

        {
            question: "Which technology is used to structure a webpage?",
            options: [
                "HTML",
                "CSS",
                "Photoshop",
                "Excel"
            ],
            answer: 0
        },

        {
            question: "What does RAM stand for?",
            options: [
                "Read Access Memory",
                "Random Access Memory",
                "Rapid Application Machine",
                "Remote Access Module"
            ],
            answer: 1
        },

        {
            question: "Which company developed the Android operating system?",
            options: [
                "Apple",
                "Microsoft",
                "Google",
                "IBM"
            ],
            answer: 2
        },

        {
            question: "Which of these is a database language?",
            options: [
                "HTML",
                "CSS",
                "SQL",
                "SVG"
            ],
            answer: 2
        }

    ],


    geography: [

        {
            question: "Which is the largest continent by area?",
            options: [
                "Africa",
                "Asia",
                "Europe",
                "North America"
            ],
            answer: 1
        },

        {
            question: "Which is the largest country in the world by area?",
            options: [
                "Canada",
                "China",
                "Russia",
                "United States"
            ],
            answer: 2
        },

        {
            question: "Mount Everest is part of which mountain range?",
            options: [
                "Andes",
                "Alps",
                "Himalayas",
                "Rockies"
            ],
            answer: 2
        },

        {
            question: "Which ocean lies to the east of India?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: 1
        },

        {
            question: "What is the capital of Odisha?",
            options: [
                "Cuttack",
                "Puri",
                "Bhubaneswar",
                "Rourkela"
            ],
            answer: 2
        },

        {
            question: "Which continent is the Sahara Desert located in?",
            options: [
                "Asia",
                "Africa",
                "Australia",
                "South America"
            ],
            answer: 1
        },

        {
            question: "Which country has the city of Tokyo?",
            options: [
                "China",
                "South Korea",
                "Thailand",
                "Japan"
            ],
            answer: 3
        },

        {
            question: "Which imaginary line divides Earth into Northern and Southern Hemispheres?",
            options: [
                "Prime Meridian",
                "Equator",
                "Tropic of Cancer",
                "International Date Line"
            ],
            answer: 1
        },

        {
            question: "Which is the smallest continent?",
            options: [
                "Europe",
                "Australia",
                "Antarctica",
                "South America"
            ],
            answer: 1
        },

        {
            question: "Which river flows through Egypt?",
            options: [
                "Amazon",
                "Nile",
                "Ganga",
                "Yangtze"
            ],
            answer: 1
        }

    ]

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const reviewScreen =
    document.getElementById("reviewScreen");


const categoryCards =
    document.querySelectorAll(".category-card");

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");

const startQuizBtn =
    document.getElementById("startQuizBtn");


const quizCategory =
    document.getElementById("quizCategory");

const timer =
    document.getElementById("timer");

const timerBox =
    document.getElementById("timerBox");

const questionNumber =
    document.getElementById("questionNumber");

const totalQuestions =
    document.getElementById("totalQuestions");

const liveScore =
    document.getElementById("liveScore");

const progressBar =
    document.getElementById("progressBar");

const difficultyBadge =
    document.getElementById("difficultyBadge");

const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answersContainer");

const feedbackBox =
    document.getElementById("feedbackBox");

const feedbackIcon =
    document.getElementById("feedbackIcon");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const nextBtn =
    document.getElementById("nextBtn");

const quitBtn =
    document.getElementById("quitBtn");


const finalPercentage =
    document.getElementById("finalPercentage");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const finalScore =
    document.getElementById("finalScore");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const playAgainBtn =
    document.getElementById("playAgainBtn");

const reviewBtn =
    document.getElementById("reviewBtn");

const reviewDoneBtn =
    document.getElementById("reviewDoneBtn");

const reviewList =
    document.getElementById("reviewList");

const highScore =
    document.getElementById("highScore");


const themeBtn =
    document.getElementById("themeBtn");

const themeIcon =
    document.getElementById("themeIcon");

const logoBtn =
    document.getElementById("logoBtn");


const toast =
    document.getElementById("toast");

const toastTitle =
    document.getElementById("toastTitle");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================================
   STATE
========================================================= */

let selectedCategory = "general";

let selectedDifficulty = "medium";

let questions = [];

let currentQuestionIndex = 0;

let score = 0;

let correctCount = 0;

let userAnswers = [];

let timerInterval = null;

let timeLeft = 20;

let answered = false;


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.getElementById(
            "currentYear"
        ).textContent =
            new Date().getFullYear();

        initializeTheme();

        updateHighScore();

    }
);


/* =========================================================
   CATEGORY SELECTION
========================================================= */

categoryCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                categoryCards.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );

                card.classList.add(
                    "active"
                );

                selectedCategory =
                    card.dataset.category;

            }
        );

    }
);


/* =========================================================
   DIFFICULTY
========================================================= */

difficultyButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                difficultyButtons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );

                button.classList.add(
                    "active"
                );

                selectedDifficulty =
                    button.dataset.level;

            }
        );

    }
);


/* =========================================================
   START QUIZ
========================================================= */

startQuizBtn.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    questions =
        shuffleArray(
            [...questionBank[selectedCategory]]
        );

    currentQuestionIndex = 0;

    score = 0;

    correctCount = 0;

    userAnswers = [];

    liveScore.textContent = 0;

    totalQuestions.textContent =
        questions.length;

    quizCategory.textContent =
        getCategoryName(
            selectedCategory
        );

    difficultyBadge.textContent =
        selectedDifficulty.toUpperCase();

    showScreen(quizScreen);

    loadQuestion();

    showToast(
        "Quiz Started!",
        "Good luck with your BrainBuzz challenge."
    );

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    clearInterval(
        timerInterval
    );

    answered = false;

    feedbackBox.classList.add(
        "hidden"
    );

    feedbackBox.classList.remove(
        "wrong"
    );

    nextBtn.classList.add(
        "hidden"
    );

    answersContainer.innerHTML = "";

    const question =
        questions[
            currentQuestionIndex
        ];

    questionNumber.textContent =
        currentQuestionIndex + 1;

    questionText.textContent =
        question.question;

    progressBar.style.width =
        `${
            (
                (
                    currentQuestionIndex + 1
                ) /
                questions.length
            ) * 100
        }%`;

    const letters =
        ["A", "B", "C", "D"];

    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer-btn";

            button.innerHTML = `

                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <span class="answer-text">
                    ${option}
                </span>

            `;

            button.addEventListener(
                "click",
                () =>
                    selectAnswer(
                        index,
                        button
                    )
            );

            answersContainer.appendChild(
                button
            );

        }
    );

    startTimer();

}


/* =========================================================
   TIMER
========================================================= */

function getTimeLimit() {

    if (
        selectedDifficulty === "easy"
    ) {

        return 30;

    }

    if (
        selectedDifficulty === "hard"
    ) {

        return 15;

    }

    return 20;

}


function startTimer() {

    timeLeft =
        getTimeLimit();

    timer.textContent =
        timeLeft;

    timerBox.classList.remove(
        "warning"
    );

    timerInterval =
        setInterval(
            () => {

                timeLeft--;

                timer.textContent =
                    timeLeft;

                if (
                    timeLeft <= 5
                ) {

                    timerBox.classList.add(
                        "warning"
                    );

                }

                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    handleTimeout();

                }

            },
            1000
        );

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {

        return;

    }

    answered = true;

    clearInterval(
        timerInterval
    );

    const question =
        questions[
            currentQuestionIndex
        ];

    const correctIndex =
        question.answer;

    const answerButtons =
        document.querySelectorAll(
            ".answer-btn"
        );

    answerButtons.forEach(
        button =>
            button.disabled = true
    );

    answerButtons[
        correctIndex
    ].classList.add(
        "correct"
    );


    const isCorrect =
        selectedIndex ===
        correctIndex;


    if (isCorrect) {

        selectedButton.classList.add(
            "correct"
        );

        correctCount++;

        const points =
            calculatePoints();

        score += points;

        feedbackBox.classList.remove(
            "wrong"
        );

        feedbackIcon.innerHTML =
            `<i class="fa-solid fa-check"></i>`;

        feedbackTitle.textContent =
            "Correct!";

        feedbackText.textContent =
            `Excellent! You earned ${points} points.`;

    }
    else {

        selectedButton.classList.add(
            "wrong"
        );

        feedbackBox.classList.add(
            "wrong"
        );

        feedbackIcon.innerHTML =
            `<i class="fa-solid fa-xmark"></i>`;

        feedbackTitle.textContent =
            "Incorrect";

        feedbackText.textContent =
            `Correct answer: ${
                question.options[
                    correctIndex
                ]
            }`;

    }


    userAnswers.push({

        question:
            question.question,

        options:
            question.options,

        selectedIndex,

        correctIndex,

        isCorrect

    });


    liveScore.textContent =
        score;

    feedbackBox.classList.remove(
        "hidden"
    );

    nextBtn.classList.remove(
        "hidden"
    );


    if (
        currentQuestionIndex ===
        questions.length - 1
    ) {

        nextBtn.innerHTML = `

            View Results

            <i class="fa-solid fa-trophy"></i>

        `;

    }
    else {

        nextBtn.innerHTML = `

            Next Question

            <i class="fa-solid fa-arrow-right"></i>

        `;

    }

}


/* =========================================================
   TIMEOUT
========================================================= */

function handleTimeout() {

    if (answered) {

        return;

    }

    answered = true;

    const question =
        questions[
            currentQuestionIndex
        ];

    const correctIndex =
        question.answer;

    const answerButtons =
        document.querySelectorAll(
            ".answer-btn"
        );

    answerButtons.forEach(
        button =>
            button.disabled = true
    );

    answerButtons[
        correctIndex
    ].classList.add(
        "correct"
    );

    feedbackBox.classList.add(
        "wrong"
    );

    feedbackIcon.innerHTML =
        `<i class="fa-solid fa-clock"></i>`;

    feedbackTitle.textContent =
        "Time's Up!";

    feedbackText.textContent =
        `Correct answer: ${
            question.options[
                correctIndex
            ]
        }`;

    feedbackBox.classList.remove(
        "hidden"
    );

    userAnswers.push({

        question:
            question.question,

        options:
            question.options,

        selectedIndex:
            -1,

        correctIndex,

        isCorrect:
            false

    });

    nextBtn.classList.remove(
        "hidden"
    );

}


/* =========================================================
   POINTS
========================================================= */

function calculatePoints() {

    let basePoints = 100;

    if (
        selectedDifficulty === "easy"
    ) {

        basePoints = 80;

    }

    if (
        selectedDifficulty === "hard"
    ) {

        basePoints = 120;

    }

    const timeBonus =
        Math.max(
            0,
            timeLeft * 2
        );

    return basePoints +
        timeBonus;

}


/* =========================================================
   NEXT
========================================================= */

nextBtn.addEventListener(
    "click",
    () => {

        currentQuestionIndex++;

        if (
            currentQuestionIndex <
            questions.length
        ) {

            loadQuestion();

        }
        else {

            showResults();

        }

    }
);


/* =========================================================
   RESULTS
========================================================= */

function showResults() {

    clearInterval(
        timerInterval
    );

    const percentage =
        Math.round(
            (
                correctCount /
                questions.length
            ) * 100
        );

    finalPercentage.textContent =
        `${percentage}%`;

    correctAnswers.textContent =
        correctCount;

    wrongAnswers.textContent =
        questions.length -
        correctCount;

    finalScore.textContent =
        score;


    const scoreCircle =
        document.querySelector(
            ".score-circle"
        );

    scoreCircle.style.background =
        `conic-gradient(
            var(--primary) ${percentage}%,
            var(--border) 0
        )`;


    if (percentage >= 80) {

        resultTitle.textContent =
            "Excellent Work!";

        resultMessage.textContent =
            "You really know your stuff. Outstanding performance!";

    }
    else if (
        percentage >= 60
    ) {

        resultTitle.textContent =
            "Great Job!";

        resultMessage.textContent =
            "A strong performance. Keep learning and improving!";

    }
    else if (
        percentage >= 40
    ) {

        resultTitle.textContent =
            "Good Attempt!";

        resultMessage.textContent =
            "You're making progress. Try again and improve your score!";

    }
    else {

        resultTitle.textContent =
            "Keep Learning!";

        resultMessage.textContent =
            "Every attempt helps you learn. Give it another try!";

    }


    saveHighScore();

    showScreen(
        resultScreen
    );

}


/* =========================================================
   HIGH SCORE
========================================================= */

function saveHighScore() {

    const saved =
        Number(
            localStorage.getItem(
                "brainbuzz-high-score"
            )
        ) || 0;

    if (score > saved) {

        localStorage.setItem(
            "brainbuzz-high-score",
            score
        );

        showToast(
            "New High Score!",
            `Amazing! You scored ${score} points.`
        );

    }

    updateHighScore();

}


function updateHighScore() {

    highScore.textContent =
        localStorage.getItem(
            "brainbuzz-high-score"
        ) || 0;

}


/* =========================================================
   REVIEW
========================================================= */

reviewBtn.addEventListener(
    "click",
    () => {

        renderReview();

        showScreen(
            reviewScreen
        );

    }
);


function renderReview() {

    reviewList.innerHTML = "";

    userAnswers.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                `review-card ${
                    item.isCorrect
                        ? "correct-review"
                        : "wrong-review"
                }`;

            const userAnswer =
                item.selectedIndex === -1
                    ? "Not Answered"
                    : item.options[
                        item.selectedIndex
                    ];

            card.innerHTML = `

                <div class="review-number">
                    QUESTION ${index + 1}
                </div>

                <h3>
                    ${item.question}
                </h3>

                <p class="review-answer">

                    Your Answer:

                    <strong>
                        ${userAnswer}
                    </strong>

                </p>

                <p class="review-answer">

                    Correct Answer:

                    <strong>
                        ${
                            item.options[
                                item.correctIndex
                            ]
                        }
                    </strong>

                </p>

            `;

            reviewList.appendChild(
                card
            );

        }
    );

}


reviewDoneBtn.addEventListener(
    "click",
    () => {

        showScreen(
            resultScreen
        );

    }
);


/* =========================================================
   PLAY AGAIN / QUIT
========================================================= */

playAgainBtn.addEventListener(
    "click",
    goHome
);


quitBtn.addEventListener(
    "click",
    () => {

        clearInterval(
            timerInterval
        );

        if (
            confirm(
                "Are you sure you want to quit this quiz?"
            )
        ) {

            goHome();

        }
        else {

            startTimer();

        }

    }
);


logoBtn.addEventListener(
    "click",
    event => {

        event.preventDefault();

        clearInterval(
            timerInterval
        );

        goHome();

    }
);


function goHome() {

    clearInterval(
        timerInterval
    );

    showScreen(
        homeScreen
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SCREEN CONTROL
========================================================= */

function showScreen(
    activeScreen
) {

    [
        homeScreen,
        quizScreen,
        resultScreen,
        reviewScreen
    ]
    .forEach(
        screen =>
            screen.classList.add(
                "hidden"
            )
    );

    activeScreen.classList.remove(
        "hidden"
    );

}


/* =========================================================
   THEME
========================================================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const dark =
            document.body.classList.contains(
                "dark"
            );

        localStorage.setItem(
            "brainbuzz-theme",
            dark
                ? "dark"
                : "light"
        );

        updateThemeIcon();

    }
);


function initializeTheme() {

    const saved =
        localStorage.getItem(
            "brainbuzz-theme"
        );

    if (saved === "dark") {

        document.body.classList.add(
            "dark"
        );

    }

    updateThemeIcon();

}


function updateThemeIcon() {

    const dark =
        document.body.classList.contains(
            "dark"
        );

    themeIcon.className =
        dark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

}


/* =========================================================
   HELPERS
========================================================= */

function getCategoryName(
    category
) {

    const names = {

        general:
            "General Knowledge",

        science:
            "Science",

        technology:
            "Technology",

        geography:
            "Geography"

    };

    return names[category];

}


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
        ] = [
            array[j],
            array[i]
        ];

    }

    return array;

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(
    title,
    message
) {

    clearTimeout(
        toastTimeout
    );

    toastTitle.textContent =
        title;

    toastMessage.textContent =
        message;

    toast.classList.add(
        "show"
    );

    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}
