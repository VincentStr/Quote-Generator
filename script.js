class App extends React.Component{
    constructor(){
        super()
        this.state = {
            text:"",
            author:"",
            quotesDB: [],
            randColor:[
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
            ],
            sColor: "",
            genState: true,
            gen: "visible", 
            rGen: "hidden",

        }
        this.handleClick = this.handleClick.bind(this)
    } 
    componentDidMount() {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => response.json())
            .then(data => this.setState({ quotesDB: data.quotes })
            )   
    }
    



    handleClick(){
        const randNum = Math.floor(Math.random() * this.state.quotesDB.length)
        if(this.state.genState){
            document.getElementById("genB").remove()
            this.setState({genState :false})
        }
        this.setState({
            text : this.state.quotesDB[randNum].quote,
            author: this.state.quotesDB[randNum].author,
            sColor: this.state.randColor[Math.floor(Math.random()*this.state.randColor.length)],
            gen:"hidden",
            rGen:"visible",
            })
        
        /* const randText = this.state.quotesDB[randNum].quote
        const randAuth = this.state.quotesDB[randNum].author
        this.setState({text : randText})
        this.setState({author: randAuth})
        this.setState({sColor: this.state.randColor[Math.floor(Math.random()*this.state.randColor.length)] })   */    
    }
    handleRemove(){
        document.getElementById("genB").remove()
            this.setState({
                genState : false,
                gen:"hidden",
                rGen:"visible",
            })
       handleClick()
    }
    render(){
        return (
          
            <div className="quoteBox" id="quote-box" style={{backgroundColor:this.state.sColor}}>
            <button id="genB" className="genBtn" onClick={this.handleClick}style={{visibility: this.state.gen}}> Generate Quote </button>
            <div style= {{visibility: this.state.rGen}}>
            <p className="quoteText" id="text">"{this.state.text}"</p>
            <p className="quoteText" id="author"> - {this.state.author} </p>
            <div className="dashedLine"></div>
            <button style={{color:this.state.sColor}} onClick={this.handleClick} className= "quoteBtn">New Quote</button>
{/*             <a id="tweet-quote" href="twitter.com/intent/tweet"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg></a>
 */}            </div>
            </div>
            
            )
    }
}
ReactDOM.render(<App />, document.getElementById("root"))