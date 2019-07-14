import { DataProvider } from "../../Common/Utilities/DataProvider";

export class UserService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async validate(UserName: string, password: string) {
    debugger
    if (UserName === "Luke Skywalker" && password === "19BBY") {
      let data = { "UserName": UserName, "password": password };
         return this.dataProvider.PostData(`people?search=${data.UserName}`, data)
    }
    else {
      return 0;
    }
  }

  // public async getUserById(data:any) {
  //   return this.dataProvider.GetData(`?search=${data.username}`)
  // }

  // public async setUserById(data:any) {
  //   return this.dataProvider.PostData(`?search=${data.username}`, data)
  // }
  
}

export default UserService;
