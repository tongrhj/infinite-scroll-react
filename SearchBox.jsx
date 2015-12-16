const HelloMessage = React.createClass({
  render () {
    return <div>{this.props.name} - {this.props.isAwesome.toString()}</div>
  }
})

class SearchBox extends React.Component {
  getInitialState () {
    return {searchQuery: ''}
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
    this.setState({
      searchQuery: e.target.value
    })
  }
}

ReactDOM.render(
  <SearchBox />,
  document.querySelector('#app')
)
