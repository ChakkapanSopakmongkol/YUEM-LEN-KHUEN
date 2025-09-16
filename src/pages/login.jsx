import {Link} from 'react-router-dom'

import "../styles/login.css";

function login() {
  return (
    <div className="aaa">
      <h1>
        ค้นหาอุปกรณ์
        <br />
        กีฬาที่คุณต้องการ
      </h1>
      <p>
        อุปกรณ์ที่ท่านสามารถ“ยืมเล่น”ได้ทุกเมื่อ
        <br />
        และมีอุปกรณ์มากมายให้ท่านเลือกใช้
        <br />
        แต่ต้องคืนภายในเวลาที่กำหนด
      </p>
      <Link to="./logindata">
        <button class="btn" type="button">
          เข้าสู่ระบบ
        </button>
      </Link>
    </div>
  );
}

export default login;
