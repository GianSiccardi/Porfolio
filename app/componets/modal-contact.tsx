import { ClipboardIcon, Copy, Layers2 } from "lucide-react";
import { useState } from "react";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};


const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  const [copied, setCopied] = useState(false);
  const [copiedL, setCopiedL] = useState(false);
  const [copiedN, setCopiedN] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 second
  };




  return (
    <>
    {isOpen && (
  <div className='fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black'>
<div className='bg-darkBg p-20 pb-24  rounded-lg flex flex-col gap-5 mb-2'>     

<div className='flex items-center gap-3'>
              <label htmlFor='' className='font-semibold text-secondary font-[Poppins] w-24'>
                Correo:
              </label>
              <div className='border-2 border-gray-300 rounded-lg text-secondary px-4 py-2 max-w-[400px] overflow-hidden'>
                <span>giansicca70@gmail.com</span>
              </div>
              <Copy
       className='mr-2 text-secondary cursor-pointer hover:text-gray-700'
        onClick={() => copyToClipboard('giansicca70@gmail.com')}
              />
            </div>

      <div className='flex items-center gap-3'>
        <label htmlFor='' className='font-semibold text-secondary font-[Poppins] w-24'>
          Linkedin:
        </label>
        <div className='border-2 border-gray rounded-lg text-secondary px-4 py-2 max-w-[300px] overflow-hidden'>
          <span className='overflow-ellipsis'>www.linkedin.com/in/gian-siccardi-7339b2260</span>

        </div>

        <Copy className='mr-2 text-secondary cursor-pointer hover:text-gray-700'
          onClick={() => copyToClipboard('www.linkedin.com/in/gian-siccardi-7339b2260')} />

      </div>

      <div className='flex items-center gap-3'>
        <label htmlFor='' className='font-semibold text-secondary font-[Poppins] w-24'>
          Teléfono:
        </label>

        <div className='border-2 border-gray-300 rounded-lg text-secondary px-4 py-2 max-w-[300px]'>
          <span>+54 9 25612635899</span>
        </div>
        <Copy className='mr-2 text-secondary cursor-pointer hover:text-gray-700'
          onClick={() => copyToClipboard('+54 9 25612635899')}
        />

      </div>
      <button
        onClick={onClose}
        className='text-sm  mt-2 focus:outline-none  text-secondary hover:underline'
      >
        Cerrar
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default Modal;

