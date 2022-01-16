import Component from '../../core/Component';
import { todoStore, ADD_ACTION } from '../../stores/todoList';

export default class TodoCreator extends Component {
    template() {
        const template = `
            <div class="home-footer__creator">
                <label for="todo">Todo</label>
                <input type="text" id="todo">
            </div>
        `;

        return template;
    }

    setEvent() {
        const createInput = this.target.querySelector('.home-footer__creator > input');
        const createTodo = (e) => {
            if (e.key !== 'Enter') return;

            const todo = createInput.value;

            todoStore.dispatch(ADD_ACTION(todo));
            createInput.value = null;
        };

        createInput.addEventListener('keypress', createTodo);
    }
}
