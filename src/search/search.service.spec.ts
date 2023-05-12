import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from './search.service';
import * as pactum from 'pactum';
describe('SearchService', () => {
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchService],
    }).compile();

    service = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('search not null', ()=> {
    return pactum.spec().get("/search?k=hello").expectStatus(200)
  })

  it("search null", ()=> {
    return pactum.spec().get("/search?k=").expectStatus(404);
  })
});
