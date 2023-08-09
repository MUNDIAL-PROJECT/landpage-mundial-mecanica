import { FaleContainer, FaleContentForm, FaleContentImg } from './styled';
import Maps from '../../assets/mapsimage.png';

export const FaleConosco = () => {
  return (
    <FaleContainer id="faleconosco">
      <FaleContentImg>
        <img src={Maps} alt="localização"  />
        <span> Rua Dr. Tuany Toledo Júnior, 20 | Bairro Nova Pouso Alegre <br /> CEP 37553-476</span>
      </FaleContentImg>
      <FaleContentForm>
        <form action="" className='faleForm'>
          <h3>Entre em contato conosco <hr /></h3>
          <input type="text" placeholder='Nome' required />
          <input type="email" placeholder='email' required />
          <textarea name="textarea" id="textarea" placeholder='Escreva sua mensagem'></textarea>
          <button type="submit">Enviar</button>
        </form>
      </FaleContentForm>
    </FaleContainer>
  )
}

