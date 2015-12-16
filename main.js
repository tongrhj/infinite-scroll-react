import React from 'react'
import ReactDOM from 'react-dom'
import SearchBox from './components/SearchBox'
import ProductResult from './components/ProductResult'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      searchQuery: '',
      searchResult: [],
    }
  }

  render () {
    return (
      <div className='app-wrapper'>
        <h1>Redmart You Are Looking For</h1>
        <SearchBox whenUserTypes={ ::this.whenUserTypes } />
        { this.getSearchDOM() }
        <ProductResult displayResults={ this.state.searchResult } />
      </div>
    )
  }

  getSearchDOM () {
    const { searchQuery } = this.state
    if (searchQuery) {
      return <div>Searching for { searchQuery }</div>
    }
    return null
  }

  whenUserTypes (e) {
    const query = e.target.value
    const that = this
    this.setState({ searchQuery: query })
    fetch('https://api.redmart.com/v1.5.6/catalog/search?q=' + query + '&pageSize=18&sort=1')
      .then((res) => res.json())
      .then((data) => that.setState({
        searchQuery: '',
        searchResult: data.products
      }))

  }
}

// Mounting App
ReactDOM.render(
  <App />, document.querySelector('#app')
)
