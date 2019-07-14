import { DataProvider } from "../../Common/Utilities/DataProvider";

export class UserService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async validate(UserName: string, password: string) {
    debugger
   if(UserName !== "" && password !== ""){
   
   
      let data = { "UserName": UserName, "password": password };
 
         return this.dataProvider.PostData(`people?search=${data.UserName}`, data)
   }
 else{
   return 0;
 }

}
}

export default UserService;
