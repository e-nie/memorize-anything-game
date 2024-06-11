const { join } = require("node:path");
const { promises } = require("node:fs");

const fsp = promises;

const dirWithIcons = "src/assets/icons/components";

async function main() {
  const files = await fsp.readdir(dirWithIcons);

  files.forEach(async (file) => {
    const filePath = join(dirWithIcons, file);
    // const newName = file
    //   .replaceAll(" ", "-")
    //   .replaceAll("(", "")
    //   .replaceAll(")", "")
    //   .toLowerCase();
    const fileContent = await fsp.readFile(join(dirWithIcons, file), "utf-8");
    const newFileContent = fileContent.replaceAll("#fff", "currentcolor");

    fsp.writeFile(filePath, newFileContent, "utf-8");
  });
}

void main();
