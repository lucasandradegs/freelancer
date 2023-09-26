import { Container, Logo, Nav } from "./styles";

export function Header() {
    return (
        <Container>
            <Logo>
                <img src="https://github.com/lucasandradegs.png" alt="" />
            </Logo>
            <Nav>
                <ul className="nav-list">
                    <li><a href="#empresa">Empresa</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </Nav>
        </Container>
    )
}