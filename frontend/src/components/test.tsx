

class MyComponent extends React.Component {
    static propTypes = {
        prop1: React.PropTypes.string.isRequired,
        prop2: React.PropTypes.number,
    };
    constructor() {
        super();
        this.state = { foo: 1, bar: 'str' };
    }
    render() {
        return (
            <div>
                {this.state.foo}, {this.state.bar}, {this.state.baz}
            </div>
        );
    }
    onClick() {
        this.setState({ baz: 3 });
    }
}