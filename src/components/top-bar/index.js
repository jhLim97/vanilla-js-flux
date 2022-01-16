import Component from '../../core/Component';
import todoStore from '../../stores/todoList';

export default class TopBar extends Component {
    template() {
        const template = `
            <div class="home-footer__title">Todo List</div>
            <div>Total : ${todoStore.getState().todos.length}(개)</div>
        `;

        return template;
    }

    didMount() {
        todoStore.subscribe(this.render);
    }
}
