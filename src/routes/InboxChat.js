import person from '../images/person.jpeg';
import search from '../images/search.png';
import greenDot from '../images/greenDot.png';
import option from '../images/option.png';
import play from '../images/play.png';
import emoji from '../images/emoji.png';
import document from '../images/document.png';
import realPlus from '../images/realPlus.png';
import record from '../images/record.png';
import telegram from '../images/telegram.png';

function InboxChat() {
  return (
    <div className="flex w-[100%]  px-[1.07%] max-mb:px-[2%] max-mb:pt-[4%] max-mb:pb-[2%] pt-[2%] pb-[1.07%] bg-bgLightBlue rounded-[15px] float-left">
      {/* this is the right side chat part where all user chat is here  */}
      <div className="w-100 float-left">

        <div className="w-100 float-left">
          {/* user dp is here  */}
          <div className={`w-[77.5%] max-1350:w-[71%] max-1044:w-[63%] max-md:w-[60%] float-left`}>
            <div className="relative w-[5.63%] max-1350:w-[8.4%] max-1044:w-[11.5%] max-md:w-[12.5%] max-mb:w-[20%]  float-left">
              <img className="rounded-[8px] max-mb:rounded-[6px]" src={person} alt='user' />
              <img className="absolute w-[29.2%] max-1044:w-[35%] bottom-[-5%] right-[-10%] rounded-[8px]" src={greenDot} alt='user' />
            </div>

            <div className="w-[94%] max-1350:w-[91%] max-1044:w-[88%] max-md:w-[87%] max-mb:w-[80%] max-1350:pt-[.3%] pl-[1.76%] max-mb:pl-[3%] float-left">
              <div className="w-100 medium max-1350:pt-[.5%] max-1044:text-[1.42vw] max-md:pt-[0%] max-mb:pt-[1%] text-[1.32vw] max-md:text-[2vw] max-mb:text-[2.9vw]">Milli Bobby</div>
              <div className="w-100 text-[#434343] max-1350:pt-[1%] max-1044:text-[1.15vw] max-md:pt-[0%] text-[.926vw] max-md:text-[1.4vw] max-mb:text-[2vw] medium">Online</div>
            </div>
          </div>

          {/* search part is here */}
          <div className="w-[22.5%] max-1350:w-[29%] max-1044:w-[37%] max-md:w-[40%] float-left">
            <div className="w-[82%] mr-[3.4%] float-left relative">
              <input className=" border w-[100%] rounded-[8px] border-[#B3B3B3] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] max-mb:py-[4%] max-mb:rounded-[4px] pl-[7%] py-[3.2%] pr-[17%]" type='text' placeholder='Search...' />
              <img className="absolute w-[10%] max-mb:w-[12%] top-[25%] left-[85%]" src={search} alt='search-icon' />
            </div>
            <div className="w-[14.6%] flex justify-center max-mb:py-[4.4%] pt-[3.65%] pb-[2.3%] rounded-[6px] bg-lighterBlue float-left ">
              <img className="w-[16%] top-[25%] max-mb:w-[20%] left-[85%]" src={option} alt='search-icon' />
            </div>
          </div>
        </div>


        {/* chat part is here */}
        <div className="w-100 float-left regular bg-white mt-[1.78%] px-[1.73%] pt-[1.19%] rounded-[8px]">
          <div className="w-100 h-[66.91vh] max-mb:h-[78vh] borderLighterBlue float-left overflow-x-auto">
            <div className="w-100 float-left flex justify-center">
              <span className="text-[#434343] rounded-[8px] max-mb:rounded-[5px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-lighestBlue px-[1.193%] max-mb:px-[2.2%] max-mb:py-[1%] py-[.602%]">22 July, 2022</span>
            </div>

            {/* left side user  */}
            <div className="w-100 float-left flex justify-start">
              <div className="w-[33.3%] max-mb:w-[45%]">
                <button className="text-[#434343] text-left cursor-text rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-lighestBlue px-[5.15%] py-[4.4%] max-mb:py-[5.1%] max-mb:px-[7%] ">Hi there!</button>
              </div>
            </div>
            <div className="w-100 float-left flex justify-start pt-[.5%]">
              <span className="text-[#727272] rounded-[8px] medium text-[.967vw] max-md:text-[1.4vw] max-mb:text-[2vw] ">12:38 pm</span>
            </div>

            {/* right side user */}
            <div className="w-100 float-left flex justify-end">
              <div className="w-[33.3%] max-mb:w-[45%] flex justify-end">
                <button className="text-[#434343] text-left cursor-text rounded-bl-[8px] rounded-tr-[8px] rounded-tl-[8px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-[#F5F5F5] px-[4.5%] max-mb:px-[6%] py-[4.4%] max-mb:py-[5.1%]">
                  Hello <br />
                  I was hoping to hear back from you</button>
              </div>
            </div>
            <div className="w-100 float-left flex justify-end pt-[.5%]">
              <span className="text-[#727272] rounded-[8px] medium text-[.967vw] max-md:text-[1.4vw] max-mb:text-[2vw] ">12:38 pm</span>
            </div>

            {/* left side user  */}
            <div className="w-100 float-left  justify-start">
              <div className="w-[27.6%] max-md:w-[40%] float-left text-left cursor-text rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-lighestBlue px-[1.3%] py-[1.1%]">
                <div className="w-[9.4%] float-left">
                  <img className="w-[100%]" src={play} alt='play' />
                </div>
                <div className="w-[62%] float-left bg-[#E0E0E0] ml-[5%] my-[4%] pt-[3.1%] rounded-[20px]"></div>
                <div className="text-[#434343] text-[1vw] max-md:text-[1.5vw] float-left ml-[5%] pt-[1.4%]">00:10</div>
              </div>
            </div>
            <div className="w-100 float-left flex justify-start pt-[.5%]">
              <span className="text-[#727272] rounded-[8px] medium text-[.967vw] max-md:text-[1.4vw] max-mb:text-[2vw] ">12:38 pm</span>
            </div>

            {/* right side user */}
            <div className="w-100 float-left flex justify-end">
              <div className="w-[33.3%] max-mb:w-[45%] flex justify-end">
                <div className="w-100 flex text-[#434343] text-left cursor-text rounded-bl-[8px] rounded-tr-[8px] rounded-tl-[8px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-[#F5F5F5] px-[4.5%] max-mb:px-[6%] py-[4.4%] max-mb:py-[5.1%]">
                  Sounds Great! <br />
                  Yes please send me the file<img className="w-[25px] ml-[3%] mt-[7%] h-[25px]" src={emoji} alt='emoji' /> </div>
              </div>
            </div>
            <div className="w-100 float-left flex justify-end pt-[.5%]">
              <span className="text-[#727272] rounded-[8px] medium text-[.967vw] max-md:text-[1.4vw] max-mb:text-[2vw] ">12:38 pm</span>
            </div>

            {/* left side user  */}
            <div className="w-100 float-left  justify-start">
              <div className="w-[17.6%] max-1350:w-[19%] max-md:w-[29%] max-mb:w-[36%] float-left text-left cursor-text rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-lighestBlue px-[1.3%] py-[0.8%]">
                <div className="w-[25.5%] float-left">
                  <img className="w-[100%]" src={document} alt='play' />
                </div>
                <div className="text-[#434343] text-[1vw] float-left ml-[5%] pt-[1.4%]">
                  <span className="text-[#2A83EC] text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw]">Report.docx</span> <br />
                  <span className="text-[#727272] rounded-[8px] medium text-[.86vw] max-md:text-[1.35vw] ">54 KB</span>
                </div>
              </div>
            </div>
            <div className="w-100 float-left flex justify-start pt-[.5%]">
              <span className="text-[#727272] rounded-[8px] medium text-[.967vw] max-md:text-[1.4vw] max-mb:text-[2vw] ">12:38 pm</span>
            </div>

            {/* right side user */}
            <div className="w-100 float-left flex justify-end">
              <div className="w-[33.3%] max-mb:w-[45%] flex justify-end">
                <div className="w-100 leading-0 text-[#434343] text-left cursor-text rounded-bl-[8px] rounded-tr-[8px] rounded-tl-[8px] medium text-[1.196vw] max-md:text-[1.6vw] max-mb:text-[2.7vw] bg-[#F5F5F5] px-[4.5%] max-mb:px-[6%] py-[4.4%] max-mb:py-[5.1%]">
                  <div className='w-100'>
                    Thank you so muchhhhhh!!!!!
                  </div>
                  <div className="w-100 flex">
                    <img className="w-[25px] ml-[3%] mt-[0%] h-[25px]" src={emoji} alt='emoji' />
                    <img className="w-[25px] ml-[3%] mt-[0%] h-[25px]" src={emoji} alt='emoji' />
                    <img className="w-[25px] ml-[3%] mt-[0%] h-[25px]" src={emoji} alt='emoji' />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 float-left flex justify-end pt-[.5%]">
              <span className="text-[#727272] rounded-[8px] medium text-[.967vw] max-md:text-[1.4vw] max-mb:text-[2vw] ">12:38 pm</span>
            </div>

          </div>

          {/* user written part is here */}
          <div className="w-100 float-left  pb-[2.76%]">
            <div className="w-[82%] max-md:w-[72%] float-left">
              <input className="w-100 text-[1.32vw] max-md:text-[2vw] max-mb:text-[2.8vw] py-[2.76%] px-[1%]" type='text' placeholder='Write your message...' />
            </div>
            <div className="w-[16.12%] max-md:w-[28%] float-right pt-[2%] flex justify-end">
              <button className="w-[30%] p-[6.67%] ml-[7%] bg-lightBlue rounded-[8px] max-mb:rounded-[5px]"><img className="w-[100%]" src={realPlus} alt='plus' /> </button>
              <button className="w-[30%] p-[6.67%] ml-[7%] bg-lightBlue rounded-[8px] max-mb:rounded-[5px]"><img className="w-[100%]" src={record} alt='plus' /> </button>
              <button className="w-[30%] p-[6.67%] ml-[7%] bg-[#2A83EC] rounded-[8px] max-mb:rounded-[5px]"><img className="w-[100%]" src={telegram} alt='plus' /> </button>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}
export default InboxChat