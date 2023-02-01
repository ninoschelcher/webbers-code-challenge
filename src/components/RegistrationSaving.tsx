type Props = {
  setStep: (val: number) => void;
  wozValue: string;
  ewozValue: string;
};

const RegistrationSaving: React.FC<Props> = ({ setStep, wozValue, ewozValue }) => {
  return (
    <div className="bg-white p-4 lg:p-8 border border-border rounded-md shadow-sm">
      <h1 className="text-2xl md:text-3xl font-Montserrat font-semibold mb-2">
        U betaalt te veel belasting door een te hoge WOZ-waarde
      </h1>
      <div className="bg-orange p-4 font-Montserrat rounded-md my-6">
        <p className="text-white font-bold">U kunt geld besparen.</p>
      </div>
      <h2 className="font-Montserrat font-semibold mt-5 text-lg">WOZ-waarde</h2>
      <div className="bg-light-gray p-4 mb-4 mt-2 rounded-sm">
        <div className="flex items-center justify-between mb-3">
          <p>Huidige WOZ-waarde</p>
          <p>&euro; {wozValue}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Eerlijke WOZ-waarde</p>
          <p>&euro; {ewozValue}</p>
        </div>
      </div>
      <h2 className="font-Montserrat font-semibold mt-5 text-lg">Verwachte besparingen per jaar</h2>
      <div className="bg-light-gray p-4 mt-2 rounded-sm">
        <div className="flex items-center justify-between mb-4">
          <p>Inkomstenbelasting</p>
          <p>&euro; 56</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p>Onroerende-zaakbelasting (OZB)</p>
          <p>&euro; 11</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Watersysteemheffing</p>
          <p>&euro; 8</p>
        </div>
      </div>
      <div className="bg-green px-4 py-6 mb-4 rounded-b-sm">
        <div className="flex items-center justify-between font-semibold text-white text-lg">
          <p>Totale besparing</p>
          <p>&euro; 75</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-4">
        <button
          type="submit"
          className="bg-blue text-white font-bold w-full rounded-md  border-border mt-2 py-3 shadow-sm text-lg mmd:px-5"
        >
          Maak gratis bezwaar
        </button>
        <button
          type="submit"
          onClick={() => setStep(1)}
          className="font-bold w-full border rounded-md border-border mt-2 py-3 shadow-sm text-sm md:text-lg md:w-fit  md:px-5"
        >
          Vorige
        </button>
      </div>
    </div>
  );
};

export default RegistrationSaving;
