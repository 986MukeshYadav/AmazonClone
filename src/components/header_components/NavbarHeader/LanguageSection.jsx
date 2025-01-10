import React from "react";

const languages = [
  { id: "english", name: "English", code: "EN" },
  { id: "hindi", name: "हिन्दी", code: "HI" },
  { id: "tamil", name: "தமிழ்", code: "TA" },
  { id: "kannada", name: "ಕನ್ನಡ", code: "KN" },
  { id: "telugu", name: "తెలుగు", code: "TE" },
  { id: "marathi", name: "मराठी", code: "MR" },
  { id: "learnmore", name: "Learn", code: "More" },
];

const LanguageList = () => {
  return (
    <>
      <ul>
        {languages.map((language) => (
          <li
            key={language.id}
            className={`flex items-center space-x-3 text-sm py-1 ${
              language.id === "english"
                ? "border-b-[1px] border-b-gray-300"
                : ""
            } ${
              language.id === "learnmore"
                ? "border-b-[1px] border-b-gray-300 mt-3 "
                : ""
            }`}
          >
            {/*radio button for other than 'learnmore' */}
            {language.id !== "learnmore" && (
              <input
                type="radio"
                id={language.id}
                className="h-4 w-4 rounded-full border-2 border-gray-300 checked:bg-blue-600 hover:border-red-500 focus:outline-none"
              />
            )}

            {/* For 'learnmore' */}
            {language.id === "learnmore" ? (
              <a
                href="#"
                className="text-blue-600 text-xs hover:underline ml-6 -mt-4 mb-3"
              >
                {language.name} - {language.code}
              </a>
            ) : (
              <label htmlFor={language.id} className="text-gray-700">
                {language.name} - {language.code}
              </label>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-stretch">
        <img src="./india.png" alt="Logo" className="h-6 p-1 mt-1 mr-1" />
        <span className="text-gray-700 text-xs">
          You are shopping on Amazon.in
        </span>
      </div>
      <div>
        <a
          href="#"
          className="text-blue-600 text-xs hover:underline ml-6 -mt-4 mb-3"
        >
          Change country/region
        </a>
      </div>
    </>
  );
};

export default LanguageList;
