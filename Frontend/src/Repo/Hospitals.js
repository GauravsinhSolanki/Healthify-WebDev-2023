import axios from "axios";

export class HospitalRepo {
  async getHospitals() {
    const url = "http://localhost:8081";
    const hospitals = await axios.get(url);
    return hospitals.data;
  }
}
