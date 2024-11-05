import serviceAppointments from "../services/service.appointments.js";


async function ListarByUser(req, res) {

    const id_user = req.id_user;
    const appointments = await serviceAppointments.ListarByUser(id_user);

    res.status(200).json(appointments);
}

export default { ListarByUser };