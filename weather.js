const options = { method: "GET", headers: { accept: "application/json" } };
let location = 'San Diego'
fetch(
  `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=BRiOsCRG4yUfTzQUNH0SfmTi6DDEGff4`
)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  .then(response => response.json())
  .then(response => {
    if (response.data && response.data.values) {
    const temperature = response.data.values.temperature;
    const humidity = response.data.values.humidity;
    const windSpeed = response.data.values.windSpeed;
    console.log(`Temperature: ${(temperature * 9/5) + 32} and Humidity: ${humidity}, windSpeed ${windSpeed}`);
    } else{
        console.log("Data not in your file...")
    }
  })
  .catch(err => console.error(err));