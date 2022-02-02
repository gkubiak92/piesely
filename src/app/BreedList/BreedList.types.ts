import { GetBreedsResponse } from 'api/dogs/dogs.types';

export type BreedListProps = {
  isLoading: boolean;
  onBreedClick: (breed: string) => void;
  onSubBreedClick: (subBreed: string) => void;
  breeds?: GetBreedsResponse['message'];
};
