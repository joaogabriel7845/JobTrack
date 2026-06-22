import { motion } from "motion/react"
import { useLocation } from "react-router-dom"

function FormAnimate ({ children }) {
    const location = useLocation()
    
    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col gap-5"
        >
            {children}
        </motion.div>
    )
}

export default FormAnimate;