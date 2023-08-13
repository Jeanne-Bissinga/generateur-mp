const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

/**fonction qui genere des mot de passe */
function generatePassword() {
  let data = []; /**ici on met les données qui correspondront à ce qui a été coché */
  let password = "";

  /**si l'une des varriable à été coché on l'ajoute dans notre tableau data. les ... cest pour casser les différents éléments du tableau */
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    /**on ajoute à password la lettre génerer à chaque fois.*/
    password += data[Math.floor(Math.random() * data.length)];
  }

  /**on ne peut pas mettre du texte content ou de l'innerhtml dans un input */
  /**iil */
  passwordOutput.value = password;

  passwordOutput.select(); /**pour selectionner */
  document.execCommand("copy"); /**pour copier */

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
