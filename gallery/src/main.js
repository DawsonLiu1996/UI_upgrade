import './output.css'

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
  const id = folder
  const entry = byId.get(id)
  if (entry) entry.html = html
}

const templates = Array.from(byId.values())
  .filter((t) => t.meta && t.html)
  .sort((a, b) => a.meta.id.localeCompare(b.meta.id))

const state = {
  q: '',
  style: null,
  color: null,
  activeId: null,
}

const uniq = (arr) => Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b))

const allStyles = uniq(
  templates.flatMap((t) => (Array.isArray(t.meta.tags?.style) ? t.meta.tags.style : [])).filter(Boolean),
)
const allColors = uniq(
  templates.flatMap((t) => (Array.isArray(t.meta.tags?.color) ? t.meta.tags.color : [])).filter(Boolean),
)

const matches = (t) => {
  const hay = `${t.meta.name} ${t.meta.type} ${t.meta.id}`.toLowerCase()
  if (state.q && !hay.includes(state.q.toLowerCase())) return false
  if (state.style && !(t.meta.tags?.style || []).includes(state.style)) return false
  if (state.color && !(t.meta.tags?.color || []).includes(state.color)) return false
  return true
}

const pill = (label, active, onClick) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.className = active
    ? 'inline-flex items-center rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white'
    : 'inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50'
  btn.textContent = label
  btn.addEventListener('click', onClick)
  return btn
}

const render = () => {
  const root = document.querySelector('#app')
  root.className = 'min-h-svh bg-zinc-50'
  root.innerHTML = ''

  const header = document.createElement('div')
  header.className = 'border-b border-zinc-200 bg-white'
  header.innerHTML = `
    <div class="mx-auto max-w-7xl px-6 py-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div class="text-xs font-semibold text-zinc-500">UI Gallery</div>
          <h1 class="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">Templates</h1>
          <div class="mt-2 text-sm text-zinc-600">Style-first tags · Color second · Feature optional</div>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            id="search"
            class="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-100 sm:w-72"
            placeholder="Search by name / type / id"
            type="search"
            value="${state.q.replaceAll('"', '&quot;')}"
          />
          <div class="text-sm font-semibold text-zinc-700">${templates.filter(matches).length} / ${templates.length}</div>
        </div>
      </div>
    </div>
  `
  root.appendChild(header)

  const filters = document.createElement('div')
  filters.className = 'mx-auto max-w-7xl px-6 py-6'

  const row1 = document.createElement('div')
  row1.className = 'flex flex-wrap items-center gap-2'
  row1.appendChild(
    pill(state.style ? `Style: ${state.style}` : 'Style: All', !state.style, () => {
      state.style = null
      render()
    }),
  )
  for (const s of allStyles) {
    row1.appendChild(
      pill(s, state.style === s, () => {
        state.style = state.style === s ? null : s
        render()
      }),
    )
  }

  const row2 = document.createElement('div')
  row2.className = 'mt-3 flex flex-wrap items-center gap-2'
  row2.appendChild(
    pill(state.color ? `Color: ${state.color}` : 'Color: All', !state.color, () => {
      state.color = null
      render()
    }),
  )
  for (const c of allColors) {
    row2.appendChild(
      pill(c, state.color === c, () => {
        state.color = state.color === c ? null : c
        render()
      }),
    )
  }

  filters.appendChild(row1)
  filters.appendChild(row2)
  root.appendChild(filters)

  const gridWrap = document.createElement('div')
  gridWrap.className = 'mx-auto max-w-7xl px-6 pb-14'

  const grid = document.createElement('div')
  grid.className = 'grid gap-4 md:grid-cols-2 xl:grid-cols-3'

  for (const t of templates.filter(matches)) {
    const card = document.createElement('div')
    card.className = 'overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm'

    const tagLine = [
      ...(t.meta.tags?.style || []),
      ...(t.meta.tags?.color || []),
      ...(t.meta.tags?.features || []),
    ]
      .filter(Boolean)
      .slice(0, 8)

    card.innerHTML = `
      <div class="border-b border-zinc-200 p-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-xs font-semibold text-zinc-500">${t.meta.type}</div>
            <div class="mt-1 text-sm font-semibold text-zinc-950">${t.meta.name}</div>
            <div class="mt-1 text-xs text-zinc-500">${t.meta.id}</div>
          </div>
          <div class="flex items-center gap-3">
            <button
              type="button"
              data-open-template="${t.meta.id}"
              class="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Open
            </button>
            <a class="text-xs font-semibold text-zinc-700 underline-offset-4 hover:underline" href="${t.meta.source?.url || '#'}" target="_blank" rel="noreferrer">
              Source
            </a>
          </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          ${tagLine
            .map(
              (tag) =>
                `<span class="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-semibold text-zinc-700">${tag}</span>`,
            )
            .join('')}
        </div>
      </div>
      <div class="bg-zinc-50 p-3">
        <div class="relative h-64 overflow-hidden rounded-xl border border-zinc-200 bg-white">
          <div class="pointer-events-none origin-top-left scale-[0.28] w-[1200px]">${t.html}</div>
        </div>
      </div>
    `
    grid.appendChild(card)
  }

  gridWrap.appendChild(grid)
  root.appendChild(gridWrap)

  const search = document.querySelector('#search')
  if (search) {
    search.addEventListener('input', (e) => {
      state.q = e.target.value || ''
      render()
    })
  }

  const openButtons = root.querySelectorAll('[data-open-template]')
  for (const btn of openButtons) {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-template')
      if (!id) return
      state.activeId = id
      location.hash = `#${id}`
      render()
    })
  }

  const fromHash = location.hash?.startsWith('#') ? location.hash.slice(1) : null
  if (fromHash && !state.activeId) state.activeId = fromHash

  if (state.activeId) {
    const t = templates.find((x) => x.meta.id === state.activeId)
    if (t) {
      const modal = document.createElement('div')
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
      modal.innerHTML = `
        <div class="absolute inset-0" data-close-template="1"></div>
        <div class="relative max-h-[92svh] w-full max-w-6xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
          <div class="flex items-start justify-between gap-4 border-b border-zinc-200 bg-white px-5 py-4">
            <div>
              <div class="text-xs font-semibold text-zinc-500">${t.meta.type}</div>
              <div class="mt-1 text-sm font-semibold text-zinc-950">${t.meta.name}</div>
              <div class="mt-1 text-xs text-zinc-500">${t.meta.id}</div>
            </div>
            <div class="flex items-center gap-3">
              <a class="text-xs font-semibold text-zinc-700 underline-offset-4 hover:underline" href="${t.meta.source?.url || '#'}" target="_blank" rel="noreferrer">
                Source
              </a>
              <button type="button" data-close-template="1" class="rounded-xl bg-zinc-950 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-900">
                Close
              </button>
            </div>
          </div>
          <div class="max-h-[calc(92svh-64px)] overflow-auto bg-zinc-50 p-4">
            <div class="rounded-xl border border-zinc-200 bg-white">${t.html}</div>
          </div>
        </div>
      `
      root.appendChild(modal)

      const closeButtons = modal.querySelectorAll('[data-close-template]')
      for (const c of closeButtons) {
        c.addEventListener('click', () => {
          state.activeId = null
          history.replaceState(null, '', location.pathname + location.search)
          render()
        })
      }

      const esc = (e) => {
        if (e.key === 'Escape') {
          state.activeId = null
          history.replaceState(null, '', location.pathname + location.search)
          render()
        }
      }
      window.addEventListener('keydown', esc, { once: true })
    }
  }
}

render()
