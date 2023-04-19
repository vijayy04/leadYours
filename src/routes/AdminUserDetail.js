import Side from "./SideMenu";
import Top from "./Header";
import option from '../images/option.png';
import edit from '../images/edit.png';
import user7 from '../images/user7.png';
import { useState } from "react";
import arrowUp from '../images/arrowUp.png';
import arrowDown from '../images/arrowDown.png';

function AdminUserDetail() {

  const [isArrowUp2, setIsArrowUp2] = useState(false);
  const [DropDrown2, setDropDrown2] = useState(false);

  const onClickUpArrow2 = () => {
    setDropDrown2(false)
    setIsArrowUp2(false)
    console.log(DropDrown2)
  }
  const onClickDownArrow2 = () => {
    setDropDrown2(true)
    setIsArrowUp2(true)
  }

  const userData = [1, 2, 3, 4]

  return (<>
    <div className="w-100 minWidth">
      <Side select={`admin`}></Side>
      <Top heading={`Home`}></Top>

      <div className={`pt-[1.8%] mr-[.1%] h-[93vh] overflow-x-auto`}>

        <div className="flex w-[97.35%] max-mb:w-[99%] ml-[1%] p-[2.65%] justify-start bg-bgLightBlue rounded-[15px] float-left">
          <div className="w-100">
            <div className="w-100 float-left">
              <div className="w-[100%] max-md:w-[100%] float-left semiBold text-[1.59vw] max-md:text-[3vw] max-mb:text-[4.2vw]">User Detail</div>
            </div>

            <div className="w-100 float-left pt-[1.51%]">
              <div className="w-[49%] max-md:w-[100%] float-left">
                <div className="w-100 float-left rounded-[8px] drop-shadow-linkedInProfile pt-[5.7%] px-[4.95%] pb-[7.7%] bg-white">
                  <div className="w-100 float-left">

                    {/* user dp and name and company info. */}
                    <div className="w-[50%] float-left flex">
                      <img className="w-[37.3%] rounded-[50%]" src={user7} alt='load DP' />
                      <span className="pl-[4.3%] pt-[7%] text-[1.59vw] max-md:text-[2.6vw] max-mb:text-[3.2vw] semiBold leading-[140%]">Jacob Jones<br />
                        <span className="text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] regular">Digital Marketing</span>
                      </span>
                    </div>

                    {/* country part is here */}
                    <div className="w-[50%] pt-[7%] pr-[.7%] float-left flex justify-end">
                      <button className="cursor-text text-[1.06vw] max-md:text-[2vw] max-mb:text-[2.4vw] rounded-[10px] medium  bg-[#F5FCFF] px-[7.01%] py-[2%]">Country : USA</button>
                    </div>

                  </div>

                  <div className="w-[100%] float-left mt-[9.1%] max-md:mt-[6%]">
                    <div className="w-100 float-left">
                      <div className="w-[50%] float-left">

                        {/* email id part */}
                        <div className="w-100 float-left">
                          <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[175%]">Email ID:<br />
                            <span className="text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] regular">demo123@gamil.com</span>
                          </span>
                        </div>

                        {/* company name part */}
                        <div className="w-100 float-left pt-[13%]">
                          <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[175%]">Company Name:<br />
                            <span className="text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] regular">Chris Marketing</span>
                          </span>
                        </div>

                      </div>
                      <div className="w-[1%] borderLeftLightGrey mt-[2%] py-[12.5%] px-[.5%] float-left">
                      </div>
                      <div className="w-[48%] pl-[17%] max-1044:pl-[16%] max-md:pl-[20%] float-left">

                        {/* phone no id part */}
                        <div className="w-100 float-left">
                          <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[175%]">Phone No:<br />
                            <span className="text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] regular">147-2368-7894</span>
                          </span>
                        </div>

                        {/* company industry part */}
                        <div className="w-100 float-left pt-[13%]">
                          <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[175%]">Company Industry:<br />
                            <span className="text-[#434343] text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] regular">Accounting</span>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="w-[49%] max-md:w-[100%] ml-[2%] max-md:ml-[0%] max-md:mt-[4%] float-left">
                <div className="w-100 float-left rounded-[8px] drop-shadow-linkedInProfile py-[2.923%] px-[5.538%] bg-white">
                  <div className="w-100 text-[1.59vw] max-md:text-[2.6vw] max-mb:text-[3.2vw] semiBold float-left">Billing:</div>

                  <div className="w-100 pt-[1.73%] float-left">
                    <div className="w-[33%] float-left">
                      <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[154%]">Description:<br />
                        <span className="text-[#434343] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] regular">Basic Plan - 2022</span>
                      </span>
                    </div>
                    <div className="w-[33%] text-center float-left">
                      <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[154%]">Amount<br />
                        <span className="text-[#434343] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] pl-[6%] regular">USD$310.00</span>
                      </span>
                    </div>
                    <div className="w-[33%] pl-[12%] float-left">
                      <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[154%]">Balance Due<br />
                        <span className="text-[#434343] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] regular">USD$310.00</span>
                      </span>
                    </div>
                  </div>

                  <div className="w-100 pt-[3%] flex justify-center float-left">
                    <button className="text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] bg-lightBlue rounded-[8px] px-[2.14%] py-[.95%] medium ">Due Date : 06/9/2022</button>
                  </div>

                </div>

                <div className="w-100 mt-[4.615%] max-md:mt-[2%] float-left rounded-[8px] drop-shadow-linkedInProfile py-[6.88%] px-[5.538%] bg-white">
                  <div className="w-100 text-[1.59vw] max-md:text-[2.6vw] max-mb:text-[3.2vw] semiBold float-left">Pricing:</div>

                  <div className="w-100 pt-[1.73%] float-left">
                    <div className="w-[30%] float-left">
                      <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[155%]">Description:<br />
                        <span className="text-[#434343] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] regular">Basic Plan - 2022</span>
                      </span>
                    </div>
                    <div className="w-[32%] text-center float-left">
                      <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[155%]">Amount<br />
                        <span className="text-[#434343] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] pl-[6%] regular">USD$310.00</span>
                      </span>
                    </div>
                    <div className="w-[33%] pl-[12%] float-left">
                      <span className=" text-[1.2vw] max-md:text-[2vw] max-mb:text-[2.4vw] semiBold leading-[155%]">Month<br />
                        <span className="text-[#434343] text-[1.06vw] max-md:text-[1.7vw] max-mb:text-[2.12vw] regular">$19Month</span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="w-100 float-left max-md:overflow-y-auto max-md:p-[1%] pt-[2.28%] max-md:pt-[4%] max-mb:pt-[5%] regular">

              <div className="w-100 pb-[.7%] float-left text-[1.59vw] max-md:text-[2.6vw] max-mb:text-[3.2vw] semiBold">Campaigns List</div>

              <div className="w-100 float-left max-md:w-[175%] max-mb:w-[220%]">

                {/* rows and columns */}
                {userData.map((ele) => {
                  return (
                    <>
                      {/* campaign dropdown part 2 is here  */}
                      <div className="w-[100%] mt-[.83%] bg-white rounded-[12px] max-md:rounded-[10px] drop-shadow-campaign px-[1.433%] pt-[1.131%] pb-[.905%] float-left">
                        <div className="w-[100%] float-left">
                          <div className="w-[2.716%]  campaignCheckbox1 float-left medium text-[1vw]">
                            <input className="w-[100%]" type='checkbox' checked />
                          </div>
                          <div className="w-[22%] ml-[1.09%] float-left medium text-[1vw]">
                            <span className="text-[1.195vw] max-md:text-[1.8vw] max-mb:text-[2.35vw] semiBold">Campaigns Title</span> <br />
                            <span className="text-[.8vw] max-md:text-[1.2vw] max-mb:text-[1.6vw] regular text-[#2A83EC]">0% complete</span> &nbsp;&nbsp;
                            <span className="text-[.8vw] max-md:text-[1.2vw] max-mb:text-[1.6vw] regular text-[#434343]">- 2 hous ago - 3 steps</span>
                          </div>

                          <div className="w-[57%] pr-[13%] float-left regular text-right">
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Not Connected</div>
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Customer </div>
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Lead</div>
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Replied</div>
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Connected</div>
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />Contacted</div>
                            <div className=" text-[.73vw] max-md:text-[1.1vw] max-mb:text-[1.46vw] ml-[2.6%] float-right"><span className="text-[.93vw] max-md:text-[1.3vw] max-mb:text-[1.85vw]">0</span> <br />New</div>
                          </div>

                          <div className="w-[15.42%] cursor-pointer text-black hover:text-darkBlue duration-200 ease-linear font-bold 
                                      pt-[.5%] float-left flex justify-end  medium text-[1vw]">



                            {/* arrow up and down button  */}
                            {isArrowUp2 ? (<button className=" bg-lightBlue flex justify-center rounded-[8px] pt-[9%] px-[2.4%]" onClick={onClickUpArrow2} >
                              <img className="w-[50%]" src={arrowUp} alt='arrow-up' />
                            </button>) : (<button className=" bg-lightBlue flex justify-center rounded-[8px] pt-[9%] px-[2.4%]" onClick={onClickDownArrow2} >
                              <img className="w-[50%]" src={arrowDown} alt='arrow-up' />
                            </button>)}
                            {/* edit button  */}
                            <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] py-[4.2%] px-[-1%]" >
                              <img className="w-[50%]" src={edit} alt='arrow-up' />
                            </button>

                            {/* option button */}
                            <button className="ml-[4.5%] bg-lightBlue flex justify-center rounded-[8px] py-[4.2%] px-[7.6%]" >
                              <img className="w-[50%]" src={option} alt='arrow-up' />
                            </button>
                          </div>
                        </div>
                        <div className={`w-100 text-left float-left borderTopGrey text-black mt-[1.2%] pt-[1.2%] 
                             ${isArrowUp2 ? 'block duration-1000 opacity-100 ease-linear' : 'hidden duration-300 opacity-100 ease-linear'}
                                 `} >
                          <div className="w-100">
                            Testing purpsose only...
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default AdminUserDetail