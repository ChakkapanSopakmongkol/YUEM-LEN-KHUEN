import {Link} from 'react-router-dom'
import "../styles/global.css";
import {UseState} from "react";

function yuem() {
    const [formData, setFormData] = UseState({
    type: "",
    quantity: 1,
    borrowTime: "",
    returnTime: "",
    borrowDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  return (
    <>
    <div className="sticky top-0 z-50 flex items-center justify-between bg-[white] shadow px-6 py-3">
                <div className="flex gap-1 font-semibold pl-2">
                    <h1 className="text-[#62C538] text-[24px]">YUEM</h1>
                    <h1 className="text-[24px]">LEN</h1>
                    <h1 className="text-[#62C538] text-[24px]">KHUEN</h1>
                </div>
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
            <img className="w-screen h-screen" src="./images/bg1.png" alt="" />
                <div className="-mt-120 ml-33">
                    <h1 className="absolute text-[100px] font-bold text-white">ยืมอุปกรณ์กีฬา</h1>
                </div>
                <div className="flex absolute ml-28 mt-30">
                    <h1 className="ml-60 text-[70px] font-bold text-white">ที่คุณ</h1>
                    <h1 className="ml-5 text-[70px] font-bold text-[#62C538]">ต้องการ</h1>
                </div>
        </div>
        <div className="relative">
            <h1 className="absolute text-[50px] text-white font-extrabold -mt-20 ml-260">ยืมอุปกรณ์</h1>
            <p className="absolute text-[16px] text-[#A7A7A7] font-normal -mt-3 ml-263">กรุณากรอกแบบฟรอมให้ถูกต้อง</p>
            <div className="flex ml-230.5 -mt-125">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl p-6">
                        
                    {/* ประเภทอุปกรณ์ */}
                    <div>
                    <label className="block text-white mb-1">ประเภทอุปกรณ์</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-50 p-2 rounded-md border border-[#62C538] bg-[#459125]  text-white focus:outline-none"
                    >
                        <option value="">เลือกประเภท</option>
                        <option value="ball">ฟุตบอล</option>
                        <option value="racket">ตะกร้อ</option>
                        <option value="net">ลูกแชร์บอล</option>
                        <option value="net">วอลเลย์บอล</option>
                        <option value="net">กลองทอม</option>
                        <option value="net">เชือกชักเย่อ</option>
                        <option value="net">แทมโบรีนไม้</option>
                        <option value="net">โทรโข่ง</option>
                    </select>
                    </div>

                    {/* จำนวนอุปกรณ์ */}
                    <div>
                    <label className="block text-white mb-1">จำนวนอุปกรณ์</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-50 p-2 rounded-md border border-[#62C538] bg-[#459125] text-white focus:outline-none"
                        min="1"
                    />
                    </div>

                    {/* เวลายืม */}
                    <div>
                    <label className="block text-white mb-1">เวลายืมอุปกรณ์</label>
                    <input
                        type="time"
                        name="borrowTime"
                        value={formData.borrowTime}
                        onChange={handleChange}
                        className="w-50 p-2 rounded-md border border-[#62C538] bg-[#459125] text-white focus:outline-none"
                    />
                    </div>

                    {/* เวลาคืน */}
                    <div>
                    <label className="block text-white mb-1">เวลาคืนอุปกรณ์</label>
                    <input
                        type="time"
                        name="returnTime"
                        value={formData.returnTime}
                        onChange={handleChange}
                        className="w-50 p-2 rounded-md border border-[#62C538] bg-[#459125] text-white focus:outline-none"
                    />
                    </div>

                    {/* วันที่ยืม */}
                    <div>
                    <label className="block text-white mb-1">วันที่ยืมอุปกรณ์</label>
                    <input
                        type="date"
                        name="borrowDate"
                        value={formData.borrowDate}
                        onChange={handleChange}
                        className="w-50 p-2 rounded-md border border-[#62C538] bg-[#459125] text-white focus:outline-none"
                    />
                    </div>

                    {/* วันที่คืน */}
                    <div>
                    <label className="block text-white mb-1">วันที่คืนอุปกรณ์</label>
                    <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        className="w-50 p-2 rounded-md border border-[#62C538] bg-[#459125] text-white focus:outline-none"
                    />
                    </div>
                </div>
            </div>
            <div className="-mt-1 ml-238.5">
                <Link to="/Yunyan">
                <button type="submit" className="bg-green-300 w-[400px] h-[30px] hover:bg-[#62C538] text-[16px] text-white rounded-2xl">
                    <p>ยืนยันการยืมของคุณ</p>
                </button>
                </Link>
            </div>
        </div>
    </>
  )
}
export default yuem;