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
    //afficher(dataBase.services, dataBase.produits, dataBase.temoignages, dataBase.avantagesClients, dataBase.texteAppelAction, dataBase.phraseAccroche, dataBase.nomCommercial);

    // j'affiche les produits: 
    dataBase.produits.forEach(p=>{
      AfficheUnProduit(p)
    })
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
  let templateServices = document.querySelector('#sectionServices').innerHTML +=`
          <div class="Card">
          <p>${avantagesClients}</p>
        </div>
  `
  let templateHero = document.querySelector('#idHero').innerHTML +=
  `
          <img src="assets/hero.jpg" alt="" class="" />
        <div>
          <h1>${nomCommercial}</h1>
          <h2>${phraseAccroche}</h2>
          <a href="#Produit" class ="">${texteAppelAction}</a>
        </div>
  ` ;
  
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
  let templateTemoignages = document.querySelector('#sectionAvisClients').innerHTML+=`
          <h3 class="TxtAlgnCntr Pddng32">Nos Clients en parlent le mieux</h3>
        <div class="Flx SpcArnd">
          <!-- 1 avis client -->
          <div class="BckGrndReview CardAvis">
            <!-- Prenom Experience Avis Note -->
            <p>{$prenom}</p>
            <p>{$typeExperience}</p>
            <p>{$commentaire}</p>
            <p>{$note}</p>
          </div>
          
        </div>
  `;
  
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
  // console.log(variableTexteAppelAction);

  let variablePhraseAccroche = `${phraseAccroche}`
  // console.log(variablePhraseAccroche);

  let variableNomCommercial = `${nomCommercial}`
  // console.log(variableNomCommercial);

}

function AfficheUnProduit(produit){
  // role affiche un produit dans la page dans la div qui a l'id Produit
  // parametre: Le produit a afficher
  // retour rien
  let template = `<div class="Rltv ContainerProd">
          <img
            src="${produit.imageUrl}"
            alt=""
            width="300px"
          />
          <div class="DescriptionProd BckGrndProd">
            <h3>${produit.nom}</h3>
            <p>${produit.description}</p>
          </div>
        </div>`
  document.querySelector("#Produit").innerHTML += template
}