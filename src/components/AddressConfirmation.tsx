import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

import Modal from "./Modal";

type Props = {
  setStep: (val: number) => void;
};

const AddressConfirmation: React.FC<Props> = ({ setStep }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white p-4 lg:p-8 border border-border rounded-md shadow-sm">
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <h1 className="text-2xl md:text-3xl font-Montserrat font-semibold mb-2">
        Welkom bij de WOZ Check 2023!
      </h1>
      <p>Zie binnen 1 minuut of uw WOZ-waarde klopt en hoeveel u kunt besparen</p>
      <ol className="mt-4">
        <li className="flex mb-4">
          <span className="mr-4 bg-blue w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold text-white">
            1
          </span>
          <p>Controleer uw woninggegevens.</p>
        </li>
        <li className="flex mb-4">
          <span className="mr-4 bg-blue w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold text-white">
            2
          </span>
          <p>Zie hoeveel u kunt besparen.</p>
        </li>
        <li className="flex">
          <span className="mr-4 bg-blue w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold text-white">
            3
          </span>
          <p>Eerlijke WOZ regelt het bezwaar voor u.</p>
        </li>
      </ol>
      <div className="flex items-center bg-light-gray p-1 my-4 rounded w-fit">
        <IoCheckmarkCircleSharp className="w-4 h-4 mr-4 ml-1" />
        <span> Voldoet aan AVG privacywetgeving</span>
      </div>
      <h2 className="font-Montserrat font-semibold mt-5 text-lg">Uw adres</h2>
      <div className="bg-light-gray p-4 my-4 rounded-sm">
        <p>{"Gegevens uit API"}</p>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-between">
        <button
          type="submit"
          onClick={() => setShowModal(true)}
          className="bg-blue text-white font-bold w-full rounded-md  border-border mt-2 py-3 shadow-sm text-lg md:w-fit md:px-5"
        >
          Volgende
        </button>
        <button
          type="submit"
          onClick={() => setStep(0)}
          className="font-bold w-full border rounded-md border-border mt-2 py-3 shadow-sm text-sm md:text-lg md:w-fit md:px-5"
        >
          Vorige
        </button>
      </div>
    </div>
  );
};

export default AddressConfirmation;
