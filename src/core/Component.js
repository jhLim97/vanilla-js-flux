export default class Component {
    constructor(target, props = null) {
        this.target = target;
        this.props = props;

        this.render();
        this.setEvent();
        this.didMount();
    }

    initState(state) {
        this.state = state;
        console.log('테스트용 => defineProperty테스트');
    }

    template() {
        return '';
    }

    render() {
        this.target.innerHTML = this.template();
    }

    setEvent() {}

    didMount() {}

    didUpdate() {
        this.render();
    }

    setState(newState) {
        const isStateChange = () => {
            if (JSON.stringify(this.state) === JSON.stringify(newState)) return false;
            return true;
        };

        if (!isStateChange()) return;
        this.state = { ...this.state, ...newState };
        this.didUpdate();
    }
}
