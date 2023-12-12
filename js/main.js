const backTop = document.querySelector(".back-top");

const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});

const hidden = document.querySelectorAll(".hide");
hidden.forEach((el) => obeserver.observe(el));

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400){
        backTop.classList.add("active");
    }else{
        backTop.classList.remove("active");
    }
})