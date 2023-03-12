import Header from "@/Global/Header";
import Image from "next/image";
import Ad from '../../asset/Ad.png';

export default function Detail () {

    return(
        <>
            <Header/>
            <Image src={Ad} alt="Ad" width={1512} height={107}/>
        </>
    )
}