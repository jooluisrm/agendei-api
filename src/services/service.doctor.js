async function Listar() {

    const doctors = [
        {id: 1, name: "Heber", specialty: "Cardiologista", icon: "M"},
        {id: 2, name: "João", specialty: "Clínico Geral", icon: "M"},
        {id: 3, name: "Maria", specialty: "Cardiologista", icon: "F"}
    ];

    return doctors;
};

export default { Listar };