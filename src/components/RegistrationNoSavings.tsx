import Image from "next/image";

export const RegistrationNoSavings = () => {
  return (
    <div className="bg-white p-4 lg:p-8 border border-border rounded-md shadow-sm">
      <h1 className="text-2xl md:text-3xl font-Montserrat font-semibold mb-2">
        U WOZ-waarde is waarschijnlijk niet te hoog
      </h1>
      <div className="bg-light-blue p-4 font-Montserrat rounded-md my-6">
        <p className="font-bold">U kunt waarschijnlijk geen geld besparen.</p>
      </div>
      <h2 className="font-Montserrat font-semibold mt-5 text-lg">WOZ-waarde</h2>
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
          className="font-bold w-full border rounded-md border-border mt-2 py-3 shadow-sm text-sm md:text-lg md:px-5 md:w-fit "
        >
          Vorige
        </button>
      </div>
      <h3 className="font-Montserrat font-semibold mt-5 text-lg">
        Uw bezwaar wordt behandeld door:
      </h3>
      <div className="">
        <figure>
          <Image
            src="/adviseur.png"
            width="150"
            height="100"
            alt="woz-logo"
            className="rounded-full h-40 w-40"
          />
        </figure>
      </div>
    </div>
  );
};
