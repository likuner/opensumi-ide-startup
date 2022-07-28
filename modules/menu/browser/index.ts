import { MyMenuContribution } from './menu.contribution';
import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';

@Injectable()
export class MyMenuModule extends BrowserModule {
  providers: Provider[] = [
    MyMenuContribution
  ];
}