import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo.png';

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/api/v1/signup`,
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

            sessionStorage.clear();
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('userId', response.data.userId);

            navigate('/travel', {
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
                    <img src={logo} alt="app-viajei-icon"></img>
                    <h1>Crie sua conta</h1>
                    <p>Digite os seus dados de acesso no campo abaixo.</p>
                    <label htmlFor="Name">Nome</label>
                    <input 
                        type="Name"
                        name="name"
                        placeholder="Digite seu Nome" 
                        autoFocus={true}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="Digite seu e-mail" 
                        autoFocus={true} 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password"
                        name="password" 
                        placeholder="Digite sua senha" 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="submit" 
                        value="Cadastrar" 
                        className="btn"
                        onClick={(e) => handleSignup(e)}
                    />
                    <p>Caso já possua uma conta, clique <Link to={{ pathname: '/login' }}>aqui</Link> para realizar o login.</p>
                </form>
            </div>
        </div>
    )
}