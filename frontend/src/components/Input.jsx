import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faAt, faLock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ children, type, placeholder, icon }) {

  const icones = {
    user: faUserAlt,
    email: faAt,
    password: faLock,
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={icones[icon]} />
        <h1 className="text-xl font-['Montserrat']">{children}</h1>
      </div>

      <div className="flex items-center relative gap-5">
        <input
          placeholder={placeholder}
          className="w-full shadow font-['Montserrat'] transition-all border rounded-md border-black/40 outline-0 pr-15 p-3.75"
          type={type}
        ></input>
        {type === "password" && (
          <button className="absolute right-5 hover:cursor-pointer">
            <FontAwesomeIcon icon={faEye} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
