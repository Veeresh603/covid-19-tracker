import React from 'react';
import Chart from './components/Chart/Chart'
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css'
import { fetchData } from './api'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }
  
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({
      data:fetchedData
    })
  }

  

 
  render() { 
    const { data } = this.state
    return ( 
      <div className={styles.container}>
        <Cards data={data} />
      
      <CountryPicker />
      <Chart />
      </div>
     );
  }
}

export default App
