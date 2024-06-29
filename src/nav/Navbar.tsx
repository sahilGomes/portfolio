import Menu from "./Menu";

export default function Navbar() {
    return (
        <nav className="w-full h-[75px] text-gray-200 sticky top-0 z-[100] nav">
            <div className="relative">
                <div className="font-bold text-3xl absolute h-[39px] left-[10px] top-[20px]">SaGo</div>
                <Menu/>
            </div>
        </nav>
    )
}
