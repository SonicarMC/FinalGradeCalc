// Theme changer
document.getElementById("theme-switcher").addEventListener("click", () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-theme");
    let newTheme = (dataTheme === "light") ? "dark" : "light";

    rootElem.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});