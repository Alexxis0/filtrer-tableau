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
// create element
function createTable(item) {
    const nouvelleLigne = document.createElement("tr");
    nouvelleLigne.innerHTML = `<td>${item}</td>`;
    document.querySelector("table").appendChild(nouvelleLigne);
}

createTable(table[0].values);
createTable(table[1].values);
createTable(table[2].values);
createTable(table[3].values);
createTable(table[4].values);
createTable(table[5].values);
createTable(table[6].values);
createTable(table[7].values);
createTable(table[8].values);
createTable(table[9].values);
createTable(table[10].values);
createTable(table[11].values);


// filter
let selectAnimaux = table.filter((item) => {
    return item.catégorie == "animaux";
});
let selectLangage = table.filter((item) => {
    return item.catégorie == "langage";
});
let selectNourriture = table.filter((item) => {
    return item.catégorie == "nourriture";
});
let selectAll = table.filter((item) => {
    return item.catégorie;
});





function selection() {
    let optionAnimaux = document.querySelector(".select")[0].selected;
    let optionLangage = document.querySelector(".select")[1].selected;
    let optionNourriture = document.querySelector(".select")[2].selected;
    let optionAll = document.querySelector(".select")[3].selected;
    
    
    
    
    if (optionAnimaux == true) {
        console.log("vrai animaux");
        console.log(selectAnimaux);
        selectAnimaux
    } else if (optionLangage == true) {
        console.log("vrai langage");
        console.log(selectLangage);
    } else if (optionNourriture == true) {
        console.log("vrai nourriture");
        console.log(selectNourriture);
    } else if (optionAll == true) {
        console.log("vrai all");
        console.log(selectAll);
    }
}
