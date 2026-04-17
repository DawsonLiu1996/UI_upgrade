# Plan: 创建 ui-styler 风格调整 Skill

## 1. 目标与总结
将当前项目中的 100 种 UI 模板转化为一个 Trae 专属的 Skill，命名为 `ui-styler`。该 Skill 能够在用户要求“修改已有UI组件”或“创建全新UI页面”时被触发，并通过应用这 100 个样板文件中的 Tailwind 样式和结构来实现多达 100 种风格的 UI 调整。为了让 Skill 具备完全自包含的能力，计划将所有的模板文件移动到 Skill 的专属目录下。

## 2. 当前状态分析
- 当前项目在 `d:\code\UI-upgrade\templates` 目录下包含了 100 个子目录（如 `001-hero-gradient-product` 等）。
- 每个模板子目录均包含 `index.html`（HTML结构和 Tailwind 样式）与 `meta.json`（模板的元数据、主题、来源等）。
- 项目根目录下有一个 `ui_candidates_list.md` 文件，列出了 UI 候选项的信息。

## 3. 拟进行的更改
1. **创建 Skill 目录**：
   在工作区创建 `.trae/skills/ui-styler/` 目录。
2. **迁移样板文件**：
   - 将根目录下的 `templates/` 文件夹完整移动到 `.trae/skills/ui-styler/templates/`。
   - 将 `ui_candidates_list.md` 移动到 `.trae/skills/ui-styler/`，以便 Agent 在需要时快速检索候选 UI 列表。
3. **编写 SKILL.md**：
   在 `.trae/skills/ui-styler/` 目录下创建 `SKILL.md` 文件，包含以下内容：
   - **Frontmatter**：
     - `name`: "ui-styler"
     - `description`: "提供100种不同的UI风格和组件模板。当用户要求“修改已有UI组件”或“创建全新UI页面”时调用。根据用户的具体需求，选择最匹配的样板风格进行代码生成或调整。"
   - **Body (详细指令)**：
     - 指导 Agent 在被调用时，通过读取 `.trae/skills/ui-styler/templates/` 中的 `meta.json` 或 `ui_candidates_list.md` 来匹配用户要求的风格。
     - 明确指示 Agent 读取对应模板的 `index.html` 获取具体的 HTML 结构和 Tailwind class，并应用到用户项目的代码中。

## 4. 假设与决策
- **模板迁移**：根据用户的确认，将模板目录“移动到Skill目录中”，这表示原来的 `templates/` 目录将被移除，以保持 Skill 的封装性。
- **触发条件**：Skill 明确设定在两种情况下激活：(1) 修改已有 UI 组件；(2) 创建全新 UI 页面。

## 5. 验证步骤
1. 检查 `.trae/skills/ui-styler/templates/` 是否包含所有的 100 个模板目录。
2. 验证 `SKILL.md` 是否正确生成，并且符合 Trae Skill 规范。
3. 验证原有的 `templates/` 目录是否已清理。
