import { Test, TestingModule } from '@nestjs/testing';
import { QualifyingsService } from './qualifyings.service';

describe('QualifyingsService', () => {
  let service: QualifyingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QualifyingsService],
    }).compile();

    service = module.get<QualifyingsService>(QualifyingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
