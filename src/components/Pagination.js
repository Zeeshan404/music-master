import React, {Component} from 'react';
import axios from 'axios';
import {useEffect} from 'react';

class Pagination extends Component {
    state = {
        posts: [],
        loading: false,
        currentPage: 1,
        postsPerPage: 10
    };




    useEffect = () => {
        const fetchPost = async () => {
            this.setState({loading: true});
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.setState({posts: res.data, loading: false});
        }
        fetchPost();
    };

    render() {
        console.log(this.state.posts);
        return (
            <div>
                <h2>Pagination</h2>
            </div>
        )
    }
}

export default Pagination;

{/*<Pagination*/
}
{/*    currentPage={this.state.currentPage}*/
}
{/*    totalPages={10}*/
}
{/*    changeCurrentPage={this.changeCurrentPage}*/
}
{/*    sizePerPage={2}*/
}
{/*/>*/
}
{/*<h2>current Page:{this.state.currentPage}</h2>*/
}
