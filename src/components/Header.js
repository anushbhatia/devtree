import React from 'react'
import Toggle from './Toggle'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
// import { ProgressPlugin } from 'webpack'

function Header(props) {
    return (
        <div className = "Header container">
            <div className = "ten columns">
                <h2>devtree</h2>
            </div>
            <div className = "two columns">
                <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
            </div>
            {/* <div className = "two columns">
                <button>
                    <feather className="icons sun"></feather>
                </button>
            </div> */}
        </div>
    )
}

export default Header