import { useGetBreeds } from 'api/dogs/dogs';
import { BreedList } from 'app/BreedList/BreedList';
import { useState } from 'react';
import { Dog } from 'app/BreedList/BreedList.types';
import { DogModal } from 'components/dogModal/DogModal';

export const BreedListContainer = () => {
  const { isLoading, data } = useGetBreeds();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentDog, setCurrentDog] = useState<Dog | null>(null);

  const handleBreedClick = (breed: string, subBreed?: string) => {
    setCurrentDog({ breed, subBreed });
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setCurrentDog(null);
  };

  return (
    <>
      <BreedList
        isLoading={isLoading}
        breeds={data?.message}
        onBreedClick={handleBreedClick}
      />
      {currentDog && modalVisible && (
        <DogModal dog={currentDog} onClose={handleModalClose} />
      )}
    </>
  );
};
