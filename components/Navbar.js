import Image from "next/image";
import logo from "../public/logo.png"

export default function Navbar() {
    return (
        <header className="top-0 p-5 w-full flex shadow-md  items-start justify-between">
            <div className='mt-2'>
            <Image className="w-64" src= {logo} alt=""/>
            </div>
            <div  className='flex flex-row items-center'>
                
            </div>
        </header >
    )
}