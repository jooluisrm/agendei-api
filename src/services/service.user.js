import repositoryUser from "../repositories/repository.user.js";
import bcrypt from "bcrypt";

async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await repositoryUser.Inserir(name, email, hashPassword);
    return user;
};

export default { Inserir };