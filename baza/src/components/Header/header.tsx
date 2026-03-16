import logo from "../../../public/images/Logo.png"
import { Container, Menu } from "./style";
import Image from "next/image";

export function Header(){
    return(
        <Container>
            <Menu>
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
            </Menu>
        </Container>
    );
}