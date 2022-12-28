import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import watchImg from './../../../Assets/Images/Rectangle 5.png';
import Advertisement from '../../../Components/Advertisement';
import adImg2 from './../../../Assets/Images/Rectangle 7.png';
import List from '../../../Components/List';
import listImg1 from './../../../Assets/Images/Rectangle 8.png';
import listImg2 from './../../../Assets/Images/Rectangle 9.png';
import listImg3 from './../../../Assets/Images/Rectangle 10.png';
import Product from '../../../Components/Product';
import pro1 from './../../../Assets/Images/Rectangle 11.png';
import ContactItem from '../../../Components/ContactItem/index';
import newsItemImg1 from './../../../Assets/Images/news-item-1.svg';
import newsItemImg2 from './../../../Assets/Images/news-item-2.svg';
import newsItemImg3 from './../../../Assets/Images/news-item-3.svg';
import newsItemImg4 from './../../../Assets/Images/news-item-4.svg';
import NewsItem from '../../../Components/NewsItem';
import poster from './../../../Assets/Images/image 2.png';
import ProductApi from '../../../Apis/ProductApi';
import NewsApi from '../../../Apis/ProductApi';

const contactList = [
  {
    title: "ĐỊA CHỈ",
    icon: "location-dot",
    content: ["64/15 Nguyên Hồng", "Phường 1, Quận Gò Vấp", "Thành phố Hồ Chí Minh"]
  },
  {
    title: "GIỜ MỞ CỬA",
    icon: "clock",
    content: ["Thứ 2 - Thứ 6: 8h00 - 20h00", "Thứ 7: 8h00 - 21h00", "Chủ nhật: 8h00 - 21h30"]
  },
  {
    title: "EMAIL",
    icon: "envelope",
    content: ["MeowSkinCare@gmail.com", "19522009@gm.uit.edu.vn", "nduyan1601@gmail.com"]
  },
  {
    title: "ĐIỆN THOẠI",
    icon: "phone",
    content: ["Anh An - 0938269974", "Anh Phong - 093569712", "Anh Hưng - 0908926975"]
  }
]

const newsList = [
  {
    img: "https://myphamthanhduoc.com/wp-content/uploads/2022/04/lare2a.png",
    title: "Phillipe Auguste",
    desc: "Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế SkinCare tại MeowSkinCare dành riêng cho thị trường. Mức giá vô cùng hợp lý...."
  },
  {
    img: "https://baobiducphat.vn/wp-content/uploads/2020/11/L%E1%BB%8D-m%E1%BB%B9-ph%E1%BA%A9m-sang-tr%E1%BB%8Dng-4.jpg",
    title: "EPOS - Thụy Sĩ",
    desc: "Epos nằm trong trong top 10 hãng SkinCare tại MeowSkinCare độc lập uy tín nhất trong ngành SkinCare tại MeowSkinCare Thụy Sĩ. Những chiếc SkinCare tại MeowSkinCare được sản xuất..."
  },
  {
    img: "https://www.talkbeauty.vn/public/assets/avatar/lua-chon-my-pham-thong-minh-10.",
    title: "Aries Gold",
    desc: "Các sản phẩm của hãng luôn hướng đến phong cách, thời trang và xu hướng mới nhất của thế giới với giá cả hợp lý..."
  },
  {
    img: "https://dathangtaobao.vn/wp-content/uploads/2020/10/my-pham-cham-soc-da-ban-chay-nhat-shopee-1.jpg",
    title: "Stuhrling Original",
    desc: "Chiếc SkinCare tại MeowSkinCare cơ với các chi tiết phức tạp luôn là niềm đam mê của những ai yêu SkinCare tại MeowSkinCare. Một bộ máy cơ khí thường có 5 bộ phận..."
  }
]

function Home() {
  const [productList, setProductList] = useState();

  const [trans, setTrans] = useState(0);
  const [num, setNum] = useState(0);

  const move = useRef();
  const product = useRef()

  useEffect(() => {
    ProductApi.getAll()
      .then((res) => {
        console.log(res);
        setProductList(res)
      })
  }, [])

  useEffect(() => {
    NewsApi.getAll()
      .then((res) => {
        console.log(res)
      })
  }, [])

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(num, "effect");
    setTrans(-(window.innerWidth-170)*num);

  }, [num]);

  const handleRightClick = () => {
    if(num < Math.floor(move.current.childNodes.length/4)) setNum((num) => num + 1);
    // console.log(num, "click");
  }

  const handleLeftClick = () => {
    if(num > 0) setNum((num) => num - 1);
    // console.log(num);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
      <img src="https://vinmec-prod.s3.amazonaws.com/images/20210313_063949_898085_my-pham-an-toan.max-1800x1800.jpg" alt="watch-img" />
      <div className="home__ads">
        <Advertisement 
          img="https://goccuaru.com/wp-content/uploads/2020/03/t%E1%BB%95ng-h%E1%BB%A3p.jpg"
          title="MẪU SkinCare tại MeowSkinCare ĐIỆP VIÊN"
          des="Omega Seamaster đồng hành cùng nhân vật James Bond trong nhiều phần phim. Thiết bị là một trong những sản phẩm bán chạy nhất của thương hiệu."
        />

        <Advertisement 
          img="http://cdn.tgdd.vn/Files/2021/10/08/1388863/my-pham-thuan-chay-my-pham-sach-va-my-pham-huu-co-co-phai-la-mot-202110082321000878.jpg"
          title="BLACK FRIDAY"
          des="Nhân sự kiện Black Friday, MeowSkinCare giảm giá đến 50% cho toàn bộ sản phẩm tại hệ thống, mang đến cho khách hàng cơ hội sở hữu những món đồ hiệu với mức giá hấp dẫn."
        />
      </div>

      {/* DANH MỤC MUA HÀNG */}
      <h1>DANH MỤC MUA HÀNG</h1>
      <div className="home__lists">
        <List 
          img="https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/8/photo1646707674185-1646707674296285845735.jpg"
          title="SkinCare tại MeowSkinCare nam"
          list={{
            item1: "Màu mới",
            item2: "Bán chạy",
            item3: "Ưu đãi",
          }}
        />

        <List 
          img="http://cdn.tgdd.vn/Files/2021/03/16/1335716/top-8-thuong-hieu-my-pham-viet-nam-tot-nhat-hien-nay-202103161559257688.jpg"
          title="SkinCare tại MeowSkinCare nữ"
          list={{
            item1: "Màu mới",
            item2: "Bán chạy",
            item3: "Ưu đãi",
          }}
        />

        <List 
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKFyu5RwHs4TE0JVyC62p2eC5sO3M3BP6-FVfNFJqubZwgFK3FONzktJyOmI18871nB8&usqp=CAU"
          title="Dòng sản phẩm"
          list={{
            item1: "Casio",
            item2: "Rolex",
            item3: "Daniel Wellington",
          }}
        />
      </div>

      {/* BÁN CHẠY */}
      <h1 className="home__title-2">BÁN CHẠY</h1>

      <img src="https://cafebiz.cafebizcdn.vn/thumb_w/600/pr/2022/photo1658455342930-16584553430462042350104-63794084405807.jpg" alt="image-poster" style={{margin: "20px 0"}}/>

      <div className="home__bottom">
        <div className="home__bottom-contact">
            <div className="home__bottom-contact-title">THÔNG TIN LIÊN LẠC</div>
            <div className="home__bottom-contact-desc">Nếu bạn có bất kì phản hồi gì về tiệm bánh HachatMacaron, hãy liên hệ ở các thông tin bên dưới:</div>
            <div className="home__bottom-contact-list">
            {
              contactList.map((element, index) => (
                <ContactItem
                  key={index}
                  title={element.title}
                  icon={element.icon}
                  content={element.content}
                ></ContactItem>
              ))
            }
            </div>
        </div>

        <div className="home__bottom-line"></div>

        <div className="home__bottom-news">
          <div className="home__bottom-news-title">TIN TỨC VÀ BÀI VIẾT</div>
          <div className="home__bottom-news-list">
            {
              newsList.map((element, index) => (
                <NewsItem
                  key={index}
                  img={element.img}
                  title={element.title}
                  desc={element.desc}
                ></NewsItem>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home