import plus from '../images/plus.png';
import Side from "./SideMenu";
import Top from "./Header";

function CreateWorkspace() {
  return (<>
    <div className="w-100 minWidth">
      <Side select={`setting`}></Side>
      <Top heading={`Create Workspace`}></Top>
      <div className={`pt-[2.1%] mr-[1.46%] pl-[1.65%] regular overflow-auto`}>
        {/* this is the below part where all account is created  */}
        <div className="flex w-[100%] regular  px-[2.51%] pt-[2.8%] pb-[14%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100 drop-shadow-userSettting bg-white rounded-[8px] px-[1.805%] pt-[1.74%] pb-[1.8%]">
            <div className="w-100 float-left">

              {/* left hand side input boxes */}
              <div className="w-[100%] float-left ">
                <div className="w-100 float-left">
                  <span className="text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] leading-[100%]">Workspace Name</span>
                  <input className="w-100 mt-[1.02%] max-mb:mt-[2%] pt-[.79%] pb-[1.1%] px-[1.26%] max-mb:px-[2.8%] max-mb:py-[2%]  text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] border border-[#B3B3B3] rounded-[5px] placeholder:text-black" type='text' placeholder="My Workspace" />
                </div>
              </div>
            </div>

            <div className="w-100 pt-[1.1%] max-mb:mt-[2%] float-left">
              <button className="flex pt-[.91%] pb-[.6%] pl-[1.02%] max-md:pl-[1.8%] max-md:py-[1.2%]  text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] text-white  bg-[#2A83EC] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] ">Invite User <img className="w-[16%] ml-[7%]" src={plus} alt='load' /> </button>
            </div>

            <div className="w-100 pt-[2.9%] float-left">
              <div className="w-[50%] float-right flex justify-end">
                <button className="flex mr-[2.5%] px-[2.6%] max-md:px-[3.8%] max-md:py-[2.5%] pt-[2%] pb-[1%] bg-bgLighterGrey rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] text-black text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] medium"><span className="">Cancel</span></button>
                <button className="flex px-[2.6%] max-md:px-[3.8%] max-md:py-[2.5%] pt-[2%] pb-[1%]  bg-[#2A83EC] rounded-[6px] max-md:rounded-[4.5px] max-mb:rounded-[3.2px] text-white text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] medium"><span className="">Create Workspace</span></button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </>
  )
}

export default CreateWorkspace