import { Produtos } from "./Produtos"

export class UsuarioLogin{
    public idUsuario: number
    public nome: string
    public email: string
    public senha: string
    public token: string
    public produto: Produtos[]
}