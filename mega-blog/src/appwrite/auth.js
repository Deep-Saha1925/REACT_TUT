import conf from '../config/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthSerive {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    
}

const authService = new AuthSerive();

export default authService
