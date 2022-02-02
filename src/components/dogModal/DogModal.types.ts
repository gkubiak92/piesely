import { Dog } from 'app/BreedList/BreedList.types';

export type DogModalProps = {
  dog: Dog;
  onClose: () => void;
};
