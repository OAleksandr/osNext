window.addEventListener('load', function()
{
    let btnWork = document.querySelector("#btn-work-accord");
    let btnEducation = document.querySelector("#btn-education-accord");

    btnWork.addEventListener("click", (e) =>{
        e.preventDefault();

        let arrowDown = document.querySelector(".arrow-down");
        let state = document.querySelector(".show");

        arrowDown.classList.add("hidden");

        if(state != null){
            arrowDown.classList.remove("hidden");
        }
    });

    btnEducation.addEventListener("click", (e) =>{
        e.preventDefault();

        let arrowDown = document.querySelector(".arrow-down-two");
        let state = document.querySelector(".show");

        arrowDown.classList.add("hidden");

        if(state != null){
            arrowDown.classList.remove("hidden");
        }
    });
    // **************************************************************
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      // **********************************************************

      baguetteBox.run('.swiper-wrapper', {
        animation: 'fadeIn',
        noScrollbars: true
      });


}, false);