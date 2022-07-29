import { IMenubarItem, IMenuItem, ISubmenuItem, MenuContribution, MenuId } from "@opensumi/ide-core-browser/lib/menu/next";
import { Domain, IDisposable } from "@opensumi/ide-core-common";

interface IMenuContribution {
  registerMenus?(menus: IMenuRegistry): void;
}

interface IMenuRegistry {
  // 注册新的菜单项
  registerMenubarItem(
    menuId: string,
    item: any
  ): IDisposable;
  // 向已有的菜单项注册子菜单
  registerMenuItem(
    menuId: MenuId | string,
    item: IMenuItem | ISubmenuItem
  ): IDisposable;
}

const testMenuBarId = 'menubar/edit';

@Domain(MenuContribution)
export class MyMenuContribution implements IMenuContribution {
  registerMenus(registry: IMenuRegistry) {
    // registry.registerMenubarItem(testMenuBarId, {
    //   label: '编辑',
    //   order: 0
    // });

    registry.registerMenuItem(testMenuBarId, {
      command: 'editor.saveCurrent', // 'editor.saveCurrent', // 'file.save',
      // group: '1_group',
    });
  }
}