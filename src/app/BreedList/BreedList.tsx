import { BreedButton } from 'components/breedButton/BreedButton';
import { BreedListProps } from 'app/BreedList/BreedList.types';

export const BreedList = ({ isLoading, breeds }: BreedListProps) => {
  if (isLoading) return <div>LOADING...</div>;

  if (!breeds) return <div>No results</div>;

  return (
    <div>
      {Object.entries(breeds).map(([breed, subBreeds]) =>
        subBreeds.length > 0 ? (
          subBreeds.map((subBreed) => {
            const name = `${subBreed} ${breed}`;
            return (
              <BreedButton
                key={name}
                name={name}
                onClick={() => console.log(subBreed, breed)}
                className="m-2"
              />
            );
          })
        ) : (
          <BreedButton
            key={breed}
            name={breed}
            onClick={() => {
              console.log(breed);
            }}
            className="m-2"
          />
        )
      )}
    </div>
  );
};
