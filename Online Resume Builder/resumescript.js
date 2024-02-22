let newestTextarea = null;
function addNewSkill() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter Your Skill');

    let skOb= document.getElementById("sk");
    let skillAddButtonOb= document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skillAddButtonOb);
    newestTextarea = newNode;
}

function removeSkill(button){
    let textarea = button.parentNode.previousElementSibling;
    if (textarea.classList.contains('skField')) {
        textarea.remove();
    }
}

 function addNewProject(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter Your Project');

    let PrOb= document.getElementById("pr");
    let proAddButtonOb= document.getElementById("pAddButton");

    PrOb.insertBefore(newNode, proAddButtonOb);
}

function removeProject(button){
    let textarea = button.parentNode.previousElementSibling;
    if (textarea.classList.contains('pField')) {
        textarea.remove();
    }
}

function addNewWorkExperience(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter Your Experience');

    let PrOb= document.getElementById("we");
    let proAddButtonOb= document.getElementById("weAddButton");

    PrOb.insertBefore(newNode, proAddButtonOb);
}

function removeWorkExperience(button){
    let textarea = button.parentNode.previousElementSibling;
    if (textarea.classList.contains('weField')) {
        textarea.remove();
    }
}

function addNewAcademic(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter Your Academic Details');

    let PrOb= document.getElementById("aq");
    let proAddButtonOb= document.getElementById("aqAddButton");

    PrOb.insertBefore(newNode, proAddButtonOb);
}

function removeAcademic(button){
    let textarea = button.parentNode.previousElementSibling;
    if (textarea.classList.contains('aqField')) {
        textarea.remove();
    }
}

// generating resume
function generateResume() {
    let selectedTemplate = document.querySelector('input[name="template"]:checked').value;

    let nameField = document.getElementById("nameField").value;
    let contactField = document.getElementById("contactField").value;
    let addressField = document.getElementById("addressField").value;
    let mailidField = document.getElementById("mailidField").value;
    let linkedinField = document.getElementById("linkedinField").value;
    let githubField = document.getElementById("githubField").value;
    let objectiveField = document.getElementById("objectiveField").value;

    let template = document.getElementById(selectedTemplate);
    template.querySelector("#nameT").innerHTML = nameField;
    template.querySelector("#nameT1").innerHTML = nameField;
    template.querySelector("#contactT").innerHTML = contactField;
    template.querySelector("#addressT").innerHTML = addressField;
    template.querySelector("#mailT").innerHTML = mailidField;
    template.querySelector("#linkedT").innerHTML = linkedinField;
    template.querySelector("#gitT").innerHTML = githubField;
    template.querySelector("#objectiveT").innerHTML = objectiveField;

    let sks = document.getElementsByClassName("skField");
    let skillList = "";
    for (let e of sks) {
        skillList += `<li>${e.value}</li>`;
    }
    template.querySelector("#skillT").innerHTML = skillList;

    let prs = document.getElementsByClassName("pField");
    let projectList = "";
    for (let e of prs) {
        projectList += `<li>${e.value}</li>`;
    }
    template.querySelector("#ProjectT").innerHTML = projectList;

    let wes = document.getElementsByClassName("weField");
    let experienceList = "";
    for (let e of wes) {
        experienceList += `<li>${e.value}</li>`;
    }
    template.querySelector("#weT").innerHTML = experienceList;

    let aqs = document.getElementsByClassName("aqField");
    let qualificationList = "";
    for (let e of aqs) {
        qualificationList += `<li>${e.value}</li>`;
    }
    template.querySelector("#aqT").innerHTML = qualificationList;

    document.getElementById("cv-form").style.display = "none";
    template.style.display = "block";
}


function printResume(){
    window.print();
}