import { useState, useEffect } from "react";
import axios from "axios";

type Props = {
  setStep: (val: number) => void;
  zipcode: string;
  setZipCode: (val: string) => void;
  houseNumber: string;
  setHouseNumber: (val: string) => void;
  address: AddressArray[];
  setAddress: (val: AddressArray[]) => void;
};

type AddressArray = {
  breedtegraad: number;
  gebruiksdoelen: Array<String>;
  huisletter: number;
  huisnummer: number;
  huisnummertoevoeging: number;
  id: number;
  lengtegraad: number;
  nevenadres: boolean;
  object_id: number;
  object_type: string;
  openbareruimte: string;
  postcode: string;
  woonplaats: string;
  x: number;
  y: number;
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
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > 7) {
      setZipCode(query.slice(0, 6).toUpperCase());
      setHouseNumber(query.slice(7, 10));

      axios
        .get(
          `https://api.bestaatditadres.nl/lookup.json?postcode=${zipcode}&huisnummer=${houseNumber}`
        )
        .then((response) => {
          setResults(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [query, houseNumber, setZipCode, setHouseNumber, zipcode, setAddress, address]);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.length === 0) {
      setError("Zoek en selecteer een woning");
    }
  };

  return (
    <div className="bg-white p-4 lg:p-8 border border-border rounded-md shadow-sm mb-6">
      {!loading ? (
        <>
          <h1 className="text-2xl md:text-3xl font-Montserrat font-semibold mb-2">
            Welkom bij de WOZ Check 2023!
          </h1>
          <p>Voer uw woonadres in om te beginnen</p>
          <h2 className="font-Montserrat font-semibold mt-5 text-lg">Woonadres</h2>
          <div className="bg-light-gray p-4 mt-1 rounded-md shadow-sm">
            <form
              className="flex flex-col md:flex-row md:gap-4 w-full relative items-start"
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="w-full">
                <input
                  type="text"
                  spellCheck="false"
                  autoCorrect="off"
                  autoCapitalize="none"
                  autoComplete="off"
                  id="huis"
                  name="address_search"
                  className="rounded-md border-2 border-gray-blue p-4 w-full placeholder:text-base placeholder:text-gray-blue"
                  placeholder="Typ uw postcode en huisnummer"
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query.length < 1 && <p className="text-orange">{error}</p>}
              </div>
              {query.length >= 1 && (
                <ul className="absolute bg-white w-full md:w-4/5 py-2 top-16 border-border border rounded-md text-center max-h-64 overflow-y-scroll">
                  {results.length < 1 ? (
                    <div className="p-4">
                      {query.length >= 6 && (
                        <p className="text-blue mb-2">
                          Vul ook uw <span className="font-bold">huisnummer</span> in
                        </p>
                      )}
                      <p>
                        Controleer uw straatnaam, huisnummer, plaatsnaam en postcode als uw adres er
                        niet tussen staat.
                      </p>
                    </div>
                  ) : (
                    <>
                      {results.map((data) => (
                        <li
                          className="cursor-pointer hover:bg-blue p-4 group duration-150"
                          onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                              setStep(1);
                              setAddress([data]);
                            }, 2000);
                          }}
                          key={data.id}
                        >
                          <div className="flex items-center group-hover:text-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 mr-3 group-hover:stroke-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>
                            <p>
                              {data.openbareruimte} {data.huisnummer}
                              {data.huisnummertoevoeging && "-" + data.huisnummertoevoeging}
                              {data.huisletter && data.huisletter},
                            </p>
                            <p className="ml-1 text-sm text-gray group-hover:text-white">
                              {data.postcode}, {data.woonplaats}
                            </p>
                          </div>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              )}
              <button
                type="submit"
                className="bg-blue text-white font-bold w-full rounded-md border-border mt-2 md:mt-0 py-4 shadow-sm text-lg md:w-fit md:px-5"
              >
                Volgende
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-40 h-40 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
            />
          </svg>
          <h3>Ophalen van data adres..</h3>
        </div>
      )}
    </div>
  );
};

export default AddressSearch;
