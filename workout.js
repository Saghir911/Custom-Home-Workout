let container = document.querySelector(".container");
let img = document.querySelector(".exercise-img img");
let timer = document.querySelector(".timer");
let exerciseName = document.querySelector(".Exercise");
let startSound = document.querySelector("#start");
let finishSound = document.querySelector("#finish");

let currentExercise = 0;

let Exercises = {
  "knee up": {
    name: "Knee Up",
    img: "./Exercise Image/knee up.webp",
    time: 30,
  },
  "Jumping Jacks": {
    name: "Jumping Jacks",
    img: "./Exercise Image/Jumping Jacks.webp",
    time: 30,
  },
  "Squats": {
    name: "Squats",
    img: "./Exercise Image/Squats.webp",
    time: 60,
  },
  "Pushups": {
    name: "Pushups",
    img: "./Exercise Image/pushups.webp",
    time: 60,
  },
  "Lunges": {
    name: "Lunges",
    img: "./Exercise Image/Lunges.webp",
    time: 60,
  },
  "Wide Arm Pushups": {
    name: "Wide Arm Pushups",
    img: "./Exercise Image/Wide arm pushups.webp",
    time: 30,
  },
  "Decline Pushups ": {
    name: "Decline Pushups",
    img: "./Exercise Image/Decline Pushups.webp",
    time: 30,
  },
  "Standing calf": {
    name: "Standing calf",
    img: "./Exercise Image/Standing calf.webp",
    time: 30,
  },
  "calf Squats": {
    name: "calf Squats",
    img: "./Exercise Image/Calf Squats.webp",
    time: 30,
  },
  "Lateral Pushups": {
    name: "Side Way Pushups",
    img: "./Exercise Image/Lateral Pushups.webp",
    time: 60,
  },
  Crunches: {
    name: "Crunches",
    img: "./Exercise Image/Crunches.webp",
    time: 60,
  },
  "Leg raises": {
    name: "Leg raises",
    img: "./Exercise Image/Leg raises.webp",
    time: 30,
  },
  Plank: {
    name: "Plank",
    img: "./Exercise Image/Plank.webp",
    time: 30,
  },
  "Leg Stretch": {
    name: "Leg Streches",
    img: "./Exercise Image/leg stretch.webp",
    time: 30,
  },
  "Cobra Stretch": {
    name: "Cobra Stretch",
    img: "./Exercise Image/Cobra Stretch.webp",
    time: 30,
  },
  "Chest Strech": {
    name: "Chest stretch",
    img: "./Exercise Image/Chest stretch.webp",
    time: 30,
  },
};
let timerInterval;

function updateExercise() {
  const exercise = Object.values(Exercises)[currentExercise];

  img.src = exercise.img;
  exerciseName.innerHTML = exercise.name;
  timer.innerHTML = exercise.time;
}

function startTimer() {
  let time = Object.values(Exercises)[currentExercise].time;
  timerInterval = setInterval(() => {
    time--;
    timer.innerHTML = time;
    if (time <= 0) {
      clearInterval(timerInterval);
      currentExercise++;
      finishSound.play();
      if (currentExercise >= Object.keys(Exercises).length) {
        currentExercise = 0;
      }
      updateExercise();
    }
  }, 1000);
}

updateExercise();

const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
  startSound.play();
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  startTimer();
});
