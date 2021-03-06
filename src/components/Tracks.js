import React, { Component } from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

class Tracks extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null,
    currentPage: 1,
    sizePerPage: 2,
    tracksQuery: "",
    filterarray: [],
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.tracks !== prevProps.tracks) {
      this.setState({ tracksQuery: "", filterarray: [] });
    }
  }

  updateTrackQuery = e => {
    this.setState({ currentPage: 1 });
    this.state.tracksQuery = e.target.value;
    if (this.state.tracksQuery === "") {
      this.setState({ filterarray: [] });
    } else this.searchTracks();
  };

  searchTracks = () => {
    const { tracks } = this.props;
    this.state.filterarray = tracks.filter(
      track =>
        track.name.toLowerCase().indexOf(this.state.tracksQuery.toLowerCase()) !== -1
    );
  };

  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
  };

  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  };

  trackIcon = track => {
    if (!track.preview_url) {
      return <span> N / A </span>;
    }
    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span> | | </span>;
    }
    return <span> &#9654;</span>;
  };

  render() {
    let { tracks } = this.props;
    let paginateTracks=[];
    const endIndex = this.state.sizePerPage * this.state.currentPage;
    if (this.state.filterarray.length) {
      tracks = this.state.filterarray;
    }
    else if(this.state.tracksQuery!=''&&this.state.filterarray.length==0)
    {
       tracks=[];
    }
    paginateTracks = tracks.slice(endIndex - this.state.sizePerPage,endIndex);
    return (
      <div>
        <hr />
        <input
          id="TracksSearch"
          onChange={this.updateTrackQuery}
          placeholder="Search for a track"
          value={this.state.tracksQuery}/>
        <br/>
        {paginateTracks.length ? (
          <div>
            {paginateTracks.map(track => {
              const { id, name, album, preview_url } = track;
              return (
                <div
                  key={id}
                  onClick={this.playAudio(preview_url)}
                  className="track">
                  <img
                    src={album.images[0].url}
                    alt="track-image"
                    className="track-image"/>
                  <p className="track-text"> {name} </p>
                  <p className="track-icon"> {this.trackIcon(track)} </p>
                </div>
              );
            })}
            <Pagination
              totalSize={tracks.length}
              currentPage={this.state.currentPage}
              changeCurrentPage={this.changeCurrentPage}
              sizePerPage={this.state.sizePerPage}
            />
            <h2> current Page : {this.state.currentPage} </h2>
          </div>
        ) : (
          <div>
            <h3> No Tracks Found! </h3>
          </div>
        )}
      </div>
    );
  }
}

export default Tracks;

// return (<div><h3>No Tracks Found!</h3></div>)
// this.state.tracksQuery === '' ? <div>{this.state.tracksQuery}</div>
// <div>{this.state.tracksQuery}</div>

// const paginateTracks = tracks.slice(((this.state.sizePerPage * this.state.currentPage) - this.state.sizePerPage), this.state.sizePerPage * this.state.currentPage);

// startIndex: (this.state.sizePerPage * this.state.currentPage) - this.state.sizePerPage,
// endIndex: this.state.sizePerPage * this.state.currentPage,
// console.log(this.state.startIndex,this.state.endIndex)

// componentDidMount() {
//     this.calculatePages();
// }

// componentDidMount() {
//     this.setState({totalSize: this.props.tracks.length});
//     this.calculatePages(this.props.tracks.length);
//     console.log(this.props.tracks.length);
// }

// calculatePages = () => {
//     console.log(this.props.tracks.length);
// }
//     this.setState({totalPages: 5});
//     if (this.props.tracks.length % 2 === 0)
//         this.setState({totalPages: (this.props.tracks.length / this.state.sizePerPage)});
//     else
//         this.setState({totalPages: ((this.props.tracks.length / this.state.sizePerPage) + 1)});
// };

// this.setState({tracksQuery: e.target.value});
// console.log('event-target-value', e.target.value);
// console.log("In Render",this.state.tracksQuery);
// console.log("tracksquery",this.state.tracksQuery," Length",this.state.tracksQuery.length);
// this.state.tracksQuery === '' ? <h2>Null</h2> : <p>{this.state.tracksQuery}</p>
