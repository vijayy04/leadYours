import person from '../images/person.jpeg';
import search from '../images/search.png';
import filter from '../images/filter.png';
import greenDot from '../images/greenDot.png';

function InboxMenu() {

  const data = [{
    username: 'Milli Bobby',
    active: true,
    msg: 'Hi there!',
    msgPending: 3,
  },
  {
    username: 'Milli Bobby',
    active: false,
    msg: 'Sent you file',
    msgPending: 99,
  },
  {
    username: 'Milli Bobby',
    active: false,
    msg: 'Hi hope you’re...',
    msgPending: 0,
  },
  {
    username: 'Milli Bobby',
    active: false,
    msg: 'It was amazing!',
    msgPending: 0,
  },
  {
    username: 'Milli Bobby',
    active: false,
    msg: 'It was amazing!',
    msgPending: 0,
  }]

  return (
    <div className="float-left regular bg-lighterBlue h-[100vh] w-[18.66%] max-1350:w-[23%] max-1044:w-[27%] max-800:w-[28%] max-mb:w-[100%]">
      {/* messages part was here */}
      <div className="w-100 px-[6.3%] pt-[7%] max-mb:pt-[4%]">
        <div className="w-100 float-left text-[1.458vw] max-md:text-[2.2vw] max-mb:text-[3.1vw] semiBold">Messages</div>

        <div className="w-100 float-left mt-[6%] max-mb:mt-[2%]">
          <div className="w-[82%] mr-[4.1%] float-left relative">
            <input className=" border w-[100%] rounded-[8px] border-[#B3B3B3] text-[1vw] max-md:text-[1.5vw] max-mb:text-[2.1vw] pl-[7%] max-mb:pl-[4%] py-[3.2%] pr-[17%] max-mb:pr-[14%]" type='text' placeholder='Search...' />
            <img className="absolute w-[10%] max-mb:w-[6.5%] top-[25%] left-[85%] max-mb:left-[90%]" src={search} alt='search-icon' />
          </div>
          <div className="w-[13.8%] max-mb:w-[10.3%] flex justify-center pt-[3.65%] pb-[2.3%] max-mb:py-[2.1%] max-md:pb-[3.7%] rounded-[6px] bg-[#2A83EC] float-left ">
            <img className="w-[60%] top-[25%] left-[85%]" src={filter} alt='search-icon' />
          </div>
        </div>

        <div className="w-100 float-left mt-[7.05%] max-mb:mt-[2.5%]">
          <button className="semiBold px-[5.75%] text-[.926vw] max-md:text-[1.4vw] max-mb:text-[2vw] max-mb:py-[1.4%] max-mb:px-[7%] pt-[2.1%] pb-[.7%] rounded-[6px] mb-[3%] mr-[3.4%] border border-[#2A83EC] text-white bg-[#2A83EC]">All</button>
          <button className="semiBold px-[5.75%] text-[.926vw] max-md:text-[1.4vw] max-mb:text-[2vw] max-mb:py-[1.4%] max-mb:px-[7%] pt-[2.1%] pb-[.7%] rounded-[6px] mb-[3%] mr-[3.4%] border border-[#2A83EC] text-[#2A83EC]">Unread</button>
          <button className="semiBold px-[5.75%] text-[.926vw] max-md:text-[1.4vw] max-mb:text-[2vw] max-mb:py-[1.4%] max-mb:px-[7%] pt-[2.1%] pb-[.7%] rounded-[6px] mb-[3%] mr-[3.4%] border border-[#2A83EC] text-[#2A83EC]">Replied</button>
          <button className="semiBold px-[5.75%] text-[.926vw] max-md:text-[1.4vw] max-mb:text-[2vw] max-mb:py-[1.4%] max-mb:px-[7%] pt-[2.1%] pb-[.7%] rounded-[6px] mb-[3%] mr-[3.4%] border border-[#2A83EC] text-[#2A83EC]">Starred</button>
          <button className="semiBold px-[5.75%] text-[.926vw] max-md:text-[1.4vw] max-mb:text-[2vw] max-mb:py-[1.4%] max-mb:px-[7%] pt-[2.1%] pb-[.7%] rounded-[6px] mb-[3%] mr-[3.4%] border border-[#2A83EC] text-[#2A83EC]">Archived</button>
        </div>
        <div className="w-100 float-left mt-[7%] max-mb:mt-[3%] bg-white rounded-[8px] px-[3.25%] py-[4.07%] h-[76vh] overflow-x-auto">
          {data.map((ele, index) => {
            return (
              <div key={index} className={`w-100 px-[4.34%] py-[5.21%] max-mb:px-[3%] max-mb:py-[3%] float-left 
          ${ele.active === true ? `bg-lighterBlue rounded-[8px] max-mb:rounded-[6px]` : `mt-[1%] mb-[1.5%] borderLightBlue`}
          `}>

                <div className="relative w-[22.8%] max-mb:w-[15%] float-left">
                  <img className="rounded-[8px]" src={person} alt='user' />
                  {ele.active === true ? (<img className="absolute w-[29.2%] bottom-[-5%] right-[-10%] rounded-[8px]" src={greenDot} alt='user' />) : ''}
                </div>

                <div className="w-[64.8%] max-mb:w-[72%] float-left">
                  <div className="w-100 pl-[11%] max-mb:pl-[4%] max-mb:text-[3.7vw] max-md:text-[1.77vw] medium">{ele.username}</div>
                  <div className="w-100 pl-[11%] max-mb:pl-[4%] max-mb:text-[2.3vw] text-[#434343] text-[.926vw] max-1350:text-[1.1vw] max-md:text-[1.4vw] max-1044:text-[1.25vw] medium">{ele.msg}</div>
                </div>
                <div className="w-[12.4%] max-mb:flex max-mb:justify-end float-left">
                  {ele.msgPending > 0 ? (<button className="grid items-center w-[1.711vw] h-[1.711vw] max-1350:w-[2.2vw] max-1350:h-[2.2vw] max-1044:w-[2.8vw] max-1044:h-[2.8vw] max-mb:w-[7vw] max-mb:h-[7vw] max-mb:text-[4vw] max-800:w-[3.3vw] max-800:h-[3.3vw] medium text-white rounded-[50%] bg-[#2A83EC] ">{ele.msgPending < 10 ? (ele.msgPending) : ('9+')}</button>) : ''}
                </div>

              </div>)
          })}
        </div>

      </div>
    </div>
  )
}

export default InboxMenu