export default function SearchTravel() {
    return (
        <div>
            <div className="login-form-wrap"> 
                <form method="GET" className='login-form'>
                    <ul id="navbar-list">
                        <li><a href="pesquisa_viagem.html">Pesquisar Viagem</a></li>
                        <li><a href="cadastro_viagem.html">Cadastrar Viagem</a></li>
                    </ul>
                    <p>Digite os campos que deseja pesquisar</p>
                    <label htmlFor="preco">Preço</label>
                    <input type="preco" placeholder="Digite o valor gasto na viagem" />
                    <label htmlFor="type">Tipo</label>
                    <input type="type" placeholder="Tipo de vaigem ex: Praia" />
                    <input type="submit" value="Pesquisar" className="btn" />
                </form>
            </div>
        </div>
    )
}