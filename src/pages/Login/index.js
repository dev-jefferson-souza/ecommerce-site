import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import { Container } from "./styled";

export function Login() {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        signIn(email, password);
    }

    return (
        <Container>
            <img src={require("../../images/logo-white.png")} />
            <h1>Entrar</h1>
            <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a onClick={handleSignIn} href="/"> Entrar </a>
            <p>Ainda não tem uma conta?
                <a href="/registration">Cadastre-se</a>
            </p>
        </Container>
    );
}
