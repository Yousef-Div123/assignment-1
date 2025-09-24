// Dark/Light mode toggle for portfolio site

// Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
(function () {
  // Create the theme toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙"; // Initial icon for light mode
  toggleBtn.setAttribute("id", "theme-toggle");

  // Style the button (fixed position, circular, centered icon)
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.zIndex = "1000";
  toggleBtn.style.background = "#222";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.width = "40px";
  toggleBtn.style.height = "40px";
  toggleBtn.style.fontSize = "1.5rem";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.display = "flex";
  toggleBtn.style.alignItems = "center";
  toggleBtn.style.justifyContent = "center";
  document.body.appendChild(toggleBtn);

  // Function to set theme and update button appearance
  function setTheme(mode) {
    if (mode === "dark") {
      document.documentElement.classList.add("dark-mode"); // Add dark mode class to <html>
      toggleBtn.textContent = "☀️"; // Sun icon for dark mode
      toggleBtn.style.background = "#fff"; // Button background white in dark mode
      toggleBtn.style.color = "#222"; // Icon color dark in dark mode
      localStorage.setItem("theme", "dark"); // Save preference
    } else {
      document.documentElement.classList.remove("dark-mode"); // Remove dark mode class
      toggleBtn.textContent = "🌙"; // Moon icon for light mode
      toggleBtn.style.background = "#222"; // Button background dark in light mode
      toggleBtn.style.color = "#fff"; // Icon color white in light mode
      localStorage.setItem("theme", "light"); // Save preference
    }
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark-mode")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  // Load theme from localStorage on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
})();
