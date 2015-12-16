import React from 'react'

export default class ProductResult extends React.Component {

  render () {

    const { displayResults } = this.props

    const productListDOM = displayResults.map(product => {
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
