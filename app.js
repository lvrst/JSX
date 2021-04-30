class App extends React.Component {
    state = {
        comment: []


    }

    getComment = () => {
        let comment
    }



    render() {
        return (
            <form>
                <p>Say something</p>

                <input type="text" placeholder="Your name"/>

                <input type="text" placeholder="Your comment"/>
            
                <button type="submit">Comment</button>
            </form>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector('#app'));