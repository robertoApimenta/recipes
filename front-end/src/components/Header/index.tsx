import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import {Container, Content} from '../../components/Header/styles';

export function Header() {
    return(
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>

                <img src={logo} alt="gggg" />
            </Content>
        </Container>
    )
}