class ZipCheckupAPI {
  constructor() {
    this.baseURL = "";
  }

  async getSafeyScore(zipCode) {
    const response = await fetch(`${this.baseURL}/zip/${zipCode}/score`);

    if (!response.ok) {
      throw new Error("Unable to find information for this ZIP Code.");
    }

    const result = await response.json();

    return result.data;
  }
}

class ConstructionCheckApp {
  constructor() {
    this.api = new ZipCheckupAPI();
  }
}
