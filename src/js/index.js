import store from "../js/store/index";
import { addTodo } from "../js/actions/index";

window.store = store;
window.addTodo = addTodo;
// window.updateTodo = updateTodo;


store.subscribe(() => console.log('Look ma, Redux!!'))
// let st = {values:{ task: 'go to movie', id: 1, date:"12th nov" }};

// store.dispatch( addTodo(st) )

