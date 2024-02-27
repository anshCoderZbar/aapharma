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
    getPersonnelBanner: () => HttpClient.get(API_ENDPOINTS.personnelBanner),
    getPersonnelCharacterized: () =>
      HttpClient.get(API_ENDPOINTS.personnelCharacterized),
    getTeamMember: () => HttpClient.get(API_ENDPOINTS.getTeamMember),
    getOperatingPhilosophy: () =>
      HttpClient.get(API_ENDPOINTS.operatingPhilosophy),
    getOperatingPhilosophyDiagram: () =>
      HttpClient.get(API_ENDPOINTS.operatingPhilosophyDiagram),
    getTestimonialPageHeading: () =>
      HttpClient.get(API_ENDPOINTS.testimonialPageHeading),
    getAllTestimonial2: () => HttpClient.get(API_ENDPOINTS.getAllTestimonial2),
  };
  services = {
    getCustomChemicalSynthesis: () =>
      HttpClient.get(API_ENDPOINTS.getCustomChemicalSynthesis),
    getSingleChemicalSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCustomChemicalSynthesis, params),
    getExpertiseIncludes: () => HttpClient.get(API_ENDPOINTS.expertiseIncludes),
    getTherapeuticsBanner: () =>
      HttpClient.get(API_ENDPOINTS.getTherapeuticsBanner),
    getTherapeuticsSupport: () =>
      HttpClient.get(API_ENDPOINTS.supportTherapeutics),
    getAllStepsTherapeutics: () =>
      HttpClient.get(API_ENDPOINTS.allStepsTherapeutics),
    serviceFeaturedImage: () =>
      HttpClient.get(API_ENDPOINTS.serviceFeaturedImage),
    getAdcLinker: () => HttpClient.get(API_ENDPOINTS.getAdcLinker),
    getTherapeuticsBottom: () =>
      HttpClient.get(API_ENDPOINTS.getTherapeuticsBottom),
    getCarbohydrateBanner: () =>
      HttpClient.get(API_ENDPOINTS.carbohydrateBanner),
    allCarbohydrateTimeline: () =>
      HttpClient.get(API_ENDPOINTS.allCarbohydrateTimeline),
    getCarbohydrateDiagram: () =>
      HttpClient.get(API_ENDPOINTS.allCarbohydrateDiagram),
    getResearchDevelopmentBanner: () =>
      HttpClient.get(API_ENDPOINTS.researchDevelopmentBanner),
    getResearchDevelopmentSort: () =>
      HttpClient.get(API_ENDPOINTS.researchDevelopmentSort),
  };
  contact = {
    contactUs: (params) => HttpClient.post(API_ENDPOINTS.contactUs, params),
    getEmploymentBanner: () => HttpClient.get(API_ENDPOINTS.employmentBanner),
    getEmploymentResponsibilities: () =>
      HttpClient.get(API_ENDPOINTS.employmentResponsibilities),
    sendResume: (params) => HttpClient.post(API_ENDPOINTS.resume, params),
  };
  caseStudy = {
    getCaseStudy: () => HttpClient.get(API_ENDPOINTS.caseStudyTabs),
    singleCaseStudyTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCaseStudyTabs, params),
    getCaseStudyGraphContent: () =>
      HttpClient.get(API_ENDPOINTS.caseStudyGraphContent),
    getCaseStudyDiagramData: () =>
      HttpClient.get(API_ENDPOINTS.getCaseStudyDiagramData),
  };
  capabilities = {
    getChemistryExpertiseBanner: () =>
      HttpClient.get(API_ENDPOINTS.chemistryExpertiseBanner),
  };
}

const client = new Client();

export default client;
