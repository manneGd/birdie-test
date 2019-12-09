import app from "../src/application";
import * as request from 'supertest';

describe('Check database connection', () => {
    it('Database connexion', async () => {
        await request(app)
            .get('/api/events')
            .expect(200)
    });
    it('Check root response status', async () => {
        await request(app)
            .get('/')
            .expect(404)
    });
    it('Check /api response status', async () => {
        await request(app)
            .get('/api/')
            .expect(404)
    });
});

