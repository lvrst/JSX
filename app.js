class App extends React.Component {
    state = {
        name: '',
        message: '',
        comments: []
    }

    keepComments = (event, object) => {

        object = {
            name: this.state.name,
            message: this.state.message
        }
        event.preventDefault();

        let newComments = [...this.state.comments, object]

        this.setState({
            comments: newComments
        })
    }

    changeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }



    render() {
        return (
            <form>
                <p>Say something</p>

                <input type="text" onChange={this.changeName} placeholder="Your name"/>// 

                <input type="text" onChange={this.changeMessage} placeholder="Your comment"/>
            
                <input onClick={this.keepComments} type="submit" value="Commenter"/>
            </form>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector('#app'));