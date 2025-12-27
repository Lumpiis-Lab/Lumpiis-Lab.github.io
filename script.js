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
    description: ' Ein einfaches Mitgliederportal für Creator. Sie können exklusive Inhalte für ihre Streams herunterladen.',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2025-09-09',
    github: '',
    demo: '',
    image: 'img/member-portal.png'
  },
  {
    id: 'lagerverwaltung',
    title: 'Lagerverwaltung',
    description: ' Eine Anwendung zur Verwaltung von Lagerbeständen.',
    tags: ['ui', 'web', 'tool'],
    updatedAt: '2025-07-15',
    github: 'https://github.com/Lumpiis-Lab/Lagerverwaltung-Tool',
    demo: '',
    image: 'img/lager.png'
  },
  {
    id: 'scube-scripts',
    title: 'Scube-Scripts Docs',
    description: ' Eine Sammlung von Dokumentationen für meine FiveM Scripts.',
    tags: ['ui', 'web'],
    updatedAt: '2025-08-02',
    github: 'https://github.com/ScubeScripts/scubescripts.github.io',
    demo: 'https://scubescripts.github.io/',
    image: 'img/Scube.png'
  }
];

const WORK_LINKS = [
  { id: 'discord-1', title: 'Lumpii´s Lab', url: 'https://discord.gg/5gKAtJFUD9', type: 'discord', icon: 'fab fa-discord' },
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

function formatDate(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('de-DE', { year: 'numeric', month: 'short', day: '2-digit' });
}

function projectCard(p){
  const tags = p.tags.map(t => `<span class="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px]">#${t}</span>`).join('');
  const gh = p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">${icon('github')}<span>Code</span></a>` : '';
  const demo = p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg bg-white/0 hover:bg-white/10 border border-white/10">${icon('external')}<span>Demo</span></a>` : '';
  const img = p.image ? `
        <div class="img-hover-group relative">
          <img loading="lazy" src="${p.image}" alt="${p.title}" class="w-full h-40 object-cover rounded-xl border border-white/10"/>
          <span class="img-zoom-icon pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="zoom-box bg-base-900/80 border border-white/15 rounded-xl flex items-center justify-center w-12 h-12">
              <svg class="w-7 h-7 text-white/80 drop-shadow-lg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            </span>
          </span>
        </div>` : coverGradient(p.title);

  return `\n      <article class="group rounded-2xl bg-base-800/60 border border-white/10 p-4 hover:-translate-y-0.5 transition will-change-transform shadow-glow">\n        <div class="relative">${img}</div>\n        <div class="mt-4 flex items-start justify-between gap-4">\n          <h3 class="text-lg font-semibold leading-tight">${p.title}</h3>\n          <span class="text-[11px] text-neutral-400">${formatDate(p.updatedAt)}</span>\n        </div>\n        <p class="mt-2 text-sm text-neutral-300 line-clamp-3">${p.description}</p>\n        <div class="mt-3 flex flex-wrap gap-1.5">${tags}</div>\n        <div class="mt-4 flex flex-wrap gap-2">${gh}${demo}</div>\n      </article>`;
}

function coverGradient(text){
  const initials = text.split(/\s+/).map(s=>s[0]).join('').slice(0,3).toUpperCase();
  return `\n      <div class="h-40 w-full rounded-xl border border-white/10 bg-gradient-to-br from-brand-600/30 to-fuchsia-600/25 flex items-center justify-center">\n        <span class="text-2xl font-extrabold tracking-wider">${initials}</span>\n      </div>`;
}

function icon(name){
  const map = {
    github: '<svg viewBox="0 0 24 24" class="size-4" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.74.08-.74 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1 .1-.79.42-1.32.77-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.82 5.66-5.5 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/></svg>',
    download: '<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    external: '<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v7H3V3h7"/></svg>',
    link: '<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 1 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 1 0 7 7l1-1"/></svg>'
  };
  return map[name] || '';
}

function render(list){
  grid.innerHTML = list.map(projectCard).join('');
  empty.classList.toggle('hidden', list.length !== 0);

  document.querySelectorAll('#grid img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', e => {
      const overlay = document.getElementById('imgPreviewOverlay');
      const preview = document.getElementById('imgPreview');
      preview.src = img.src;
      preview.alt = img.alt;
      overlay.classList.remove('hidden');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('imgPreviewOverlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.classList.add('hidden');
      document.getElementById('imgPreview').src = '';
    });
  }
});

function applyFilters(){
  const q = $('#search').value.trim().toLowerCase();
  const activeTag = document.querySelector('.tag-btn.bg-white\\/5').dataset.tag;
  const sort = $('#sort').value;
  let list = PROJECTS.filter(p => {
    const inText = (p.title + ' ' + p.description + ' ' + p.tags.join(' ')).toLowerCase();
    const tagOk = activeTag === 'all' ? true : p.tags.includes(activeTag);
    return inText.includes(q) && tagOk;
  });
  if (sort === 'updated') list.sort((a,b)=> new Date(b.updatedAt)-new Date(a.updatedAt));
  if (sort === 'alpha') list.sort((a,b)=> a.title.localeCompare(b.title,'de'));
  render(list);
}

function initFilters(){
  document.querySelectorAll('.tag-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('bg-white/5'));
      btn.classList.add('bg-white/5');
      applyFilters();
      const u = new URL(location); u.searchParams.set('tag', btn.dataset.tag); history.replaceState(null,'',u);
    });
  });
  const urlTag = new URL(location).searchParams.get('tag');
  if (urlTag){
    const btn = document.querySelector(`.tag-btn[data-tag="${urlTag}"]`);
    if (btn){ document.querySelectorAll('.tag-btn').forEach(b=>b.classList.remove('bg-white/5')); btn.classList.add('bg-white/5'); }
  }
}

const PLATFORM_STYLES = {
  discord:  { bg: '#5865F2',                iconBg: 'rgba(255,255,255,0.06)',  iconColor: '#fff' },
  github:   { bg: '#181717',                iconBg: 'rgba(255,255,255,0.06)',  iconColor: '#fff' },
  twitch:   { bg: '#9147FF',                iconBg: 'rgba(255,255,255,0.06)',  iconColor: '#fff' },
  youtube:  { bg: '#FF0000',                iconBg: 'rgba(255,255,255,0.06)',  iconColor: '#fff' },
  instagram:{ bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', iconBg: 'rgba(255,255,255,0.06)', iconColor: '#fff' },
  fivem:    { bg: 'linear-gradient(45deg,#ff9a2e,#ff7a18)', iconBg: 'rgba(255,255,255,0.08)', iconColor: '#ffffff' },
  default:  { bg: 'linear-gradient(90deg,#4c65ff,#f062c0)', iconBg: 'rgba(255,255,255,0.06)', iconColor: '#fff' }
};

function renderWorkSlider(){
  const wrap = document.getElementById('workSlider');
  if(!wrap) return;
  wrap.innerHTML = WORK_LINKS.map(l => {
    return `
      <a href="${l.url}" target="_blank" rel="noopener" data-id="${l.id}" data-type="${l.type}" class="ws-item inline-flex flex-shrink-0 w-56 md:w-64 rounded-2xl border border-white/10 bg-white/5 transition-colors p-4 gap-3 items-center" aria-label="${l.title}">
        <div class="size-12 rounded-xl flex-shrink-0 flex items-center justify-center text-neutral-200 bg-base-800/30 border border-white/5 ws-icon">
          <i class="${l.icon}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold truncate">${l.title}</div>
          <div class="text-xs text-neutral-400 truncate">${l.type.toUpperCase()}</div>
        </div>
      </a>`;
  }).join('');

  wrap.querySelectorAll('.ws-item').forEach(a=>{
    const icon = a.querySelector('.ws-icon');
    a.addEventListener('mouseenter', ()=>{
      const type = a.dataset.type || 'default';
      const style = PLATFORM_STYLES[type] || PLATFORM_STYLES.default;
      a.dataset._origBg = a.style.background || '';
      a.dataset._origColor = a.style.color || '';
      icon.dataset._origBg = icon.style.background || '';
      icon.dataset._origColor = icon.style.color || '';

      a.style.background = style.bg;
      a.style.color = style.iconColor || '#fff';
      icon.style.background = style.iconBg || 'rgba(255,255,255,0.06)';
      const inner = icon.querySelector('i');
      if(inner) inner.style.color = style.iconColor || '#fff';
    });
    a.addEventListener('mouseleave', ()=>{
      a.style.background = a.dataset._origBg || '';
      a.style.color = a.dataset._origColor || '';
      icon.style.background = icon.dataset._origBg || '';
      const inner = icon.querySelector('i');
      if(inner) inner.style.color = icon.dataset._origColor || '';
      delete a.dataset._origBg; delete a.dataset._origColor;
      delete icon.dataset._origBg; delete icon.dataset._origColor;
    });
  });

  makeHorizontalDraggable(wrap);
}

function makeHorizontalDraggable(el){
  let isDown=false, startX, scrollLeft;
  el.style.scrollBehavior = 'auto';
  el.addEventListener('mousedown', (e)=>{
    isDown = true;
    el.classList.add('cursor-grabbing');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  window.addEventListener('mouseup', ()=>{ isDown=false; el.classList.remove('cursor-grabbing'); });
  el.addEventListener('mouseleave', ()=>{ isDown=false; el.classList.remove('cursor-grabbing'); });
  el.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.2;
    el.scrollLeft = scrollLeft - walk;
  });

  let touchStartX=0, touchScrollLeft=0;
  el.addEventListener('touchstart', (e)=>{
    touchStartX = e.touches[0].pageX - el.offsetLeft;
    touchScrollLeft = el.scrollLeft;
  }, {passive:true});
  el.addEventListener('touchmove', (e)=>{
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - touchStartX) * 1.2;
    el.scrollLeft = touchScrollLeft - walk;
  }, {passive:true});
}

function initWorkSliderControls(){
  const container = document.getElementById('workSlider');
  const prev = document.getElementById('wsPrev');
  const next = document.getElementById('wsNext');
  if(!container) return;
  const step = container.clientWidth * 0.8;
  prev && prev.addEventListener('click', ()=> container.scrollBy({ left: -step, behavior: 'smooth' }));
  next && next.addEventListener('click', ()=> container.scrollBy({ left: step, behavior: 'smooth' }));
}

function initTestimonialLinks(){
  const TESTIMONIAL_LINKS = {
    'dracocat': 'https://twitch.tv/dracocat',
    'shirotastisch': 'https://twitch.tv/shirotastisch',
    'flamerbox': 'https://twitch.tv/flamerbox'
  };

  function normalizeName(n){
    return (n || '').trim().toLowerCase().replace(/\s+/g,'').replace(/[^a-z0-9_]/gi,'');
  }

  document.querySelectorAll('#testimonials .p-6').forEach(container => {
    const nameEl = container.querySelector('.font-semibold');
    if(!nameEl) return;

    const displayName = nameEl.textContent.trim();
    if(!displayName) return;

    const key = normalizeName(displayName);
    const url = TESTIMONIAL_LINKS[key];
    if(!url) return;

    if(nameEl.querySelector('a')) return;

    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = displayName;
    a.className = 'hover:underline text-neutral-200';
    a.textContent = displayName;

    if(document.querySelector('.fab.fa-twitch')){
      const icon = document.createElement('i');
      icon.className = 'fab fa-twitch ml-2 text-sm';
      icon.style.marginLeft = '0.5rem';
      a.appendChild(icon);
    }

    nameEl.textContent = '';
    nameEl.appendChild(a);
  });
}

function init(){
  $('#y').textContent = new Date().getFullYear();
  $('#menuBtn').addEventListener('click', ()=> $('#mobileNav').classList.toggle('hidden'));
  $('#search').addEventListener('input', applyFilters);
  $('#sort').addEventListener('change', applyFilters);
  initFilters();
  applyFilters();

  renderWorkSlider();
  initWorkSliderControls();

  initTestimonialLinks();
}

document.addEventListener('DOMContentLoaded', init);
  applyFilters();

document.addEventListener('DOMContentLoaded', init);
