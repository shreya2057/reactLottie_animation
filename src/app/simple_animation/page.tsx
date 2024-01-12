'use client'
import dynamic from "next/dynamic";
// Animations does not work with server side rendering
const Lottie  = dynamic(()=>import("lottie-react"),{ssr:false});
import groovyWalkAnimation from "./groovyWalk.json";

export default function Animation(){
    return (
        <div>
            <Lottie
                animationData={groovyWalkAnimation}
                className="flex justify-center items-center"
                loop={true}
            />
        </div>
    );
};