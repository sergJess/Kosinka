import './game-screen.css';
import {NodeCreator, nodeParametrs} from '../helpers/node-creator';

export default class GameScreen extends NodeCreator{
	constructor(parent: HTMLElement, element: HTMLElement, nodeParams: nodeParametrs){
		super(parent, element, nodeParams);
	}

render(): void {
for(let i = 0; i < 10; i++) {
	const list =  new NodeCreator(this.getElement(), document.createElement('div'), {
		classList: ['list'],
  text: `${i}`
});

}
}

	}
	