import React, { Component } from 'react'
// import EpisodeSelector from './EpisodeSelector';
// import { ShowEpisode } from './showEpisode'

// import { ShowTitle } from './showTitles'

class ShowSelector extends Component {
    state = {
        movieSelected: 'Lost',
        episodeInfos: []
    }

    showTitle = () => {
        let movieTitle = this.props.titles
        return (movieTitle.map(title => <option key={title} value={title}>{title}</option>))
    }

    showEpisode = () => {
        let movieTitle = this.props.content;
        // console.log(movieTitle[this.state.movieSelected])
        return movieTitle[this.state.movieSelected].map(episode => <option key={episode.id}>{episode.name}</option>)
        // let episodes = []
        // for (let episode in movieTitle) {
        //     episodes.push(movieTitle[episode])
        // }

        //return episodes[this.state.movieSelected].map(episode => <option key={episode}>{episode}</option>)
    }

    isSelected = (e) => {
        this.setState({
            movieSelected: e.target.value,

        })
        // console.log(e.target.value);
    }



    showInfos = () => {
        let movieTitle = this.props.content;
        return movieTitle[this.state.movieSelected].map(episode => {
            return (<div className="episodeInfos" key={episode.id}>
                <div className='titleInfos'><h2>Season {episode.season}</h2>
                    <h4>{`Episode ${episode.number} : ${episode.name}`}</h4></div>
                <div className='boxInfos'>
                    <div className='image'> <img src={episode.image !== null ? episode.image['medium'] : ''} alt={episode.id} /> </div>
                    {/* {console.log(episode.image)} */}
                    <div className="airtame">
                        <p>{`Airdate ${episode.airdate}`}</p>
                        <p>{`Airtime ${episode.airtime}`}</p>
                        <p>{`Airstamp ${episode.airstamp}`}</p>
                        <p>{`Runtime ${episode.runtime}`}</p>
                    </div>
                    <div className="summary">{episode.summary}</div>
                </div>
            </div >
            )
        }



        );
    }




    render() {
        // this.showTitle();

        return (
            <React.Fragment>
                <div className="showBox">
                    <div>
                        <h3>Select a Tv Show </h3>
                        <select onChange={(e) => this.isSelected(e)}>
                            {this.showTitle()}
                        </select>
                    </div>
                    <div>
                        <h3>Select an Episode </h3>
                        <select>
                            {this.showEpisode()}
                            {/* <EpisodeSelector episodes={this.props.content} episodeSelected={this.state.movieSelected} handleSelectEpisode={this.showEpisode} /> */}
                        </select>
                        {/* <ShowEpisode handleShowEpisode={()=>this.showEpisode()} /> */}
                    </div>
                </div>
                <div >

                    {this.showInfos()}
                </div>

            </React.Fragment>
        )
    }
}

export default ShowSelector;
