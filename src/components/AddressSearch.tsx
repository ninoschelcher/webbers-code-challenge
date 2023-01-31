type Props = {
  setStep: (val: number) => void;
  zipcode: string;
  setZipCode: (val: string) => void;
  houseNumber: string;
  setHouseNumber: (val: string) => void;
  address: string[];
  setAddress: (val: string[]) => void;
};

const AddressSearch: React.FC<Props> = ({
  setStep,
  zipcode,
  setZipCode,
  houseNumber,
  setHouseNumber,
  address,
  setAddress,
}) => {
  /*
  
  TODO: Create dropdown with API results based on input 

  */
  const getAddresses = () => {
    fetch(
      `https://api.bestaatditadres.nl/lookup.json?postcode=${zipcode}&huisnummer=${houseNumber}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setZipCode(e.target.value.slice(0, 4));
    console.log(zipcode);
  };

  return (
    <div className="bg-white p-4 lg:p-8 border border-border rounded-md shadow-sm">
      <h1 className="text-2xl md:text-3xl font-Montserrat font-semibold mb-2">
        Welkom bij de WOZ Check 2023!
      </h1>
      <p>Voer uw woonadres in om te beginnen</p>
      <h2 className="font-Montserrat font-semibold mt-5 text-lg">Woonadres</h2>
      <div className="bg-light-gray p-4 mt-1 rounded-md shadow-sm">
        <form className="flex flex-col md:flex-row md:gap-4 w-full">
          <input
            type="text"
            spellCheck="false"
            autoCorrect="off"
            autoCapitalize="none"
            id="huis"
            name="address_search"
            className="rounded-md border-2 border-gray-blue p-4 w-full placeholder:text-base placeholder:text-gray-blue"
            placeholder="Typ uw postcode en huisnummer"
            onChange={(event) => {
              onChange(event);
            }}
          />
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setStep(1);
            }}
            className="bg-blue text-white font-bold w-full rounded-md border-border mt-2 md:mt-0 py-3 shadow-sm text-lg md:w-fit md:px-5"
          >
            Volgende
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressSearch;
