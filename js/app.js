/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "../assets/particlesjs-config.json", function () {
  console.log("For support or issue mail me at smile.shashank.s.shetty1996@gmail.com");
});

// typing
"use strict";
app();

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
  document.querySelectorAll('a').forEach((atag) => atag.addEventListener('click', (e) => e.preventDefault()));
};