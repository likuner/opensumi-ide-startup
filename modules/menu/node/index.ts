import { Provider, Injectable } from '@opensumi/di';
import { NodeModule } from '@opensumi/ide-core-node';

@Injectable()
export class MyMenuModule extends NodeModule {
  providers: Provider[] = [];
}