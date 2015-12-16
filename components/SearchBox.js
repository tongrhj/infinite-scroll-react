import React from 'react'

export default class SearchBox extends React.Component {

  render () {
    return (
      <div className='search-box'>
        <input onChange={ ::this.props.whenUserTypes } type='text'
        placeholder='Jedi Mind Trick here' />
      </div>
    )
  }

}
