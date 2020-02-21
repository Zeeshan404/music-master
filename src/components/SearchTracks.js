import React, {Component} from "react";

class SearchTracks extends Component {
    state = {tracksQuery: ''};

    updateTrackQuery = (e) => {
        this.setState({tracksQuery: e.target.value});
        this.searchTracks();
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.searchTracks();
        }
    };
    searchTracks = (e) => {
        const {tracks} = this.props;
        const filtertracks = tracks.filter(
            track => track.name.toLowerCase().indexOf(this.state.tracksQuery.toLowerCase()) !== -1
        );
        this.props.searchResults(filtertracks);
    };

    render() {

        return (
            <div>
                <input onChange={this.updateTrackQuery} onKeyPress={this.handleKeyPress}
                       placeholder='Search for a track'/>
                <button onClick={this.searchTracks}>Search</button>
                <br/>
                {this.filtertracks}
                {this.state.tracksQuery}
            </div>
        )
    }
}

export default SearchTracks;
/*{
                if (track.name.toLowerCase().includes(this.state.tracksQuery.toLowerCase()))
                    return track;
            }*/
