import React , {Component} from 'react'

export default class TextNavSideBar extends Component{
    constructor(){
        super()
        this.state={
            isToggled: true,
        }
    }
    render(){
        <div id="textNavSideBar" className="sideBar px-2 bg-info">
            <header>Text Navigator</header>
            <div >

            </div>
        </div>
    }
}