# Generate Batch 4 & 5 Templates Spec

## Why
目前 Gallery 已经收集了 50 个样板，但为了构建一个具备充足覆盖面的 UI 样板库，50 个仍然不够。我们需要继续扩充，以达成 100 个样板的长期目标。接下来的批次将继续保持高质量和强差异化风格。

## What Changes
- 新增 50 个高质量 Tailwind UI 样板组件（编号 051-100），继续覆盖业务场景，包括更复杂的模块如多级数据表格、日历组件、聊天气泡、时间轴等。
- 继续保持和强调“风格标志物”（玻璃态、极简风、Brutalist、新拟物、品牌色高亮等）。
- 确保在样板数量翻倍（达到 100 个）后，Gallery 预览页面的 Vite 构建速度、加载性能、标签筛选、全尺寸查看等功能完整无损。

## Impact
- Affected specs: UI 样板库内容扩充（目标达到 100 个组件）
- Affected code: `/workspace/templates/051-*` 至 `/workspace/templates/100-*`
- Affected systems: Vite 动态导入 `import.meta.glob` 性能及 Tailwind `output.css` 大小。

## ADDED Requirements
### Requirement: 批量新增 50 个样板
系统需提供第 51 至 100 个独立的 HTML+Tailwind 样板组件。

#### Scenario: 成功渲染与检索 100 个组件
- **WHEN** 用户在浏览器中打开 Gallery 页面
- **THEN** 能够看到新增的 50 个样板，总数达到 100 个。
- **THEN** 支持通过 Style/Color 标签筛选和搜索所有样板。
- **THEN** 点击 Open 按钮可正常触发全屏弹层，预览样板时其特定样式（如光晕、高光、毛玻璃、品牌色）完整呈现。
