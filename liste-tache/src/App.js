import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


  //la function pour ajouter un produit
  const ajouterProduit = ({ajouterProduitProps}) => {

    //hook d'etat des valeur de champ
    let [inputValue, setInputValue] = useState('')

    //la function pour la soummission du formulaire
    const soumissionFormulaire = (event) =>{
      event.preventDefault();

      inputValue && ajouterProduitProps(inputValue)
      //modifier l'état du champ input
      setInputValue('')
      console.log(setInputValue)
    }
  return(
      <div className="container text-center mt-5">
        <h2>Ajouter un produit</h2>
        <form onSubmit={soumissionFormulaire}>
          <input className="form-control" type="text" placeholder='Votre produit'
                 value={inputValue} onChange={event => setInputValue(event.target.value)} />
                 <button type='submit' className="btn btn-warning" >Ajouter</button>
        </form>
      </div>
  )
  }

  //tableau d'objet
  let produitObjet = [
    {
      id:1,
      nom:"sac à dos scolaire",
      description: " mesure 45 * 30 * 14cm, conçu avec plusieurs compartiments pour placer en toute sécurité l'ordinateur portable ",
      image: "https://m.media-amazon.com/images/I/611oft3Q2TL._AC_SL1000_.jpg",
      prix: 56.99
    },
    {
      id:2,
      nom:"Eastpak Padded Pak'r ",
      description: "Eastpak Padded Pak'r Sac à dos, 40 cm, 24 L, Gaming Green (Vert), Hauteur : 40 cm, Largeur : 30 cm, Profondeur : 18 cm",
      image:"https://m.media-amazon.com/images/I/614JdQtKihL._AC_SL1000_.jpg",
      prix: 54.99
    },
    {
      id:3,
      nom: "Eastpak PADDED PAK'R ",
      description: "Eastpak PADDED PAK'R Sac à dos, 40 cm, 24 L,  (Noir), Hauteur : 40 cm, Largeur : 30 cm, Profondeur : 18 cm",
      image:"https://m.media-amazon.com/images/I/71PzUy+n+iL._AC_SL1500_.jpg",
      prix: 49.50
    },
    {
      id:4,
      nom: "Eastpak PADDED PAK'R ",
      description: "Eastpak PADDED PAK'R Sac à dos, 40 cm, 24 L,  (Noir), Hauteur : 40 cm, Largeur : 30 cm, Profondeur : 18 cm",
      image:"https://m.media-amazon.com/images/I/61bByqMyH-L._AC_SL1000_.jpg",
      prix: 51.50
    }
  ];
  //hook d'etat des taches
  //let taches = []
  //funtion setTaches(produitObjet)
  let[taches, setTaches] = useState(produitObjet);

const ajouterTache = (tache) => setTaches([...taches, {tache}]);
  return (

    <div className="App container  div1 m-3 p-5">

      <img src="../public/img/58419140a6515b1e0ad75a4c.png"/>


      <h2 className="text-white mb-3 ">Sac à dos EASTPAK à motifs</h2>
      <h5 className="text-white mb-5">Retour à l'école, equiper-vous pour de nouvelles aventures  avec notre gamme rentrée des classes </h5>

      <div className="row text-center">

        {taches.map((tache, index) => (
            <div className="col-3 divProduits">
              <div className="card" >
                <img src={tache.image} className="card-img-top" alt="img" title="img" />
                <h5 className="card-title text-warning">{tache.nom}</h5>
                <p className="card-text">{tache.description}</p>
                <p className="card-text">Prix: {tache.prix}£</p>
              </div>
            </div>


            )
        )}
      </div>
      <ajouterProduit ajouterProduitProps={ajouterTache}/>
    </div>
  );
}

export default App;
