/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "../assets/particlesjs-config.json", function () {
  console.log("For support or issue mail me at smile.shashank.s.shetty1996@gmail.com");
});

// typing
"use strict";
app();
scrollReveal();

function app() {
  // Targeted typing element
  let span = document.querySelector('#banner .typing span');
  // console.log(span.textContent);

  // Typing Speed default 5sec
  let typingSpeed = 3000;

  // All the content that has to be typed. Add a blank space for each string in this array
  typingContent = [' Full Stack Developer', ' Designer', ' Back End Developer', ' Front End Developer', ' Programmer'];

  // Initialize index to first position
  typingContentIndex = 0;

  // Initializing first text
  span.textContent = typingContent[typingContentIndex];

  setInterval(() => {
    // Incrementing and reset if index is greater then array size
    typingContentIndex = ++typingContentIndex % typingContent.length;
    // Setting the text content
    let typingText = typingContent[typingContentIndex];

    let typingTextIndex = 0;
    let textSpeed = ((typingText.length / typingSpeed) + 100);

    function typeWriter() {
      if (typingTextIndex < typingText.length) {
        span.innerHTML += typingText.charAt(typingTextIndex);
        typingTextIndex++;
        setTimeout(typeWriter, textSpeed);
      }
    }

    // Call the function
    typeWriter();
    // Clear the next content
    span.textContent = '';
  }, typingSpeed);

  // Toggle Navigation Function
  function toggleMenu() {
    let nav = document.querySelector('nav');
    let icon = document.querySelector('#toggle-nav i');

    // Toggling active class
    nav.classList.toggle('active');

    // Toggling Menu Icon
    if (icon.classList.contains('fa-bars')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  }

  // Toggle Navigation
  document.querySelector('#toggle-nav').addEventListener('click', toggleMenu);

  // Disable all the a tags
  // document.querySelectorAll('a').forEach((atag) => atag.addEventListener('click', (e) => e.preventDefault()));
};

function scrollReveal() {
  // Get the current top location using self.pageYOffset
  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  // Get the position of element till where you want to scroll to: element.offsetTop
  function elmYPosition(eID, offset) {
    let elm = document.getElementById(eID);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return (y - offset);
  }

  // Do a for loop to reach there, which will be quite fast or use a timer to do smooth scroll till that position using window.scrollTo
  function smoothScroll(eID, offset) {
    let startY = currentYPosition();
    let stopY = elmYPosition(eID, offset);
    let distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    let speed = Math.round(distance / 10);
    if (speed >= 20) speed = 20;
    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
      for (let i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (let i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  }

  document.querySelectorAll('a').forEach((atag) => atag.addEventListener('click', (e) => {
    let src = e.target.attributes[0].value;
    if (src[0] === "#") {
      e.preventDefault();
      let hash = src.split('#')[1];
      let offset = 3 * 16;
      smoothScroll(hash, offset);
    }
  }));

}