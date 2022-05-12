function slide_left(url) {
    slide_up()
    const slideout = document.getElementsByClassName('slide-out-after');
    for (var value of slideout) {
        value.classList.add('slide-left');
        window.setTimeout(() => {
            value.classList.add('hidden');
            window.location.href = url;
        }, 1500);
    }
}

function slide_right(url) {
    slide_up()
    const slideout = document.getElementsByClassName('slide-out-after');
    for (var value of slideout) {
        value.classList.add('slide-right');
        window.setTimeout(() => {
            value.classList.add('hidden');
            window.location.href = url;
        }, 1500);
    }
}

function slide_up() {
    const slideout = document.getElementsByClassName('slide-up-after');
    for (var value of slideout) {
        value.classList.add('slide-up');
        value.classList.remove('slide-up-after');
        setTimeout(() => { value.classList.add('hidden'); }, 500)
    }
}