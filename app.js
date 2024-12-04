fetch("data.json")
  .then((rep) => {
    // JavaScript reçoit une réponse de notre data.json
    return rep.json();
  })
  .then((dataBase) => {
    //Ensuite j'ai acces ici à ma data
    console.log(dataBase);
    // Ici je vois toute ma base de données en console
    // Puis ci-dessous Je boucle sur le teableau de données
    afficher(dataBase.services, dataBase.produits, dataBase.temoignages, dataBase.avantagesClients, dataBase.texteAppelAction, dataBase.phraseAccroche, dataBase.nomCommercial);
  });

// Rôle : Afficher le contenu du data.JSON
// Paramètres : Les objets de services
//  Retourne : Rien car elle affiche

// dataBase.service, dataBase.produits, dataBase.temoignages sont des tableaux
function afficher(services, produits, temoignages, avantagesClients, texteAppelAction, phraseAccroche, nomCommercial) {
  let variableServices = "";
  services.forEach((laDataServices) => {
    variableServices += `
    
    ${laDataServices.nom}
    
    ${laDataServices.description}
    `;
  });
  // console.log(variableServices);
  
  let variableProduits = "";
  produits.forEach((laDataProduits) => {
    variableProduits += `
    ${laDataProduits.nom}
    
    ${laDataProduits.description}
    
    `;
  });
  // console.log(variableProduits);
  
  let variableTemoignages = "";
  temoignages.forEach((laDataTemoignages) => {
    variableTemoignages += `${laDataTemoignages.prenom}
    ${laDataTemoignages.typeExperience}
    ${laDataTemoignages.commentaire}
    ${laDataTemoignages.note}

    `;
  });
  // console.log(variableTemoignages);
  
  let variableAvantagesClients = `
  
  ${avantagesClients[0]}
  
  ${avantagesClients[1]}

  ${avantagesClients[2]}

  `;
  for (let i = 0; i < avantagesClients.length; i++) {
    const element = variableAvantagesClients[i];
  }
  // console.log(variableAvantagesClients);

  let variableTexteAppelAction = `${texteAppelAction}`;
  console.log(variableTexteAppelAction);

  let variablePhraseAccroche = `${phraseAccroche}`
  console.log(variablePhraseAccroche);

  let variableNomCommercial = `${nomCommercial}`
  console.log(variableNomCommercial);

}