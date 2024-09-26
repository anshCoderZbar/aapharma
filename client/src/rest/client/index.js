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
    chemicalsFilterExact: (params) =>
      HttpClient.post(API_ENDPOINTS.chemicalsFilterExact, params),
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
    getAllResearchTabs: () => HttpClient.get(API_ENDPOINTS.getResearchTab),
    getProcessBanner: () => HttpClient.get(API_ENDPOINTS.processBanner),
    getProcessMidSection: () => HttpClient.get(API_ENDPOINTS.processMidSection),
    getProcessResearchDiagram: () =>
      HttpClient.get(API_ENDPOINTS.processResearchDiagram),
    getProcessTabs: () => HttpClient.get(API_ENDPOINTS.getProcessTab),
    getSmallMoleculeBanner: () =>
      HttpClient.get(API_ENDPOINTS.smallMoleculeBanner),
    getHTS: () => HttpClient.get(API_ENDPOINTS.smallHTS),
    getSBDD: () => HttpClient.get(API_ENDPOINTS.smallSBDD),
    getSAR: () => HttpClient.get(API_ENDPOINTS.smallSAR),
    getScaffHolding: () => HttpClient.get(API_ENDPOINTS.scaffHolding),
    getLeadDevelopment: () =>
      HttpClient.get(API_ENDPOINTS.smallLeadDevelopment),
    getAllSmallTabs: () =>
      HttpClient.get(API_ENDPOINTS.getAllSmallMoleculeTabs),
    getIsotopeBanner: () => HttpClient.get(API_ENDPOINTS.isotopeBanner),
    getIsotopeAssessment: () => HttpClient.get(API_ENDPOINTS.isotopeAssessment),
    getIsotopeTable: () => HttpClient.get(API_ENDPOINTS.getIsotopeTable),
    getIsotopeDetails: () => HttpClient.get(API_ENDPOINTS.isotopeDetails),
    getIsotopeButton: () => HttpClient.get(API_ENDPOINTS.isotopeButtons),
    getProjectManagementBanner: () =>
      HttpClient.get(API_ENDPOINTS.projectManagementBanner),
    getProjectManagementBottomDesc: () =>
      HttpClient.get(API_ENDPOINTS.projectManagementBottomDesc),
    getAllProjectManagementList: () =>
      HttpClient.get(API_ENDPOINTS.getAllProjectManagementList),
    getOtherBanner: () => HttpClient.get(API_ENDPOINTS.othersBanner),
    allOtherList: () => HttpClient.get(API_ENDPOINTS.allOthersList),
    getResearchCollaborationBanner: () =>
      HttpClient.get(API_ENDPOINTS.researchCollaborationBanner),
    getResearchCollaborationMidSection: () =>
      HttpClient.get(API_ENDPOINTS.researchCollaborationMidSection),
    getResearchCollaborationDiagram: () =>
      HttpClient.get(API_ENDPOINTS.researchCollaborationDiagram),
    getAllResearchCollaborationAcademia: () =>
      HttpClient.get(API_ENDPOINTS.allResearchCollaborationAcademia),
    getAllResearchCollaborationCompany: () =>
      HttpClient.get(API_ENDPOINTS.allResearchCollaborationCompany),
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
    getAllChemistryTabs: () =>
      HttpClient.get(API_ENDPOINTS.getAllChemistryTabs),
    getPartnerBanner: () => HttpClient.get(API_ENDPOINTS.partnerBanner),
    getAllPartnerCards: () => HttpClient.get(API_ENDPOINTS.getAllPartnerCards),
    getPartnersbottom: () => HttpClient.get(API_ENDPOINTS.partnersbottom),
    allPartnersLogo: () => HttpClient.get(API_ENDPOINTS.allPartnersLogo),
    getPartnerFifthCard: () => HttpClient.get(API_ENDPOINTS.partnerFifthCard),
    getCapabilitiesOverview: () =>
      HttpClient.get(API_ENDPOINTS.capabilitiesOverview),
    getAnalyticalInstrumentation: () =>
      HttpClient.get(API_ENDPOINTS.analyticalInstrumentation),
    getAccreditations: () => HttpClient.get(API_ENDPOINTS.accreditations),
    getLabEquipmentBanner: () =>
      HttpClient.get(API_ENDPOINTS.labEquipmentBanner),
    allLabEquipment: () => HttpClient.get(API_ENDPOINTS.allLabEquipments),
    getOverviewBanner: (params) =>
      HttpClient.get(API_ENDPOINTS.overviewBanner, params),
    allOverviewTabs: () => HttpClient.get(API_ENDPOINTS.allOverviewTab),
    allAnalyticalInstrument: () =>
      HttpClient.get(API_ENDPOINTS.allAnalyticalInstrument),
    allSynthesis: () => HttpClient.get(API_ENDPOINTS.allSynthesis),
  };
  resources = {
    getResourceHeading: () => HttpClient.get(API_ENDPOINTS.resourceHeading),
    getResourceUsefulGuides: () =>
      HttpClient.get(API_ENDPOINTS.resourceUsefulGuides),
    allResourcesTabs: () => HttpClient.get(API_ENDPOINTS.allResourcesTabs),
    getWhitePaperBanner: () => HttpClient.get(API_ENDPOINTS.whitepaperBanner),
    allWhitepapers: () => HttpClient.get(API_ENDPOINTS.allWhitepapers),
    singleWhitepaper: (params) =>
      HttpClient.post(API_ENDPOINTS.singleWhitepaper, params),
    filterWhitepaper: (params) =>
      HttpClient.post(API_ENDPOINTS.allWhitepapers, params),
    getConferenceBanner: () => HttpClient.get(API_ENDPOINTS.conferenceBanner),
    getConferenceCards: () => HttpClient.get(API_ENDPOINTS.conferenceCards),
  };
  cart = {
    addCart: (params) => HttpClient.post(API_ENDPOINTS.addToCart, params),
    getCart: (params) => HttpClient.post(API_ENDPOINTS.getCart, params),
    deleteCart: (params) => HttpClient.post(API_ENDPOINTS.deleteCart, params),
    updateCart: (params) => HttpClient.post(API_ENDPOINTS.updateCart, params),
    checkout: (params) => HttpClient.post(API_ENDPOINTS.checkout, params),
    createPayment: (params) => HttpClient.post(API_ENDPOINTS.onPayment, params),
    paymentSuccess: (params) =>
      HttpClient.post(API_ENDPOINTS.paymentSuccess, params),
    paymentCancel: (params) =>
      HttpClient.post(API_ENDPOINTS.paymentCancel, params),
    checkCoupon: (params) => HttpClient.post(API_ENDPOINTS.checkCoupon, params),
    removeCoupon: (params) =>
      HttpClient.post(API_ENDPOINTS.removeCoupon, params),
  };
}

const client = new Client();

export default client;
