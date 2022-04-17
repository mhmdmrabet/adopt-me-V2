import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(({ name, animal, breed, id, images, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            image={images}
            id={id}
            location={`${city}, ${state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
