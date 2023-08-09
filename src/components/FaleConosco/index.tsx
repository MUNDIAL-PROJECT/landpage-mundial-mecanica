import { FaleContainer, FaleContentForm, FaleContentImg } from './styled';
import Maps from '../../assets/Maploc.png';
//Form
import { useForm, ValidationError } from '@formspree/react';

export const FaleConosco = () => {
  const [state, handleSubmit] = useForm("xzbleznr");
  if (state.succeeded) {
    return 
  }

  return (
    <FaleContainer id="faleconosco">
      <FaleContentImg>
        <img src={Maps} alt="localização"  />
        <span> Rua Dr. Tuany Toledo Júnior, 20 | Bairro Nova Pouso Alegre <br /> CEP 37553-476</span>
      </FaleContentImg>
      <FaleContentForm>
        <form onSubmit={handleSubmit} className='faleForm'>
          <h3>Entre em contato conosco <hr /></h3>
          <input type="text" name='name' id='name' placeholder='Nome'required />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input type="email" id='email' name='email' placeholder='email' required />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea name="message" id="message" placeholder='Escreva sua mensagem'></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>Enviar</button>
        </form>
      </FaleContentForm>
    </FaleContainer>
  )
}

