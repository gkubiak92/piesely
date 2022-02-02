import { useGetBreeds } from 'api/dogs/dogs';

export const BreedList = () => {
  const { isLoading, data } = useGetBreeds();

  if (isLoading) return <div>LOADING...</div>;

  if (!data) return <div>No results</div>;

  return (
    <div>
      {Object.keys(data.message).map((breed) => (
        <div key={breed}>{breed}</div>
      ))}
    </div>
  );
};
