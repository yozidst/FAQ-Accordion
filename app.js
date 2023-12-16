const sections = document.querySelectorAll(".questions");


function button(index) {
    const plusIcon = document.querySelector(`#button${index}`);
    plusIcon.src = plusIcon.src.includes('plus') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
}

sections.forEach((section, index) => {
    section.addEventListener('click', () => {
      button(index)
      section.classList.toggle('active')
    })
  })
