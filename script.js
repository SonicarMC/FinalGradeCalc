// Theme changer
document.getElementById("theme-switcher").addEventListener("click", () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute("data-theme");
    let themeSrc = document.getElementById("theme-switcher").src;

    if (dataTheme === "light"){
        newTheme = "dark";
        themeSrc = "assets/moon-icon.png";
    }else{
        newTheme = "light";
        themeSrc = "assets/sun-icon.png";
    }
    document.getElementById("theme-switcher").src = themeSrc;

    rootElem.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

document.getElementById("calculate-initiate-button").addEventListener("click", (e) => {
    let finalGradeValue = 0;
    let letterScore = "";
    let dropdownIdList = ["first-quarter", "second-quarter", "third-quarter", "fourth-quarter", "final-exam"]
    for(let i = 0; i < dropdownIdList.length; i++){
        finalGradeValue += parseFloat(document.getElementById(dropdownIdList[i]).value);
        console.log(finalGradeValue);
    }

    if(finalGradeValue >= 3.5) {
        letterScore="A";
    }else if(finalGradeValue >= 2.5){
        letterScore="B";
    }else if(finalGradeValue >= 1.5){
        letterScore="C";
    }else if(finalGradeValue >= 0.5){
        letterScore="D";
    }else if(finalGradeValue >= 0){
        letterScore="E";
    }

    document.getElementById("grade-output").textContent = "Final Grade:"+letterScore;
});
