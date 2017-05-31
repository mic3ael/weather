import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/map';

const UNIT_TEMP = 'K';
const UNIT_PRESSURE = 'hPa';
const UNIT_HUMIDITY = '%';

class WeatherList extends Component {
  renderWeather(cityData) {

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td>
          <Chart data={temps} color="orange" units={UNIT_TEMP}/>
        </td>
        <td>
          <Chart data={pressure} color="green" units={UNIT_PRESSURE}/>
        </td>
        <td>
          <Chart data={humidities} color="black" units={UNIT_HUMIDITY}/>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>{`Temperature (${UNIT_TEMP})`}</th>
            <th>{`Pressure (${UNIT_PRESSURE})`}</th>
            <th>{`Humidity (${UNIT_HUMIDITY})`}</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
