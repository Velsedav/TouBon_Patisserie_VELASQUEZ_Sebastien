fetch("data.json")
  .then((rep) => {
    return rep.json();
  })
  .then((dataBase) => {
    // console.log(dataBase);
    // j'affiche les produits:
    dataBase.produits.forEach((produitDuDataSet) => {
      AfficheUnProduit(produitDuDataSet);
    });
    dataBase.temoignages.forEach((temoignagesDuDataSet) => {
      AfficheUnTemoignages(temoignagesDuDataSet);
    });
    dataBase.services.forEach((servicesDuDataSet) => {
      AfficheUnServices(servicesDuDataSet);
    });
    dataBase.avantagesClients.forEach((avantagesClientsDuDataSet) => {
      AfficheAvantagesClients(avantagesClientsDuDataSet);
    });
    AfficheLeHero(
      dataBase.nomCommercial,
      dataBase.phraseAccroche,
      dataBase.texteAppelAction
    );
  });

function AfficheUnProduit(produit) {
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
        </div>`;
  document.querySelector("#Produit").innerHTML += template;
}
function AfficheUnTemoignages(temoignages) {
  // role affiche un temoignage dans la page dans la div qui a l'id temoignage
  // parametre: Le temoignage a afficher
  // retour rien
  let templateTemoignages = `
  <div class="BckGrndReview CardAvis">
  <p>Prenom : ${temoignages.prenom}</p>
  <p>Experience : ${temoignages.typeExperience}</p>
  <p>${temoignages.commentaire}</p>
  <p>Note : ${temoignages.note}/5</p>
  </div>
  `;
  document.querySelector("#sectionAvisClients").innerHTML +=
    templateTemoignages;
}
function AfficheUnServices(services) {
  // role affiche un "services" dans la page dans la div qui a l'id "services"
  // parametre: Le "services" a afficher
  // retour rien
  let templateServices = `
      <div class="CardService">
        <img src="assets/PlaceHolder.jpg" alt="" />
        <div>
          <h4>${services.nom}</h4>
          <p>${services.description}</p>
        </div>
      </div>`;
  document.querySelector("#sectionServices").innerHTML += templateServices;
}
function AfficheAvantagesClients(avantagesClients) {
  // role affiche un "avantagesClients" dans la page dans la div qui a l'id "avantagesClients"
  // parametre: Le "avantagesClients" a afficher
  // retour rien
  let templateAvantagesClients = `
     <div class="Card">
     <p>${avantagesClients}</p>
   </div>
     `;
  document.querySelector("#sectionAvantagesClients").innerHTML +=
    templateAvantagesClients;
}
function AfficheLeHero(nomCommercial, phraseAccroche, texteAppelAction) {
  // Et rebelote
  let templateHero = `
  <div>
   <h1>${nomCommercial}</h1>
   <h2>${phraseAccroche}</h2>
   <a href="#Produit" class ="BtnNav">${texteAppelAction}</a>
  </div>
`;
  document.querySelector("#idHero").innerHTML += templateHero;
}

// Le cimetière 💀
// Rôle : Afficher le contenu du data.JSON
// Paramètres : Les objets de services
//  Retourne : Rien car elle affiche

// dataBase.service, dataBase.produits, dataBase.temoignages sont des tableaux

// function afficher(
//   services,
//   produits,
//   temoignages,
//   avantagesClients,
//   texteAppelAction,
//   phraseAccroche,
//   nomCommercial
// ) {
//   let variableServices = "";
//   services.forEach((laDataServices) => {
//     variableServices += `

//     ${laDataServices.nom}

//     ${laDataServices.description}
//     `;
//   });
//   // console.log(variableServices);
//   let templateServices = (document.querySelector(
//     "#sectionServices"
//   ).innerHTML += `
//   <div class="Card">
//   <p>${avantagesClients}</p>
// </div>
//   `);
//   let templateHero = (document.querySelector("#idHero").innerHTML += `
//         <div>
//           <h1>${nomCommercial}</h1>
//           <h2>${phraseAccroche}</h2>
//           <a href="#Produit" class ="">${texteAppelAction}</a>
//         </div>
//   `);

//   let variableProduits = "";
//   produits.forEach((laDataProduits) => {
//     variableProduits += `
//     ${laDataProduits.nom}

//     ${laDataProduits.description}

//     `;
//   });
//   // console.log(variableProduits);

//   let variableTemoignages = "";
//   temoignages.forEach((laDataTemoignages) => {
//     variableTemoignages += `${laDataTemoignages.prenom}
//     ${laDataTemoignages.typeExperience}
//     ${laDataTemoignages.commentaire}
//     ${laDataTemoignages.note}

//     `;
//   });
//   // console.log(variableTemoignages);
// let templateTemoignages = (document.querySelector(
//   "#sectionAvisClients"
// ).innerHTML += `
//           <h3 class="TxtAlgnCntr Pddng32">Nos Clients en parlent le mieux</h3>
//         <div class="Flx SpcArnd">
//           <!-- 1 avis client -->
//           <div class="BckGrndReview CardAvis">
//             <!-- Prenom Experience Avis Note -->
//             <p>{$prenom}</p>
//             <p>{$typeExperience}</p>
//             <p>{$commentaire}</p>
//             <p>{$note}</p>
//           </div>
//         </div>
//   `);

//   let variableAvantagesClients = `

//   ${avantagesClients[0]}

//   ${avantagesClients[1]}

//   ${avantagesClients[2]}

//   `;
//   for (let i = 0; i < avantagesClients.length; i++) {
//     const element = variableAvantagesClients[i];
//   }
//   // console.log(variableAvantagesClients);

//   let variableTexteAppelAction = `${texteAppelAction}`;
//   // console.log(variableTexteAppelAction);

//   let variablePhraseAccroche = `${phraseAccroche}`;
//   // console.log(variablePhraseAccroche);

//   let variableNomCommercial = `${nomCommercial}`;
//   // console.log(variableNomCommercial);
// }
