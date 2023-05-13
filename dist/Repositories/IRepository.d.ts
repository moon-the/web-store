export interface IRepository {
    findById(id: number): any;
    getAll(attributes?: string[]): Promise<any[]>;
    deleteById(id: number): any;
    save(type: any): any;
    update(any: any): any;
}
