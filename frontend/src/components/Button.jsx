import { motion } from "motion/react";
import { Link } from "react-router-dom";


function Button({ to, children, className, onClick }) {

    if(to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        )
    }

    return (
        <motion.button 
            onClick={onClick}
            whileTap={{ scale: 0.98 }}
            className={className}
        >
            {children}
        </motion.button>
    )
}

export default Button;