import eyebrow from '../../../public/Icons/eyebrow_location.png'
import Image from "next/image";
import { EyebrowContainer } from "./style";

export function Eyebrow(){
    return(
        <EyebrowContainer>
            <Image src={eyebrow} alt="verified icon" width={20} height={20}/>
            <span>Entregas mais simples e rápidas</span>
        </EyebrowContainer>
    );
}