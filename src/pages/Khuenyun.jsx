import {Link} from 'react-router-dom'
import "../styles/global.css"
// ยืนยันการคืน
function Khuenyun() {
  return (
    <>
    <div className="relative">
        <div className="absolute z-10 w-full h-full bg-black/70"></div>
        <img className="h-190" src="./images/bg2.png" alt="" />
        <div className="flex absolute -mt-180 ml-10 gap-2">
            <h1 className="text-[#62C538] text-[32px] font-bold">YUEM</h1>
            <h1 className="text-white text-[32px] font-bold">LEN</h1>
            <h1 className="text-[#62C538] text-[32px] font-bold">KHUEN</h1>
        </div>
        <div className="absolute -mt-110 ml-10">
            <h1 className="text-white text-[82px] font-extrabold">คืนอุปกรณ์กีฬา</h1>
        </div>
        <div className="absolute w-100 h-80 bg-white/30 -mt-135 ml-230 rounded-xl">
            <div className="ml-5 mt-10">
                <h1 className="text-[#ffffff] text-[24px] font-extrabold">กรอกรหัสอุปกรณ์</h1>
                <input className="bg-white rounded-2xl w-90 pl-2 text-[20px]" type="text" placeholder="รหัสอุปกรณ์"/>
                <h1 className="text-[#ffffff] text-[24px] font-extrabold mt-5">กรอกข้อมูลของคุณ</h1>
                <input className="bg-white rounded-2xl w-90 pl-2 text-[20px]" type="text" placeholder="รหัสนักเรียน"/>
                <input className="bg-white rounded-2xl w-90 pl-2 mt-3 text-[20px]" type="text" placeholder="เบอร์โทรศัพท์"/>
                <Link to="#">
                <button type="button" className="border-2 border-[#62C538] rounded-3xl w-40 mt-5 text-white text-[20px] ml-25 hover:bg-[#a7f088]">
                    <p>ยืนยันการคืน</p>
                </button>
                </Link>
            </div>
        </div>
        <div className="absolute z-10 -mt-125 ml-140">
            <div className="w-100 h-50 bg-white rounded-3xl"></div>
        </div>
        <div className="absolute z-10 -mt-125 ml-140">
            <div className="w-100 h-20 bg-[#62C538] rounded-t-3xl"></div>
            <h1 className="-mt-15 ml-11.5 text-[34px] text-white font-extrabold">ยืนยันการคืนของคุณ</h1>
            <h1 className="mt-8 ml-25 text-[#525252]">คุณต้องการคืนอุปกรณ์หรือไม่</h1>
                <div className="flex absolute z-10 gap-10 ml-25 mt-5">
                    <Link to="/Khuen">                   
                    <button type="button" className="border pl-5 pr-5 border-[#E35050] text-[#E35050] rounded-3xl hover:bg-[#ff9797]">
                        <p>ยกเลิก</p>
                    </button>
                    </Link>
                    <Link to="/Sus"> 
                    <button type="button" className="border pl-5 pr-5 border-[#62C538] text-[#62C538] rounded-3xl hover:bg-[#a7f088]">
                        <p>ยืนยัน</p>
                    </button>
                    </Link>
                </div>
        </div>

    </div>
    </>
  )
}
export default Khuenyun;