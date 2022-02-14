var title1 = document.querySelector(".title-p1");
var title2 = document.querySelector(".title-p2");

console.log(document.querySelector(".header"));

function alternateTitle() {
    if (title1.innerText.includes("不動")) {
        title1.innerText = "Fudo";
        title2.innerText = "Investments";
    } else if (title1.innerText.includes("Fudo")) {
        title1.innerText = "不動投資";
        title2.innerText = "";
    }
}

document.querySelector(".header-container-items").addEventListener("click", (e) => {
    document.querySelectorAll(".header-items a").forEach((element) => {
        element.classList.remove("active");
    });

    console.log(e.target);
    e.target.classList.add("active");
});