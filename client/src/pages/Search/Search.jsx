import React from 'react';
import './Search.css';
import { CardBody, FormInput } from "shards-react";
import {
    Card,
    CardHeader,
    // CardBody,
    Button,
  } from "shards-react";


function Search(){

    return(
        <Card className="searchCard">
            <CardHeader className="google">Google Books Search</CardHeader>
                <CardBody>
                    <FormInput placeholder="search" />
                    <Button theme="light">Search</Button>
                </CardBody>
        </Card>

)}

export default Search;