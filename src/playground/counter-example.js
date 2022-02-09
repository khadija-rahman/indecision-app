class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }
    handleAddOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            }
        })
    }
    handleReset() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
    
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'))
// var name = 'Bethany'
// var age = '32'
// var location2 = 'Birmingham'
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}


//         {getLocation(user.location)}
//     </div>
// )


//JSX does not have data binding

// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1>count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()