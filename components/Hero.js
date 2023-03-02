// next
import Image from "next/image";
import { useState, useEffect } from "react";
// context
import { ProfileContext } from "@/profileContext";
import { useContext } from "react";
// iconify
import Iconify from "./iconify/Iconify";

const Hero = () => {
    const profileContext = useContext(ProfileContext);
    const { content, pfp } = profileContext;

    let greetings = [
        "Hello", // English
        "こんにちは", // Japanese
        "Ciao", // Italian
        "你好", // Chinese (Mandarin)
        "Hola", // Spanish
        "Bonjour", // French
        "Привет", // Russian
        "مرحبا", // Arabic
        "Guten Tag", // German
    ]

    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(1600);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                // reset index if current index is greater than array size
                return prevIndex + 1 < greetings.length ? prevIndex + 1 : 0;
            });
            if (delay == 200) {
                setDelay(50)
            } else {
                setDelay(prevDelay => prevDelay - 200)
            }
        }, delay);
        return () => clearInterval(interval);
    }, [delay])

    return (
        <div className="hero">
            <div>
                <div>
                    <h1 style={{ marginBottom: 0, height: "50px" }}>{greetings[index]}</h1>
                    <h1 style={{ marginTop: 0}}>{content.tagline}</h1>
                    <p style={{ marginBottom: "2rem" }}>{content.bio}</p>
                    <div>
                        {content && content.handles.map((handle) => {
                            return <a href={handle.link} key={handle.link} className="handle">
                                <p>{handle.name}</p>
                            </a>
                        })}
                    </div>
                </div>
                <Image className="pfp" src={pfp} alt="pfp" />
            </div>
        </div>
    )
}

export default Hero;