// import React, {Component} from "react";
//
// class SearchTracks extends Component {
//     state = {tracksQuery: '', filtertracks: []};
//
//     updateTrackQuery = (e) => {
//         this.setState({tracksQuery: e.target.value});
//         this.searchTracks();
//     };
//
//
//     searchTracks = () => {
//
//         const {tracks} = this.props;
//         let filtertracks = tracks.filter(
//             track => track.name.toLowerCase().indexOf(this.state.tracksQuery.toLowerCase()) !== -1
//         );
//
//         this.props.searchResults(filtertracks);
//     };
//
//     render() {
//         return (
//             <div>
//
//                 <input onChange={this.updateTrackQuery}
//                        placeholder='Search for a track'/>
//                 <br/>
//                 {this.state.tracksQuery === '' ? <div>{this.state.tracksQuery}</div> :
//                     <div>{this.state.tracksQuery}</div>}
//             </div>
//         )
//     }
// }
//
// export default SearchTracks;
//
//
// // <button onClick={this.searchTracks}>Search</button>
//
// // onKeyPress={this.handleKeyPress}
// /*{
//                 if (track.name.toLowerCase().includes(this.state.tracksQuery.toLowerCase()))
//                     return track;
//             }*/
//
// // handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //         this.searchTracks();
// //     }
// // };
