import React, {Component} from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value })
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filterRobots)
    }
        
    render() {
        return(
            <div className='tc'>
                <h1 className='tc'>Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Cardlist robots={this.state.robots}/>
            </div>
        );
    
    }
}

export default App;