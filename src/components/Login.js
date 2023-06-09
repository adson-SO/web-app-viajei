import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.png'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post(`https://api-viajei.herokuapp.com/api/v1/signin`,
                JSON.stringify({email, password}),
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
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 401) {
                setError('Usuário ou senha inválidos');
            }
        }
    };

    return (
      <div className="login-form-wrap">
            <div>
                <form className='login-form'>
                <img src={logo} alt="app-viajei-icon"></img>
                <h1>Login</h1>
                <label htmlFor="email">E-mail</label>
                <input type="email" 
                        name="email" 
                        placeholder="Digite seu e-mail" 
                        required
                        autoFocus={true}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                <label htmlFor="password">Senha</label>
                <input type="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" 
                        className='btn-login'
                        onClick={(e) => handleLogin(e)}>Login</button>
                </form>
                <p>{error}</p>
            </div>
      </div>
    );
}