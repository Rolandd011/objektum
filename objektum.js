function tanulokAdatai() {
    const tanulok = [];
    const hanyAdat = parseInt(prompt("Hány adatot szeretnél megadni?"), 10);

    for (let i = 0; i < hanyAdat; i++) {
        const nev = prompt("Név:");
        const email = prompt("E-mail:");
        tanulok.push({ nev, email });
    }

    const eredmenyDiv = document.getElementById("tanulokEredmeny");
    eredmenyDiv.innerHTML = "<h3>A tanulók adatai:</h3>";

    tanulok.forEach(tanulo => {
        const p = document.createElement("p");
        p.innerHTML = `Név: ${tanulo.nev} <br> E-mail: ${tanulo.email}`;
        eredmenyDiv.appendChild(p);
    });
}

function megjelenitOrarend() {
    const orarendObj = {
        hetfo: ["Matematika", "Fizika", "Kémia"],
        kedd: ["Irodalom", "Történelem", "Biológia"],
        szerda: ["Angol", "Informatika", "Testnevelés"],
        csutortok: ["Matematika", "Fizika", "Kémia"],
        pentek: ["Művészet", "Osztályfőnöki", "Sport"]
    };

    const orarendDiv = document.getElementById("orarend");
    orarendDiv.innerHTML = "<h2>Órarend:</h2>";

    for (const nap in orarendObj) {
        const napNeve = nap.charAt(0).toUpperCase() + nap.slice(1);
        const orak = orarendObj[nap].join(", ");
        orarendDiv.innerHTML += `<p><strong>${napNeve}:</strong> ${orak}</p>`;
    }
}
