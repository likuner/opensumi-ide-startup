import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { TodoContribution } from './todo.contribution';

@Injectable()
export class TodoListModule extends BrowserModule {
  providers: Provider[] = [TodoContribution];
}