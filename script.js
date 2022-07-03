    //acceptable conditions
const conditions = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  } //behavior with conditions * desired length
  const getKey = [
    function upperCase() {
      return conditions.upperCase[Math.floor(Math.random() * conditions.upperCase.length)];
    },
    function lowerCase() {
      return conditions.lowerCase[Math.floor(Math.random() * conditions.lowerCase.length)];
    },
    function number() {
      return conditions.number[Math.floor(Math.random() *conditions.number.length)];
    },
    function symbol() {
      return conditions.symbol[Math.floor(Math.random() * conditions.symbol.length)];
    }
  ];
  //meet conditions if checked and alert if not
  function createPassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Please check at least one box!");
      return;
    } //generate code and display
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }
