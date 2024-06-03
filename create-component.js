import fs from "node:fs";

import * as prettier from "prettier";

// Added implementation for capitalizeFirstLetter function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function createComponent(name) {
  const capitalizedName = capitalizeFirstLetter(name);

  const dirPath = `./src/components/ui/${name}`;
  const componentPath = `${dirPath}/${name}.tsx`;
  const componentContent = `
  import s from './${name}.module.scss'; // Fixed import path

  export type ${capitalizedName}Props = {};

  export const ${capitalizedName}: React.FC<${capitalizedName}Props> = ({}) => { // Fixed component declaration
    return <div className={s.${name}}>${capitalizedName}</div>; // Added className with style reference
  };
  `;

  const sassPath = `${dirPath}/${name}.module.scss`;
  const sassContent = ` `;

  const indexPath = `${dirPath}/index.ts`; // Fixed file name
  const indexContent = `export * from './${name}';`;

  const storyPath = `${dirPath}/${name}.stories.tsx`; // Fixed file name
  const storyContent = `import type { Meta, StoryObj } from '@storybook/react';
  import { ${capitalizedName} } from './';

  // -----in every story
  const meta = {
    component: ${capitalizedName},
    tags: ["autodocs"],
    title: \`Components/${capitalizedName}\`,
  } satisfies Meta<typeof ${capitalizedName}>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {}
  };
  `;

  // Check if the directory already exists before creating it
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true }); // Ensure all directories in the path are created
  }

  // Create and write files with the corrected content
  fs.writeFileSync(componentPath, componentContent.trim());
  fs.writeFileSync(sassPath, sassContent.trim());
  fs.writeFileSync(indexPath, indexContent.trim());
  fs.writeFileSync(storyPath, storyContent.trim());
}

// console.log(process.argv[2]);

const name = process.argv[2];

if (!name) {
  console.log("Please provide component name");
  process.exit(1);
}

async function updateMainIndex(name) {
  const mainIndexPath = `./src/components/ui/index.ts`;
  const mainIndexContent = await fs.promises.readFile(mainIndexPath, "utf8");
  const updatedContent = mainIndexContent + `\nexport * from './${name}';`;
  const formatted = await prettier.format(updatedContent, {
    parser: "typescript",
  });

  await fs.promises.writeFile(mainIndexPath, formatted);
}

createComponent(name);
void updateMainIndex(name);
