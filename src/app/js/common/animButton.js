class AnimButton {
    constructor(elem, nameAnim, timeout) {
        this.elem = elem;
        this.name = nameAnim;
        this.timeout = timeout;
        this.__init__();
    }

    __init__() {
        this.circle = document.createElement('span');
        this.circle.style.cssText = `
            position: absolute;
            background: #fff;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
        `;

        this._setMove();
        this._setAnim();
        this._remElem();
    }

    _setMove() {
        this.elem.target.append(this.circle);

        this.x = this.elem.clientX - this.elem.target.offsetLeft,
            this.y = this.elem.clientY - this.elem.target.offsetTop;
        this.d = Math.max(this.elem.target.offsetWidth, this.elem.target.offsetHeight);

        this.circle.style.left = `${this.x}px`,
            this.circle.style.top = `${this.y}px`;
    }

    _setAnim() {
        this.DOMStyle = document.createElement('style');
        this.DOMStyle.type = 'text/css';
        this.DOMStyle.id = `${this.name}Keyframes`;
        document.head.append(this.DOMStyle);

        this.circle.style.animation = `${this.name} ${this.timeout}s linear`;
        this.DOMStyle.sheet.insertRule(
            `@keyframes opacity {
                0% {
                    width: 0px;
                    height: 0px;
                    opacity: 0.6;
                }
                
                100% {
                    width: ${this.d}px;
                    height: ${this.d}px;
                    opacity: 0;
                }
            }`,
            this.DOMStyle.sheet.cssRules.length);
    }

    _remElem() {
        setTimeout(() => {
            this.DOMStyle.remove();
            this.circle.remove();
        }, this.timeout * 1000);
    }
}

export default ((elem, ...arg) => {
    elem.target.style.cssText = `position: relative; overflow: hidden;`;
    new AnimButton(elem, ...arg);
})