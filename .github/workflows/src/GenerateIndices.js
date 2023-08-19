/**
 * Index Generator for GitHub Pages
 *
 * This script will auto-generate Markdown during the GitHub pages deployment within each folder in docs/ to create a
 * basic navigation utility. This prevents us from having to manage index pages manually.
 */

const fs = require("fs");
const path = require("path");

/**
 * Recursively generate `index.md` files in a given directory root.
 *
 * @param {string} path - the path to parse
 */
function writeIndices(path, docsRoot = "") {
  var pageTitle;
  var pagePath;
  var pagePathParts;

  if (!docsRoot) {
    docsRoot = path;

    pagePath = "";
    pagePathParts = [];
    pageTitle = "Vaughan Family Recipes";
  } else {
    pagePath = path.substring(docsRoot.length + 1);
    pagePathParts = pagePath.split("/");
    pageTitle = toTitleCase(pagePathParts.slice(-1)[0]);
  }

  console.info(`Building index.md for '${pageTitle}' (/${pagePath})`);

  // Parse our folder, capturing all recipes and sub-directories
  var subDirectories = [];
  var recipes = [];

  fs.readdirSync(`${docsRoot}/${pagePath}`).filter((file) => {
    const subPath = `${docsRoot}/${pagePath}/${file}`;

    // If this is a directory, process it
    if (fs.statSync(subPath).isDirectory()) {
      // Don't add indices to img directories
      if (file == "img") {
        return;
      }

      // Don't add indices to dot-folders
      if (file.startsWith(".")) {
        return;
      }

      subDirectories.push(file);
      return;
    }

    // If this is not a markdown file, ignore it
    if (!file.endsWith(".md")) {
      return;
    }

    recipes.push(file);
  });

  console.debug(`    ${recipes.length} recipes`);
  console.debug(`    ${subDirectories.length} sub-directories`);

  // Generate the index.md format
  var markdown = `# ${pageTitle}\n\n`;

  // Breadcrumb
  var pathBuilder = "";
  markdown += "[Recipes](/) &gt; ";

  pagePathParts.forEach((part) => {
    pathBuilder += `/${part}`;
    markdown += `[${toTitleCase(part)}](${pathBuilder}) &gt; `;
  });

  markdown += "\n\n";

  // Sections
  if (subDirectories.length > 0) {
    markdown += "## Sections\n\n";

    subDirectories.forEach((sub) => {
      markdown += `* [${toTitleCase(sub)}](${sub})\n`;
    });

    markdown += "\n\n";
  }

  // Recipes
  if (recipes.length > 0) {
    markdown += "## Recipes\n\n";

    recipes.forEach((recipe) => {
      const recipeName = recipe.endsWith(".md") ? recipe.substring(0, recipe.length - 3) : recipe;

      markdown += `* [${toTitleCase(recipeName)}](${recipe})\n`;
    });

    markdown += "\n\n";
  }

  // Write the index.md file
  console.info(`Writing ${path}/index.md`);

  fs.writeFileSync(`${path}/index.md`, markdown);

  console.info("    Success!\n");

  // Recursively call this method on all subdirectories identified
  subDirectories.forEach((sub) => {
    writeIndices(`${path}/${sub}`, docsRoot);
  });
}

/**
 * Capitalize the first letter of each word in a given string.
 *
 * @param {str} str - the string to capitalize
 *
 * @return {str} the capitalized string
 */
function toTitleCase(str) {
  return str
    .toLowerCase()
    .replaceAll("-", " ")
    .replace(/(^| )(\w)/g, function (letter) {
      return letter.toUpperCase();
    });
}

// Launch the index generator
writeIndices(`${process.cwd()}/docs`);
