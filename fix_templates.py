import os
import json
import re
import shutil

base_dir = '/workspace/templates'

for i in range(31, 51):
    folder_name = f"{i:03d}"
    folder_path = os.path.join(base_dir, folder_name)
    if not os.path.exists(folder_path):
        continue
    
    meta_path = os.path.join(folder_path, 'meta.json')
    with open(meta_path, 'r', encoding='utf-8') as f:
        meta = json.load(f)
        
    name = meta.get('name', f"Template {i}")
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_folder_name = f"{folder_name}-{slug}"
    
    new_folder_path = os.path.join(base_dir, new_folder_name)
    
    # Process meta.json
    new_meta = {
        "id": new_folder_name,
        "name": name,
        "type": meta.get('type', "Component"),
    }
    
    if "source" in meta:
        if isinstance(meta["source"], dict):
            new_meta["source"] = meta["source"]
        else:
            new_meta["source"] = {
                "url": "#",
                "title": meta["source"]
            }
            
    old_tags = meta.get('tags', [])
    style_tags = []
    color_tags = []
    feature_tags = []
    
    if isinstance(old_tags, list):
        for tag in old_tags:
            if "系" in tag or "色" in tag or "黑白灰" in tag:
                color_tags.append(tag)
            elif tag in ["现代", "极简", "科技感", "玻璃态", "新拟物", "原生感", "卡片网格", "排版强"]:
                style_tags.append(tag)
            else:
                feature_tags.append(tag)
    elif isinstance(old_tags, dict):
        style_tags = old_tags.get("style", [])
        color_tags = old_tags.get("color", [])
        feature_tags = old_tags.get("features", [])
        
    if not style_tags:
        style_tags = ["现代"]
    if not color_tags:
        color_tags = ["通用色"]
        
    new_meta["tags"] = {
        "style": style_tags,
        "color": color_tags,
        "features": feature_tags
    }
    
    if "description" in meta:
        new_meta["description"] = meta["description"]
        
    # Write updated meta.json
    with open(meta_path, 'w', encoding='utf-8') as f:
        json.dump(new_meta, f, indent=2, ensure_ascii=False)
        
    # Rename folder
    os.rename(folder_path, new_folder_path)
    print(f"Renamed {folder_name} to {new_folder_name} and updated meta.json")

