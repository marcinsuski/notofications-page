const markAllRead = document.querySelector(".read");
const newItems = document.querySelectorAll(".notif_item");
const notifNumber = document.querySelector(".notif_number");
const dot = document.querySelectorAll(".status");

markAllRead.addEventListener("click", function toggleNew() {
    newItems.forEach((item) => {
        item.classList.remove("new");
    });
    dot.forEach((item) => {
        item.classList.remove("new");
    });
    notifNumber.classList.add("empty");
});
