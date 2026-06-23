import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Register from "../../pages/Auth/Register";
import { motion } from "motion/react";

function AuthLayout({ children }) {
    const location = useLocation()

    const contextTitle = location.pathname === "/" ? "block" : "hidden"
    
    const pageTypeMap = {
        "/": "login",
        "/register": "register",
        "/forgot-password": "forgotPassword"
    }

    const pageType = pageTypeMap[location.pathname] || "login"
    
    const phrases = {
        login: {
            title: "Organize sua carreira",
            description: "Acompanhe cada candidatura em um só lugar.",
            header: {
                showBackButton: false,
                centerLogo: true, 
                buttonText: "Cadastre-se",
                buttonRoute: "/register"
            }
        },
        register: {
            title: "Crie sua conta",
            description: "Comece a organizar suas candidaturas hoje mesmo",
            header: {
                showBackButton: true,
                centerLogo: false, 
                buttonText: "Login",
                buttonRoute: "/",
            }
        },
        forgotPassword: {
            title: "Esqueceu sua senha?",
            description: "Não se preocupe. Vamos ajudar você a recuperar o acesso à sua conta.",
            header: {
                showBackButton: true,
                centerLogo: false, 
                buttonText: "Login",
                buttonRoute: "/",
            }
        }
    }

    const currentPhrase = phrases[pageType]

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };


    return (
        <div className="w-full h-full flex">

            <div className="flex flex-col md:flex-row absolute inset-0">
                
                <Header showBackButton={currentPhrase.header.showBackButton} centerLogo={currentPhrase.header.centerLogo} buttonText={currentPhrase.header.buttonText} buttonRoute={currentPhrase.header.buttonRoute}/>

                {/* Hero Mobile */}
                <div className="md:hidden relative h-30">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.pexels.com/photos/18909576/pexels-photo-18909576.jpeg"
                        alt=""
                    />
                    
                    <div className="absolute inset-0 bg-black/40"></div>

                </div>


                {/* Hero Desktop */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="hidden md:flex justify-center relative items-center flex-1 overflow-hidden"
                >

                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/18909576/pexels-photo-18909576.jpeg" alt="" />

                    <motion.div 
                        variants={container}
                        className="w-full flex flex-col gap-5 absolute bottom-0 left-0 p-15"
                    >

                        <motion.p variants={item} className="text-white text-2xl font-[Raleway]">{currentPhrase.description}</motion.p>

                    </motion.div>
                    
                </motion.div>

                <div className="flex flex-col justify-center flex-1">

                    <div className="flex flex-col justify-between">

                        <div className={`${contextTitle} w-full max-w-md mx-auto flex flex-col justify-center p-5 border-b-2 border-yale-blue-dark/30 px-5 gap-5`}>

                            <h1 className="text-4xl md:text-5xl text-center font-bold font-['Montserrat'] text-deep-space-blue">
                                Bem-vindo ao Jobtrack.
                            </h1>
                            
                            <p className="text-gray-400 text-center font-['Inter']">Entre na sua conta</p>

                        </div>

                        {children}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthLayout;