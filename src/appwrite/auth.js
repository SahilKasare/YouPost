import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint('conf.appwriteURL') // Your API Endpoint
        .setProject('conf.appwriteProjectId'); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method to login the user, so user directly logs in after sign up
                return this.login(email, password);
            } else {
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login(email, password){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            //gets the account directly from the account which has been created when the object is called
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            //deletes all sessions
            return await this.account.deleteSessions();
            // instead deleteSession('current') can also be used to delete the current session
        } catch (error) {
            throw error;
        }
    }
}



const authService = new AuthService();
export default authService;