document.addEventListener("DOMContentLoaded", () => {
    const chatbox1 = document.getElementById("chatbox1");
    const chatbox2 = document.getElementById("chatbox2");
    const loader = document.getElementById("loader");

    chatbox1.style.display = "block";
    chatbox2.style.display = "none";
    loader.style.display = "none";

    setTimeout(() => {
        chatbox1.classList.add("move-up");
        loader.style.display = "block";
    }, 2500);

    setTimeout(() => {
        chatbox2.style.display = "block";
        chatbox1.classList.remove("move-up");
        loader.style.display = "none";
        chatbox1.style.transform = "translateY(-0px)";
    }, 4500);
});

