import Side from "./SideMenu";
import Top from "./Header";

function SupportRequest() {
  return (<>
    <div className="w-100 minWidth">
      <Side select={`campaign`}></Side>
      <Top heading={`Support Request`}></Top>
      <div className={`pt-[2.1%] mr-[1.46%] pl-[1.65%] regular overflow-auto`}>

        <div className="flex w-[100%] regular  px-[1.435%] pt-[1.65%] pb-[1.65%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100 drop-shadow-userSettting bg-white rounded-[8px] px-[1.55%] py-[2%] ">

            {/* form */}
            <div className="w-[100%] pb-[1.04%]  float-left">
              <form>
                <div className="w-[99.3%] float-left">
                  <span className="text-[1vw] max-md:text-[1.6vw] max-mb:text-[2.2vw]">Subject</span> <br />
                  <input className="w-100 border mt-[.53%] px-[1.35%] py-[1.35%] border-[#B3B3B3] rounded-[5px] text-[1vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] placeholder:text-[#B3B3B3] regular" type='text' placeholder="Enter your subject" />
                </div>
                <div className="w-[99.3%] pt-[1.3%] float-left">
                  <span className="text-[1vw] max-md:text-[1.6vw] max-mb:text-[2.2vw]">Message</span> <br />
                  <textarea className="w-100 border mt-[.53%] px-[1.35%] pt-[1.35%] pb-[8.15%] border-[#B3B3B3] rounded-[5px] text-[1vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] placeholder:text-[#B3B3B3] regular" type='text' placeholder="Enter your subject" />
                </div>
                <div className="w-[99.3%] pt-[1.3%] float-left">
                  <button className="mt-[.53%] px-[5.73%] py-[.7%] bg-[#2A83EC] rounded-[5px] text-[1vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] text-white regular" >Submit</button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </div>
  </>
  )
}

export default SupportRequest