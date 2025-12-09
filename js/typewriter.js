// Simple typewriter effect for the greeting header
(function () {
  const greetingEl = document.querySelector("#greeting h1");
  if (!greetingEl) return;

  // choose greeting based on local hour
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 5)
      return {
        text: "Working late? Welcome to my portfolio.",
        cls: "greet-late",
      };
    if (hour < 12)
      return {
        text: "Good morning — welcome to my portfolio.",
        cls: "greet-morning",
      };
    if (hour < 17)
      return {
        text: "Good afternoon — welcome to my portfolio.",
        cls: "greet-afternoon",
      };
    if (hour < 21)
      return {
        text: "Good evening — welcome to my portfolio.",
        cls: "greet-evening",
      };
    return {
      text: "Good night — welcome to my portfolio.",
      cls: "greet-night",
    };
  }

  const greeting = getGreeting();
  const text = greeting.text;
  // set a class on the parent section for gradient styling
  const greetingSection = document.getElementById("greeting");
  if (greetingSection && greeting.cls) {
    greetingSection.classList.add(greeting.cls);
  }
  greetingEl.textContent = "";

  let i = 0;
  const speed = 60; // ms per character

  function typeNext() {
    if (i < text.length) {
      greetingEl.textContent += text.charAt(i);
      i++;
      setTimeout(typeNext, speed);
    }
  }

  // start typing after a short delay
  setTimeout(typeNext, 300);
})();
