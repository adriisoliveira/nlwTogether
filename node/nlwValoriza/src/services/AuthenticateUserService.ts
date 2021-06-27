import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAutheticateRequest {
  email: string,
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAutheticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    //Verificar s eo email existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    //Verificar se a senha está correta
    const passwordMath = await compare(password, user.password)
    if (!passwordMath) {
      throw new Error("Email/Password incorrect");
    }
    //Gerar token
    const token = sign({
      email: user.email
    },
      "926da045167536d6b03f8f02ce2eaedc", {
      subject: user.id,
      expiresIn: "1d"
    }
    );




  }
}

export { AuthenticateUserService }