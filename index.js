id = setInterval(frame, 5);


function frame() {
    if (id < 5) {
        clearInterval(id);
    } else {
       setInterval(frame, 7);
    }
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animation");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++
            elem.style.top = pos + 'px'
            elem.style.left = pos + 'px'
        }
    }
}

