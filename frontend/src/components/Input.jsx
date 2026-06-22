import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faAt, faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Input({ children, type, placeholder, icon }) {

  const icones = {
    user: faUserAlt,
    email: faAt,
    password: faLock,
  };

  const [senha, setSenha] = useState("")
  const [mostrarSenha, setMostrarSenha] = useState(false)

  const [valorEmail, setValorEmail] = useState("")

  return (
    <div className="flex flex-col gap-2 ">

      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={icones[icon]} />
        <h1 className="font-['Montserrat']">{children}</h1>
      </div>

      <div className="flex items-center relative gap-5">
        <input
          placeholder={placeholder}
          className=" border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full shadow font-['Montserrat'] transition-all rounded-md outline-0 pr-14 p-3.75"
          type={mostrarSenha ? "text" : type}
          onChange={(e) => setSenha(e.target.value)}
        ></input>
        {type === "password" && (

          <button onClick={() => setMostrarSenha(!mostrarSenha)} className="w-fit p-4 absolute right-0 hover:cursor-pointer">
            <FontAwesomeIcon fontSize={20} icon={mostrarSenha ? faEye : faEyeSlash} />
          </button>

        )}
      </div>
    </div>
  );
}

export default Input;
