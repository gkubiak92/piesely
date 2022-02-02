import { DogModalProps } from 'components/dogModal/DogModal.types';
import { Modal } from 'components/modal/Modal';
import { useGetRandomImageByBreed } from 'api/dogs/dogs';

export const DogModal = ({
  dog: { breed, subBreed },
  onClose,
}: DogModalProps) => {
  const title = `${subBreed ? subBreed : ''} ${breed}`;
  const { isLoading, data } = useGetRandomImageByBreed(breed, subBreed);

  return (
    <Modal
      title={title}
      content={
        isLoading ? (
          <div>LOADING...</div>
        ) : (
          <img src={data?.message} alt={title} />
        )
      }
      onClose={onClose}
    />
  );
};
