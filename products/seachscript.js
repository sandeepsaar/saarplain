const products = [ 
    { name: "Azithromycin", category: "Antibiotic -Suspensions", link: "azithromycin.html" },
    { name: "Ofloxacin", category: "Antibiotic -Suspensions", link: "index.html" },
    { name: "Ofloxacin + Tinidazole", category: "Antibiotic -Suspensions", link: "index.html" },
    { name: "Ofloxacin Ornidazole", category: "Antibiotic -Suspensions", link: "ofloxacin-ornidazole.html" },
    { name: "Roxithromycin", category: "Antibiotic -Suspensions", link: "index.html" },
    { name: "Dell XPS", category: "Antibiotic -Suspensions", link: "products/laptop.html" },
    { name: "Sony Headphones", category: "Antibiotic -Suspensions", link: "https://saarbiotech.in/products/Tablets/" }
  ];
  
  function toggleSearch() {
    const box = document.getElementById("searchBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
    document.getElementById("searchInput").value = "";
    filterProducts();
  }
  
  function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("resultsList");
    results.innerHTML = "";
  
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      (p.category && p.category.toLowerCase().includes(query))
    ).slice(0, 5); // Only show top 5
  
    filtered.forEach(p => {
      const li = document.createElement("li");
      li.className = "result-item";
  
      const a = document.createElement("a");
      a.href = p.link;
      a.target = "_blank";
      a.innerHTML = `
        <div class="product-name">${p.name}</div>
        ${p.category ? `<div class="product-category">${p.category}</div>` : ""}
      `;
      li.appendChild(a);
      results.appendChild(li);
    });
  }
  