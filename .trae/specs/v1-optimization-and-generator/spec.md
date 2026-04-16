# V1 Optimization and Style Generator Spec

## Why
目前 Gallery 项目已经完成了 100 个样板的收集，达到了 v1.0 里程碑，需要通过打标签记录该稳定版本。同时，通过全面审计发现，当前的 `meta.json` 分类维度混乱（`type` 和 `tags` 定义不清），`gallery` 核心代码存在性能瓶颈（DOM 全量重绘）、安全隐患（XSS 和 `fs.allow` 过宽）及构建流程不规范的问题。最后，需要将现有的设计规范提炼为一个“基于风格维度”驱动的模板生成器，以固化和复用这些“风格标志物”。

## What Changes
- 给 `main` 分支打上 `v1.0` 标签并推送到远程。
- 重构 `meta.json` 数据模型：将 `type` 废弃，拆分为受控的 `kind`、`domain`，并细化 `tags`（如 `aesthetic`, `palette`, `theme`, `patterns` 等），并批量转换现有 100 个模板的数据。
- 优化 `gallery` 代码层：
  - 构建：修改 `package.json` 和 `vite.config.js`，让 Vite 插件接管 Tailwind 构建，移除不稳定的并发命令，将 `output.css` 移出版本控制。
  - 安全与性能：收敛 `server.fs.allow` 权限；修复 `main.js` 中的 `innerHTML` 注入漏洞，改用安全的 DOM 操作或进行转义；优化搜索时的 DOM 渲染逻辑。
- 新增 Style Generator（风格生成器）：编写一个 Node.js 命令行脚本，接受风格维度参数（如 `aesthetic=glassmorphism`, `theme=dark`），并在生成的样板代码中强制注入对应的“风格标志物”（Tailwind 类组合）。

## Impact
- Affected specs: `gallery` 核心架构与 `templates` 元数据分类体系。
- Affected code:
  - `templates/**/meta.json`
  - `gallery/src/main.js`
  - `gallery/vite.config.js`
  - `gallery/package.json`
  - `gallery/.gitignore`
  - `scripts/generate-template.js` (新增)

## ADDED Requirements
### Requirement: 风格驱动的模板生成器
系统应提供一个内部工具（脚本），通过输入特定的风格维度，自动生成符合规范的模板基础结构。

#### Scenario: 成功生成新模板
- **WHEN** 开发者运行 `node scripts/generate-template.js --name "Test Card" --aesthetic "glassmorphism" --theme "dark"`
- **THEN** 脚本会在 `templates/` 下创建一个新的目录。
- **THEN** 生成的 `index.html` 强制包含毛玻璃效果（如 `backdrop-blur`, `bg-white/10`）和暗色模式相关的 Tailwind 标志物类名。
- **THEN** 生成的 `meta.json` 自动符合最新的分类法规范。

## MODIFIED Requirements
### Requirement: 安全且高性能的 Gallery 渲染
- Gallery 的搜索与渲染必须避免 XSS 注入，`vite.config.js` 必须限制文件系统访问边界。
