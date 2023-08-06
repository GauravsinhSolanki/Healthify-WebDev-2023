import axios from "axios";
import backendUrl from "../Components/config/Constants";

export class DoctorsRepo {
  async getDoctors() {
    const url = `${backendUrl}/getDoctors`;
    const doctors = await axios.get(url);
    return doctors.data;
  }
}
