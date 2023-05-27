const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrows, i) => {
    arrow.addEventListener("click",function (){
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyşeMap().get ("transform")[2].x.value - 300 }px)`
    });
});