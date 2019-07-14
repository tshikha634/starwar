import { DataProvider } from "../../Common/Utilities/DataProvider";

export class UserService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  } 

 public async setUser(data : any) {
    return this.dataProvider.PostData("api/users/", data, true)
  }

}

export default UserService