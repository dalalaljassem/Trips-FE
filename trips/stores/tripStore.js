import { makeAutoObservable } from "mobx";
import instance from "../axios/instance";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  tripGet = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
    } catch (error) {
      console.log("TripStore -> tripGet -> error", error);
    }
  };

  fetchTrip = async (tripId) => {
    this.trips = this.trips.filter((trip) => trip._id !== tripId);
    try {
      const response = await axios.get(`/${tripId}`, tripId);
      this.trips = response.data;
      this.trips.push(response.data);
    } catch (error) {
      console.log("TripStore -> fetchTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.tripGet();
export default tripStore;
