import axios from "axios";
import backendUrl from "../Components/config/Constants";

export class HospitalRepo {
  async getHospitals() {
    const url = `${backendUrl}`;
    const hospitals = await axios.get(url);
    return hospitals.data;
  }
}
