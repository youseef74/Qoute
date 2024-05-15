var arrQoute = [
  {qoute: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde"},
  {qoute: "“So many books, so little time.”", author: "― Frank Zappa"},
  {qoute: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero"},
  {qoute: "“Sometimes you have to accept you can't win all the time.”", author: "― Lionel Messi"},
  {qoute: "“If everyone is against me, everyone will lose”", author: "― Yousef Kandil"}
];

var lastQoute = -1;

function loopQoute() {
  var random;
  do {
      random = Math.floor(Math.random() * arrQoute.length);
  } while (random == lastQoute); 

  document.getElementById("qoute").innerHTML = arrQoute[random].qoute;
  document.getElementById("author").innerHTML = arrQoute[random].author;

  lastQoute = random;
}
