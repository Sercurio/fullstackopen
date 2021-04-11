import { useState } from "react";

const Filter = ({ persons, setPersonsToShow }) => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterOnNameChange = (e) => {
    setFilterValue(e.target.value, () => {
      setPersonsToShow(
        persons,
        filterValue === ""
          ? persons
          : persons.filter(
              (person) =>
                person.name
                  .toLowerCase()
                  .startsWith(filterValue.toLowerCase()) === true
            )
      );
    });
  };

  // const personsToShow = () => {
  //   setPersonsToShow(
  //     persons,
  //     filterValue === ""
  //       ? persons
  //       : persons.filter(
  //           (person) =>
  //             person.name
  //               .toLowerCase()
  //               .startsWith(filterValue.toLowerCase()) === true
  //         )
  //   );
  // };

  return (
    <div>
      filter shown with: <input onChange={handleFilterOnNameChange} />
    </div>
  );
};

export default Filter;
