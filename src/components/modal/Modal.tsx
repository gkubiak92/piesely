import { ModalProps } from 'components/modal/Modal.types';
import { createPortal } from 'react-dom';

export const Modal = ({ title, content, footer, onClose }: ModalProps) =>
  createPortal(
    <div className="fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-80 p-2">
      <div className="absolute top-1/2 left-1/2 w-[80%] md:w-[50%] h-auto min-w-[50%] -translate-x-1/2 -translate-y-1/2 bg-white">
        <div className="flex items-center justify-between px-2">
          <h1 className="block text-2xl font-bold capitalize">{title}</h1>
          <span className="text-2xl hover:cursor-pointer" onClick={onClose}>
            X
          </span>
        </div>
        <div>{content}</div>
        <div className="p-2 border-t-gray-500">{footer}</div>
      </div>
    </div>,
    document.getElementById('root')!
  );
