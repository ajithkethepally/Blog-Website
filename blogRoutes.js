const express = require('express');

const blogController = require('../controller/blogController');
const router = express.Router();


router.delete("/:id", blogController.blog_delete);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

router.post("/", blogController.blog_create_post);

router.get("/", blogController.blog_index);

module.exports = router;