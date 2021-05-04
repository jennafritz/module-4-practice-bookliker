import React from 'react'
import {
    Container,
    Header,
    Menu,
    Button,
    List,
    Image
  } from "semantic-ui-react";
import BookDetails from './BookDetails'

const BookDisplayContainer = ({displayBook, handleLike}) => {
    return(
        <Container text>
            {displayBook.id !== undefined ? <BookDetails displayBook={displayBook} handleLike={handleLike}/> : null}            
        </Container>
    )
}

export default BookDisplayContainer