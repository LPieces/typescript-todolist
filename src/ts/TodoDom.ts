import TodoTemplate from "./TodoTemplate";
import { ITodoData } from "./typings";
import { findParentNode, createItem } from "./utils";

class TodoDom extends TodoTemplate {

    private todoWrapper: HTMLElement;
    
    constructor(todoWrapper: HTMLElement){
        super();
        this.todoWrapper = todoWrapper;
    }

    protected initDom (todoData: ITodoData[]): void {
        const oFrag: DocumentFragment = document.createDocumentFragment();
        if(todoData.length){
            todoData.map((todo: ITodoData)=>{
                const oItem: HTMLElement = createItem('div','todo-item',this.todoView(todo));
                oFrag.appendChild(oItem);
            });
            this.todoWrapper.appendChild(oFrag);
        }
    }

    protected addItem   (todo: ITodoData): void {
        const oItem: HTMLElement = createItem('div','todo-item',this.todoView(todo));
        this.todoWrapper.appendChild(oItem);
    }

    protected removeItem (target: HTMLElement): void {
        const oParentNode: HTMLElement = findParentNode(target, 'todo-item');
        oParentNode.remove();
    }

    protected changeCompleted (target: HTMLElement, completed: boolean): void {
        const oPatentNode: HTMLElement = findParentNode(target, 'todo-item');
        const oContent: HTMLElement = oPatentNode.getElementsByTagName('span')[0];
        oContent.style.textDecoration = completed ? 'line-through' : 'none';
    }

}

export default TodoDom;