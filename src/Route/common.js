'use strict';
////PATH FOR HOME
const { User } = require('../Controller/User');
const { Banner } = require('../Controller/HomeBanner');
const { HomeSolution } = require('../Controller/HomeSolution');
const { HomeService } = require('../Controller/HomeService');
const { HomeBenefit } = require('../Controller/AddHomeBenefit');
const { HomePackages } = require('../Controller/AddHomePackages');

////PATH FOR SOLUTION
const { SolutionBanner } = require('../Controller/AddSolutionBanner');
const { SolutionWhatWeDo } = require('../Controller/AddSolutionWhatWeDo');
const { SolutionERP } = require('../Controller/AddSolutionERP');
const { ManufacturingBenefits } = require('../Controller/AddManufacturingBenefits');

////PATH FOR ABOUT US
const { AboutBanner } = require('../Controller/AddAboutBanner');
const { AboutUs } = require('../Controller/AddAboutUs');
const { AboutDifferent } = require('../Controller/AddAboutDifferent');
const { AboutWhatWeDo } = require('../Controller/AddAboutWhatWeDo');


/////PATH FOR CONTACT US
const { ContactUs } = require('../Controller/AddContactUs');


/**
 * use : this array for use all routes store.hn 
 */

const common_array = [


  /**
   * use : all route of employee registaraion
   */
  {
    method: "POST",
    path: "/SignUp",
    options: User.register()
  },
  {
    method: "POST",
    path: "/SignIn",
    options: User.registerSignin()
  },
  ////////THIS API FOR HOME BANNNER

  {
    method: "POST",
    path: "/AddHomeBanner",
    options: Banner.AddHomeBanner()
  },
  {
    method: "GET",
    path: "/ShowHomeBanner",
    options: Banner.ShowHomeBanner()
  },
  {
    method: "PUT",
    path: "/UpdateHomeBanner/{id}",
    options: Banner.UpdateHomeBanner()
  },
  {
    method: "DELETE",
    path: "/DeleteHomeBanner/{id}",
    options: Banner.DeleteHomeBanner()
  },
  /////////THIS API FOR HOME SOLUTION

  {
    method: "POST",
    path: "/AddHomeSolution",
    options: HomeSolution.AddHomeSolution()
  },
  {
    method: "GET",
    path: "/ShowHomeSolution",
    options: HomeSolution.ShowHomeSolution()
  },
  {
    method: "PUT",
    path: "/UpdateHomeSolution/{id}",
    options: HomeSolution.UpdateHomeSolution()
  },
  {
    method: "DELETE",
    path: "/DeleteHomeSolution/{id}",
    options: HomeSolution.DeleteHomeSolution()
  },
  /////////THIS API FOR HOME SERVICE
  {
    method: "POST",
    path: "/AddHomeService",
    options: HomeService.AddHomeService()
  },
  {
    method: "GET",
    path: "/ShowHomeService",
    options: HomeService.ShowHomeService()
  },
  {
    method: "PUT",
    path: "/UpdateHomeService/{id}",
    options: HomeService.UpdateHomeService()
  },
  {
    method: "DELETE",
    path: "/DeleteHomeService/{id}",
    options: HomeService.DeleteHomeService()
  },

  /////////THIS API FOR HOME Benefits
  {
    method: "POST",
    path: "/AddHomeBenefit",
    options: HomeBenefit.AddHomeBenefit()
  },
  {
    method: "GET",
    path: "/ShowHomeBenefit",
    options: HomeBenefit.ShowHomeBenefit()
  },
  {
    method: "PUT",
    path: "/updateHomeBenefit/{id}",
    options: HomeBenefit.updateHomeBenefit()
  },
  {
    method: "DELETE",
    path: "/DeleteHomeBenefit/{id}",
    options: HomeBenefit.DeleteHomeBenefit()
  },

  /////////THIS API FOR HOME Packages
  {
    method: "POST",
    path: "/AddHomePackages",
    options: HomePackages.AddHomePackages()
  },
  {
    method: "GET",
    path: "/ShowHomePackages",
    options: HomePackages.ShowHomePackages()
  },
  {
    method: "PUT",
    path: "/UpdateHomePackages/{id}",
    options: HomePackages.UpdateHomePackages()
  },
  {
    method: "DELETE",
    path: "/DeleteHomePackages/{id}",
    options: HomePackages.DeleteHomePackages()
  },
  /////////THIS API FOR SOLUTION BANNER
  {
    method: "POST",
    path: "/AddSolutionBanner",
    options: SolutionBanner.AddSolutionBanner()
  },
  {
    method: "GET",
    path: "/ShowSolutionBanner",
    options: SolutionBanner.ShowSolutionBanner()
  },
  {
    method: "PUT",
    path: "/UpdateSolutionBanner/{id}",
    options: SolutionBanner.UpdateSolutionBanner()
  },
  {
    method: "DELETE",
    path: "/DeleteSolutionBanner/{id}",
    options: SolutionBanner.DeleteSolutionBanner()
  },
  /////////THIS API FOR SOLUTION PAGE What We Do
  {
    method: "POST",
    path: "/AddSolutionWhatWeDo",
    options: SolutionWhatWeDo.AddSolutionWhatWeDo()
  },
  {
    method: "GET",
    path: "/ShowSolutionWhatWeDo",
    options: SolutionWhatWeDo.ShowSolutionWhatWeDo()
  },
  {
    method: "PUT",
    path: "/UpdateSolutionWhatWeDo/{id}",
    options: SolutionWhatWeDo.UpdateSolutionWhatWeDo()
  },
  {
    method: "DELETE",
    path: "/DeleteSolutionWhatWeDo/{id}",
    options: SolutionWhatWeDo.DeleteSolutionWhatWeDo()
  },
  /////////THIS API FOR SOLUTION ERP
  {
    method: "POST",
    path: "/AddSolutionErp",
    options: SolutionERP.AddSolutionErp()
  },
  {
    method: "GET",
    path: "/ShowSolutionErp",
    options: SolutionERP.ShowSolutionErp()
  },
  {
    method: "PUT",
    path: "/UpdateSolutionErp/{id}",
    options: SolutionERP.UpdateSolutionErp()
  },
  {
    method: "DELETE",
    path: "/DeleteSolutionErp/{id}",
    options: SolutionERP.DeleteSolutionErp()
  },
  /////////THIS API FOR  MANUFACTURING Benefits
  {
    method: "POST",
    path: "/AddManufacturingBenefits",
    options: ManufacturingBenefits.AddManufacturingBenefits()
  },
  {
    method: "GET",
    path: "/ShowManufacturingBenefits",
    options: ManufacturingBenefits.ShowManufacturingBenefits()
  },
  {
    method: "PUT",
    path: "/UpdateManufacturingBenefits/{id}",
    options: ManufacturingBenefits.UpdateManufacturingBenefits()
  },
  {
    method: "DELETE",
    path: "/DeleteManufacturingBenefits/{id}",
    options: ManufacturingBenefits.DeleteManufacturingBenefits()
  },
  ///////THIS API'S FOR ABOUT US BANNER
  {
    method: "POST",
    path: "/AddAboutBanner",
    options: AboutBanner.AddAboutBanner()
  },
  {
    method: "GET",
    path: "/ShowAboutBanner",
    options: AboutBanner.ShowAboutBanner()
  },
  {
    method: "PUT",
    path: "/UpdateAboutBanner/{id}",
    options: AboutBanner.UpdateAboutBanner()
  },
  {
    method: "DELETE",
    path: "/DeleteAboutBanner/{id}",
    options: AboutBanner.DeleteAboutBanner()
  },
  ///////THIS API'S FOR MANAGE ABOUT US
  {
    method: "POST",
    path: "/AddAboutUs",
    options: AboutUs.AddAboutUs()
  },
  {
    method: "GET",
    path: "/ShowAboutUs",
    options: AboutUs.ShowAboutUs()
  },
  {
    method: "PUT",
    path: "/UpdateAboutUs/{id}",
    options: AboutUs.UpdateAboutUs()
  },
  {
    method: "DELETE",
    path: "/DeleteAboutUs/{id}",
    options: AboutUs.DeleteAboutUs()
  },
  ///////THIS API'S FOR MANAGE ABOUT US DEFRENT FROM OTHERS
  {
    method: "POST",
    path: "/AddAboutDifferent",
    options: AboutDifferent.AddAboutDifferent()
  },
  {
    method: "GET",
    path: "/ShowAboutDifferent",
    options: AboutDifferent.ShowAboutDifferent()
  },
  {
    method: "PUT",
    path: "/UpdateAboutDifferent/{id}",
    options: AboutDifferent.UpdateAboutDifferent()
  },
  {
    method: "DELETE",
    path: "/DeleteAboutDifferent/{id}",
    options: AboutDifferent.DeleteAboutDifferent()
  },
  ///////THIS API'S FOR MANAGE ABOUT US WHAT WE DO
  {
    method: "POST",
    path: "/AddAboutWhatWeDo",
    options: AboutWhatWeDo.AddAboutWhatWeDo()
  },
  {
    method: "GET",
    path: "/ShowAboutWhatWeDo",
    options: AboutWhatWeDo.ShowAboutWhatWeDo()
  },
  {
    method: "PUT",
    path: "/UpdateAboutWhatWeDo/{id}",
    options: AboutWhatWeDo.UpdateAboutWhatWeDo()
  },
  {
    method: "DELETE",
    path: "/DeleteAboutWhatWeDo/{id}",
    options: AboutWhatWeDo.DeleteAboutWhatWeDo()
  },
  ///////THIS API'S FOR CONTACT US
  {
    method: "POST",
    path: "/AddContactUs",
    options: ContactUs.AddContactUs()
  },
  {
    method: "GET",
    path: "/ShowContactUs",
    options: ContactUs.ShowContactUs()
  },
  {
    method: "DELETE",
    path: "/DeleteContactUs",
    options: ContactUs.DeleteContactUs()
  },
  ////path for image upload and show

                  {
                    method : "GET" , 
                  path :"/brsadmin/src/image/{file*}",
                    handler:{
                      directory: {
                                      path: '/brsadmin/src/image',
                                    
                                    }
                              }
                            }
                          



  
]




module.exports = {
  common_array
}