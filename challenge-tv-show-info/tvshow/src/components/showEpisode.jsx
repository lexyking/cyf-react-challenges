import React from 'react'


export function ShowEpisode(props) {


    return (

        <select>{
            props.handleShowEpisode()
        }</select>
    )
}