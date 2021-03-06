const api = require('./lib/api.js')



const ReactDOM = require('react-dom')
const React = require('react')

const App = React.createClass({
  getInitialState() {
    return { coffees: [] };
  },

  componentDidMount() {
    const orderService = api.service('orders');
    // coffeeService.find().then(coffeeData => this.setState({ coffees: coffeeData.data }));
    //
    // coffeeService.on('created', coffee => this.setState({
    //   coffees: this.state.coffees.concat(coffee)
    // }));
    orderService.find({
      query: {order_id: 1}
    }).then(orders => {
        console.log(orders);
      })
  },

  render() {
    const { coffees } = this.state
    return (
      <div>
        {
          coffees.map((c, index) => {
            return <p key={index}>{c.name} {"   "} {c.description}</p>
          })
        }
      </div>
    )
  }
})
ReactDOM.render(
  <App />,
  document.getElementById('example')
);
