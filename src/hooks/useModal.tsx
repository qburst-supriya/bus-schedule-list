import { ReactNode, useState } from 'react';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>();

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  function closeModal() {
    setModalContent(null);
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    modalContent,
  };
}
