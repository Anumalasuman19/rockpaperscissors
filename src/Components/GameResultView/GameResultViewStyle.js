import styled from 'styled-components'

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 60%;
    align-self: center;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PlayerOrOpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayerOrOpponentText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 700;
  text-align: center;
`
export const PlayerOrOpponentOption = styled.img`
  width: 90%;
`
export const GameResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 700;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  padding: 12px 24px;
  align-self: center;
  color: #223a5f;
  border: 0px;
  border-radius: 6px;
  font-family: 'Bree Serif';
`
