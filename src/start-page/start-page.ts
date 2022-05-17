import './start-page.css';
import { NodeCreator, nodeParametrs } from '../helpers/node-creator';
import GameScreen  from '../game/game-screen';
import root  from '../index';
export default class StartPage extends NodeCreator{
constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
	super(parent, element, nodeParams);
}
startGameScreen(): void{
	const gameScreen = new GameScreen(root, document.createElement('div'),{
		classList: ['game-screen'],
	});
	gameScreen.render();
}

render(): void {
	const startText =  new NodeCreator(this.getElement(), document.createElement('h2'), {
		classList: ['start-page-title'],
  text: 'Game Kosinka'
});
	const startButton = new NodeCreator(this.getElement(), document.createElement('button'), {
		classList: ['button', 'start-page-button'],
  text: 'Start'
});
startButton.getElement().onclick = () => {
	this.removeElement();
	this.startGameScreen();
}
}
}
