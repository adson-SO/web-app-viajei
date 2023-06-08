import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post('https://api-viajei.herokuapp.com/api/v1/signin',
                JSON.stringify({email, password}),
                {
                    headers: { 
                        'Content-Type': 'application/json',
                    }
                }            
            );

            console.log(response.data);

            navigate('/travel');
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
                <h2>Login</h2>
                <form className='login-form'>
                <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                <input type="password" 
                        name="password" 
                        placeholder="Password" 
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