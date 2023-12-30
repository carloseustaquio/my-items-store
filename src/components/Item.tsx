import { useState } from "react";
import Modal from 'react-modal';
import "./Item.css"

interface ItemProps {
	item: {
		title: string;
		description: string[];
		price?: number;
    toConsultPrice?: boolean;
		images: string[];
	}
}

function Item({ item }: ItemProps) {
  const [modalIsOpen, setModalIsOpen] = useState<string | null>(null);

  const base = import.meta.env.PROD ? import.meta.env.BASE_URL : '';

  const openModal = (src: string) => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // if (isMobile) return;
    setModalIsOpen(src);
  };

  const closeModal = () => {
    setModalIsOpen(null);
  };

  return (
    <div className="item">
      <h3>{item.title}</h3>
      {item.description.map((d) => (
        <p>{d}</p>
      ))}
      <p>
        {item.toConsultPrice ? (
          <>
            <b>Preço: <span className="blur">19.000,00</span></b>
            <small> (Preço sob consulta!)</small>
          </>
        ) : null}
        {item.price ? <b>Preço: R$ {item.price},00</b> : null}
      </p>
        {item.images.map((image, index) => {
          const src = `${base}/images/webp/${image}`;
          return (
            <img
              key={index}
              src={src}
              alt={`Item Image ${index + 1}`}
              onClick={() => openModal(src)}
              className="item-image"
            />
          )
        })}

      {/* Modal */}
      <Modal
        isOpen={!!modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Item Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <img
          src={modalIsOpen || ''}
          alt={'Modal Image'}
          className="modal-image"
        />
        <button onClick={closeModal} className="close-button">
          x
        </button>
      </Modal>
    </div>
  );
}

export default Item;
