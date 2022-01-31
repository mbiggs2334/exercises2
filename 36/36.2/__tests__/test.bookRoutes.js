const app = require('../app');
const db = require('../db');
const request = require('supertest');

afterAll(async function() {
    await db.end();
});

describe('Test book routes', () => {

    test('test GET / route', async () => {
        const res = await request(app).get('/books');
        expect(res.body.books.length).toEqual(2);
        expect(res.statusCode).toEqual(200);
    });

    test('test GET /:id route', async () => {
        const res = await request(app).get('/books/061512468');
        expect(res.body.book.title).toEqual('Sword of Truth');
        expect(res.statusCode).toEqual(200);
    });

    test('test POST / route', async () => {
        const data = {
            "isbn": "1236876",
            "amazon_url": "http://a.co/eobPtX9",
            "author": "Eren",
            "language": "titan",
            "pages": 650,
            "publisher": "Princeton University Press",
            "title": "Subjects of Ymir",
            "year": 2022
          }
        const res = await request(app).post('/books').send(data);
        expect(res.body.book.title).toEqual('Subjects of Ymir');
        expect(res.statusCode).toEqual(201);
    });

    test('test PUT /:id route', async () => {
        const data = {
            "isbn": "1236876",
            "amazon_url": "http://a.co/eobPtX9",
            "author": "Eren Yeager",
            "language": "titan",
            "pages": 650,
            "publisher": "Princeton University Press",
            "title": "Subjects of Ymir",
            "year": 2022
          };
        const res = await request(app).put('/books/1236876').send(data);
        expect(res.body.book.author).toEqual('Eren Yeager');
        expect(res.statusCode).toEqual(200);
    });

    test('test DELETE /:id route', async () => {
        const res = await request(app).delete('/books/1236876');
        expect(res.body.message).toEqual('Book deleted');
        expect(res.statusCode).toEqual(200);
    });

});