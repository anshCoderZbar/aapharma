const { API_ENDPOINTS } = require("./endpoints");
const { HttpClient } = require("./http-client");

class Client {
  catalog = {
    catalogCategory1: () => HttpClient.get(API_ENDPOINTS.catalogsL1),
    catalogCategory2: () => HttpClient.get(API_ENDPOINTS.catalogsL2),
    catalogCategory3: () => HttpClient.get(API_ENDPOINTS.catalogsL3),
  };
  chemical = {
    chemical: () => HttpClient.get(API_ENDPOINTS.chemicals),
    singleChemical: (id) =>
      HttpClient.post(API_ENDPOINTS.singleChemical, { id: id }),
    filterChemical: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.chemicalsFilter, { ...params }),
    getUtility: (id) =>
      HttpClient.post(API_ENDPOINTS.getUtility, { chemicalId: id }),
  };
  home = {
    getBanner: () => HttpClient.get(API_ENDPOINTS.getBanner),
    getCompanyMission: () => HttpClient.get(API_ENDPOINTS.getCompanyMission),
    getServiceHeading: () => HttpClient.get(API_ENDPOINTS.getSeviceheading),
    allServices: () => HttpClient.get(API_ENDPOINTS.allServices),
    getVision: () => HttpClient.get(API_ENDPOINTS.getVision),
    allClientsImg: () => HttpClient.get(API_ENDPOINTS.allClients),
    getTestimonial: () => HttpClient.get(API_ENDPOINTS.getTestimonial),
    getArticles: () => HttpClient.get(API_ENDPOINTS.getArticles),
  };
  main = {
    getSettings: () => HttpClient.get(API_ENDPOINTS.getSettings),
  };
  about = {
    getAboutBanner: () => HttpClient.get(API_ENDPOINTS.getAboutBanner),
    getAboutUsCard: () => HttpClient.get(API_ENDPOINTS.getAboutUsCard),
    getTimeline: () => HttpClient.get(API_ENDPOINTS.getTimeline),
  };
}

const client = new Client();

export default client;
