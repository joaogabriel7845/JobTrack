import wave from "../../assets/Png/wave.png";
import document from "../../assets/Png/document.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthLayout from "../../layout/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <div className="w-full flex flex-col gap-5">
        <fieldset className="flex flex-col border border-deep-space-blue/40 bg-white p-10 rounded-2xl shadow-lg gap-5">
          <legend className="text-3xl px-3 text-deep-space-blue font-bold font-['Montserrat'] text-center">
            Login
          </legend>

          <div className="flex flex-col justify-center px-10 gap-5">
            <Input
              icon="email"
              placeholder={"Digite o seu e-mail"}
              type={"email"}
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

            <p className="text-center font-['Montserrat']">
              Ainda não possui uma conta?{" "}
              <a
                href="/register"
                className="transition-all border-b-2 border-transparent font-bold text-yale-blue-dark hover:border-yale-blue hover:cursor-pointer"
              >
                Cadastrar-se
              </a>
            </p>

            <Button>Login</Button>
          </div>
        </fieldset>
      </div>
    </AuthLayout>
  );
}

export default Login;
