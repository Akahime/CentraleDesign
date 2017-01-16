'use strict';

var config = require('./config');
var Sequelize = require('sequelize');

var database = new Sequelize(config.database.dbName, config.database.user, config.database.password, {
    host: config.database.host,
    dialect: 'mysql'
});

var User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    resetPasswordToken: {
        type: Sequelize.STRING
    },
    resetPasswordExpires: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: true
});

var Order = database.define('order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER
    },
    type: {
        type: Sequelize.STRING
    },
    size_length: {
        type: Sequelize.INTEGER
    },
    size_height: {
        type: Sequelize.INTEGER
    },
    size_unit: {
        type: Sequelize.STRING
    },
    resolution: {
        type: Sequelize.STRING
    },
    output: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    comment: {
        type: Sequelize.TEXT
    }
}, {
    freezeTableName: true
});

var DesignerOrder = database.define('designer_order', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    designerId: {
        type: Sequelize.INTEGER
    },
    orderId: {
        type: Sequelize.INTEGER
    }
}, {
    freezeTableName: true
});

// Don't be attracted by the dark side of the force. The force needs to stay falsy here.
User.sync();
Order.sync();
DesignerOrder.sync();

module.exports.Order = Order;
module.exports.User = User;
module.exports.DesignerOrder = DesignerOrder;
module.exports.database = database;