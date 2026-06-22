import Input from "../../../../components/Input";
import AuthLayout from "../../../../layout/AuthLayout";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Button from "../../../../components/Button";
import FormAnimate from "../../../../components/FormAnimate";

function EmailStep({ onNext }) {
  const location = useLocation();

  return (
    <FormAnimate>
      <div className="flex flex-col bg-white p-10 rounded-2xl gap-5">
        <p className="text-3xl text-deep-space-blue font-bold font-[Montserrat] text-center">
          Redefina sua{" "}
          <span className="bg-yale-blue px-2 rounded-md text-white">
            senha
          </span>
        </p>

        <p className="text-center text-gray-500 font-[Raleway]">
          Digite seu email para receber um código.
        </p>

        <p></p>

        <div className="w-full max-w-md flex flex-col mx-auto gap-5">
          <Input
            icon="email"
            placeholder={"seuemail@exemplo.com"}
            type="email"
          >
            Email
          </Input>

          <p className="text-center text-gray-500 font-[Montserrat]">
            Já possui uma conta?{"     "}
            <Link
              to={"/"}
              className="transition-all border-b-2 border-transparent text-deep-space-blue font-bold hover:border-deep-space-blue hover:cursor-pointer"
            >
              Login
            </Link>
          </p>

          <Button
            onClick={onNext}
            className="btn-auth"
          >
            Continuar
          </Button>
        </div>
      </div>
    </FormAnimate>
  );
}

export default EmailStep;
