const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", () => {
    jump();
});

function jump() {
    // * добавляем класс 'jump' к dino
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    }
    // * удаляем класс 'jump' у dino через 0.4 сек
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(() => {
    //*  getComputedStyle - получает значение всех computed свойств элемента
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft > 0 && cactusLeft < 60 && dinoTop >= 140) {
        alert("Game Over!");
    }
});