import { Injectable, Autowired } from '@opensumi/di';
import { IMessageService } from '@opensumi/ide-overlay';
import { ITodoService } from '../common';

@Injectable()
export class TodoService implements ITodoService {
  @Autowired(IMessageService)
  private messageService: IMessageService;

  showMessage = (message: string) => {
    this.messageService.info(message);
  };
}