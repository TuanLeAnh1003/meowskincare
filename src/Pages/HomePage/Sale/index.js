import React, { useState, useEffect } from 'react';
import './Sale.css';
import CategoryItem from '../../../Components/Category/CategoryItem/index';
import Product from '../../../Components/Product/index';
import ProductImageMain from './../../../Assets/Images/omega-watches.svg';
import ProductImg from './../../../Assets/Images/Rectangle 11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductApi from '../../../Apis/ProductApi';
import UserApi from '../../../Apis/UserApi';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

function Sale() {
  const [brand, setBrand] = useState('')
  const [albert, setAlbert] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [glass, setGlass] = useState('')
  const [energyCore, setEnergyCore] = useState('')
  const [interfaceColor, setInterfaceColor] = useState('')
  const [caseColor, setCaseColor] = useState('')
  const [shape, setShape] = useState('')
  const [size, setSize] = useState('')
  const [waterRessitance, setWaterRessitance] = useState('')
  const [feature, setFeature] = useState('')

  const [productList, setProductList] = useState()

  const cateList = [
    {
      title: "Fashion",
      contentList: ["Jumpers & Sweaters", "Outerwear", "Pants & Skirts", "Summer dresses", "Tops"]
    },
    {
      title: "Kem chống nắng",
      contentList: []
    },
    {
      title: "Kem dưỡng da",
      contentList: []
    },
    {
      title: "Kem dưỡng thể",
      contentList: []
    },
    {
      title: "Nước tẩy trang",
      contentList: []
    },
    {
      title: "Phổ rộng",
      contentList: []
    },
    {
      title: "Son",
      contentList: []
    },
    {
      title: "Sữa rửa mặt",
      contentList: []
    },
    {
      title: "Toner",
      contentList: []
    }
  ]

  const imgList = [
    "https://cdn.bitrix24.vn/b23750033/iblock/d3d/d3db559776f9c3e6d67e99a8eacd7513/1610683179587-tay-trang-sach-sau-3in1-400ml-loreal-1.jpeg",
    "https://cdn.bitrix24.vn/b23750033/iblock/20a/20a33da57042644efbc8cbccc39074bb/36b7acccac8aac64e13841a48b95123c_bb5c9e02cfca4929b916badee08fc27b_1024x1024.png",
    "https://cdn.bitrix24.vn/b23750033/iblock/343/343999585163d3e437c602a65b27539f/google-shopping-nuoc-tay-trang-simple-danh-cho-da-nhay-cam-200ml-1.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/dd5/dd588f4e100b15d44ce32e3d3de77ae0/cocoon.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/b6c/b6cba30abdb14c8862cc86e0dfac0642/ad.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/87a/87a3ba204ff9fd1a2a91ed5f0905e22e/duong-dior-001-moi-2021.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/f9f/f9f42455296d90489568dcd62e183d1b/nuoc-hoa-hong-khong-mui-klairs-768x768.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/ef3/ef3a308a6c1ceca4599d73b669ecae15/1665842751499-tay-trang-mat-moi-maybelline-7.jpeg",
    "https://cdn.bitrix24.vn/b23750033/iblock/a59/a59040035902584afcff8ca8d31fde7a/Son-Dior-Addict-Lip-Tattoo-541-Natural-Sienna-New-2022-_-Mau-Do-Dat-541.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/083/0834f1c5c8c8ecb3cd03c282db8d7bb0/40495_28709X_.png",
    "https://cdn.bitrix24.vn/b23750033/iblock/f8e/f8e7cf9a61fb79a0a56f67032e3b51fe/1654919302-3337872411991-b75cb01dafef48f096faf51a2ff11248-master.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/753/753d1d2786119ccc046dc837e1ff7ff9/sua-rua-mat-da-dau-mun-nhay-cam-svr-sebiaclear-gel-moussant-400ml-4.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/289/289911b3328386fc6cec3ea15e98eafd/Cetaphi-GSC-500mL.png",
    "https://cdn.bitrix24.vn/b23750033/iblock/d45/d45a91732dfdfdaf70e6d4107589368a/5f3b1446dd4dbbf91a03934d03f4b352.png",
    "https://cdn.bitrix24.vn/b23750033/iblock/01c/01ce7e08b69551c16258fd55c1a5754b/son-mac-chili-son-do-cam-cuc-la-nhat-dinh-phai-co-5f0821c8c9add-10072020150736.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/bd7/bd79fd1af16e917547692d058ccf1264/son-ysl-rouge-pur-couture-the-slim-mau-21-rouge-paradoxe-do-man-5db278ab58e92-25102019112307.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/4a6/4a646df14c58d106769b8387677b2f21/son-ysl-slim-velvet-radical-matte-lipstick-311-released-nude-mau-hong-nude-62ff51e844c89-19082022160336.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/f0b/f0b1de1dc6de65c8a75595cf97cef117/martiderm.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/cd9/cd9dd7b13ac3b2c4d34a5523d3524184/paulachoice.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/21d/21dffb35d2e59523f291e1873074230a/larocheposay.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/940/940bcd1cd0135435de3eae9d1396ac2f/nuoc-can-bang-la-roche-posay-giau-khoang-cho-da-dau-200ml-1.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/9dd/9ddd7b5b7e46424be3072b06e6867be7/google-shopping-sua-chong-nang-la-roche-posay-bao-ve-da-toi-uu-spf50-50ml-1653704592_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/b46/b46d6658ef7197fbbf660d5a7fd90a54/google-shopping-nuoc-tay-trang-la-roche-posay-cho-da-dau-nhay-cam-200ml_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/eb2/eb2f745a8f8611f1bd4f819adc187883/google-shopping-kem-duong-am-klairs-lam-diu-phuc-hoi-da-ban-dem-60ml_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/4c0/4c02547c873e2a49a35592b0f9d0775f/google-shopping-kem-sieu-duong-am-embryolisse-ho-tro-phuc-hoi-da-30ml-1_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/2ad/2ad196a1e58c85d8756df2be1e4e1b02/kem-chong-nang-la-roche-posay-kiem-soat-dau-spf50-50ml-2-1647655789_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/071/071ad832bb3adcccfcfe569b52d38800/google-shopping-sua-duong-the-eucerin-lam-sang-da-spf-7-250ml_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/f69/f690054b21d6f9632f5f6ff6d9f0f1a6/google-shopping-sua-duong-the-st-ives-yen-mach-bo-duong-am-diu-da-621ml-1669953528_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/ed0/ed0fc03aacfbd9d34024c821aea4031b/f800da2ad1d1c28bd9e03605504c0f14.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/e4d/e4d26dc92c58ef2f084a2831822bc4cf/facebook-dynamic-sua-chong-nang-anessa-duong-da-kiem-dau-60ml-mau-moi-2022-1648533471_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/5a8/5a81f8d64f1f6571a1c6e0b088c76800/facebook-dynamic-sua-chong-nang-sunplay-duong-da-sang-min-spf50-pa-55g-1659751737_img_358x358_843626_fit_center.jpg",
    "https://cdn.bitrix24.vn/b23750033/iblock/3b8/3b896ad62651dd4a2d638ca09df40658/50ml_02bec2bbbdf2488481fc9c34407fa2f1_1024x1024_43fc41e2c6fe4c65b4fd19ade89da974_1024x1024.webp",
    "https://cdn.bitrix24.vn/b23750033/iblock/bf1/bf16985a30a7bbb088489df2ed694f51/-ld-000-3337875663083-front_37e0bdfab43042808488b0af1282845d_1024x1024_89a8c19ef0344b86b935b18fba27094a_1024x1024.webp",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/4be/4beb9167f6eafb488138473020880c2f/pvc_raincoat_blue_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/4b5/4b56cee97d6534550be4a005f7dcdade/exclusive_cutout_dress_black_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/667/66752110086327df0461aa845b29eaf7/dress_with_textured_pattern_green_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/0ad/0add332f6d2950b6dde0cb65540b8f42/denim_jacket_blue_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/85a/85a6078b67fe8794ef40eab7821d67b0/silk_black_dress_with_stars_pattern_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/51f/51fc62d058b687c7b87c187a35d774b3/crop_top_and_pants_with_leaves_pattern_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/5f0/5f09f1556892c07276ba20f3b3995590/black_wide_suede_pants_with_white_stripes_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/1a3/1a3b42146f39b6d985cc0b96f218e380/blue_cotton_sweater_with_banana_pattern_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/b41/b413cfbc633a8d327a0686f0476e9782/colorful_jumper_with_horizontal_stripes_001.jpg",
    "https://cdn.bitrix24.com/demodata/v1/common/iblock/d75/d756565cfab3e218c12071936fead988/black_suede_pleated_skirt_001.jpg",
    "https://product.hstatic.net/1000006063/product/181_11e2cdaf73cd4acaa85c76c1ce4b0c62_1024x1024_c17deff8149c42ebab0499ff6f1b448d_1024x1024.jpg",
    "https://product.hstatic.net/1000006063/product/-ld-000-3337875663083-front_37e0bdfab43042808488b0af1282845d_1024x1024_89a8c19ef0344b86b935b18fba27094a_1024x1024.jpg",
    "https://product.hstatic.net/1000006063/product/hatherine_morning_boost_clear_firming_cream_50ml_433e4ddd4d5e4e4199ce5be2242c4e0c_1024x1024.jpg",
    "https://product.hstatic.net/1000006063/product/blue_serum_1_609b33c84ae24f3ba385cd41f548ed21_1024x1024.jpg",
    "https://product.hstatic.net/1000006063/product/1_f131af80fba4445fb894fef3c963e4ce_1024x1024.jpg",
    "https://product.hstatic.net/1000006063/product/3_56c9dbe4218044a0891964172db5a5b5_1024x1024.jpg",
    "https://product.hstatic.net/1000006063/product/458457e9821bfe2743cf2a1399b8dd3f_844dbd9f706e4f93bce81e48879628a4_1024x1024.jpeg",
    "https://product.hstatic.net/1000006063/product/tha_saem_product0244_c0d7152e3ece46118d1d503ab1f34e67_1024x1024_7454334ae6ac40af9f11ba020e477089_1024x1024.jpg"
  ]

  useEffect(() => {
    // ProductApi.getAll()
    //   .then((res) => {
    //     console.log(res);
    //     setProductList(res)
    //   })
    axios.get("https://meowskincare.bitrix24.vn/rest/10/36d6cz0z83br2kdv/crm.product.list.json")
      .then(res => {
        setProductList(res.data.result)
      })
  }, [])

  const [hideCate, setHideCate] = useState(false)

  const handleFilter = () => {
    // ProductApi.filter({
    //   brand: brand,
    //   albert: albert, 
    //   priceRange: priceRange, 
    //   glass: glass, 
    //   energyCore: energyCore, 
    //   interfaceColor: interfaceColor, 
    //   caseColor: caseColor, 
    //   shape: shape, 
    //   size: size, 
    //   waterRessitance: waterRessitance, 
    //   feature: feature
    // })
    // .then((res) => {
    //   setProductList(res)
    //   window.scrollTo(0, 0)
    // })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClickPage = (e) => {
    // console.log(Number(e.target.text) - 1);

    // ProductApi.getAll({
    //   page: Number(e.target.text) - 1
    // })
    //   .then((res) => {
    //     document.querySelector('.page-item.active').classList.remove('active')
    //     e.target.parentNode.classList.add('active')
    //     setProductList(res)
    //     window.scrollTo(0, 0)
    //   })
  }

  const handleClickFirst = () => {
    // ProductApi.getAll()
    //   .then((res) => {
    //     document.querySelector('.page-item.active').classList.remove('active')
    //     document.querySelectorAll('.page-item')[2].classList.add('active')
    //     setProductList(res)
    //     window.scrollTo(0, 0)
    //   })
  }

  const handleClickPrev = () => {
    // const activePage = document.querySelector('.page-item.active')
    // const pageList = document.querySelectorAll('.page-item')

    // ProductApi.getAll({
    //   page: Number(activePage.childNodes[0].text) - 2
    // })
    //   .then((res) => {
    //     activePage.classList.remove('active')
    //     pageList[Number(activePage.childNodes[0].text)].classList.add('active')
    //     setProductList(res)
    //     window.scrollTo(0, 0)
    //   })
  }

  const handleClickNext = () => {
    // const activePage = document.querySelector('.page-item.active')
    // const pageList = document.querySelectorAll('.page-item')
    // ProductApi.getAll({
    //   page: isNaN(Number(activePage.childNodes[0].text)) ? 1 : Number(activePage.childNodes[0].text)
    // })
    //   .then((res) => {
    //     pageList[isNaN(Number(activePage.childNodes[0].text)) ? 3 : Number(activePage.childNodes[0].text) + 2].classList.add('active')
    //     activePage.classList.remove('active')
    //     setProductList(res)
    //     window.scrollTo(0, 0)
    //   })
  }

  const handleClickLast = () => {
    const activePage = document.querySelector('.page-item.active')
    const pageList = document.querySelectorAll('.page-item')

    activePage.classList.remove('active')
    pageList[11].classList.add('active')

    window.scrollTo(0, 0)
  }

  return (
    <div className="sale" onClick={() => setHideCate(false)}>
      <div className="sale__category-bars" onClick={e => e.stopPropagation()}>
        <FontAwesomeIcon icon={solid("filter")} className="sale__bars-icon" onClick={() => setHideCate(!hideCate)} />
        {
          hideCate &&
          <div className="sale__category-bars--2">
            <div className="sale__category-gender">
              <Link to="/sale" className="sale__category-gender-item sale__category-gender-item--active">
                TẤT CẢ
              </Link>
              <div className="sale__category-gender-line"></div>
              <Link href="/sale" className="sale__category-gender-item">
                NAM
              </Link>
              <div className="sale__category-gender-line"></div>
              <Link href="/sale" className="sale__category-gender-item">
                NỮ
              </Link>
            </div>

            <div className="sale__category-line"></div>

            <div className="sale__category-type">
              <a href="/" className="sale__category-type-clock">Sản phẩm</a><br />
              <a href="/" className="sale__category-type-accessory">Phụ kiện</a>
            </div>

            {cateList.map((element, index) => index <= 3 && (
              <div key={index} className="sale__category-element">
                <div className="sale__category-line"></div>

                <CategoryItem
                  cate={index}
                  title={element.title}
                  contentList={element.contentList}
                  setBrand={setBrand}
                  setAlbert={setAlbert}
                  setPriceRange={setPriceRange}
                  setGlass={setGlass}
                  setEnergyCore={setEnergyCore}
                  setInterfaceColor={setInterfaceColor}
                  setCaseColor={setCaseColor}
                  setShape={setShape}
                  setSize={setSize}
                  setWaterRessitance={setWaterRessitance}
                  setFeature={setFeature}
                ></CategoryItem>
              </div>
            )
            )}

            <button onClick={handleFilter}>Lọc</button>
          </div>
        }
      </div>

      <div className="sale__category">
        <div className="sale__category-gender">
          <Link to="/sale" className="sale__category-gender-item sale__category-gender-item--active">
            TẤT CẢ
          </Link>
          {/* <div className="sale__category-gender-line"></div>
          <Link to="/sale" className="sale__category-gender-item">
            NAM
          </Link>
          <div className="sale__category-gender-line"></div>
          <Link to="/sale" className="sale__category-gender-item">
            NỮ
          </Link> */}
        </div>

        {/* <div className="sale__category-line"></div>

        <div className="sale__category-type">
          <a href="/" className="sale__category-type-clock">Sản phẩm</a><br />
          <a href="/" className="sale__category-type-accessory">Phụ kiện</a>
        </div> */}


        {cateList.map((element, index) => (
          <div key={index} className="sale__category-element">
            <div className="sale__category-line"></div>

            <CategoryItem
              cate={index}
              title={element.title}
              contentList={element.contentList}
              setBrand={setBrand}
              setAlbert={setAlbert}
              setPriceRange={setPriceRange}
              setGlass={setGlass}
              setEnergyCore={setEnergyCore}
              setInterfaceColor={setInterfaceColor}
              setCaseColor={setCaseColor}
              setShape={setShape}
              setSize={setSize}
              setWaterRessitance={setWaterRessitance}
              setFeature={setFeature}
            ></CategoryItem>
          </div>
        )
        )}

        <button onClick={handleFilter}>Lọc</button>

      </div>

      <div className="sale__product">
        <div className="sale__product-img">
          <img src="https://dangcapphaidep.vn/timthumb.php?src=https://cdn.dangcapphaidep.vn/wp-content/uploads/2020/07/su-phat-trien-cua-my-pham-han-..jpg&w=780&h=480&q=72" alt="" className="sale__product-img--main" />
        </div>
        <div className="sale__product-list">
          {
            productList?.map((element, index) => (
              <div key={index} className="sale__product-list-item">
                <Product
                  productId={element.ID}
                  img={imgList[index]}
                  name={element.NAME}
                  price={element.PRICE}
                ></Product>
              </div>
            ))
          }
        </div>
        <Pagination style={{ width: '40vw', margin: '0 auto' }}>
          <Pagination.First onClick={handleClickFirst} />
          <Pagination.Prev onClick={handleClickPrev} />
          <Pagination.Item active onClick={e => handleClickPage(e)}>{1}</Pagination.Item>
          <Pagination.Item onClick={e => handleClickPage(e)}>{2}</Pagination.Item>
          <Pagination.Item onClick={e => handleClickPage(e)}>{3}</Pagination.Item>
          <Pagination.Item onClick={e => handleClickPage(e)}>{4}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item onClick={e => handleClickPage(e)}>{10}</Pagination.Item>
          <Pagination.Item onClick={e => handleClickPage(e)}>{11}</Pagination.Item>
          <Pagination.Item onClick={e => handleClickPage(e)}>{12}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item onClick={e => handleClickPage(e)}>{20}</Pagination.Item>
          <Pagination.Next onClick={handleClickNext} />
          <Pagination.Last onClick={handleClickLast} />
        </Pagination>
      </div>
    </div>
  )
}

export default Sale
