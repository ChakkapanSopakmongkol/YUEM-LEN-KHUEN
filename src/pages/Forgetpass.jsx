import {Link} from 'react-router-dom'
import Login from "./login"
import '../styles/global.css'


function Forgetpass() {
  return (
    <>
      <div className="fixed inset-0 bg-black items-center justify-center">
        <div className="opacity-60">
          <Login />
        </div>
        {/* Box ลืมรหัสผ่าน */}
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
                <div className="z-10 text-[36px] font-bold ml-120 mt-20">
                    <h1>ลืมรหัสผ่าน</h1>
                    <div className="text-[12px] font-normal -ml-14">
                        <h1>กรุณาจำรหัสผ่านใหม่ไว้ให้ดี เพื่อป้องกันการเข้าใช้งานไม่ได้</h1>
                    </div>
                    {/* ช่องกรอกอีเมล */}
                    <div className="text-[12px] font-normal -ml-30 mt-3">
                        <div className='flex'>
                            <div className="">
                                <h1>อีเมล</h1>
                                <input className ="bg-gray-300 h-8 w-78 rounded-xl pl-9" type="email" placeholder="อีเมล"/>
                                <img className="-mt-6 ml-3" src="./images/mdi_email-outline.png" alt="" />
                            </div>
                            {/* ปุ่มส่งรหัสยืนยัน */}
                            <div className="mt-5 ml-1">
                                <button type="submit" className="bg-green-300 w-100px] h-[30px] hover:bg-[#62C538] text-[12px] text-white rounded-2xl px-2 py-1">
                                    <p>ส่งรหัสยืนยัน</p>
                                </button>
                            </div>
                        </div>
                        กรอกรหัสยืนยัน
                        <div className="mt-3">
                            <h1>รหัสยืนยัน 6 หลัก</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="password" placeholder="รหัสยืนยัน 6 หลัก"/>
                            <img className="-mt-6 ml-3" src="./images/Vector.png" alt="" />
                        </div>           
                         <div className="mt-5">
                            <h1>รหัสผ่านใหม่</h1>
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="password" placeholder="รหัสผ่านใหม่"/>
                            <img className="-mt-6 ml-3" src="./images/Vector.png" alt="" />
                            
                        
                        </div>
                        <div className="mt-5">
                            <input className ="bg-gray-300 h-8 w-100 rounded-xl pl-9" type="password" placeholder="ยืนยันรหัสผ่านใหม่อีกครั้ง"/>
                            <img className="-mt-6 ml-3" src="./images/Vector.png" alt="" />
                        </div>
                    </div>
                    <div className="flex -ml-30 mt-5">
                        <div className="text-[12px] font-normal mt-4">
                            <p>รหัสผ่านใหม่จะมีผลทันทีหลังการบันทึก</p>
                        </div>
                        <div className="ml-17 -mt-2">
                            <Link to="/logindata">
                                <button type="submit" className="px-2 py-1 border-2 border-[#62C538] rounded-2xl hover:bg-[#62C538] text-[16px] text-[rgb(137,220,101)]">
                                    <p>บันทึกรหัสผ่านใหม่</p>
                                </button>
                            </Link>
                        </div>  
                    </div>
                </div>
            </div>
    </div>
    </>
  );
}

export default Forgetpass;