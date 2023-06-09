import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import logo from '../img/logo.png';

export default function RegisterTravel() {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
    const [destination, setDestination] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');
    const [type, setType] = useState('');

    const handleRegisterTravel = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/api/v1/travel`,
                JSON.stringify({
                    destination,
                    description,
                    price: Number(price),
                    date: date.toString(),
                    type,
                    userId: Number(userId)
                }),
                {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': token
                    }
                } 
            );

            console.log(response.data);

            alert('Roteiro cadastrado com sucesso!');
        } catch (err) {
            console.log(err);
            alert('Algo deu errado');
        }
    }

    return (
        <div className="login-form-wrap">
            <div> 
                <form method="POST" className='login-form'>
                    <img src={logo} alt="app-viajei-icon"></img>
                    <ul id="navbar-list">
                        <li>
                            <Link className="link" to={{
                                pathname: '/register/travel',
                                state: { token, userId }
                            }}>
                                Cadastrar Viagem
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to={{
                                pathname: '/search/travel',
                                state: { token, userId }
                            }}>Pesquisar Viagem</Link>
                        </li>
                    </ul>
                    <p>Digite os dados do roteiro nos campos abaixo.</p>
                    <label htmlFor="destination">Destino</label>
                    <input 
                        type="destination" 
                        name="destination"
                        placeholder="Digite o nome do destino" 
                        autoFocus={true} 
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <label htmlFor="description">Descrição</label>
                    <input 
                        type="description" 
                        name="description"
                        placeholder="Descreva sua viagem" 
                        autoFocus={true} 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label htmlFor="preco">Preço</label>
                    <input 
                        type="number" 
                        name="price"
                        placeholder="Digite o valor gasto na viagem" 
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="date">Data</label>
                    <input 
                        type="date" 
                        name="date"
                        placeholder="Digite a data da viagem" 
                        onChange={(e) => setDate(moment(e.target.value).format('DD/MM/YYYY'))}
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
                        value="Cadastrar" 
                        className="btn" 
                        onClick={(e) => handleRegisterTravel(e)}
                    />
                </form>
            </div>
        </div>
    )
}