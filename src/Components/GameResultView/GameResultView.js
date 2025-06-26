import GameStatus from '../Constants/Constants'
import {
  GameResultViewContainer,
  ResultContainer,
  PlayerOrOpponentContainer,
  PlayerOrOpponentText,
  PlayerOrOpponentOption,
  GameResultText,
  PlayAgainButton,
} from './GameResultViewStyle'

const GameResultView = props => {
  const {
    choiceList,
    playerOption,
    opponentOption,
    gameStatus,
    onClickOfPlayAgain,
  } = props

  const GetGameStatus = () => {
    let gameStatusDisplayText
    switch (gameStatus) {
      case GameStatus.draw:
        gameStatusDisplayText = 'IT IS DRAW'
        break
      case GameStatus.won:
        gameStatusDisplayText = 'YOU WON'
        break
      case GameStatus.lose:
        gameStatusDisplayText = 'YOU LOSE'
        break
      default:
        break
    }
    return gameStatusDisplayText
  }

  const GetPlayerOption = () => {
    const index = choiceList.findIndex(item => item.id === playerOption)

    if (index === -1) return null // safe fallback if not found

    return (
      <PlayerOrOpponentContainer>
        <PlayerOrOpponentText>YOU</PlayerOrOpponentText>
        <PlayerOrOpponentOption
          src={choiceList[index].imageUrl}
          alt="your choice"
        />
      </PlayerOrOpponentContainer>
    )
  }

  const GetOpponentOption = () => {
    const index = choiceList.findIndex(item => item.id === opponentOption)

    if (index === -1) return null // safe fallback if not found

    return (
      <PlayerOrOpponentContainer>
        <PlayerOrOpponentText>OPPONENT</PlayerOrOpponentText>
        <PlayerOrOpponentOption
          src={choiceList[index].imageUrl}
          alt="opponent choice"
        />
      </PlayerOrOpponentContainer>
    )
  }

  return (
    <GameResultViewContainer>
      <ResultContainer>
        {GetPlayerOption()}
        {GetOpponentOption()}
      </ResultContainer>
      <GameResultText>{GetGameStatus()}</GameResultText>
      <PlayAgainButton type="button" onClick={onClickOfPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </GameResultViewContainer>
  )
}
export default GameResultView
