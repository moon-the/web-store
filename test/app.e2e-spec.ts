import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as pactum from "pactum";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe("Test User", () => {
    describe("create user", () => {
      it("create", () => {
        return pactum.spec().post("/register").withBody({
          email: "admin@admin.com",
          password: "123456789"
        }).expectStatus(200);
      })
    })

    describe("", ()=> {
      return pactum.spec().post("/register").withBody({
        email: "admin@admin.com",
        password: "123456789"
      }).expectStatus(400);
    })

    describe("email undefined", ()=> {
      return pactum.spec().post("/register").withBody({
        email: "",
        password: "123456789"
      }).expectStatus(400);
    })

    describe("password undefined", ()=> {
      return pactum.spec().post("register").withBody({
        email: "admin@admin.com",
        password: "123456789"
      }).expectStatus(400);
    })

  })


  afterAll(() => {
    app.close();
  })
});
