
import playStore from "../../../public/images/FavBaza.png"
import { Card, Container } from "./style";
import Image from "next/image";

export function DownloadCard(){
    return(
        <>
            <Container>
                <Card>
                    <Image src={playStore} alt="PlayStore icon" width={25}/>
                    <div>
                        <span>GET IT ON</span>
                        <span>Play Store</span>
                    </div>
                </Card>

                <Card>
                    <Image src={playStore} alt="PlayStore icon" width={25}/>
                    <div>
                        <span>GET IT ON</span>
                        <span>App Store</span>
                    </div>
                </Card>
            </Container>
        </>
    );
}