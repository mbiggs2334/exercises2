const db = require('../db');
const Book = require('../models/book');

afterAll(async function() {
    await db.end();
});

describe('test Book class', () => {

    test('test findOne method', async () => {
        const book = await Book.findOne('061512468');
        expect(book.title).toEqual(expect.any(String));
        expect(book.year).toEqual(expect.any(Number));
    });

    test('test findAll method', async () => {
        const books = await Book.findAll();
        expect(books.length).toEqual(2);
    });

    test('test create method', async () => {
        const data = {
            isbn: "468846735",
            amazon_url: "http://a.co/eobPtX6",
            author: "Some dude",
            language: "english",
            pages: 150,
            publisher: "Princeton University Press",
            title: "Another one",
            year: 2012
          };
        const result = await Book.create(data);
        expect(result.year).toEqual(2012);
    });

    test('test update method', async () => {
        const data = {
            isbn: "468846735",
            amazon_url: "http://a.co/eobPtX6",
            author: "Some dude 2",
            language: "english",
            pages: 150,
            publisher: "Princeton University Press",
            title: "Another one",
            year: 2015
          };
        const result = await Book.update("468846735", data);
        expect(result.year).toEqual(2015);
    });

    test('test remove method', async () => {
        const result = await Book.remove("468846735");
        expect(result).toEqual(undefined);
    });

});