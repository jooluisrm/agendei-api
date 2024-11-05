import repositoryAppointment from "../repositories/repository.appointments.js";

async function ListarByUser(id_user) {

    const appointments = await repositoryAppointment.ListarByUser(id_user);
    return appointments;
};

export default {ListarByUser};