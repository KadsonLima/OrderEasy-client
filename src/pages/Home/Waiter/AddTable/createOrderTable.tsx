import { useParams } from "react-router-dom"
import { Section } from "src/components/Page/Page";
import styled from "styled-components"



export const CreateOrderTable = () =>{
    const {tableId} = useParams();


    return <Section>
            <TableTitle>Mesa {tableId}</TableTitle>
            <DivButtons>
                <ButtonOption>X<span>Adicionar Pedido</span></ButtonOption>
            </DivButtons>
        </Section>
}

const TableTitle = styled.div`
    width: 100%;
    background-color: #D9D9D9;
    height: 58px;
    background: #D9D9D9;
    border: 1px solid #8F8F8F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 26px; 

`


const DivButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 45px;
    

`

const ButtonOption = styled.div`
    width: 90px;
    height: 90px;
    background-color: #CF2B2B;
    border-radius: 16px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    span{
        position: absolute;
        text-align: center;
        bottom: -15px;
        color: #333131;
        font-size: x-small;
    }
`