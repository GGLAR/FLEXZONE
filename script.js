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

if (u === "ANGELO VERZO" && p === "HAHAHA") {
  localStorage.setItem("adminAuth", "1");
  location.reload();
}

arr[index] = { 
  ...u, 
  name: newName, 
  email: newEmail, 
  program: newProgram, 
  plan: newPlan,
  dateEnd: newDateEnd 
};

document.querySelectorAll('.class-card img').forEach((img) => {
  const uploader = document.createElement("input");
  uploader.type = "file";
  uploader.accept = "image/*";
  uploader.className = "upload-each";
  img.insertAdjacentElement("afterend", uploader);

  uploader.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result; 
    };
    reader.readAsDataURL(file);
  });
});

document.querySelectorAll('.upload-btn').forEach(input => {
  input.addEventListener('change', function () {
    const imgId = this.getAttribute('data-img');
    const imgTag = document.getElementById(imgId);
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      imgTag.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
});

document.querySelectorAll('.class-grid img').forEach((img) => {
  if (img.id.startsWith("img-")) return;

  const uploader = document.createElement("input");
  uploader.type = "file";
  uploader.accept = "image/*";
  uploader.className = "upload-bottom";
  img.insertAdjacentElement("afterend", uploader);

  uploader.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
});

const images = {
  bicep: "biceps.jpg",
  chest: "chest.jpg",
  leg: "leg.jpg",
  cardio: "cardio.jpg",
  back: "back.jpg",
  core: "core.jpg",
  arm: "arm.jpg",
  recovery: "recovery flow.jpg",
  zumba: "zumba.png"
};

document.getElementById("img-bicep").src = images.bicep;
document.getElementById("img-chest").src = images.chest;
document.getElementById("img-leg").src = images.leg;
document.getElementById("img-cardio").src = images.cardio;
document.getElementById("img-back").src = images.back;
document.getElementById("img-core").src = images.core;
document.getElementById("img-arm").src = images.arm;
document.getElementById("img-recovery").src = images.recovery;
document.getElementById("img-zumba").src = images.zumba;
