import {DataTypes} from 'sequelize';
import {sql} from '../utils/db'

const User = sql.define('User', {
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false}
})


export default User;