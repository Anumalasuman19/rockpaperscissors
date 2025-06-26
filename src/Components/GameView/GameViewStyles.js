import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const GameViewContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  gap: 50px;
  height: 100vh;
  @media (min-width: 768px) {
    height: 100%;
    gap: 20px;
    padding: 50px 200px;
  }
`

export const ScoreDetailsContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 48px;
`
export const OptionsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  padding: 0px;
`
export const OptionItem = styled.li`
  color: #ffffff;
  font-size: 28px;
  font-family: 'Bree Serif';
`
export const ScoreContainer = styled.div`
  border: 1px solid #ffffff;
  background-color: #ffffff;
  padding: 28px 28px;
  border-radius: 6px;
  @media (min-width: 768px) {
    padding: 28px 38px;
  }
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin: 0px;
  margin-top: 10px;
`
export const Heading = styled.h1`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin: 0px;
  color: #ffffff;
`
export const DisplayOptionsContainer = styled.div`
  @media (min-width: 768px) {
    align-self: center;
    display: flex;
    justify-content: center;
    width: 60%;
  }
`
export const DisplayOptionsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
  @media (min-width: 768px) {
    align-self: center;
    width: 60%;
  }
`
export const DisplayOption = styled.li`
  width: 50%;
  @media (min-width: 768px) {
  }
`
export const OptionButton = styled.button`
  background-color: transparent;
  width: 100%;
  border: 0px;
`
export const OptionIcon = styled.img`
  background-color: transparent;
  width: 100%;
  border: 0px;
`
export const RulesButton = styled.button`
  align-self: flex-end;
  padding: 12px 18px;
  border-radius: 6px;
  color: #223a5f;
  font-size: 16px;
  border: 0px;
  font-family: 'Bree Serif';
`
export const RulesImage = styled.img``
export const PopUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const PopUpCloseButton = styled.button`
  align-self: flex-end;
  background-color: Red;
  border: 0px;
  color: #ffffff;
  padding: 5px;
`
export const RulesPopup = styled(Popup)`
  width: 300px;
  padding: 5px;
`
