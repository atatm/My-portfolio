const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('menu-close');

menuIcon.onclick = function () {
  mobileMenu.classList.toggle('open-mobileMenu');
};

closeIcon.onclick = function () {
  mobileMenu.classList.remove('open-mobileMenu');
};

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('open-mobileMenu');
}));

const projects = [
  {
    id: 'card1',
    img: {
      src: 'images/deskcard1.png',
      alt: 'card image 1',
    },
    title: 'Tonic',
    list: ['CANOPY', 'Back End Dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printings and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['HTML', 'css', 'Ruby and rails', 'javascript'],
  },
  {
    id: 'card2',
    img: {
      src: 'images/deskcard4.png',
      alt: 'card image 2',
    },
    title: 'Multi-Post <br> Stories',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 'card3',
    img: {
      src: 'images/deskcard5.png',
      alt: 'card images 3',
    },
    title: 'Facebook 360',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 'card4',
    img: {
      src: 'images/deskcard8.png',
      alt: 'card image 4',
    },
    title: 'Uber Navigation',
    list: ['Canopy', 'Back End Dev', '2015'],
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['HTML', 'Ruby on rails', 'css', 'javascript'],
  },
];

const modalOverlay = document.querySelector('.modal-overlay');
function createModal() {
  projects.forEach((input) => {
    modalOverlay.innerHTML += `
    <div class="modal" aria-controls="${input.id}">
      <h6>${input.title}</h6> 
      <span class="close">&times;</span>
      <ul class="modal-list">
        <li id="canopy-modal">${input.list[0]}</li>
        <li><img src="images/Canopy.png" alt="point image" /></li>
        <li>${input.list[1]}</li>
        <li><img src="images/Canopy.png" alt="point image" /></li>
        <li>${input.list[2]}</li>
      </ul>
        <img class="modal-img" src="${input.img.src}" alt="${input.img.alt}" />
        <div class="description-container">
          <p class="modal-description">
            ${input.description}
          </p>
          <div class="program-language">
            <ul id="language-names">
              <li>${input.languages[0]}</li>
              <li>${input.languages[1]}</li>
              <li>${input.languages[2]}</li>
              <li>${input.languages[3]}</li>
            </ul>
            <hr>
            <div class="modal-btns">
              <button id="seeLive" href="">
              See Live
              <img src="images/see-live.png" alt="Live img" />
              </button>
              <button id="seeSource" href="">
              See Source
              <img src="images/see-source.png" alt="Github logo" />
              </button>
            </div>
          </div>
        </div>
      
    </div> `;
  });
}
createModal();

const popupOverlay = document.querySelector('.modal-overlay');
const seeProjects = document.querySelectorAll('.see-projects');
const modal = popupOverlay.querySelectorAll('.modal');

seeProjects.forEach((card) => {
  card.onclick = () => {
    popupOverlay.style.display = 'flex';

    const link = card.getAttribute('data-card');
    modal.forEach((s) => {
      const button = s.getAttribute('aria-controls');
      if (link === button) {
        s.classList.add('active');
      }
    });
  };
});

modal.forEach((close) => {
  close.querySelector('.close').onclick = () => {
    close.classList.remove('active');
    popupOverlay.style.display = 'none';
  };
});

const form = document.getElementById('form');
const email = document.getElementById('mail');
const showerror = document.getElementById('error');

form.addEventListener('submit', (func) => {
  const errormessage = 'Email must be a Lowercase,you include un upperCase letter';
  if (email.value.toLowerCase() !== email.value) {
    func.preventDefault();
    showerror.innerText = errormessage;
    showerror.style.opacity = 1;
  } else {
    form.submit();
  }
});

const Name = document.getElementById('name').value;
const Email = document.getElementById('mail').value;
const Msg = document.getElementById('msg').value;

form.addEventListener('submit', (fun) => {
  const nid = localStorage.setItem('Name', Name);
  const eid = localStorage.setItem('Email', Email);
  const mid = localStorage.setItem('Msg', Msg);

  const gnid = localStorage.getItem('Name', Name);
  const geid = localStorage.getItem('Email', Email);
  const gmid = localStorage.getItem('Msg', Msg);
});
