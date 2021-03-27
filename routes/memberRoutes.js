const express = require('express');

//Controller
const controller = require('../controller/controller.js');


const router = express.Router();


router.get('/', controller.allMembers);

router.post('/', controller.addMemberPost);

router.get('/create', controller.createMemberGet);

router.get('/:id', controller.idMember);

router.delete('/:id', controller.deleteMember);

router.put('/:id', controller.editMember);


module.exports = router;