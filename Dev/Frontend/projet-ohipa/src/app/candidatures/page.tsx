export default function Candidatures() {
  const pathImg = "/_img/d-img.jpg";
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl mt-10 ml-5">Candidatures récentes :</h1>
        <div className="mt-5 mx-10">
          <div
            tabIndex={0}
            className="collapse border border-base-300 shadow-xl"
          >
            <div className="card card-compact bg-base-100 flex flex-row mx-5">
              <img src={pathImg} alt="Movie" className="size-32 m-4" />
              <div className="card-body flex flex-row">
                <div className="flex flex-col">
                  <h2 className="card-title">TITRE</h2>
                  <h3 className="text-xl">Entreprise</h3>
                </div>
                <div className="card-actions justify-end flex flex-col">
                  <h1>Type de contrat</h1>
                  <p>👁️ : nb candidatures</p>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <p>Liste des candidatures :</p>
              <div className="flex flex-row">
                <p> - TEURURAI Toamiriura </p>
                <p className="mx-2 font-bold"> CV </p>
                <input type="checkbox" className="mx-2" disabled checked />
                <p className="mx-2 font-bold"> Lettre de motivation </p>
                <input type="checkbox" className="mx-2" disabled />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-10">
          <div
            tabIndex={0}
            className="collapse border border-base-300 shadow-xl"
          >
            <div className="card card-compact bg-base-100 flex flex-row mx-5">
              <img src={pathImg} alt="Movie" className="size-32 m-4" />
              <div className="card-body flex flex-row">
                <div className="flex flex-col">
                  <h2 className="card-title">TITRE</h2>
                  <h3 className="text-xl">Entreprise</h3>
                </div>
                <div className="card-actions justify-end flex flex-col">
                  <h1>Type de contrat</h1>
                  <p>👁️ : nb candidatures</p>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <p>Liste des candidatures :</p>
              <div className="flex flex-row">
                <p> - TEURURAI Toamiriura </p>
                <p className="mx-2 font-bold"> CV </p>
                <input type="checkbox" className="mx-2" disabled checked />
                <p className="mx-2 font-bold"> Lettre de motivation </p>
                <input type="checkbox" className="mx-2" disabled />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-10">
          <div
            tabIndex={0}
            className="collapse border border-base-300 shadow-xl"
          >
            <div className="card card-compact bg-base-100 flex flex-row mx-5">
              <img src={pathImg} alt="Movie" className="size-32 m-4" />
              <div className="card-body flex flex-row">
                <div className="flex flex-col">
                  <h2 className="card-title">TITRE</h2>
                  <h3 className="text-xl">Entreprise</h3>
                </div>
                <div className="card-actions justify-end flex flex-col">
                  <h1>Type de contrat</h1>
                  <p>👁️ : nb candidatures</p>
                </div>
              </div>
            </div>
            <div className="collapse-content">
              <p>Liste des candidatures :</p>
              <div className="flex flex-row">
                <p> - TEURURAI Toamiriura </p>
                <p className="mx-2 font-bold"> CV </p>
                <input type="checkbox" className="mx-2" disabled checked />
                <p className="mx-2 font-bold"> Lettre de motivation </p>
                <input type="checkbox" className="mx-2" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
