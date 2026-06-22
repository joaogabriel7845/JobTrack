// import { InputOTP, Label, Link } from "@heroui/react";
import FormAnimate from "../../../../components/FormAnimate";
import Input from "../../../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import CustomInputOTP from "../../../../components/CustomInputOTP";

function CodeStep() {
  return (
    <FormAnimate>
        <div className="h-full flex flex-col bg-white p-5 md:p-10 rounded-2xl gap-5">

            <p className="text-4xl text-deep-space-blue font-bold font-[Montserrat] text-center">Redefina sua{" "}<span className="bg-yale-blue px-2 rounded-md text-white">senha</span></p>

            <CustomInputOTP />

        </div>
    </FormAnimate>
    );
}

export default CodeStep;
