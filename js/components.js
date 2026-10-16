
async function loadComponent(selector, file) {
  const container = document.querySelector(selector);
  if (!container) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Failed to load ${file}`);
    }

    container.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

async function initComponents() {
  await Promise.all([
    loadComponent("#site-header", "/includes/header.html"),
    loadComponent("#site-footer", "/includes/footer.html")
  ]);

  // Highlight the current page in the navigation
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("#site-header .nav-menu a").forEach(link => {
    const linkPage = new URL(link.href).pathname.split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", initComponents);
