import Component from '../../core/Component';
import todoStore from '../../stores/todoList';

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

            // action도 분리하기
            const action = {
                type: 'ADD',
                todo,
            };
            todoStore.dispatch(action);
            createInput.value = null;
        };

        createInput.addEventListener('keypress', createTodo);
    }
}
