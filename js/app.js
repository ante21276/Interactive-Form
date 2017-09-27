let fieldsets = document.querySelectorAll("fieldset");
/***************************
Add autofocus to name input
****************************/
let name_input = document.querySelector("#name");
name_input.setAttribute("autofocus", "");
/**********************************
Show textare when job role is OTHER
***********************************/
let jobs_selection = document.querySelector("#title");
let other_textarea = document.querySelector("#other-title"); //Add other-title id to textarea
other_textarea.placeholder = "Your Job Role";
other_textarea.style.display = "none";

function jobFunc () {
  if(jobs_selection.value === "other") {
    other_textarea.style.display = "block";
  } else {
    other_textarea.style.display = "none";
  }
}
/**********************************
Change color menu
***********************************/
let design_selection = document.querySelector("#design");
let colors = document.querySelector("#color");
let color_div = document.querySelector("#colors-js-puns");
if(colors[0]) {
  color_div.style.display = "none";
}
function colorChange() {
  for(let i = 0; i < colors.length; i++) {
    if(colors[0]) {
      color_div.style.display = "none";
    }
      if(design_selection.value === "js puns") {
        color_div.style.display = "block";
        if (i > 2 ) {
          colors[i].style.display = "none";
        } else if(i < 3) {
            colors[i].style.display = "block";
            colors.value = colors.options[0].value;
        }
      } else if (design_selection.value === "heart js") {
          color_div.style.display = "block";
          if (i < 3){
            colors.value = colors.options[3].value;
           colors[i].style.display = "none";
         } else if (i >= 3) {
           colors[i].style.display = "block";
         }
    }
  }
}
/**************************************************
Checkbox - only one activity which start at the same time can be checked
***************************************************/
let activities_fieldset = document.querySelector(".activities");
let paragraph = document.createElement("p");
activities_fieldset.appendChild(paragraph);
let activities = document.querySelector(".activities").children;
let sum1 = false,sum2 = false,sum3 = false,sum4 = false,sum5 = false,sum6 = false,sum7 = false,sum = 0;
let checked = false;

paragraph.innerHTML = "Total Amount: " + sum + " $";

activities_fieldset.addEventListener("change", function() {  //start listener
  for(let i = 1; i < activities.length - 1; i++) {
    if (i % 2 === 0) {
       if (activities[2].firstChild.checked === true) {
          activities[2].firstChild.disabled = false;
          activities[4].firstChild.disabled = true;
      } else if(activities[4].firstChild.checked === true) {
          activities[2].firstChild.disabled = true;
          activities[4].firstChild.disabled = false;
      } else {
        activities[2].firstChild.disabled = false;
        activities[4].firstChild.disabled = false;
      }
    } else if (i % 2 !== 0) {
      if (activities[3].firstChild.checked === true) {
         activities[3].firstChild.disabled = false;
         activities[5].firstChild.disabled = true;
     } else if(activities[5].firstChild.checked === true) {
         activities[3].firstChild.disabled = true;
         activities[5].firstChild.disabled = false;
     } else {
       activities[3].firstChild.disabled = false;
       activities[5].firstChild.disabled = false;
     }
    }
 }
 /***************
   TOTAL COUNT
 ****************/
   if(activities[1].firstChild.checked === true && sum1 === false) {sum1 = true;sum += 200;}
    else if (activities[1].firstChild.checked === false && sum1) {sum1 = false;sum -= 200;}
   if(activities[2].firstChild.checked === true && sum2 === false) {sum2 = true;sum += 100;}
    else if (activities[2].firstChild.checked === false && sum2) {sum2 = false;sum -= 100;}
   if(activities[3].firstChild.checked === true && sum3 === false) {sum3 = true;sum += 100;}
    else if (activities[3].firstChild.checked === false && sum3) {sum3 = false;sum -= 100;}
   if(activities[4].firstChild.checked === true && sum4 === false) {sum4 = true;sum += 100;}
    else if (activities[4].firstChild.checked === false && sum4) {sum4 = false;sum -= 100;}
   if(activities[5].firstChild.checked === true && sum5 === false) {sum5 = true;sum += 100;}
    else if (activities[5].firstChild.checked === false && sum5) {sum5 = false;sum -= 100;}
   if(activities[6].firstChild.checked === true && sum6 === false) {sum6 = true;sum += 100;}
    else if (activities[6].firstChild.checked === false && sum6) {sum6 = false;sum -= 100;}
   if(activities[7].firstChild.checked === true && sum7 === false) {sum7 = true;sum += 100;}
    else if (activities[7].firstChild.checked === false && sum7) {sum7 = false;sum -= 100;}

    paragraph.innerHTML = "Total Amount: " + sum + " $";
});// end listeneer

/******
Payment
*******/
let payment = document.querySelector("#payment");
if (payment.value === "select_method") {
  fieldsets[3].children[4].style.display = "none";
  fieldsets[3].children[5].style.display = "none";
}
payment.addEventListener("change", function() { //start listener
  if(payment.value === "credit card") {
      fieldsets[3].children[3].style.display = "block";
      fieldsets[3].children[4].style.display = "none";
      fieldsets[3].children[5].style.display = "none";
  } else if (payment.value === "paypal") {
      fieldsets[3].children[3].style.display = "none";
      fieldsets[3].children[5].style.display = "none";
      fieldsets[3].children[4].style.display = "block";
  } else if(payment.value === "bitcoin") {
      fieldsets[3].children[3].style.display = "none";
      fieldsets[3].children[5].style.display = "block";
      fieldsets[3].children[4].style.display = "none";
  }
});//end listener
/****************
Form Validation
*****************/
let submit = document.querySelector("button");
let regex_mail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; //Using regular expresion for mail validation
let regex_cc = /\d{12,15}/; //Using regular expresion for cc number validation
let regex_zip = /\d{5}/;
let regex_cvv = /\d{3}/;
var newNode = document.createElement("span");
var parentDiv = document.querySelector("#cc-num").parentNode;
let cc_num = document.querySelector("#cc-num");

submit.addEventListener("click", function(e) {  //start listener
  let cvv = document.querySelector("#cvv");
  let zip = document.querySelector("#zip");
  let mail = document.querySelector("#mail").value;
  if (name_input.value.length === 0 || regex_mail.test(mail) === false || regex_cc.test(cc_num.value) === false
      || regex_zip.test(zip.value) === false || regex_cvv.test(cvv.value) === false) { // Check for name, mail, cc number, zip code and cvv
    e.preventDefault();
    fieldsets[0].children[1].style.color = "red";
    name_input.style.borderColor = "red";
    fieldsets[0].children[3].style.color = "red";
    fieldsets[0].children[4].style.borderColor = "red";
    fieldsets[2].children[0].style.color = "red";
    fieldsets[3].children[3].children[0].children[0].style.color = "red";
    fieldsets[3].children[3].children[0].children[1].style.borderColor = "red";
    fieldsets[3].children[3].children[1].children[0].style.color = "red";
    fieldsets[3].children[3].children[1].children[1].style.borderColor = "red";
    fieldsets[3].children[3].children[2].children[0].style.color = "red";  //CVV label color
    fieldsets[3].children[3].children[2].children[1].style.borderColor = "red"; //CVV input border color
  }
  if(sum1 === false && sum2 === false && sum3 === false && sum4 === false && sum5 === false && sum6 === false && sum7 === false) {
    e.preventDefault(); // Check if any activity is checked
  }
  if(name_input.value.length === 0) {alert("You need enter your name!")} // Alert message if name field is blank
  if(mail.length === 0) {alert("You need enter email!")} // Alert message if email field is blank
  if(cc_num.value.length < 13 || cc_num.value.length > 16) {alert("Please enter credit card number that is 13-16 digits long.")} // Alert message if card num field have too many or few digits

}); //end listener
cc_num.addEventListener("keypress", function() {
  if(cc_num.value.length < 12 || cc_num.value.length > 15 || regex_cc.test(cc_num.value) === false) {
    newNode.innerHTML = "Card number should be 13-16 digits long, you typed " + (cc_num.value.length + 1);
    parentDiv.style.position = "relative";
    newNode.style.position = "absolute";
    newNode.style.top = "-30%";
    newNode.style.left = "0";
    newNode.style.color = "red";
    newNode.style.background = "white";
    newNode.style.display = "block";
    newNode.style.padding = "5px";
    parentDiv.insertBefore(newNode, cc_num);
    parentDiv.insertBefore(newNode, newNode.nextSibling);
  } else if(cc_num.value.length > 11 && cc_num.value.length < 16){
      newNode.style.display = "none";
  }
});
