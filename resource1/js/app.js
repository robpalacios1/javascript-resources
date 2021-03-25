function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyboardEvent}"].dataset.key`);
    const key = document.querySelector(`.key[data-key="${e.keyboardEvent}"].dataset.key`);
    if(!audio) return // stop
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transition') return // skip if it not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);