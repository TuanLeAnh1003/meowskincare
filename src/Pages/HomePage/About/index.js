import React, { useEffect } from "react";
import Creator from "../../../Components/Creator/Creator";
import "./About.css";
import medImg from '../../../Assets/Images/Rectangle 15.png';
import vidImg from '../../../Assets/Images/image 3.png';
import bgImg from '../../../Assets/Images/Rectangle 387.png';
import Dan from '../../../Assets/Images/Dan.png';
import Tuan from '../../../Assets/Images/Tuan.png';
import Hung from '../../../Assets/Images/Hung.png';
import Thien from '../../../Assets/Images/Thien.png';
import Phong from '../../../Assets/Images/Phong.png';
import { Link } from "react-router-dom";

function About() {

    const creators = [{
        img: Dan,
        name: "Duy An",
        position: "C.E.O Communication",
        color: "#0474C6",
      }, {
        img: Tuan,
        name: "Tuấn Lê",
        position: "Event & Activation",
        color: "#2CA05A",
      }, {
        img: Hung,
        name: "Hưng Phó",
        position: "Marketing & Entertainment",
        color: "#E25050",
      }, {
        img: Phong,
        name: "Phong Đặng",
        position: "Studios & Distribution",
        color: "#D1A67C",
      }, {
        img: Thien,
        name: "Thiện Nguyễn",
        position: "Cinemas & Service",
        color: "#F5859E",
      }];

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="about">
      <div className="row about-container">
        <div className="text-block">
          <h1 className="bottom">VỀ CHÚNG TÔI</h1>
          <div>
            <p className="line">
              Được thành lập tại Seoul – Hàn Quốc năm 2001. Với những gì đã đạt
              được, Julius đã trở thành một thương hiệu lớn mang tầm quốc tế năm
              2015.
            </p>
            <p className="line">
              Trải qua quá trình 17 năm phát triển, Julius được phái đẹp chào
              đón nhiệt liệt chào đón khi xuất hiện từ những ngày đầu tiên như
              Hàn Quốc sau đó lan tỏa và đăng ký hiệp hội Marid quốc tế trên 30
              nước trên thế giới như America, Canada, Mexico, Iran, Vietnam,
              India, Philippines, Thai Lan, Trung Quốc. etc.
            </p>
          </div>
        </div>
        <img src="" style={{ width: "50%" }} />
      </div>
      <div className="about-container-2">
        <div className="ctn-2-left">
          <img src={medImg} />
        </div>
        <div className="ctn-2-right">
          <h2>SkinCare tại MeowSkinCare</h2>
          <p className="row-2" style={{ textAlign: "justify" }}>
          SkinCare tại MeowSkinCare
          </p>
          <button className="detail" type="button" style={{ border: "none" }}>
            CHI TIẾT
          </button>
        </div>
      </div>

      <div className=" about-container-3">
        <div className="about-child-container">
            <h2>VỀ UIT</h2>
            <p>SkinCare tại MeowSkinCare</p>
            <h2>WEBSITE MeowSkinCare</h2>
            <img src={vidImg} alt="" />
        </div>
        <div className="text-block-founder">
          <h2 className="founder">ĐỘI NGŨ LÃNH ĐẠO MeowSkinCare</h2>
          <div className="founder-line">
            <p>
              SkinCare tại MeowSkinCare
            </p>
          </div>

            <div className="theaterSystem__creaters">
            {creators.map((item, index)  => (
                <div key={index} className="theaterSystem__creater">
                    <Creator 
                        img={item.img}
                        name={item.name}
                        position={item.position}
                        color={item.color}
                    />
                </div>
            ))}
            </div>
        </div>
      </div>

      <div className="about-container-4">
        <div className="text-block">
          <h1 className="foot-head">LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <div>
            <p className="foot-line" style={{width: "70%", textAlign: "center", margin: "0 auto"}}>
              Nếu có bất kỳ phản hồi gì về cửa hàng MeowSkinCare. Hãy liên hệ với
              chúng tôi để được giải đáp sớm nhất.
            </p>
          </div>
          <div className="button-container-div">
            <Link to="/contact" className="go-to-detail" type="button" style={{border: "none"}}>
              ĐẾN TRANG LIÊN HỆ
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
