import wave from "../../assets/Png/wave.png";
import document from "../../assets/Png/document.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { faAt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import AuthLayout from "../../layout/AuthLayout";

function Register() {
  return (
    <AuthLayout>
      <div className="w-full flex flex-col gap-5">
        <fieldset className="flex flex-col border border-deep-space-blue/40 p-10 bg-white rounded-2xl shadow-lg gap-5">
          <legend className="text-3xl px-3 text-deep-space-blue font-bold font-['Montserrat'] text-center">
            Cadastre-se
          </legend>

          <div className="flex flex-col justify-center px-10 gap-5">
            <Input icon="user" type={"text"} placeholder={"Digite seu Nome"}>
              Nome
            </Input>

            <Input icon="email" type={"email"} placeholder={"Digite seu Email"}>
              Email
            </Input>

            <Input
              icon="password"
              type={"password"}
              placeholder={"Digite sua Senha"}
            >
              Senha
            </Input>

            <Input
              icon="password"
              type={"password"}
              placeholder={"Repita sua senha"}
            >
              Confirmar senha
            </Input>

            <p className="text-center font-['Montserrat']">
              Já possui uma conta ?{" "}
              <a
                href="/"
                className="transition-all border-b-2 border-transparent font-bold text-yale-blue-dark hover:border-yale-blue hover:cursor-pointer"
              >
                Login
              </a>
            </p>

            <Button>Cadastrar</Button>

          </div>
        </fieldset>
      </div>
    </AuthLayout>
  );
}

export default Register;
