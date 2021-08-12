export default (() => {
    const header = document.getElementById('topPanel');
    window.addEventListener('scroll', () => {
        header.style.cssText = (window.pageYOffset != 0 ? `background: #fff; box-shadow: 0 0 4px rgba(0, 0, 0, 0.5)` : null);
        header.querySelectorAll('svg, a').forEach(e => e.style.cssText = (window.pageYOffset != 0 ? `color: #000; fill: #000;` : null));
    })
})