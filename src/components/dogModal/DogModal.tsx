import { DogModalProps } from 'components/dogModal/DogModal.types';
import { Modal } from 'components/modal/Modal';
import { useGetRandomImageByBreed } from 'api/dogs/dogs';
import { Button } from 'components/button/Button';

export const DogModal = ({
  dog: { breed, subBreed },
  onClose,
}: DogModalProps) => {
  const title = `${subBreed ? subBreed : ''} ${breed}`;
  const { isLoading, data, refetch } = useGetRandomImageByBreed(
    breed,
    subBreed
  );

  return (
    <Modal
      title={title}
      content={
        isLoading ? (
          <div>LOADING...</div>
        ) : (
          <>
            <img
              src={data?.message}
              alt={title}
              className="max-h-full mx-auto"
            />
          </>
        )
      }
      footer={<Button onClick={() => refetch()}>RELOAD</Button>}
      onClose={onClose}
    />
  );
};
