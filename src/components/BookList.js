import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
 query GetBooks{
    books{
        name
        id
    }
 }
`

export default function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    const allBooks = data?.books;

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;


    return (
        <div>
            {
                allBooks.map(book => (
                    <ul key={book.id} id="book-list" >
                        <li >{book.name}</li>
                    </ul>
                ))
            }

        </div>
    )
}
