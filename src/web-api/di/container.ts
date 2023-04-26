import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { RegisterService } from "../../domain/services/registers/register.service.js";
import { RegisterRepositoryImpl } from "../../data/repositories/registers/register.repository.js";
import { RegisterMongoDatasource } from "../../data/data-sources/registers/register.mongo.datasource.js";

export const loadContainer = (app: Application) => {
  const Container = createContainer({
    injectionMode: 'CLASSIC'
  })

  Container.register({
    registerService: asClass(RegisterService).singleton(),
    registerRepository: asClass(RegisterRepositoryImpl).singleton(),
    registerMongoDataSource: asClass(RegisterMongoDatasource).singleton(),
  });
  
  app.use(scopePerRequest(Container));
}