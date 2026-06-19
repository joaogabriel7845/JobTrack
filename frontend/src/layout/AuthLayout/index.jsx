import background from "../../assets/Png/background.png"
import document from "../../assets/Png/document.png"

function AuthLayout({ children }) {
    return (
        <div className="w-full h-full flex">
            <img
                className="w-full h-screen object-cover relative inset-0 object-center transform -scale-x-100"
                src={background}
                alt=""
            />

            <div className="flex flex-col md:flex-row absolute inset-0">

                <div className="hidden md:flex justify-center items-center flex-1 p-10">
                    <img className="object-cover" src={document} alt="" />
                </div>

                <div className="flex flex-col justify-center flex-1 p-10">

                    <div className="flex flex-col justify-between gap-10">

                        <h1 className="text-center text-6xl font-bold font-['Montserrat'] text-deep-space-blue">
                            JobTrack
                        </h1>

                        {children}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthLayout;