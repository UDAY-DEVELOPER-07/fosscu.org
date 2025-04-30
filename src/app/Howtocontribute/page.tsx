"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { Badge } from "@/components/Badge";
import { Footer } from "@/components/Footer";

export default function HowToContribute() {
    return (
        <>
            <div className="min-h-screen w-full  bg-black/[0.96] antialiased relative overflow-hidden">
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
                             <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                             Welcome! If you're new to open source, don't worry — this guide will walk you through the steps to make your very first contribution.
                             </p>
                             <p className="text-xl text-neutral-300 font-bold max-w-3xl mx-auto mt-6">
                                If you dont have a git on your machine install it
                            </p>
                           </motion.div>

                           <motion.div
                             initial={{ opacity: 0, y: 20 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.5 }}
                             className="text-center mb-20"
                           > 
                            <div className="bg-transparent/5 backdrop-blur-md w-[100%] p-8 m-2 rounded-2xl border border-white/10 shadow-lg">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 text-center">
                                    Raise an issue
                                </h3>
                                <p className="text-xl text-neutral-300 max-w-5xl mx-auto">
                                    You can raise an issue to report a bug or to request a new feature. Before raising an issue, please make sure that the issue you are raising is not already present among the existing issues.
                                </p>
                            </div>
                            <div className="bg-transparent/5 backdrop-blur-md w-[100%] m-2 p-8 pb-1 rounded-2xl border border-white/10 shadow-lg">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 text-center">
                                    Fork the repository
                                </h3>
                                <p className="text-xl text-neutral-300 max-w-5xl mx-auto">
                                Fork the repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account.
                                </p>
                                <div className="flex justify-center mt-4">
                                    <Badge text="View image" href="/readme/Fork.jpeg" />
                                </div>
                            </div>
                             
                           </motion.div>
                           </div>
                         </div>   
            </div>

        </>
    )
}