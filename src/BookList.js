import React from 'react'
import {
    Container,
    Header,
    Menu,
    Button,
    List,
    Image
  } from "semantic-ui-react"

const BookList = ({books, showDetails}) => {
    return(
        <Menu vertical inverted>
            {books.map(book => <Menu.Item as={"a"} onClick={() => showDetails(book)} key={book.id}>
            {book.title}
          </Menu.Item>)}
          
        </Menu>
    )
}

export default BookList