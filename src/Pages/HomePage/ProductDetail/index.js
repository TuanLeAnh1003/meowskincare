import React, { useState, useRef, useEffect } from 'react';
import './ProductDetail.css';
import img from './../../../Assets/Images/Rectangle 48.png';
import smallImg from './../../../Assets/Images/Rectangle 49.png';
import pro1 from './../../../Assets/Images/Rectangle 11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import Product from '../../../Components/Product';
import ProductApi from '../../../Apis/ProductApi';
import UserApi from '../../../Apis/UserApi';
import { useParams, Link } from 'react-router-dom'
import Swal from "sweetalert2";

function ProductDetail() {
  const userId = localStorage.getItem("userid")
  const [product, setProduct] = useState() 
  const [productList, setProductList] = useState() 

  const fetures = ["Thương hiệu", "Đường kính mặt", "Chống nước", "Chất liệu mặt", "Năng lượng sử dụng", "Dự trữ năng lượng", "Chất liệu dây", "Chất liệu vỏ", "Khóa", "Xuất xứ", "Chế độ bảo hành"];
  const figures = ["Rolex", "36mm", "100m", "Chất liệu mặt", "Automatic (Cơ tự động)", "55 giờ", "Vàng hồng 18k và thép", "Vàng hồng 18k và thép", "Crownclasp", "Thụy Sĩ", "5 năm"];

  // -------------------------
  const [trans1, setTrans1] = useState(0);
  const [num1, setNum1] = useState(0);
  const move1 = useRef();
  const product1 = useRef()

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    // console.log(product);
    setTrans1(-(1300 + 38)*num1);

  }, [num1]);

  const handleRightClick1 = () => {
    if(num1 < Math.floor(move1.current.childNodes.length/4)) setNum1((num1) => num1 + 1);
    // console.log(num, "click");
  }

  const handleLeftClick1 = () => {
    if(num1 > 0) setNum1((num1) => num1 - 1);
    // console.log(num);
  }

  // -------------------------------
  const [trans2, setTrans2] = useState(0);
  const [num2, setNum2] = useState(0);
  const move2 = useRef();
  const product2 = useRef()

  useEffect(() =>{
    // console.log(Math.floor(move.current.childNodes.length/6));
    // console.log(movie);
    setTrans2(-(1300 + 38)*num2);
  }, [num2]);

  const handleRightClick2 = () => {
    if(num2 < Math.floor(move2.current.childNodes.length/4)) setNum2((num2) => num2 + 1);
    // console.log(num, "click");
  }

  const handleLeftClick2 = () => {
    if(num2 > 0) setNum2((num2) => num2 - 1);
    // console.log(num);
  }

  // -----------------------------------
  const [productCount, setProductCount] = useState(1);
  const handleIncrement = () => {
    setProductCount(productCount + 1);
  }

  const handleDecrement = () => {
    if(productCount > 0) setProductCount(productCount - 1);
  }

  // -----------------------------------
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    UserApi.isLiked({
      userId: userId,
      productId: productId
    })
    .then((res) => {
      setIsLiked(res.isLiked);
    })
  }, [])

  const handleLikeButton = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      UserApi.removeLikeProduct({
        userId: userId,
        productId: productId
      })
      .then((res) => {
        console.log(res)
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Bỏ thích sản phẩm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      })
    } else {
      UserApi.likeProduct({
        userId: userId,
        productId: productId
      })
      .then((res) => {
        console.log(res)
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Thích sản phẩm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      })
    }
  }

  const handleAddToCart = () => {
    UserApi.addToCart({
      userId: userId,
      productId: productId,
      quantity: productCount
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Thêm vào giỏ hàng thành công',
        showConfirmButton: false,
        timer: 2000
      })
    })
  }

  const { productId } = useParams()

  useEffect(() => {
    ProductApi.getAll()
      .then((res) => {
        setProductList(res)
      })
  }, [])

  useEffect(() => {
    ProductApi.getProductById({productId: productId})
      .then(async (res) => {
        console.log(res);
        await setProduct(res);
      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    
    <div className="pro-detail">
      <ul className="pro-detail__type">
        <li>Sản phẩm</li>
        {
          product?.type.brand && <li>{product?.type.brand}</li>
        }
        {
          product?.type.caseColor && <li>{product?.type.caseColor}</li>
        }
        {
          product?.type.glass && <li>{product?.type.glass}</li>
        }
        {
          product?.type.feature && <li>{product?.type.feature}</li>
        }
      </ul>

      <hr />

      <div className="pro-detail__brief">
        <div className="pro-detail__imgs">
          <img src={product?.image} alt="img" />
          <div className="pro-detail__more-img">
            <img src={product?.image} alt="smallImg" />
            <img src={product?.image} alt="smallImg" />
            <img src={product?.image} alt="smallImg" />
            <img src={product?.image} alt="smallImg" />
          </div>
        </div>

        <div className="pro-detail__more">
          <h3>{product?.name}</h3>
          <div className="pro-detail__status">
            <span>Mã sản phẩm: <b>{product?._id}</b></span>
            <span>Tình trạng: <b>{product?.status}</b></span>
          </div>

          <h3>{numberFormat.format(product?.price)}</h3>

          <div className="dotted-line"></div>

          <p className="pro-detail__description">{product?.description}</p>

          <div className="dotted-line"></div>

          <div className="pro-detail__order">
            <div className="pro-detail__colors">
              <div className="pro-detail__color" style={{backgroundColor: "#353131"}}></div>
              <div className="pro-detail__color" style={{backgroundColor: "#C4C4C4"}}></div>
              <div className="pro-detail__color" style={{backgroundColor: "#A35D49"}}></div>
            </div>

            <div className="pro-detail__quantity">
              <h4>SỐ LƯỢNG</h4>
              <div className="pro-detail__count">
                <span onClick={handleDecrement}>-</span>
                <input type="number" value={productCount} onChange={e => setProductCount(e.current.value)} />
                <span onClick={handleIncrement}>+</span>
              </div>
            </div>
          </div>

          <div className="dotted-line"></div>

          <div className="pro-detail__buttons">
            <div className="add-to-cart">
              <button onClick={userId !== null && handleAddToCart}>THÊM VÀO GIỎ HÀNG</button>
              <button onClick={userId !== null && handleLikeButton}>
                {isLiked ? <FontAwesomeIcon icon={solid('heart')} /> : <FontAwesomeIcon icon={regular('heart')} />}
              </button>
            </div>

            <Link to="/payment">THANH TOÁN</Link>
          </div>
        </div>
      </div>

      {/*--------------------------*/}

      <div className="pro-detail__info">
        <div className="pro-detail__info-titles">
          <div className="pro-detail__info-title">CHI TIẾT</div>
          <div className="pro-detail__info-title">THÔNG SỐ KỸ THUẬT</div>
        </div>

        <div className="pro-detail__info-content">
          <div className="pro-detail__info-first">
            <p>{product?.description}</p>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/deammKgRi7g" 
              title="YouTube video player" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="erect-line"></div>

          <div className="pro-detail__info-second">
            <ul className="pro-detail__info-fetures">
              {fetures.map((item, index) => (
                <li key={index}>{item}:</li>
              ))}
            </ul>
            <ul className="pro-detail__info-figures">
              {figures.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------- */}

      <div className="pro-detail__policies">
        <div className="pro-detail__policy-title">
          CHÍNH SÁCH BẢO HÀNH
        </div>

        <h3>Tất cả các SkinCare tại MeowSkinCare khi bán ra đều kèm theo 2 phiếu bảo hành:</h3>
        <ul>
          <li>1 Phiếu Bảo Hành (hoặc Thẻ Bảo Hành/Sổ Bảo Hành) của hãng có giá trị bảo hành Quốc tế (Thời gian bảo hành tùy theo quy định của từng hãng).</li>
          <li>1 Phiếu Bảo Hành của Hải Triều (Sử dụng để được thay pin miễn phí vĩnh viễn & Hưởng chế độ bảo hành tăng thêm từ 1-4 năm của Hải Triều).</li>
        </ul>
        <h3>Ví dụ: <span>SkinCare tại MeowSkinCare Citizen có chế độ bảo hành chính hãng: máy = 12 tháng, Pin = 12 tháng.</span></h3>
        <ul>
          <li>Khi mua tại Hải Triều, Khách hàng sẽ được tặng thêm thời gian bảo hành từ 4 năm về máy. Pin = Vĩnh Viễn.</li>
          <li>Tổng cộng: Khi mua tại Hải Triều, SkinCare tại MeowSkinCare Citizen sẽ được bảo hành máy = 05 năm, Pin = Vĩnh Viễn.</li>
        </ul> 
        <h3>Lưu ý:</h3>
        <ul>
          <li>Đối với sản phẩm còn trong thời gian bảo hành Quốc Tế: Quý khách có thể đem tới Hải Triều hoặc bất kỳ nhà trung tâm bảo hành nào của hãng được ghi trên phiếu để yêu cầu được kiểm tra SkinCare tại MeowSkinCare.</li>
          <li>Đối với sản phẩm hết thời gian bảo hành Quốc Tế nhưng vẫn trong thời gian bảo hành tại Hải Triều: Quý khách đem SkinCare tại MeowSkinCare kèm Phiếu Bảo Hành của Hải Triều tới bất kỳ chi nhánh nào của Hải Triều để được hướng dẫn và kiểm tra SkinCare tại MeowSkinCare.</li>
        </ul>
        <h3>Điều Kiện Được Bảo Hành</h3>
        <ul>
          <li>Bảo hành chỉ có giá trị khi SkinCare tại MeowSkinCare có Phiếu bảo hành của hãng & Phiếu bảo hành của Hải Triều đi kèm, điền chính xác, đầy đủ các thông tin.</li>
          <li>Phiếu bảo hành phải còn nguyên vẹn, không rách, chấp vá, hoen ố, mờ nhạt.</li>
          <li>Còn trong thời gian bảo hành. Thời gian bảo hành được tính từ ngày mua có ghi trên Phiếu Bảo Hành.</li>
          <li>Chỉ bảo hành thay thế mới cho những linh kiện, phụ tùng bị hỏng - không thay thế bằng một chiếc SkinCare tại MeowSkinCare khác.</li>
        </ul>
        <h3>Điều Kiện Không Được Bảo Hành</h3>
        <ul>
          <li>SkinCare tại MeowSkinCare không có Phiếu bảo hành của hãng và Phiếu bảo hành của Hải Triều đi kèm.</li>
          <li>Các loại dây đeo, khoá, vỏ, màu xi, mặt số, mặt kiếng bị hỏng hóc, vỡ do sử dụng không đúng, tai nạn, lão hóa tự nhiên, va đập, … trong quá trình sử dụng.</li>
          <li>Hỏng hóc do hậu quả gián tiếp của việc sử dụng sai hướng dẫn của hãng có kèm theo SkinCare tại MeowSkinCare.</li>
          <li>Trầy xước về dây hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong quá trình sử dụng. </li>
          <li>Tự ý thay đổi máy móc bên trong, mở ra can thiệp sửa chữa trong thời gian còn bảo hành - Tại những nơi không phải là trung tâm của hãng.</li>
        </ul>

        <div className="pro-detail__policy-title">
          CHÍNH SÁCH ĐỔI TRẢ
        </div>
        <h3>Trong vòng 7 ngày kể từ ngày mua hàng từ MeowSkinCare: <span>Quý khách có thể yêu cầu đổi hàng hoàn toàn miễn phí. Thời hạn 7 ngày được tính theo dấu bưu điện khi Quý khách gửi sản phẩm về cho chúng tôi hoặc thời gian chúng tôi tiếp nhận yêu cầu trực tiếp (tại cửa hàng) của Quý khách.</span></h3>
        <ul>
          <li>Yêu cầu đổi hàng cần được thực hiện trong vòng 7 ngày kể từ ngày Quý khách nhận được hàng.</li>
          <li>Sản phẩm không có dấu hiệu đã qua sử dụng (còn đầy đủ keo dán bảo vệ chống trầy xước mặt SkinCare tại MeowSkinCare, nắp đáy, dây...)</li>
          <li>Sản phẩm không bị dây bẩn, trầy xước, hư hỏng, dính hoá chất hoặc có dấu hiệu cạy mở.</li>
          <li>Các bộ phận, linh kiện, phụ kiện, tài liệu hướng dẫn sử dụng, tài liệu kỹ thuật, quà tặng kèm theo (nếu có), … </li>
          <li>Hộp đựng, bao bì đóng gói sản phẩm còn nguyên vẹn, không bị móp, rách, ố vàng,…</li>
          <li>Chỉ chấp nhận đổi 1 lần duy nhất.</li>
        </ul>

        <div className="pro-detail__policy-title">
          HƯỚNG DẪN MUA HÀNG
        </div>
        <p>Do đặc thù mặt hàng SkinCare tại MeowSkinCare cao cấp nên chúng tôi khuyến khích Quý khách tới tham quan và mua sắm tại hệ thống đại lý cửa hàng của MeowSkinCare.</p>
        <h3>Hệ Thống Chi Nhánh:</h3>
        <p>Trường hợp quý khách ở xa (khu vực không có hệ thống cửa hàng của MeowSkinCare), không có thời gian tới cửa hàng, hay theo yêu cầu của quý khách - Để đảm bảo sự thuận tiện nhất cho quá trình mua hàng của Quý khách, MeowSkinCare sẽ áp dụng hình thức giao hàng và thu tiền tận nhà (COD) (Quý khách chỉ phải trả tiền khi nhận được hàng)</p>
        <ul>
          <li><b>Gọi Ngay:</b> <span style={{color: "#C4745C"}}>1900.6777</span></li>
        </ul>
      </div>

      <hr style={{width: "50%", margin: "0 auto"}}/>

      {/* ------------------------------------- */}

      <div className="pro-detail__relation">
        <h2>SẢN PHẨM LIÊN QUAN</h2>
        <div className="pro-detail__products-wrapper">
          <FontAwesomeIcon icon={solid('angle-left')} onClick={handleLeftClick1}/>
          
          <div className="pro-detail__products">
            <ul 
              className="pro-detail__product-wrap"
              style={{left: trans1 + "px"}}
              ref={move1}
            >
              {productList?.map((item, index) => (
                <li key={index}>
                  <div className="pro-detail__product-frame">
                    <div className="pro-detail__product">
                      <Product
                        productId={item._id}
                        ref={product1}
                        img={item.image}
                        name={item.name}
                        type={item.type}
                        price={item.price}
                      />
                    </div>    
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <FontAwesomeIcon icon={solid('angle-right')} onClick={handleRightClick1}/>
        </div>
      </div>

      <div className="pro-detail__rating">
        <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
        <div className="pro-detail__rating-area">
          <div className="pro-detail__rating-left">
            <div className="pro-detail__rating-total">
              <h2>4.98</h2>
              <div className="pro-detail__rating-stars">
                {Array(5).fill().map((_, i) => (
                  <span key={i}>
                    <FontAwesomeIcon icon={solid('star')} />
                  </span>
                ))}
              </div>
              <span>15 đánh giá của khách hàng</span>
            </div>
            {Array(5).fill().map((_, i) => (
              <div className="pro-detail__rating-detail" key={i}>
                <span>{6 - i - 1}</span><FontAwesomeIcon icon={solid('star')} />
                <div className="pro-detail__rating-count"></div>
                <span>15 đánh giá</span>
              </div>
            ))} 
          </div>

          <div className="erect-line-2"></div>
          
          <div className="pro-detail__rating-right">
            <h3>ĐÁNH GIÁ NGAY</h3>
            {Array(5).fill().map((_, i) => (
              <span key={i}>
                <FontAwesomeIcon icon={regular('star')} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pro-detail__comments">
        <h3>BÌNH LUẬN</h3>
        {Array(3).fill().map((_, i) => (
          <div className="pro-detail__comment" key={i}>
            <h4>Duy An</h4>
            {Array(5).fill().map((_, i) => (
              <span key={i}>
                <FontAwesomeIcon icon={solid('star')} />
              </span>
            ))}
            <p>SkinCare tại MeowSkinCare này thấy hiện giờ nhiều bạn trẻ thường đeo phối với nhiều bộ 
            đồ rất đẹp. Giá chưa đến 1 triệu thì rất đáng để mua.</p>
            <hr style={{color: "#CBCBCB", margin: "50px 0"}}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetail