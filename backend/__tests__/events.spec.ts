import app from "../src/application";
import * as request from 'supertest';

describe('Check /api/events values', () => {
    it('Get 25 values', async () => {
        await request(app)
            .get('/api/events')
            .expect(200)
            .expect(res => {
                expect(res.body.length).toEqual(25);
            });
    });
    it('Check the content of the body', async () => {
        await request(app)
            .get('/api/events')
            .expect(200)
            .expect(res => {
                expect(res.body[0].payload_as_text).toContain('id');
            })
    });
});

describe('Check query parameters', () => {
    it('Check status code for query parameter: page', async () => {
        await request(app)
            .get('/api/events?page=0')
            .expect(200);
    });
    it('Check status code for query parameter: test', async () => {
        await request(app)
            .get('/api/events?test=test')
            .expect(200);
    });
    it('Check status code for query parameter: page + test', async () => {
        await request(app)
            .get('/api/events?page=1&test=1')
            .expect(200);
        await request(app)
            .get('/api/events?test=1&page=1')
            .expect(200);
    });
    it('Check status code for query parameter: page=test', async () => {
        await request(app)
            .get('/api/events?page=test')
            .expect(400);
    });
    it('Check status code for query: /type?test=test', async () => {
        await request(app)
            .get('/type?test=test')
            .expect(404);
    });
    it('Check status code for query: /type/general_observation?test=test', async () => {
        await request(app)
            .get('/type/general_observation?test=test')
            .expect(404);
    });
});

describe('Check others roots', () => {
   it('Check time root', async () => {
       await request(app)
           .get('/api/events/time/2019-04-23T18:24:16.536Z')
           .expect(200);
       await request(app)
           .get('/api/events/time/test')
           .expect(200)
           .expect(res => {
               expect(res.body.length).toEqual(0);
           });
   });
   it('Check type root', async () => {
       await request(app)
           .get('/api/events/type/general_observation')
           .expect(200);
       await request(app)
           .get('/api/events/type/test')
           .expect(200)
           .expect(res => {
               expect(res.body.length).toEqual(0);
           });
   });
    it('Check caregiver root', async () => {
        await request(app)
            .get('/api/events/caregiver/220d9432-b5ed-4c81-8709-434899d2cd1b')
            .expect(200);
        await request(app)
            .get('/api/events/caregiver/test')
            .expect(200)
            .expect(res => {
                expect(res.body.length).toEqual(0);
            });
    });
    it('Check mood root', async () => {
        await request(app)
            .get('/api/events/mood/okay')
            .expect(400);
    });
});