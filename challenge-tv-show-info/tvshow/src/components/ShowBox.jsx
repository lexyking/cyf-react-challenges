import React, { Component } from 'react'
import ShowSelector from './ShowSelector'

import { getContent, getTitles } from '../Content'

class ShowBox extends Component {
    state = {
        show: getContent(),
        titles: getTitles()
    }
    render() {
        return (
            <div >
                <ShowSelector content={this.state.show} titles={this.state.titles} />

            </div>
        )
    }
}

export default ShowBox
