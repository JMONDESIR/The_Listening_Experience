(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const API = {
  getAllStations() {
    return fetch("http://localhost:8088/stations").then(response => response.json());
  },

  getStation(stationId) {
    return fetch(`http://localhost:8088/stations/${stationId}`).then(response => response.json());
  }

};
var _default = API;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _API = _interopRequireDefault(require("./API"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const card = {
  cardBuilder() {
    _API.default.getAllStations().then(function (station) {
      const dashboard = document.querySelector("#dashboard");
      dashboard.textContent = "";
      station.forEach(function (eachStation) {
        let displayCard = document.createElement("span");
        displayCard.setAttribute("class", "displayCard");
        let cardTitle = document.createElement("p");
        cardTitle.textContent = "STATION TITLE";
        let cardSummary = document.createElement("p");
        cardSummary.textContent = "Brief Summary";
        let addButton = document.createElement("button");
        addButton.textContent = "ADD";
        addButton.setAttribute("class", "displayCardAddButton");
        dashboard.appendChild(displayCard);
        displayCard.appendChild(cardTitle);
        displayCard.appendChild(cardSummary);
        displayCard.appendChild(addButton);
        return displayCard;
      });
    });
  }

};
var _default = card;
exports.default = _default;

},{"./API":1}],3:[function(require,module,exports){
"use strict";

var _API = _interopRequireDefault(require("./API"));

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NAVIGATION BAR, MENU AND HEADER
const header = document.querySelector("#header");
const navBar = document.createElement("div");
navBar.setAttribute("class", "menu__bar");
let welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = "Welcome, Joel";
const menu = document.createElement("ul");
const home = document.createElement("li");
const library = document.createElement("li");
home.textContent = "HOME";
library.textContent = "LIBRARY";
header.appendChild(navBar);
navBar.appendChild(welcomeMessage);
navBar.appendChild(menu);
menu.appendChild(home);
menu.appendChild(library); // DASHBOARD

const dashboard = document.querySelector("#dashboard");
const dashboardHeading = document.createElement("h2");
dashboardHeading.textContent = "STATIONS";
dashboard.appendChild(dashboardHeading);

_card.default.cardBuilder();

_API.default.getAllStations();

},{"./API":1,"./card":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0FQSS5qcyIsIi4uL3NjcmlwdHMvY2FyZC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sR0FBRyxHQUFHO0FBQ1YsRUFBQSxjQUFjLEdBQUc7QUFDZixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0osSUFESSxDQUNDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURiLENBQVA7QUFFRCxHQUpTOztBQUtWLEVBQUEsVUFBVSxDQUFDLFNBQUQsRUFBWTtBQUNwQixXQUFPLEtBQUssQ0FBRSxrQ0FBaUMsU0FBVSxFQUE3QyxDQUFMLENBQ0osSUFESSxDQUNDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURiLENBQVA7QUFFRDs7QUFSUyxDQUFaO2VBVWUsRzs7Ozs7Ozs7Ozs7QUNWZjs7OztBQUVBLE1BQU0sSUFBSSxHQUFHO0FBQ1gsRUFBQSxXQUFXLEdBQUc7QUFFWixpQkFBSSxjQUFKLEdBQ0csSUFESCxDQUNRLFVBQVUsT0FBVixFQUFtQjtBQUN2QixZQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLE1BQUEsU0FBUyxDQUFDLFdBQVYsR0FBd0IsRUFBeEI7QUFFQSxNQUFBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLFVBQVUsV0FBVixFQUF1QjtBQUVyQyxZQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFsQjtBQUNBLFFBQUEsV0FBVyxDQUFDLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsYUFBbEM7QUFDQSxZQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBLFFBQUEsU0FBUyxDQUFDLFdBQVYsR0FBd0IsZUFBeEI7QUFDQSxZQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFsQjtBQUNBLFFBQUEsV0FBVyxDQUFDLFdBQVosR0FBMEIsZUFBMUI7QUFDQSxZQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBLFFBQUEsU0FBUyxDQUFDLFdBQVYsR0FBd0IsS0FBeEI7QUFDQSxRQUFBLFNBQVMsQ0FBQyxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLHNCQUFoQztBQUdBLFFBQUEsU0FBUyxDQUFDLFdBQVYsQ0FBc0IsV0FBdEI7QUFDQSxRQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFNBQXhCO0FBQ0EsUUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixXQUF4QjtBQUNBLFFBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsU0FBeEI7QUFFQSxlQUFPLFdBQVA7QUFDRCxPQW5CRDtBQW9CRCxLQXpCSDtBQTBCRDs7QUE3QlUsQ0FBYjtlQWdDZSxJOzs7Ozs7QUNsQ2Y7O0FBQ0E7Ozs7QUFFQTtBQUNBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsV0FBN0I7QUFFQSxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFyQjtBQUNBLGNBQWMsQ0FBQyxXQUFmLEdBQTZCLGVBQTdCO0FBRUEsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBYjtBQUNBLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFoQjtBQUVBLElBQUksQ0FBQyxXQUFMLEdBQW1CLE1BQW5CO0FBQ0EsT0FBTyxDQUFDLFdBQVIsR0FBc0IsU0FBdEI7QUFFQSxNQUFNLENBQUMsV0FBUCxDQUFtQixNQUFuQjtBQUNBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLGNBQW5CO0FBQ0EsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsSUFBbkI7QUFDQSxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFqQjtBQUNBLElBQUksQ0FBQyxXQUFMLENBQWlCLE9BQWpCLEUsQ0FFQTs7QUFDQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBekI7QUFDQSxnQkFBZ0IsQ0FBQyxXQUFqQixHQUErQixVQUEvQjtBQUNBLFNBQVMsQ0FBQyxXQUFWLENBQXNCLGdCQUF0Qjs7QUFFQSxjQUFLLFdBQUw7O0FBQ0EsYUFBSSxjQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQVBJID0ge1xuICBnZXRBbGxTdGF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvc3RhdGlvbnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgfSxcbiAgZ2V0U3RhdGlvbihzdGF0aW9uSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9zdGF0aW9ucy8ke3N0YXRpb25JZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBUElcblxuXG5cbiIsImltcG9ydCBBUEkgZnJvbSBcIi4vQVBJXCJcblxuY29uc3QgY2FyZCA9IHtcbiAgY2FyZEJ1aWxkZXIoKSB7XG5cbiAgICBBUEkuZ2V0QWxsU3RhdGlvbnMoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0YXRpb24pIHtcbiAgICAgICAgY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXNoYm9hcmRcIik7XG4gICAgICAgIGRhc2hib2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgc3RhdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChlYWNoU3RhdGlvbikge1xuXG4gICAgICAgICAgbGV0IGRpc3BsYXlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgICBkaXNwbGF5Q2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc3BsYXlDYXJkXCIpXG4gICAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJTVEFUSU9OIFRJVExFXCJcbiAgICAgICAgICBsZXQgY2FyZFN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgIGNhcmRTdW1tYXJ5LnRleHRDb250ZW50ID0gXCJCcmllZiBTdW1tYXJ5XCJcbiAgICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREXCJcbiAgICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaXNwbGF5Q2FyZEFkZEJ1dHRvblwiKVxuXG5cbiAgICAgICAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoZGlzcGxheUNhcmQpXG4gICAgICAgICAgZGlzcGxheUNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKVxuICAgICAgICAgIGRpc3BsYXlDYXJkLmFwcGVuZENoaWxkKGNhcmRTdW1tYXJ5KVxuICAgICAgICAgIGRpc3BsYXlDYXJkLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcblxuICAgICAgICAgIHJldHVybiBkaXNwbGF5Q2FyZFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYXJkIiwiaW1wb3J0IEFQSSBmcm9tIFwiLi9BUElcIlxuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY2FyZFwiXG5cbi8vIE5BVklHQVRJT04gQkFSLCBNRU5VIEFORCBIRUFERVJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5uYXZCYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51X19iYXJcIilcblxubGV0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG53ZWxjb21lTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSwgSm9lbFwiXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbmNvbnN0IGxpYnJhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcblxuaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiXG5saWJyYXJ5LnRleHRDb250ZW50ID0gXCJMSUJSQVJZXCJcblxuaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcilcbm5hdkJhci5hcHBlbmRDaGlsZCh3ZWxjb21lTWVzc2FnZSlcbm5hdkJhci5hcHBlbmRDaGlsZChtZW51KVxubWVudS5hcHBlbmRDaGlsZChob21lKVxubWVudS5hcHBlbmRDaGlsZChsaWJyYXJ5KVxuXG4vLyBEQVNIQk9BUkRcbmNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGFzaGJvYXJkXCIpXG5jb25zdCBkYXNoYm9hcmRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG5kYXNoYm9hcmRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJTVEFUSU9OU1wiXG5kYXNoYm9hcmQuYXBwZW5kQ2hpbGQoZGFzaGJvYXJkSGVhZGluZylcblxuY2FyZC5jYXJkQnVpbGRlcigpXG5BUEkuZ2V0QWxsU3RhdGlvbnMoKSJdfQ==
