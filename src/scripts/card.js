import API from "./API"

const card = {
  cardBuilder() {

    API.getAllStations()
      .then(function (station) {
        const dashboard = document.querySelector("#dashboard");
        dashboard.textContent = "";

        station.forEach(function (eachStation) {

          let displayCard = document.createElement("span")
          displayCard.setAttribute("class", "displayCard")
          let cardTitle = document.createElement("p")
          cardTitle.textContent = "STATION TITLE"
          let cardSummary = document.createElement("p")
          cardSummary.textContent = "Brief Summary"
          let addButton = document.createElement("button")
          addButton.textContent = "ADD"
          addButton.setAttribute("class", "displayCardAddButton")


          dashboard.appendChild(displayCard)
          displayCard.appendChild(cardTitle)
          displayCard.appendChild(cardSummary)
          displayCard.appendChild(addButton)

          return displayCard
        })
      })
  }
}

export default card