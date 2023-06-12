import { Link, useLocation } from "react-router-dom";
import logo from '../img/logo.png';
import { TableRow, Card } from '@material-ui/core';

export default function TravelDetails() {
    const location = useLocation();

    return (
        <div className="login-form">
            <ul id="navbar-list">
                        <li>
                            <Link className="link" to={{
                                pathname: '/register/travel',
                            }}>Cadastrar Viagem</Link>
                        </li>
                        <li>
                            <Link className="link" to={{
                                pathname: '/search/travel',
                            }}>Pesquisar Viagem</Link>
                        </li>
                    </ul>
            <div className="fullroadmap">
                <main>
                    <img src={logo} alt="viajei-logo"/>
                </main>
                <article>
                    <TableRow>
                        <div>
                            <Card className='travels-card' style={{
                                backGroundColor: 'red'
                            }}> 
                                <h4 className="destination">Destino: {location.state.destination}</h4>
                                <h4 className="price">Preço: R$ {location.state.price},00</h4>
                                <h4 className="date">Data: {location.state.date}</h4>
                                <h4 className="type">Tipo: {location.state.type}</h4>
                                <h4 className="description">Tipo: {location.state.description}</h4>
                            </Card>
                        </div>
                    </TableRow>
                </article>
            </div>
        </div>
    )
}