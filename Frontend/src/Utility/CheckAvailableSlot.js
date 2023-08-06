import axios from "axios";
<<<<<<< HEAD
import backendUrl from "../../src/config/Constants";
=======
import backendUrl from "../Components/config/Constants";
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b

export class CheckAvailableSlot {
  async getAppointments() {
    try {
      const res = await axios.get(`${backendUrl}/getAppointments`);
      return res.data;
    } catch (err) {
      return err;
    }
  }

<<<<<<< HEAD
=======
  add30Minutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);

    let adjustedMinutes = minutes + 30;
    let adjustedHours = hours;
    if (adjustedMinutes >= 60) {
      adjustedHours += Math.floor(adjustedMinutes / 60);
      adjustedMinutes %= 60;
    }
    const adjustedTimeString = `${String(adjustedHours).padStart(
      2,
      "0"
    )}:${String(adjustedMinutes).padStart(2, "0")}`;
    return adjustedTimeString;
  }

  compareTimeStrings(timeString1, timeString2) {
    const [hours1, minutes1] = timeString1.split(":").map(Number);
    const [hours2, minutes2] = timeString2.split(":").map(Number);
    if (hours1 > hours2) {
      return 1;
    } else if (hours1 < hours2) {
      return -1;
    } else {
      if (minutes1 > minutes2) {
        return 1;
      } else if (minutes1 < minutes2) {
        return -1;
      } else {
        return 0;
      }
    }
  }
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
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
<<<<<<< HEAD
      if (
        appointmentDateString === comparisionString &&
        time === appointment.appointmentTime
      ) {
        console.log("catched");
=======

      const adjustTime = this.add30Minutes(appointment.appointmentTime);
      console.log("testing tieme", adjustTime);
      const compareTime = this.compareTimeStrings(time, adjustTime);
      console.log("compare time", compareTime);
      if (appointmentDateString === comparisionString && compareTime !== 1) {
        console.log("catched", time, appointment.appointmentTime);
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
        canBook = false;
      }
    });
    return canBook;
  }
}
