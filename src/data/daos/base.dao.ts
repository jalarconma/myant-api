export interface BaseDAO<T> { 
  add(entity: T): Promise<T>;
  delete(id: string): Promise<T>;
  update(entity: T): Promise<T>;
  get(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}