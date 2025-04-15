import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const CATEGORIES = ['nature', 'animals', 'architecture', 'food', 'travel', 'abstract'];

function generateMetadataForCategory(category) {
  const categoryDir = path.join(PUBLIC_DIR, category);
  const files = fs.readdirSync(categoryDir)
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  const metadata = files.map((file, index) => ({
    id: `${category}-${index + 1}`,
    url: `/${category}/${file}`,
    category,
    tags: [category],
    width: 800,
    height: 600,
  }));

  fs.writeFileSync(
    path.join(categoryDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
}

// Create directories if they don't exist
CATEGORIES.forEach(category => {
  const dir = path.join(PUBLIC_DIR, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create admin directory and files
const adminDir = path.join(PUBLIC_DIR, 'admin');
if (!fs.existsSync(adminDir)) {
  fs.mkdirSync(adminDir, { recursive: true });
  fs.writeFileSync(
    path.join(adminDir, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImageHub Admin</title>
</head>
<body>
    <div id="admin-root"></div>
    <script type="module" src="/src/admin.tsx"></script>
</body>
</html>`
  );
}

// Create hub directory and category pages
const hubDir = path.join(PUBLIC_DIR, 'hub');
if (!fs.existsSync(hubDir)) {
  fs.mkdirSync(hubDir, { recursive: true });
  CATEGORIES.forEach(category => {
    fs.writeFileSync(
      path.join(hubDir, `${category}.html`),
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${category.charAt(0).toUpperCase() + category.slice(1)} Images - ImageHub</title>
</head>
<body>
    <div id="category-root"></div>
    <script type="module" src="/src/category.tsx"></script>
</body>
</html>`
    );
  });
}

// Generate metadata for each category
CATEGORIES.forEach(generateMetadataForCategory);
