import lineSpeedIcon from "../../../public/features/line-md_speed-twotone.png"
import { Container, GridContainer, FeatureCard } from "./style";
import Image from "next/image";

export function FeatureSection(){
    return(
        <Container>
            <GridContainer>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
                <FeatureCard>
                    <Image src={lineSpeedIcon} alt="icon" width={20} height={20}/>
                    <h4>Envio Rápido</h4>
                    <p>Entregas feitas em tempo recorde por toda Luanda.</p>
                </FeatureCard>
            </GridContainer>
        </Container>
    );
}