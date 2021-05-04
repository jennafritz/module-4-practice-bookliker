import React from 'react'
import {
    Container,
    Header,
    Menu,
    Button,
    List,
    Image
  } from "semantic-ui-react";

const BookDetails = ({displayBook, handleLike}) => {
    return(
        <Container text>
        <Header>{displayBook.title}</Header>
          <Image
            src={displayBook['img_url']}
            size="small"
          />
          <p>{displayBook.description}</p>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: displayBook.users.length
            }}
            onClick={() => handleLike(displayBook)}
          />
        <Header>Liked by</Header>
          <List>
              {displayBook.users.map(user => <List.Item icon="user" content={user.username} key={user.id}/>)}
          </List>
    </Container>

    )
}

export default BookDetails