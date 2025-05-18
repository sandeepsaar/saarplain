class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="/images/LogoAqua.jpg" alt="Saar Biotech" class="logo" />
    </a>

    <!-- Mobile Menu Button -->
    <!-- Search Icon -->
    <button class="navbar-toggler btn btn-light" onclick="toggleSearch()">
      <i class="fas fa-search"></i>
    </button>
    <button class="navbar-toggler" type="button" onclick="toggleDrawer()">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Search Dropdown -->
    <div class="search-box" id="searchBox">
      <div class="search-header">
        <input type="text" id="searchInput" placeholder="Search products or categories..." oninput="filterProducts()" />
        <span class="close-btn" onclick="toggleSearch()">×</span>
      </div>
      <ul id="resultsList" />
    </div>

    <!-- Desktop Menu -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link navbar-links" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link navbar-links" href="/about">About</a></li>

        <!-- Manufacturing Unit Dropdown -->
        <li class="nav-item dropdown1">
          <a class="nav-link navbar-links" href="#" onclick="toggleDropdown('manufacturingDropdown')">Manufacturing Unit</a>
          <ul class="dropdown-content" id="manufacturingDropdown">
            <li><a href="/manufacturing-unit/saar-biotech" class="navbar-dropdown-links">Saar Biotech</a></li>
            <li><a href="/manufacturing-unit/dm-pharma" class="navbar-dropdown-links">DM Pharma</a></li>
            <li><a href="/manufacturing-unit/dm-pharma" class="navbar-dropdown-links">Infrastructure</a></li>
            <li><a href="/manufacturing-unit/video" class="navbar-dropdown-links">Factory Video</a></li>
          </ul>
        </li>

        <!-- Products Dropdown -->
        <li class="nav-item dropdown1">
          <a class="nav-link navbar-links" href="/products" onclick="toggleDropdown('productsDropdown')">Products</a>
          <ul class="dropdown-content" id="productsDropdown">
            <li><a href="/products/Suspensions" class="navbar-dropdown-links">Suspensions</a></li>
            <li><a href="/products/Syrups" class="navbar-dropdown-links">Syrups</a></li>
            <li><a href="/products/External Preparations" class="navbar-dropdown-links">External Preparation</a></li>
            <li><a href="/products/Miscellaneous Products" class="navbar-dropdown-links">Miscellaneous Products</a></li>
            <li><a href="/products/Tablets" class="navbar-dropdown-links">Tablets</a></li>
            <li><a href="/products/Capsules" class="navbar-dropdown-links">Capsules</a></li>
            <li><a href="/products/Sachets" class="navbar-dropdown-links">Sachets</a></li>
          </ul>
        </li>

        <!-- Events Dropdown -->
        <li class="nav-item dropdown1">
          <a class="nav-link navbar-links" href="#" onclick="toggleDropdown('eventsDropdown')">Events</a>
          <ul class="dropdown-content" id="eventsDropdown">
            <li><a href="/" class="navbar-dropdown-links">B2B</a></li>
            <li><a href="/events/pharma-south-2014" class="navbar-dropdown-links">Pharma South 2014</a></li>
            <li><a href="/events/indian-pharma-expo-2013" class="navbar-dropdown-links">Indian Pharma 2013</a></li>
            <li><a href="/events/indian-pharma-expo-2012" class="navbar-dropdown-links">Indian Pharma 2012</a></li>
            <li><a href="/brochure/brochure.pdf" class="navbar-dropdown-links" download>Brochure</a></li>
          </ul>
        </li>

        <li class="nav-item"><a class="nav-link navbar-links" href="/career">Careers</a></li>
        <li class="nav-item"><a class="nav-link navbar-links" href="/articles">Articles</a></li>
        <li class="nav-item"><a class="nav-link navbar-links" href="/contact">Contact</a></li>

        <!-- Search Icon -->
        <li class="nav-item">
          <button class="btn btn-light" onclick="toggleSearch()">
            <i class="fas fa-search"></i>
          </button>
        </li>
      </ul>

      <!-- Search Dropdown -->
      <div class="search-box" id="searchBox">
        <div class="search-header">
          <input type="text" id="searchInput" placeholder="Search products or categories..." oninput="filterProducts()" />
          <span class="close-btn" onclick="toggleSearch()">×</span>
        </div>
        <ul id="resultsList"></ul>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile Drawer -->
<div id="mobileDrawer" class="drawer">
  <button class="close-btn" onclick="toggleDrawer()">&times;</button>
  <ul class="drawer-menu">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>

    <li class="dropdown">
      <a href="#" onclick="toggleSubmenu(event, 'manuSub')">Manufacturing Unit</a>
      <ul id="manuSub" class="submenu">
        <li><a href="/manufacturing-unit/saar-biotech">Saar Biotech</a></li>
        <li><a href="/manufacturing-unit/dm-pharma">DM Pharma</a></li>
        <li><a href="/manufacturing-unit/dm-pharma">Infrastructure</a></li>
        <li><a href="/manufacturing-unit/video">Factory Video</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="/products" onclick="toggleSubmenu(event, 'productSub')">Products</a>
      <ul id="productSub" class="submenu">
        <li><a href="/products/Suspensions">Suspensions</a></li>
        <li><a href="/products/Syrups">Syrups</a></li>
        <li><a href="/products/Sachets">Sachets</a></li>
        <li><a href="/products/Capsules">Capsules</a></li>
        <li><a href="/products/Tablets">Tablets</a></li>
        <li><a href="/products/Miscellaneous Products">Miscellaneous Products</a></li>
        <li><a href="/products/External Preparations">External Preparations</a></li>
      </ul>
    </li>

    <li class="dropdown">
      <a href="#" onclick="toggleSubmenu(event, 'eventSub')">Events</a>
      <ul id="eventSub" class="submenu">
        <li><a href="/" class="navbar-dropdown-links">B2B</a></li>
        <li><a href="/events/pharma-south-2014">Pharma South 2014</a></li>
        <li><a href="/events/indian-pharma-expo-2013">Indian Pharma 2013</a></li>
        <li><a href="/events/indian-pharma-expo-2012">Indian Pharma 2012</a></li>
        <li><a href="/brochure/brochure.pdf" download>Brochure</a></li>
      </ul>
    </li>
    <li><a href="/career">Career</a></li>
    <li><a href="/articles">Articles</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</div>

        `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="bg-black text-white py-4">
  <div class="container">
    <div class="row text-center text-md-start">
      <!-- Contact Us -->
      <div class="col-12 col-sm-6 col-md-4 mb-4">
        <h4>Contact Us</h4>
        <p>
          <strong>Mr. Abhinav Aggrawal</strong>
        </p>
        <p class="color-primary">(Chief Operating Officer)</p>
        <p>
          <a href="tel:+919357888588" class="text-light text-decoration-none"> <i class="fas fa-phone-alt"></i> +91 9357 888 588 </a>
        </p>
        <p>
          <a href="mailto:abhinav@dmpharma.org" class="text-light text-decoration-none"> <i class="fas fa-envelope"></i> abhinav@dmpharma.org </a>
        </p>
      </div>

      <!-- Product Queries -->
      <div class="col-12 col-sm-6 col-md-4 mb-4">
        <h4>For Product Queries Call</h4>
        <p><strong>Mr. Vijay</strong></p>
        <p class="color-primary">(Marketing Manager)</p>
        <p>
          <a href="tel:+919357690454" class="text-light text-decoration-none"> <i class="fas fa-phone-alt"></i> +91 9357 690 454 </a>
        </p>
        <p>
          <a href="mailto:quotation@saarbiotech.com" class="text-light text-decoration-none"> <i class="fas fa-envelope"></i> quotation@saarbiotech.com </a>
        </p>
      </div>

      <!-- Follow Us -->
      <div class="col-12 col-md-4 mb-4 text-center">
        <h4>Follow Us on</h4>
        <div class="d-flex justify-content-center gap-3 mt-3 social-icon">
          <a href="https://x.com/SaarBiotech" target="_blank" class="text-light fs-4">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.facebook.com/SaarBiotech" target="_blank" class="text-light fs-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com/company/saarbiotech" target="_blank" class="text-light fs-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/saarbiotech" target="_blank" class="text-light fs-4">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <hr class="border-primary my-3" />
    <p class="text-center text-light m-0">&copy; <span class="color-primary">Saar Biotech</span>. All Rights Reserved.</p>
  </div>
</footer>


        `;
  }
}

class SideLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="floating-icons">
  <a href="#" id="floatingMailBtn" class="icon email" target="_blank" style="background: #3cb6a0; color: white">
    <i class="fas fa-envelope"></i>
  </a>
  <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hello, I have a query about your products." class="icon whatsapp" target="_blank" style="background: #25d366; color: white">
    <i class="fab fa-whatsapp"></i>
  </a>
</div>

<div class="contact-bar">
  <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hello, I have a query about your products." class="whatsapp" target="_blank"> <i class="fab fa-whatsapp"></i> Whatsapp </a>
  <a href="#" id="mobileMailBtn" class="email"> <i class="fa fa-envelope"></i> Contact </a>
  <a href="tel:+919357888588" class="call"> <i class="fa fa-phone"></i> Call Us </a>
</div>

<div id="mailPopup" class="popup-overlay" style="display: none">
  <div class="popup-form">
    <h3>Send Us a Message</h3>
    <form action="php/send-mail.php" method="POST">
      <div style="display: flex; gap: 10px">
        <input type="text" name="full_name" placeholder="Full Name" required />
        <input type="text" name="company_name" placeholder="Company Name" required />
      </div>
      <div style="display: flex; gap: 10px; margin-top: 10px">
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone" required />
      </div>
      <textarea name="message" rows="5" placeholder="Message" required>
Hello!
Want to enquire about your Product</textarea
      >
      <button type="submit">SEND QUERY</button>
    </form>
    <span class="close-popup" style="cursor: pointer">✕</span>
  </div>
</div>

        `;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
customElements.define("side-icons", SideLinks);
