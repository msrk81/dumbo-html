
let progress = document.getElementById("aboutMeSkillsProgressCont")
let eduction = document.getElementById("aboutMeSkillsEductionCont")
let skillme = document.getElementById("aboutMeSkillsMe")
let skillBtn = document.getElementById("skillBTN")
let eductionBtn = document.getElementById("progressBTN")
let progressBtn = document.getElementById("eductionBTN")

function aboutMeFunc(param) {
    switch (param) {
        case "eduction":
            amF(eduction, progress, skillme, eductionBtn, progressBtn, skillBtn)
            break
        case "progress":
            amF(progress, eduction, skillme, progressBtn, skillBtn, eductionBtn)
            break;
        case "skillme":
            amF(skillme, progress, eduction, skillBtn, eductionBtn, progressBtn)
            break;
    }
}

function amF(show, remove1, remove2, showBtn, remove1Btn, remove2Btn) {
    show.style.display = "block"
    remove1.style.display = "none"
    remove2.style.display = "none"
    showBtn.style.color = "var(--primeryColor)"
    remove1Btn.style.color = "var(--secendyColor)"
    remove2Btn.style.color = "var(--secendyColor)"
}