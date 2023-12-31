function getWeather(woeid, city_name, lat, lon, user_ip) {
  return {
    by: "default",
    valid_key: true,
    test: true,
    results: {
      temp: 21,
      date: "24/10/2023",
      time: "00:16",
      condition_code: "28",
      description: "Tempo nublado",
      currently: "noite",
      cid: "",
      city: "São Paulo, SP",
      img_id: "28n",
      humidity: 90,
      cloudiness: 65,
      rain: 0,
      wind_speedy: "1.74 km/h",
      wind_direction: 49,
      wind_cardinal: "NE",
      sunrise: "05:26 am",
      sunset: "06:15 pm",
      moon_phase: "first_quarter",
      condition_slug: "cloudly_night",
      city_name: "São Paulo",
      timezone: "-03:00",
      forecast: [
        {
          date: "24/10",
          weekday: "Ter",
          max: 33,
          min: 20,
          cloudiness: 53,
          rain: 0,
          rain_probability: 46,
          wind_speedy: "5.62 km/h",
          description: "Tempo nublado",
          condition: "cloudly_day",
        },
        {
          date: "25/10",
          weekday: "Qua",
          max: 25,
          min: 19,
          cloudiness: 86,
          rain: 9.86,
          rain_probability: 100,
          wind_speedy: "5.32 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "26/10",
          weekday: "Qui",
          max: 22,
          min: 18,
          cloudiness: 99,
          rain: 10.24,
          rain_probability: 100,
          wind_speedy: "3.77 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "27/10",
          weekday: "Sex",
          max: 27,
          min: 18,
          cloudiness: 94,
          rain: 17.6,
          rain_probability: 100,
          wind_speedy: "4 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "28/10",
          weekday: "Sáb",
          max: 29,
          min: 19,
          cloudiness: 100,
          rain: 6.87,
          rain_probability: 100,
          wind_speedy: "7.89 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "29/10",
          weekday: "Dom",
          max: 26,
          min: 21,
          cloudiness: 100,
          rain: 2.3,
          rain_probability: 100,
          wind_speedy: "5.68 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "30/10",
          weekday: "Seg",
          max: 21,
          min: 17,
          cloudiness: 100,
          rain: 27.93,
          rain_probability: 100,
          wind_speedy: "4.32 km/h",
          description: "Chuva",
          condition: "rain",
        },
        {
          date: "31/10",
          weekday: "Ter",
          max: 21,
          min: 17,
          cloudiness: 100,
          rain: 0.31,
          rain_probability: 51,
          wind_speedy: "3.5 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "01/11",
          weekday: "Qua",
          max: 23,
          min: 17,
          cloudiness: 93,
          rain: 0.62,
          rain_probability: 36,
          wind_speedy: "4.72 km/h",
          description: "Chuvas esparsas",
          condition: "rain",
        },
        {
          date: "02/11",
          weekday: "Qui",
          max: 27,
          min: 17,
          cloudiness: 48,
          rain: 0,
          rain_probability: 21,
          wind_speedy: "4.12 km/h",
          description: "Parcialmente nublado",
          condition: "cloud",
        },
      ],
      cref: "10d434",
    },
    execution_time: 0,
    from_cache: true,
  };
}

module.exports = {
  getWeather,
};
