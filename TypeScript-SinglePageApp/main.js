var homeSection = document.getElementById('homeSection');
var aboutSection = document.getElementById('aboutSection');
var imagesSection = document.getElementById('imagesSection');
var servicesSection = document.getElementById('servicesSection');
homeSection.onclick = function () {
    toggleSection();
};
aboutSection.onclick = function () {
    toggleSection();
};
imagesSection.onclick = function () {
    toggleSection();
};
servicesSection.onclick = function () {
    toggleSection();
};
function toggleSection() {
    var collapseElements = document.querySelectorAll('.collapse');
    collapseElements.forEach(function (collapseElement) {
        collapseElement.classList.remove('show');
    });
}
