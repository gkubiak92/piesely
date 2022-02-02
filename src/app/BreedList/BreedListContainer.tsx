import { useGetBreeds } from 'api/dogs/dogs';
import { BreedList } from 'app/BreedList/BreedList';

export const BreedListContainer = () => {
  const { isLoading, data } = useGetBreeds();

  return (
    <BreedList
      isLoading={isLoading}
      breeds={data?.message}
      onBreedClick={() => {}}
      onSubBreedClick={() => {}}
    />
  );
};
