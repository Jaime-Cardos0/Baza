import Image from "next/image";
import logo from "../../../../public/images/Logo.png"

export function Header(){
    return(
        <header className="block">
            <div className="mx-auto max-w-6xl bg-[#2f3036] w-full h-16 flex items-center justify-between px-4">
                <Image
                    src={logo}
                    alt="logo image"
                />
                <nav>
                    <a href="#">Motoristas</a>
                    <a href="#">Clientes</a>
                    <a href="#">Parceiros</a>
                    <a href="#">Blog</a>
                </nav>
                <button type="button">Motoristas</button>
            </div>
        </header>
    );
}