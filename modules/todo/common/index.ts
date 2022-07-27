export interface ITodoService {
  showMessage(message: string): void;
}

export const ITodoService = Symbol('ITodoService');