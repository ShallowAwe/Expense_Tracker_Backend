import * as transactionController from "../../controllers/transaction.controller.js";


router.post("/", transactionController.create);
router.get("/", transactionController.getAll);
router.get("/:id", transactionController.getOne);
router.put("/:id", transactionController.update);
router.delete("/:id", transactionController.remove);
export default router;