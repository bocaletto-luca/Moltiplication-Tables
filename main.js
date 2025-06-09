"use strict";
    // TAB NAVIGATION FUNCTION
    function openTab(evt, tabName) {
      const tabcontents = document.getElementsByClassName("tabcontent");
      for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
        tabcontents[i].classList.remove("active");
      }
      const tablinks = document.getElementsByClassName("tablinks");
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
      }
      document.getElementById(tabName).style.display = "block";
      document.getElementById(tabName).classList.add("active");
      evt.currentTarget.classList.add("active");
    }
    document.getElementById("defaultTab").click();

    /* ----- TABLE TAB FUNCTIONS ----- */
    function showTable() {
      const num = parseInt(document.getElementById("tableNumber").value);
      const resultDiv = document.getElementById("tableResult");
      if (isNaN(num) || num < 1) {
        resultDiv.innerHTML = "<p>Please enter a valid positive integer.</p>";
        return;
      }
      let html = `<h3>Multiplication Table for ${num}</h3><table style="margin: 0 auto; border-collapse: collapse;" border="1"><tr>`;
      // Header row: blank cell + 1 to 10
      html += `<th>*</th>`;
      for (let i = 1; i <= 10; i++) {
        html += `<th>${i}</th>`;
      }
      html += "</tr>";
      // Data rows: row header and products
      for (let i = 1; i <= 10; i++) {
        html += "<tr>";
        html += `<th>${i}</th>`;
        for (let j = 1; j <= 10; j++) {
          html += `<td>${num * i * j}</td>`;
        }
        html += "</tr>";
      }
      html += "</table>";
      resultDiv.innerHTML = html;
    }

    /* ----- QUIZ TAB FUNCTIONS ----- */
    let currentX, currentY, currentAnswer;
    function newQuizQuestion() {
      const focus = document.getElementById("quizFocus").value;
      if (focus) {
        currentX = parseInt(focus);
      } else {
        currentX = Math.floor(Math.random() * 10) + 1;
      }
      currentY = Math.floor(Math.random() * 10) + 1;
      currentAnswer = currentX * currentY;
      const questionDiv = document.getElementById("quizQuestion");
      questionDiv.innerHTML = `<p>What is ${currentX} × ${currentY}?</p>`;
      document.getElementById("quizFeedback").innerHTML = "";
      document.getElementById("quizAnswer").value = "";
    }

    function checkQuizAnswer() {
      const userAns = parseInt(document.getElementById("quizAnswer").value);
      const feedbackDiv = document.getElementById("quizFeedback");
      if (isNaN(userAns)) {
        feedbackDiv.innerHTML = "<p>Please enter your answer.</p>";
        return;
      }
      if (userAns === currentAnswer) {
        feedbackDiv.innerHTML = "<p style='color: green;'>Correct!</p>";
      } else {
        feedbackDiv.innerHTML = `<p style='color: red;'>Incorrect! The correct answer is ${currentAnswer}.</p>`;
      }
    }

    /* ----- TIPS TAB: Content is static ----- */
    // (No additional JS is needed here unless you want interactivity.)
