import './styles.css'

export function Header() {
    return (
        <header className="header-app">
            <a>Eventos</a>

            <nav>
                <ul>
                    <li>
                        <a>Início</a>
                    </li>
                    <li>
                        <a>Meus eventos</a>
                    </li>
                    <li>
                        <a>Criar evento</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}