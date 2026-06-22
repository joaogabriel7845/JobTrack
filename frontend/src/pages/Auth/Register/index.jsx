import wave from "../../../assets/Png/wave.png";
import document from "../../../assets/Png/document.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { faAt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import AuthLayout from "../../../layout/AuthLayout";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import FormAnimate from "../../../components/FormAnimate";

function Register() {

  const location = useLocation()
  
  return (
    <AuthLayout>
      <FormAnimate>
        <div className="flex flex-col border-deep-space-blue/40 p-10 bg-white gap-5">
        
          <h1 className="text-3xl px-3 text-deep-space-blue font-bold font-['Montserrat'] text-center">
            Cadastre-se
          </h1>

          <div className="w-full max-w-md mx-auto flex flex-col justify-center gap-5">
            <Input icon="user" type="text" placeholder={"Digite seu Nome"}>
              Nome
            </Input>

            <Input icon="email" type="email" placeholder={"seuemail@exemplo.com"}>
              Email
            </Input>

            <Input
              icon="password"
              type="password"
              placeholder={"Digite sua Senha"}
            >
              Senha
            </Input>

            <Input
              icon="password"
              type="password"
              placeholder={"Repita sua senha"}
            >
              Confirmar senha
            </Input>

            <p className="text-center font-['Montserrat']">
              Já possui uma conta?{"     "}
              <Link
                to={"/"}
                className="transition-all border-b-2 border-transparent text-deep-space-blue font-bold hover:border-deep-space-blue hover:cursor-pointer"
              >
                Login
              </Link>
            </p>

            <Button className="btn-auth">
              Cadastrar
            </Button>

          </div>
        </div>
      </FormAnimate>
    </AuthLayout>
  );
}

export default Register;
