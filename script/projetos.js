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



    const code = document.getElementById('card-one')

    code.innerHTML = `
<div class="card-one">
<pre>
<span class="card-cont">.SCRSYS </span><span class="card-key">&lcub;</span>

  SCRSYS (Sport Court Reservation System) 
  é um projeto que visa otimizar e inovar
  o processo de reserva, melhorar o ambiente
  escolar por meio da implementação de tecnologias
  para garantir um gerenciamento eficiente
  da quadra. Tudo o que é preciso fazer é
  acessar o sistema online e reservar o 
  horário desejado com apenas alguns cliques.

  <a href="https://github.com/MuriloZague/SCRSYS" target="blank">https://github.com/MuriloZague/SCRSYS </a>

<span class="card-key">&rcub;</span></pre>
</div>
`