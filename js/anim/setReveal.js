import scrollReveal from "./scroll-reveal.js";
function setReveal() {
    const nodes = Array.from(document.querySelectorAll(".anim-reveal"));
    window.addEventListener("scroll", () => {
        nodes.forEach(scrollReveal);
    });
}
export default setReveal;
