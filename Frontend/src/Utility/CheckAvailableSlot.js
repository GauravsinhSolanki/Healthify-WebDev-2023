import axios from "axios";
import backendUrl from "../../src/config/Constants";

export class CheckAvailableSlot {
  async getAppointments() {
    try {
      const res = await axios.get(`${backendUrl}/getAppointments`);
      return res.data;
    } catch (err) {
      return err;
    }
  }

  async checkSlotAvailable(doctorId, appointmentDate, time) {
    const appointments = await this.getAppointments();
    const filteredAppointments = appointments.filter(
      (appointment) => appointment.doctorId === doctorId
    );
    let canBook = true;
    const appointmentDateStr = String(appointmentDate);
    const appointmentDateSplitted = appointmentDateStr.split(" ");
    const appointmentDateString =
      appointmentDateSplitted[0] +
      appointmentDateSplitted[1] +
      appointmentDateSplitted[2] +
      appointmentDateSplitted[3];
    filteredAppointments.map((appointment) => {
      const comparisionDate = new Date(appointment.appointmentDate);
      const comparisionStr = String(comparisionDate);
      const comparisionSplitted = comparisionStr.split(" ");
      const comparisionString =
        comparisionSplitted[0] +
        comparisionSplitted[1] +
        comparisionSplitted[2] +
        comparisionSplitted[3];
      if (
        appointmentDateString === comparisionString &&
        time === appointment.appointmentTime
      ) {
        console.log("catched");
        canBook = false;
      }
    });
    return canBook;
  }
}
