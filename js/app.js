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
title.addEventListener("change", function() {
   if(jobs_selection.value === "other") {
     other_textarea.style.display = "block";
   } else {
     other_textarea.style.display = "none";
   }
 });
/**********************************
Change color menu
***********************************/
let design_selection = document.querySelector("#design");
let colors = document.querySelector("#color");
let color_div = document.querySelector("#colors-js-puns");

color_div.hidden = true;
design_selection.addEventListener("change", function() {
  for(let i = 0; i < colors.length; i++)
    if(design_selection.value === "js puns") {
      color_div.hidden = false;
      if(i > 2){ colors[i].disabled = true;
      }else {colors[i].disabled = false;}
    } else if(design_selection.value === "heart js") {
        color_div.hidden = false;
        if(i < 3){ colors[i].disabled = true
        }else{colors[i].disabled = false;}
    } else {
        color_div.hidden = true;
    }
  });
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
let regex_mail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/; //Using regular expresion for mail validation
let regex_cc = /\d{12,15}/; //Using regular expresion for cc number validation
let regex_zip = /\d{5}/;
let regex_cvv = /\d{3}/;
let new_cc_span = document.createElement("span");
let new_zip_span = document.createElement("span");
let new_cvv_span = document.createElement("span");
let new_mail_span = document.createElement("span");
let cc_input = document.querySelector("#cc-num").parentNode;
let zip_input = document.querySelector("#zip").parentNode;
let zip = document.querySelector("#zip");
let cc_num = document.querySelector("#cc-num");
let cvv = document.querySelector("#cvv");
let cvv_input = document.querySelector("#cvv").parentNode;
let mail = document.querySelector("#mail");
submit.addEventListener("click", function(e) {  //start listener
  if (name_input.value.length === 0) {
    e.preventDefault();
    name_input.style.borderColor = "#cc0000";
    fieldsets[0].children[1].style.color = "#cc0000";
    alert("You need enter your name!")
  }
  if (regex_mail.test(mail.value) === false) {
    e.preventDefault();
    fieldsets[0].children[3].style.color = "#cc0000";
    fieldsets[0].children[4].style.borderColor = "#cc0000";
    alert("You need enter email!");
  }
  if(sum1 === false && sum2 === false && sum3 === false && sum4 === false && sum5 === false && sum6 === false && sum7 === false) {
     e.preventDefault(); // Check if any activity is checked
     fieldsets[2].children[0].style.color = "#cc0000";
  }
  if ((payment.value === "select_method" || payment.value === "credit card") && regex_cc.test(cc_num.value) === false) {
    e.preventDefault()
    fieldsets[3].children[3].children[0].children[0].style.color = "#cc0000";
    fieldsets[3].children[3].children[0].children[1].style.borderColor = "#cc0000";
    alert("Please enter credit card number that is 13-16 digits long.") // Alert message if card num field have too many or few digits
  }
  if ((payment.value === "select_method" || payment.value === "credit card") && regex_zip.test(zip.value) === false) {
    e.preventDefault()
    fieldsets[3].children[3].children[1].children[0].style.color = "#cc0000";
    fieldsets[3].children[3].children[1].children[1].style.borderColor = "#cc0000";
    alert("Please enter ZIP code") // Alert message if card num field have too many or few digits
  }
  if ((payment.value === "select_method" || payment.value === "credit card") && regex_cvv.test(cvv.value) === false) {
    e.preventDefault()
    fieldsets[3].children[3].children[2].children[0].style.color = "#cc0000";  //CVV label color
    fieldsets[3].children[3].children[2].children[1].style.borderColor = "#cc0000"; //CVV input border color
    alert("Please enter CVV number") // Alert message if card num field have too many or few digits
  }
}); //end listener

function cc_error_message(parent, referenceNode, cc, span, message, top, bottom) {
  span.innerHTML = message + referenceNode.value.length;
  parent.style.position = "relative";
  span.style.position = "absolute";
  span.style.top = top;//-5%
  span.style.bottom = bottom;
  span.style.left = "0";
  span.style.color = "#cc0000";
  span.style.fontSize = "12px";
  span.style.background = "#85b5ca";
  span.style.display = "block";
  span.style.padding = "5px";
  span.className = cc + "_span";
  parent.insertBefore(span, referenceNode);
  referenceNode.style.borderColor = "#cc0000";
}
name_input.addEventListener("keyup", function() { //Start NAME input keypress listener
  if (name_input.value.length > 0) {
    name_input.style.borderColor = "#00e600";
    fieldsets[0].children[1].style.color = "#000";
  }
}); //End NAME input keypress listener
mail.addEventListener("keyup", function() { //Start EMAIL input keypress listener
  if(regex_mail.test(mail.value) === false) {
    cc_error_message(mail.parentNode, mail, "mail", new_cc_span, "Example: dave@teamtreehouse.com", "", "42%");
    new_cc_span.innerHTML = "Example: dave@teamtreehouse.com";
  } else {
      try {
        document.querySelector(".mail_span").style.display = "none";
        mail.style.borderColor = "#00e600";
        fieldsets[0].children[3].style.color = "#000";
        if(mail.value.length === 0) {  mail.style.borderColor = "";}
      }
      catch(err) {
        console.log("There is no cc_span")
      }
  }
}); //End EMAIL input keypress listener
cc_num.addEventListener("keyup", function(e) { //Start  CREDIT CARD keypress listener
  if((cc_num.value.length > 0 && cc_num.value.length < 13) || cc_num.value.length > 16 || regex_cc.test(cc_num.value) === false) {
    cc_error_message(cc_input, cc_num, "cc", new_cc_span, "Card number should be 13-16 digits long, you typed ", "-5%", "");
  } else {
      try {
        document.querySelector(".cc_span").style.display = "none";
        cc_num.style.borderColor = "#00e600";
        cc_input.children[0].style.color = "#000";
        if(cc_num.value.length === 0) {  cc_num.style.borderColor = "";}
      }
      catch(err) {
        console.log("There is no cc_span")
      }
  }
});//End credit card keypress listener
zip_input.addEventListener("keyup", function(e) { //Start  zip code keypress listener
  if((zip.value.length > 0 && zip.value.length < 5) || zip.value.length > 5 || regex_zip.test(zip.value) === false) {
    cc_error_message(zip_input,zip,"zip",new_zip_span, "Enter 5 digits ", "-5%", "");
  } else {
      try {
        document.querySelector(".zip_span").style.display = "none";
        zip.style.borderColor = "#00e600";
        zip_input.children[0].style.color = "#000";
        if(zip.value.length === 0) {
          zip.style.borderColor = "";
          document.querySelector(".zip_span").style.display = "none";
        }
      }
      catch(err) {
        console.log("There is no cc_span")
      }
  }
}); //End  zip code keypress listener
cvv_input.addEventListener("keyup", function(e) { //Start  CVV code keypress listener
  if((cvv.value.length > 0 && cvv.value.length < 3) || cvv.value.length > 3 || regex_cvv.test(cvv.value) === false) {
    cc_error_message(cvv_input,cvv,"cvv",new_cvv_span, "Enter 3 digits ", "-5%", "");
  } else {
      try {
        document.querySelector(".cvv_span").style.display = "none";
        cvv.style.borderColor = "#00e600";
        cvv_input.children[0].style.color = "#000";
        if(cvv.value.length === 0) {
          cvv.style.borderColor = "";
          document.querySelector(".ccv_span").style.display = "none";
        }
      }
      catch(err) {
        console.log(err)
      }
  }
}); //End  zip code keypress listener
