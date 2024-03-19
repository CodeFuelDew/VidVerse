import Image from "next/image"
import huluLogo from "../public/images/vidverse.png"
import HeaderItem from "./HeaderItem"
import {HomeIcon, CheckBadgeIcon, MagnifyingGlassIcon, UserIcon, BoltIcon, BookOpenIcon} from "@heroicons/react/24/outline"

const Header = () => {

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
             <HeaderItem title="HOME" Icon={HomeIcon} url="/"/>
             {/* <HeaderItem title="TRENDING" Icon={BoltIcon} url="/?genre=fetchTrending"/>
             <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}/> */}
             {/* <HeaderItem title="COLLECTIONS" Icon={BookOpenIcon}/> */}
             <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} url="/search"/>
             <HeaderItem title="ACCOUNT" Icon={UserIcon} url="/account"/>
            </div>
            <Image className="object-contain h-auto w-auto"
            src={huluLogo.src} 
            width={200} height={100} alt="hulu logo"/>
        </header>
    )

}

export default Header;