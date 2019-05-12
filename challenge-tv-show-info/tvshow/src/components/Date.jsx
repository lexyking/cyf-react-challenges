import React, { Component } from 'react'


class Date extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         date: this.getDate()
    //     }
    // }

    getDate = () => {
        return (new Date().toLocaleString());

    }


    render() {
        // let date = this.getDate
        return (

            <span>date</span>
        );
    }
}

export default Date;