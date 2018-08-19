function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoDU2n0z6cIBTH67UueHGRd_8jjs5sePA",
    authDomain: "color-classification-e8c37.firebaseapp.com",
    databaseURL: "https://color-classification-e8c37.firebaseio.com",
    projectId: "color-classification-e8c37",
    storageBucket: "color-classification-e8c37.appspot.com",
    messagingSenderId: "367685496456"
  };
  firebase.initializeApp(config);
  console.log(firebase);

  createCanvas(400, 400);
  let r = floor(random(256));
  let g = floor(random(256));
  let b = floor(random(256));

  background(r, g, b);

  let buttons = [];
  buttons.push(createButton('red-ish'));
  buttons.push(createButton('blue-ish'));
  buttons.push(createButton('green-ish'));

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].mousePressed(sendData);
  }


}

function sendData() {
  // send this data to something?
  // send the data to firebase!
  console.log(this.html());
}
