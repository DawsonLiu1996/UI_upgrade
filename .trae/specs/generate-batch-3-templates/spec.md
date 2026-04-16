# Generate Batch 3 Templates Spec

## Why
前两批样板（共 30 个）风格验证通过且修复了 Tailwind 的样式扫描 BUG。现在需要在此基础上，兼顾 Gallery 性能和功能完整性，继续收集并生成下一批高质量样板，以丰富组件库的内容和风格维度。

## What Changes
- 新增 20 个高质量 Tailwind UI 样板组件（编号 031-050），覆盖更多业务场景（如高级表单、应用后台 Shell、统计图表卡片、通知组件等）。
- 继续采用强差异化风格（玻璃拟态、新拟物、编辑排版、强品牌色等），每个样板携带显著的“风格标志物”。
- 确保在样板数量增加后，Gallery 预览页面的 Vite 构建速度、加载性能、标签筛选、全尺寸查看等功能完整无损。

## Impact
- Affected specs: UI 样板库内容扩充
- Affected code: `/workspace/templates/031-*` 至 `/workspace/templates/050-*`
- Affected systems: Vite 动态导入 `import.meta.glob` 性能及 Tailwind `output.css` 大小。

## ADDED Requirements
### Requirement: 批量新增样板
系统需提供第 31 至 50 个独立的 HTML+Tailwind 样板组件。

#### Scenario: 成功渲染与检索
- **WHEN** 用户在浏览器中打开 Gallery 页面
- **THEN** 能够看到新增的 20 个样板，总数达到 50 个。
- **THEN** 支持通过 Style/Color 标签筛选和搜索所有样板。
- **THEN** 点击 Open 按钮可正常触发全屏弹层，预览样板时其特定样式（如光晕、高光、毛玻璃、品牌色）完整呈现。
