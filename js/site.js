let audio = document.getElementById("audio");
let btn = document.querySelector(".music");
let playing = false;

function toggleMusic() {
    if (!audio) return;

    if (!playing) {
        audio.play();
        btn.classList.add("spin"); // 👈 xoay
    } else {
        audio.pause();
        btn.classList.remove("spin"); // 👈 dừng
    }

    playing = !playing;
}
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});
document.addEventListener("dragstart", function (e) {
    e.preventDefault();
});