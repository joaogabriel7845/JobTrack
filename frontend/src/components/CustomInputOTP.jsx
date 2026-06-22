import {InputOTP, Label, Surface} from '@heroui/react';
import { useState } from 'react';
import Button from './Button';

function CustomInputOTP() {

    const [msgInfo, setMsgInfo] = useState("Enviamos um código para o seu email !")

    return (
    <div className="flex flex-col gap-5">
        
        <Label className="text-xl text-center text-yale-blue-dark font-semibold font-[Raleway]">{msgInfo}</Label>
        
        <Label className="text-sm text-gray-500 text-center font-semibold font-[Raleway]">Insira o código de verificação</Label>

        <Surface className="flex w-full flex-col gap-2 bg-gray-200/40 rounded-3xl p-6 font-[Raleway]">
            <div className="flex justify-center">
                <InputOTP
                className="gap-3"
                containerClassName="flex items-center gap-4"
                maxLength={6}
                >
                <InputOTP.Group className="gap-3">
                    <InputOTP.Slot
                    className="size-10 md:size-12 rounded-lg border-2 text-lg font-bold"
                    index={0}
                    />
                    <InputOTP.Slot
                    className="size-10 md:size-12 rounded-lg border-2 text-lg font-bold"
                    index={1}
                    />
                    <InputOTP.Slot
                    className="size-10 md:size-12 rounded-lg border-2 text-lg font-bold"
                    index={2}
                    />
                </InputOTP.Group>
                <InputOTP.Separator className="bg-border h-1 w-2 rounded-full" />
                <InputOTP.Group className="gap-3">
                    <InputOTP.Slot
                    className="size-10 md:size-12 rounded-lg border-2 text-lg font-bold"
                    index={3}
                    />
                    <InputOTP.Slot
                    className="size-10 md:size-12 rounded-lg border-2 text-lg font-bold"
                    index={4}
                    />
                    <InputOTP.Slot
                    className="size-10 md:size-12 rounded-lg border-2 text-lg font-bold"
                    index={5}
                    />
                </InputOTP.Group>
                </InputOTP>

            </div>
        </Surface>
        <p className="text-center text-gray-500 font-[Montserrat]">
            Não recebi nenhum código{" "}
            <Button
                onClick={() => setMsgInfo("Reenviamos o seu código !")}
                className="transition-all border-b-2 border-yale-blue-dark font-bold text-yale-blue-dark hover:cursor-pointer"
            >
                Reenviar
            </Button>
        </p>
    </div>
    );
}

export default CustomInputOTP;