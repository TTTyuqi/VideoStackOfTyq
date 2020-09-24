import { Test, TestingModule } from '@nestjs/testing';
import { VlogsController } from './vlogs.controller';

describe('VlogsController', () => {
  let controller: VlogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VlogsController],
    }).compile();

    controller = module.get<VlogsController>(VlogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
