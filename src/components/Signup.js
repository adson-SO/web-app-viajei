import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/signup',
                {
                    name,
                    email,
                    password
                },
                {
                    headers: { 
                        'Content-Type': 'application/json',
                    }
                }
            );

            navigate('/search/travel', {
                state: response.data
            });
        } catch (err) {
            alert('Algo deu errado!');
        }
    }

    return (
        <div>
            <div className="login-form-wrap">
                <form method="POST" className='login-form'>
                    <h1>Crie sua conta</h1>
                    <p>Digite os seus dados de acesso no campo abaixo.</p>
                    <label htmlFor="Name">Nome</label>
                    <input 
                        type="Name"
                        name="name"
                        placeholder="Digite seu Nome" 
                        autoFocus={true}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="Digite seu e-mail" 
                        autoFocus={true} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password"
                        name="password" 
                        placeholder="Digite sua senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        value="Cadastrar" 
                        className="btn"
                        onClick={(e) => handleSignup(e)}
                    />
                </form>
            </div>
        </div>
    )
}