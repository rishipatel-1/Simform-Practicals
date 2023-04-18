interface LinkElement extends HTMLElement {
    onclick: () => void;
  }
  
  interface LinkElementWithOnClick extends LinkElement {
    onclick: () => void;
  }
  
  const homeSection: LinkElementWithOnClick = document.getElementById('homeSection') as LinkElementWithOnClick;
  const aboutSection: LinkElementWithOnClick = document.getElementById('aboutSection') as LinkElementWithOnClick;
  const imagesSection: LinkElementWithOnClick = document.getElementById('imagesSection') as LinkElementWithOnClick;
  const servicesSection: LinkElementWithOnClick = document.getElementById('servicesSection') as LinkElementWithOnClick;
  
  homeSection.onclick = ():void => {
    toggleSection();
  };
  aboutSection.onclick = ():void => {
    toggleSection();
  };
  imagesSection.onclick = ():void => {
    toggleSection();
  };
  servicesSection.onclick = () => {
    toggleSection();
  };
  
  function toggleSection():void {
    const collapseElements: NodeListOf<Element> = document.querySelectorAll('.collapse');
    collapseElements.forEach(collapseElement => {
      collapseElement.classList.remove('show');
    });
  }
  
  