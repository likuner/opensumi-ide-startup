import { Autowired } from '@opensumi/di';
import { Domain, localize } from '@opensumi/ide-core-browser';
import { EXPLORER_CONTAINER_ID } from '@opensumi/ide-explorer/lib/browser/explorer-contribution';
import {
  MainLayoutContribution,
  IMainLayoutService
} from '@opensumi/ide-main-layout';
import { Todo } from './todo.view';

@Domain(MainLayoutContribution)
export class TodoContribution implements MainLayoutContribution {
  @Autowired(IMainLayoutService)
  private mainLayoutService: IMainLayoutService;

  onDidRender() {
    this.mainLayoutService.collectViewComponent(
      {
        component: Todo,
        collapsed: false,
        id: 'todo-view',
        name: 'Todo'
      },
      EXPLORER_CONTAINER_ID
    );
  }
}