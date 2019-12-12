let shimadzu = {}
module.exports = {
    beforeEach: browser => {
        shimadzu = browser.page.shimadzuPage()
        shimadzu
            .navigate()
    },
    after: browser => {
        browser.end()
    },
    'News Test': browser => {
        shimadzu
            .simadjuNews()
            .expect.element('@homePage').to.be.visible
        shimadzu
            .pause(3000)
    },
    'Product Test': browser => {
        shimadzu
            .shimadzuProduct()
        shimadzu
            .pause(3000)

    },
   'shimadzu service and Support Test': browser => {
        shimadzu
            .shimadzuserviceandSupport()
        shimadzu
            .pause(3000)
    },

    'shimadzu About us Test': browser => {
        shimadzu
        .shimadzuaboutUs()
        shimadzu
        .pause(3000)
},
    'shimadzu investor': browser => {
        shimadzu
        .shimadzuinVestor()
        shimadzu
        .pause(3000)
    },

    'shimadzu reseach and devlopment test': browser => {
        shimadzu
        .shimadzureseachDevlopment()
        shimadzu
        .pause(3000)
    },

    'shimadzu sustainability test': browser=>{
        shimadzu
        .shimadzusustainAbility()
        shimadzu
        .pause(3000)
    },

    'shimadzu search test': browser=>{
        shimadzu
        .shimadzuhomePage()
        shimadzu
        .pause(3000)
    },
//     'About Us Test': browser => {
//         shimadzu
//             .click('@aboutUs')
//             .aboutUs( )
//             shimadzu.expect.element('@aboutUsPage').to.be.visible
//             shimadzu
//             .click('@topMessage')
//             .aboutUs()
//             shimadzu.expect.element('@topmessagePage').to.be.visible
//             shimadzu
//             .aboutUs()
//             .expect.element('@homePage').to.be.visble
//             shimadzu
//             .pause(3000)
//     },       
//       'Investor Test': browser => {
//         shimadzu
//             .click('@investor')
//             .inVestor( )  
//             shimadzu.expect.element('@investorPage').to.be.visible
//             .click('@inVestorInformation')
//             .inVestor( )
//             shimadzu.expect.element('@basicinformationPage').to.be.visible
//             shimadzu
//             .investor()
//             .expect.element('@homePage').to.be.visble
//             shimadzu
//             .pause(3000)
//       },

// 'Reseach and Devlopment test':browser => {
//     shimadzu
//         .click('@researchDevlopment')
//         .researchDevlopment()
//         shimadzu.expect.element('@researchDevlopmentPage').to.be.visible
//         .click('@coreTechnology')
//         .researchDevlopment()
//         shimadzu.expect.element('@coretechnologyPage').to.be.visible
//         .back('researchDevlopmentPage')
//         .click('@newbusinessDevlopment')
//         .researchDevlopment()
//         shimadzu.expect.element('@newbusinessDevlopmentPage').to.be.visible
//         .back('researchDevlopmentPage')
//         .click('@intellectualTechnology')
//         .researchDevlopment()
//         shimadzu.expect.element('@intellectualTechnologyPage').to.be.visible
//         .back('researchDevlopmentPage')
//         .click('@shimadzuDesign')
//         .researchDevlopment()
//         shimadzu.expect.element('@shimadzuDesignPage').to.be.visible
//         .back('researchDevlopmentPage')
//         .click('@shimadzuReview')
//         .researchDevlopment()
//         shimadzu.expect.element('@shimadzureviewPage').to.be.visible
//         shimadzu
//         .researchDevlopment()
//         .expect.element('@homePage').to.be.visble
//         shimadzu
//         .pause(3000)
// },

// 'Sustainability test':browser => {
//     shimadzu
//     .click('@sustainAbility')
//     .sustainAbility()
//     shimadzu.expect.element('@sustainAbilityPage').to.be.visible
//     .click('@csrCarter')
//     .sustainAbility()
//     shimadzu.expect.element('@csrCarterPage').to.be.visible
//     shimadzu
//         .sustainAbility()
//         .expect.element('@homePage').to.be.visble
//         shimadzu
//         .pause(3000)
// },

// 'Shimadzu search box test':browser=>{
//     shimadzu
//     .shimadzuhomePage()
//
 //},
}

