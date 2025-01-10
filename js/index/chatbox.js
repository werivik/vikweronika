document.addEventListener("DOMContentLoaded", () => {
    const chatbox1 = document.getElementById("chatbox1");
    const chatbox2 = document.getElementById("chatbox2");
    const loader = document.getElementById("loader");
    const chatBobbles = document.getElementById("chatBobbles");
    const profile = document.getElementById("myProfilePic");

    chatbox1.style.display = "block";
    chatbox2.style.display = "none";
    loader.style.display = "none";
    chatBobbles.style.top = "35%";
    profile.style.top = "34%";

    setTimeout(() => {
        chatbox1.classList.add("move-up");
    }, 2700);

    setTimeout(() => {
        loader.style.display = "block";
    }, 3000);

    setTimeout(() => {
        chatbox2.style.display = "block";
        chatbox1.classList.remove("move-up");
        loader.style.display = "none";
        chatbox1.style.transform = "translateY(-0px)";
        chatBobbles.style.top = "25%";
        profile.style.top = "63.5%";
    }, 4500);
});

