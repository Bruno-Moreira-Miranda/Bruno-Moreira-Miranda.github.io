function scrollReveal(element) {
    const { top, height } = element.getBoundingClientRect();
    const revealStart = window.innerHeight / 2 + height;
    const revealEnd = window.innerHeight / 2 - height;
    function isOnRevealRange() {
        return top + height / 2 <= revealStart && top + height / 2 >= revealEnd;
    }
    if (isOnRevealRange())
        element.classList.add("anim-reveal--show");
    else
        element.classList.remove("anim-reveal--show");
}
export default scrollReveal;
