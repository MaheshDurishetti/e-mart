import React, { useState } from 'react'
import { acData } from '../data/ac'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const ACPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company))
        } else {
            setSelectedProduct([...selectedProduct, company])
        }
    }

    const uniqueCompanies = [...new Set(acData.map(item => item.company))]

    const filteredProducts = selectedProduct.length === 0
        ? acData
        : acData.filter(item => selectedProduct.includes(item.company))

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
                            <Link to={`/AC/${item.id}`}>
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

export default ACPage
