import conf from '../config/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthSerive {
    client = new Client();
    account;

    
}

const authService = new AuthSerive();

export default authService
