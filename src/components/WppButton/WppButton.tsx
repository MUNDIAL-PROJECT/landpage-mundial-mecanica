import { WhatsappLogo } from "@phosphor-icons/react";
interface WppButtonProps {
  phoneNumber: string;
  message: string;
}

 export const WppButton: React.FC<WppButtonProps> = ({ phoneNumber, message }) => {
  const handleClickWpp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClickWpp}><WhatsappLogo size={40} color="#EEE" className="wppIcon" /></button>
  );
};
