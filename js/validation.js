// On click of log-in button this function is called
function checkUser() {

  // Value of userEmail & userPassword is stored
  const useremail = document.getElementById("userEmail").value;
  const userpassword = document.getElementById("userPassword").value;

  // All the elements with "incorrect" & "correct" classes are stored
  var correctElements = document.getElementsByClassName("correct");
  var incorrectElements = document.getElementsByClassName("incorrect");

  // Checking the values with Strictly Equality operator
  if (useremail === "admin@admin.com" && userpassword === "123456") {

    // Reset modal state function called, to display : none;
    resetModalState(correctElements, incorrectElements);

    // for loop to display all elements when the condition is true
    for (var i = 0; i < correctElements.length; i++) {
      correctElements[i].style.display = "block";
    }

    // Reseting the content of form to none
    resetForm();

  } else {
    // Reset modal state again
    resetModalState(correctElements, incorrectElements);

    // for loop to display all elements when the condition is true
    for (var i = 0; i < incorrectElements.length; i++) {
      incorrectElements[i].style.display = "block";
    }

    // Reseting the content of form to none
    resetForm();
  }
}

// Hidding the elements with "correct" & "incorrect" classes
function resetModalState(correctElements, incorrectElements) {
  for (var i = 0; i < correctElements.length; i++) {
    correctElements[i].style.display = "none";
  }

  for (var i = 0; i < incorrectElements.length; i++) {
    incorrectElements[i].style.display = "none";
  }
}

// Reseting the content of the form to empty
function resetForm(){
  document.getElementById("userEmail").value="";
  document.getElementById("userPassword").value="";
}
