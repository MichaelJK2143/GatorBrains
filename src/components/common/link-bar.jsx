import Link from "next/link"
import { Gator } from "./gator-logo"
import { LinkBreak1Icon } from "@radix-ui/react-icons"

export function LinkBar({ links = ["Cats", "About", "Contact"], className="h-18 items-center" }) {
    return (
        <header className={className} style={LinkBarStyle}>
            <Gator/>
            <Branding/>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Links linkList={links}/>
            </nav>
        </header>
    )
}

const Links = ({linkList = ["Cars", "About", "Contact"]}) => {
    const generateLink = (link) => {
        if (typeof link != 'string') return null;
        
        return (
            <Link className="hover:underline underline-offset-4" href={link.toLowerCase().replace(/ /g, "_")} style={LinkStyle}> 
                {link}
            </Link>
        );
    }

    return linkList.map((link) => generateLink(link))
}

const Branding = () => {
    return (
        <Link className="flex items-center" href="/" style={LinkStyle}>
            <span className="ml-2" style={LogoStyle}> Gator Brains </span>
        </Link>
    )
}

const LinkStyle = {
    
        color:"#ffffff",
        fontSize:"1.25rem"
}

const LogoStyle = {
    fontSize:"1.35rem",
    fontWeight:"500"
}

const LinkBarStyle = {
    backgroundColor:"#2724b5",
    height:"18",
    display: "flex",
    paddingRight: "1rem",
    paddingLeft: "1rem",
}