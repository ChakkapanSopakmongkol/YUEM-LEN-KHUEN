import {Link} from 'react-router-dom'
import "../styles/global.css"
// ยังไม่ยืม
function Ss() {
  return (
    <>
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
    <div className="relative">
        <img className="w-full h-full blur-sm" src="./images/g1.png" alt="" />
        <div className="absolute w-360 h-190 bg-white/40 -mt-200 ml-10 rounded-2xl">
            <div className="flex ml-10 mt-5 gap-38">
                <h1 className="text-[20px] text-white font-extrabold bg-[#62C538] pl-3 pr-3 pt-1 rounded-2xl">ชื่อ-สกุล</h1>
                <h1 className="text-[20px] text-white font-extrabold bg-[#62C538] pl-3 pr-3 pt-1 rounded-2xl">อุปกรณ์</h1>
                <h1 className="text-[20px] text-white font-extrabold bg-[#62C538] pl-3 pr-3 pt-1 rounded-2xl">เวลา</h1>
                <h1 className="text-[20px] text-white font-extrabold bg-[#62C538] pl-3 pr-3 pt-1 rounded-2xl">สถานะ</h1>
                <h1 className="text-[20px] text-white font-extrabold bg-[#62C538] pl-3 pr-3 pt-1 rounded-2xl">รายละเอียด</h1>
                <Link to="/Khuen">
                <h1 className="text-[20px] text-white font-extrabold bg-amber-300 pl-3 pr-3 pt-1 rounded-xl shadow-md hover:bg-amber-200 border border-white">ปุ่มคืนอุปกรณ์</h1>
                </Link>
            </div>
        </div>
        <div className="absolute -mt-180 ml-20 w-340 h-px bg-white/70"></div>
    </div>
    </>
  )
}
export default Ss;