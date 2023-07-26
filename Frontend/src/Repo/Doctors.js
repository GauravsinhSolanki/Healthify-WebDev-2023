import axios from "axios";

export class DoctorsRepo {
  async getDoctors() {
    const url = "http://localhost:8081/getDoctors";
    const doctors = await axios.get(url);
    return doctors.data;
  }
}
