const headerRoot = document.getElementById("site-header");
const footerRoot = document.getElementById("site-footer");
const activeNav = document.body.dataset.activeNav || "";
const currentScriptUrl = document.currentScript
  ? new URL(document.currentScript.src, window.location.href)
  : new URL("scripts.js", window.location.href);
const siteRoot = new URL("./", currentScriptUrl);
const siteHref = (path = "") => new URL(path, siteRoot).href;

if (headerRoot) {
  headerRoot.innerHTML = `
    <header>
      <nav class="wrap">
        <a class="navbrand" href="${siteHref("")}" aria-label="O2 BodyFit home"><span>O2</span> BodyFit</a>
        <div class="navlinks" id="navlinks">
          <a href="${siteHref("#programs")}"${activeNav === "programs" ? ' aria-current="page"' : ""}>Programs</a>
          <a href="${siteHref("schedule/")}"${activeNav === "schedule" ? ' aria-current="page"' : ""}>Schedule</a>
          <a href="${siteHref("about/")}"${activeNav === "about" ? ' aria-current="page"' : ""}>About</a>
          <a href="${siteHref("contact/")}"${activeNav === "contact" ? ' aria-current="page"' : ""}>Contact</a>
          <a href="${siteHref("members-access/")}"${activeNav === "members" ? ' aria-current="page"' : ""}>Member Login</a>
          <a href="${siteHref("how-to-join/")}" class="btn"${activeNav === "trial" ? ' aria-current="page"' : ""}>1-Day Free Trial</a>
        </div>
        <button class="navtoggle" aria-expanded="false" aria-controls="navlinks" aria-label="Toggle menu"><span class="bars"></span></button>
      </nav>
    </header>
  `;
}

if (footerRoot) {
  footerRoot.innerHTML = `
    <footer>
      <div class="wrap">
        <div class="foot-top">
          <div>
            <span class="brand" aria-label="O2 BodyFit">
              <img src="${siteHref("assets/logo.png")}" alt="O2 BodyFit">
            </span>
            <p class="mono" style="color:var(--mut);margin-top:16px">Elite Fitness · Daly City</p>
          </div>
          <div class="foot-partners">
            <div class="foot-social">
              <a href="https://www.instagram.com/o2bodyfit/" target="_blank" rel="noopener" aria-label="O2 BodyFit on Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.14 0-3.51.01-4.75.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.38-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9zm0 9.81a3.86 3.86 0 1 0 0-7.72 3.86 3.86 0 0 0 0 7.72zm7.58-10.05a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z"/></svg>
              </a>
              <a href="https://www.facebook.com/o2bodyfit" target="_blank" rel="noopener" aria-label="O2 BodyFit on Facebook">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
              </a>
            </div>
            <a href="https://classpass.com/studios/o2-bodyfit-daly-city" target="_blank" rel="noopener" title="ClassPass Partner">
              <img src="${siteHref("assets/classpass-logo.png")}" alt="ClassPass Partner" width="114" height="46" loading="lazy">
            </a>
          </div>
        </div>
        <div class="foot-bot">
          <span>© <span id="site-year"></span> O2 BodyFit. All rights reserved.</span>
        </div>
      </div>
    </footer>
  `;
}

const yearNode = document.getElementById("site-year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const io = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  }),
  { threshold: 0.15 }
);

const revealables = document.querySelectorAll(".rv");
revealables.forEach((el) => io.observe(el));
setTimeout(() => revealables.forEach((el) => el.classList.add("in")), 2500);

(() => {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const observer = new IntersectionObserver(
    ([entry]) => document.body.classList.toggle("scrolled", !entry.isIntersecting),
    { threshold: 0, rootMargin: "-70px 0px 0px 0px" }
  );
  observer.observe(hero);
})();

(() => {
  const toggle = document.querySelector(".navtoggle");
  const nav = document.getElementById("navlinks");
  if (!toggle || !nav) return;
  const set = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open);
  };
  toggle.addEventListener("click", () => set(!document.body.classList.contains("nav-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) set(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") set(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) set(false);
  });
})();

(() => {
  const frame = document.querySelector(".video-frame");
  if (!frame) return;
  frame.addEventListener("click", () => {
    const id = frame.getAttribute("data-yt");
    if (!id || frame.querySelector("iframe")) return;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = "O2 BodyFit promo video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);
    const button = frame.querySelector(".video-play");
    if (button) button.remove();
  });
})();

(() => {
  const root = document.querySelector(".page-head--slider");
  if (!root) return;
  const slides = [...root.querySelectorAll(".ph-slide")];
  const dots = [...root.querySelectorAll(".ph-dot")];
  if (slides.length < 2) return;
  let index = 0;
  let timer = null;
  const DELAY = 5500;
  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, idx) => slide.classList.toggle("is-active", idx === index));
    dots.forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx === index);
      dot.setAttribute("aria-selected", idx === index ? "true" : "false");
    });
  };
  const next = () => show(index + 1);
  const prev = () => show(index - 1);
  const stop = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const play = () => {
    if (reduce) return;
    stop();
    timer = setInterval(next, DELAY);
  };
  const restart = () => {
    stop();
    play();
  };

  root.querySelector(".ph-next")?.addEventListener("click", () => {
    next();
    restart();
  });
  root.querySelector(".ph-prev")?.addEventListener("click", () => {
    prev();
    restart();
  });
  dots.forEach((dot, idx) => dot.addEventListener("click", () => {
    show(idx);
    restart();
  }));

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", play);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", play);
  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      next();
      restart();
    } else if (event.key === "ArrowLeft") {
      prev();
      restart();
    }
  });

  let x0 = null;
  let y0 = null;
  root.addEventListener("touchstart", (event) => {
    x0 = event.touches[0].clientX;
    y0 = event.touches[0].clientY;
  }, { passive: true });
  root.addEventListener("touchend", (event) => {
    if (x0 === null) return;
    const dx = event.changedTouches[0].clientX - x0;
    const dy = event.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
      restart();
    }
    x0 = null;
    y0 = null;
  }, { passive: true });

  play();
})();

(() => {
  const track = document.querySelector(".rev-grid");
  const dots = document.querySelector(".rev-dots");
  if (!track || !dots) return;
  const cards = [...track.querySelectorAll(".rev")];
  if (cards.length < 2) return;

  const goTo = (index) => {
    const bounded = Math.max(0, Math.min(index, cards.length - 1));
    track.scrollTo({ left: cards[bounded].offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  cards.forEach((_, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Go to review ${idx + 1}`);
    button.addEventListener("click", () => goTo(idx));
    dots.appendChild(button);
  });

  const dotEls = [...dots.children];
  let active = 0;
  let raf = null;
  const sync = () => {
    raf = null;
    const x = track.scrollLeft;
    let best = 0;
    let bestDistance = Infinity;
    cards.forEach((card, idx) => {
      const distance = Math.abs((card.offsetLeft - track.offsetLeft) - x);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = idx;
      }
    });
    active = best;
    dotEls.forEach((dot, idx) => dot.classList.toggle("is-active", idx === best));
  };

  track.addEventListener("scroll", () => {
    if (!raf) raf = requestAnimationFrame(sync);
  }, { passive: true });
  sync();

  const nav = document.querySelector(".rev-nav");
  if (!nav) return;
  const atEnd = () => track.scrollLeft >= (track.scrollWidth - track.clientWidth - 4);
  const step = (direction) => {
    if (direction > 0) {
      atEnd() ? goTo(0) : goTo(active + 1);
    } else {
      active <= 0 ? goTo(cards.length - 1) : goTo(active - 1);
    }
  };
  nav.querySelector(".rev-prev")?.addEventListener("click", () => step(-1));
  nav.querySelector(".rev-next")?.addEventListener("click", () => step(1));
  nav.removeAttribute("aria-hidden");
  nav.classList.add("is-ready");
})();
