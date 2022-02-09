class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        console.log('fetching data')
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if (options) {
            this.setState(() => ({ options }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // also access to arguements access to  prevProps and prevState
        // which can be passed into state and props

        // access to this.state and this.props
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('saving data')
        }
    }

    componentWillUnmount() {
        // component will unmount only fires when a given component disappears, when it gets unmounted
        console.log('componentWillUnmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))

    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (optionToRemove !== option))
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    render() {
        const subtitle = "Put life in the hands of a computer"
        console.log(this.state)
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={5 > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>

    )
}

Header.defaultProps = {
    title: 'some default'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
                </button>
        </div>
    )

}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }

        </div>
    )

}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >
                remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }

    }

    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        e.target.elements.option.value = ''
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p >{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button> Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))