
export class DataProvider {
  private _baseUrl = "";
  // GET
  public async GetData(url: string, addAuthHeader: boolean = true) {
    var headers = { "Content-Type": "application/json" };
      const response = await fetch(this.manageUrl(url), {
        mode: 'cors',
        headers: headers,
        method: "GET",
      })
      return this.commonResponse(response)
  }

  // POST
  public async PostData(url: string, data: any, addAuthHeader: boolean = true) {

    var headers = { "Content-Type": "application/json" };
      const response = await fetch(this.manageUrl(url), {
        method: "POST",
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      });
      return this.commonResponse(response)
  }

  
  // common function 
  public manageUrl(url: string): string {
    if (url.indexOf('http') >= 0)
      return url;
    let furl = `${this._baseUrl}/${url}`
    return furl;
  }

  public async commonResponse(response) {
    const responsedata = await response.json();
    if (response.status >= 400 && response.status < 600) {
      return { success: false, status: response.status, ...response, data: responsedata }
    } else {
      return { success: true, status: response.status, data: responsedata }
    }
  }
}


