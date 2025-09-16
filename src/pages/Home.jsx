import {Link} from 'react-router-dom'
import "../styles/global.css"
import { useEffect, useState } from "react";

const images = [
    "../public/images/p1.png",
    "../public/images/p2.png",
    "../public/images/p3.png",
    ];

function Home() {
    
    const [current, setCurrent] = useState(0);

  // Auto slide ทุก 3 วิ
useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length); // วนกลับรูปแรก
  }, 3000);
  return () => clearInterval(interval);
}, []);

  // ฟังก์ชันวนภาพ 3 รูป
  const getVisibleImages = () => {
  let result = [];
  for (let i = 0; i < 3; i++) {
    result.push(images[(current + i) % images.length]);
  }
  return result;
};  

    return (
        <>
        <div className="bg-[#F0F0F0]">
            <div className="sticky top-0 z-50 flex items-center justify-between bg-[white] shadow px-6 py-3">
                <div className="flex gap-1 font-semibold pl-2">
                    <h1 className="text-[#62C538] text-[24px]">YUEM</h1>
                    <h1 className="text-[24px]">LEN</h1>
                    <h1 className="text-[#62C538] text-[24px]">KHUEN</h1>
                </div>
                {/* <div className="h-9 w-[1px] bg-[#BDBDBD]"></div> */}
                <div className="flex space-x-20 text-black font-medium">
                    <Link to="/Home">
                        <h1 className="relative after:absolute after:left-0 after:-bottom-1 border-white border-b-2 hover:border-green-600 pt-1">หน้าหลัก</h1>
                    </Link>
                    <div className="h-9 w-[1px] bg-[#BDBDBD]"></div>
                    <Link to="/Status">
                        <h1 className="relative after:absolute after:left-0 after:-bottom-1 border-white border-b-2 hover:border-green-600 pt-1">การยืมของคุณ</h1>
                    </Link>
                    <div className="h-9 w-[1px] bg-[#BDBDBD]"></div>
                    <Link to="/Yuem">
                        <h1 className="relative after:absolute after:left-0 after:-bottom-1 border-white border-b-2 hover:border-green-600 pt-1">ยืมอุปกรณ์</h1>
                    </Link>
                </div>
                {/* <div className="h-9 w-[1px] bg-[#BDBDBD]"></div> */}
                    <div className="flex items-center space-x-8">
                        {/* กล่องค้นหา */}
                        <div className="flex items-center bg-green-500 text-white rounded-full px-4 py-1">
                            <input
                            type="text"
                            placeholder="คุณต้องการหาอะไร?"
                            className="bg-transparent outline-none text-sm placeholder-white w-40"
                            />
                        <button>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        </div>
                        {/* แจ้งเตือน */}
                        <div className="w-5 h-5">
                            <img src="./images/j1.png" alt="" />
                        </div>
                        {/* โปรไฟล์ */}
                        <div className="flex items-center space-x-2">
                            <img src="./images/pro.png" alt="" className="w-8 h-8 rounded-full border-2 border-green-600"/>
                            <span className="font-medium">มังกี้ ดีลูฟี่</span>
                        </div>
                        {/* ออกจากระบบ */}
                        <div className="w-5 h-5">
                            <img src="./images/e2.png" alt="" />
                        </div>
                </div>
            </div>
            <div className="bg-[#F0F0F0]">
                <img src="./images/img1.png" alt="" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-25 text-white mt-40">
                        <h1 className="text-[88px] font-bold">ระบบ</h1>
                        <h1 className="text-[88px] font-bold ml-55 -mt-33 text-[#62C538]">ยืม</h1>
                        <h1 className="text-[88px] font-bold ml-89 -mt-33">เล่น</h1>
                        <h1 className="text-[88px] font-bold ml-130 -mt-33 text-[#62C538]">คืน</h1>
                        <h1 className="text-[88px] font-bold ml-166 -mt-33">อุปกรณ์กีฬา</h1>
                        <h1 className="text-[88px] font-bold">สำหรับนักเรียน/นักศึกษา</h1>
                        <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed">เพื่อความเป็นระเบียบและความพร้อมในการใช้งาน</p>
                        <p className="text-[#62C538]">กรุณา</p>
                        <p className="-mt-6 ml-10">ทำการยืมผ่านระบบล่วงหน้า</p>
                        <p>หลังการใช้งาน</p>
                        <p className="text-[#62C538] -mt-6 ml-25">กรุณา</p>
                        <p className="-mt-6 ml-35">คืนอุปกรณ์ให้ตรงเวลา</p>
                        <p>หากไม่คืนอุปกรณ์หรือคืนล่าช้าอาจมีผลต่อสิทธิ์ในการยืมครั้งถัดไป</p>   
                    </div>
            </div>
            {/* Carousel ข่าวประชาสัมพันธ์*/}
            <div className="w-full flex justify-center overflow-hidden mt-5 relative bg-[#F0F0F0]">
                <div className="flex gap-4 transition-transform duration-500">
                    {getVisibleImages().map((src, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-[700px] h-[350px] overflow-hidden rounded-xl">
                        <img
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        className="w-full h-full object-cover"/>
                    </div>
                    ))}
                </div>
            </div>
            {/* box 1 */}
            <div className="w-full h-100 mt-10 bg-white">
                <div className="flex">
                    <div className="h-8 w-2  rounded-xl bg-[#62C538] mt-7 ml-15"></div>
                    <div className="text-[36px] font-bold ml-2 mt-5"> 
                        <h1>กีฬากลางแจ้ง</h1>
                    </div>
                    <div className="bg-[#EBEBEB] w-85 h-7 rounded-xl ml-150 mt-6 flex">
                        <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#62C538]"></div>
                            <p className="mt-1 ml-1 text-[#62C538] font-medium text-[12px]">พร้อมใช้งาน</p>
                        <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#C5C138]"></div>
                            <p className="mt-1 ml-1 text-[#C5C138] font-medium text-[12px]">พร้อมใช้งาน แต่อุปกรณ์น้อย</p>
                        <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#E35050]"></div>
                            <p className="mt-1 ml-1 text-[#E35050] font-medium text-[12px]">อุปกรณ์หมด</p>
                    </div>
                    <div className="h-7 w-[1px] bg-[#BDBDBD] mt-6 ml-5"></div>
                    <div className="bg-black w-50 h-7 rounded-xl mt-6 ml-5">
                        <p className="text-white font-medium pl-4">ดูรายละเอียดของสีต่างๆ</p>
                    </div>
                </div>
                {/* ฟุตบอล */}
                <div className="ml-20 relative">
                    <img className="w-60 h-60" src="./images/f1.png" alt="" />
                    <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                    <h1 className="text-[20px] font-bold ml-1">ฟุตบอล</h1>
                        <div className="flex">
                            <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                            <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">10/10</div>
                        </div>
                        <div className="-mt-9">
                            <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                            </button>
                        </div>
                </div>
            </div>
            {/* box 2 */}
            <div className="w-full h-100 mt-15 bg-white">
                    <div className="flex">
                    <div className="h-8 w-2  rounded-xl bg-[#62C538] mt-7 ml-15"></div>
                    <div className="text-[36px] font-bold ml-2 mt-5"> 
                        <h1>กีฬาในร่ม</h1>
                    </div>
                        <div className="bg-[#EBEBEB] w-85 h-7 rounded-xl ml-170 mt-6 flex">
                            <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#62C538]"></div>
                                <p className="mt-1 ml-1 text-[#62C538] font-medium text-[12px]">พร้อมใช้งาน</p>
                            <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#C5C138]"></div>
                                <p className="mt-1 ml-1 text-[#C5C138] font-medium text-[12px]">พร้อมใช้งาน แต่อุปกรณ์น้อย</p>
                            <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#E35050]"></div>
                                <p className="mt-1 ml-1 text-[#E35050] font-medium text-[12px]">อุปกรณ์หมด</p>
                        </div>
                        <div className="h-7 w-[1px] bg-[#BDBDBD] mt-6 ml-5"></div>
                        <div className="bg-black w-50 h-7 rounded-xl mt-6 ml-5">
                            <p className="text-white font-medium pl-4">ดูรายละเอียดของสีต่างๆ</p>
                        </div>
                    </div>
                    {/* ตะกร้อ */}
                    <div className="flex">
                        <div className="ml-20 relative">
                            <img className="w-60 h-60" src="./images/s1.png" alt="" />
                            <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                            <h1 className="text-[20px] font-bold ml-1">ตะกร้อ</h1>
                                <div className="flex">
                                    <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                    <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">08/08</div>
                                </div>
                                <div className="-mt-9">
                                    <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                        <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                    </button>
                                </div>
                        </div>
                    {/* ลูกแชร์บอล */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60 rounded-xl" src="./images/b1.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute top-0 left-0 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1">ลูกแชร์บอล</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">02/02</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* วอลเลย์บอล */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60 rounded-xl" src="./images/v1.png" alt="" />
                        <div className="w-3 h-60 bg-[#C5C138] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1">วอลเลย์บอล</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#C5C138] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">04/08</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* แบดมินตัน */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60 rounded-xl border-3 border-[#DEDEDE]" src="./images/b2.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1">แบดมินตัน</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">04/08</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* ลูกฟุตซอล */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60" src="./images/fs.png" alt="" />
                        <div className="w-3 h-60 bg-[#C5C138] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1">ลูกฟุตซอล</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#C5C138] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">03/07</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            {/* box 3 */}
            <div className="w-full h-190 mt-10 bg-white">
                    <div className="flex">
                    <div className="h-8 w-2  rounded-xl bg-[#62C538] mt-7 ml-15"></div>
                    <div className="text-[36px] font-bold ml-2 mt-5"> 
                        <h1>อุปกรณ์เสริม/เซฟตี้ต่างๆ</h1>
                    </div>
                        <div className="bg-[#EBEBEB] w-85 h-7 rounded-xl ml-105 mt-6 flex">
                            <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#62C538]"></div>
                                <p className="mt-1 ml-1 text-[#62C538] font-medium text-[12px]">พร้อมใช้งาน</p>
                            <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#C5C138]"></div>
                                <p className="mt-1 ml-1 text-[#C5C138] font-medium text-[12px]">พร้อมใช้งาน แต่อุปกรณ์น้อย</p>
                            <div className="w-2 h-5 rounded-xl mt-1 ml-2 bg-[#E35050]"></div>
                                <p className="mt-1 ml-1 text-[#E35050] font-medium text-[12px]">อุปกรณ์หมด</p>
                        </div>
                        <div className="h-7 w-[1px] bg-[#BDBDBD] mt-6 ml-5"></div>
                        <div className="bg-black w-50 h-7 rounded-xl mt-6 ml-5">
                            <p className="text-white font-medium pl-4">ดูรายละเอียดของสีต่างๆ</p>
                        </div>
                    </div>
                    {/* ตะกร้าแชร์บอล */}
                    <div className="flex">
                        <div className="ml-20 relative">
                            <img className="w-60 h-60" src="./images/o1.png" alt="" />
                            <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                            <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">ตะกร้าแชร์บอล</h1>
                                <div className="flex">
                                    <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                    <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">02/02</div>
                                </div>
                                <div className="-mt-9">
                                    <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                        <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                    </button>
                                </div>
                        </div>
                    {/* ลูกแบดมินตัน */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60 rounded-xl" src="./images/o2.png" alt="" />
                        <div className="w-60 h-60 rounded-xl absolute top-0 left-0 bg-black opacity-40"></div>
                        <div className="w-40 h-10 rounded-xl absolute top-25 left-11 bg-[#BE1818]">
                            <p className="-pt-1.5 pl-3.5 text-[24px] text-white font-extrabold">อุปกรณ์หมด</p>
                        </div>
                        <div className="w-3 h-60 bg-[#E35050] absolute top-0 left-0 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">ลูกแบตมินตัน</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#E35050] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">00/02</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* นวม */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60 rounded-xl" src="./images/o3.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">นวม</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">02/02</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* เป้าล่อเตะ */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60 rounded-xl border-3 border-[#DEDEDE]" src="./images/o4.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">เป้าล่อเตะ</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">02/02</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* กรวยฟุตบอล */}
                    <div className="ml-10 relative">
                        <img className="w-60 h-60" src="./images/o5.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">กรวยฟุตบอล</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">10/12</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* กลองทอม */}
                    <div className="-ml-340 mt-90 relative">
                        <img className="w-60 h-60 border-2 rounded-xl border-[#DEDEDE]" src="./images/o6.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">กลองทอม</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">06/08</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* เชือกชักเย่อ */}
                    <div className="ml-10 mt-90 relative">
                        <img className="w-60 h-60 rounded-xl" src="./images/o7.png" alt="" />
                        <div className="w-60 h-60 rounded-xl absolute top-0 left-0 bg-black opacity-40"></div>
                        <div className="w-40 h-10 rounded-xl absolute top-25 left-11 bg-[#BE1818]">
                            <p className="-pt-1.5 pl-3.5 text-[24px] text-white font-extrabold">อุปกรณ์หมด</p>
                        </div>
                        <div className="w-3 h-60 bg-[#E35050] absolute top-0 left-0 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">เชือกชักเย่อ</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#E35050] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">00/02</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* แทมโบรีนไม้ */}
                    <div className="ml-10 mt-90 relative">
                        <img className="w-60 h-60 border-2 rounded-xl border-[#DEDEDE]" src="./images/o8.png" alt="" />
                        <div className="w-3 h-60 bg-[#62C538] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">แทมโบรีนไม้</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#62C538] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">03/03</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                    {/* โทรโข่ง */}
                    <div className="ml-10 mt-90 relative">
                        <img className="w-60 h-60 border-2 rounded-xl border-[#DEDEDE]" src="./images/o9.png" alt="" />
                        <div className="w-3 h-60 bg-[#C5C138] absolute -mt-60 rounded-l-2xl"></div>
                        <h1 className="text-[20px] font-bold ml-1 text-[#62C538]">โทรโข่ง</h1>
                            <div className="flex">
                                <p className="text-[#575757] ml-1 text-[12px]">คงเหลือจำนวน</p>
                                <div className="w-10 h-6 bg-[#C5C138] rounded-lg text-center ml-1 pt-1 -mt-0.5 text-white text-[12px]">02/04</div>
                            </div>
                            <div className="-mt-9">
                                <button type="submit" className="border-2 border-[#62C538] rounded-2xl w-24 h-9 -mt-20 ml-35.5 cursor-pointer">
                                    <p className="text-[12px] text-[#62C538]">ดูรายละเอียด</p>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            {/* ฟุตเตอร์ */}
            <div className="w-full h-60 mt-15 bg-[#1B803D] relative">
                <img className="pt-3" src="./images/fu.png" alt="" />
                <h1 className="absolute -mt-33 ml-130 text-white font-extrabold text-[20px] ">วิทยาลัยอาชีวศึกษาชลบุรี (Chonburi Vocational College)</h1>
                <h1 className="absolute -mt-25 ml-123 text-white font-extrabold text-[20px] ">ติดต่องานคูหาลูกเสือ วิทยาลัยอาชีวศึกษาชลบุรี โทร. 033-004-458</h1>
            </div>

        </div>    
        </>
    );
}
export default Home;