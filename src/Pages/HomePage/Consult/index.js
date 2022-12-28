import React, {useEffect} from "react";
import "./Consult.css";
function Consult() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div lass='consult'>
            <h1 class='head'>TƯ VẤN KHÁCH HÀNG</h1>
            <div class='form-sdt'>
            <form class='sdt'>
                <label class='phone-number'>Vui lòng nhập số điện thoại</label>
                <input class='input-phone' type="text" id="phonenumber" name="phonenumber" placeholder="      Nhập số điện thoại"/>
                <button class="phone-button">YÊU CẦU TƯ VẤN</button>
            </form>
            </div>
        </div>
    );
}

export default Consult;