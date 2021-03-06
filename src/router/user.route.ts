import { Router } from "express";
import cache  from '../cache/cacheinit' 

import { listUser , findOneUser, addUser , updateUser } from '../controller/user.controller';


const userRutas = Router()

userRutas.get('/user', cache.withTtl('10 seconds') ,listUser)
userRutas.get('/user/:id', cache.withTtl('10 seconds'), findOneUser)
userRutas.post('/user', addUser )
userRutas.patch('/user/:id', updateUser)

export default userRutas;