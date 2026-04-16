import './style.css'

const metaModules = import.meta.glob('../../templates/**/meta.json', { eager: true, import: 'default' })
const htmlModules = import.meta.glob('../../templates/**/index.html', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const byId = new Map()
for (const [, meta] of Object.entries(metaModules)) {
  if (meta?.id) byId.set(meta.id, { meta })
}

for (const [path, html] of Object.entries(htmlModules)) {
  const parts = path.split('/')
  const folder = parts[parts.length - 2]
  const entry = byId.get(folder)
  if (entry) entry.html = html
}

const templates = Array.from(byId.values())
  .filter((t) => t.meta && t.html)
  .sort((a, b) => a.meta.id.localeCompare(b.meta.id))

const state = {
  q: '',
  aesthetic: null,
  domain: null,
  activeId: null,
}

const uniq = (arr) => Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b))

const allAesthetics = uniq(
  templates.flatMap((t) => t.meta.tags?.aesthetic || []).filter(Boolean)
)
const allDomains = uniq(
  templates.flatMap((t) => t.meta.domain || []).filter(Boolean)
)

const matches = (t) => {
  const m = t.meta
  const hay = `${m.name} ${m.kind} ${m.id} ${(m.domain||[]).join(' ')} ${Object.values(m.tags||{}).flat().join(' ')}`.toLowerCase()
  if (state.q && !hay.includes(state.q.toLowerCase())) return false
  if (state.aesthetic && !(m.tags?.aesthetic || []).includes(state.aesthetic)) return false
  if (state.domain && !(m.domain || []).includes(state.domain)) return false
  return true
}

const createEl = (tag, className = '', text = '') => {
  const el = document.createElement(tag)
  if (className) el.className = className
  if (text) el.textContent = text
  return el
}

const pill = (label, active, onClick) => {
  const btn = createEl('button', active
    ? 'inline-flex items-center rounded-full border border-zinc-950 bg-zinc-950 px-3 py-1 text-xs font-semibold text-white'
    : 'inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50'
  )
  btn.type = 'button'
  btn.textContent = label
  btn.addEventListener('click', onClick)
  return btn
}

let listContainer = null

const renderList = () => {
  if (!listContainer) return
  listContainer.innerHTML = ''
  const filtered = templates.filter(matches)
  
  // Update count
  const countEl = document.getElementById('count-display')
  if (countEl) countEl.textContent = `${filtered.length} / ${templates.length}`

  for (const t of filtered) {
    const card = createEl('div', 'overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm')
    
    const header = createEl('div', 'border-b border-zinc-200 p-4')
    const flexTop = createEl('div', 'flex items-start justify-between gap-4')
    
    const infoBox = createEl('div')
    infoBox.appendChild(createEl('div', 'text-xs font-semibold text-zinc-500 uppercase tracking-wider', t.meta.kind))
    infoBox.appendChild(createEl('div', 'mt-1 text-sm font-semibold text-zinc-950', t.meta.name))
    infoBox.appendChild(createEl('div', 'mt-1 text-xs text-zinc-500', t.meta.id))
    
    const actionBox = createEl('div', 'flex items-center gap-3')
    const openBtn = createEl('button', 'rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-50', 'Open')
    openBtn.type = 'button'
    openBtn.dataset.openTemplate = t.meta.id
    actionBox.appendChild(openBtn)
    
    if (t.meta.source?.url) {
      const srcLink = createEl('a', 'text-xs font-semibold text-zinc-700 underline-offset-4 hover:underline', 'Source')
      try {
        srcLink.href = new URL(t.meta.source.url).href
      } catch {
        srcLink.href = '#'
      }
      srcLink.target = '_blank'
      actionBox.appendChild(srcLink)
    }
    
    flexTop.appendChild(infoBox)
    flexTop.appendChild(actionBox)
    header.appendChild(flexTop)
    
    const tagsBox = createEl('div', 'mt-3 flex flex-wrap gap-2')
    const tagLine = [
      ...(t.meta.domain || []),
      ...(t.meta.tags?.aesthetic || []),
      t.meta.tags?.theme,
      ...(t.meta.tags?.palette || [])
    ].filter(Boolean).slice(0, 8)
    
    for (const tag of tagLine) {
      tagsBox.appendChild(createEl('span', 'rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-700', tag))
    }
    header.appendChild(tagsBox)
    card.appendChild(header)
    
    const previewBox = createEl('div', 'bg-zinc-50 p-3')
    const previewInner = createEl('div', 'relative h-64 overflow-hidden rounded-xl border border-zinc-200 bg-white')
    const previewScale = createEl('div', 'pointer-events-none origin-top-left scale-[0.28] w-[1200px]')
    // Using innerHTML here for template preview rendering (assumes templates are trusted code)
    previewScale.innerHTML = t.html
    previewInner.appendChild(previewScale)
    previewBox.appendChild(previewInner)
    
    card.appendChild(previewBox)
    listContainer.appendChild(card)
  }
}

const renderFilters = (container) => {
  container.innerHTML = ''
  
  const row1 = createEl('div', 'flex flex-wrap items-center gap-2')
  row1.appendChild(pill('Aesthetic: All', !state.aesthetic, () => { state.aesthetic = null; renderFilters(container); renderList() }))
  for (const s of allAesthetics) {
    row1.appendChild(pill(s, state.aesthetic === s, () => { state.aesthetic = state.aesthetic === s ? null : s; renderFilters(container); renderList() }))
  }
  
  const row2 = createEl('div', 'mt-3 flex flex-wrap items-center gap-2')
  row2.appendChild(pill('Domain: All', !state.domain, () => { state.domain = null; renderFilters(container); renderList() }))
  for (const d of allDomains) {
    row2.appendChild(pill(d, state.domain === d, () => { state.domain = state.domain === d ? null : d; renderFilters(container); renderList() }))
  }
  
  container.appendChild(row1)
  container.appendChild(row2)
}

const init = () => {
  const root = document.querySelector('#app')
  root.className = 'min-h-svh bg-zinc-50'
  root.innerHTML = ''

  const header = createEl('div', 'border-b border-zinc-200 bg-white')
  header.innerHTML = `
    <div class="mx-auto max-w-7xl px-6 py-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div class="text-xs font-semibold text-zinc-500">UI Gallery</div>
          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Templates v1.0</h1>
          <div class="mt-2 text-sm text-zinc-600">Aesthetic · Domain · Theme</div>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            id="search"
            class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-100 sm:w-72"
            placeholder="Search..."
            type="search"
          />
          <div id="count-display" class="text-sm font-semibold text-zinc-700"></div>
        </div>
      </div>
    </div>
  `
  root.appendChild(header)

  const filters = createEl('div', 'mx-auto max-w-7xl px-6 py-6')
  renderFilters(filters)
  root.appendChild(filters)

  const gridWrap = createEl('div', 'mx-auto max-w-7xl px-6 pb-14')
  listContainer = createEl('div', 'grid gap-4 md:grid-cols-2 xl:grid-cols-3')
  gridWrap.appendChild(listContainer)
  root.appendChild(gridWrap)

  // Debounce search
  let timer
  const searchInput = document.getElementById('search')
  searchInput.addEventListener('input', (e) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      state.q = e.target.value || ''
      renderList()
    }, 150)
  })

  renderList()
}

init()

// Modal logic for full screen preview
const renderModal = () => {
  let overlay = document.getElementById('preview-modal')
  if (!state.activeId) {
    if (overlay) overlay.remove()
    document.body.style.overflow = ''
    return
  }

  const t = templates.find((x) => x.meta.id === state.activeId)
  if (!t) return

  if (!overlay) {
    overlay = createEl('div', 'fixed inset-0 z-50 flex flex-col bg-zinc-950/80 backdrop-blur-sm')
    overlay.id = 'preview-modal'
    
    const header = createEl('div', 'flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-6 py-4')
    const title = createEl('div', 'text-sm font-semibold text-white')
    title.id = 'modal-title'
    const closeBtn = createEl('button', 'rounded bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700 hover:text-white', 'Close (ESC)')
    closeBtn.addEventListener('click', () => {
      state.activeId = null
      renderModal()
      window.location.hash = ''
    })
    
    header.appendChild(title)
    header.appendChild(closeBtn)
    overlay.appendChild(header)
    
    const contentWrap = createEl('div', 'flex-1 overflow-auto p-4 sm:p-8')
    contentWrap.id = 'modal-content-wrap'
    // click outside to close
    contentWrap.addEventListener('click', (e) => {
      if (e.target === contentWrap) {
        state.activeId = null
        renderModal()
        window.location.hash = ''
      }
    })
    
    const contentInner = createEl('div', 'mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-900/5')
    contentInner.id = 'modal-content-inner'
    contentWrap.appendChild(contentInner)
    
    overlay.appendChild(contentWrap)
    document.body.appendChild(overlay)
  }
  
  document.getElementById('modal-title').textContent = `${t.meta.name} (${t.meta.id})`
  // HTML rendering
  document.getElementById('modal-content-inner').innerHTML = t.html
  document.body.style.overflow = 'hidden'
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-open-template]')
  if (btn) {
    state.activeId = btn.dataset.openTemplate
    window.location.hash = state.activeId
    renderModal()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.activeId) {
    state.activeId = null
    window.location.hash = ''
    renderModal()
  }
})

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1)
  if (hash && templates.some((t) => t.meta.id === hash)) {
    state.activeId = hash
    renderModal()
  } else if (!hash && state.activeId) {
    state.activeId = null
    renderModal()
  }
})

if (window.location.hash) {
  const hash = window.location.hash.slice(1)
  if (templates.some((t) => t.meta.id === hash)) {
    state.activeId = hash
    renderModal()
  }
}
