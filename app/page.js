"use strict";
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    const handleClick= () => {
        router.push('/Info');
    }
    return (
        <div className="hero">
            <div className="overlay" />
            <div className="content">
                <Image src='/assets/me.png'
                alt="profile image" 
                width={165} 
                height={165} 
                className="profile"/>
                <h1>Maka Saparashvili</h1>
                <h2>Programmer. Financial Data Analyst. </h2>
                <p>Passionate about turning data into intuitive user experiences. I combine my analytical mindset with front-end development skills to build interfaces that solve real-world problems.</p>
                <button onClick={handleClick}>Know More</button>
            </div>
        </div>
    );
}