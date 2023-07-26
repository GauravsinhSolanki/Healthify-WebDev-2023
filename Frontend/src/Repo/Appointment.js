import axios from "axios";

export class AppointmentRepo {
  async getAppointments() {
    try {
      const res = await axios.get("http://localhost:8081/getAppointments");
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async addAppointment(requestBody) {
    try {
      const res = await axios.post(
        "http://localhost:8081/addAppointment",
        requestBody
      );
      return res.status;
    } catch (err) {
      return err;
    }
  }

  async updateAppointment(requestBody) {
    const body = {
      appointmentDate: requestBody.appointmentDate,
      appointmentTime: requestBody.time,
    };
    try {
      const res = await axios.put(
        `http://localhost:8081/updateAppointment/${requestBody.appointmentId}`,
        body
      );
      return res.status;
    } catch (err) {
      return err;
    }
  }

  async cancelAppointment(id) {
    const body = {};
    try {
      const res = await axios.post(
        `http://localhost:8081/cancelAppointment/${id}`,
        body
      );
      console.log("res", res);
      return res.status;
    } catch (err) {
      return err;
    }
  }
}
