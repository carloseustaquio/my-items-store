import { useState } from "react";
import Modal from 'react-modal';
import "./Item.css"

interface ItemProps {
	item: {
		title: string;
		description: string[];
		price: number;
		images: string[];
	}
}

function Item({ item }: ItemProps) {
  const [modalIsOpen, setModalIsOpen] = useState<string | null>(null);

  const openModal = (src: string) => {
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
      <p>Preço: R$ {item.price},00</p>
      {item.images.map((image, index) => {
				const src = `/images/webp/${image}`;
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
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Item;
