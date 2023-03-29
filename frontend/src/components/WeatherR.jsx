import React from 'react';

class WeatherR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTemp: '',
            humidity: '',
            cityName: '',
           
        }
    }

    async fetchWeather() {
        let response = await fetch('http://localhost:5000/weather');
        await response.json().then(data => {
            this.setState({
                currentTemp: Math.round(data.main.temp ) + '°C',
                humidity: data.main.humidity + '%',
                cityName: data.name,
                
            })
        })
    }

    componentDidMount() {
        this.fetchWeather();
    }

    render() {
        return (
            <div>
                <p>Current temperature: {this.state.currentTemp}</p>
                <p>Humidity: {this.state.humidity}</p>
                <p>Location: {this.state.cityName}</p>
                <img src={this.state.img}/>
            </div>
        )
    }
}

export default WeatherR;