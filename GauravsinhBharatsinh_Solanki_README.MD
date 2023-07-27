## Assignment Overview
In this assignment I need to build one full fledge feature.

I am going with the **Appointment Scheduling** feature so this feature will helps the patients to book, view, cancle and Reschedule the appointment. 

Deployed application:
- **Frontend** **https://dal-healthify.netlify.app/** 
- **Backend** **https://test-366u.onrender.com**
### Authors

#### - Gauravsinh Solanki: gr441293@dal.ca (B00932065)

### Roadmap

#### (1) Project Initiation:

- I pulled the main branch of the group Repository and then start working on the project.
   
#### (2) List of the files I created
- **Frontend**

        -Components
            - Appointment
                -BookAppointment
                    -BookAppointment.js
                    -BookAppointmentSytles.js
                -CancleAppointment
                    -CancelAppointment.js
                    -CancelAppointmentStyles.js
                -ViewAppointment
                    -ViewAppointment.js
                    -ViewAppointmentStyles.js
                -RescheduleAppointment
                    -RescheduleAppointment.js
                    -RescheduleAppointmentStyles.js
            - Doctor
                -Doctor.js
                -DoctorStyles.js
            - Hospital
                -Hospital.js
                -HospitalStyles.js
            - HospitalList
                -HospitalList.js
                -HospitalListStyles.js
        -Repo
                -Appointment.js
                -Doctor.js
                -Hospital.js
        -Utility
                -CheckAvailableSlot.js

- **Backend**
        
        -models
            -appointment.js
            -doctor.js
            -hospital.js
            -products.js
        -controller
            -appointment.controller.js
            -doctor.controller.js
            -hospital.controller.js
            -products.controller.js
        -routers
            -appointment.routes.js
            -doctor.routes.js
            -hospital.routes.js
            -products.routes.js
        -services
            -appointment.services.js
            -doctor.services.js
            -hospital.services.js
            -products.services.js


## My feature
- Date and Time Selection: Users can easily choose their preferred appointment date and time.
- Real-Time Availability: The feature shows real-time slot availability to avoid double booking.
- Error Handling: Provides clear error messages for unavailability or server issues.
- Appointment Confirmation: Users receive confirmation after successful booking.

### How to Use:

- Go to the Hospital from the navbar section.
- Choose the Hospital from there.
- On the next page there will be a list of all Specilized Doctor
- Select the slots you want and pick a date
- hit a click and your appointment is booked.
- Same way you can view, cancle, and Reschedule appointment.

## Deployment

- Here you can see the application: 
    - **Frontend** **https://dal-healthify.netlify.app/** 
    - **Backend** **https://test-366u.onrender.com**

## GitLab Project Repository
- My Individual branch Repository:
     **https://git.cs.dal.ca/radhey/csci-4177-5709-grp-19/-/tree/gauravsinh?ref_type=heads**

- Group Project Repository:
    **https://git.cs.dal.ca/radhey/csci-4177-5709-grp-19**