fetch("data.json")
  .then((rep) => {
    // JavaScript reçoit une réponse de notre data.json
    return rep.json();
  })
  .then((dataBase) => {
    //Ensuite j'ai acces ici à ma data
    console.log(dataBase);
    // Ici j'ai la liste de recettes
    // Puis ci-dessous Je boucle sur le teableau de données
    dataBase.forEach((dataPatisserie) => {
      display(dataPatisserie);
    });
  });

  function afficher(dataPatisserieActuelle) {
    console.log(dataPatisserieActuelle.temoignages);
    
  }