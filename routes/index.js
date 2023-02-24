import express, { Router } from "express";
import user from "./api/user.route";


const routes = express.Router();

routes.use("/", user);

export default routes;