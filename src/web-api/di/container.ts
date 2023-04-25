import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { RegisterService } from "../../domain/services/registers/register.service.js";

export const loadContainer = (app: Application) => {
  const Container = createContainer({
    injectionMode: 'CLASSIC'
  })

  Container.register({
    registerService: asClass(RegisterService).singleton()
  });
  
  app.use(scopePerRequest(Container));
}