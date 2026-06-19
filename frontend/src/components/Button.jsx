import { motion } from "motion/react";


function Button({ children }) {
    return (
        <motion.button 
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-md font-['Montserrat'] text-white bg-yale-blue shadow active:s">{children}
        
            
        </motion.button>
    )
}

export default Button;