import db from '../db/connect.js'
import { DataTypes } from 'sequelize'
import { User } from './user.model.js'

export const EmailCode = db.define('email_code', {
    code: {
        type:DataTypes.STRING,
        allowNull: false
    }
})

User.hasOne(EmailCode)
EmailCode.belongsTo(User)