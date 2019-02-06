const API = {
  getAllStations() {
    return fetch("http://localhost:8088/stations")
      .then(response => response.json())
  },
  getStation(stationId) {
    return fetch(`http://localhost:8088/stations/${stationId}`)
      .then(response => response.json())
  }
}
export default API



