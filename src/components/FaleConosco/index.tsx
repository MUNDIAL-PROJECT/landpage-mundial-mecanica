import { LocalMap } from "../Map/Index";
import {
  FaleContainer,
  FaleContentForm,
  FaleContentImg,
  FormTitleContainer,
} from "./styled";
import { useForm, ValidationError } from "@formspree/react";

export const FaleConosco = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const inputs = document.querySelectorAll("input");
  const textarea = document.getElementById("message") as HTMLInputElement;
  if (state.succeeded) {
    inputs.forEach((input) => (input.value = ""));
    textarea.value = "";
  }

  const apiKey = import.meta.env.VITE_GOOGLE_MAP_KEY;

  return (
    <FaleContainer id="faleconosco">
      <FaleContentImg>
        <LocalMap googleMapsApiKey={apiKey}/>
      </FaleContentImg>
      <FaleContentForm>
        <form onSubmit={handleSubmit} className="faleForm">
          <FormTitleContainer>
            <h3>Fale Conosco</h3>
            <p>Deixe sua mensagem e responderemos assim que possível.</p>
          </FormTitleContainer>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            id="message"
            placeholder="Escreva sua mensagem aqui!"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </FaleContentForm>
    </FaleContainer>
  );
};
