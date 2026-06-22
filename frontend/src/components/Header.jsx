import { faArrowLeft, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Header({ showBackButton, centerLogo, buttonText, buttonRoute }) {

    const logoAlign = centerLogo ? "w-full text-center" : ""

    return (
        <div className="w-screen flex justify-between items-center bg-transparent absolute z-10 p-5 h-30 md:items-stretch md:h-auto md:p-8">

            <Button to={"/"} className={`${showBackButton ? "flex" : "hidden"} md:hidden w-14 h-14 justify-center items-center text-white font-semibold font-[Raleway] bg-yale-blue-dark rounded-full`}>
                
                <FontAwesomeIcon icon={faArrowLeft}/>
            
            </Button>
            
            <h1 className={`${logoAlign} md:hidden text-white text-4xl font-bold text-center font-['Darker_Grotesque']`}>Jobtrack<span className="text-sky-blue-light">.</span></h1>

            <div className="hidden md:flex justify-center items-center gap-2">            
                <h1 className="text-4xl text-white font-bold font-['Darker_Grotesque']">Jobtrack<span className="text-sky-blue-light">.</span></h1>
            </div>
            
            <Button
                to={buttonRoute}
                className="btn-header"
            >
                
                {buttonText}
                
            </Button>
        </div>
    )
}

export default Header;