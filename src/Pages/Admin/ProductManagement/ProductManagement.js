import React, { useState, useEffect } from 'react';
import './ProductManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import ProductApi from '../../../Apis/ProductApi'
import { Link } from 'react-router-dom'

function ProductManagement() {
  const [productList, setProductList] = useState()
  const [hideDeletePopup, setHideDeletePopup] = useState()
  const [removeProduct, setRemoveProduct] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    ProductApi.getAll()
    .then(async (res) => {
      console.log(res);
      await setProductList(res)
    })
  }, [])

  const handleDeleteProduct = () => {
    ProductApi.removeProduct({
      productId: removeProduct
    })
    .then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="prod-mng">
      <h1>Quản lí sản phẩm</h1>
      <div className="prod-title">
        <Link to='product-create'><b>TẠO SẢN PHẨM</b></Link>
        <div className="prod-search">
          <input type="text" placeholder='Tìm sản phẩm ...'/>
          <div className="prod-icon">
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </div>
          
        </div>

      </div>
      
      <table>
        <thead>
          <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tình trạng</th>
              <th>Ngày thêm</th>
              <th>Giảm giá</th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((product, i) => (
            <tr key={i}>
              <td>
                {
                  product._id.length > 10 ? (
                    `${product._id.slice(0, 10)}...`
                ) : (
                  product._id
                )
                }
              </td>
              <td>
                {
                  product.name.length > 10 ? (
                    `${product.name.slice(0, 10)}...`
                ) : (
                  product.name
                )
                }
              </td>
              <td><img style={{maxWidth: '50px'}} src={product.image} alt="watch-img"/></td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.status}</td>
              <td>{product.productDate}</td>
              <td>{product.discount}</td>
              <td>
                <Link to={`product-update/${product._id}`}>
                  <FontAwesomeIcon icon={solid('pen')} style={{color: '#785044'}} />{"  "}
                </Link>
                <FontAwesomeIcon icon={solid('trash')} style={{cursor: 'pointer'}} onClick={e => {setHideDeletePopup(true); setRemoveProduct(product._id)}} />
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      {
        hideDeletePopup && (
          <div className="product-mng-delete-wrapper" onClick={e => setHideDeletePopup(false)}>
            <div className="product-mng-delete" onClick={e => e.stopPropagation()}>
              <h3>Xóa sản phẩm</h3>
              <FontAwesomeIcon className="product-mng-delete-icon" icon={solid('circle-xmark')} onClick={e => setHideDeletePopup(false)}/>
              <p>Bạn có chắc mình muốn xóa sản phẩm này?</p>
              <div style={{backgroundColor: 'transparent'}}>
                <div onClick={e => setHideDeletePopup(false)}>
                  Hủy bỏ
                </div>
                <div onClick={handleDeleteProduct}>
                  Xóa luôn
                </div> 
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductManagement