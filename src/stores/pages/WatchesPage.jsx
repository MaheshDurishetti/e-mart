import React, { useState } from 'react'
import { watchData } from '../data/watchData'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company))
        } else {
            setSelectedProduct([...selectedProduct, company])
        }
    }

    const uniqueCompanies = [...new Set(watchData.map(item => item.company))]

    const filteredProducts = selectedProduct.length === 0
        ? watchData
        : watchData.filter(item => selectedProduct.includes(item.company))

    return (
        <>
            <NavBar />
            <div className="fullpage">
              
                <div className="proselected">
                    {uniqueCompanies.map((company, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.includes(company)}
                                    onChange={() => companyHandler(company)}
                                />
                                {company}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProducts.map((item) => (
                        <div key={item.id}>
                            <Link to={`/watches/${item.id}`}>
                                <div className='pageImg'>
                                    <img src={item.image} alt='' />
                                </div>
                            </Link>
                            <div className='proModel'>
                                {item.company}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MobilePage
