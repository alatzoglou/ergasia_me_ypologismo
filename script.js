var prospatheies = 3;
function on(x) {
  x.style.background = "red";
}
function lost(x) {
  x.style.background = "lightgrey";
}
function fnCalculateAge(){

    var userDateinput = document.getElementById("birthDate").value;  
    console.log(userDateinput);
    
    // convert user input value into date object
    var birthDate = new Date(userDateinput);
     console.log(" birthDate"+ birthDate);
    
    // get difference from current date;
    var difference=Date.now() - birthDate.getTime(); 
         
    var  ageDate = new Date(difference); 
    var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
    alert(calculatedAge);
    var hlikia = document.getElementById("calculatedAge");
}

function deixe() {
  var password = document.getElementById("password");
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }

  togglePassword.classList.toggle("bi-eye");
}


function check() {

  var metrhths = 0;
  var onoma = document.getElementById("onoma");
  var password = document.getElementById("password");
  var password2 = document.getElementById("password2");
  var eponymo = document.getElementById("eponymo");
  var onoma_xrhsth = document.getElementById("onoma_xrhsth");
  var hlikia = document.getElementById("calculatedAge");

  if (onoma.value.length <= 2) {
    window.alert("Το όνομα πρέπει να ξεπερνάει τους 2  χαρακτήρες");
    onoma.value = "";
  } else {
    metrhths = metrhths + 1;
  }

  if (eponymo.value.length <= 3) {
    window.alert("Το επώνυμο πρέπει να ξεπερνάει τους 3  χαρακτήρες");
    eponymo.value = "";
  } else {
    metrhths = metrhths + 1;
  }
  if (isNaN(hlikia.value) || !Number.isInteger(+hlikia.value)) {
    console.log(Number.isInteger(+hlikia.value));
    window.alert("Η ηλικία πρέπει να ειναι ακεραιος");
    hlikia.value = "";
  } else if (hlikia.value < 1 || hlikia.value > 120) {
    window.alert("Η ηλικία πρέπει να ειναι ανάμεσα στο 1 και το 120");
    hlikia.value = "";
  } else {
    metrhths = metrhths + 1;
  }
  if (onoma_xrhsth.value.length <= 2) {
    window.alert("Το όνομα χρήστη πρέπει να ξεπερνάει τους 2 χαρακτήρες");
    onoma_xrhsth.value = "";
  } else {
    metrhths = metrhths + 1;
  }

  if (password.value.length <= 5) {
    window.alert("Τ0 password πρέπει να ξεπερνάει τους 5  χαρακτήρες");
    password.value = "";
    password2.value = "";
    return;
  } else {
    metrhths = metrhths + 1;
  }

  if (password.value != password2.value) {
    window.alert("Τα password δεν συμφωνούν");
    password.value = "";
    password2.value = "";
  } else {
    metrhths = metrhths + 1;
  }

  if (metrhths == 6 && prospatheies != 0) {
    window.alert("Επιτυχής εισαγωγή");

    console.log(metrhths);
    onoma.value = "";
    eponymo.value = "";
    hlikia.value = "";
    onoma_xrhsth.value = "";
    password.value = "";
    password2.value = "";
    setTimeout(function () {
      document.location.href = "https://aueb.gr";
    }, 1000);
  } else {
    prospatheies--;
    if (prospatheies == 0) {
      window.alert("Δεν έχεις αλλες προσπάθειες");
      document.close();
    } else {
      onoma.value = "";
      eponymo.value = "";
      hlikia.value = "";
      onoma_xrhsth.value = "";
      password.value = "";
      password2.value = "";

      alert("Σου απομένουν " + prospatheies + " ακόμα προσπάθειες!");
    }
  }
}

const btn = document.getElementById("button"); //dhmiourgei mia metavliti kai bazei mesa to koumpi pou exei id="button"
btn.addEventListener("click", check); // kathe fora pou ginete "click" sto koumpi trexei h function check()

const togglePassword = document.getElementById("toggle-password"); //dhmiourgei mia metavliti kai bazei mesa to element pou exei id="toggle-password"
togglePassword.addEventListener("click", deixe); // kathe fora pou ginete "click" sto element trexei h function deixe()