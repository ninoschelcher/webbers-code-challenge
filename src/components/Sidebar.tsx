type Props = {
  step: number;
};

const Sidebar: React.FC<Props> = ({ step }) => {
  return (
    <aside className="pb-2">
      <ul className="hidden md:block w-max">
        <li className="mb-2 flex items-center">
          <div
            className={`w-5 h-5 border-2 rounded-full mr-3 flex justify-center items-center ${
              step === 0 || step === 1 ? "border-blue" : "border-dark-blue bg-dark-blue"
            }`}
          >
            {step > 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <p className="text-sm">Adresgegevens</p>
        </li>
        <li className="mb-2 flex items-center">
          <div
            className={`w-5 h-5 border-2 rounded-full mr-3 flex justify-center items-center ${
              step > 1 ? "border-dark-blue bg-dark-blue" : "border-dark-blue"
            }`}
          >
            {step > 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <p className="text-sm">Kenmerken woning</p>
        </li>
        <li className="mb-2 flex items-center">
          <div
            className={`w-5 h-5 border-2 rounded-full mr-3 flex justify-center items-center ${
              step > 1 ? "border-dark-blue bg-dark-blue" : "border-dark-blue"
            }`}
          >
            {step > 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <p className="text-sm">Uitslag WOZ Check</p>
        </li>
        <li className="mb-2 flex items-center">
          <div
            className={`w-5 h-5 border-2 rounded-full mr-3 flex justify-center items-center ${
              step === 2 || step === 3 ? "border-blue" : "border-dark-blue"
            }`}
          ></div>
          <p className="text-sm">Bezwaar maken</p>
        </li>
      </ul>

      <div className="flex items-start md:hidden justify-between flex-row">
        <ul>
          {step === 0 || step === 1 ? (
            <li className="mb-2 flex items-center">
              <div className="w-5 h-5 border-2 rounded-full mr-3 flex justify-center items-center border-dark-blue"></div>
              <p className="text-sm">Adresgegevens</p>
            </li>
          ) : (
            <li className="mb-2 flex items-center">
              <div className="w-5 h-5 border-2 rounded-full mr-3 flex justify-center items-center border-dark-blue"></div>
              <p className="text-sm">Bezwaar maken</p>
            </li>
          )}
        </ul>
        <div className="w-20 bg-gray-blue rounded-full h-2 mt-1 md:hidden">
          <div
            className="bg-dark-blue h-2 rounded-full"
            style={step === 0 || step === 1 ? { width: "25%" } : { width: "100%" }}
          ></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
