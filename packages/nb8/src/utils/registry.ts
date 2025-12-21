// packages/nb8/src/utils/registry.ts
import fetch from 'node-fetch';

const GITHUB_BASE_URL = "https://raw.githubusercontent.com/himanshubalani/nb8/main/components";

// Map CLI names to actual filenames
const COMPONENT_MAP: Record<string, string> = {
  "button": "Button.tsx",
  "anchor-button": "AnchorButton.tsx",
  "badge": "Badge.tsx",
  "browser": "Browser.tsx",
  "project-card": "ProjectCard.tsx",
  "simple-card": "SimpleCard.tsx",
  "code-block": "CodeBlock.tsx",
  "polaroid": "Polaroid.tsx",
  "sidebar": "Sidebar.tsx",
  "progress-bar": "ProgressBar.tsx",
};

export interface ComponentData {
  name: string;
  filename: string;
  content: string;
  dependencies: string[]; // npm packages (e.g. lucide-react)
  internalDependencies: string[]; // other nb8 components (e.g. Badge)
}

export async function fetchComponent(name: string): Promise<ComponentData | null> {
  const filename = COMPONENT_MAP[name.toLowerCase()];
  
  if (!filename) {
    return null;
  }

  try {
    const response = await fetch(`${GITHUB_BASE_URL}/${filename}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch component: ${response.statusText}`);
    }

    const content = await response.text();

    // Basic dependency detection based on your current components
    const dependencies: string[] = [];
    if (content.includes("lucide-react")) dependencies.push("lucide-react");

    // Internal dependency detection (e.g., ProjectCard uses Badge)
    const internalDependencies: string[] = [];
    if (name === "project-card") internalDependencies.push("badge");
    // Add other internal dependencies here as your library grows

    return {
      name: filename.replace('.tsx', ''),
      filename: filename,
      content: content,
      dependencies,
      internalDependencies
    };
  } catch (error) {
    console.error("Registry fetch error:", error);
    return null;
  }
}
