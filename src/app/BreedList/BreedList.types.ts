import { GetBreedsResponse } from 'api/dogs/dogs.types';

export type BreedListProps = {
  isLoading: boolean;
  onBreedClick: (breed: string, subBreed?: string) => void;
  breeds?: GetBreedsResponse['message'];
};

export type Dog = {
  breed: string;
  subBreed?: string;
};
