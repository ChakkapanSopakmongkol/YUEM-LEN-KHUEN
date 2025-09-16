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
                    <Link to="/">
                    <h1>กลับหน้าหลัก</h1>
                    </Link>
                </div>
                <div className="absolute text-white text-[38px] top-18 left-10 leading-9">
                    <h1>ยินดีต้อนรับเข้าสู่ระบบ<br/>ยืมอุปกรณ์กีฬา</h1>
                </div>
                <div className="absolute  text-white  text-[10px] top-36 left-10 leading-4 mt-1">
                    <p>โปรดเข้าสู่ระบบก่อนทำรายการยืมอุปกรณ์<br/>ระบบนี้ทำขึ้นเพิ่ออำนวยความสะดวกแก่ผู้ใช้บริการในการยืมอุปกรณ์กีฬาอย่างมีประสิทธิภาพ<br/>กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนยืนยันการทำรายการ</p>
                </div>
                <div className="z-10 text-[36px] font-bold ml-120 mt-5">
                    <div className="-ml-2">
                        <h1>สมัครสมาชิก</h1>
                    </div>
                    <div className="text-[12px] font-normal -ml-5">
                        <h1>โปรดกรอกข้อมูลให้ครบถ้วนเพื่อสมัครสมาชิก</h1>
                    </div>
                    <div className="flex gap-1">
                        <div className="text-[12px] font-normal -ml-30">
                            <h1>ชื่อ</h1>
                            <input className ="bg-gray-300 h-8 w-47 rounded-xl pl-9" type="text" placeholder="ชื่อ"/>
                            <img className="-mt-6 ml-3" src="./images/fluent_people-32-regular.png" alt="" />
                        </div>
                        <div className="text-[12px] font-normal ml-5">
                            <h1>นามสกุล</h1>
                            <input className ="bg-gray-300 h-8 w-47 rounded-xl pl-9" type="text" placeholder="นามสกุล"/>
                            <img className="-mt-6 ml-3" src="./images/fluent_people-32-regular.png" alt="" />
                        </div>
                    </div>
                    <div className="text-[12px] font-normal -ml-30 mt-2">
                        <h1>รหัสนักเรียน</h1>
                        <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="text" placeholder="รหัสนักเรียน"/>
                        <img className="-mt-6 ml-3" src="./images/fluent_people-32-regular.png" alt="" />
                        
                        <div className="mt-2">
                            <h1>อีเมล</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="email" placeholder="อีเมล"/>
                            <img className="-mt-6 ml-3" src="./images/mdi_email-outline.png" alt="" />
                        <div className="mt-2">
                            <h1>เบอร์โทรศัพท์</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="tel" placeholder="เบอร์โทรศัพท์"/>
                            <img className="-mt-6 ml-3" src="./images/mingcute_phone-line.png" alt="" />
                        </div>
                        <div className="mt-2">
                            <h1>รหัสผ่าน</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="password" placeholder="รหัสผ่าน"/>
                            <img className="-mt-6 ml-3" src="./images/Vector.png" alt="" />
                        </div>
                        <div className="mt-2">
                            <h1>ยืนยันรหัสผ่าน</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="password" placeholder="ยืนยันรหัสผ่าน"/>
                            <img className="-mt-6 ml-3" src="./images/Vector.png" alt="" />
                        </div>
                            <div className="">    
                                <div className="mt-1">
                                    <input className="mt-5 ml-2" type="checkbox"/>
                                    <h1 className="ml-6 -mt-5">ยืนยันการสมัครสมาชิก</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-1 -ml-30">
                        <Link to="/logindata">
                            <button type="submit" className="bg-green-300 w-[400px] h-[30px] hover:bg-[#62C538] text-[16px] text-white rounded-2xl shadow">
                                <p>สมัครสมาชิก</p>
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