import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

export default function SearchTravel() {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');

    const handleSearchTravel = async (e) => {
        e.preventDefault();
        let query = '';

        if (price !== 0) query += `?price=${price.toString}`;
        if (price !== 0 && type !== '') query += `+type=${type}`;
        if (price === 0 && type !== '') query += `?type=${type}`;

        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/travel${query}`,
                {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                }   
            )

            console.log(response.data);
        } catch (err) {
            console.log(err);
            alert('Algo deu errado!');
        }
    }

    return (
        <div>
            <div className="login-form-wrap"> 
                <form method="GET" className='login-form'>
                    <ul id="navbar-list">
                        <li>
                            <Link to={{
                                pathname: '/register/travel',
                                state: { token, userId }
                            }}>Cadastrar Viagem</Link>
                        </li>
                    </ul>
                    <p>Digite os campos que deseja pesquisar</p>
                    <label htmlFor="preco">Preço</label>
                    <input 
                        type="preco" 
                        name="price" 
                        placeholder="Digite o valor gasto na viagem" 
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="type">Tipo</label>
                    <input 
                        type="type" 
                        name="type" 
                        placeholder="Tipo de vaigem ex: Praia"
                        onChange={(e) => setType(e.target.value)} 
                    />
                    <input 
                        type="submit" 
                        value="Pesquisar" 
                        className="btn"
                        onClick={(e) => handleSearchTravel(e)} 
                    />
                </form>
            </div>
        </div>
    )
}