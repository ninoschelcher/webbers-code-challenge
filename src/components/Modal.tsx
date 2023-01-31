type Props = {
  showModal: boolean;
  setShowModal: (val: boolean) => void;
};

const Modal: React.FC<Props> = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none px-4 backdrop-blur-md font-Montserrat">
            <div className="relative w-auto my-6 mx-auto md:max-w-screen-lg">
              <div className="relative flex flex-col w-full bg-white border-border border rounded-2xl shadow-sm">
                <div className="flex items-center justify-between py-3 px-6 border-b-2 border-solid border-border">
                  <h3 className="text-lg font-semibold">
                    Adres heeft een zakelijke of gemengde bestemming
                  </h3>
                  <button
                    className="w-7 h-5 md:w-5 border-2 rounded-full flex items-center justify-center "
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-2xl ">×</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto font-Roboto">
                  <p className="text-base mb-6">
                    Volgens onze gegevens heeft dit adres (ook) een zakelijke bestemming. Helaas
                    controleert Eerlijke WOZ op dit moment alleen de WOZ-waarde van woningen.
                  </p>
                  <p className="text-base">
                    We zullen in de toekomst wel de WOZ-waarde van zakelijk vastgoed controleren.
                    Indien u wenst dat Eerlijke WOZ contact met u opneemt zodra de WOZ Check ook
                    beschikbaar is voor zakelijk vastgoed, ga dan verder met inschrijven.
                  </p>
                </div>
                <div className="bg-light-gray rounded-sm mx-6 p-6 font-Roboto">
                  <p>{"Gegevens uit API"}</p>
                </div>
                <div className="flex items-center flex-col p-6 md:flex-row md:gap-4">
                  <button
                    type="submit"
                    className="bg-blue text-white font-bold w-full rounded-md border-border mt-2 py-3 shadow-sm text-base md:w-fit md:px-5"
                  >
                    Aanmelden voor Eerlijke WOZ zakelijk
                  </button>
                  <button
                    type="submit"
                    className="font-bold w-full border rounded-md border-border mt-2 py-3 shadow-sm text-sm md:w-fit md:px-5"
                  >
                    Deze woning wordt niet zakelijk gebruikt.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
