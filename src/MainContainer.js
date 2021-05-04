import React, {Component} from 'react'
import BookList from './BookList'
import BookDisplayContainer from './BookDisplayContainer'
import {
    Container,
    Header,
    Menu,
    Button,
    List,
    Image
  } from "semantic-ui-react";

class MainContainer extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            displayBook: {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(booksArray => this.setState({books: booksArray}))
    }

    showDetails = (clickedBook) => {
        this.setState({displayBook: clickedBook})
    }

    handleLike = (bookObj) => {
        console.log(bookObj.users)
        let included = bookObj.users.find(user => user.id === 1)
        if (included === undefined){
            fetch(`http://localhost:3000/books/${bookObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    users: [...bookObj.users, {id: 1, username: "pouros"}]
                })
            })
                .then(res => res.json())
                .then(updatedBookObj => {
                    let index = this.state.books.findIndex(book => book.id === bookObj.id)
                    this.state.books.splice(index, 1, updatedBookObj)
                    this.setState({
                        books: this.state.books,
                        displayBook: updatedBookObj
                    })
                })
        } else {
            let newLikers = bookObj.users.filter(user => user.id !== 1)
            console.log(newLikers)
            fetch(`http://localhost:3000/books/${bookObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    users: newLikers
                })
            })
                .then(res => res.json())
                .then(updatedBookObj => {
                    let index = this.state.books.findIndex(book => book.id === bookObj.id)
                    this.state.books.splice(index, 1, updatedBookObj)
                    this.setState({
                        books: this.state.books,
                        displayBook: updatedBookObj
                    })
                })
        }
    }

    render() {
        console.log(this.state.books)
        console.log(this.state.displayBook)
        return(
            <main>
                <BookList books={this.state.books} showDetails={this.showDetails}/>
                <br/>
                <BookDisplayContainer displayBook={this.state.displayBook} handleLike={this.handleLike}/>
            </main>
        )
    }
}

export default MainContainer