import { IoIosInformationCircle } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex h-full flex-col overflow-y-hidden bg-slate-200">
      <header className="bg-black p-4 text-white">
        <h1 className="text-2xl flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span>Wiki for fans</span>
            <IoIosInformationCircle />
          </a>
        </h1>
      </header>
    </div>
  );
}

export default Header;
