import './base-styles/base-styles.css';
import {NodeCreator} from './helpers/node-creator';
import StartPage from './start-page/start-page'; './start-page/start-page';
const root = new NodeCreator(document.body, document.createElement('div'), {id:	'root'}).getElement();
const startPage = new StartPage(root, document.createElement('div'), {classList: ['start-page']});
startPage.render();
export default root;

