import { useState } from "react";
import search from '../images/search.png';
import addNew from '../images/addNew.png';
import square1 from '../images/square1.png';
import square2 from '../images/square2.png';
import arrowUp from '../images/arrowUp.png';
import arrowDown from '../images/arrowDown.png';
import option from '../images/option.png';
import edit from '../images/edit.png';
import Side from "./SideMenu";
import Top from "./Header";
import { useNavigate } from "react-router-dom";

function Campaign() {

  const [isArrowUp1, setIsArrowUp1] = useState(false);
  const [isArrowUp2, setIsArrowUp2] = useState(false);
  const [isArrowUp3, setIsArrowUp3] = useState(false);
  const [isArrowUp4, setIsArrowUp4] = useState(false);
  const [isArrowUp5, setIsArrowUp5] = useState(false);

  const [DropDrown1, setDropDrown1] = useState(false);
  const [DropDrown2, setDropDrown2] = useState(false);
  const [DropDrown3, setDropDrown3] = useState(false);
  const [DropDrown4, setDropDrown4] = useState(false);
  const [DropDrown5, setDropDrown5] = useState(false);

  const navigate = useNavigate();

  const onClickUpArrow1 = () => {
    setDropDrown1(false)
    setIsArrowUp1(false)
    console.log(DropDrown1)
    console.log(DropDrown2)
    console.log(DropDrown3)
    console.log(DropDrown4)
    console.log(DropDrown5)
  }
  const onClickDownArrow1 = () => {
    setDropDrown1(true)
    setIsArrowUp1(true)
  }

  const onClickUpArrow2 = () => {
    setDropDrown2(false)
    setIsArrowUp2(false)
  }
  const onClickDownArrow2 = () => {
    setDropDrown2(true)
    setIsArrowUp2(true)
  }

  const onClickUpArrow3 = () => {
    setDropDrown3(false)
    setIsArrowUp3(false)
  }
  const onClickDownArrow3 = () => {
    setDropDrown3(true)
    setIsArrowUp3(true)
  }

  const onClickUpArrow4 = () => {
    setDropDrown4(false)
    setIsArrowUp4(false)
  }
  const onClickDownArrow4 = () => {
    setDropDrown4(true)
    setIsArrowUp4(true)
  }

  const onClickUpArrow5 = () => {
    setDropDrown5(false)
    setIsArrowUp5(false)
  }
  const onClickDownArrow5 = () => {
    setDropDrown5(true)
    setIsArrowUp5(true)
  }

  const data = {
    percent: "50%"
  }

  const statusOfProgressBar = {
    width: data.percent
  }

  return (<>
    <div className="w-100 minWidth">
      <Side select={`campaign`}></Side>
      <Top heading={`Campaigns`}></Top>

      <div className={`pt-[1.1%] regular mr-[1.3%] h-[93vh] overflow-x-auto`}>

        {/* header part of input search is here  */}
        <div className="flex w-[98.2%] justify-start  ml-[1.8%] rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100 relative">
              <input className=" border w-[14.4%] max-md:w-[20%] max-mb:w-[28.5%] rounded-[8px]  max-md:rounded-[6px] max-mb:rounded-[4px] border-[#B3B3B3] text-[1vw] max-md:text-[1.6vw] max-mb:text-[2.2vw] pl-[1.22%] py-[.45%] max-md:py-[.7%] max-mb:py-[1%] max-mb:pl-[1.6%] pr-[3%] max-md:pr-[3.5%] max-mb:pr-[5.5%]" type='text' placeholder='Search...' />
              <img className="absolute w-[1.432%] top-[25%] left-[12%] max-md:w-[2.25%] max-mb:w-[3.25%] max-md:top-[25%] max-md:left-[16.8%] max-mb:top-[30%] max-mb:left-[23.4%]" src={search} alt='search-icon' />
            </div>
            <div className="w-100 flex justify-end">
              <div className="float-right mr-[1%] pt-[.3%] w-[3.5%] max-md:w-[4.6%] max-mb:w-[10%]">
                <img className="w-[100%]" src={square2} alt='load' />
              </div>
              <div className="float-right mr-[1%] max-mb:mr-[1.5%] pt-[.3%] w-[3.5%] max-md:w-[4.6%] max-mb:w-[10%]">
                <img className="w-[100%]" src={square1} alt='load' />
              </div>
              <div className="float-right w-[10.7%] max-md:w-[13.5%] max-mb:w-[26.8%]">
                <img onClick={() => navigate('/create-campaign')} className="w-[100%] max-md:w-[100%]" src={addNew} alt='load' />
              </div>
            </div>
          </div>
        </div>

        {/* campaign part is here */}
        <div className="flex w-[98.2%] mt-[2.4%] px-[1.7%] pt-[2.3%] pb-[10.2%] justify-start bg-bgLightBlue ml-[1.8%] rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100">
              <button className="text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.9vw] semiBold text-[#2A83EC] border border-[#2A83EC] rounded-[6px] max-mb:rounded-[4px] px-[.7%] max-mb:px-[1.5%] py-[.5%] max-mb:py-[.9%]">My Compaigns</button>
              <button className="text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.9vw] ml-[1%] semiBold text-[#8F8F8F] border border-[#8F8F8F] rounded-[6px] max-mb:rounded-[4px] px-[.7%] max-mb:px-[1.5%] py-[.5%] max-mb:py-[.9%]">All Compaigns</button>
            </div>

            {/* campaigns title part 1 */}
            <div className="w-100 ">

              {/* campaign dropdown part 1 is here  */}
              <div className="w-[100%] mt-[1.56%] max-mb:mt-[2.2%] bg-white rounded-[12px] max-md:rounded-[10px] max-mb:rounded-[9px] drop-shadow-campaign px-[1.433%] max-mb:px-[2.1%] pt-[1.131%] max-mb:pt-[2.131%] max-mb:pb-[1.7%]  pb-[.905%] float-left">
                <div className="w-[100%] float-left">
                  <div className="w-[2.716%] max-mb:w-[5%]  campaignCheckbox1 float-left medium text-[1vw]">
                    <input className="w-[100%]" type='checkbox' defaultChecked />
                  </div>
                  <div className="w-[84%] max-mb:w-[73.9%] ml-[1.09%] max-mb:pl-[1.5%] float-left medium text-[1vw]">
                    <span className="text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] semiBold">Campaigns Title</span> <br />
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#2A83EC]">0% complete</span> &nbsp;&nbsp;
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#434343]">- 2 hous ago - 3 steps</span>
                  </div>

                  <div className="w-[12.194%] max-mb:w-[20%]  max-mb:float-left cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                                      pt-[.5%] float-left flex justify-center  medium text-[1vw]">

                    {/* arrow up and down button  */}
                    {isArrowUp1 ? (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickUpArrow1} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowUp} alt='arrow-up' />
                    </button>) : (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickDownArrow1} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowDown} alt='arrow-up' />
                    </button>)}
                    {/* edit button  */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[-1%] max-mb:px-[2%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={edit} alt='arrow-up' />
                    </button>

                    {/* option button */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[7.6%] max-md:px-[9%] max-mb:px-[11%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={option} alt='arrow-up' />
                    </button>
                  </div>
                </div>
                <div className={`w-100 text-left float-left borderTopGrey text-black mt-[1.2%] pt-[1.2%] 
              ${isArrowUp1 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  <div className="w-100">
                    <div className="w-[60%] max-mb:w-[100%] float-left  ">
                      <div className="w-100">

                        {/* part 1 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Accepted</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Request sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Accepted Requested:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 2 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Reply rate</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Total Contacted:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">linkedin replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Email replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 3 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]  bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Message click </div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Message click sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">link clicked:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* left hand side part of drop down */}
                    <div className="w-[40%] max-mb:w-[85%] pt-[2.5%] float-left">
                      <div className="w-100 regular text-right">
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* campaign dropdown part 2 is here  */}
              <div className="w-[100%] mt-[2.595%] bg-white rounded-[12px] max-md:rounded-[10px] max-mb:rounded-[9px] drop-shadow-campaign px-[1.433%] max-mb:px-[2.1%] pt-[1.131%] max-mb:pt-[2.131%] max-mb:pb-[1.7%]  pb-[.905%] float-left">
                <div className="w-[100%] float-left">
                  <div className="w-[2.716%] max-mb:w-[5%]  campaignCheckbox1 float-left medium text-[1vw]">
                    <input className="w-[100%]" type='checkbox' defaultChecked />
                  </div>
                  <div className="w-[27%] max-mb:w-[83.9%] ml-[1.09%] max-mb:pl-[1.5%] float-left medium text-[1vw]">
                    <span className="text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] semiBold">Campaigns Title</span> <br />
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#2A83EC]">0% complete</span> &nbsp;&nbsp;
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#434343]">- 2 hous ago - 3 steps</span>
                  </div>

                  <div className="w-[57%] max-mb:w-[80%] max-mb:mt-[2%] pr-[3.6%] max-mb:pr-[3%] float-left regular text-right">
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] max-mb:ml-[0%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                  </div>

                  <div className="w-[12.194%] max-mb:w-[20%] max-mb:mt-[2%] max-mb:float-left cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                                      pt-[.5%] float-left flex justify-center  medium text-[1vw]">



                    {/* arrow up and down button  */}
                    {isArrowUp2 ? (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickUpArrow2} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowUp} alt='arrow-up' />
                    </button>) : (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickDownArrow2} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowDown} alt='arrow-up' />
                    </button>)}
                    {/* edit button  */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[-1%] max-mb:px-[2%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={edit} alt='arrow-up' />
                    </button>

                    {/* option button */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[7.6%] max-md:px-[9%] max-mb:px-[11%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={option} alt='arrow-up' />
                    </button>
                  </div>
                </div>
                <div className={`w-100 text-left float-left borderTopGrey text-black mt-[1.2%] pt-[1.2%] 
              ${isArrowUp2 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  <div className="w-100">
                    <div className="w-[60%] max-mb:w-[100%] float-left  ">
                      <div className="w-100">

                        {/* part 1 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Accepted</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Request sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Accepted Requested:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 2 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Reply rate</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Total Contacted:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">linkedin replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Email replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 3 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]  bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Message click </div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Message click sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">link clicked:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* left hand side part of drop down */}
                    <div className="w-[40%] max-mb:w-[85%] pt-[2.5%] float-left">
                      <div className="w-100 regular text-right">
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* campaign dropdown part 3 is here  */}
              <div className="w-[100%] mt-[2.595%] bg-white rounded-[12px] max-md:rounded-[10px] max-mb:rounded-[9px] drop-shadow-campaign px-[1.433%] max-mb:px-[2.1%] pt-[1.131%] max-mb:pt-[2.131%] max-mb:pb-[1.7%]  pb-[.905%] float-left">
                <div className="w-[100%] float-left">
                  <div className="w-[2.716%] max-mb:w-[5%]  campaignCheckbox1 float-left medium text-[1vw]">
                    <input className="w-[100%]" type='checkbox' defaultChecked />
                  </div>
                  <div className="w-[27%] max-mb:w-[83.9%] ml-[1.09%] max-mb:pl-[1.5%] float-left medium text-[1vw]">
                    <span className="text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] semiBold">Campaigns Title</span> <br />
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#2A83EC]">0% complete</span> &nbsp;&nbsp;
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#434343]">- 2 hous ago - 3 steps</span>
                  </div>

                  <div className="w-[57%] max-mb:w-[80%] max-mb:mt-[2%] pr-[3.6%] max-mb:pr-[3%] float-left regular text-right">
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] max-mb:ml-[0%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                  </div>

                  <div className="w-[12.194%] max-mb:w-[20%] max-mb:mt-[2%] max-mb:float-left cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                                      pt-[.5%] float-left flex justify-center  medium text-[1vw]">



                    {/* arrow up and down button  */}
                    {isArrowUp3 ? (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickUpArrow3} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowUp} alt='arrow-up' />
                    </button>) : (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickDownArrow3} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowDown} alt='arrow-up' />
                    </button>)}
                    {/* edit button  */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[-1%] max-mb:px-[2%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={edit} alt='arrow-up' />
                    </button>

                    {/* option button */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[7.6%] max-md:px-[9%] max-mb:px-[11%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={option} alt='arrow-up' />
                    </button>
                  </div>
                </div>
                <div className={`w-100 text-left float-left borderTopGrey text-black mt-[1.2%] pt-[1.2%] 
              ${isArrowUp3 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  <div className="w-100">
                    <div className="w-[60%] max-mb:w-[100%] float-left  ">
                      <div className="w-100">

                        {/* part 1 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Accepted</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Request sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Accepted Requested:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 2 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Reply rate</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Total Contacted:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">linkedin replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Email replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 3 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]  bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Message click </div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Message click sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">link clicked:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* left hand side part of drop down */}
                    <div className="w-[40%] max-mb:w-[85%] pt-[2.5%] float-left">
                      <div className="w-100 regular text-right">
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* campaign dropdown part 4 is here  */}
              <div className="w-[100%] mt-[2.595%] bg-white rounded-[12px] max-md:rounded-[10px] max-mb:rounded-[9px] drop-shadow-campaign px-[1.433%] max-mb:px-[2.1%] pt-[1.131%] max-mb:pt-[2.131%] max-mb:pb-[1.7%]  pb-[.905%] float-left">
                <div className="w-[100%] float-left">
                  <div className="w-[2.716%] max-mb:w-[5%]  campaignCheckbox1 float-left medium text-[1vw]">
                    <input className="w-[100%]" type='checkbox' defaultChecked />
                  </div>
                  <div className="w-[27%] max-mb:w-[83.9%] ml-[1.09%] max-mb:pl-[1.5%] float-left medium text-[1vw]">
                    <span className="text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] semiBold">Campaigns Title</span> <br />
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#2A83EC]">0% complete</span> &nbsp;&nbsp;
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#434343]">- 2 hous ago - 3 steps</span>
                  </div>

                  <div className="w-[57%] max-mb:w-[80%] max-mb:mt-[2%] pr-[3.6%] max-mb:pr-[3%] float-left regular text-right">
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] max-mb:ml-[0%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                  </div>

                  <div className="w-[12.194%] max-mb:w-[20%] max-mb:mt-[2%] max-mb:float-left cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                                      pt-[.5%] float-left flex justify-center  medium text-[1vw]">



                    {/* arrow up and down button  */}
                    {isArrowUp4 ? (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickUpArrow4} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowUp} alt='arrow-up' />
                    </button>) : (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickDownArrow4} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowDown} alt='arrow-up' />
                    </button>)}
                    {/* edit button  */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[-1%] max-mb:px-[2%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={edit} alt='arrow-up' />
                    </button>

                    {/* option button */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[7.6%] max-md:px-[9%] max-mb:px-[11%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={option} alt='arrow-up' />
                    </button>
                  </div>
                </div>
                <div className={`w-100 text-left float-left borderTopGrey text-black mt-[1.2%] pt-[1.2%] 
              ${isArrowUp4 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  <div className="w-100">
                    <div className="w-[60%] max-mb:w-[100%] float-left  ">
                      <div className="w-100">

                        {/* part 1 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Accepted</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Request sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Accepted Requested:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 2 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Reply rate</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Total Contacted:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">linkedin replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Email replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 3 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]  bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Message click </div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Message click sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">link clicked:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* left hand side part of drop down */}
                    <div className="w-[40%] max-mb:w-[85%] pt-[2.5%] float-left">
                      <div className="w-100 regular text-right">
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* campaign dropdown part 5 is here  */}
              <div className="w-[100%] mt-[2.595%] bg-white rounded-[12px] max-md:rounded-[10px] max-mb:rounded-[9px] drop-shadow-campaign px-[1.433%] max-mb:px-[2.1%] pt-[1.131%] max-mb:pt-[2.131%] max-mb:pb-[1.7%]  pb-[.905%] float-left">
                <div className="w-[100%] float-left">
                  <div className="w-[2.716%] max-mb:w-[5%]  campaignCheckbox1 float-left medium text-[1vw]">
                    <input className="w-[100%]" type='checkbox' defaultChecked />
                  </div>
                  <div className="w-[27%] max-mb:w-[83.9%] ml-[1.09%] max-mb:pl-[1.5%] float-left medium text-[1vw]">
                    <span className="text-[1.195vw] max-md:text-[1.7vw] max-mb:text-[2.5vw] semiBold">Campaigns Title</span> <br />
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#2A83EC]">0% complete</span> &nbsp;&nbsp;
                    <span className="text-[.8vw] max-md:text-[1.1vw] max-mb:text-[1.7vw] regular text-[#434343]">- 2 hous ago - 3 steps</span>
                  </div>

                  <div className="w-[57%] max-mb:w-[80%] max-mb:mt-[2%] pr-[3.6%] max-mb:pr-[3%] float-left regular text-right">
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] max-mb:ml-[0%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                    <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                  </div>

                  <div className="w-[12.194%] max-mb:w-[20%] max-mb:mt-[2%] max-mb:float-left cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                                      pt-[.5%] float-left flex justify-center  medium text-[1vw]">



                    {/* arrow up and down button  */}
                    {isArrowUp5 ? (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickUpArrow5} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowUp} alt='arrow-up' />
                    </button>) : (<button className=" bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[9%] max-md:py-[12%] max-mb:py-[12%] px-[2.4%] max-mb:px-[5.131%] " onClick={onClickDownArrow5} >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={arrowDown} alt='arrow-up' />
                    </button>)}
                    {/* edit button  */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[-1%] max-mb:px-[2%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={edit} alt='arrow-up' />
                    </button>

                    {/* option button */}
                    <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] max-mb:rounded-[4px]  py-[4.2%] max-md:py-[6%] px-[7.6%] max-md:px-[9%] max-mb:px-[11%]" >
                      <img className="w-[50%] max-md:w-[52%] max-mb:w-[65.131%] " src={option} alt='arrow-up' />
                    </button>
                  </div>
                </div>
                <div className={`w-100 text-left float-left borderTopGrey text-black mt-[1.2%] pt-[1.2%] 
              ${isArrowUp5 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
              `} >
                  <div className="w-100">
                    <div className="w-[60%] max-mb:w-[100%] float-left  ">
                      <div className="w-100">

                        {/* part 1 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Accepted</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Request sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Accepted Requested:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 2 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw] bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Reply rate</div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Total Contacted:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">linkedin replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">Email replies:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>

                        {/* part 3 */}
                        <div className="w-[33%] float-left">
                          <div className="w-100">

                            {/* first accepted part is here  */}
                            <div className="w-[48.1%] max-mb:w-[70%] bg-white">
                              <div className="w-100 text-[.8vw] max-md:text-[1.4vw] max-mb:text-[1.8vw] regular mt-[4%]">{data.percent}</div>
                              <div className="w-100 rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]  bg-bgProgressBar overflow-hidden">
                                <div className={`bg-darkBlue rounded-[9px] h-[.36vw] max-md:h-[.5vw] max-mb:h-[.6vw]`} style={statusOfProgressBar}></div>
                              </div>
                            </div>

                            <div className="w-100 medium text-[.73vw] max-md:text-[1.15vw] max-mb:text-[1.5vw] pt-[2%]">Message click </div>
                            <div className="w-[65%] max-md:w-[75%] max-mb:w-[90%] medium text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.5vw] pt-[1%] text-[#727272]">
                              <div className="w-[90%] float-left">Message click sent:</div>
                              <div className="w-[10%] float-left">0</div>
                              <div className="w-[90%] pt-[1%] float-left">link clicked:</div>
                              <div className="w-[10%] pt-[1%] float-left">0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* left hand side part of drop down */}
                    <div className="w-[40%] max-mb:w-[85%] pt-[2.5%] float-left">
                      <div className="w-100 regular text-right">
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                        <div className=" text-[.73vw] ml-[2.6%] max-md:text-[1.1vw] max-mb:text-[1.5vw] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                      </div>
                    </div>
                  </div>
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

export default Campaign