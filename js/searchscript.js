// const products = [ 
//   { name: "Azithromycin", category: "Antibiotic -Suspensions", link: "products/azithromycin.html" },
//   { name: "Ofloxacin", category: "Antibiotic -Suspensions", link: "products/index.html" },
//   { name: "Ofloxacin + Tinidazole", category: "Antibiotic -Suspensions", link: "products/index.html" },
//   { name: "Ofloxacin Ornidazole", category: "Antibiotic -Suspensions", link: "products/ofloxacin-ornidazole.html" },
//   { name: "Roxithromycin", category: "Antibiotic -Suspensions", link: "products/index.html" },
//   { name: "Ofloxacin Nitozoxanide", category: "Antibiotic -Suspensions", link: "products/index.html" },
//   { name: "Ofloxacin Metronidazole", category: "Antibiotic -Suspensions", link: "products/index.html" },

//   { name: "Pcm Cpm Phenylephrine hcl sodium citrate menthol", category: "Anticold -Suspensions", link: "products/index.html" },
//   { name: "CPM + PCM + PHENYLEPHERINE HCL", category: "Anticold -Suspensions", link: "products/index.html" },
//   { name: "CETIRIZINE HCL + PCM + PHENYLEPHERINE HCL", category: "Anticold -Suspensions", link: "products/index.html" },
//   { name: "CETIRIZINE DIHCL", category: "Anticold -Suspensions", link: "products/index.html" },
//   { name: "Levocetirizine Dihydrochloride", category: "Anticold -Suspensions", link: "products/levocetirizine-dihcl.html" },
//   { name: "DICYCLOMINE HCL + PCM", category: "Anticold -Suspensions", link: "products/index.html" },
//   { name: "Fexofenadine Hydrochloride", category: "Anticold -Suspensions", link: "products/fexofenadine-hcl.html" },
//   { name: "DEXTROMETHORPHAN HYDROBROMIDE + CHLORPHENIRAMINE MALEATE", category: "Anticold -Suspensions", link: "products/index.html" },
//   { name: "Bilastine Oral Solution", category: "Anticold -Suspensions", link: "products/bilastine-oral-solution.html" },

//   { name: "Deflazacort", category: "Tablets", link: "products/index.html" },
//   { name: "PARACETAMOL", category: "Tablets", link: "products/index.html" },
//   { name: "PARACETAMOL (Drops)", category: "Analgesic & Anti-Inflammatory", link: "products/index.html" },
//   { name: "PROMETHAZINE HCl", category: "Analgesic & Anti-Inflammatory", link: "products/index.html" },
//   { name: "PCM + PROMETHAZINE HCl", category: "Analgesic & Anti-Inflammatory", link: "products/index.html" },

//   { name: "MEGALDRATE + SIMETHICONE", category: "Antacid -Suspensions", link: "products/index.html" },
//   { name: "OXETACAINE + ALUMINIUM HYDRIXIDE + MAGNESIUM HYDROXIDE", category: "Antacid -Suspensions", link: "products/index.html" },

//   { name: "Ursodeoxycholic acid (UDCA)", category: "Hepatoprotective Agent -Suspensions", link: "products/index.html" },

//   { name: "ACTIVATED DIMETHICON +MAGNESIUM HYDRO + DRIED ALIMINIUM HYDRO", category: "Antacid -Suspensions", link: "products/index.html" },

//   { name: "Milk of Magnesia", category: "Dry Syrup -Syrup", link: "products/milk-of-magnesia.html" },
//   { name: "Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate", category: "Dry Syrup -Syrup", link: "products/sodium-alginate.html" },
//   { name: "AMOXYCILLIN", category: "Dry Syrup -Syrup", link: "products/index.html" },
//   { name: "CEFIXIME", category: "Tablets", link: "products/index.html" },
//   { name: "CEFPODOXIME", category: "Tablets", link: "products/index.html" },
//   { name: "CEFIXIME + OFLOXACIN", category: "Tablets", link: "products/index.html" },

//   { name: "IRON(III)HYDROXIDE POLYMALTOSE COMPLEX + FOLIC ACID", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "FERROUS ASCORBATE + FOLIC ACID ", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "FERRIC AMMONIUM CITRATE + FOLIC ACID + CYANOCOBALAMINE + SORBITOL SOL (70%) Q.S.", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "ENZYME FORMULA (IN FOOD)", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "CALCIUM CARBONATE (EQ. TO ELEMENTAL CALCIUM) + D3 ", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "FERRIC AMMONIUM CITRATE (EQ TO ELEMENTAL IRON ) + FOLIC ACID + CYANOCOBALAMIN", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "AMINO ACIDS, MULTIVITAMIN AND ANTIOXIDANT SYRUP ……………….(IN FOOD)", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "ALPHA AMYLASE BACTERIAL(1:800) + PAPAIN", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "CYPROHEPTADINE HCL + TRICHOLINE CITRATE", category: "Tonic Syrup -Syrups", link: "products/index.html" },
//   { name: "TRICHOLINE CITRATE SORBITOL SOLUTION (70%) Q.S", category: "Tonic Syrup -Syrups", link: "products/index.html" },
  
// ];

// Assuming 'data' is globally available from product.js

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

  const allProducts = [];

  // Flatten all products from nested structure
  data.forEach(mainCat => {
    mainCat.subCategories.forEach(subCat => {
      subCat.products.forEach(product => {
          const rawLink = product.link || "";
        allProducts.push({
          name: toTitleCase(product.name),
          category: `${subCat.name} -${mainCat.mainCategory}`,
          link: rawLink.startsWith("http")
            ? rawLink
            : `/products/${rawLink}`,
        });
      });
    });
  });

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  filtered.forEach(p => {
    const li = document.createElement("li");
    li.className = "result-item";

    const a = document.createElement("a");
    a.href = p.link;
    a.target = p.link.startsWith("http") ? "_blank" : "_self";
    a.innerHTML = `
      <div class="product-name">${p.name}</div>
      <div class="product-category">${p.category}</div>
    `;
    li.appendChild(a);
    results.appendChild(li);
  });
}

function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
