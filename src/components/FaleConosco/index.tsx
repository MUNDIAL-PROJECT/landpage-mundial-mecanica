import { FaleContainer, FaleContentForm, FaleContentImg } from './styled';

export const FaleConosco = () => {
  return (
    <FaleContainer id="faleconosco">
      <FaleContentImg>
        Imagem map google
      </FaleContentImg>
      <FaleContentForm>
        <form action="">
          <input type="text" placeholder='Nome' required />
          <input type="email" placeholder='email' required />
          <textarea name="textarea" id="textarea" placeholder='Escreva sua mensagem'></textarea>
          <button type="submit">Enviar</button>
        </form>
      </FaleContentForm>
    </FaleContainer>
  )
}

