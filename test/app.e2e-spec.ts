import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/todos (GET) should return an empty array', () => {
    return request(app.getHttpServer()).get('/api/todos').expect(200);
  });

  it('/api/todos (POST) should create a new todo', () => {
    const todoData = {
      title: 'Test Todo 2',
      description: 'This is a test todo 3',
      status: 'test ',
    };
    return request(app.getHttpServer())
      .post('/api/todos')
      .send(todoData)
      .expect(201);
  });

  it('/todos/:id (GET) should return a single todo', async () => {
    const todoData = {
      title: 'Test Todo 4',
      description: 'This is todo 5',
      status: 'done ',
    };
    const createResponse = await request(app.getHttpServer())
      .post('/api/todos')
      .send(todoData)
      .expect(201);

    const todoId = createResponse.body.id;

    return request(app.getHttpServer())
      .get(`/api/todos/${todoId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.objectContaining(todoData));
      });
  });

  it('/api/todos/:id (PUT) should update a todo', async () => {
    const todoData = {
      title: 'Test Todo 312',
      description: 'This is 1232',
      status: 'done',
    };
    const createResponse = await request(app.getHttpServer())
      .post('/api/todos')
      .send(todoData)
      .expect(201);

    const todoId = createResponse.body.id;
    const updateData = {
      title: 'Updated Todo 5',
      description: 'This is a updated todo 11',
      status: 'done',
    };

    return request(app.getHttpServer())
      .put(`/api/todos/${todoId}`)
      .send(updateData)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.objectContaining(updateData));
      });
  });

  it('/api/todos/:id (DELETE) should delete a todo', async () => {
    const todoData = {
      title: 'Test Todo lorem',
      description: 'This is a test task la',
      status: 'test',
    };
    const createResponse = await request(app.getHttpServer())
      .post('/api/todos')
      .send(todoData)
      .expect(201);

    const todoId = createResponse.body.id;

    return request(app.getHttpServer())
      .delete(`/api/todos/${todoId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.objectContaining(todoData));
      });
  });
});
