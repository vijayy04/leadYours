import { useState } from "react";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Top({ heading }) {

  const [menuIsActive, setMenuIsActive] = useState(false);

  const navigate = useNavigate();

  const onClickNotification = () => {
    navigate('/notification')
  }

  const onClickMenuBar = () => {
    if (menuIsActive) setMenuIsActive(false)
    else setMenuIsActive(true)
  }

  return (
    <div className={`flex pl-[1.8%]`}>
      <div className="w-100 minWidth">
        <div className="flex relative w-1/2 max-md:w-100 justify-start text-create create pt-5 float-left">
          <div className="w-100 max-md:w-[70%] float-left">
            {heading}
          </div>
          <div className="hidden w-[30%] max-md:flex justify-end ">
            <AiOutlineMenu onClick={onClickMenuBar} className="p-[3%] border mr-[9%] mt-[5%] border-[#2A83EC] rounded-[4px] text-[#2A83EC]" />

            {menuIsActive ? (<div className="hidden max-md:flex w-100 absolute pb-[3%] bg-white pt-5 top-[100%] z-20 float-left justify-center">
              <div className="w-100 transition-all ease-in-out">
                <div className="w-100 float-left">
                  <div onClick={onClickNotification} className="float-left create-icon mr-twoIcon bg-no-repeat bg-center bg-notification"></div>
                </div>
                <div className="w-100 mt-[4%] float-left">
                  <div className="float-left create-icon mr-twoIcon bg-no-repeat bg-center bg-contact"></div>
                </div>
                <div className="w-100 float-left mt-[4%]">
                  <div className="float-left create text-sm mr-logo w-logo h-logo rounded-full bg-lightGrey pt-3 pl-logo">Logo</div>
                </div>
                <div className="w-100 float-left mt-[4%]">
                  <div className="float-left created text-sm mr-[1%] py-[1%] px-2">Company</div>
                  <div className="float-left text-black pt-[2%] hover:text-darkBlue hover:cursor-pointer duration-200 font-bold"><AiOutlineDown size={15} /></div>
                </div>
              </div>
            </div>) : ''}

          </div>
        </div>
        <div className="flex max-md:hidden w-1/2 pt-5  float-left justify-end">
          <div onClick={onClickNotification} className="create-icon mr-twoIcon bg-no-repeat bg-center bg-notification"></div>
          <div className="create-icon mr-twoIcon bg-no-repeat bg-center bg-contact"></div>
          <div className="create text-sm mr-logo w-logo h-logo rounded-full bg-lightGrey pt-3 pl-logo">Logo</div>
          <div className="created text-sm mr-5  py-3 px-2">Company</div>
          <div className="text-black pt-4 mr-9 hover:text-darkBlue hover:cursor-pointer duration-200 font-bold"><AiOutlineDown size={15} /></div>
        </div>
      </div>
    </div>
  )
}

export default Top