// Dark/Light mode toggle for portfolio site
(function () {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙";
  toggleBtn.setAttribute("id", "theme-toggle");
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

  function setTheme(mode) {
    if (mode === "dark") {
      document.documentElement.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
      toggleBtn.style.background = "#fff";
      toggleBtn.style.color = "#222";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      toggleBtn.textContent = "🌙";
      toggleBtn.style.background = "#222";
      toggleBtn.style.color = "#fff";
      localStorage.setItem("theme", "light");
    }
  }

  toggleBtn.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark-mode")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  });

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
})();
