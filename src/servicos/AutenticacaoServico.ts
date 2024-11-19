import api from "./api";

export async function fazerLogin(email: string, senha: string): Promise<string> {
    if(!email || !senha) return null

    try {
            const resposta = await api.post('/auth/login', { email, senha })
            console.log(resposta.data)
            return resposta.data
    } catch (error) {
            console.error(error)
            return null
    }
}
