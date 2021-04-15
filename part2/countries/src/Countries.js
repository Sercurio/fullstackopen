import Country from "./Country";

const Countries = ({ countries, setCountriesToShow }) => {
  const handleOnShowEvent = (country) => {
    setCountriesToShow([country]);
  };

  const displayCountries = () => {
    if (countries.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    } else if (countries.length === 1) {
      return <Country country={countries[0]} />;
    } else if (countries.length === 0) {
      return <div></div>;
    } else {
      return (
        <div>
          {countries.map((country) => {
            return (
              <li key={country.name}>
                {country.name}
                <button
                  key={country.name}
                  onClick={() => handleOnShowEvent(country)}
                >
                  Show
                </button>
              </li>
            );
          })}
        </div>
      );
    }
  };

  return displayCountries();
};

export default Countries;
