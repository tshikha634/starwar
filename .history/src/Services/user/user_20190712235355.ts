import { DataProvider } from "../../Common/Utilities/DataProvider";

export class UserService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async validate(UserName: string, password: string, id : any) {
    if (UserName != "" && password != "") {
      let data = { "UserName": UserName, "password": password };
      return this.dataProvider.PostData(`people/${id}`, data)
    }
    else {
      return 0;
    }
  }

  public async getUserById(data:any) {
    return this.dataProvider.GetData(`?search=${data.username}`)
  }

  public async setUserById(data:any) {
    return this.dataProvider.PostData(`?search=${data.username}`, data)
  }
  
}

export default UserService;
