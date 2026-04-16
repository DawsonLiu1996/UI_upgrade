const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'templates');

// Ensure templates directory exists
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

const templates = [
  {
    id: '031',
    name: 'Side Drawer (侧滑抽屉)',
    style: 'Material/深邃阴影/层叠遮罩',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Side Drawer - Material Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 font-sans antialiased h-screen overflow-hidden flex relative">
  <!-- Content -->
  <main class="flex-1 p-8 transition-all duration-300 filter blur-sm">
    <h1 class="text-3xl font-bold text-slate-800 mb-4">Dashboard</h1>
    <p class="text-slate-600">The content is blurred to focus on the drawer.</p>
  </main>

  <!-- Backdrop -->
  <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300"></div>

  <!-- Drawer -->
  <aside class="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 translate-x-0 flex flex-col">
    <div class="p-6 border-b border-slate-100">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-slate-800">Settings</h2>
        <button class="text-slate-400 hover:text-slate-600 rounded-full p-2 hover:bg-slate-50 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      <p class="text-sm text-slate-500 mt-1">Manage your preferences.</p>
    </div>
    
    <div class="flex-1 overflow-y-auto p-4">
      <ul class="space-y-2">
        <li>
          <a href="#" class="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <span>Billing</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="p-6 border-t border-slate-100 bg-slate-50">
      <button class="w-full py-2.5 px-4 bg-white border border-slate-200 shadow-sm text-slate-700 font-medium rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
        Sign Out
      </button>
    </div>
  </aside>
</body>
</html>`,
    meta: {
      name: "Side Drawer",
      source: "MUI Drawer",
      type: "Sidebar",
      tags: ["Material", "蓝灰系", "侧边栏", "层叠遮罩", "移动端友好", "深邃阴影"],
      description: "侧滑抽屉导航，适合后台与移动端。带有遮罩背景模糊和高层级投影。"
    }
  },
  {
    id: '032',
    name: 'Admin Layout Shell (后台布局壳)',
    style: '现代/后台壳/响应式/深蓝紫',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Layout Shell - Mantine Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans antialiased h-screen flex flex-col overflow-hidden">
  <!-- Header -->
  <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
    <div class="flex items-center space-x-4">
      <div class="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">M</div>
      <span class="text-lg font-bold text-gray-900">AdminShell</span>
    </div>
    <div class="flex items-center space-x-4">
      <div class="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-200 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <img src="https://i.pravatar.cc/100" alt="Avatar" class="w-9 h-9 rounded-full border-2 border-indigo-100 cursor-pointer">
    </div>
  </header>

  <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0">
      <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <a href="#" class="flex items-center space-x-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <span>Dashboard</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md text-sm font-medium transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <span>Users</span>
        </a>
        <a href="#" class="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md text-sm font-medium transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          <span>Analytics</span>
        </a>
      </nav>
      <div class="p-4 border-t border-gray-200">
        <div class="bg-gray-50 rounded-md p-3 text-center border border-gray-100">
          <p class="text-xs text-gray-500 mb-2">Pro Plan</p>
          <button class="w-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 py-1.5 rounded hover:bg-gray-50 transition">Upgrade</button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 bg-gray-50 p-8 overflow-y-auto">
      <div class="max-w-5xl mx-auto">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">Overview</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 class="text-sm font-medium text-gray-500 mb-1">Total Revenue</h3>
            <p class="text-2xl font-bold text-gray-900">$45,231.89</p>
            <p class="text-xs text-green-600 mt-2 font-medium">+20.1% from last month</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 class="text-sm font-medium text-gray-500 mb-1">Subscriptions</h3>
            <p class="text-2xl font-bold text-gray-900">+2,350</p>
            <p class="text-xs text-green-600 mt-2 font-medium">+180.1% from last month</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 class="text-sm font-medium text-gray-500 mb-1">Active Now</h3>
            <p class="text-2xl font-bold text-gray-900">+573</p>
            <p class="text-xs text-gray-500 mt-2 font-medium">+201 since last hour</p>
          </div>
        </div>
        <div class="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm h-96 flex items-center justify-center">
          <p class="text-gray-400">Chart Area Placeholder</p>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,
    meta: {
      name: "Admin Layout Shell",
      source: "Mantine AppShell",
      type: "Layout",
      tags: ["现代", "后台壳", "蓝紫系", "响应式", "可组合", "卡片面板"],
      description: "现代后台布局骨架，包含 Header、Sidebar 和 Content 区，信息密度适中。"
    }
  },
  {
    id: '033',
    name: 'Rich Text Article (富文本文章)',
    style: '极简/深色模式/大留白',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rich Text Article - Linear Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .glow-text { text-shadow: 0 0 20px rgba(255,255,255,0.1); }
  </style>
</head>
<body class="bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-purple-500/30 selection:text-purple-200">
  <div class="max-w-3xl mx-auto px-6 py-20">
    <header class="mb-16">
      <div class="flex items-center space-x-3 text-sm text-[#888] mb-6">
        <span class="bg-[#222] px-2.5 py-1 rounded-full text-[#eee] border border-[#333]">Product Update</span>
        <span>October 24, 2023</span>
      </div>
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 glow-text">Introducing the new Insights Dashboard</h1>
      <p class="text-xl text-[#a1a1a1] leading-relaxed">A completely reimagined analytics experience designed for speed, clarity, and deep exploration of your team's velocity.</p>
    </header>

    <article class="prose prose-invert prose-lg max-w-none prose-p:text-[#a1a1a1] prose-p:leading-relaxed prose-headings:text-[#ededed] prose-headings:font-medium prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-[#333]">
      <p>We've spent the last three months rebuilding our insights engine from the ground up. The new architecture allows for sub-second query times even across millions of issues, while the frontend has been refined to present complex data elegantly.</p>
      
      <div class="my-12 p-1 rounded-2xl bg-gradient-to-b from-[#333] to-[#111]">
        <div class="bg-[#111] rounded-xl p-8 aspect-video flex items-center justify-center text-[#555] border border-[#222]">
          [ Hero Image / Video Placeholder ]
        </div>
      </div>

      <h2 class="text-2xl mt-12 mb-6">Real-time Velocity Tracking</h2>
      <p>No more waiting for overnight batch jobs. As issues are completed, your team's velocity charts update instantly. We achieve this by utilizing a distributed stream processing pipeline built on modern event-driven architecture.</p>

      <ul class="my-8 space-y-4 text-[#a1a1a1]">
        <li class="flex items-start">
          <svg class="w-6 h-6 text-purple-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span><strong>Sub-second latency</strong> for all chart renders and filtering.</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-purple-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span><strong>Custom dimensions</strong> allow slicing data by assignee, project, or custom tags.</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-purple-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span><strong>Export capabilities</strong> to raw CSV or polished PDF reports.</span>
        </li>
      </ul>

      <p>The update is rolling out to all workspaces starting today. To access it, simply navigate to the "Insights" tab in your sidebar.</p>
    </article>
    
    <footer class="mt-20 pt-8 border-t border-[#222] flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img src="https://i.pravatar.cc/150?u=a" alt="Author" class="w-10 h-10 rounded-full grayscale opacity-80">
        <div>
          <p class="text-sm font-medium text-[#ededed]">Alex Rivera</p>
          <p class="text-xs text-[#888]">Product Designer</p>
        </div>
      </div>
      <div class="flex space-x-3">
        <button class="px-4 py-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#ededed] rounded-lg text-sm border border-[#333] transition-colors">Share</button>
      </div>
    </footer>
  </div>
</body>
</html>`,
    meta: {
      name: "Rich Text Article",
      source: "Linear Updates",
      type: "Page/Blog",
      tags: ["极简", "深色模式", "大留白", "科技感", "排版强", "高对比"],
      description: "现代 SaaS 更新列表页/博客详情页的排版。采用深色背景与大字体排版，极简克制。"
    }
  },
  {
    id: '034',
    name: 'Step Wizard (分步向导)',
    style: '新拟物/企业风/品牌色',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Step Wizard - Neumorphism Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .neu-flat { background: #e0e5ec; box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5); }
    .neu-pressed { background: #e0e5ec; box-shadow: inset 6px 6px 10px 0 rgba(163,177,198, 0.6), inset -6px -6px 10px 0 rgba(255,255,255, 0.5); }
    .neu-convex { background: linear-gradient(145deg, #f0f5fd, #cacfd4); box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5); }
  </style>
</head>
<body class="bg-[#e0e5ec] text-slate-700 font-sans min-h-screen flex items-center justify-center p-6">
  <div class="neu-flat rounded-3xl p-10 w-full max-w-3xl">
    <div class="text-center mb-10">
      <h2 class="text-2xl font-bold text-slate-800 tracking-wide">Account Setup</h2>
      <p class="text-slate-500 mt-2">Complete these steps to unlock all features</p>
    </div>

    <!-- Stepper -->
    <div class="flex items-center justify-between relative mb-12">
      <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0 neu-pressed"></div>
      <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1 bg-blue-500 rounded-full z-0 transition-all duration-500"></div>
      
      <!-- Step 1 (Completed) -->
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-500/40 border-4 border-[#e0e5ec]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span class="absolute top-14 text-sm font-semibold text-blue-600 w-max">Profile Details</span>
      </div>

      <!-- Step 2 (Active) -->
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-12 h-12 rounded-full neu-convex text-blue-600 flex items-center justify-center font-bold border-4 border-white shadow-lg shadow-blue-200">
          2
        </div>
        <span class="absolute top-14 text-sm font-bold text-slate-800 w-max">Company Info</span>
      </div>

      <!-- Step 3 (Pending) -->
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-12 h-12 rounded-full neu-flat text-slate-400 flex items-center justify-center font-bold border-4 border-[#e0e5ec]">
          3
        </div>
        <span class="absolute top-14 text-sm font-medium text-slate-400 w-max">Preferences</span>
      </div>
    </div>

    <!-- Form Area -->
    <div class="neu-pressed rounded-2xl p-8 mb-8 mt-16">
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-600 mb-2">Company Name</label>
          <input type="text" class="w-full bg-[#e0e5ec] border-none rounded-xl px-4 py-3 neu-pressed focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-700 placeholder-slate-400 transition-shadow" placeholder="Acme Corp">
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-600 mb-2">Industry</label>
          <select class="w-full bg-[#e0e5ec] border-none rounded-xl px-4 py-3 neu-pressed focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-700 transition-shadow appearance-none">
            <option>Software Development</option>
            <option>Design Agency</option>
            <option>Marketing</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex justify-between items-center">
      <button class="px-6 py-3 rounded-xl neu-flat text-slate-600 font-semibold hover:text-slate-800 transition-colors focus:outline-none active:neu-pressed">
        Back
      </button>
      <button class="px-8 py-3 rounded-xl bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/50 transition-all focus:outline-none active:scale-95">
        Continue
      </button>
    </div>
  </div>
</body>
</html>`,
    meta: {
      name: "Step Wizard",
      source: "Ant Design Steps / Custom",
      type: "Steps",
      tags: ["新拟物", "柔和UI", "品牌色", "流程引导", "表单向导"],
      description: "采用新拟物风格（Neumorphism）的分步向导，通过柔和的阴影区分层级，适合多步骤表单。"
    }
  },
  {
    id: '035',
    name: 'Payment Checkout (支付表单)',
    style: '金融感/信任/精致',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Checkout - Stripe Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .stripe-shadow { box-shadow: 0 50px 100px -20px rgba(50,50,93,0.1), 0 30px 60px -30px rgba(0,0,0,0.15), inset 0 -2px 6px 0 rgba(10,37,64,0.05); }
    .input-stripe { transition: box-shadow 0.15s ease, border 0.15s ease; }
    .input-stripe:focus-within { box-shadow: 0 0 0 3px rgba(99,91,255,0.2); border-color: #635bff; }
  </style>
</head>
<body class="bg-[#f6f9fc] font-sans min-h-screen flex items-center justify-center p-4">
  <div class="w-full max-w-md bg-white rounded-xl stripe-shadow overflow-hidden">
    <div class="p-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-xl font-bold text-[#32325d] mb-1">Upgrade to Pro</h2>
          <p class="text-sm text-[#525f7f]">Billed $24.00 per month</p>
        </div>
        <div class="w-12 h-12 bg-[#e3e8ee] rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
      </div>

      <!-- Payment Form -->
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-[#32325d] mb-2">Email</label>
          <input type="email" class="w-full px-4 py-3 bg-white border border-[#e3e8ee] rounded-md text-[#32325d] placeholder-[#8898aa] focus:outline-none input-stripe" placeholder="jane@example.com">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-[#32325d] mb-2">Card Information</label>
          <div class="border border-[#e3e8ee] rounded-md bg-white input-stripe overflow-hidden">
            <div class="flex items-center px-4 py-3 border-b border-[#e3e8ee]">
              <svg class="w-5 h-5 text-[#8898aa] mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
              <input type="text" class="w-full border-none focus:outline-none text-[#32325d] placeholder-[#8898aa] bg-transparent" placeholder="Card number">
            </div>
            <div class="flex">
              <input type="text" class="w-1/2 px-4 py-3 border-r border-[#e3e8ee] focus:outline-none text-[#32325d] placeholder-[#8898aa] bg-transparent" placeholder="MM / YY">
              <input type="text" class="w-1/2 px-4 py-3 focus:outline-none text-[#32325d] placeholder-[#8898aa] bg-transparent" placeholder="CVC">
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-[#32325d] mb-2">Name on card</label>
          <input type="text" class="w-full px-4 py-3 bg-white border border-[#e3e8ee] rounded-md text-[#32325d] placeholder-[#8898aa] focus:outline-none input-stripe" placeholder="Jane Doe">
        </div>

        <button type="button" class="w-full mt-6 bg-[#635bff] hover:bg-[#0a2540] text-white font-semibold py-3.5 px-4 rounded-md shadow-[0_4px_6px_rgba(50,50,93,0.11),0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-150 transform hover:-translate-y-px">
          Subscribe
        </button>
      </form>
    </div>
    
    <!-- Footer secure badge -->
    <div class="bg-[#f7fafc] px-8 py-4 border-t border-[#e3e8ee] flex justify-center items-center text-xs text-[#525f7f] font-medium">
      <svg class="w-4 h-4 mr-2 text-[#635bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      Payments are secure and encrypted
    </div>
  </div>
</body>
</html>`,
    meta: {
      name: "Payment Checkout",
      source: "Stripe Payment Element",
      type: "Form/Checkout",
      tags: ["金融感", "精致", "表单", "信任感", "阴影层级"],
      description: "类似 Stripe 的支付结账表单。极具信任感的阴影处理，精细的边框与焦点状态，强调高转化率。"
    }
  },
  {
    id: '036',
    name: 'Marketing Hero (营销页首屏)',
    style: '玻璃态/网格背景/现代',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marketing Hero - Glassmorphism</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); }
    .bg-mesh { background-color: #0f172a; background-image: radial-gradient(at 40% 20%, hsla(280,100%,74%,0.4) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.3) 0px, transparent 50%); }
  </style>
</head>
<body class="bg-mesh min-h-screen font-sans text-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
  
  <!-- Decorative background shapes -->
  <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob"></div>
  <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob animation-delay-2000"></div>

  <!-- Hero Content -->
  <div class="relative z-10 max-w-5xl w-full px-6 text-center">
    <div class="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-cyan-300 mb-8 tracking-wide">
      <span class="flex h-2 w-2 rounded-full bg-cyan-400 mr-2"></span>
      v2.0 is now available
    </div>
    
    <h1 class="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-sm">
      Design at the <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Speed of Thought</span>
    </h1>
    
    <p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
      A completely new set of tools built for modern teams. Collaborate in real-time, build faster, and scale infinitely without leaving the browser.
    </p>
    
    <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <button class="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
        Start for free
      </button>
      <button class="w-full sm:w-auto px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center group">
        <svg class="w-5 h-5 mr-2 text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Watch Demo
      </button>
    </div>

    <!-- Stats Glass Bar -->
    <div class="mt-20 glass-card rounded-2xl p-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <p class="text-4xl font-bold text-white mb-1">99.9%</p>
        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider">Uptime</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-white mb-1">2M+</p>
        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider">Users</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-white mb-1">500+</p>
        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider">Integrations</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-white mb-1">24/7</p>
        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider">Support</p>
      </div>
    </div>
  </div>
</body>
</html>`,
    meta: {
      name: "Marketing Hero",
      source: "Tailwind UI Blocks",
      type: "Page/Sections",
      tags: ["玻璃态", "现代", "营销页", "大留白", "网格渐变背景"],
      description: "现代营销落地页首屏，采用 Mesh Gradient 网格渐变背景和高质感的玻璃态卡片（Glassmorphism）。"
    }
  },
  {
    id: '037',
    name: 'Template Gallery Grid (卡片网格)',
    style: '极简/黑白/粗体/网格',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Template Gallery - Notion Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
    .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); }
  </style>
</head>
<body class="bg-[#ffffff] text-[#111111] antialiased min-h-screen p-8 md:p-16">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <header class="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-[#e5e5e5] pb-8">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Template Gallery</h1>
        <p class="text-lg text-[#666666] max-w-xl">Jumpstart your workspace with pre-built setups. Customize them to fit your exact needs.</p>
      </div>
      <div class="mt-6 md:mt-0 flex space-x-2">
        <button class="px-4 py-2 text-sm font-semibold border border-[#e5e5e5] rounded hover:bg-[#f7f7f7] transition-colors">Filters</button>
        <button class="px-4 py-2 text-sm font-semibold border border-[#e5e5e5] rounded hover:bg-[#f7f7f7] transition-colors flex items-center">
          Sort by: Popular
          <svg class="w-4 h-4 ml-2 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>
    </header>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <!-- Card 1 -->
      <a href="#" class="group block rounded-lg border border-[#e5e5e5] overflow-hidden card-hover bg-white">
        <div class="h-48 bg-[#f7f7f7] border-b border-[#e5e5e5] p-6 flex items-center justify-center text-5xl">
          🗓️
        </div>
        <div class="p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#999999]">Personal</span>
            <span class="px-2 py-0.5 bg-[#f0f0f0] text-xs font-medium rounded text-[#666]">Free</span>
          </div>
          <h3 class="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Habit Tracker</h3>
          <p class="text-sm text-[#666666] line-clamp-2">A simple, effective way to track daily habits and build routines.</p>
        </div>
      </a>

      <!-- Card 2 -->
      <a href="#" class="group block rounded-lg border border-[#e5e5e5] overflow-hidden card-hover bg-white">
        <div class="h-48 bg-[#fcf3f3] border-b border-[#e5e5e5] p-6 flex items-center justify-center text-5xl">
          🚀
        </div>
        <div class="p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#999999]">Startup</span>
            <span class="px-2 py-0.5 bg-[#f0f0f0] text-xs font-medium rounded text-[#666]">Pro</span>
          </div>
          <h3 class="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Company Wiki</h3>
          <p class="text-sm text-[#666666] line-clamp-2">Centralize your company knowledge, policies, and onboarding.</p>
        </div>
      </a>

      <!-- Card 3 -->
      <a href="#" class="group block rounded-lg border border-[#e5e5e5] overflow-hidden card-hover bg-white">
        <div class="h-48 bg-[#f3f8fc] border-b border-[#e5e5e5] p-6 flex items-center justify-center text-5xl">
          📊
        </div>
        <div class="p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#999999]">Design</span>
            <span class="px-2 py-0.5 bg-[#f0f0f0] text-xs font-medium rounded text-[#666]">Free</span>
          </div>
          <h3 class="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Design System Repo</h3>
          <p class="text-sm text-[#666666] line-clamp-2">Document your UI components, brand guidelines, and assets.</p>
        </div>
      </a>

      <!-- Card 4 -->
      <a href="#" class="group block rounded-lg border border-[#e5e5e5] overflow-hidden card-hover bg-white">
        <div class="h-48 bg-[#fcfaf3] border-b border-[#e5e5e5] p-6 flex items-center justify-center text-5xl">
          ✍️
        </div>
        <div class="p-5">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#999999]">Content</span>
            <span class="px-2 py-0.5 bg-[#f0f0f0] text-xs font-medium rounded text-[#666]">Free</span>
          </div>
          <h3 class="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">Content Calendar</h3>
          <p class="text-sm text-[#666666] line-clamp-2">Plan, draft, and publish your blog posts and social media.</p>
        </div>
      </a>
    </div>
  </div>
</body>
</html>`,
    meta: {
      name: "Template Gallery Grid",
      source: "Notion Templates",
      type: "Page/Gallery",
      tags: ["极简", "黑白灰", "卡片网格", "内容密集", "粗体排版"],
      description: "类似 Notion 模板库的极简黑白卡片网格。注重边框、留白和基础排版，去除多余装饰。"
    }
  },
  {
    id: '038',
    name: 'Glassmorphism Navbar (玻璃态导航栏)',
    style: '现代/玻璃感/悬浮/圆角',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glass Navbar - NextUI Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .glass-nav {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
    }
  </style>
</head>
<body class="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 min-h-[200vh] font-sans antialiased">
  
  <!-- Fixed Floating Navbar -->
  <div class="fixed top-4 left-0 w-full flex justify-center z-50 px-4">
    <nav class="glass-nav border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all">
      
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-2 mr-8">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 shadow-md flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <span class="font-bold text-lg text-slate-800 tracking-tight">Acme</span>
      </a>

      <!-- Links (Desktop) -->
      <div class="hidden md:flex items-center space-x-1">
        <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100/50 transition-colors">Features</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100/50 transition-colors">Customers</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-slate-900 bg-white shadow-sm rounded-full transition-colors relative">
          Pricing
          <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"></span>
        </a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100/50 transition-colors">Company</a>
      </div>

      <!-- Actions -->
      <div class="flex items-center space-x-3 ml-auto md:ml-8">
        <a href="#" class="hidden sm:inline-block px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Login</a>
        <a href="#" class="px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
          Sign Up
        </a>
      </div>
    </nav>
  </div>

  <!-- Dummy Content -->
  <div class="pt-40 pb-20 px-8 max-w-4xl mx-auto text-center">
    <h1 class="text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">Scroll down to see the effect</h1>
    <p class="text-xl text-slate-600 mb-12">The navbar stays floating and blurs the colorful background beautifully.</p>
    
    <div class="grid grid-cols-2 gap-8 mb-32">
      <div class="h-64 rounded-3xl bg-white/40 shadow-xl backdrop-blur-sm border border-white/50"></div>
      <div class="h-64 rounded-3xl bg-white/40 shadow-xl backdrop-blur-sm border border-white/50"></div>
    </div>
  </div>

</body>
</html>`,
    meta: {
      name: "Glassmorphism Navbar",
      source: "NextUI Navbar",
      type: "Nav",
      tags: ["现代", "圆角大", "玻璃感", "悬浮", "轻盈"],
      description: "居中悬浮的现代顶部导航栏，采用高斯模糊（backdrop-filter）和药丸状（Pill-shaped）圆角设计。"
    }
  },
  {
    id: '039',
    name: 'Dashboard Analytics (仪表盘)',
    style: '极简/黑白灰/数据密集',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - shadcn/ui Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
  </style>
</head>
<body class="bg-white text-slate-950 antialiased min-h-screen">
  
  <div class="border-b border-slate-200">
    <div class="flex h-16 items-center px-8 max-w-7xl mx-auto">
      <div class="flex items-center space-x-4">
        <div class="w-8 h-8 bg-slate-950 rounded flex items-center justify-center text-white text-xs font-bold">shad</div>
        <nav class="flex items-center space-x-6 text-sm font-medium text-slate-500 ml-6">
          <a href="#" class="text-slate-950 transition-colors">Overview</a>
          <a href="#" class="hover:text-slate-950 transition-colors">Customers</a>
          <a href="#" class="hover:text-slate-950 transition-colors">Products</a>
          <a href="#" class="hover:text-slate-950 transition-colors">Settings</a>
        </nav>
      </div>
      <div class="ml-auto flex items-center space-x-4">
        <div class="relative">
          <svg class="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="search" placeholder="Search..." class="h-9 w-64 rounded-md border border-slate-200 bg-transparent px-3 pl-9 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950">
        </div>
        <div class="h-8 w-8 rounded-full bg-slate-200 border border-slate-300"></div>
      </div>
    </div>
  </div>

  <div class="flex-1 space-y-4 p-8 pt-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between space-y-2">
      <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div class="flex items-center space-x-2">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 h-9 px-4 py-2">
          Jan 20, 2023 - Feb 09, 2023
        </button>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 bg-slate-950 text-slate-50 shadow hover:bg-slate-900 h-9 px-4 py-2">
          Download
        </button>
      </div>
    </div>

    <!-- Metrics Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">Total Revenue</h3>
          <svg class="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div>
          <div class="text-2xl font-bold">$45,231.89</div>
          <p class="text-xs text-slate-500 mt-1">+20.1% from last month</p>
        </div>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">Subscriptions</h3>
          <svg class="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        </div>
        <div>
          <div class="text-2xl font-bold">+2350</div>
          <p class="text-xs text-slate-500 mt-1">+180.1% from last month</p>
        </div>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">Sales</h3>
          <svg class="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </div>
        <div>
          <div class="text-2xl font-bold">+12,234</div>
          <p class="text-xs text-slate-500 mt-1">+19% from last month</p>
        </div>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm p-6">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 class="tracking-tight text-sm font-medium">Active Now</h3>
          <svg class="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        </div>
        <div>
          <div class="text-2xl font-bold">+573</div>
          <p class="text-xs text-slate-500 mt-1">+201 since last hour</p>
        </div>
      </div>
    </div>

    <!-- Charts / List Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4 rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm">
        <div class="p-6 pb-2">
          <h3 class="font-semibold tracking-tight text-lg">Overview</h3>
        </div>
        <div class="p-6 pt-0 h-[300px] flex items-center justify-center">
          <!-- Fake Bar Chart -->
          <div class="flex items-end space-x-2 h-full w-full py-4">
            <div class="bg-slate-900 w-full rounded-sm" style="height: 40%"></div>
            <div class="bg-slate-900 w-full rounded-sm" style="height: 70%"></div>
            <div class="bg-slate-900 w-full rounded-sm" style="height: 30%"></div>
            <div class="bg-slate-900 w-full rounded-sm" style="height: 50%"></div>
            <div class="bg-slate-900 w-full rounded-sm" style="height: 90%"></div>
            <div class="bg-slate-900 w-full rounded-sm" style="height: 60%"></div>
            <div class="bg-slate-900 w-full rounded-sm" style="height: 80%"></div>
          </div>
        </div>
      </div>
      <div class="col-span-3 rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm">
        <div class="p-6 pb-2">
          <h3 class="font-semibold tracking-tight text-lg">Recent Sales</h3>
          <p class="text-sm text-slate-500">You made 265 sales this month.</p>
        </div>
        <div class="p-6 pt-4 space-y-6">
          <div class="flex items-center">
            <div class="w-9 h-9 rounded-full bg-slate-100 mr-4"></div>
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">Olivia Martin</p>
              <p class="text-sm text-slate-500">olivia.martin@email.com</p>
            </div>
            <div class="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div class="flex items-center">
            <div class="w-9 h-9 rounded-full bg-slate-100 mr-4"></div>
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">Jackson Lee</p>
              <p class="text-sm text-slate-500">jackson.lee@email.com</p>
            </div>
            <div class="ml-auto font-medium">+$39.00</div>
          </div>
          <div class="flex items-center">
            <div class="w-9 h-9 rounded-full bg-slate-100 mr-4"></div>
            <div class="space-y-1">
              <p class="text-sm font-medium leading-none">Isabella Nguyen</p>
              <p class="text-sm text-slate-500">isabella.nguyen@email.com</p>
            </div>
            <div class="ml-auto font-medium">+$299.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    meta: {
      name: "Dashboard Analytics",
      source: "shadcn/ui Dashboard Example",
      type: "Page/Dashboard",
      tags: ["极简", "黑白灰", "后台页面", "轻边框", "数据密集", "高质感"],
      description: "典型 shadcn 风格的极简后台仪表盘页面。黑白灰配色，细边框和轻微的投影，强调数据内容。"
    }
  },
  {
    id: '040',
    name: 'Settings Panel (设置面板)',
    style: '原生感/iOS HIG/圆角分组',
    html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Settings Panel - Apple HIG Style</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif; }
    /* Custom Toggle Switch */
    .toggle-checkbox:checked { right: 0; border-color: #34C759; }
    .toggle-checkbox:checked + .toggle-label { background-color: #34C759; }
    .toggle-checkbox { right: 4px; z-index: 1; border-color: #e5e5ea; transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1); }
    .toggle-label { width: 51px; height: 31px; background-color: #e5e5ea; border-radius: 9999px; transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1); }
  </style>
</head>
<body class="bg-[#F2F2F7] text-[#000000] antialiased flex justify-center py-12 px-4">
  
  <div class="w-full max-w-lg">
    <h1 class="text-3xl font-bold mb-6 px-4">Settings</h1>

    <!-- Section 1 -->
    <div class="mb-8">
      <h2 class="text-[13px] uppercase tracking-wide text-[#8E8E93] font-normal mb-2 px-4">Network & Connections</h2>
      <div class="bg-white rounded-[10px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        
        <!-- List Item 1 -->
        <div class="flex items-center justify-between p-3.5 pl-4 border-b border-[#E5E5EA]">
          <div class="flex items-center space-x-3">
            <div class="w-7 h-7 rounded-md bg-[#FF9500] flex items-center justify-center text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </div>
            <span class="text-[17px] font-normal">Airplane Mode</span>
          </div>
          <div class="relative inline-block w-[51px] mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="toggle1" class="toggle-checkbox absolute block w-[27px] h-[27px] rounded-full bg-white border-4 appearance-none cursor-pointer top-[2px]"/>
            <label for="toggle1" class="toggle-label block overflow-hidden cursor-pointer"></label>
          </div>
        </div>

        <!-- List Item 2 -->
        <a href="#" class="flex items-center justify-between p-3.5 pl-4 border-b border-[#E5E5EA] bg-white active:bg-[#D1D1D6] transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-7 h-7 rounded-md bg-[#007AFF] flex items-center justify-center text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
            </div>
            <span class="text-[17px] font-normal">Wi-Fi</span>
          </div>
          <div class="flex items-center space-x-2 text-[#8E8E93]">
            <span class="text-[17px]">Home_Network</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </a>

        <!-- List Item 3 -->
        <a href="#" class="flex items-center justify-between p-3.5 pl-4 bg-white active:bg-[#D1D1D6] transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-7 h-7 rounded-md bg-[#007AFF] flex items-center justify-center text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <span class="text-[17px] font-normal">Bluetooth</span>
          </div>
          <div class="flex items-center space-x-2 text-[#8E8E93]">
            <span class="text-[17px]">On</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </a>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="mb-8">
      <h2 class="text-[13px] uppercase tracking-wide text-[#8E8E93] font-normal mb-2 px-4">Notifications</h2>
      <div class="bg-white rounded-[10px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        
        <div class="flex items-center justify-between p-3.5 pl-4 border-b border-[#E5E5EA]">
          <div class="flex items-center space-x-3">
            <div class="w-7 h-7 rounded-md bg-[#FF3B30] flex items-center justify-center text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
            <span class="text-[17px] font-normal">Allow Notifications</span>
          </div>
          <div class="relative inline-block w-[51px] mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="toggle2" checked class="toggle-checkbox absolute block w-[27px] h-[27px] rounded-full bg-white border-4 appearance-none cursor-pointer top-[2px]"/>
            <label for="toggle2" class="toggle-label block overflow-hidden cursor-pointer"></label>
          </div>
        </div>
        
        <a href="#" class="flex items-center justify-between p-3.5 pl-4 bg-white active:bg-[#D1D1D6] transition-colors">
          <div class="flex items-center space-x-3">
            <div class="w-7 h-7 rounded-md bg-[#5856D6] flex items-center justify-center text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </div>
            <span class="text-[17px] font-normal">Focus</span>
          </div>
          <div class="flex items-center space-x-2 text-[#8E8E93]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </a>

      </div>
      <p class="px-4 mt-2 text-[13px] text-[#8E8E93]">Choose which apps can send you notifications and how they appear on your screen.</p>
    </div>

  </div>
</body>
</html>`,
    meta: {
      name: "Settings Panel",
      source: "Apple HIG Modality",
      type: "Modal/Page",
      tags: ["极简", "原生感", "留白", "圆角分组", "列表"],
      description: "原生 iOS 设置面板风格。灰色背景、圆角白色分组卡片（Grouped List）、自定义 Switch 开关，视觉层次清晰。"
    }
  }
];

templates.forEach(t => {
  const dirPath = path.join(templatesDir, t.id);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFileSync(path.join(dirPath, 'index.html'), t.html);
  fs.writeFileSync(path.join(dirPath, 'meta.json'), JSON.stringify(t.meta, null, 2));
});

console.log("Templates 031-040 generated successfully.");
