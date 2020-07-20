import React , {Component} from 'react'
import Link from 'next/link'
class NavBar extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }

    render(){
        return(
            <nav>
                <div>
                    <Link href="/">
                        <a title="our app">
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a title="About next js">
                            About 
                        </a>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;