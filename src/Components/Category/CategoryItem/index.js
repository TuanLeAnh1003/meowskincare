import React, { useState } from 'react'
import './CategoryItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function CategoryItem({title, contentList, cate, setBrand, setAlbert, setPriceRange, setGlass, setEnergyCore, setInterfaceColor, setCaseColor, setShape, setSize, setWaterRessitance, setFeature}) {
  const [cateName, setCateName] = useState()

  const handleClickCate = (e) => {
    switch (cate) {
      case 0:
        setCateName('brand')
        setBrand(e.target.value);
        break;
      case 1:
        setCateName('albert')
        setAlbert(e.target.value);
        break;
      case 2:
        setCateName('priceRange')
        setPriceRange(e.target.value);
        break;
      case 3:
        setCateName('glass')
        setGlass(e.target.value);
        break;
      case 4:
        setCateName('energyCore')
        setEnergyCore(e.target.value);
        break;
      case 5:
        setCateName('interfaceColor')
        setInterfaceColor(e.target.value);
        break;
      case 6:
        setCateName('caseColor')
        setCaseColor(e.target.value);
        break;
      case 7:
        setCateName('shape')
        setShape(e.target.value);
        break;
      case 8:
        setCateName('size')
        setSize(e.target.value);
        break;
      case 9:
        setCateName('waterRessitance')
        setWaterRessitance(e.target.value);
        break;
      case 10:
        setCateName('feature')
        setFeature(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="sale__category-item">
      <div className="sale__category-item-title-wrap">
        <div className="sale__category-item-title">{title}</div>
        {/* <FontAwesomeIcon className="sale__category-item-title-icon" icon="fa-solid fa-angle-down" /> */}
        <FontAwesomeIcon className="sale__category-item-title-icon" icon={solid('angle-up')} />
      </div>
      {contentList.map((element, index) => (
        <div style={{display: 'flex'}}>
          <input type="radio" key={index} className="sale__category-item-content" name={cateName} value={element} onClick={e => handleClickCate(e)}/>
          <label>{element}</label>
        </div>
      ))}
    </div>
  )
}

export default CategoryItem
