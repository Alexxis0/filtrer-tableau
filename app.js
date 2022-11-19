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
// create element html
function createTable(filterTable) {
    for (let i = 0; i < filterTable.length; i++) {
        let nouvelleLigne = document.createElement("tr");
        nouvelleLigne.innerHTML = `<td>${filterTable[i].values}</td>`;
        document.querySelector("table").appendChild(nouvelleLigne);
    }
}




// filter
let filterAnimaux = table.filter((item) => {
    return item.catégorie == "animaux";
});

let filterLangage = table.filter((item) => {
    return item.catégorie == "langage";
});

let filterNourriture = table.filter((item) => {
    return item.catégorie == "nourriture";
});

let filterAll = table.filter((item) => {
    return item.catégorie;
});

// selectionner
function selection() {
    let optionAnimaux = document.querySelector(".select")[0].selected;
    let optionLangage = document.querySelector(".select")[1].selected;
    let optionNourriture = document.querySelector(".select")[2].selected;
    let optionAll = document.querySelector(".select")[3].selected;
    
    if (optionAnimaux == true) {
        createTable(filterAnimaux);
        
        
        
    } else if (optionLangage == true) {
        createTable(filterLangage);
        
        
        
    } else if (optionNourriture == true) {
        createTable(filterNourriture)
        
        
        
    } else if (optionAll == true) {
        createTable(filterAll)
    }
}
