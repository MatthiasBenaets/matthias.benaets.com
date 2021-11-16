/////////////////////////////
///     Typing effect     ///
/////////////////////////////

// Print letter by letter at specific speed.
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// variables for function typeEffect
var speed = 75;
var titleSpan = document.getElementById('titleSpan');
var ye = document.getElementById('ye');
var delay = titleSpan.innerHTML.length + 700;

// Type title and load navigation bar afterwards.
typeEffect(titleSpan, speed);
setTimeout(() => {document.getElementById("nav").style.animation="fadeIn 2s ease"},2000);
setTimeout(() => {document.getElementById("nav").style.opacity="1"},2000);

/////////////////////////////
///     Loading menus     ///
/////////////////////////////

// On click, open correct menu content.
document.getElementById('navTitle1').onclick = function() {Click1()};
function Click1(){
  // document.getElementById("bla").innerHTML= "clicked";
  hideLandingPage();
  setTimeout(() => {document.getElementById("contentBio").style.visibility="visible"},1000);
  setTimeout(() => {document.getElementById("contentBio").style.opacity="1"},1000);
  setTimeout(() => {document.getElementById("contentBio").style.animation="fadeIn 1s ease"},1000);
  setTimeout(() => {document.getElementById("contentBio").style.visibility="visible"},1005);
  setTimeout(showBackButton, 2000);
}
document.getElementById('navTitle2').onclick = function() {Click2()};
function Click2(){
  hideLandingPage();
  setTimeout(() => {document.getElementById("contentResume").style.visibility="visible"},1000);
  setTimeout(() => {document.getElementById("contentResume").style.opacity="1"},1000);
  setTimeout(() => {document.getElementById("contentResume").style.animation="fadeIn 1s ease"},1000);
  setTimeout(() => {document.getElementById("contentResume").style.visibility="visible"},1005);
  setTimeout(showBackButton, 2000);
}
document.getElementById('navTitle3').onclick = function() {Click3()};
function Click3(){
  hideLandingPage();
  setTimeout(() => {document.getElementById("contentContact").style.visibility="visible"},1000);
  setTimeout(() => {document.getElementById("contentContact").style.opacity="1"},1000);
  setTimeout(() => {document.getElementById("contentContact").style.animation="fadeIn 1s ease"},1000);
  setTimeout(() => {document.getElementById("contentContact").style.visibility="visible"},1005);
  setTimeout(showBackButton, 2000);
}

// used for on click functions to hide landing page and show back button.
function hideLandingPage(){
  document.getElementById("titleSpan").style.animation="fadeOut 1s ease";
  document.getElementById("nav").style.animation="fadeOut 1s ease";
  setTimeout(() => {document.getElementById("titleSpan").style.visibility="hidden"},1000);
  setTimeout(() => {document.getElementById("nav").style.visibility="hidden"},1000);
}
function showBackButton(){
  document.getElementById("closeButton").style.visibility="visible";
  document.getElementById("closeButton").style.animation="fadeIn 1s ease";
}

/////////////////////////////
///     Closing menus     ///
/////////////////////////////

// Make menu content invisible and load landing page items.
function contentClose(){
  document.getElementById("contentBio").style.visibility="hidden";
  document.getElementById("contentResume").style.visibility="hidden";
  document.getElementById("contentContact").style.visibility="hidden";
}
function loadMain(){
  document.getElementById("closeButton").style.visibility="hidden";
  document.getElementById("nav").style.animation="fadeIn 2s ease";
  document.getElementById("titleSpan").style.animation="fadeIn 2s ease";
}
function landingPage(){
  document.getElementById("nav").style.visibility="visible";
  document.getElementById("titleSpan").style.visibility="visible";
}

document.getElementById('closeButton').onclick = function() {ClickBack()};
function ClickBack(){
  document.getElementById("contentBio").style.animation="fadeOut 1s ease";
  document.getElementById("contentResume").style.animation="fadeOut 1s ease";
  document.getElementById("contentContact").style.animation="fadeOut 1s ease";
  document.getElementById("closeButton").style.animation="fadeOut 1s ease";
  setTimeout(contentClose,1000);
  setTimeout(loadMain,1000);
  setTimeout(landingPage,1000);
}