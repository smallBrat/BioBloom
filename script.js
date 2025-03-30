document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");

    // Toggle Menu on Click
    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active"); // Toggle visibility
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !sideMenu.contains(event.target)) {
            sideMenu.classList.remove("active");
        }
    });
}); 

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sideMenu = document.querySelector(".side-menu");

    menuIcon.addEventListener("click", function () {
        sideMenu.classList.toggle("active"); // Toggle sidebar visibility
    });

    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !sideMenu.contains(event.target)) {
            sideMenu.classList.remove("active"); // Close menu when clicking outside
        }
    });
});

