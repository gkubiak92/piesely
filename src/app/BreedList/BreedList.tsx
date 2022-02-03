import { BreedButton } from 'components/breedButton/BreedButton';
import { BreedListProps } from 'app/BreedList/BreedList.types';

export const BreedList = ({
  isLoading,
  breeds,
  onBreedClick,
}: BreedListProps) => {
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
                onClick={() => onBreedClick(breed, subBreed)}
                className="m-2 capitalize"
              />
            );
          })
        ) : (
          <BreedButton
            key={breed}
            name={breed}
            onClick={() => {
              onBreedClick(breed);
            }}
            className="m-2 capitalize"
          />
        )
      )}
    </div>
  );
};
