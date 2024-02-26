import { Test, TestingModule } from '@nestjs/testing';
import { QualifyingsController } from './qualifyings.controller';
import { QualifyingsService } from './qualifyings.service';

describe('QualifyingsController', () => {
  let controller: QualifyingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualifyingsController],
      providers: [QualifyingsService],
    }).compile();

    controller = module.get<QualifyingsController>(QualifyingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
