"use client"
import { useRef  } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { Footer } from "@/components/Footer";
import { useCallback } from "react";


export default function Howtocontribute() {

    const clipboarRef=useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

    const command = {
        command1 : "git config --global user.name <Your Name>",
        command2 : "git config --global user.email <your-email@example.com> ",
    }
    const clktocopy = useCallback(()=>{
        if (clipboarRef.current instanceof HTMLInputElement || clipboarRef.current instanceof HTMLTextAreaElement) {
            clipboarRef.current.select(); 
        }
        const textToCopy = `${command.command1 || ''} ${command.command2 || ''}`.trim();
        navigator.clipboard.writeText(textToCopy)
    },[command.command1,command.command2])




    return (
        <div className="min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
            <FloatingNav />
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <BackgroundLines className="h-full bg-transparent">
                    <></>
                </BackgroundLines>
            </div>
            <div className="absolute inset-0 z-[2]">
                <FloatingParticles />
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="green"
                />
            </div>

            <div className="relative z-[3] pt-40 pb-20 px-4">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
                            How to Contribute
                        </h1>
                        {/* Prerequisites section */}
                        <div>
                            <p className="text-2xl md:text-4xl font-bold text-left text-neutral-300 max-w-3xl  ">
                                Prerequisites
                            </p>
                            <div className={`
                relative group
                p-1 h-fit
                rounded-xl
                backdrop-blur-sm
                border border-white/10
                hover:border-white/20
                transition-all duration-500
                m-4
              `}>
                                <h5 className="text-lg md:text-1xl text-left text-neutral-300 max-w-3xl m-2">
                                    Install Git on your computer
                                </h5>
                                <h5 className="text-lg md:text-1xl text-left text-neutral-300 max-w-3xl m-2">
                                    Create a GitHub account.
                                </h5>
                                <h5 className="text-lg md:text-1xl text-left text-neutral-300 max-w-3xl m-2">
                                    Configure Git with your credentials:
                                    <div className="bg-black h-fit w-full rounded-es-md rounded-ee-md mt-4  ml-5">
                                        <div className="h-6 rounded-ss-md rounded-se-md w-full pb-3 bg-gray-800 ">
                                    {/* try to convert the copy to copied on click */}
                                            <pre className="text-right mb-3"><button onClick={clktocopy}>Copy&lt;&gt;</button>  </pre>
                                        </div>
                                        <pre className="p-4 max-w-fit pl-4">{command.command1}<br />{command.command2}
                                        </pre>
                                    </div>
                                </h5>
                            </div>
                        </div>
                        {/* Steps to follow */}
                        <div>
                            <p className="text-2xl md:text-4xl font-bold text-left text-neutral-300 max-w-3xl  ">
                                Steps to Follow
                            </p>
                            <div className={`
                                    relative group
                                    p-1 h-fit
                                    rounded-xl
                                    backdrop-blur-sm
                                    border border-white/10
                                    hover:border-white/20
                                    transition-all duration-500
                                    m-4`}>
                            </div>                    
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}