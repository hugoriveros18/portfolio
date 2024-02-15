import Link from "next/link";
import ActionButton from "../components/ActionButton";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen py-24">
        {/* WELCOME */}
        <div className="w-full block-fade-in block-fade-in-200 opacity-0">
            <h2 className="text-white text-sm ml-1 sm:mb-3">
                Welcome, I am 
            </h2>
        </div>
        {/* NAME */}
        <div className="w-full block-fade-in block-fade-in-300 opacity-0">
            <h1 className="text-fourthColor text-[80px] lg:text-[70px] md:text-[60px] sm:text-[50px] sm:max-w-[300px] font-bold mb-1">
                Hugo Riveros F.
            </h1>
        </div>
        {/* WHAT I DO */}
        <div className="w-full block-fade-in block-fade-in-400 opacity-0">
            <p className="text-thirdColor text-[70px] lg:text-[60px] md:text-[50px] sm:text-[32px] font-bold leading-none">
                I build exceptional web applications
            </p>
        </div>
        {/* SHORT DESCRIPTION */}
        <div className="w-full block-fade-in block-fade-in-500 opacity-0">
            <p className="text-fifthColor pt-5 pb-12 text-sm max-w-[550px] sm:pb-14">
                {`I'm a software developer based in Colombia, specialized in creating applications that make the difference and stand out for their excellence.`}
            </p>
        </div>
        {/* GET IN TOUCH */}
        <div className="w-full block-fade-in block-fade-in-600 opacity-0">
            <ActionButton
                text="Let's talk!"
                slug="#contact"
                variation="primary"
            />
        </div>
    </div>
  )
}
