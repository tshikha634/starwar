
export class DataProvider {
  private _baseUrl = process.env.REACT_APP_API_URL || "http://10.10.17.118:9090";

  // GET
  public async GetData(url: string, addAuthHeader: boolean = true) {
    var headers = { "Content-Type": "application/json" };
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}`; }
      const response = await fetch(this.manageUrl(url), {
        mode: 'cors',
        headers: headers,
        method: "GET",
      })
      return this.commonResponse(response)
    } catch (e) { }
  }

  public async GetBlob(url: string, addAuthHeader: boolean = true) {
    var headers = { "Content-Type": "application/json" };
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}`; }
      const response = await fetch(this.manageUrl(url), {
        mode: 'cors',
        headers: headers,
        method: "GET",
      })
      return await response.blob();
    } catch (e) { }
  }


  // POST
  public async PostData(url: string, data: any, addAuthHeader: boolean = true) {

    var headers = { "Content-Type": "application/json" };
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}` }
      const response = await fetch(this.manageUrl(url), {
        method: "POST",
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      });
      return this.commonResponse(response)
    } catch (e) { }
  }

  // PUT
  public async PutData(url: string, data: any, addAuthHeader: boolean = true) {
    var headers = { "Content-Type": "application/json" };
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}` }
      const response = await fetch(this.manageUrl(url), {
        method: "PUT",
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      });
      return this.commonResponse(response)
    } catch (e) { }
  }

  // DELETE
  public async deleteData(url: string, addAuthHeader: boolean = true) {
    var headers = { "Content-Type": "application/json" }
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}` }
      const response = await fetch(this.manageUrl(url), {
        method: "DELETE",
        headers: headers,
        mode: 'cors',
      });
      return this.commonResponse(response)
    } catch (e) { }
  }

  // PATCH
  public async patchData(url: string, data: any, addAuthHeader: boolean = true) {
    var headers = { "Content-Type": "application/json" };
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}` }
      const response = await fetch(this.manageUrl(url), {
        method: "PATCH",
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      });
      return this.commonResponse(response)
    } catch (e) { }
  }

  //PATCH with Empty Header
  public async patchInvoiceData(url: string, data: any, addAuthHeader: boolean = true) {
    var headers = {};
    try {
      if (addAuthHeader) { headers["Authorization"] = `Bearer ${this.getAuthHeader()}` }
      const response = await fetch(this.manageUrl(url), {
        method: "PATCH",
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      });
      return this.commonResponse(response)
    } catch (e) { }
  }

  // common function 
  public manageUrl(url: string): string {
    if (url.indexOf('http') >= 0)
      return url;
    let furl = `${this._baseUrl}/${url}`
    return furl;
  }

  private getAuthHeader = (): string => {
    try {
      let userData = JSON.parse(localStorage.getItem('userData'));
      if (userData != null)
        return userData.token.access_token;
    }
    catch (e) {
      return "";
    }
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


