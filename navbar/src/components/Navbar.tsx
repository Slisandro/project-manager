import Auth from "./Auth";
import Link from "./Link";
import ListBoards from "./ListBoards";

const Navbar = () => {
    return (
        <div className="w-64 h-screen bg-[#111827] text-white fixed flex flex-col justify-between">
            <div>
                <div className="p-4 text-2xl font-bold border-b border-gray-700 cursor-default">
                    Project Manager
                </div>
                <ul className="mt-4">
                    <li
                        className="p-4 hover:bg-gray-800 cursor-pointer"
                    >
                        <Link to="/home" content="🏠 Inicio" />
                    </li>
                    <ListBoards />
                </ul>
            </div>
            <ul className="mb-4">
                <li
                    className="p-4 hover:bg-gray-800 cursor-pointer"
                >
                    <Link to="/configuration" content="⚙️ Configuración" />
                </li>
                <Auth />
            </ul>
        </div>
    );
};

export default Navbar;
