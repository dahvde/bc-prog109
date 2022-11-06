class Hotel {
  static count = 0;

  // initializes the hotel object
  constructor(name, rooms, booked) {
    this.hotelId = ++Hotel.count;
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.hotelElem = document.createElement("div");
    this.hotelElem.id = `hotel-${this.hotelId}`;
    this.hotelElem.className = "hotel";

    // updates the hotel element on click
    this.hotelElem.onclick = () => {
      this.incrementBooked();
      this.update();
      this.render();
    };

    this.update();
    document.getElementById("info").appendChild(this.hotelElem);
  }

  // updates the hotel element
  update() {
    this.hotelElem.innerHTML = `
      <h3>${this.name}</h3>
      <p>Rooms: ${this.rooms}</p>
      <p class='booked'>Booked: ${this.booked}</p>
    `;
  }

  // renders hotel element to the DOM
  render() {
    document.getElementById(`hotel-${this.hotelId}`).innerHTML =
      this.hotelElem.innerHTML;
  }

  // increments the number of booked rooms
  incrementBooked() {
    return this.booked < this.rooms ? ++this.booked : this.booked;
  }

  // decrements the number of booked rooms
  decrementBooked() {
    return this.booked > 0 ? ++this.booked : this.booked;
  }
}

// Create multiple hotel objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);
var sunsetHotel = new Hotel("Sunset", 86, 10);
var westinHotel = new Hotel("Westin", 142, 53);
