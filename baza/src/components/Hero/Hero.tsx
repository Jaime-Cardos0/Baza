import { Header } from "../Header/header";
import { Eyebrow } from "../EyeBrow/EyeBrow";
import { HeroContainer } from "./style";
import { DownloadCard } from "../DownloadCard/Card";

export function Hero(){
    return(
        <HeroContainer>
            <Header/>
            <Eyebrow/>
            <h1>
                Uma nova forma de fazer entregas
            </h1>
            <p>
                Peça, acompanhe e receba a sua encomenda em minutos <span> com motoqueiros da sua cidade </span>
            </p>

            <div>
                <DownloadCard/>
            </div>
        </HeroContainer>
    );
}