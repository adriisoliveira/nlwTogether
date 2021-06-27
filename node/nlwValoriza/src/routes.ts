import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";


const router = Router();


const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();


router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.get(
  "/tags",
  ensureAuthenticated,
  listTagsController.handle
);

router.post(
  "/users",
  createUserController.handle
);

router.post(
  "/login",
  authenticateUserController.handle
);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

router.get(
  "/users",
  ensureAuthenticated,
  listUsersController.handle
);

export { router };