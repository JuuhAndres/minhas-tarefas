import styled from 'styled-components'

//Omissor de props
// type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>
type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#006414' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#FFF' : '#Fcfcfc')};
  color: ${(props) => (props.ativo ? '#006414' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
