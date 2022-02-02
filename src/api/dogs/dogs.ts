import { api } from 'api/api';
import { useQuery } from 'react-query';
import { GetBreedsResponse } from 'api/dogs/dogs.types';

const getBreeds = () => api.get('/breeds/list/all').then(({ data }) => data);

export const useGetBreeds = () =>
  useQuery<GetBreedsResponse>('breeds', getBreeds);
