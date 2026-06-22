import wave from "../../../assets/Png/wave.png";
import document from "../../../assets/Png/document.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AuthLayout from "../../../layout/AuthLayout";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import FormAnimate from "../../../components/FormAnimate";


function Login() {

  const location = useLocation()

  return (
    <AuthLayout>
      <FormAnimate>
        
        <div className="flex flex-col bg-white p-10 rounded-2xl gap-5">

          <p className="text-3xl text-deep-space-blue font-bold font-[Montserrat] text-center">
            Login
          </p>

          <div className="w-full max-w-md flex flex-col mx-auto gap-5">
            <Input
              icon="email"
              placeholder={"seuemail@exemplo.com"}
              type="email"
            >
              Email
            </Input>

            <Input
              icon="password"
              placeholder={"Digite sua senha"}
              type="password"
            >
              Senha
            </Input>

            <Link to={"/forgot-password"} className="transition-all text-center text-gray-400 font-[Montserrat] hover:text-yale-blue hover:font-semibold">Esqueceu a senha?</Link>

            <p className="text-center text-gray-500 font-[Montserrat]">
              Ainda não possui uma conta?{" "}
              <Link
                to={"/register"}
                className="transition-all border-b-2 border-transparent font-bold text-yale-blue-dark hover:border-yale-blue hover:cursor-pointer"
              >
                Cadastrar-se
              </Link>
            </p>

            <Button className="btn-auth">
              Login
            </Button>
          </div>
        </div>
      </FormAnimate>
    </AuthLayout>
  );
}

export default Login;
