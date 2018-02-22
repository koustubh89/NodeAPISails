/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    hi: function (req, res) {
        return res.send('Hi there! koustubh');
    },
    bye: function (req, res) {
        return res.redirect('http://www.sayonara.com');
    },
    getUserList: function (req, res) {
        let list = [{
            "name": "koustubh",
            "email": "koustubh89@gmail.com",
            "address": "75 Manorama Colony",
            "age": "28",
            "contact": "1234567890",
            "id": 1
        }, {
            "name": "ajay",
            "email": "ajay@gmail.com",
            "address": "somewhere in delhi",
            "age": "27",
            "contact": "34567892333",
            "id": 2
        }, {
            "name": "Mayank",
            "email": "mayank@gmail.com",
            "address": "somewhere in pune",
            "age": "23",
            "contact": "23456787654",
            "id": 3
        }, {
            "name": "kuntal desai",
            "email": "kuntal@yahoo.com",
            "address": "indore me rehta hai",
            "age": "36",
            "contact": "98765456789",
            "id": 4
        }];
        return res.send(list);
    }
};

