(function(){
  const menuToggle = document.querySelectorAll(".menu-toggle");
  const navs = document.querySelectorAll("nav");

  function toggleNav(e){
    const nav = e.currentTarget.parentElement.querySelector('nav');
    if(!nav) return;
    const isOpen = nav.classList.toggle("active");
    if(isOpen){
      nav.style.display = 'flex';

      const firstLink = nav.querySelector('a');
      if(firstLink) firstLink.focus();
    } else {
      nav.style.display = '';
    }
  }

  menuToggle.forEach(btn => {
    btn.addEventListener('click', toggleNav);
  });

  document.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      navs.forEach(nav=>{
        const toggle = nav.parentElement.querySelector('.menu-toggle');
        if(!nav.contains(e.target) && !toggle.contains(e.target)){
          nav.classList.remove('active');
          nav.style.display = '';
        }
      });
    }
  });

  const btnObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.boxShadow = "0 0 20px #ff1a2d";
      } else {
        entry.target.style.boxShadow = "none";
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.btn-primary').forEach(btn=>{
    btnObserver.observe(btn);
  });

  document.querySelectorAll('nav a').forEach(a=>{
    a.addEventListener('click', function(){
      const nav = this.closest('nav');
      if(nav && window.innerWidth <= 768){
        nav.classList.remove('active');
        nav.style.display = '';
      }
    });
  });

  function handleResize(){
    document.querySelectorAll('nav').forEach(nav=>{
      if(window.innerWidth > 768){
        nav.style.display = 'flex';
      } else {
        nav.style.display = '';
        nav.classList.remove('active');
      }
    });
  }
  window.addEventListener('resize', handleResize);
  handleResize();

})();
