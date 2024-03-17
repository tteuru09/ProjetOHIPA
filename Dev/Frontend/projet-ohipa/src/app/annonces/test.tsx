export default function Annonces() {
  const pathImg = "/_img/d-img.jpg";
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl mt-10 ml-5">Annonces récentes :</h1>

        <div className="card card-side bg-base-100 shadow-xl mx-5 mt-5 flex flex-row">
          <figure>
            <img src={pathImg} alt="Movie" className="size-64" />
          </figure>
          <div className="card-body flex flex-row">
            <div className="flex flex-col">
              <h2 className="card-title">TITRE</h2>
              <h3 className="text-xl">Entreprise</h3>
              <p>
                Do do pariatur mollit consequat et occaecat et ipsum deserunt
                reprehenderit aute veniam in. Commodo deserunt fugiat id laboris
                esse eu incididunt dolor voluptate ut. Ea elit in ea velit. Ex
                culpa amet consequat aliqua esse cupidatat magna eu sunt
                laboris. In est labore magna voluptate sit nisi dolore. Sit
                laboris amet aliqua eu ut fugiat nostrud aute. Ad deserunt
                labore ex aliqua
              </p>
            </div>
            <div className="card-actions justify-end flex flex-col">
              <h1>Type de contrat</h1>
              <p>👁️ : nb vues</p>
              <button className="btn btn-primary">Candidater</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mx-5 mt-5 flex flex-row">
          <figure>
            <img src={pathImg} alt="Movie" className="size-64" />
          </figure>
          <div className="card-body flex flex-row">
            <div className="flex flex-col">
              <h2 className="card-title">TITRE</h2>
              <h3 className="text-xl">Entreprise</h3>
              <p>
                Do do pariatur mollit consequat et occaecat et ipsum deserunt
                reprehenderit aute veniam in. Commodo deserunt fugiat id laboris
                esse eu incididunt dolor voluptate ut. Ea elit in ea velit. Ex
                culpa amet consequat aliqua esse cupidatat magna eu sunt
                laboris. In est labore magna voluptate sit nisi dolore. Sit
                laboris amet aliqua eu ut fugiat nostrud aute. Ad deserunt
                labore ex aliqua
              </p>
            </div>
            <div className="card-actions justify-end flex flex-col">
              <h1>Type de contrat</h1>
              <p>👁️ : nb vues</p>
              <button className="btn btn-primary">Candidater</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl mx-5 mt-5 flex flex-row">
          <figure>
            <img src={pathImg} alt="Movie" className="size-64" />
          </figure>
          <div className="card-body flex flex-row">
            <div className="flex flex-col">
              <h2 className="card-title">TITRE</h2>
              <h3 className="text-xl">Entreprise</h3>
              <p>
                Do do pariatur mollit consequat et occaecat et ipsum deserunt
                reprehenderit aute veniam in. Commodo deserunt fugiat id laboris
                esse eu incididunt dolor voluptate ut. Ea elit in ea velit. Ex
                culpa amet consequat aliqua esse cupidatat magna eu sunt
                laboris. In est labore magna voluptate sit nisi dolore. Sit
                laboris amet aliqua eu ut fugiat nostrud aute. Ad deserunt
                labore ex aliqua
              </p>
            </div>
            <div className="card-actions justify-end flex flex-col">
              <h1>Type de contrat</h1>
              <p>👁️ : nb vues</p>
              <button className="btn btn-primary">Candidater</button>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mx-auto my-10">
          Ajouter une annonce
        </button>
      </div>
    </>
  );
}
