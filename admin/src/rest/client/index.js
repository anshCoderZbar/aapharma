import { API_ENDPOINTS } from "./api-endpoints";
import { HttpClient } from "./http-client";

class Client {
  auth = {
    login: ({ ...params }) =>
      HttpClient.post(API_ENDPOINTS.login, { ...params }),
  };
  routes = {
    createRoute: (params) => HttpClient.post(API_ENDPOINTS.addRoute, params),
    getAllRoutes: () => HttpClient.get(API_ENDPOINTS.allRoutes),
    singleRoute: (params) =>
      HttpClient.post(API_ENDPOINTS.singleRoutes, params),
    editRoute: (params) => HttpClient.post(API_ENDPOINTS.editRoute, params),
    deleteRoute: (params) => HttpClient.post(API_ENDPOINTS.deleteRoute, params),
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
    filterSubCategory: (params) =>
      HttpClient.post(API_ENDPOINTS.filterSubCategory, params),
    filterSubChildCategory: (params) =>
      HttpClient.post(API_ENDPOINTS.filterSubChildCategory, params),
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
    chemicalInStock: (params) =>
      HttpClient.post(API_ENDPOINTS.chemicalInStock, params),
    dublicateChemical: (params) =>
      HttpClient.post(API_ENDPOINTS.dublicateChemical, params),
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
  operatingPhilosophy = {
    createOperatingPhilosophy: (params) =>
      HttpClient.post(API_ENDPOINTS.operatingPhilosophy, params),
    getOperatingPhilosophy: () =>
      HttpClient.get(API_ENDPOINTS.operatingPhilosophy),
    getOperatingPhilosophyDiagram: () =>
      HttpClient.get(API_ENDPOINTS.operatingPhilosophyDiagram),
    singleOperatingPhilosophyDiagram: (params) =>
      HttpClient.post(API_ENDPOINTS.singleOperatingPhilosophyDiagram, params),
    editSingleOperatingPhilosophyDiagram: (params) =>
      HttpClient.post(API_ENDPOINTS.editOperatingPhilosophyDiagram, params),
  };
  chemicalSynthesis = {
    createCustomChemicalSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.createCustomChemicalSynthesis, params),
    getCustomChemicalSynthesis: () =>
      HttpClient.get(API_ENDPOINTS.getCustomChemicalSynthesis),
    getSingleChemicalSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCustomChemicalSynthesis, params),
    updateCustomChemicalSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.updateCustomChemicalSynthesis, params),
    deleteCustomChemicalSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteCustomChemicalSynthesis, params),
    expertiseIncludes: (params) =>
      HttpClient.post(API_ENDPOINTS.expertiseIncludes, params),
    getExpertiseIncludes: () => HttpClient.get(API_ENDPOINTS.expertiseIncludes),
  };
  caseStudy = {
    getCaseStudy: () => HttpClient.get(API_ENDPOINTS.caseStudyTabs),
    singleCaseStudyTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCaseStudyTabs, params),
    editCaseStudyTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.editCaseStudyTabs, params),
    getCaseStudyGraphContent: () =>
      HttpClient.get(API_ENDPOINTS.caseStudyGraphContent),
    editCaseStudyGraphContent: (params) =>
      HttpClient.post(API_ENDPOINTS.caseStudyGraphContent, params),
    getCaseStudyDiagramData: () =>
      HttpClient.get(API_ENDPOINTS.getCaseStudyDiagramData),
    singleCaseStudyDiagramData: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCaseStudyDiagramData, params),
    editCaseStudyDiagramData: (params) =>
      HttpClient.post(API_ENDPOINTS.editCaseStudyDiagramData, params),
  };
  testimonialPage = {
    getTestimonialPageHeading: () =>
      HttpClient.get(API_ENDPOINTS.testimonialPageHeading),
    editTestimonialPageHeading: (params) =>
      HttpClient.post(API_ENDPOINTS.testimonialPageHeading, params),
    getAllTestimonial2: () => HttpClient.get(API_ENDPOINTS.getAllTestimonial2),
    createTestimonial2: (params) =>
      HttpClient.post(API_ENDPOINTS.createTestimonial2, params),
    singleTestimonial2: (params) =>
      HttpClient.post(API_ENDPOINTS.singleTestimonial2, params),
    editTestimonial2: (params) =>
      HttpClient.post(API_ENDPOINTS.editTestimonial2, params),
    deleteTestimonial2: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteTestimonial2, params),
  };

  therapeutics = {
    getTherapeuticsBanner: () =>
      HttpClient.get(API_ENDPOINTS.getTherapeuticsBanner),
    updateTherapeuticsBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.updateTherapeuticsBanner, params),
    getTherapeuticsSupport: () =>
      HttpClient.get(API_ENDPOINTS.supportTherapeutics),
    updateTherapeuticsSupport: (params) =>
      HttpClient.post(API_ENDPOINTS.updateTherapeutics, params),
    getAllStepsTherapeutics: () =>
      HttpClient.get(API_ENDPOINTS.allStepsTherapeutics),
    getSingleStepsTherapeutics: (params) =>
      HttpClient.post(API_ENDPOINTS.singleStepsTherapeutics, params),
    updateStepsTherapeutics: (params) =>
      HttpClient.post(API_ENDPOINTS.updateStepsTherapeutics, params),
    serviceFeaturedImage: () =>
      HttpClient.get(API_ENDPOINTS.serviceFeaturedImage),
    editServiceFeaturedImage: (params) =>
      HttpClient.post(API_ENDPOINTS.serviceFeaturedImage, params),
    getAdcLinker: () => HttpClient.get(API_ENDPOINTS.getAdcLinker),
    updateAdcLinker: (params) =>
      HttpClient.post(API_ENDPOINTS.updateAdcLinker, params),
    getTherapeuticsBottom: () =>
      HttpClient.get(API_ENDPOINTS.getTherapeuticsBottom),
    editTherapeuticsBottom: (params) =>
      HttpClient.post(API_ENDPOINTS.editTherapeuticsBottom, params),
  };
  complexCarbohydrate = {
    getCarbohydrateBanner: () =>
      HttpClient.get(API_ENDPOINTS.carbohydrateBanner),
    createCarbohydrateBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.carbohydrateBanner, params),
    allCarbohydrateTimeline: () =>
      HttpClient.get(API_ENDPOINTS.allCarbohydrateTimeline),
    createCarbohydrateTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.createCarbohydrateTimeline, params),
    singleCarbohydrateTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCarbohydrateTimeline, params),
    updateCarbohydrateTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.updateCarbohydrateTimeline, params),
    deleteCarbohydrateTimeline: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteCarbohydrateTimeline, params),
    getCarbohydrateDescription: () =>
      HttpClient.get(API_ENDPOINTS.carbohydrateDescription),
    createCarbohydrateDescription: (params) =>
      HttpClient.post(API_ENDPOINTS.carbohydrateDescription, params),
    getCarbohydrateDiagram: () =>
      HttpClient.get(API_ENDPOINTS.allCarbohydrateDiagram),
    editCarbohydrateDiagram: (params) =>
      HttpClient.post(API_ENDPOINTS.editCarbohydrateDiagram, params),
    singleCarbohydrateDiagram: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCarbohydrateDiagram, params),
  };
  employment = {
    getEmploymentBanner: () => HttpClient.get(API_ENDPOINTS.employmentBanner),
    updateEmploymentBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.employmentBanner, params),
    getEmploymentResponsibilities: () =>
      HttpClient.get(API_ENDPOINTS.employmentResponsibilities),
    updateEmploymentResponsibilities: (params) =>
      HttpClient.post(API_ENDPOINTS.employmentResponsibilities, params),
    getResumes: () => HttpClient.get(API_ENDPOINTS.allResumes),
    deleteResume: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteResume, params),
  };
  researchDevelopmentBanner = {
    getResearchDevelopmentBanner: () =>
      HttpClient.get(API_ENDPOINTS.researchDevelopmentBanner),
    createResearchDevelopmentBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.researchDevelopmentBanner, params),
    getResearchDevelopmentSort: () =>
      HttpClient.get(API_ENDPOINTS.researchDevelopmentSort),
    createResearchDevelopmentSort: (params) =>
      HttpClient.post(API_ENDPOINTS.researchDevelopmentSort, params),
    getAllResearchTabs: () => HttpClient.get(API_ENDPOINTS.getResearchTab),
    getSingleResearchTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleResearchTab, params),
    editResearchTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.editResearchTab, params),
  };
  chemistryExpertise = {
    getChemistryExpertiseBanner: () =>
      HttpClient.get(API_ENDPOINTS.chemistryExpertiseBanner),
    createChemistryExpertiseBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.chemistryExpertiseBanner, params),
    getAllChemistryTabs: () =>
      HttpClient.get(API_ENDPOINTS.getAllChemistryTabs),
    singleChemistryTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleChemistryTabs, params),
    createChemistryTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.createChemistryTabs, params),
    updateChemistryTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.updateChemistryTabs, params),
    deleteChemistryTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteChemistryTabs, params),
  };
  resources = {
    getResourceHeading: () => HttpClient.get(API_ENDPOINTS.resourceHeading),
    editResourceHeading: (params) =>
      HttpClient.post(API_ENDPOINTS.resourceHeading, params),
    getResourceUsefulGuides: () =>
      HttpClient.get(API_ENDPOINTS.resourceUsefulGuides),
    editResourceUsefulGuides: (params) =>
      HttpClient.post(API_ENDPOINTS.resourceUsefulGuides, params),
    allResourcesTabs: () => HttpClient.get(API_ENDPOINTS.allResourcesTabs),
    singleResourcesTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleResourcesTabs, params),
    editResourcesTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.updateResourcesTabs, params),
  };
  whitepaper = {
    getWhitePaperBanner: () => HttpClient.get(API_ENDPOINTS.whitepaperBanner),
    editWhitePaperBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.whitepaperBanner, params),
    allWhitepapers: () => HttpClient.get(API_ENDPOINTS.allWhitepapers),
    singleWhitepaper: (params) =>
      HttpClient.post(API_ENDPOINTS.singleWhitepaper, params),
    addWhitepaper: (params) =>
      HttpClient.post(API_ENDPOINTS.addWhitepaper, params),
    editWhitepaper: (params) =>
      HttpClient.post(API_ENDPOINTS.editWhitepaper, params),
    deleteWhitepaper: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteWhitepaper, params),
  };
  cart = {
    allOrders: () => HttpClient.get(API_ENDPOINTS.orders),
    singleOrders: (params) =>
      HttpClient.post(API_ENDPOINTS.singleOrder, params),
    getAllCoupon: () => HttpClient.get(API_ENDPOINTS.getAllCoupon),
    createCoupon: (params) =>
      HttpClient.post(API_ENDPOINTS.createCoupon, params),
    singleCoupon: (params) =>
      HttpClient.post(API_ENDPOINTS.singleCoupon, params),
    deleteCoupon: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteCoupon, params),
    updateCoupon: (params) =>
      HttpClient.post(API_ENDPOINTS.updateCoupon, params),
  };
  conferences = {
    getConferenceBanner: () => HttpClient.get(API_ENDPOINTS.conferenceBanner),
    editConferenceBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.conferenceBanner, params),
    getConferenceCards: () => HttpClient.get(API_ENDPOINTS.conferenceCards),
    editConferenceCards: (params) =>
      HttpClient.post(API_ENDPOINTS.conferenceCards, params),
  };
  partner = {
    getPartnerBanner: () => HttpClient.get(API_ENDPOINTS.partnerBanner),
    createPartnerBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.partnerBanner, params),
    getAllPartnerCards: () => HttpClient.get(API_ENDPOINTS.getAllPartnerCards),
    getSinglePartnerCards: (params) =>
      HttpClient.post(API_ENDPOINTS.getSinglePartnerCards, params),
    editPartnerCards: (params) =>
      HttpClient.post(API_ENDPOINTS.editPartnerCards, params),
    getPartnersbottom: () => HttpClient.get(API_ENDPOINTS.partnersbottom),
    getPartnerFifthCard: () => HttpClient.get(API_ENDPOINTS.partnerFifthCard),
    createPartnerFifthCard: (params) =>
      HttpClient.post(API_ENDPOINTS.partnerFifthCard, params),
    editPartnersbottom: (params) =>
      HttpClient.post(API_ENDPOINTS.partnersbottom, params),
    allPartnersLogo: () => HttpClient.get(API_ENDPOINTS.allPartnersLogo),
    addPartnerLogo: (params) =>
      HttpClient.post(API_ENDPOINTS.newPartnersLogo, params),
    deletePartnerLogo: (params) =>
      HttpClient.post(API_ENDPOINTS.deletePartnersLogo, params),
  };
  capabilities = {
    createCapabilitiesOverview: (params) =>
      HttpClient.post(API_ENDPOINTS.capabilitiesOverview, params),
    getCapabilitiesOverview: () =>
      HttpClient.get(API_ENDPOINTS.capabilitiesOverview),
    getAnalyticalInstrumentation: () =>
      HttpClient.get(API_ENDPOINTS.analyticalInstrumentation),
    createAnalyticalInstrumentation: (params) =>
      HttpClient.post(API_ENDPOINTS.analyticalInstrumentation, params),
    getAccreditations: () => HttpClient.get(API_ENDPOINTS.accreditations),
    createAccreditations: (params) =>
      HttpClient.post(API_ENDPOINTS.accreditations, params),
    getLabEquipmentBanner: () =>
      HttpClient.get(API_ENDPOINTS.labEquipmentBanner),
    editLabEquipmentBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.labEquipmentBanner, params),
    allLabEquipment: () => HttpClient.get(API_ENDPOINTS.allLabEquipments),
    singleLabEquipment: (params) =>
      HttpClient.post(API_ENDPOINTS.singleLabEquipment, params),
    addLabEquipment: (params) =>
      HttpClient.post(API_ENDPOINTS.addLabEquipment, params),
    deleteLabEquipment: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteLabEquipment, params),
    editLabEquipment: (params) =>
      HttpClient.post(API_ENDPOINTS.updateLabEquipment, params),
  };
  process = {
    getProcessTabs: () => HttpClient.get(API_ENDPOINTS.getProcessTab),
    createProcessTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.addProcessTab, params),
    singleProcessTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleProcessTab, params),
    editProcessTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.editProcessTab, params),
    deleteProcessTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteProcessTab, params),
    getProcessMidSection: () => HttpClient.get(API_ENDPOINTS.processMidSection),
    editProcessMidSection: (params) =>
      HttpClient.post(API_ENDPOINTS.processMidSection, params),
    editProcessBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.processBanner, params),
    getProcessBanner: () => HttpClient.get(API_ENDPOINTS.processBanner),
  };
  smallMolecule = {
    getSmallMoleculeBanner: () =>
      HttpClient.get(API_ENDPOINTS.smallMoleculeBanner),
    editSmallMoleculeBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.smallMoleculeBanner, params),
    getHTS: () => HttpClient.get(API_ENDPOINTS.smallHTS),
    editHTS: (params) => HttpClient.post(API_ENDPOINTS.smallHTS, params),
    getSBDD: () => HttpClient.get(API_ENDPOINTS.smallSBDD),
    editSBDD: (params) => HttpClient.post(API_ENDPOINTS.smallSBDD, params),
    getSAR: () => HttpClient.get(API_ENDPOINTS.smallSAR),
    editSAR: (params) => HttpClient.post(API_ENDPOINTS.smallSAR, params),
    getScaffHolding: () => HttpClient.get(API_ENDPOINTS.scaffHolding),
    editScaffHolding: (params) =>
      HttpClient.post(API_ENDPOINTS.scaffHolding, params),
    getLeadDevelopment: () =>
      HttpClient.get(API_ENDPOINTS.smallLeadDevelopment),
    editLeadDevelopment: (params) =>
      HttpClient.post(API_ENDPOINTS.smallLeadDevelopment, params),
    getAllSmallTabs: () =>
      HttpClient.get(API_ENDPOINTS.getAllSmallMoleculeTabs),
    singleSmallTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleSmallMoleculeTabs, params),
    editAllSmallTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.editSmallMoleculeTabs, params),
  };
  isotope = {
    getIsotopeBanner: () => HttpClient.get(API_ENDPOINTS.isotopeBanner),
    editIsotopeBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.isotopeBanner, params),
    getIsotopeAssessment: () => HttpClient.get(API_ENDPOINTS.isotopeAssessment),
    editIsotopeAssessment: (params) =>
      HttpClient.post(API_ENDPOINTS.isotopeAssessment, params),
    getIsotopeDetails: () => HttpClient.get(API_ENDPOINTS.isotopeDetails),
    editIsotopeDetails: (params) =>
      HttpClient.post(API_ENDPOINTS.isotopeDetails, params),
    getIsotopeTable: () => HttpClient.get(API_ENDPOINTS.getIsotopeTable),
    addIsotopeTable: (params) =>
      HttpClient.post(API_ENDPOINTS.addIsotopeTable, params),
    singleIsotopeTable: (params) =>
      HttpClient.post(API_ENDPOINTS.singleIsotopeTable, params),
    updateIsotopeTable: (params) =>
      HttpClient.post(API_ENDPOINTS.updateIsotopeTable, params),
    deleteIsotopeTable: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteIsotopeTable, params),
    getIsotopeButton: () => HttpClient.get(API_ENDPOINTS.isotopeButtons),
    editIsotopeButton: (params) =>
      HttpClient.post(API_ENDPOINTS.isotopeButtons, params),
  };
  projectManagement = {
    getProjectManagementBanner: () =>
      HttpClient.get(API_ENDPOINTS.projectManagementBanner),
    editProjectManagementBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.projectManagementBanner, params),
    getProjectManagementBottomDesc: () =>
      HttpClient.get(API_ENDPOINTS.projectManagementBottomDesc),
    editProjectManagementBottomDesc: (params) =>
      HttpClient.post(API_ENDPOINTS.projectManagementBottomDesc, params),
    getAllProjectManagementList: () =>
      HttpClient.get(API_ENDPOINTS.getAllProjectManagementList),
    addProjectManagementList: (params) =>
      HttpClient.post(API_ENDPOINTS.addProjectManagementList, params),
    singleProjectManagementList: (params) =>
      HttpClient.post(API_ENDPOINTS.getSingleProjectManagementList, params),
    updateProjectManagementList: (params) =>
      HttpClient.post(API_ENDPOINTS.updateProjectManagementList, params),
    deleteProjectManagementList: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteProjectManagementList, params),
  };
  others = {
    createOtherBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.othersBanner, params),
    getOtherBanner: () => HttpClient.get(API_ENDPOINTS.othersBanner),
    allOtherList: () => HttpClient.get(API_ENDPOINTS.allOthersList),
    addOtherList: (params) =>
      HttpClient.post(API_ENDPOINTS.addOtherList, params),
    deleteOtherList: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteOtherList, params),
    singleOtherList: (params) =>
      HttpClient.post(API_ENDPOINTS.singleOtherList, params),
    editOtherList: (params) =>
      HttpClient.post(API_ENDPOINTS.editOtherList, params),
  };
  overview = {
    createOverviewBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.overviewBanner, params),
    getOverviewBanner: (params) =>
      HttpClient.get(API_ENDPOINTS.overviewBanner, params),
    allOverviewTabs: () => HttpClient.get(API_ENDPOINTS.allOverviewTab),
    addOverviewTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.addOverviewTab, params),
    deleteOverviewTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteOverviewTab, params),
    singleOverviewTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.singleOverviewTab, params),
    editOverviewTabs: (params) =>
      HttpClient.post(API_ENDPOINTS.editOverviewTab, params),
  };
  analyticalInstruments = {
    addAnalyticalInstrument: (params) =>
      HttpClient.post(API_ENDPOINTS.addAnalyticalInstrument, params),
    allAnalyticalInstrument: () =>
      HttpClient.get(API_ENDPOINTS.allAnalyticalInstrument),
    singleAnalyticalInstrument: (params) =>
      HttpClient.post(API_ENDPOINTS.singleAnalyticalInstrument, params),
    editAnalyticalInstrument: (params) =>
      HttpClient.post(API_ENDPOINTS.editAnalyticalInstrument, params),
    deleteAnalyticalInstrument: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteAnalyticalInstrument, params),
  };
  synthesis = {
    addSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.addSynthesis, params),
    allSynthesis: () => HttpClient.get(API_ENDPOINTS.allSynthesis),
    singleSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.singleSynthesis, params),
    editSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.editSynthesis, params),
    deleteSynthesis: (params) =>
      HttpClient.post(API_ENDPOINTS.deleteSynthesis, params),
  };
  researchCollaboration = {
    createResearchCollaborationBanner: (params) =>
      HttpClient.post(API_ENDPOINTS.researchCollaborationBanner, params),
    getResearchCollaborationBanner: () =>
      HttpClient.get(API_ENDPOINTS.researchCollaborationBanner),
    createResearchCollaborationMidSection: (params) =>
      HttpClient.post(API_ENDPOINTS.researchCollaborationMidSection, params),
    getResearchCollaborationMidSection: () =>
      HttpClient.get(API_ENDPOINTS.researchCollaborationMidSection),
    createResearchCollaborationDiagram: (params) =>
      HttpClient.post(API_ENDPOINTS.researchCollaborationDiagram, params),
    getResearchCollaborationDiagram: () =>
      HttpClient.get(API_ENDPOINTS.researchCollaborationDiagram),
    getAllResearchCollaborationAcademia: () =>
      HttpClient.get(API_ENDPOINTS.allResearchCollaborationAcademia),
    singleResearchCollaborationAcademia: (params) =>
      HttpClient.post(
        API_ENDPOINTS.singleResearchCollaborationAcademia,
        params
      ),
    editResearchCollaborationAcademia: (params) =>
      HttpClient.post(API_ENDPOINTS.editResearchCollaborationAcademia, params),
    getAllResearchCollaborationCompany: () =>
      HttpClient.get(API_ENDPOINTS.allResearchCollaborationCompany),
    singleResearchCollaborationCompany: (params) =>
      HttpClient.post(API_ENDPOINTS.singleResearchCollaborationCompany, params),
    editResearchCollaborationCompany: (params) =>
      HttpClient.post(API_ENDPOINTS.editResearchCollaborationCompany, params),
  };
}

const client = new Client();

export default client;
