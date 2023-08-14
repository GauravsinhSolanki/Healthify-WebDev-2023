import axios from "axios";
import backendUrl from "../Components/config/Constants";

export class AppointmentRepo {
  async getAppointments(email) {
    try {
      const res = await axios.get(`${backendUrl}/getAppointments`);
      const filteredAppointments = res.data.filter(
        (appointment) => appointment.patientEmail === email
      );
      // console.log(
      //   "res",
      //   res.data[1].patientEmail === email,
      //   res.data[1].patientEmail,
      //   email
      // );

      return filteredAppointments;
    } catch (err) {
      return err;
    }
  }

  async addAppointment(requestBody) {
    try {
      const res = await axios.post(`${backendUrl}/addAppointment`, requestBody);
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
        `${backendUrl}/updateAppointment/${requestBody.appointmentId}`,
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
        `${backendUrl}/cancelAppointment/${id}`,
        body
      );
      console.log("res", res);
      return res.status;
    } catch (err) {
      return err;
    }
  }
}
