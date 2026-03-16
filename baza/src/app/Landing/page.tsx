import { Metadata } from "next";
import { Header } from "./components/Header";

export const metadata: Metadata = {title: "Baza | Landing"}

export default function Landing(){
    return(
        <Header/>
    );
}