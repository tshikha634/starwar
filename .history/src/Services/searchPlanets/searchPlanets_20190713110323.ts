import { DataProvider } from "../../Common/Utilities/DataProvider";

export class SearchService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async getPlanetsByName(data:any) {
    return this.dataProvider.GetData(`?search=${data.username}`)
  }

  // public async setUserById(data:any) {
  //   return this.dataProvider.PostData(`?search=${data.username}`, data)
  // }
  
}

export default SearchService;
