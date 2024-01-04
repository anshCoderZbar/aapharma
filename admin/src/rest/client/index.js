import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

class Client {
  auth = {
    login: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.login, { ...params }),
  };
  catalog = {
    addCatalogL1: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.addCatalogL1, { ...params }),
    catalogL1: () => HttpClient.get(API_ENDPOINTS.catalogsL1),
    singleCatalogL1: (id) =>
      HttpClient.post(API_ENDPOINTS.singleCatalogL1, { id: id }),
    updateCatalogL1: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.updateCatalogL1, { ...params }),
    deleteCatalogL1: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteCatalogL1, { id: id }),
    addCatalogL2: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.addCatalogL2, { ...params }),
    catalogL2: () => HttpClient.get(API_ENDPOINTS.catalogsL2),
    singleCatalogL2: (id) =>
      HttpClient.post(API_ENDPOINTS.singleCatalogL2, { id: id }),
    updateCatalogL2: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.updateCatalogL2, { ...params }),
    deleteCatalogL2: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteCatalogL2, { id: id }),
    addCatalogL3: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.addCatalogL3, { ...params }),
    catalogL3: () => HttpClient.get(API_ENDPOINTS.catalogL3),
    singleCatalogL3: (id) =>
      HttpClient.post(API_ENDPOINTS.singleCatalogL3, { id: id }),
    updateCatalogL3: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.updateCatalogL3, { ...params }),
    deleteCatalogL3: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteCatalogL3, { id: id }),
  };
  chemical = {
    addChemical: (params) => HttpClient.post(API_ENDPOINTS.addChemical, params),
    chemical: () => HttpClient.get(API_ENDPOINTS.chemicals),
    singleChemical: (id) =>
      HttpClient.post(API_ENDPOINTS.singleChemical, { id: id }),
    updateChemical: (params) =>
      HttpClient.post(API_ENDPOINTS.updateChemical, params),
    deleteChemical: (id) =>
      HttpClient.post(API_ENDPOINTS.deleteChemical, { id: id }),
    createUtility: (params) =>
      HttpClient.post(API_ENDPOINTS.createUtility, params),
    getUtility: (id) =>
      HttpClient.post(API_ENDPOINTS.getUtilityEndpoint, { chemicalId: id }),
  };
  home = {
    createBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.createBanner, params),
    getBanner: () => HttpClient.get(API_ENDPOINTS.getBanner),
    createCompanyMission: (params) =>
      HttpClient.post(API_ENDPOINTS.createCompanyMission, params),
    getCompanyMission: () => HttpClient.get(API_ENDPOINTS.getCompanyMission),
    createSeviceheading: (params) =>
      HttpClient.post(API_ENDPOINTS.createSeviceheading, params),
    getServiceHeading: () => HttpClient.get(API_ENDPOINTS.getSeviceheading),
    addService: (params) => HttpClient.post(API_ENDPOINTS.addService, params),
    allServices: () => HttpClient.get(API_ENDPOINTS.allServices),
    singleService: (id) =>
      HttpClient.post(API_ENDPOINTS.singleService, { serviceId: id }),
    updateServices: (params) =>
      HttpClient.post(API_ENDPOINTS.updateServices, params),
    deleteService: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteService, params),
    createVision: (params) =>
      HttpClient.post(API_ENDPOINTS.createVision, params),
    getVision: () => HttpClient.get(API_ENDPOINTS.getVision),
    addClientImg: (params) => HttpClient.post(API_ENDPOINTS.addClient, params),
    allClientsImg: () => HttpClient.get(API_ENDPOINTS.allClients),
    singleClient: (params) =>
      HttpClient.post(API_ENDPOINTS.singleClient, params),
    deleteClientsImg: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteClient, params),
    updateClientImg: (params) =>
      HttpClient.post(API_ENDPOINTS.updateClient, params),
    addTestimonial: (params) =>
      HttpClient.post(API_ENDPOINTS.addTestimonial, params),
    getTestimonial: () => HttpClient.get(API_ENDPOINTS.getTestimonial),
    deleteTestimonial: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteTestimonial, params),
    singleTestimonial: (params) =>
      HttpClient.post(API_ENDPOINTS.singleTestimonial, params),
    editTestimonial: (params) =>
      HttpClient.post(API_ENDPOINTS.editTestimonial, params),
    addArticle: (params) => HttpClient.post(API_ENDPOINTS.addArticles, params),
    getArticles: () => HttpClient.get(API_ENDPOINTS.getArticles),
    deleteArticle: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteArticle, params),
    singleArticle: (params) =>
      HttpClient.post(API_ENDPOINTS.singleArticle, params),
    editArticle: (params) => HttpClient.post(API_ENDPOINTS.editArticle, params),
  };
  main = {
    settings: (params) => HttpClient.post(API_ENDPOINTS.settings, params),
    getSettings: () => HttpClient.get(API_ENDPOINTS.settings),
  };
  about = {
    createAboutBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.createAboutBanner, params),
    getAboutBanner: () => HttpClient.get(API_ENDPOINTS.getAboutBanner),
    createAboutCard: (params) =>
      HttpClient.post(API_ENDPOINTS.createAboutUsCard, params),
    getAboutUsCard: () => HttpClient.get(API_ENDPOINTS.getAboutUsCard),
    createTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.createTimeline, params),
    getTimeline: () => HttpClient.get(API_ENDPOINTS.getTimeline),
    singleTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.singleTimeline, params),
    updateTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.updateTimeline, params),
    deleteTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteTimeline, params),
  };
  personnel = {
    createPersonnelBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.personnelBanner, params),
    getPersonnelBanner: () => HttpClient.get(API_ENDPOINTS.personnelBanner),
    createPersonnelCharacterized: (params) =>
      HttpClient.post(API_ENDPOINTS.personnelCharacterized, params),
    getPersonnelCharacterized: () =>
      HttpClient.get(API_ENDPOINTS.personnelCharacterized),
    addTeamMember: (params) =>
      HttpClient.post(API_ENDPOINTS.addTeamMember, params),
    getTeamMember: () => HttpClient.get(API_ENDPOINTS.getTeamMember),
    singleTeamMember: (params) =>
      HttpClient.post(API_ENDPOINTS.singleTeamMember, params),
    editTeamMember: (params) =>
      HttpClient.post(API_ENDPOINTS.updateTeamMember, params),
    deleteTeamMember: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteTeamMember, params),
  };
}
const client = new Client();

export default client;
