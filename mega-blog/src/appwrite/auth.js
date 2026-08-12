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

    async createAccount({email, passoword, name}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                // Call another method -- login
                this.login({email, passoword});
            }else{
                return userAccount;
            }
        }catch(err){
            throw err;
        }
    }

    async login({email, passoword}) {
        try {
            return await this.account.createEmailPasswordSession(email, passoword);
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthSerive();

export default authService
