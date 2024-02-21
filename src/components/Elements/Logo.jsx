import Image from "next/image";
import { MonAutoEcoleLogo } from "../../assets";

export function Logo() {
    return <Image src={MonAutoEcoleLogo} loading="lazy" alt="Mon AutoEcole Logo" />;
}
