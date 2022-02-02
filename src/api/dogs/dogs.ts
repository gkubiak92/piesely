import { api } from 'api/api';
import { useQuery } from 'react-query';
import {
  GetBreedsResponse,
  GetRandomImageByBreedResponse,
} from 'api/dogs/dogs.types';

const getBreeds = () => api.get('/breeds/list/all').then(({ data }) => data);

export const useGetBreeds = () =>
  useQuery<GetBreedsResponse>('breeds', getBreeds);

const getRandomImageByBreed = (breed: string, subBreed?: string) => {
  const subBreedSlug = subBreed ? `${subBreed}/` : '';
  return api
    .get(`/breed/${breed}/${subBreedSlug}images/random`)
    .then(({ data }) => data);
};

export const useGetRandomImageByBreed = (breed: string, subBreed?: string) =>
  useQuery<GetRandomImageByBreedResponse>(
    `${subBreed}SubBreedRandomImage`,
    () => getRandomImageByBreed(breed, subBreed)
  );
