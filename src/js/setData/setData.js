import setWeatherData from './_setWeatherData';
import setTimeData from './_setTimeData';
import setSearchHref from './_setSearchHref';

const setData = () => {
  setWeatherData();
  setTimeData();
  setSearchHref();
};

export default setData;
