import React, { useState, useEffect } from 'react'
import './ProductCreate.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import ProductApi from '../../../Apis/ProductApi'

function ProductCreate() {
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [discount, setDiscount] = useState()
  const [quantity, setQuantity] = useState()
  const [status, setStatus] = useState()
  const [company, setCompany] = useState()
  const [brand, setBrand] = useState()
  const [priceRange, setPriceRange] = useState()
  const [albert, setAlbert] = useState()
  const [glass, setGlass] = useState()
  const [energyCore, setEnergyCore] = useState()
  const [interfaceColor, setInterfaceColor] = useState()
  const [caseColor, setCaseColor] = useState()
  const [shape, setShape] = useState()
  const [size, setSize] = useState()
  const [waterRessitance, setWaterRessitance] = useState()
  const [feature, setFeature] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCreateProduct = () => {
    ProductApi.createProduct({
      name: name,
      image: image,
      description: description,
      price: price,
      discount: discount,
      quantity: quantity,
      status: status,
      company: company,
      brand: brand,
      priceRange: priceRange,
      albert: albert,
      glass: glass,
      energyCore: energyCore,
      interfaceColor: interfaceColor,
      caseColor: caseColor,
      shape: shape,
      size: size,
      waterRessitance: waterRessitance,
      feature: feature
    })
    .then((res) => {
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Tạo sản phẩm thành công',
        showConfirmButton: false,
        timer: 2000
      })
      navigate('/admin/product-management')
    })
  }

  return (
    <form className="productMng-create">
      <div className="productMng-create-wrapper">
        <h1>TẠO SẢN PHẨM</h1>
        <p>Tạo sản phẩm mới UITWatch ở đây</p>
      </div>
      <div className="productMng-create-form">
        <div className="productMng-create-item">
          <p>Tên sản phẩm</p>
          <input type="text" name="name" placeholder="Nhập tên sản phẩm ..." onChange={e => setName(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Link hình ảnh</p>
          <input type="text" name="image" placeholder="Nhập link hình ảnh sản phẩm ..." onChange={e => setImage(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Mô tả</p>
          <input type="text" name="description" placeholder="Nhập mô tả sản phẩm ..." onChange={e => setDescription(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Giá sản phẩm</p>
          <input type="number" name="price" placeholder="Nhập giá sản phẩm ..." onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Giá sản phẩm sau khi giảm</p>
          <input type="number" name="discount" placeholder="Nhập giá sản phẩm sau khi giảm nếu có ..." onChange={e => setDiscount(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Số lượng</p>
          <input type="number" name="quantity" placeholder="Nhập số lượng ..." onChange={e => setQuantity(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Tình trạng</p>
          <input type="text" name="status" placeholder="Nhập tình trạng ..." onChange={e => setStatus(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Công ty sản xuất</p>
          <input type="text" name="company" placeholder="Nhập công ty sản xuất ..." onChange={e => setCompany(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Thương hiệu</p>
          <select name="brand" onChange={e => setBrand(e.target.value)}>
            <option value="">Chọn thương hiệu</option>
            <option value="Rolex">Rolex</option>
            <option value="Seiko">Seiko</option>
            <option value="Casio">Casio</option>
            <option value="Daniel Wellington">Daniel Wellington</option>
            <option value="Citizen">Citizen</option>
            <option value="Omega">Omega</option>
            <option value="Hublot">Hublot</option>
            <option value="G-shock">G-shock</option>
            <option value="Epos - Thụy Sĩ">Epos - Thụy Sĩ</option>
            <option value="Phillipe Auguste">Phillipe Auguste</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Tầm giá</p>
          <select name="priceRange" onChange={e => setPriceRange(e.target.value)}>
            <option value="">Chọn tầm giá</option>
            <option value="0đ - 2.000.000đ">0đ - 2.000.000đ</option>
            <option value="2.000.000đ - 4.000.000đ">2.000.000đ - 4.000.000đ</option>
            <option value="4.000.000đ - 6.000.000đ">4.000.000đ - 6.000.000đ</option>
            <option value="6.000.000đ - 8.000.000đ">6.000.000đ - 8.000.000đ</option>
            <option value="8.000.000đ - 10.000.000đ">8.000.000đ - 10.000.000đ</option>
            <option value="10.000.000đ +">10.000.000đ +</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Chất liệu dây</p>
          <select name="albert" onChange={e => setAlbert(e.target.value)}>
            <option value="">Chọn chất liệu dây</option>
            <option value="Dây kim loại">Dây kim loại</option>
            <option value="Dây vải">Dây vải</option>
            <option value="Dây da">Dây da</option>
            <option value="Dây Titanium">Dây Titanium</option>
            <option value="Dây nhựa">Dây nhựa</option>
            <option value="Dây da cá sấu">Dây da cá sấu</option>
            <option value="Dây Cao Su">Dây Cao Su</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Chất liệu mặt kính</p>
          <select name="glass" onChange={e => setGlass(e.target.value)}>
            <option value="">Chọn chất liệu mặt kính</option>
            <option value="Kính cứng">Kính cứng</option>
            <option value="Kính Sapphire">Kính Sapphire</option>
            <option value="Kính khoáng">Kính khoáng</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Bộ máy năng lượng</p>
          <select name="energyCore" onChange={e => setEnergyCore(e.target.value)}>
            <option value="">Chọn bộ máy năng lượng</option>
            <option value="Pin (Quartz)">Pin (Quartz)</option>
            <option value="Cơ (Automatic)">Cơ (Automatic)</option>
            <option value="Năng lượng ánh sáng">Năng lượng ánh sáng</option>
            <option value="Vừa pin - vừa tự động">Vừa pin - vừa tự động</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Màu mặt số</p>
          <select name="interfaceColor" onChange={e => setInterfaceColor(e.target.value)}>
            <option value="">Chọn màu mặt số</option>
            <option value="Trắng">Trắng</option>
            <option value="Vàng">Vàng</option>
            <option value="Xà cừ">Xà cừ</option>
            <option value="Xanh">Xanh</option>
            <option value="Đen">Đen</option>
            <option value="Đính đá">Đính đá</option>
            <option value="Xám">Xám</option>
            <option value="Nâu">Nâu</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Màu vỏ</p>
          <select name="caseColor" onChange={e => setCaseColor(e.target.value)}>
            <option value="">Chọn màu vỏ</option>
            <option value="Kim loại">Kim loại</option>
            <option value="Vàng">Vàng</option>
            <option value="Vàng hồng">Vàng hồng</option>
            <option value="Đen">Đen</option>
            <option value="Trắng">Trắng</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Hình dạng mặt số</p>
          <select name="shape" onChange={e => setShape(e.target.value)}>
            <option value="">Chọn hình dạng mặt số</option>
            <option value="Tròn">Tròn</option>
            <option value="Đặc biệt">Đặc biệt</option>
            <option value="Chữ nhật">Chữ nhật</option>
            <option value="Vuông">Vuông</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Kích thước mặt số</p>
          <select name="size" onChange={e => setSize(e.target.value)}>
            <option value="">Chọn kích thước mặt số</option>
            <option value="<29 mm">{"<"} 29 mm</option>
            <option value="30 - 34 mm">30 - 34 mm</option>
            <option value="35 - 39 mm">35 - 39 mm</option>
            <option value="40 - 43 mm">40 - 43 mm</option>
            <option value="> 44 mm"> {">"} 44 mm</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Mức chống nước</p>
          <select name="waterRessitance" onChange={e => setWaterRessitance(e.target.value)}>
            <option value="">Chọn mức chống nước</option>
            <option value="Đi mưa nhỏ (3 ATM)">Đi mưa nhỏ (3 ATM)</option>
            <option value="Đi tắm (5 ATM)">Đi tắm (5 ATM)</option>
            <option value="Đi bơi (10 ATM)">Đi bơi (10 ATM)</option>
            <option value="Lặn biển (20 ATM)">Lặn biển (20 ATM)</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Tính năng</p>
          <select name="feature" onChange={e => setFeature(e.target.value)}>
            <option value="">Chọn tính năng</option>
            <option value="Chronograph">Chronograph</option>
            <option value="World time">World time</option>
            <option value="Dạ quang">Dạ quang</option>
            <option value="Kính vòm">Kính vòm</option>
            <option value="Open heart">Open heart</option>
            <option value="La bàn">La bàn</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Đo độ cao">Đo độ cao</option>
          </select>
        </div>
      </div>
      <div className="productMng-create-func">
        <div onClick={handleCreateProduct}>TẠO</div>
        <Link className="productMng-create-func--cancel" to="/admin/productMng-management">HỦY</Link>
      </div>
    </form>
  )
}

export default ProductCreate
