var questions_list = [
  {
    num: 1,
    image: "../images/test_1.jpg",
    question: "발열증상이 있습니까?",
  },
  {
    num: 2,
    image: "../images/test_2.jpg",
    question: "기침 증상이 있습니까?",
  },
  {
    num: 3,
    image: "../images/test_3.jpg",
    question: "쉽게 피로감을 느낍니까?",
  },
  {
    num: 4,
    image: "../images/test_4.jpg",
    question: "미각 또는 후각의 기능에 문제가 있습니까?",
  },
  {
    num: 5,
    image: "../images/test_5.jpg",
    question: "호흡 곤란 또는 숨 가쁨이 있습니까?",
  },
  {
    num: 6,
    image: "../images/test_6.jpg",
    question: "언어 또는 운동 장애, 착란 증상이 있습니까?",
  },
  {
    num: 7,
    image: "../images/test_7.jpg",
    question: "가슴 통증이 있습니까?",
  },
];
var index = 0;
var result = 0;
var que = document.getElementById("que");
function print(i) {
  if (i == 7) {
    if (result >= 4) {
      que.innerHTML = "<br /><br />코로나감염 위험성이 있습니다.";
    } else {
      que.innerHTML =
        "<br /><br />코로나감염 위험성이 적습니다. 그래도 불안하면 병원에 가보세요.";
    }
  }
  index = i;

  num = questions_list[i].num;
  image = questions_list[i].image;
  question = questions_list[i].question;
  // text = ``;
  // que.innerHTML = text + num + question;

  que.innerHTML = `
  
  ${num}번. 
  ${question}
  <br/><br />
  <img src=${image} style="width:200px;height:200px;"/>
  <br /><br />
  <button onclick="yes()">Yes</button>
  <button onclick="no()">No</button>
  `;
}

function yes() {
  print(index + 1);
  result += 1;
}

function no() {
  print(index + 1);
}
