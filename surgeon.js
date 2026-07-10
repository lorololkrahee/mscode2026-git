const btns = document.querySelectorAll(".rpil button");

btns.forEach(btn => {
    btn.onclick = function () {
        this.textContent = "Comprado!";
    };
});