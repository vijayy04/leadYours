import Side from "./SideMenu";
import Top from "./Header";
import option from '../images/option.png';
import person from '../images/person.jpeg';

function Notification() {
  return (<>
    <div className="w-100 minWidth">
      <Side select={`notification`}></Side>
      <Top heading={`Notification`}></Top>
      <div className={`pt-[2.1%] mr-[1.46%] pl-[1.65%] regular overflow-auto`}>

        <div className="flex w-[100%] regular  px-[1.435%] pt-[1.65%] pb-[38.8%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100 drop-shadow-userSettting bg-white rounded-[8px] px-[1.55%] py-[2%] ">

            {/* first drop down */}
            <div className="w-[100%] borderLightGrey pb-[1.04%]  float-left">
              <div className="w-[100%] float-left">
                <div className="w-[2.3%] max-md:w-[3%] max-mb:w-[4.3%]  campaignCheckbox1 float-left medium text-[1vw]">
                  <img className="w-[100%] rounded-[50%]" src={person} alt='arrow-up' />
                </div>
                <div className="w-[50%] pt-[.1%] pl-[1.45%] campaignCheckbox1 float-left medium text-[1vw]">
                  <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] semiBold">Outreach Title</span>
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] ml-[2.3%] regular text-[#727272]">Commented on your Latest Story.</span>
                </div>
                <div className="w-[45.42%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] mt-[1%] mr-[5.4%] regular text-[#727272]">2 min Ago</span>
                  <button className="w-[2.4vw] h-[2.4vw] max-md:w-[3vw] max-md:h-[3vw] max-mb:w-[4vw] max-mb:h-[4vw]  max-md:rounded-[6px] bg-lightBlue flex justify-center rounded-[8px] py-[1.18%] px-[2.1%]" >
                    <img className="w-[50%]  max-md:w-[40%] max-mb:w-[30%]" src={option} alt='arrow-up' />
                  </button>
                </div>
              </div>

            </div>

            {/* second drop down */}
            <div className="w-[100%] borderLightGrey float-left pb-[1.04%] pt-[.93%]">
              <div className="w-[100%] float-left">
                <div className="w-[2.3%] max-md:w-[3%] max-mb:w-[4.3%]  campaignCheckbox1 float-left medium text-[1vw]">
                  <img className="w-[100%] rounded-[50%]" src={person} alt='arrow-up' />
                </div>
                <div className="w-[50%] pt-[.1%] pl-[1.45%] campaignCheckbox1 float-left medium text-[1vw]">
                  <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] semiBold">Outreach Title</span>
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] ml-[2.3%] regular text-[#727272]">Commented on your Latest Story.</span>
                </div>
                <div className="w-[45.42%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] mt-[1%] mr-[5.4%] regular text-[#727272]">1 hours Ago</span>
                  <button className="w-[2.4vw] h-[2.4vw] max-md:w-[3vw] max-md:h-[3vw] max-mb:w-[4vw] max-mb:h-[4vw]  max-md:rounded-[6px] bg-lightBlue flex justify-center rounded-[8px] py-[1.18%] px-[2.1%]" >
                    <img className="w-[50%]  max-md:w-[40%] max-mb:w-[30%]" src={option} alt='arrow-up' />
                  </button>
                </div>
              </div>

            </div>

            {/* third drop down */}
            <div className="w-[100%] borderLightGrey float-left pb-[1.04%] pt-[.93%]">
              <div className="w-[100%] float-left">
                <div className="w-[2.3%] max-md:w-[3%] max-mb:w-[4.3%]  campaignCheckbox1 float-left medium text-[1vw]">
                  <img className="w-[100%] rounded-[50%]" src={person} alt='arrow-up' />
                </div>
                <div className="w-[50%] pt-[.1%] pl-[1.45%] campaignCheckbox1 float-left medium text-[1vw]">
                  <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] semiBold">Outreach Title</span>
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] ml-[2.3%] regular text-[#727272]">Commented on your Latest Story.</span>
                </div>
                <div className="w-[45.42%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] mt-[1%] mr-[5.4%] regular text-[#727272]">1 day Ago</span>
                  <button className="w-[2.4vw] h-[2.4vw] max-md:w-[3vw] max-md:h-[3vw] max-mb:w-[4vw] max-mb:h-[4vw]  max-md:rounded-[6px] bg-lightBlue flex justify-center rounded-[8px] py-[1.18%] px-[2.1%]" >
                    <img className="w-[50%]  max-md:w-[40%] max-mb:w-[30%]" src={option} alt='arrow-up' />
                  </button>
                </div>
              </div>

            </div>

            {/* fourth drop down */}
            <div className="w-[100%] float-left pt-[.93%]">
              <div className="w-[100%] float-left">
                <div className="w-[2.3%] max-md:w-[3%] max-mb:w-[4.3%]  campaignCheckbox1 float-left medium text-[1vw]">
                  <img className="w-[100%] rounded-[50%]" src={person} alt='arrow-up' />
                </div>
                <div className="w-[50%] pt-[.1%] pl-[1.45%] campaignCheckbox1 float-left medium text-[1vw]">
                  <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.4vw] semiBold">Outreach Title</span>
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] ml-[2.3%] regular text-[#727272]">Commented on your Latest Story.</span>
                </div>
                <div className="w-[45.42%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                  pt-[.5%] float-left flex justify-end  medium text-[1vw]">
                  <span className="text-[.927vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] mt-[1%] mr-[5.4%] regular text-[#727272]">2 days Ago</span>
                  <button className="w-[2.4vw] h-[2.4vw] max-md:w-[3vw] max-md:h-[3vw] max-mb:w-[4vw] max-mb:h-[4vw]  max-md:rounded-[6px] bg-lightBlue flex justify-center rounded-[8px] py-[1.18%] px-[2.1%]" >
                    <img className="w-[50%]  max-md:w-[40%] max-mb:w-[30%]" src={option} alt='arrow-up' />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </>
  )
}

export default Notification