import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import decode from "jwt-decode";
import instance from "../axios/instance";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userCredentials) => {
    try {
      const res = await instance.post("/signin", userCredentials);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    AsyncStorage.removeItem("myToken");
    this.user = null;
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
