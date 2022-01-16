import Component from '../../core/Component';
import TopBar from '../../components/top-bar';
import TodoList from '../../components/todo-list';

export default class Home extends Component {
    template() {
        const template = `
            <header class="home-header">헤더</header>
            <main class="home-main">메인</main>
            <footer class="home-footer">푸터</footer>
        `;

        return template;
    }

    didMount() {
        const targetHeader = this.target.querySelector('.home-header');
        const targetMain = this.target.querySelector('.home-main');

        new TopBar(targetHeader);
        new TodoList(targetMain);
    }
}
