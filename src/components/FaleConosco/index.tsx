import { FaleContainer, FaleContentForm, FaleContentImg } from './styled';

//Form
import { useForm, ValidationError } from '@formspree/react';

export const FaleConosco = () => {
  const [state, handleSubmit] = useForm("xzbleznr");
  
  if (state.succeeded) {
    return alert('Mensagem enviada com sucesso!');
  }

  return (
    <FaleContainer id="faleconosco">
      <FaleContentImg>
        
        <span> Rua Dr. Tuany Toledo Júnior, 20 | Bairro Nova Pouso Alegre <br /> CEP 37553-476</span>
      </FaleContentImg>
      <FaleContentForm>
        <form onSubmit={handleSubmit} className='faleForm'>
          <h3>Entre em contato conosco <hr /></h3>
          <input type="text" placeholder='Nome' name='name' required />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input id='email' name='email' type="email" placeholder='email' required />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea id='message' name='message'  placeholder='Escreva sua mensagem'></textarea>
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

