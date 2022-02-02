import { BreedButtonProps } from 'components/breedButton/BreedButton.types';
import { Button } from 'components/button/Button';

export const BreedButton = ({ name, onClick, className }: BreedButtonProps) => (
  <Button onClick={onClick} className={className}>
    {name}
  </Button>
);
