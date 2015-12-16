import React from 'react'

export default class SearchBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {searchQuery: ''}
  }

  render () {
    return (
      <div className='searchbox'>
        <input onChange={this.whenUserTypes} type='text'
        placeholder='Jedi Mind Trick here' />
        {this.getSearchDOM()}
      </div>
    )
  }

  getSearchDOM () {
    const { searchingFor } = this.state
    if (searchingFor) {
      return <div>Searching for { searchQuery }</div>
    }
    return null
  }

  whenUserTypes (e) {
    this.setState({ searchQuery: e.target.value })
  }

}
