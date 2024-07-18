import { useState ,useEffect} from "react";
import styled from 'styled-components';

const CarouselImg = styled.img`
  max-width: 1000px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
  
  margin-top:50px;
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content:center;
  flex-direction: row;
  margin-top: 15px;
 
`;

const CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`;
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  description?: string;
};

const ModalCarussel: React.FC<ModalProps> = ({ isOpen, onClose, images = [], description }) => {
  const [selectedIndex, setSetSelectedIndex] = useState(0);
  const [selectImage, setSelectImage] = useState(images.length > 0 ? images[0] : "");

  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);

      setSetSelectedIndex(nextIndex);
      setSelectImage(images[nextIndex]);

    }, 500);
  }
const previous = () => {
    selectNewImage(selectedIndex, images, false); // Llama a selectNewImage con el parámetro next establecido en false
}

const next = () => {
    selectNewImage(selectedIndex, images); // Llama a selectNewImage sin establecer el parámetro next
}


return (
  <>
    {isOpen && (
      <div className='fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black'>
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <div className='bg-darkBg bg-opacity-80 p-20 pb-24 rounded-lg max-w-screen-lg w-full h-full overflow-auto'>
            <CarouselImg src={`/${selectImage}`} alt="Carousel Image" className={loaded ? "loaded" : ""}  onLoad={() => setLoaded(true)} />                
                
            <CarouselButtonContainer>
              <CarouselButton onClick={previous}>{"<"}</CarouselButton>
              <CarouselButton onClick={next}>{">"}</CarouselButton>
            </CarouselButtonContainer>
            
            <div className="overflow-auto max-h-60 text-secondary" > {/* Contenedor de descripción con desplazamiento */}
              {description}
            </div>
            
            <button
              onClick={onClose}
              className='text-sm mt-2 focus:outline-none text-secondary hover:underline'
              style={{ position: 'absolute', top: '10px', right: '10px' }} // Posición del botón
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default ModalCarussel;