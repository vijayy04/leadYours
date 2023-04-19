import { GrHomeRounded } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { GoBook, GoMention } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaCommentDots } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { ImSwitch } from "react-icons/im";

const SideBar = () => {
  return (
    <div className="">
      <div className="fixed relative left-0 top-0  h-half  text-mainColor flex flex-col">
        <div className="lu" >LU.</div>
        <div className=" absolute bottom-6 ">
          <div className="sidebar-icon  " ><AiFillHome size={35} className='ico' /></div>
          <div className="sidebar-icon"><HiOutlineSpeakerphone size={35} className='ico' /></div>
          <div className="sidebar-icon"><GoBook size={35} className='ico' /></div>
          <div className="sidebar-icon"><FaCommentDots size={35} className='ico' /></div>
          <div className=" border-bottom mt-9 border-b border-darkBlue  ml-3 w-full">  </div>
        </div>

      </div>

      <div className="fixed relative left-0 top-0  h-half   text-mainColor flex flex-col">
        <div className="  ">
          <div className="sidebar-icon  " ><GoMention size={35} className='ico' /></div>
          <div className="sidebar-icon"><CiLinkedin size={35} className='ico' /></div>
          <div className="sidebar-icon"><IoSettingsOutline size={35} className='ico' /></div>
        </div>
        <div className="absolute bottom-16 sidebar-icon text-darkBlue"><ImSwitch size={35} className='ico' /></div>
      </div>

    </div>
  );



};

export default SideBar;