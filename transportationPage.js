const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const indicatorParents = document.querySelector('.controls ul')
var mainContentIndex = 0; 

function setIndex(){
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (mainContentIndex) * -25 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        mainContentIndex = ind;
        setIndex();
        indicator.classList.add('selected')
    });
});

leftArrow.addEventListener('click', function(){
    mainContentIndex = (mainContentIndex > 0) ? mainContentIndex - 1 : 0;
    setIndex();
    indicatorParents.children[mainContentIndex].classList.add('selected');
});
rightArrow.addEventListener('click', function(){
    mainContentIndex = (mainContentIndex < 3) ? mainContentIndex + 1 : 3;
    setIndex();
    indicatorParents.children[mainContentIndex].classList.add('selected');
});