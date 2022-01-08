var saraksts = document.getElementById("saraksts");

function pievienot() {
  var nosaukums = document.getElementById("nosaukums").value;
  var autors = document.getElementById("autors").value;
  
  var jaunaGramata = document.createElement("tr");
  var nosaukumaSuna = document.createElement("td");
  nosaukumaSuna.innerHTML = nosaukums;
  var autoraSuna = document.createElement("td");
  autoraSuna.innerHTML = autors;
  var pogasSuna = document.createElement("td");
  var poga = document.createElement("button");
  poga.setAttribute("onclick", "dzestGramatu(this.parentElement.parentElement)");
  poga.innerHTML = "X";
  pogasSuna.appendChild(poga);
  jaunaGramata.appendChild(nosaukumaSuna);
  jaunaGramata.appendChild(autoraSuna);
  jaunaGramata.appendChild(pogasSuna);
  jaunaGramata.id = "jaunaRinda";
  saraksts.appendChild(jaunaGramata);
}

function dzestGramatu(rinda) {
  saraksts.removeChild(rinda);
}