const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers"); // Ensure this line is present
const endScreen = document.getElementById("endScreen");
const playerName = document.getElementById("playerName");
const highScoreHTML = document.getElementById("highScoreHTML");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const prizeContainer = document.getElementById("prizeContainer");
const prizeToggle = document.getElementById("prizeToggle");
const timeElement = document.getElementById("time");
const prizeList = document.getElementById("prizeList");
const finalScoreHMTL = document.getElementById("finalScore");
const playAgain = document.getElementById("playAgain");

const questions = {
  question1: {
    question: "Kokia yra Lietuvos sostinė?",
    answers: [
      { text: "Kaunas", isCorrect: false },
      { text: "Vilnius", isCorrect: true },
      { text: "Klaipėda", isCorrect: false },
      { text: "Šiauliai", isCorrect: false },
    ],
    prize: "100 €",
  },
  question2: {
    question: "Koks gyvūnas yra Lietuvos nacionalinis simbolis?",
    answers: [
      { text: "Briedis", isCorrect: false },
      { text: "Stumbras", isCorrect: true },
      { text: "Vilkas", isCorrect: false },
      { text: "Meška", isCorrect: false },
    ],
    prize: "200 €",
  },
  question3: {
    question: "Kokia yra didžiausia Lietuvos upė?",
    answers: [
      { text: "Nemunas", isCorrect: true },
      { text: "Neris", isCorrect: false },
      { text: "Siesartis", isCorrect: false },
      { text: "Šventoji", isCorrect: false },
    ],
    prize: "300 €",
  },
  question4: {
    question: "Kokia kalba kalba lietuviai?",
    answers: [
      { text: "Lenkų", isCorrect: false },
      { text: "Rusų", isCorrect: false },
      { text: "Lietuvių", isCorrect: true },
      { text: "Vokiečių", isCorrect: false },
    ],
    prize: "500 €",
  },
  question5: {
    question: "Kas yra Lietuvos prezidentas?",
    answers: [
      { text: "Gitanas Nausėda", isCorrect: true },
      { text: "Saulius Skvernelis", isCorrect: false },
      { text: "Ingrida Šimonytė", isCorrect: false },
      { text: "Gabrielius Landsbergis", isCorrect: false },
    ],
    prize: "1.000 €",
  },
  question6: {
    question: "Koks yra didžiausias Lietuvos ežeras?",
    answers: [
      { text: "Drūkšių ežeras", isCorrect: false },
      { text: "Galvės ežeras", isCorrect: false },
      { text: "Platelių ežeras", isCorrect: false },
      { text: "Drūkšių ežeras", isCorrect: true },
    ],
    prize: "2.000 €",
  },
  question7: {
    question: "Kas yra garsiausias Lietuvos rašytojas?",
    answers: [
      { text: "Kristijonas Donelaitis", isCorrect: false },
      { text: "Žemaitė", isCorrect: false },
      { text: "Justinas Marcinkevičius", isCorrect: false },
      { text: "Maironis", isCorrect: true },
    ],
    prize: "4.000 €",
  },
  question8: {
    question: "Kuriame mieste yra įsikūręs Kryžiuočių pilis?",
    answers: [
      { text: "Trakuose", isCorrect: false },
      { text: "Kaune", isCorrect: true },
      { text: "Vilniuje", isCorrect: false },
      { text: "Klaipėdoje", isCorrect: false },
    ],
    prize: "8.000 €",
  },
  question9: {
    question: "Kas yra pirmasis Lietuvos krikšto metai?",
    answers: [
      { text: "1251 m.", isCorrect: false },
      { text: "1387 m.", isCorrect: true },
      { text: "1795 m.", isCorrect: false },
      { text: "1918 m.", isCorrect: false },
    ],
    prize: "16.000 €",
  },
  question10: {
    question: "Kokia yra Lietuvos valiuta?",
    answers: [
      { text: "Litas", isCorrect: false },
      { text: "Euras", isCorrect: true },
      { text: "Doleris", isCorrect: false },
      { text: "Rublis", isCorrect: false },
    ],
    prize: "32.000 €",
  },
  question11: {
    question: "Kas yra garsiausias Lietuvos dailininkas?",
    answers: [
      { text: "Mikalojus Konstantinas Čiurlionis", isCorrect: true },
      { text: "Antanas Žmuidzinavičius", isCorrect: false },
      { text: "Viktoras Vizgirda", isCorrect: false },
      { text: "Justinas Vienožinskis", isCorrect: false },
    ],
    prize: "64.000 €",
  },
  question12: {
    question: "Kuri yra didžiausia Lietuvos sala?",
    answers: [
      { text: "Rusnė", isCorrect: false },
      { text: "Kuršių Nerija", isCorrect: true },
      { text: "Žuvinto sala", isCorrect: false },
      { text: "Kernavės kalno sala", isCorrect: false },
    ],
    prize: "125.000 €",
  },
  question13: {
    question: "Koks yra aukščiausias Lietuvos kalnas?",
    answers: [
      { text: "Aukštojas", isCorrect: false },
      { text: "Šatrijos kalnas", isCorrect: false },
      { text: "Kruonio kalnas", isCorrect: false },
      { text: "Aukštasis kalnas", isCorrect: true },
    ],
    prize: "250.000 €",
  },
  question14: {
    question: "Kuri yra seniausia Lietuvos sostinė?",
    answers: [
      { text: "Kernavė", isCorrect: true },
      { text: "Trakai", isCorrect: false },
      { text: "Vilnius", isCorrect: false },
      { text: "Kaunas", isCorrect: false },
    ],
    prize: "500.000 €",
  },
  question15: {
    question: "Kas sukūrė Lietuvos valstybinius simbolius?",
    answers: [
      { text: "Vincas Kudirka", isCorrect: false },
      { text: "Jonas Basanavičius", isCorrect: true },
      { text: "Antanas Smetona", isCorrect: false },
      { text: "Mykolas Biržiška", isCorrect: false },
    ],
    prize: "1 Milijonas €",
  },
};

const questions2 = {
  question1: {
    question: "Kuri šalis yra žinoma kaip `Rytų Žibintas`?",
    answers: [
      { text: "Kinija", isCorrect: false },
      { text: "Japonija", isCorrect: true },
      { text: "Pietų Korėja", isCorrect: false },
      { text: "Tailandas", isCorrect: false },
    ],
    prize: "100 €",
  },
  question2: {
    question: "Koks yra aukščiausias žaidimas kėgliuose?",
    answers: [
      { text: "250", isCorrect: false },
      { text: "300", isCorrect: true },
      { text: "200", isCorrect: false },
      { text: "150", isCorrect: false },
    ],
    prize: "200 €",
  },
  question3: {
    question: "Kokia yra pagrindinė Rusijos religija?",
    answers: [
      { text: "Islamas", isCorrect: false },
      { text: "Judaizmas", isCorrect: false },
      { text: "Stačiatikybė", isCorrect: true },
      { text: "Budizmas", isCorrect: false },
    ],
    prize: "300 €",
  },
  question4: {
    question:
      "Kuri yra garsi graikų mitologijos būtybė su žmogaus kūnu ir arklio galva?",
    answers: [
      { text: "Kentauras", isCorrect: true },
      { text: "Minotauras", isCorrect: false },
      { text: "Pegasas", isCorrect: false },
      { text: "Sfingsas", isCorrect: false },
    ],
    prize: "500 €",
  },
  question5: {
    question: "Kuris rašytojas parašė kūrinį `Idiotas`?",
    answers: [
      { text: "Fiodoras Dostojevskis", isCorrect: true },
      { text: "Levas Tolstojus", isCorrect: false },
      { text: "Antanas Čechovas", isCorrect: false },
      { text: "Maksimas Gorkis", isCorrect: false },
    ],
    prize: "1.000 €",
  },
  question6: {
    question: "Kokia yra trumpiausia Žemės ašies sukimosi trukmė?",
    answers: [
      { text: "24 valandos", isCorrect: true },
      { text: "12 valandų", isCorrect: false },
      { text: "18 valandų", isCorrect: false },
      { text: "6 valandos", isCorrect: false },
    ],
    prize: "2.000 €",
  },
  question7: {
    question: "Kurios šalies vėliava yra žalia, balta ir raudona?",
    answers: [
      { text: "Italijos", isCorrect: true },
      { text: "Prancūzijos", isCorrect: false },
      { text: "Vokietijos", isCorrect: false },
      { text: "Ispanijos", isCorrect: false },
    ],
    prize: "4.000 €",
  },
  question8: {
    question: "Kuri planetos turi daugiausia palydovų?",
    answers: [
      { text: "Žemė", isCorrect: false },
      { text: "Marsas", isCorrect: false },
      { text: "Jupiteris", isCorrect: true },
      { text: "Saturnas", isCorrect: false },
    ],
    prize: "8.000 €",
  },
  question9: {
    question: "Kuris cheminis elementas žinomas kaip `Deimantų šaltinis`?",
    answers: [
      { text: "Anglis", isCorrect: true },
      { text: "Deguonis", isCorrect: false },
      { text: "Azotas", isCorrect: false },
      { text: "Siera", isCorrect: false },
    ],
    prize: "16.000 €",
  },
  question10: {
    question: "Kuris šalies pavadinimas reiškia `Auksiniai smėlynai`?",
    answers: [
      { text: "Saudo Arabija", isCorrect: false },
      { text: "Jungtiniai Arabų Emyratai", isCorrect: false },
      { text: "Katara", isCorrect: true },
      { text: "Kuveitas", isCorrect: false },
    ],
    prize: "32.000 €",
  },
  question11: {
    question: "Kuris mėnuo yra pavadintas pagal Romos dievą?",
    answers: [
      { text: "Sausis", isCorrect: false },
      { text: "Vasaris", isCorrect: false },
      { text: "Kovas", isCorrect: true },
      { text: "Balandis", isCorrect: false },
    ],
    prize: "64.000 €",
  },
  question12: {
    question: "Kuri bokso ringo forma yra legali?",
    answers: [
      { text: "Apskritimas", isCorrect: false },
      { text: "Kvadratas", isCorrect: false },
      { text: "Trikampis", isCorrect: false },
      { text: "Keturkampis", isCorrect: true },
    ],
    prize: "125.000 €",
  },
  question13: {
    question:
      "Kuris Graikijos miestas buvo senovės olimpinių žaidynių šeimininkas?",
    answers: [
      { text: "Atėnai", isCorrect: false },
      { text: "Sparta", isCorrect: false },
      { text: "Olimija", isCorrect: true },
      { text: "Teba", isCorrect: false },
    ],
    prize: "250.000 €",
  },
  question14: {
    question: "Kuri yra didžiausia žinduolių rūšis?",
    answers: [
      { text: "Mėlynasis banginys", isCorrect: true },
      { text: "Raganosis banginys", isCorrect: false },
      { text: "Žaliasis banginys", isCorrect: false },
      { text: "Pilkasis banginys", isCorrect: false },
    ],
    prize: "500.000 €",
  },
  question15: {
    question: "Kurio meno kūrinio nutapymas užtruko ilgiausiai?",
    answers: [
      { text: "Meninos", isCorrect: false },
      { text: "Monos Lizos", isCorrect: false },
      { text: "Paskutinės vakarienės", isCorrect: true },
      { text: "Nakties žiūrovų", isCorrect: false },
    ],
    prize: "1 Milijonas €",
  },
};

const questions3 = {
  question1: {
    question: "Kuri yra Žemės didžiausia dykuma?",
    answers: [
      { text: "Sacharos dykuma", isCorrect: false },
      { text: "Antarktidos dykuma", isCorrect: false },
      { text: "Atacamos dykuma", isCorrect: false },
      { text: "Arabijos dykuma", isCorrect: true },
    ],
    prize: "100 €",
  },
  question2: {
    question: "Kuri raidė graikų abėcėlėje reiškia 0?",
    answers: [
      { text: "Alfa", isCorrect: false },
      { text: "Beta", isCorrect: false },
      { text: "Omega", isCorrect: false },
      { text: "Niu", isCorrect: true },
    ],
    prize: "200 €",
  },
  question3: {
    question: "Kuris posakis reiškia `akis už akį`?",
    answers: [
      { text: "Dedens ketvirtį", isCorrect: false },
      { text: "Lex talionis", isCorrect: true },
      { text: "Caveat emptor", isCorrect: false },
      { text: "Persona non grata", isCorrect: false },
    ],
    prize: "300 €",
  },
  question4: {
    question: "Kuri yra didžiausia sala Viduržemio jūroje?",
    answers: [
      { text: "Sardinija", isCorrect: false },
      { text: "Sicilija", isCorrect: true },
      { text: "Kreta", isCorrect: false },
      { text: "Kipras", isCorrect: false },
    ],
    prize: "500 €",
  },
  question5: {
    question:
      "Kokia gėrimo rūšis gaminama distiliuojant vynmedžių fermentuotą sulčių?",
    answers: [
      { text: "Brendis", isCorrect: true },
      { text: "Romas", isCorrect: false },
      { text: "Džinas", isCorrect: false },
      { text: "Tekila", isCorrect: false },
    ],
    prize: "1.000 €",
  },
  question6: {
    question: "Kuri srovė jėgainėje verčia turbiną?",
    answers: [
      { text: "Žarna", isCorrect: false },
      { text: "Liepsna", isCorrect: false },
      { text: "Oras", isCorrect: false },
      { text: "Vanduo", isCorrect: true },
    ],
    prize: "2.000 €",
  },
  question7: {
    question: "Kas sukūrė pasaulinį žiniatinklį (World Wide Web)?",
    answers: [
      { text: "Steve Jobs", isCorrect: false },
      { text: "Bill Gates", isCorrect: false },
      { text: "Tim Berners-Lee", isCorrect: true },
      { text: "Elonas Muskas", isCorrect: false },
    ],
    prize: "4.000 €",
  },
  question8: {
    question: "Kuris raštingas išrado pirmąją spausdinimo mašiną?",
    answers: [
      { text: "Johannesas Gutenbergas", isCorrect: true },
      { text: "Leonardo da Vinci", isCorrect: false },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Isaacas Newtonas", isCorrect: false },
    ],
    prize: "8.000 €",
  },
  question9: {
    question: "Kokia yra druskos cheminė formulė?",
    answers: [
      { text: "NaCl", isCorrect: true },
      { text: "H2O", isCorrect: false },
      { text: "CO2", isCorrect: false },
      { text: "CH4", isCorrect: false },
    ],
    prize: "16.000 €",
  },
  question10: {
    question: "Koks metalo žibalo rūšį laikoma `Auksu iš Šiaurės`?",
    answers: [
      { text: "Platina", isCorrect: false },
      { text: "Sidabras", isCorrect: false },
      { text: "Varis", isCorrect: false },
      { text: "Aliuminis", isCorrect: true },
    ],
    prize: "32.000 €",
  },
  question11: {
    question: "Kuriame Europos mieste yra daugiausia žmonių?",
    answers: [
      { text: "Stambulas", isCorrect: true },
      { text: "Maskva", isCorrect: false },
      { text: "Berlynas", isCorrect: false },
      { text: "Paryžius", isCorrect: false },
    ],
    prize: "64.000 €",
  },
  question12: {
    question: "Kuris cheminis elementas turi ženklelį Fe?",
    answers: [
      { text: "Cinkas", isCorrect: false },
      { text: "Varis", isCorrect: false },
      { text: "Geležis", isCorrect: true },
      { text: "Sidabras", isCorrect: false },
    ],
    prize: "125.000 €",
  },
  question13: {
    question: "Kuri yra didžiausia Europos upė?",
    answers: [
      { text: "Dauguvos upė", isCorrect: false },
      { text: "Reino upė", isCorrect: false },
      { text: "Dunojaus upė", isCorrect: false },
      { text: "Volgos upė", isCorrect: true },
    ],
    prize: "250.000 €",
  },
  question14: {
    question: "Kurioje šalyje gimė filosofas Sokratas?",
    answers: [
      { text: "Atėnuose", isCorrect: false },
      { text: "Graikijoje", isCorrect: true },
      { text: "Italijoje", isCorrect: false },
      { text: "Egipte", isCorrect: false },
    ],
    prize: "500.000 €",
  },
  question15: {
    question:
      "Kuris rašytojas sukūrė veikėjus Šerloką Holmsą ir daktarą Vatsoną?",
    answers: [
      { text: "Markas Tvenas", isCorrect: false },
      { text: "Arthuras Conanas Doyle'is", isCorrect: true },
      { text: "Džekas Londons", isCorrect: false },
      { text: "Ernestas Hemingvėjus", isCorrect: false },
    ],
    prize: "1 Milijonas €",
  },
};
let currentQuestions;
let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 30;
let finalScore = 0;
let currentPlayer = "";
let highScore = localStorage.getItem("highScore");
let highScoreUser = localStorage.getItem("highScoreUser");

//load sounds effect
const bgMusic = new Audio();
bgMusic.src = "./assets/bgMusic.mp3";
bgMusic.loop = true;
bgMusic.volume = 0.3;

const correctSound = new Audio();
correctSound.src = "./assets/rightAnswer.mp3";

highScoreHTML.innerHTML = `Best player so far is ${highScoreUser} with ${highScore} €`;

function playPartialSound(audio, startTime, duration) {
  audio.currentTime = startTime;
  audio.play();

  setTimeout(() => {
    audio.pause();
  }, duration * 1000); // Convert duration to milliseconds
}

const wrongSound = new Audio();
wrongSound.src = "./assets/wrongAnswer.mp3";

const startSound = new Audio();
startSound.src = "./assets/startSound.mp3";

function getRandomQuestionSet() {
  const questionSets = [questions, questions2, questions3];
  return questionSets[Math.floor(Math.random() * questionSets.length)];
}

prizeToggle.addEventListener("click", function () {
  prizeContainer.classList.toggle("visible");
});

startBtn.addEventListener("click", function () {
  startSound.play();
  bgMusic.play();
  currentPlayer = playerName.value;
  startScreen.classList.add("d-none");
  quizContainer.classList.remove("d-none");
  currentQuestions = getRandomQuestionSet();
  startTimer();
  renderQuestion();
});

playAgain.addEventListener("click", function () {
  endScreen.classList.add("d-none");
  quizContainer.classList.remove("d-none");
  currentQuestionIndex = 0;
  timeLeft = 30;
  startTimer();
  renderQuestion();
  bgMusic.play();
  startSound.play();
});

function renderQuestion() {
  resetState();
  const currentQuestion =
    currentQuestions[`question${currentQuestionIndex + 1}`];
  questionElement.querySelector("h2").textContent = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer", "btn");
    answerButton.textContent = answer.text;
    answerButton.addEventListener("click", () =>
      selectAnswer(answer.isCorrect, answerButton)
    );
    answersElement.appendChild(answerButton);
  });
}

function resetState() {
  clearStatusClass();
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

function selectAnswer(isCorrect, answerButton) {
  if (isCorrect) {
    playPartialSound(correctSound, 0, 3);
    answerButton.classList.add("correct");
    clearInterval(timerInterval);
    setTimeout(() => {
      answerButton.classList.remove("correct");
      currentQuestionIndex++;
      finalScore += parseInt(
        questions[`question${currentQuestionIndex}`].prize.replace(/\D/g, "")
      );
      if (currentQuestionIndex < Object.keys(questions).length) {
        renderQuestion();
        updatePrizeLevel();
        startTimer(); // Start the timer for the next question
      } else {
        endGame();
      }
    }, 1000);
  } else {
    localStorage.setItem("highScore", finalScore);
    localStorage.setItem("highScoreUser", currentPlayer);
    wrongSound.play();
    bgMusic.pause();
    answerButton.classList.add("wrong");
    setTimeout(() => {
      endGame();
    }, 1000);
  }
}

function updatePrizeLevel() {
  const activeItem = prizeList.querySelector(".prize-item.active");
  if (activeItem) {
    activeItem.classList.remove("active");
    const nextItem = prizeList.querySelector(
      `.prize-item:nth-child(${15 - currentQuestionIndex})`
    );
    if (nextItem) {
      nextItem.classList.add("active");
    }
  }
}

function startTimer() {
  timeLeft = 30;
  timeElement.textContent = timeLeft;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timeElement.textContent = timeLeft;
      updateCircle(timeLeft);
    } else {
      clearInterval(timerInterval);
      alert("Time is up!");
      endScreen.classList.remove("d-none");
      quizContainer.classList.add("d-none");
    }
  }, 1000);
}

function updateCircle(time) {
  const percentage = (time / 30) * 100;
  document.querySelector(
    ".circle"
  ).style.background = `conic-gradient(#FFD700 ${percentage}%, #000 ${percentage}% 100%)`;
}

function endGame() {
  if (finalScore === 0) {
    finalScoreHMTL.textContent = `You are very bad ${currentPlayer} , try again`;
  } else {
    finalScoreHMTL.textContent = `Your final score is $${finalScore} ${currentPlayer}!`;
  }

  clearInterval(timerInterval);
  endScreen.classList.remove("d-none");
  quizContainer.classList.add("d-none");
}

function clearStatusClass() {
  document.body.classList.remove("correct");
  document.body.classList.remove("wrong");
}
