import { makeObservable, observable } from "mobx";
import axios from "axios";
class tripStore {
  constructor() {
    makeObservable(this, {
      trips: observable,
      tripGet: action,
      tripUpdate: action,
      tripDelete: action,
      tripCreate: action,
      fetchTrip: action,
    });
  }

  tripGet = async () => {
    try {
      const response = await axios.get(
        `mongodb+srv://admin:admin123@cluster0.wjclw.mongodb.net/test`
      );
      this.trips = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchTrip = async (tripId) => {
    this.trips = this.trips.filter((trip) => trip.id !== tripId);
    try {
      const response = await axios.get(
        `mongodb+srv://admin:admin123@cluster0.wjclw.mongodb.net/test/${tripId}`,
        tripId
      );
      this.trips = response.data;
      this.trips.push(response.data);
    } catch (error) {}
  };

  tripCreate = async (trip) => {
    trip.id = this.trips[this.trips.length - 1].id + 1;
    trip.slug = slugify(trip.title);
    this.trips.push(trip);
    try {
      const response = await axios.post(
        `mongodb+srv://admin:admin123@cluster0.wjclw.mongodb.net/test`,
        trip
      );
    } catch (error) {
      console.log(error);
    }
  };

  tripDelete = async (tripId) => {
    this.trips = this.trips.filter((trip) => trip.id !== tripId);
    try {
      const response = await axios.delete(
        `mongodb+srv://admin:admin123@cluster0.wjclw.mongodb.net/test/${tripId}`,
        tripId
      );
      this.trips = response.data;
      console.log(response.data);
      this.trips.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  tripUpdate = async (updatedTrip) => {
    const room = this.rooms.find((room) => room.id === updatedTrip.id);
    room.title = updatedTrip.title;
    room.description = updatedTrip.description;
    room.image = updatedTrip.image;
    try {
      const response = await axios.put(
        `mongodb+srv://admin:admin123@cluster0.wjclw.mongodb.net/test/${updatedTrip.id}`,
        updatedTrip
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const tripShop = new tripStore();
tripShop.tripGet();
export default new tripStore();
