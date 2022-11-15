let select = document.querySelector(".select");

let table = [
    {
        values: "chien",
        catégorie: "animaux",
    },
    {
        values: "chat",
        catégorie: "animaux",
    },
    {
        values: "carotte",
        catégorie: "nourriture",
    },
    {
        values: "cheval",
        catégorie: "animaux",
    },
    {
        values: "éléphant",
        catégorie: "animaux",
    },
    {
        values: "tanuki",
        catégorie: "animaux",
    },
    {
        values: "viande",
        catégorie: "nourriture",
    },
    {
        values: "céréales",
        catégorie: "nourriture",
    },
    {
        values: "PHP",
        catégorie: "langage",
    },
    {
        values: "JAVA",
        catégorie: "langage",
    },
    {
        values: "HTML",
        catégorie: "langage",
    },
    {
        values: "CSS",
        catégorie: "langage",
    },
];



function tableau(values){
    const ligneTable = document.createElement('tr')
    ligneTable.innerHTML = `${values}`;
    document.querySelector("td").appendChild(ligneTable);
}










let selectAnimaux = table.filter((item) => {
    return item.catégorie == "animaux";
});
let selectLangage = table.filter((item) => {
    return item.catégorie == "langage";
});
let selectNourriture = table.filter((item) => {
    return item.catégorie == "nourriture";
});

console.log(selectAnimaux);
console.log(selectLangage);
console.log(selectNourriture);

function selection() {
    let optionAnimaux = document.querySelector(".select")[0].selected;
    let optionLangage = document.querySelector(".select")[1].selected;
    let optionNourriture = document.querySelector(".select")[2].selected;
    let optionAll = document.querySelector(".select")[3].selected;

    if (optionAnimaux == true) {
        console.log("vrai animaux");
    } else if (optionLangage == true) {
        console.log("vrai langage");
    } else if (optionNourriture == true) {
        console.log("vrai nourriture");
    } else if (optionAll == true) {
        console.log("vrai all");
    }
}
