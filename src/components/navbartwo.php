<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light sticky-top">
  <div class="container shadow-sm">
    <!-- Logo -->
    <a class="navbar-brand" href="/">
      <img src="./media/imtpilllogo.webp" alt="Logo" style="height:86px; margin-left: -9px !important;
    margin: 2px;">
    </a>

    <!-- Toggler (Mobile) -->
    <button class="navbar-toggler border-0" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Nav Links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav align-items-lg-center">
        <li class="nav-item"><a class="nav-link" href="executive-education.php">HOME</a></li>
        <li class="nav-item"><a class="nav-link" href="#recent-programs">MDPs @ IMTH</a></li>
        <li class="nav-item"><a class="nav-link" href="#calander">EDP CALENDAR</a></li>
        <li class="nav-item"><a class="nav-link" href="#offering">OFFERINGS</a></li>
        
        <!-- Dropdown Menu -->
        
      </ul>

      <!-- Contact Us Button -->
      <a href="../contact-us.php" class="btn btn-warning border-dark rounded-pill mx-3">
        CONTACT US
      </a>
    </div>
  </div>
</nav>


<!-- Back to Top Button -->
<button type="button" class="btn btn-warning btn-lg" id="btn-back-to-top"> ↑ </button>


<style>
/* Toggler */
.navbar-toggler {
  border-color: #ffffffff;
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23ffc107' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Announcement strip */
.announcement-strip {
  width: 100%;
  background: #ffc107;
  color: #000;
  padding: 8px 0;
  overflow: hidden;
  position: relative;   /* not sticky */
  z-index: 1031;
  text-align: center;
}
.announcement-text {
  display: inline-block;
  white-space: nowrap;
  padding-left: 100%;
  animation: scroll-left 15s linear infinite;
}
@keyframes scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Navbar positions */
.navbar {
  position: fixed;
  top: 0px;        /* sits below strip initially */
  left: 0;
  width: 100%;
  z-index: 9999;
  transition: top 0.3s ease;
}

/* When page scrolled past strip */
.navbar.navbar-scrolled {
  top: 0;
}
</style>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const collapseEl = document.getElementById('navbarNav');
  const toggler = document.querySelector('.navbar-toggler');
  const strip = document.querySelector('.announcement-strip');
  const stripHeight = strip ? strip.offsetHeight : 0;

  // Remove default bootstrap toggle behavior
  toggler.removeAttribute('data-bs-toggle');
  toggler.removeAttribute('data-bs-target');

  // Navbar scroll effect + close all dropdowns on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > stripHeight) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    // Close navbar + submenus if open
    if (collapseEl.classList.contains('show')) {
      collapseEl.classList.remove('show');
      collapseEl.style.height = '0px';
      collapseEl.querySelectorAll('.dropdown-submenu.show').forEach(sub => sub.classList.remove('show'));
    }
  });

  // Custom toggler click behavior
  toggler.addEventListener('click', () => {
    if (collapseEl.classList.contains('show')) {
      // Close navbar
      collapseEl.classList.remove('show');
      collapseEl.style.height = '0px';
      // Close all open submenus
      collapseEl.querySelectorAll('.dropdown-submenu.show').forEach(sub => sub.classList.remove('show'));
    } else {
      // Open navbar
      collapseEl.classList.add('show');
      collapseEl.style.height = collapseEl.scrollHeight + 'px';
    }
  });

  // Mobile submenu toggle
  document.querySelectorAll('.dropdown-submenu > a.dropdown-toggle').forEach(el => {
    el.addEventListener('click', function(e){
      if(window.innerWidth >= 1200) return; // desktop skip
      e.preventDefault();
      e.stopPropagation();

      const parent = this.parentElement;
      parent.classList.toggle('show');

      // Close sibling submenus
      parent.parentElement.querySelectorAll(':scope > .dropdown-submenu').forEach(sub => {
        if(sub !== parent) sub.classList.remove('show');
      });
    });
  });

  // Close all submenus when main collapse closes
  collapseEl.addEventListener('transitionend', () => {
    if (!collapseEl.classList.contains('show')) {
      collapseEl.querySelectorAll('.dropdown-submenu.show').forEach(sub => sub.classList.remove('show'));
    }
  });
});
</script>