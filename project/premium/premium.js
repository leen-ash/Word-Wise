
var d = new Date();
document.getElementById("date").innerHTML =
  d.getDate() +
  "-" +
  (d.getMonth() + 1) +
  "-" +
  d.getFullYear();
  
  document.getElementById("time").innerHTML =(d.getHours() % 12 || 12) +
  ":" +
  d.getMinutes() ;
function isValidEmail(email) {
  if (!email.includes("@") || !email) {
    return false;
  } else {
    return true;
  }
}

function isValidCardNumber(card) {
  if (isNaN(card)) return false;
  else {
    if (card.length !== 16) return false;
    else return true;
  }
}
function wrongEmail() {
  let email = document.getElementById("Email");
  let emailValue = email.value;

  if (!isValidEmail(emailValue)) {
    email.classList.remove("valid");
    email.classList.add("invalid");
    document.getElementById("emailerror").textContent = "Invalid Email!";
    return false;
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    document.getElementById("emailerror").textContent = "";
    return true;
  }
}

function wrongNum() {
  let card = document.getElementById("cardnum");
  let cardVal = card.value;
  if (isNaN(cardVal)) {
    card.classList.add("invalid");
    card.classList.remove("valid");
    document.getElementById("carderror").textContent =
      "Please Enter a Valid Number!";

    return false;
  } else {
    if (cardVal.length !== 16) {
      card.classList.add("invalid");
      card.classList.remove("valid");
      document.getElementById("carderror").textContent = "Invalid Card Number";
    } else {
      card.classList.remove("invalid");
      card.classList.add("valid");
      document.getElementById("carderror").textContent = "";
    }
  }
}

function caclcFees() {
  let language = parseFloat(document.getElementById("language").value);
  let plan = document.getElementsByName("plan");
  let planNum = 1;
  for (var i = 0; i < plan.length; i++) {
    if (plan[i].checked) {
      planNum = parseInt(plan[i].value);
    }
  }
  let check = document.getElementsByName("check");
  let extras = 0;
  for (var i = 0; i < check.length; i++) {
    if (check[i].checked) {
      extras += parseFloat(check[i].value);
    }
  }
  let total = language * planNum + extras;
  console.log("total", total);
  document.getElementById("total-fee").value = "Total= " + total + "$";
}

function submitForm() {
  let email = document.getElementById("Email");
  let card = document.getElementById("cardnum");
  if (!isValidEmail(email.value) || !isValidCardNumber(card.value)) {
    window.scrollTo(0, 0);
    document.getElementById("emailerror").textContent =
      "This field is required!";
    email.classList.add("invalid");
    document.getElementById("carderror").textContent =
      "This field is required!";
    card.classList.add("invalid");
  } else {
    email.value = null;
    card.value = null;
    email.classList.remove("valid");
    card.classList.remove("valid");
    window.scrollTo(0, 0);
    let toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap =
    bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
    alert("Submitted Succefully");
  }
}
