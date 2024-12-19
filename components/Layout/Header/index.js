import { FaAngleDown, FaAngleUp, FaBars, FaUserCircle } from "react-icons/fa";
import useLogOut from "../../../hooks/useLogOut";
import useToggle from "../../../hooks/useToggle";
import Notification from "./Notification";
import {
  AiOutlineExpand,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineMail,
} from "react-icons/ai";

function Header({ admin, username, showMenu, setShowMenu }) {
  const { toggle, setToggle, node } = useToggle();

  const { logoutUser } = useLogOut();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="sticky top-0 z-20">
      <div className="relative z-20">
        <div className="bg-white h-[68px] w-full flex justify-between  items-center shadow-md  px-7 z-30">
          <div className=" flex gap-5 items-center fle-start">
            <div
              className="text-black lg:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <AiOutlineMenu size={20} />
            </div>

            <div className=" text-black  ">
              <AiOutlineExpand size={20} className="text-gray-500" />
            </div>
            <div className=" hidden relative md:block">
              <input
                type="text"
                placeholder="Search"
                className="px-7 py-2 outline-none text-slate-800 bg-[#f0f3ff] rounded"
              />
              <div className="absolute right-0 top-3 px-5">
                <AiOutlineSearch size={20} color="gray" />
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-5 ">
            <div className="hidden lg:flex justify-between items-center gap-12 text-white text-base font-semibold">
              <p className="">Username: {username}</p>
              <p className="">Role : {admin ? "Admin" : "Poster"}</p>
            </div>
            <AiOutlineMail size={21} className="text-gray-500" />
            <Notification />

            <div
              className=" text-white p-1 rounded-full cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <img src="/user.png" alt="" width={40} className="rounded-full" />
            </div>
          </div>

          {/* <div
            className="lg:hidden text-white p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img src="/user.png" alt="" width={40} className="rounded-full" />
          </div> */}
        </div>
      </div>
      <div
        ref={node}
        className={` flex flex-col items-center bg-white absolute top-[68px] right-3 w-[200px] py-7 text-sm text-black font-semibold shadow-md rounded-md ease-out duration-300 z-10
            ${toggle ? "translate-y-0" : "-translate-y-full shadow-none"}`}
      >
        <p className="py-3">Username: {username}</p>
        <p className="py-3">Role : {admin ? "Admin" : "Poster"}</p>
        <button
          type="button"
          className="mt-2 px-5  py-3 text-black hover:bg-opacity-80 text-sm rounded-lg active:scale-95 transition duration-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
