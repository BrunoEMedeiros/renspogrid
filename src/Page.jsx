
import { Card } from "./card"
import { Container, Header, Aside, Main } from "./style"

export function Page(){
    return(
        <Container>
            <Header>
                Teste header
            </Header>
            <Aside>
                leteral
            </Aside>
            <Main>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Main>
        </Container>
    )
}