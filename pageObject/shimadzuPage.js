var shimadzuCommands = {
    simadjuNews: function () {
        this
            .click('@newsPage')
            .waitForElementPresent('@newsPage')
            .click('@newsPage2019')
            .pause(150)
            .verify.containsText('@resultPage', "November 2019")
            .pause(150)
            .click(`@newsPage2018`)
            .pause(150)
            .verify.containsText('@resultPage', "November 2018")
            .click('@newsPage2017')
            .pause(150)
            .verify.containsText('@resultPage', "December 2017")
            .click('@newsPage2016')
            .pause(150)
            .verify.containsText('@resultPage', "December 2016")
            .click('@newsPage2015')
            .pause(150)
            .verify.containsText('@resultPage', "December 2015")
            .click('@newsPage2014')
            .pause(150)
            .verify.containsText('@resultPage', "December 2014")
        return this
    },
    shimadzuProduct: function () {
        this
            .click('@shimadzuProducts')
            .pause(300)
            .click('@analyticalandMeasurementinstrument')

            .pause(300)

            .verify.containsText('@featuredArticles', "Featured Articles")
            .pause(300)

            .click('@homepageProduct')
            .pause(300)
        return this
    },
    // .api.back()
    //  .url()
    shimadzuserviceandSupport: function () {
        this
            .click('@shimadzuserviceandSupport')
            .pause(300)
            .waitForElementPresent('@shimadzuserviceandSupport')
            .click('@inVestorinformation')
            .verify.containsText('@serviceresultPageTitle', "Inquiry for Investor Relations")
            .setValue('@name', 'Jacob')
            .pause(300)
            .setValue('@organization', 'TNT')
            .pause(300)
            .setValue('@city', 'GlenAllen')
            .pause(300)
            .setValue('@country', 'USA')
            .pause(300)
            .setValue('@email', 'jacob@gmail.com')
            .click('@submit')
            .pause(300)
            .waitForElementVisible('@backtotheForm')
            .click('@backtotheForm')
            .pause(300)
            .clearValue('@name')
            .setValue('@name', 'Martin')
            .pause(300)
            .setValue('@organization', 'STD')
            .pause(300)
            .setValue('@city', 'Richmond')
            .pause(300)
            .setValue('@country', 'USA')
            .pause(300)
            .setValue('@email', 'martin@gmail.com')
            .click('@submit')
            .pause(300)

        return this
    },
    shimadzuaboutUs: function () {
        this
            .click('@shimadzuaboutUs')
            .waitForElementPresent('body')
            .moveToElement('@topMessage', 10, 10)
            .click('@topMessage')
            .pause(150)
            .verify.containsText('@resulttopMessagePage', "Top Message")
            .pause(150)
            .click('@homePage')

        return this
    },
    shimadzuinVestor: function () {
        this
        .click('@ShimadzuinVestor')
            .waitForElementPresent('body')
            
            .verify.containsText('@resultInvestorPage', "INVESTORS")
            .pause('150')

            .click('@homePage')
        return this
    },
    shimadzureseachDevlopment: function () {
        this
            .click('@shimadzuresearchDevlopment')
            .pause(300)
            .verify.containsText('@resultresearchDevlopmentPage', "RESEARCH & DEVELOPMENT")
            .pause(150)
            .click('@homePage')
            return this
        },
            // .click('@coreTechnology')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "Core Technology")
            //.pause(150)
           // .url('https://www.shimadzu.com/research_and_development/index.html')
            // .pause(150)
            // .click('@newbusinessDevlopment')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "New Business Devlopment")
            // .pause(150)
            // .url('https://www.shimadzu.com/research_and_development/index.html')
            // .pause(150)
            // .click('@intellectualTechnology')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "Intellectual Technology")
            // .pause(150)
            // .url('https://www.shimadzu.com/research_and_development/index.html')
            // .pause(150)
            // .click('@shimadzuDesign')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "Shimadzu Design")
            // .url('https://www.shimadzu.com/research_and_development/index.html')
            // .pause(150)
            // .click('@researchdevlopmentOrganisation')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "Research And Devlopment Organisation")
            // .url('https://www.shimadzu.com/research_and_development/index.html')
            // .pause(150)
            // .click('@shimadzuReview')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "Shimadzu Review")
            // .pause(150)
    //         .click('@homePage')
    //     return this
    // },

    shimadzusustainAbility: function () {
        this
            .click('@shimadzusustainAbility')
            .pause(150)
            .verify.containsText('@resultsustainAbilityPage', "SUSTAINABILITY")
            .pause(150)
            // .click('@csrCarter')
            // .pause(150)
            // .verify.containsText('@resultPageTitle', "CSR Carter")
            .click('@homePage')
        return this
    },
    shimadzuhomePage: function () {
        this
            .click('@shimadzuSearch')
            .setValue('@shimadzuSearch', ['Equipment', this.api.Keys.ENTER])
            .pause(150)
            .expect.element('#SS_queryString').contain.text('Equipment')
        return this
    },
}
module.exports = {
    url: 'https://www.shimadzu.com/index.html',
    commands: [shimadzuCommands],
    elements: {
        shimadzuNews: {
            selector: '(//a[@class="js-fatmenu-trigger"])[1]',
            locateStrategy: 'xpath'
        },
        shimadzuProducts: {
            selector: '(//a[@class="js-fatmenu-trigger"])[2]',
            locateStrategy: 'xpath'
        },
        shimadzuserviceandSupport: {
            selector: '(//li[@class="globalNav-list-item"])[3]',

            locateStrategy: 'xpath'
        },
        shimadzuaboutUs: {
            selector: '(//a[text()="ABOUT US"])[2]',

            locateStrategy: 'xpath'
        },
        topMessage: {
            selector: '(//span[@class="columnContent-item-text"])[5]',

            locateStrategy: 'xpath'
        },

        resulttopMessagePage: {
            selector: '(//span[@class="heading_level1-inner"])',
            locateStrategy: 'xpath'
        },
        ShimadzuinVestor: {
            selector: '(//a[@class="js-fatmenu-trigger"])[4]',
            locateStrategy: 'xpath'
        },
        resultInvestorPage: {
            selector :'(//span[@class="heading_level1-inner"])',
            locateStrategy:'xpath'

        },    
        shimadzuresearchDevlopment: {
            selector: '(//a[@class="js-fatmenu-trigger"])[5]',
            locateStrategy: 'xpath'
        },
        resultresearchDevlopmentPage:{
            selector:'(//span[@class="heading_level1-inner"])',
            locateStrategy:'xpath'
        },
        
        shimadzusustainAbility: {
            selector: '(//a[@class="js-fatmenu-trigger"])[6]',
            locateStrategy: 'xpath'
        },

        resultsustainAbilityPage: {
            selector :'(//span[@class="heading_level1-inner"])',
            locateStrategy: 'xpath'
        },
        newsPage: {
            selector: '(//a[@class="js-fatmenu-trigger"])[1]',
            locateStrategy: 'xpath'
        },
        newsPage2019: {
            selector: '(//ul/li[1][@class="newsArchive-list-item"])[1]',
            locateStrategy: 'xpath'
        },
        resultPage: {
            selector: '(//h2[@class="heading_level2"])[1]',
            locateStrategy: 'xpath'
        },
        newsPage2018: {
            selector: '(//ul/li[@class="newsArchive-list-item"])[2]',
            locateStrategy: 'xpath'
        },
        newsPage2017: {
            selector: '(//ul/li[@class="newsArchive-list-item"])[3]',
            locateStrategy: 'xpath'
        },
        newsPage2016: {
            selector: '(//ul/li[@class="newsArchive-list-item"])[4]',
            locateStrategy: 'xpath'
        },
        newsPage2015: {
            selector: '(//ul/li[@class="newsArchive-list-item"])[5]',
            locateStrategy: 'xpath'
        },
        newsPage2014: {
            selector: '(//ul/li[@class="newsArchive-list-item"])[6]',
            locateStrategy: 'xpath'
        },
        selectProducttype: {
            selector: '(//li[@class="globalNav-list-item"])',
            locateStrategy: 'xpath'
        },

        selectCountry1: {
            selector: '//option[@value="u"]',
            locateStrategy: 'xpath'
        },
        selectCountry2: {
            selector: '//select[@class="form-select-item"]',
            locateStrategy: 'xpath'
        },



       

        csrCarter: {
            selector: '(/html/body/div[2]/section[1]/div/section/div/div/div[2]/a/span[2])',
            locateStrategy: 'xpath'
        },
        hydraulicequipment: {
            selector: '(//select[@class="form-select-item"])[1]',
            locateStrategy: 'xpath'
        },

        resultPageTitle1: {
            selector: '(//h2[@class="mainvisiual-title"])[1]',
            locateStrategy: 'xpath'
        },
        usa1: {
            selector: '(//select[@class="form-select-item"])[2]',
            locateStrategy: 'xpath'
        },
        resultPageTitle2: {
            selector: '(//h2[@class="mainvisual-title"])[1]',
            locateStrategy: 'xpath'
        },
        inVestorinformation: {
            selector: '(//a[@href="/form/ir/contact.html"]',
            locateStrategy: 'xpath'
        },
        homePage: {
            selector: '(//img[@class="header-logo-image forPc at_normal"])[1]',
            locateStrategy: 'xpath'
        },
        homepageProduct: {
            selector: '//p[@id="logo"]',
            locateStrategy: 'xpath'

        },


        inVestorinformation: {
            selector: '(//li[@class="linkList-item"])[5]',
            locateStrategy: 'xpath'
        },

        serviceresultPageTitle: {
            selector: '//h2[@class="title_inquiry_font130"]',
            locateStrategy: 'xpath'

        },

        name: {
            selector: '(//input[@name="name2"])',
            locateStrategy: 'xpath'
        },
        organization: {
            selector: '(//input[@class="sp-w100"])[2]',
            locateStrategy: 'xpath'
        },

        city: {

            selector: '(//input[@class="sp-w100"])[3]',
            locateStrategy: 'xpath'
        },
        country: {
            selector: '(//input[@class="sp-w100"])[4]',
            locateStrategy: 'xpath'
        },

        email: {
            selector: '(//input[@class="sp-w100"])[5]',
            locateStrategy: 'xpath'
        },
        submit: {
            selector: '(//input[@name="CHECK"])',
            locateStrategy: 'xpath'
        },
        backtotheForm: {
            selector: '//input[@alt="back to the Form"]',
            locateStrategy: 'xpath'
        },
        analyticalandMeasurementinstrument: {
            selector: '(//a[@href="/an/"])[3]',
            locateStrategy: 'xpath'
        },
        featuredArticles: {
            selector: '(//h2[@class="heading-02 heading-featured"])[1]',
            locateStrategy: 'xpath'
        },
        shimadzuSearch: {
            selector:'(//input[@id="SS_searchQuery"])',
            locateStrategy:'xpath'
        },
    }
}

