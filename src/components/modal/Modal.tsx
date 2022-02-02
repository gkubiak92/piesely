import { ModalProps } from 'components/modal/Modal.types';
import { createPortal } from 'react-dom';

export const Modal = ({ title, content, onClose }: ModalProps) =>
  createPortal(
    <div className="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-80">
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50">
        <span className="absolute top-1 right-1 text-center" onClick={onClose}>
          X
        </span>
        <h1 className="w-full">{title}</h1>
        <div>{content}</div>
      </div>
    </div>,
    document.getElementById('root')!
  );
