// Handle client-side page navigation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a"); // Select all navigation links
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent full page reload
      const url = this.getAttribute("href");
      fetchPage(url);
      window.history.pushState(null, "", url); // Update URL without reloading

      const headerTitle = document.querySelector("header nav ul li a.active");
      if (headerTitle) {
        headerTitle.classList.remove("active");
      }
      this.classList.add("active");
    });
  });

  
  

  // Load the requested page content dynamically
  function fetchPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        document.querySelector("main").innerHTML = doc.querySelector("main").innerHTML; // Replace content
        document.title = doc.title; // Update title
      })
      .catch(err => console.error("Page load error:", err));
  }

  // Handle back/forward browser navigation
  window.addEventListener("popstate", () => {
    fetchPage(location.pathname);
  });

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark")
    updateToggleButton(true)
  } else {
    updateToggleButton(false)
  }

  // Set up theme toggle button
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  themeToggleBtn.addEventListener("click", toggleTheme)
})

// Toggle between light and dark themes
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark")
  localStorage.setItem("theme", isDark ? "dark" : "light")
  updateToggleButton(isDark)
}

// Update the toggle button icon
function updateToggleButton(isDark) {
  const icons = document.querySelectorAll(".toggle-icon")
  icons.forEach((icon) => {
    icon.classList.toggle("hidden", (isDark && icon.textContent === "☀️") || (!isDark && icon.textContent === "🌙"))
  })
}

