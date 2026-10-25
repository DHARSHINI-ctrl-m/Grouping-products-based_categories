const SAMPLE_PRODUCTS = [
  { id: "P-1001", name: "Aurora Wireless Headphones", category: "Electronics", price: 129.99, brand: "Nimbus", stock: 48 },
  { id: "P-1002", name: "PixelFrame 4K Monitor", category: "Electronics", price: 349.0, brand: "Lumina", stock: 22 },
  { id: "P-1003", name: "PocketBeam Portable Projector", category: "Electronics", price: 219.5, brand: "Lumina", stock: 15 },
  { id: "P-1004", name: "VoltCharge Power Bank 20k", category: "Electronics", price: 44.99, brand: "Nimbus", stock: 80 },
  { id: "P-1005", name: "Keyflow Mechanical Keyboard", category: "Electronics", price: 89.0, brand: "Forge", stock: 36 },
  { id: "P-1006", name: "CloudCam Indoor Camera", category: "Electronics", price: 59.99, brand: "Nimbus", stock: 41 },
  { id: "P-1101", name: "Cedar Linen Overshirt", category: "Clothing", price: 68.0, brand: "Hearth & Thread", stock: 54 },
  { id: "P-1102", name: "Riverwalk Denim Jacket", category: "Clothing", price: 92.5, brand: "Hearth & Thread", stock: 27 },
  { id: "P-1103", name: "Summit Trail Runners", category: "Clothing", price: 118.0, brand: "Peakform", stock: 33 },
  { id: "P-1104", name: "Harbor Knit Beanie", category: "Clothing", price: 18.0, brand: "Hearth & Thread", stock: 90 },
  { id: "P-1105", name: "Daylight Cotton Tee", category: "Clothing", price: 24.0, brand: "Peakform", stock: 120 },
  { id: "P-1201", name: "Cast Iron Skillet 12\"", category: "Home & Kitchen", price: 54.99, brand: "Hearthstone", stock: 40 },
  { id: "P-1202", name: "Oakgrain Cutting Board", category: "Home & Kitchen", price: 36.0, brand: "Hearthstone", stock: 28 },
  { id: "P-1203", name: "SteamNest Kettle", category: "Home & Kitchen", price: 42.5, brand: "Lumina", stock: 61 },
  { id: "P-1204", name: "SoftGlow Desk Lamp", category: "Home & Kitchen", price: 39.99, brand: "Lumina", stock: 45 },
  { id: "P-1205", name: "Stoneware Mug Set", category: "Home & Kitchen", price: 29.0, brand: "Hearthstone", stock: 70 },
  { id: "P-1206", name: "Linen Table Runner", category: "Home & Kitchen", price: 22.0, brand: "Hearth & Thread", stock: 38 },
  { id: "P-1301", name: "Wildflower Honey 500g", category: "Food & Grocery", price: 12.5, brand: "Orchard Lane", stock: 86 },
  { id: "P-1302", name: "Single-Origin Coffee Beans", category: "Food & Grocery", price: 18.99, brand: "Orchard Lane", stock: 64 },
  { id: "P-1303", name: "Spiced Granola Clusters", category: "Food & Grocery", price: 8.75, brand: "Orchard Lane", stock: 95 },
  { id: "P-1304", name: "Sea Salt Dark Chocolate", category: "Food & Grocery", price: 6.5, brand: "Cinder", stock: 110 },
  { id: "P-1305", name: "Olive Oil Extra Virgin", category: "Food & Grocery", price: 16.0, brand: "Orchard Lane", stock: 52 },
  { id: "P-1401", name: "The Cartographer's Atlas", category: "Books", price: 28.0, brand: "Northpage", stock: 31 },
  { id: "P-1402", name: "Kitchen Science Notes", category: "Books", price: 22.0, brand: "Northpage", stock: 44 },
  { id: "P-1403", name: "Field Guide to Wild Herbs", category: "Books", price: 19.5, brand: "Northpage", stock: 26 },
  { id: "P-1404", name: "Quiet Code: A Novel", category: "Books", price: 14.99, brand: "Northpage", stock: 58 },
  { id: "P-1501", name: "Trailfold Yoga Mat", category: "Sports", price: 34.0, brand: "Peakform", stock: 47 },
  { id: "P-1502", name: "AeroJump Speed Rope", category: "Sports", price: 15.99, brand: "Peakform", stock: 73 },
  { id: "P-1503", name: "Ridge Pack 24L", category: "Sports", price: 79.0, brand: "Peakform", stock: 21 },
  { id: "P-1504", name: "GripLite Resistance Bands", category: "Sports", price: 21.5, brand: "Forge", stock: 66 },
  { id: "P-1601", name: "Cedarwood Hand Cream", category: "Beauty", price: 14.0, brand: "Cinder", stock: 88 },
  { id: "P-1602", name: "Rainleaf Shampoo Bar", category: "Beauty", price: 11.5, brand: "Cinder", stock: 77 },
  { id: "P-1603", name: "Amber Glass Diffuser", category: "Beauty", price: 32.0, brand: "Cinder", stock: 29 },
  { id: "P-1604", name: "Mineral SPF Daily Cream", category: "Beauty", price: 26.0, brand: "Cinder", stock: 50 },
  { id: "P-1701", name: "Maple Block Puzzle", category: "Toys", price: 21.0, brand: "Forge", stock: 42 },
  { id: "P-1702", name: "Orbit Marble Run", category: "Toys", price: 38.5, brand: "Forge", stock: 18 },
  { id: "P-1703", name: "Story Tent Play Set", category: "Toys", price: 54.0, brand: "Hearth & Thread", stock: 14 },
  { id: "P-1704", name: "Mini Observatory Kit", category: "Toys", price: 29.99, brand: "Lumina", stock: 25 },
];

const SAMPLE_CSV = `id,name,category,price,brand,stock
P-1001,Aurora Wireless Headphones,Electronics,129.99,Nimbus,48
P-1002,PixelFrame 4K Monitor,Electronics,349.00,Lumina,22
P-1101,Cedar Linen Overshirt,Clothing,68.00,Hearth & Thread,54
P-1201,Cast Iron Skillet 12",Home & Kitchen,54.99,Hearthstone,40
P-1301,Wildflower Honey 500g,Food & Grocery,12.50,Orchard Lane,86
P-1401,The Cartographer's Atlas,Books,28.00,Northpage,31
P-1501,Trailfold Yoga Mat,Sports,34.00,Peakform,47
P-1601,Cedarwood Hand Cream,Beauty,14.00,Cinder,88
P-1701,Maple Block Puzzle,Toys,21.00,Forge,42
`;

const PALETTE = ["#b42318", "#3f5c38", "#c9842a", "#1d4ed8", "#7c3aed", "#0f766e", "#9f1239", "#57534e"];
const NAME_KEYS = ["name", "product", "product name", "product_name", "title", "item"];
const CATEGORY_KEYS = ["category", "categories", "group", "type", "department"];
const PRICE_KEYS = ["price", "cost", "amount", "unit price", "unit_price"];
const ID_KEYS = ["id", "sku", "product id", "product_id", "code"];
const BRAND_KEYS = ["brand", "manufacturer", "maker"];
const STOCK_KEYS = ["stock", "quantity", "qty", "inventory"];

const state = {
  products: SAMPLE_PRODUCTS.slice(),
  sourceLabel: "Built-in sample catalog",
  query: "",
  selectedCategories: [],
  minPrice: 0,
  maxPrice: 0,
  sort: { key: "name", dir: "asc" },
  openGroups: {},
};

let barChart;
let pieChart;

function pick(row, keys) {
  const map = {};
  for (const [k, v] of Object.entries(row)) map[String(k).trim().toLowerCase()] = v;
  for (const key of keys) {
    if (map[key] !== undefined && map[key] !== "") return map[key];
  }
  return "";
}

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const n = parseFloat(String(value).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function normalizeProducts(rows) {
  return rows
    .map((row, index) => {
      const name = String(pick(row, NAME_KEYS) || "").trim();
      const category = String(pick(row, CATEGORY_KEYS) || "Uncategorized").trim() || "Uncategorized";
      if (!name) return null;
      return {
        id: String(pick(row, ID_KEYS) || `ROW-${index + 1}`),
        name,
        category,
        price: toNumber(pick(row, PRICE_KEYS)),
        brand: String(pick(row, BRAND_KEYS) || "—"),
        stock: toNumber(pick(row, STOCK_KEYS)),
      };
    })
    .filter(Boolean);
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else quoted = !quoted;
    } else if (ch === "," && !quoted) {
      cells.push(current.trim());
      current = "";
    } else current += ch;
  }
  cells.push(current.trim());
  return cells;
}

function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").filter((l) => l.trim());
  if (!lines.length) return [];
  const headers = splitCsvLine(lines[0]).map((h) => h.replace(/^"|"$/g, ""));
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line);
    const row = {};
    headers.forEach((h, i) => {
      row[h] = (cells[i] || "").replace(/^"|"$/g, "");
    });
    return row;
  });
}

function parseText(text, filename) {
  if (filename.toLowerCase().endsWith(".json")) {
    const data = JSON.parse(text);
    const rows = Array.isArray(data) ? data : data.products || data.items || data.data || [];
    return normalizeProducts(rows);
  }
  return normalizeProducts(parseCsv(text));
}

function money(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n || 0);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function priceExtent(products) {
  if (!products.length) return { min: 0, max: 100 };
  const prices = products.map((p) => p.price);
  return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
}

function colorFor(category, index) {
  let hash = 0;
  for (const ch of category) hash = (hash * 31 + ch.charCodeAt(0)) % PALETTE.length;
  return PALETTE[(hash + index) % PALETTE.length];
}

function filteredProducts() {
  const q = state.query.trim().toLowerCase();
  return state.products.filter((p) => {
    if (q && !p.name.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q) && !p.id.toLowerCase().includes(q)) {
      return false;
    }
    if (state.selectedCategories.length && !state.selectedCategories.includes(p.category)) return false;
    if (p.price < state.minPrice || p.price > state.maxPrice) return false;
    return true;
  });
}

function groupByCategory(products) {
  const map = new Map();
  for (const product of products) {
    if (!map.has(product.category)) map.set(product.category, []);
    map.get(product.category).push(product);
  }
  return [...map.entries()]
    .map(([category, items]) => {
      const totalValue = items.reduce((sum, p) => sum + p.price * (p.stock || 1), 0);
      const avgPrice = items.reduce((sum, p) => sum + p.price, 0) / items.length;
      return {
        category,
        items: items.slice().sort((a, b) => a.name.localeCompare(b.name)),
        count: items.length,
        avgPrice,
        totalValue,
      };
    })
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

function showNotice(message) {
  const el = document.getElementById("notice");
  if (!message) {
    el.classList.add("hidden");
    el.textContent = "";
    return;
  }
  el.textContent = message;
  el.classList.remove("hidden");
}

function download(filename, text) {
  const blob = new Blob([text], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function productsToCsv(products) {
  const header = "id,name,category,price,brand,stock";
  const body = products
    .map((p) => [p.id, `"${String(p.name).replace(/"/g, '""')}"`, `"${p.category}"`, p.price, `"${p.brand}"`, p.stock].join(","))
    .join("\n");
  return `${header}\n${body}\n`;
}

function isolateCategory(category) {
  if (state.selectedCategories.length === 1 && state.selectedCategories[0] === category) {
    state.selectedCategories = [];
  } else {
    state.selectedCategories = [category];
  }
  render();
}

function renderCharts(groups) {
  if (barChart) barChart.destroy();
  if (pieChart) pieChart.destroy();
  barChart = null;
  pieChart = null;
  if (!groups.length) return;

  const labels = groups.map((g) => g.category);
  const counts = groups.map((g) => g.count);
  const colors = groups.map((g, i) => colorFor(g.category, i));
  const commonClick = (elements) => {
    if (!elements.length) return;
    isolateCategory(groups[elements[0].index].category);
  };

  const barConfig = {
    type: "bar",
    data: {
      labels,
      datasets: [{ label: "Products", data: counts, backgroundColor: colors, borderRadius: 8, barThickness: 28 }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => ` ${ctx.raw} products` } } },
      onClick: (_e, elements) => commonClick(elements),
      scales: {
        x: { ticks: { color: "#5c5348", maxRotation: 40 }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { stepSize: 1, color: "#5c5348" }, grid: { color: "#eadfcb" } },
      },
    },
  };

  const pieConfig = {
    type: "pie",
    data: {
      labels,
      datasets: [{ data: counts, backgroundColor: colors, borderWidth: 2, borderColor: "#fbf6ec" }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 11 } } } },
      onClick: (_e, elements) => commonClick(elements),
    },
  };

  barChart = new Chart(document.getElementById("bar-chart"), barConfig);
  pieChart = new Chart(document.getElementById("pie-chart"), pieConfig);
}

function renderGroups(groups) {
  const root = document.getElementById("groups");
  if (!groups.length) {
    root.innerHTML = `<p class="empty">Nothing matches the current filters.</p>`;
    return;
  }
  root.innerHTML = groups
    .map((g, i) => {
      const open = state.openGroups[g.category] !== false;
      const rows = g.items
        .map(
          (p) => `<tr><td>${escapeHtml(p.id)}</td><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.brand)}</td><td>${money(p.price)}</td><td>${p.stock}</td></tr>`
        )
        .join("");
      return `
        <div class="group">
          <button class="group-head" type="button" data-group="${g.category}">
            <span class="swatch" style="background:${colorFor(g.category, i)}"></span>
            <b>${escapeHtml(g.category)}</b>
            <span class="meta">${g.count} product${g.count === 1 ? "" : "s"}</span>
            <span class="meta">Avg ${money(g.avgPrice)}</span>
            <span class="meta">Stock value ${money(g.totalValue)}</span>
          </button>
          ${
            open
              ? `<div class="table-wrap"><table>
                  <thead><tr><th>SKU</th><th>Product</th><th>Brand</th><th>Price</th><th>Stock</th></tr></thead>
                  <tbody>${rows}</tbody>
                </table></div>`
              : ""
          }
        </div>`;
    })
    .join("");

  root.querySelectorAll("[data-group]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.group;
      state.openGroups[cat] = state.openGroups[cat] === false;
      render();
    });
  });
}

function renderTable(products) {
  const root = document.getElementById("product-table");
  if (!products.length) {
    root.innerHTML = `<p class="empty">No rows to show.</p>`;
    return;
  }
  const rows = products.slice().sort((a, b) => {
    const va = a[state.sort.key];
    const vb = b[state.sort.key];
    const cmp = typeof va === "number" ? va - vb : String(va).localeCompare(String(vb));
    return state.sort.dir === "asc" ? cmp : -cmp;
  });
  const headers = [
    ["id", "SKU"],
    ["name", "name"],
    ["category", "category"],
    ["brand", "brand"],
    ["price", "price"],
    ["stock", "stock"],
  ];
  root.innerHTML = `
    <table>
      <thead>
        <tr>
          ${headers
            .map(([key, label]) => {
              const mark = state.sort.key === key ? (state.sort.dir === "asc" ? " ↑" : " ↓") : "";
              return `<th data-sort="${key}">${label}${mark}</th>`;
            })
            .join("")}
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (p) =>
              `<tr><td>${escapeHtml(p.id)}</td><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.category)}</td><td>${escapeHtml(p.brand)}</td><td>${money(p.price)}</td><td>${p.stock}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>`;
  root.querySelectorAll("[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      state.sort = state.sort.key === key ? { key, dir: state.sort.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" };
      render();
    });
  });
}

function renderChips(allCategories) {
  const root = document.getElementById("category-chips");
  root.innerHTML = allCategories
    .map((cat) => {
      const active = state.selectedCategories.includes(cat) ? "active" : "";
      return `<button class="chip ${active}" type="button" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`;
    })
    .join("");
  root.querySelectorAll("[data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      state.selectedCategories = state.selectedCategories.includes(cat)
        ? state.selectedCategories.filter((c) => c !== cat)
        : [...state.selectedCategories, cat];
      render();
    });
  });
}

function render() {
  const allCategories = [...new Set(state.products.map((p) => p.category))].sort((a, b) => a.localeCompare(b));
  const filtered = filteredProducts();
  const groups = groupByCategory(filtered);
  const avg = filtered.length ? filtered.reduce((s, p) => s + p.price, 0) / filtered.length : 0;
  const top = groups[0];

  document.getElementById("kpi-total").textContent = filtered.length;
  document.getElementById("source-label").textContent = state.sourceLabel;
  document.getElementById("kpi-categories").textContent = groups.length;
  document.getElementById("kpi-categories-sub").textContent = `${allCategories.length} in full dataset`;
  document.getElementById("kpi-avg").textContent = money(avg);
  document.getElementById("kpi-range").textContent = `${money(state.minPrice)} – ${money(state.maxPrice)}`;
  document.getElementById("kpi-top-count").textContent = top ? top.count : 0;
  document.getElementById("kpi-top-name").textContent = top ? top.category : "No products in view";

  renderChips(allCategories);
  renderCharts(groups);
  renderGroups(groups);
  renderTable(filtered);
}

function applyDataset(products, label) {
  state.products = products;
  const extent = priceExtent(products);
  state.minPrice = extent.min;
  state.maxPrice = extent.max;
  state.selectedCategories = [];
  state.query = "";
  state.sourceLabel = label;
  document.getElementById("query").value = "";
  document.getElementById("min-price").value = extent.min;
  document.getElementById("max-price").value = extent.max;
  const slider = document.getElementById("price-slider");
  slider.min = extent.min;
  slider.max = extent.max;
  slider.value = extent.max;
  showNotice("");
  render();
}

function init() {
  const extent = priceExtent(state.products);
  state.minPrice = extent.min;
  state.maxPrice = extent.max;
  document.getElementById("min-price").value = extent.min;
  document.getElementById("max-price").value = extent.max;
  const slider = document.getElementById("price-slider");
  slider.min = extent.min;
  slider.max = extent.max;
  slider.value = extent.max;

  document.getElementById("query").addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
  });
  document.getElementById("min-price").addEventListener("input", (e) => {
    state.minPrice = Number(e.target.value) || 0;
    render();
  });
  document.getElementById("max-price").addEventListener("input", (e) => {
    state.maxPrice = Number(e.target.value) || 0;
    slider.value = state.maxPrice;
    render();
  });
  slider.addEventListener("input", (e) => {
    state.maxPrice = Number(e.target.value);
    document.getElementById("max-price").value = state.maxPrice;
    render();
  });
  document.getElementById("reset-filters").addEventListener("click", () => {
    const next = priceExtent(state.products);
    state.query = "";
    state.selectedCategories = [];
    state.minPrice = next.min;
    state.maxPrice = next.max;
    document.getElementById("query").value = "";
    document.getElementById("min-price").value = next.min;
    document.getElementById("max-price").value = next.max;
    slider.min = next.min;
    slider.max = next.max;
    slider.value = next.max;
    render();
  });
  document.getElementById("load-sample").addEventListener("click", () => {
    applyDataset(SAMPLE_PRODUCTS.slice(), "Built-in sample catalog");
  });
  document.getElementById("download-template").addEventListener("click", () => download("sample-products.csv", SAMPLE_CSV));
  document.getElementById("export-view").addEventListener("click", () => download("grouped-products.csv", productsToCsv(filteredProducts())));
  document.getElementById("file-input").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const text = await file.text();
      const rows = parseText(text, file.name);
      if (!rows.length) {
        showNotice("No products found. Include columns for name, category, and price.");
        return;
      }
      applyDataset(rows, file.name);
    } catch {
      showNotice("Could not read that file. Upload a CSV or JSON product list.");
    }
  });

  render();
}

init();
