import { DataProvider } from "../../Common/Utilities/DataProvider";

export class UserService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async validate(UserName: string, password: string) {
    if (UserName != "" && password != "") {
      let data = { "UserName": UserName, "password": password };
      return this.dataProvider.PostData("users/login", data)
    }
    else {
      return 0;
    }
  }

  public async getUserById(id :number) {
    return this.dataProvider.GetData(`api/users/${id}`)
  }

  public async setUserById(data:any) {
    return this.dataProvider.PostData("api/users/", data)
  }
  
}

export default UserService;
