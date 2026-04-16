# Tasks
- [x] Task 1: 标记 v1.0 版本
  - [x] SubTask 1.1: 在当前 `main` 分支上创建 `v1.0` Git 标签并推送到远程仓库。
- [x] Task 2: 分类优化与数据迁移
  - [x] SubTask 2.1: 编写一个 Node.js 迁移脚本，将现有的 100 个 `meta.json` 转换为新的“稳定主类 + 多维受控标签”分类模型（提取 `kind`, `domain`, `aesthetic`, `theme`, `palette` 等）。
  - [x] SubTask 2.2: 运行脚本更新所有的 `meta.json` 并提交更改。
- [x] Task 3: 代码层级优化 (Gallery)
  - [x] SubTask 3.1: 更新 `gallery/package.json`，移除 `npx` 并发命令，采用标准的 `vite` 启动方式。
  - [x] SubTask 3.2: 更新 `gallery/vite.config.js`，将 `fs.allow` 收窄至仅包含 `['../templates']`。
  - [x] SubTask 3.3: 更新 `gallery/src/main.js`，修复 `innerHTML` 带来的 XSS 隐患（使用 `textContent` 或严格转义），并适配新的 `meta.json` 字段进行渲染和过滤。
  - [x] SubTask 3.4: 更新 `.gitignore`，忽略生成的 CSS 产物。
- [x] Task 4: 开发“风格驱动模板生成器” (Skill)
  - [x] SubTask 4.1: 在项目根目录创建 `scripts/generate-template.js`，设计其接收的 CLI 参数（如风格、主题、配色等）。
  - [x] SubTask 4.2: 在脚本中实现“风格标志物”的强制映射逻辑（如 `glassmorphism` 对应 `backdrop-blur ring-1 ring-white/10` 等 Tailwind 类）。
  - [x] SubTask 4.3: 测试运行脚本，验证是否能成功生成一个包含强制风格类的新模板（如 101-xxx）。

# Task Dependencies
- Task 3 depends on Task 2 (由于需要适配新的 JSON 数据结构)
- Task 4 depends on Task 2 (生成的新模板 meta 需符合新规范)
