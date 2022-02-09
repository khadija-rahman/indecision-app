console.log('App.js is running')
const appRoot = document.getElementById('app')

const app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const getItems = (options) => {
    return options.map((option) => {
        return <li key={option}>Item {option}</li>
    })
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderFormApp()
    }
}
const reset = () => {
    app.options = []
    renderFormApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const renderFormApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'there are no options to display'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>click options</button>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
                {/* alternative way just return: const getItems = (options) => {
    return options.map((option)=>{return <li key={option}>Item {option}</li>
    }) } and then passing it in <ol> {getItems(app.options)} </ol>  */}
            </ol>
            <button onClick={reset}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderFormApp()

const user = {
    name: 'Ben',
    age: '27',
    location: 'New York'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

