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
    



}, false);