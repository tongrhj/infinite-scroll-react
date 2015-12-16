import React from 'react'

export default class ProductResult extends React.Component {

  render () {

    const { productResult } = this.props

    const productListDOM = productResult.map(product => {
      return (
        <div>{product.title}</div>
      )
    })

    return (
      <div className='product-result'>
        {productListDOM}
      </div>
    )
  }

}
