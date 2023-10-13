let isVisibleMenu = false;

    const buttonMenu = document.getElementById('button-menu');
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('.items');

    const toggleMenu = () => {
      if (isVisibleMenu) {
        menu.classList.remove('visible');
      } else {
        menu.classList.add('visible');
      }
      isVisibleMenu = !isVisibleMenu;
    };

    const closeMenu = () => {
      menu.classList.remove('visible');
      isVisibleMenu = false;
    };

    buttonMenu.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });


const code2 = document.getElementById('card-two')

code2.innerHTML = `
<div class="card-item">
<pre>
<span class="card-cont">.contatos </span><span class="card-key">&lcub;</span>

  github: <span class="card-tags"><a href="https://github.com/MuriloZague" target="blank">github.com/MuriloZague;</a></span>
  linkedin: <span class="card-tags"><a href="https://www.linkedin.com/in/murilo-zague/" target="blank">linkedin.com/in/murilo-zague;</a></span>
  instagram: <span class="card-tags"><a href="https://www.instagram.com/murilo_bz/" target="blank">instagram.com/murilo_bz;</a></span>
  whatsapp: <span class="card-tags"><a href="https://wa.link/gjxre9" target="blank">https://wa.link/gjxre9;</a></span>
  
<span class="card-key">&rcub;</span></pre>
</div>
`