export enum Icon {
  add = 'add',
  copy = 'copy',
  delete = 'delete',
  settings = 'settings',
}

export enum IconSize {
  tiny = 12,
  small = 16,
  medium = 20,
  large = 24,
  huge = 28,
}

export interface IIconUri {
  uri: string;
}

export interface IIcons {
  add: IIconUri;
  settings: IIconUri;
}

export const icons = {
  add: {
    uri: require('@assets/icons/add.png'),
  },
  copy: {
    uri: require('@assets/icons/copy.png'),
  },
  delete: {
    uri: require('@assets/icons/delete.png'),
  },
  settings: {
    uri: require('@assets/icons/settings.png'),
  },
};
