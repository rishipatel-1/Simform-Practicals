const guideSection = document.getElementById('guide');
const watchSection = document.getElementById('watches');
const acessoriesSection = document.getElementById('accessories');
const serviceSection = document.getElementById('service');

guideSection.onclick = () => {
  sectionChange();
}
watchSection.onclick = () => {
  sectionChange();
}
acessoriesSection.onclick = () => {
  sectionChange();
}
serviceSection.onclick = () => {
  sectionChange();
}

function sectionChange() {
  console.log("")
}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})