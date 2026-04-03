const PROJECTS = [
  {
    id: 'pinboard',
    title: 'Pinboard',
    description: 'Eine einfache Webanwendung zum Speichern und Verwalten von Notizen.',
    tags: ['web', 'tool'],
    updatedAt: '2025-12-18',
    github: 'https://github.com/Lumpiis-Lab/Pinboard',
    demo: '',
    image: 'img/pinboard.png'
  },
  {
    id: 'live-editor',
    title: 'Network.eco Live-Editor',
    description: 'Ein einfaches Tool zum Bearbeiten von Network.eco Dateien',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2025-12-02',
    github: '',
    demo: 'https://sites.google.com/view/lumpiis-live-editor/home',
    image: 'img/eco.png'
  },
  {
    id: 'crypto-tool',
    title: 'Krypto-Tool',
    description: 'Ein einfaches Tool zur Verschlüsselung und Entschlüsselung von Text.',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2025-09-14',
    github: 'https://github.com/Lumpiis-Lab/Crypto-Tool',
    demo: 'https://sites.google.com/view/crypto-tool-demo/home',
    image: 'img/crypto.png'
  },
  {
    id: 'financial-planner',
    title: 'Finanz-Planer',
    description: 'Simpler Finanz-Planer um deine Ein- und Ausgaben zu verwalten.',
    tags: ['ui', 'web'],
    updatedAt: '2025-08-19',
    github: 'https://github.com/Lumpiis-Lab/Finanzplaner-Tool',
    demo: '',
    image: 'img/Finances.png'
  },
  {
    id: 'repair-tracker',
    title: 'Reparatur-Tracker',
    description: 'Reparatur-Tracker für Reparaturen an Geräten. Verfolge den Status deiner Reparaturen im Webinterface.',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2025-07-18',
    github: '',
    demo: '',
    image: 'img/rtracker.png'
  },
  {
    id: 'member-portal',
    title: 'Member-Portal',
    description: 'Ein einfaches Mitgliederportal für Creator. Sie können exklusive Inhalte für ihre Streams herunterladen.',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2026-04-03',
    github: '',
    demo: '',
    image: 'img/member-portal.png'
  },
  {
    id: 'lagerverwaltung',
    title: 'Lagerverwaltung',
    description: 'Eine Anwendung zur Verwaltung von Lagerbeständen.',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2025-07-15',
    github: 'https://github.com/Lumpiis-Lab/Lagerverwaltung-Tool',
    demo: '',
    image: 'img/lager.png'
  },
  {
    id: 'scube-scripts',
    title: 'Scube-Scripts Docs',
    description: 'Eine Sammlung von Dokumentationen für meine FiveM Scripts.',
    tags: ['ui', 'web'],
    updatedAt: '2025-08-02',
    github: 'https://github.com/ScubeScripts/scubescripts.github.io',
    demo: 'https://scubescripts.github.io/',
    image: 'img/Scube.png'
  }
];

const WORK_LINKS = [
  { id: 'discord-1', title: "Lumpii's Lab", url: 'https://discord.gg/5gKAtJFUD9', type: 'discord', icon: 'fab fa-discord' },
  { id: 'discord-2', title: 'ScubeScripts', url: 'https://discord.gg/Mqgewse3Yc', type: 'discord', icon: 'fab fa-discord' },
  { id: 'github-1', title: 'Lumpiis-Lab', url: 'https://github.com/lumpiis-lab', type: 'github', icon: 'fab fa-github' },
  { id: 'github-2', title: 'ScubeScripts', url: 'https://github.com/ScubeScripts', type: 'github', icon: 'fab fa-github' },
  { id: 'fivem', title: 'ScubeScripts', url: 'https://forum.cfx.re/u/scubescripts/summary', type: 'fivem', icon: 'fas fa-car' },
  { id: 'twitch', title: 'Lumpii_TV', url: 'https://twitch.tv/lumpii_tv', type: 'twitch', icon: 'fab fa-twitch' },
  { id: 'youtube', title: 'Lumpii_TV', url: 'https://www.youtube.com/@lumpii_tv', type: 'youtube', icon: 'fab fa-youtube' },
  { id: 'instagram', title: 'Lumpii_TV', url: 'https://instagram.com/lumpii_tv', type: 'instagram', icon: 'fab fa-instagram' }
];

const $ = s => document.querySelector(s);
const grid = $('#grid');
const empty = $('#empty');

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('de-DE', { year: 'numeric', month: 'short', day: '2-digit' });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function icon(name) {
  const map = {
    github: '<svg viewBox="0 0 24 24" class="size-4" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1 .1-.79.42-1.32.77-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.82 5.66-5.5 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/></svg>',
    external: '<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v7H3V3h7"/></svg>'
  };
  return map[name] || '';
}

function projectCard(p) {
  const safeTitle = escapeHtml(p.title);
  const safeDesc = escapeHtml(p.description);

  const tags = p.tags.map(t =>
    `<span class="px-2 py-0.5 rounded-md bg-editor-panel border border-editor-border text-[11px] font-mono text-syntax-comment">#${escapeHtml(t)}</span>`
  ).join('');

  const gh = p.github
    ? `<a href="${p.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-editor-bg border border-editor-border text-syntax-comment hover:text-syntax-text hover:border-syntax-green/30 transition-colors">${icon('github')}<span>code</span></a>`
    : '';
  const demo = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md bg-editor-bg border border-editor-border text-syntax-comment hover:text-syntax-text hover:border-syntax-cyan/30 transition-colors">${icon('external')}<span>demo</span></a>`
    : '';

  const img = p.image
    ? `<div class="img-hover-group relative cursor-pointer" data-img="${p.image}">
         <img loading="lazy" src="${p.image}" alt="${safeTitle}" class="w-full h-36 object-cover rounded-lg border border-editor-border"/>
         <span class="img-zoom-icon pointer-events-none absolute inset-0 flex items-center justify-center">
           <span class="bg-editor-bg/80 border border-editor-border rounded-lg flex items-center justify-center w-10 h-10">
             <svg class="w-5 h-5 text-syntax-comment" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
           </span>
         </span>
       </div>`
    : `<div class="h-36 w-full rounded-lg border border-editor-border bg-gradient-to-br from-syntax-green/5 to-syntax-cyan/5 flex items-center justify-center">
         <span class="text-xl font-mono font-bold text-syntax-comment/40">${safeTitle.split(/\s+/).map(s => s[0]).join('').slice(0, 3).toUpperCase()}</span>
       </div>`;

  return `
    <article class="editor-card group rounded-xl bg-editor-surface border border-editor-border p-4 hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:shadow-black/30">
      <!-- Title bar dots -->
      <div class="flex items-center gap-1.5 mb-3">
        <span class="size-2 rounded-full bg-syntax-red/60"></span>
        <span class="size-2 rounded-full bg-syntax-orange/60"></span>
        <span class="size-2 rounded-full bg-syntax-green/60"></span>
        <span class="ml-2 text-[10px] font-mono text-syntax-comment truncate">${safeTitle.toLowerCase().replace(/\s+/g, '-')}.ts</span>
      </div>
      ${img}
      <div class="mt-3 flex items-start justify-between gap-3">
        <h3 class="text-base font-semibold text-syntax-text leading-tight">${safeTitle}</h3>
        <span class="text-[10px] font-mono text-syntax-comment whitespace-nowrap mt-0.5">${formatDate(p.updatedAt)}</span>
      </div>
      <p class="mt-1.5 text-sm text-syntax-comment leading-relaxed line-clamp-2">${safeDesc}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">${tags}</div>
      <div class="mt-3 flex flex-wrap gap-2">${gh}${demo}</div>
    </article>`;
}

function render(list) {
  grid.innerHTML = list.map(projectCard).join('');
  empty.classList.toggle('hidden', list.length !== 0);

  grid.querySelectorAll('.img-hover-group').forEach(group => {
    group.addEventListener('click', () => {
      const src = group.dataset.img;
      if (!src) return;
      const overlay = document.getElementById('imgPreviewOverlay');
      const preview = document.getElementById('imgPreview');
      preview.src = src;
      preview.alt = group.querySelector('img')?.alt || 'Vorschau';
      overlay.classList.remove('hidden');
    });
  });
}

function applyFilters() {
  const q = $('#search').value.trim().toLowerCase();
  const activeBtn = document.querySelector('.tag-btn.active');
  const activeTag = activeBtn ? activeBtn.dataset.tag : 'all';
  const sort = $('#sort').value;

  let list = PROJECTS.filter(p => {
    const inText = (p.title + ' ' + p.description + ' ' + p.tags.join(' ')).toLowerCase();
    const tagOk = activeTag === 'all' || p.tags.includes(activeTag);
    return inText.includes(q) && tagOk;
  });

  if (sort === 'updated') list.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  if (sort === 'alpha') list.sort((a, b) => a.title.localeCompare(b.title, 'de'));

  render(list);
}

function initFilters() {
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
      const u = new URL(location);
      u.searchParams.set('tag', btn.dataset.tag);
      history.replaceState(null, '', u);
    });
  });

  const urlTag = new URL(location).searchParams.get('tag');
  if (urlTag) {
    const btn = document.querySelector(`.tag-btn[data-tag="${CSS.escape(urlTag)}"]`);
    if (btn) {
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }
}

const PLATFORM_STYLES = {
  discord:   { bg: '#5865F2', iconColor: '#fff' },
  github:    { bg: '#f0f6fc', iconColor: '#0d1117' },
  twitch:    { bg: '#9147FF', iconColor: '#fff' },
  youtube:   { bg: '#FF0000', iconColor: '#fff' },
  instagram: { bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', iconColor: '#fff' },
  fivem:     { bg: 'linear-gradient(45deg,#ff9a2e,#ff7a18)', iconColor: '#fff' },
  default:   { bg: '#3fb950', iconColor: '#0d1117' }
};

function renderWorkSlider() {
  const wrap = document.getElementById('workSlider');
  if (!wrap) return;

  wrap.innerHTML = WORK_LINKS.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener" data-type="${l.type}"
       class="ws-item inline-flex flex-shrink-0 w-52 md:w-60 rounded-xl border border-editor-border bg-editor-surface hover:border-syntax-green/30 transition-all p-3.5 gap-3 items-center">
      <div class="ws-icon size-10 rounded-lg flex-shrink-0 flex items-center justify-center text-syntax-comment bg-editor-panel border border-editor-border transition-all">
        <i class="${l.icon}"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-sm font-semibold text-syntax-text truncate">${escapeHtml(l.title)}</div>
        <div class="text-[10px] font-mono text-syntax-comment uppercase">${escapeHtml(l.type)}</div>
      </div>
    </a>`).join('');

  wrap.querySelectorAll('.ws-item').forEach(a => {
    const iconEl = a.querySelector('.ws-icon');
    a.addEventListener('mouseenter', () => {
      const style = PLATFORM_STYLES[a.dataset.type] || PLATFORM_STYLES.default;
      a.style.background = style.bg;
      a.style.color = style.iconColor;
      a.style.borderColor = 'transparent';
      const inner = iconEl.querySelector('i');
      if (inner) inner.style.color = style.iconColor;
    });
    a.addEventListener('mouseleave', () => {
      a.style.background = '';
      a.style.color = '';
      a.style.borderColor = '';
      const inner = iconEl.querySelector('i');
      if (inner) inner.style.color = '';
    });
  });

  makeHorizontalDraggable(wrap);
}

function makeHorizontalDraggable(el) {
  let isDown = false, startX, scrollLeft;
  el.style.scrollBehavior = 'auto';

  el.addEventListener('mousedown', e => {
    isDown = true;
    el.classList.add('cursor-grabbing');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  window.addEventListener('mouseup', () => { isDown = false; el.classList.remove('cursor-grabbing'); });
  el.addEventListener('mouseleave', () => { isDown = false; el.classList.remove('cursor-grabbing'); });
  el.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - el.offsetLeft - startX) * 1.2;
    el.scrollLeft = scrollLeft - walk;
  });

  let touchStartX = 0, touchScrollLeft = 0;
  el.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].pageX - el.offsetLeft;
    touchScrollLeft = el.scrollLeft;
  }, { passive: true });
  el.addEventListener('touchmove', e => {
    el.scrollLeft = touchScrollLeft - (e.touches[0].pageX - el.offsetLeft - touchStartX) * 1.2;
  }, { passive: true });
}

function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

function initTestimonialLinks() {
  const TESTIMONIAL_LINKS = {
    'dracocat': 'https://twitch.tv/dracocat',
    'shirotastisch': 'https://twitch.tv/shirotastisch',
    'flamerbox': 'https://twitch.tv/flamerbox'
  };

  document.querySelectorAll('#testimonials .editor-card').forEach(card => {
    const nameEl = card.querySelector('.font-semibold');
    if (!nameEl) return;
    const displayName = nameEl.textContent.trim();
    const key = displayName.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const url = TESTIMONIAL_LINKS[key];
    if (!url || nameEl.querySelector('a')) return;

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'hover:text-syntax-cyan transition-colors';
    a.textContent = displayName;
    nameEl.textContent = '';
    nameEl.appendChild(a);
  });
}

function initImagePreview() {
  const overlay = document.getElementById('imgPreviewOverlay');
  if (!overlay) return;
  overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.getElementById('imgPreview').src = '';
  });
}

function init() {
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
  }

  const searchEl = document.getElementById('search');
  const sortEl = document.getElementById('sort');
  if (searchEl) searchEl.addEventListener('input', applyFilters);
  if (sortEl) sortEl.addEventListener('change', applyFilters);

  initFilters();
  applyFilters();
  renderWorkSlider();
  initSkillBars();
  initTestimonialLinks();
  initImagePreview();
}

document.addEventListener('DOMContentLoaded', init);
