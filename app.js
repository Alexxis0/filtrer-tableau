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
function createTable(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        let nouvelleLigne = document.createElement("tr");
        nouvelleLigne.innerHTML = `<td>${tableau[i].values}</td>`;
        document.querySelector("table").appendChild(nouvelleLigne);
    }
}
createTable(table);

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

function createFilter(filter) {
    console.log(filterAll.splice(12)); 
    for (let i = 0; i < filter.length; i++) {
        console.log(filter[i].values);
    }
}



// selectionner
function selection() {
    let optionAnimaux = document.querySelector(".select")[0].selected;
    let optionLangage = document.querySelector(".select")[1].selected;
    let optionNourriture = document.querySelector(".select")[2].selected;
    let optionAll = document.querySelector(".select")[3].selected;

    if (optionAnimaux == true) {
        createFilter(filterAnimaux)

    } else if (optionLangage == true) {
        createFilter(filterLangage);

    } else if (optionNourriture == true) {
        createFilter(filterNourriture)
        
    } else if (optionAll == true) {
        createFilter(filterAll)
    }
}
