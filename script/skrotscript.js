buildmenu();

let totalprice = 0;

function buildmenu() {
    /*  Resultat ska likna:      
        <ul>
            <tr>
                <li><a class="firstnava" href="index.html">Startsida</a></li>
                <li><a href="products.html">Produkter</a></li>
                <li><a href="media.html">Media</a></li>
                <li><a href="contactus.html">Kontakta oss</a></li>
            </tr>
        </ul> */

    document.getElementById("meny").innerHTML = "";

    let links =
        [
            ["Startsida", "index.html"],
            ["Produkter", "products.html"],
            ["Media", "media.html"],
            ["Kontakta oss", "contactus.html"]
        ]

    for (let i = 0; i < links.length; i++) {
        //Skapa element <li>-taggen
        let listitem = document.createElement("li");
        //skapa <a>-taggen
        let link = document.createElement("a");
        // <a href=""> skapa href för <a>-taggen. 
        //links-arrayen där man är (alltså i) och även [1] som betyder att man väljer själva länken.
        link.href = links[i][1];
        //Skapa vad som ska stå i <a>-taggen alltså namnet som hör ihop med länken
        //Lägg in text i <a>
        link.appendChild(document.createTextNode(links[i][0]));
        //appendChild = lägger till ett element sist inuti valt element.
        //Lägg in <a> i <li>
        listitem.appendChild(link);
        //Lägg in <li> i <ul> dvs det som skrivits i html
        document.getElementById("meny").appendChild(listitem);
    }
}

function change() {
    totalprice = 0;


    let price1 = document.getElementById("item1").textContent;
    let price2 = document.getElementById("item2").textContent;
    let price3 = document.getElementById("item3").textContent;

    price1 = numberWithoutSpaces(price1);
    price2 = numberWithoutSpaces(price2);
    price3 = numberWithoutSpaces(price3);

    let checkbox1 = document.getElementById("add1").checked ? "yes" : "no";
    let checkbox2 = document.getElementById("add2").checked ? "yes" : "no";
    let checkbox3 = document.getElementById("add3").checked ? "yes" : "no";


    if (checkbox1 == "yes") {
        totalprice += price1;
    }
    if (checkbox2 == "yes") {
        totalprice += price2;
    }
    if (checkbox3 == "yes") {
        totalprice += price3;
    }

    //numberWithSpaces(totalprice)

    document.getElementById("totalpriset").textContent = numberWithSpaces(totalprice) + " SEK.";
}

function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

function numberWithoutSpaces(x) {
    x = x.replace(/\s/g, '');

    return parseInt(x);
}



function chooseOccupation(rndInt) {
    let occ = ""
    switch (rndInt) {
        case 1:
            occ = "Säljare"
            break;
        case 2:
            occ = "Administratör"
            break;
        case 3:
            occ = "privatdetektiv"
            break;
        case 4:
            occ = "Övningskörare"
            break;
        case 5:
            occ = "Mekaniker"
            break;
        case 6:
            occ = "Terapeut"
            break;

    }
    return occ
}



function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const url = " https://randomuser.me/api/?results=15";
const personal = document.getElementById("personaldiv");


fetch(url)
    .then(function (response) { return response.json() })
    .then(function (data) {
        let personals = data.results

        personals.map(function (person) {

            let card = document.createElement("div")
            card.setAttribute("class", "card")

            let img = document.createElement("img")
            img.src = person.picture.medium

            let name = document.createElement("h3")
            name.innerHTML = person.name.first + " " + person.name.last

            let occupasion = document.createElement("p")
            let rndInt = randomIntFromInterval(1, 6)
            occupasion.innerHTML = chooseOccupation(rndInt)

            let mail = document.createElement("a")
            mail.setAttribute("href", "mailto:" + person.email)
            mail.setAttribute("class", "mail")
            mail.innerHTML = "Maila " + person.name.first

            card.appendChild(name)
            card.appendChild(img)
            card.appendChild(occupasion)
            card.appendChild(mail)
            personal.appendChild(card)
        })

    })



