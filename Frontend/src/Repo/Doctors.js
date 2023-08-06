import axios from "axios";
<<<<<<< HEAD
import backendUrl from "../../src/config/Constants";
=======
import backendUrl from "../Components/config/Constants";
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b

export class DoctorsRepo {
  async getDoctors() {
    const url = `${backendUrl}/getDoctors`;
    const doctors = await axios.get(url);
    return doctors.data;
  }
}
