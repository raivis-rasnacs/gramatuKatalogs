var saraksts = document.getElementById("saraksts"); // Nodefinē tabulas elementu

function pievienot() { // Funkcija, kas pievieno ierakstu tabulā
  var nosaukums = document.getElementById("nosaukums").value; // Izgūst nosaukumu no ievades lauka 'nosaukuma'
  var autors = document.getElementById("autors").value; // Izgūst autoru no ievades lauka 'autors'
  
  var jaunaGramata = document.createElement("tr"); // Izveido jaunu rindu jaunai grāmatati
  var nosaukumaSuna = document.createElement("td"); // Izveido jaunu šūnu
  nosaukumaSuna.innerHTML = nosaukums; // Šūnā iestata nosaukumu no mainīgā 'nosaukums'
  var autoraSuna = document.createElement("td"); // Izveido jaunu šūnu
  autoraSuna.innerHTML = autors; // Šūnā iestata autoru no mainīgā 'autors'
  var pogasSuna = document.createElement("td"); // Izveido jaunu šūnu pogai
  var poga = document.createElement("button"); // Izveido pogu
  poga.setAttribute("onclick", "dzestGramatu(this.parentElement.parentElement)"); // Nodefinē funkcijas izsaukumu pogai
  poga.innerHTML = "X"; // Pogai iestata tekstu 'X'
  pogasSuna.appendChild(poga); // Pogu ievieto šūnā
  jaunaGramata.appendChild(nosaukumaSuna); // Rindai pievieno nosaukuma šūnu
  jaunaGramata.appendChild(autoraSuna); // Rindai pievieno autora šūnu
  jaunaGramata.appendChild(pogasSuna); // Rindai pievieno pogas šūnu
  saraksts.appendChild(jaunaGramata); // Rindu pievieno tabulai
}

function dzestGramatu(rinda) { // Funkcijas, kas saņem parametru - attiecīgo tabulas rindu
  saraksts.removeChild(rinda); // Izdzēš no tabulas attiecīgo rindu
}