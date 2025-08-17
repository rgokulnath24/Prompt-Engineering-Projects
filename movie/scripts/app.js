(function () {
  const root = document.documentElement;
  const grid = document.getElementById("grid");
  const chips = Array.from(document.querySelectorAll(".chip"));
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const resultCount = document.getElementById("resultCount");
  const themeToggle = document.getElementById("themeToggle");
  const yearEl = document.getElementById("year");

  yearEl.textContent = new Date().getFullYear();

  // Load theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton();

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeButton();
  });

  function updateThemeButton() {
    const t = document.documentElement.getAttribute("data-theme") || "light";
    themeToggle.textContent = t === "light" ? "🌙" : "☀️";
    themeToggle.setAttribute("aria-label", t === "light" ? "Enable dark theme" : "Enable light theme");
  }

  // Image fallback
  const FALLBACK = "https://placehold.co/300x450/png?text=Poster";
  function imgWithFallback(src, alt = "") {
    const img = new Image();
    img.loading = "lazy";
    img.src = src;
    img.alt = alt;
    img.onerror = () => (img.src = FALLBACK);
    return img;
  }

  // Render
  function render(list) {
    grid.innerHTML = "";
    list.forEach((m) => {
      const card = document.createElement("article");
      card.className = "card";

      const poster = document.createElement("div");
      poster.className = "poster";

      const badge = document.createElement("span");
      badge.className = "lang-badge";
      badge.textContent = m.language;

      const img = imgWithFallback(m.poster, `${m.title} poster`);
      poster.appendChild(img);
      poster.appendChild(badge);

      const body = document.createElement("div");
      body.className = "card-body";

      const title = document.createElement("h3");
      title.className = "title";
      title.textContent = m.title;

      const subtitle = document.createElement("p");
      subtitle.className = "subtitle";
      subtitle.textContent = `${m.year} • ${m.language}`;

      const cta = document.createElement("div");
      cta.className = "cta";
      const btnBook = document.createElement("button");
      btnBook.textContent = "Book";
      btnBook.addEventListener("click", () => alert(`🎟️ Pretend booking for: ${m.title}`));

      const btnInfo = document.createElement("button");
      btnInfo.className = "ghost";
      btnInfo.textContent = "Details";
      btnInfo.addEventListener("click", () =>
        alert(`${m.title} (${m.year}) • ${m.language}`)
      );

      cta.appendChild(btnBook);
      cta.appendChild(btnInfo);

      body.appendChild(title);
      body.appendChild(subtitle);
      body.appendChild(cta);

      card.appendChild(poster);
      card.appendChild(body);
      grid.appendChild(card);
    });

    resultCount.textContent = list.length;
  }

  // State
  let activeLang = "all";
  let query = "";

  // Filters
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeLang = chip.dataset.lang;
      applyFilters();
    })
  );

  // Search with tiny debounce
  let t;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(t);
    query = e.target.value.trim().toLowerCase();
    t = setTimeout(applyFilters, 120);
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    query = "";
    applyFilters();
    searchInput.focus();
  });

  function applyFilters() {
    const list = window.MOVIES.filter((m) => {
      const langOk = activeLang === "all" ? true : m.language === activeLang;
      const qOk =
        query.length === 0 ||
        m.title.toLowerCase().includes(query) ||
        String(m.year).includes(query) ||
        m.language.toLowerCase().includes(query);
      return langOk && qOk;
    });
    render(list);
  }

  // Init
  render(window.MOVIES);
})();
