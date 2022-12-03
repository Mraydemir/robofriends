import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll' ;


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> { return response.json() })
        .then(users => { this.setState({ robots: users}) })
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
     
    }
        
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return !this.state.robots.length ?
            <h1>loading</h1> :

        (
            <div className='tc'>
                <h1 className='tc'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                  <Cardlist robots={filterRobots}/>
                </Scroll>
            </div>
        );
        
    }
}

export default App;