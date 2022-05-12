export default class NodeCreator {
	private element: HTMLElement;
	private classList:	Array<string>;
	private parent: HTMLElement;
	constructor(parent: HTMLElement, element: HTMLElement, classList: Array<string>){
		this.element = element;
		this.classList = classList;
		this.parent = parent;
		this.addClassList();
		this.parent.append(this.element);
	}
addClassList(): void{
	if(this.classList.length){
		this.classList.map((item:string) => {
			this.element.classList.add(item);
		});
	}
}
}