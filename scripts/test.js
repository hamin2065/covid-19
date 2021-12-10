var questions_list = [
  {
    num: 1,
    image: "d",
    question: "발열증상이 있습니까?",
  },
  {
    num: 2,
    image: "d",
    question: "기침 증상이 있습니까?",
  },
  {
    num: 3,
    image: "",
    question: "쉽게 피로감을 느낍니까?",
  },
  {
    num: 4,
    image: "",
    question: "미각 또는 후각의 기능에 문제가 있습니까?",
  },
  {
    num: 5,
    image: "",
    question: "호흡 곤란 또는 숨 가쁨이 있습니까?",
  },
  {
    num: 6,
    image: "",
    question: "언어 또는 운동 장애, 착란 증상이 있습니까?",
  },
  {
    num: 7,
    image: "",
    question: "가슴 통증이 있습니까?",
  },
];
var i = 0;

var que = document.getElementById("que");
function print(i) {
  num = questions_list[i].num;
  image = questions_list[i].image;
  question = questions_list[i].question;
  text = `<button onclick="yes()">Yes</button><br>
  <button onclick="no()">No</button>`;
  que.innerHTML = text + num + question;
}