'use strict';

import '../style/style.scss';

import _setAnimButton from "./js/common/animButton";
import _setAnimHeader from "./js/common/animHead";

document.querySelectorAll('.openProg').forEach(button => {
    button.addEventListener('click', (e) => {
        _setAnimButton(e, 'opacity', 0.4);
    })
})
_setAnimHeader();