// const appRoot = document.getElementById('app')

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: false,
            title: "Visibility Toggle"
        }
    }

    handleToggle() {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            }
        })

    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? "Hide detail" : "Show detail"}</button>

                {this.state.visibility ? <p>Hey. These are some details you can now see!</p> : null}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const app = {
//     title: 'Visibility Toggle',
//     visible: true
//  }
// <button onClick={app.visible ? hideDetail : showDetail}>{app.visible ? "Hide detail" : "Show detail"}</button>







// ReactDOM.render(template, appRoot)



// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();