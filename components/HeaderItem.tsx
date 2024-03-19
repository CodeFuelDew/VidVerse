import Link from "next/link"

interface HeaderItemData {
    title:string,
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    url?:string
}

const HeaderItem = ({Icon, title, url}:HeaderItemData) => {
    

    return (
        <Link href={url || ""}>

        <div className="flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
            
        </div>
        </Link>

    )
}

export default HeaderItem;