import {Link} from 'react-router-dom'
import Login from "./login"
import "../styles/global.css";

function Systemyum() {
  return (
    <>
      <div className="fixed inset-0 bg-black items-center justify-center">
        <div className="opacity-60">
          <Login />
        </div>
            <div className="absolute top-1/2 left-1/2 w-[1000px] h-[550px] bg-white z-50 -translate-x-1/2 -translate-y-1/2 flex rounded-3xl">
                <img className="absolute w-[440px] rounded-tl-3xl" src="./images/Ellipse 51.png" alt="" />
                <img className="absolute w-[230px] rounded-bl-3xl top-72.5" src="./images/Ellipse 53.png" alt="" />
                <img className="absolute w-[160px] top-55 left-80" src="./images/Ellipse 52.png" alt="" />
                <img className="absolute w-[150px] rounded-br-3xl top-105 left-212.5" src="./images/Ellipse 50.png" alt="" />
                <div className="w-16 ml-9 z-10 mt-5">
                    <img className="h-10" src="./images/m.png" alt="" />
                </div>
                <div className="z-1 mt-7 text-white text-[18px] -ml-9">
                    <h1>กลับหน้าหลัก</h1>
                </div>
                <div className="absolute text-white text-[38px] top-18 left-10 leading-9">
                    <h1>ยินดีต้อนรับเข้าสู่ระบบ<br/>ยืมอุปกรณ์กีฬา</h1>
                </div>
                <div className="absolute  text-white  text-[10px] top-36 left-10 leading-4 mt-1">
                    <p>โปรดเข้าสู่ระบบก่อนทำรายการยืมอุปกรณ์<br/>ระบบนี้ทำขึ้นเพิ่ออำนวยความสะดวกแก่ผู้ใช้บริการในการยืมอุปกรณ์กีฬาอย่างมีประสิทธิภาพ<br/>กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนยืนยันการทำรายการ</p>
                </div>
                <div className="z-10 text-[36px] font-bold ml-120 mt-20">
                    <div className="-ml-17">
                        <h1>ระบบยืมอุปกรณ์กีฬา</h1>
                    </div>
                    <div className="text-[12px] font-normal ml-12">
                        <h1>กรุณายืนยันตัวตน</h1>
                    </div>
                    <div className="text-[12px] font-normal -ml-30 mt-3">
                        <h1>รหัสนักเรียน</h1>
                        <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="text" placeholder="รหัสนักเรียน"/>
                        <img className="-mt-6 ml-3" src="./images/fluent_people-32-regular.png" alt="" />
                        
                        <div className="mt-5">
                            <h1>รหัสผ่าน</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="" placeholder="รหัสผ่าน"/>
                            <img className="-mt-6 ml-3" src="./images/Vector.png" alt="" />
                            <div className="flex mt-0">    
                                <div className="mt-1">
                                    <input className="mt-5 ml-2" type="checkbox"/>
                                    <h1 className="ml-6 -mt-5">จำรหัสผ่าน</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-1 -ml-30">
                        <Link to="/Home">
                            <button type="submit" className="bg-green-300 w-[400px] h-[30px] hover:bg-[#62C538] text-[16px] text-white rounded-2xl">
                                <p>เข้าสู่ระบบ</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
}

export default Systemyum;