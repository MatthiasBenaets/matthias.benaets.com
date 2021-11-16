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
  setTimeout(() => {document.getElementById("content1").style.visibility="visible"},1000);
  setTimeout(() => {document.getElementById("content1").style.opacity="1"},1000);
  setTimeout(() => {document.getElementById("content1").style.animation="fadeIn 1s ease"},1000);
  setTimeout(() => {document.getElementById("content1").style.visibility="visible"},1005);
  setTimeout(showBackButton, 2000);
}
document.getElementById('navTitle2').onclick = function() {Click2()};
function Click2(){
  hideLandingPage();
  setTimeout(() => {document.getElementById("content2").style.visibility="visible"},1000);
  setTimeout(() => {document.getElementById("content2").style.opacity="1"},1000);
  setTimeout(() => {document.getElementById("content2").style.animation="fadeIn 1s ease"},1000);
  setTimeout(() => {document.getElementById("content2").style.visibility="visible"},1005);
  setTimeout(showBackButton, 2000);
}
document.getElementById('navTitle3').onclick = function() {Click3()};
function Click3(){
  hideLandingPage();
  setTimeout(() => {document.getElementById("content3").style.visibility="visible"},1000);
  setTimeout(() => {document.getElementById("content3").style.opacity="1"},1000);
  setTimeout(() => {document.getElementById("content3").style.animation="fadeIn 1s ease"},1000);
  setTimeout(() => {document.getElementById("content3").style.visibility="visible"},1005);
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
  document.getElementById("navBackButton").style.visibility="visible";
  document.getElementById("navBackButton").style.animation="fadeIn 2s ease";
}

/////////////////////////////
///     Closing menus     ///
/////////////////////////////

// Make menu content invisible and load landing page items.
function contentClose(){
  document.getElementById("content1").style.visibility="hidden";
  document.getElementById("content2").style.visibility="hidden";
  document.getElementById("content3").style.visibility="hidden";
}
function loadMain(){
  document.getElementById("navBackButton").style.visibility="hidden";
  document.getElementById("nav").style.animation="fadeIn 2s ease";
  document.getElementById("titleSpan").style.animation="fadeIn 2s ease";
}
function landingPage(){
  document.getElementById("nav").style.visibility="visible";
  document.getElementById("titleSpan").style.visibility="visible";
}

document.getElementById('navBackButton').onclick = function() {ClickBack()};
function ClickBack(){
  document.getElementById("content1").style.animation="fadeOut 2s ease";
  document.getElementById("content2").style.animation="fadeOut 2s ease";
  document.getElementById("content3").style.animation="fadeOut 2s ease";
  document.getElementById("navBackButton").style.animation="fadeOut 2s ease";
  setTimeout(contentClose,2000);
  setTimeout(loadMain,2000);
  setTimeout(landingPage,2000);
}