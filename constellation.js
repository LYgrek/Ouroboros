// Importer GSAP si tu utilises un module bundler
// import gsap from "gsap";

// Liste des constellations
const listConstellationTop = [
    { name: 'gemeaux', img1: './image/gemeaux.png', img2: './image/gemeaux1.png' },
    { name: 'taureau', img1: './image/taureau.png', img2: './image/taureau1.png' },
    { name: 'belier', img1: './image/belier.png', img2: './image/belier1.png' },
    { name: 'poissons', img1: './image/poissons.png', img2: './image/poissons1.png' },
    { name: 'verseau', img1: './image/verseau.png', img2: './image/verseau1.png' },
    { name: 'capricorne', img1: './image/capricorne.png', img2: './image/capricorne1.png' },
,

];

const galaxieTop = document.querySelector(".galaxie-top");

listConstellationTop.forEach((item, index) => {
    let setImage = false
    // Créer l'élément image
    const img = document.createElement("img");
    img.src = item.img1;
    img.alt = item.name;
    img.classList.add("img-brillante");
    img.classList.add(item.name);
    img.setAttribute("data-index", index);

    // Ajouter l'image à .galaxie-top
    galaxieTop.appendChild(img);
console.log(img.src.includes);

    // Ajouter un événement click à chaque image
    img.addEventListener("click", function () {
      
            console.log('false');
            if (!setImage) {

                img.src = item.img2;
                img.classList.remove("img-brillante");
                img.classList.add("image2");
                setImage=true
            }
            else {
            console.log('tur');
            img.src = item.img1;
            img.classList.remove("image2");
            img.classList.add("img-brillante");
            setImage=false
        }
    });

    // Animation GSAP pour effet lumineux
   
});
const listConstellationBottom = [
    { name: 'cancer', img1: './image/cancer.png', img2: './image/cancer1.png' },
    { name: 'lion', img1: './image/lion.png', img2: './image/lion1.png' },
    { name: 'vierge', img1: './image/vierge.png', img2: './image/vierge1.png' },
    { name: 'balance', img1: './image/balance.png', img2: './image/balance1.png' },
    { name: 'scorpion', img1: './image/scorpion.png', img2: './image/scorpion1.png' },
    { name: 'sagittaire', img1: './image/sagittaire.png', img2: './image/sagittaire1.png' },
,

];

const galaxieBottom = document.querySelector(".galaxie-bottom");

listConstellationBottom.forEach((item, index) => {
    let setImage = false
    // Créer l'élément image
    const img = document.createElement("img");
    img.src = item.img1;
    img.alt = item.name;
    img.classList.add("img-brillante");
    img.classList.add(item.name);
    img.setAttribute("data-index", index);

    // Ajouter l'image à .galaxie-top
    galaxieBottom.appendChild(img);
console.log(img.src.includes);

    // Ajouter un événement click à chaque image
    img.addEventListener("click", function () {
      
            console.log('false');
            if (!setImage) {

                img.src = item.img2;
                img.classList.remove("img-brillante");
                img.classList.add("image2");
                setImage=true
            }
            else {
            console.log('tur');
            img.src = item.img1;
            img.classList.remove("image2");
            img.classList.add("img-brillante");
            setImage=false
        }
    });

    // Animation GSAP pour effet lumineux
   
});
