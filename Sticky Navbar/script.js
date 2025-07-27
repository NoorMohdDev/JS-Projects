const container = document.querySelector(".container");
const heading = document.querySelector("h1");

document.addEventListener("scroll", () => {
if (Math.floor(document.documentElement.scrollTop)>heading.offsetHeight) {
    container.style.position ="fixed"
    container.style.top=0
    container.nextElementSibling.style.marginTop=`${container.scrollHeight}px`

}else{
    container.style.position ="relative"
    container.nextElementSibling.style.marginTop="0px"
}
});
