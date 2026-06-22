import { useState } from "react"
import EmailStep from "./EmailStep"
import CodeStep from "./CodeStep"
import AuthLayout from "../../../layout/AuthLayout"

function ForgotPassword() {
    const [step, setStep] = useState("email")
    
    return (
        <AuthLayout>
            {step === "email" && <EmailStep onNext={() => setStep("code")}/>}
            {step === "code" && <CodeStep />}
        </AuthLayout>
    )
}

export default ForgotPassword;