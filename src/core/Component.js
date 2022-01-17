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
        const isStateChange = JSON.stringify(this.state) !== JSON.stringify(newState);
        if (!isStateChange) return;

        this.state = { ...this.state, ...newState };
        this.didUpdate();
    }
}
