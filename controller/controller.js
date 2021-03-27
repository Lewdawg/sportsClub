const NewMember = require('../model/template.js');



const allMembers = (req, res) => {
    NewMember.find({}).sort({ lastName: -1 })
        .then((result) => {
            res.render('accounts/index', { title: 'All Members', members: result })
        })
        .catch((err) => {
            console.log(err);
        });
}


const idMember = (req, res) => {

    const id = req.params.id;

    NewMember.findById(id)
        .then((result) => {
            res.render('accounts/details', { title: 'Member Details', members: result });
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Account not found' });
        });
}


const createMemberGet = (req, res) => {
    res.render('accounts/create', { title: 'Create new Account' });
}


const addMemberPost = (req, res) => {
    console.log(req.body)                        //<--Log's the new created account.

    const newAcc = new NewMember(req.body);      //<--Saving the data how the Blog Schema is templated.

    newAcc.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        });
}


const deleteMember = (req, res) => {

    const id = req.params.id;

    NewMember.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' })
        })
        .catch(err => {
            console.log(err);
        });
}


const editMember = (req, res) => {

    const id = req.params.id;

    NewMember.updateOne(id, { firstName: "Tommy" }, { firstName: "Lewes" })
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err));
}


module.exports = {
    allMembers,
    idMember,
    createMemberGet,
    addMemberPost,
    deleteMember,
    editMember
}