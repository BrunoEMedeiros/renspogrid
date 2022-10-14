import { C_Card, Header, Title, Options } from './card_style'
import imagem from './vite.svg'

export function Card(){
    return (
        <C_Card>
            <Header src={imagem}>
            </Header>
            <Title>
                1º Info
            </Title>
            <Options>
                Edit
            </Options>
        </C_Card>
    )
}