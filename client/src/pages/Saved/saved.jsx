import React, { Component } from "react";
import Jumbotron from "../../components/components/Jumbotron";
import Card from "../../components/components/Card";
import Book from "../../components/components/Book";
import Footer from "../../components/components/Footer";
import API from "../../utils/API/API";
import { Col, Row, Container } from "../../components/components/Grid";
import { List } from "../../components/components/List";
class Saved extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.getSavedBooks();
  }
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  <h1>Rendering the resuls will appear here</h1>
                  {/* {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))} */}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
export default Saved;



// import React from 'react';

// const Saved = (props) => {

//     return(

//     )
// };

// export default Saved;