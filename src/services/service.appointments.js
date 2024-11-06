import repositoryAppointment from "../repositories/repository.appointments.js";

async function ListarByUser(id_user) {

    const appointments = await repositoryAppointment.ListarByUser(id_user);
    return appointments;
};

async function Inserir(id_user, id_doctor, id_service, booking_date, booking_hour) {

    const appointment = await repositoryAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);
    return appointment;
};

export default { ListarByUser, Inserir };