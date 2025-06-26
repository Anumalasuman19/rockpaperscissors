import {Component} from 'react'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import GameStatus from '../Constants/Constants'
import GameResultView from '../GameResultView/GameResultView'
import {
  GameViewContainer,
  ScoreDetailsContainer,
  OptionsList,
  OptionItem,
  ScoreContainer,
  ScoreText,
  Score,
  DisplayOptionsContainer,
  DisplayOptionsList,
  DisplayOption,
  OptionButton,
  OptionIcon,
  RulesButton,
  RulesImage,
  PopUpContainer,
  PopUpCloseButton,
  Heading,
  RulesPopup,
} from './GameViewStyles'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    score: 0,
    playerSelectedOption: '',
    opponentSelectedOption: '',
    gameStatus: GameStatus.initial,
  }

  setScore = (playerSelectedId, opponentSelectedId) => {
    let isScoreIncrement = GameStatus.initial
    if (playerSelectedId === 'ROCK' && opponentSelectedId === 'SCISSORS') {
      isScoreIncrement = GameStatus.won
    } else if (playerSelectedId === 'ROCK' && opponentSelectedId === 'PAPER') {
      isScoreIncrement = GameStatus.lose
    } else if (
      playerSelectedId === 'SCISSORS' &&
      opponentSelectedId === 'PAPER'
    ) {
      isScoreIncrement = GameStatus.won
    } else if (
      playerSelectedId === 'SCISSORS' &&
      opponentSelectedId === 'ROCK'
    ) {
      isScoreIncrement = GameStatus.lose
    } else if (playerSelectedId === 'PAPER' && opponentSelectedId === 'ROCK') {
      isScoreIncrement = GameStatus.won
    } else if (
      playerSelectedId === 'PAPER' &&
      opponentSelectedId === 'SCISSORS'
    ) {
      isScoreIncrement = GameStatus.lose
    } else {
      this.setState({
        gameStatus: GameStatus.draw,
        playerSelectedOption: playerSelectedId,
        opponentSelectedOption: opponentSelectedId,
      })
    }
    if (
      isScoreIncrement === GameStatus.lose ||
      isScoreIncrement === GameStatus.won
    ) {
      this.setState(prevState => ({
        score:
          isScoreIncrement === GameStatus.lose
            ? prevState.score - 1
            : prevState.score + 1,
        gameStatus: isScoreIncrement,
        playerSelectedOption: playerSelectedId,
        opponentSelectedOption: opponentSelectedId,
      }))
    }
  }

  onClickOfRockOrPaperOrScissors = id => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    this.setScore(id, choicesList[randomIndex].id)
  }

  onClickOfPlayAgain = () => {
    this.setState({gameStatus: GameStatus.initial})
  }

  getInitialView = () => (
    <DisplayOptionsContainer>
      <DisplayOptionsList>
        {choicesList.map(item => (
          <DisplayOption key={item.id}>
            <OptionButton
              data-testid={`${item.id.toLowerCase()}Button`}
              type="button"
              onClick={() => {
                this.onClickOfRockOrPaperOrScissors(item.id)
              }}
            >
              <OptionIcon src={item.imageUrl} alt={item.id} />
            </OptionButton>
          </DisplayOption>
        ))}
      </DisplayOptionsList>
    </DisplayOptionsContainer>
  )

  render() {
    const {
      score,
      gameStatus,
      playerSelectedOption,
      opponentSelectedOption,
    } = this.state
    return (
      <GameViewContainer>
        <Heading>Rock Paper Scissors</Heading>
        <ScoreDetailsContainer>
          <OptionsList>
            {choicesList.map(item => (
              <OptionItem key={item.id}>{item.id}</OptionItem>
            ))}
          </OptionsList>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </ScoreDetailsContainer>
        {gameStatus === GameStatus.initial ? (
          this.getInitialView()
        ) : (
          <GameResultView
            choiceList={choicesList}
            playerOption={playerSelectedOption}
            opponentOption={opponentSelectedOption}
            gameStatus={gameStatus}
            onClickOfPlayAgain={this.onClickOfPlayAgain}
          />
        )}
        <RulesPopup trigger={<RulesButton> RULES </RulesButton>} modal>
          {close => (
            <PopUpContainer style={{padding: '20px'}}>
              <PopUpCloseButton onClick={close} type="button">
                <RiCloseLine />
              </PopUpCloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopUpContainer>
          )}
        </RulesPopup>
      </GameViewContainer>
    )
  }
}

export default GameView
