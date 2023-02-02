import Image from "next/image";

type Props = {
  setStep: (val: number) => void;
  wozValue: string;
  ewozValue: string;
};

const RegistrationNoSavings: React.FC<Props> = ({ setStep, wozValue, ewozValue }) => {
  return (
    <div className="bg-white p-4 lg:p-8 border border-border rounded-md shadow-sm mb-6">
      <h1 className="text-2xl md:text-3xl font-Montserrat font-semibold mb-2">
        U WOZ-waarde is waarschijnlijk niet te hoog
      </h1>
      <div className="bg-light-blue p-4 font-Montserrat rounded-md my-6">
        <p className="font-bold">U kunt waarschijnlijk geen geld besparen.</p>
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
      <p className="my-2">
        Op basis van onze WOZ-taxatie kunt u geen bezwaar maken om uw WOZ-waarde te verlagen.
      </p>
      <p className="my-2">
        U kunt zich wel registreren voor de WOZ Notificatie, uw WOZ-adviseur stuurt u een bericht
        zodra u de WOZ Check in 2022 kunt doen.
      </p>
      <div className="flex flex-col md:flex-row-reverse md:justify-between md:gap-4">
        <button
          type="submit"
          className="bg-blue text-white font-bold w-full rounded-md  border-border mt-2 py-3 shadow-sm text-lg"
        >
          Aanmelden voor WOZ Notificatie
        </button>
        <button
          type="submit"
          onClick={() => setStep(1)}
          className="font-bold w-full border rounded-md border-border mt-2 py-3 shadow-sm text-sm md:text-lg md:px-5 md:w-fit "
        >
          Vorige
        </button>
      </div>
      <h3 className="font-Montserrat font-semibold mt-5 text-lg">
        Uw bezwaar wordt behandeld door:
      </h3>
      <div className="my-4 p-4 flex gap-4 bg-light-blue">
        <figure>
          <Image
            src="/adviseur.png"
            width="75"
            height="75"
            alt="woz-adviseuro"
            className="rounded-full aspect-square object-cover"
          />
        </figure>
        <div>
          <h4 className="font-bold ">George van Heeswijk</h4>
          <p className="text-gray-blue text-sm">WOZ-adviseur / Regio Utrecht</p>
          <a href="tel:0851234567" className="text-blue font-bold text-sm">
            085 123 45 67
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationNoSavings;
