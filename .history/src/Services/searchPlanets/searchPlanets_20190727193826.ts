import { DataProvider } from "../../Common/Utilities/DataProvider";

export class SearchService {
  constructor(private dataProvider: DataProvider) {
    this.dataProvider = new DataProvider();
  }

  public async getPlanetsByName(params:any) {
    debugger
    if(params){
    return this.dataProvider.GetData(`planets/?search${params}`)
    
  }
  console.log(params)
}

}

export default SearchService;
