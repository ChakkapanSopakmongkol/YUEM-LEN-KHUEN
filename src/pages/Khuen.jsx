import "../styles/global.css"

function Khuen() {
  return (
    <>
    <div className="relative">
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
    </div>
    </>
  )
}
export default Khuen;