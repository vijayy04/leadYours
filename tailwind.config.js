/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/images/home.png')",
        homeBlue: "url('/src/images/homeBlue.png')",
        speaker: "url('/src/images/speaker.png')",
        speakerBlue: "url('/src/images/speakerBlue.png')",
        comment: "url('/src/images/comment.png')",
        commentBlue: "url('/src/images/commentBlue.png')",
        mention: "url('/src/images/mention.png')",
        mentionBlue: "url('/src/images/mentionBlue.png')",
        in: "url('/src/images/in.png')",
        inBlue: "url('/src/images/inBlue.png')",
        setting: "url('/src/images/setting.png')",
        settingBlue: "url('/src/images/settingBlue.png')",
        switch: "url('/src/images/switch.png')",
        notification: "url('/src/images/notification.png')",
        checked: "url('/src/images/checked.png')",
        contact: "url('/src/images/contact.png')",
        login: "url('/src/images/login.png')",
        SignUp: "url('/src/images/signUpLeadYour.png')",
        resetPassword: "url('/src/images/resetPassword.png')",
        newPassword: "url('/src/images/newPassword.png')",
        twoUser: "url('/src/images/twoUser.png')",
        plus: "url('/src/images/plusMaths.png')",
        arrowDown: "url('/src/images/realArrowDown.png')",
        arrowUp: "url('/src/images/realArrowUp.png')",
        delete2: "url('/src/images/delete2.png')",
        minus: "url('/src/images/minus.png')",
        bgBlue: "url('/src/images/bgBlue.png')",
        vector: "url('/src/images/vector.png')",
        vector1: "url('/src/images/vector1.png')",
        lightBlueBg: "url('/src/images/lightBlueBg.png')",
      },
      screens: {
        mb: '550px',
        md: '960px',
        lp: '1327px',
        1044: '1044px',
        1350: '1350px',
        800: '800px',
        dt: '1533px',
      },
      colors: {
        lighterBlue: 'rgba(42, 131, 236, 0.08)',
        lighestBlue: 'rgba(42, 131, 236, 0.1)',
        lightBlue1: 'rgba(42, 131, 236, 0.4)',
        lightBlue: 'rgba(42, 131, 236, 0.24)',
        darkBlue: 'rgba(42, 131, 236, 1)',
        mainColor: '#2A83EC',
        iconColor: '#434343',
        lightGrey: 'rgba(217, 217, 217, 1)',
        placeholder: 'rgba(143, 143, 143, 1)',
        bgLightBlue: 'rgba(56, 195, 255, 0.05)',
        bgProgressBar: 'rgba(217, 217, 217, 1)',
        bgLightGrey: 'rgba(217, 217, 217, 0.14)',
        bgLighterGrey: 'rgba(217, 217, 217, 0.4)'
      },
      fontSize: {
        lu: '25px',
        sideTask: '20px',
        create: '32px',
        welcomeBack: '200%',
        email: '95%',
      },
      height: {
        half: '50vh',
        logo: '46px'
      },
      width: {
        full: '112% ',
        logo: '46px',
        100: '100%',
        logins1: '23.7%',
        logins2: '53.6%'
      },
      padding: {
        LsideTask: '30px',
        TsideTask: '27px',
        TDsideTask: '27px',
        LDsideTask: '30px',
        Pemail: '9%',
        logo: '7px',
        welcomeBack: '71.5%',
        resetPassword: '83%'
      },
      margin: {
        twoIcon: "22px",
        logo: "10px"
      },
      borderRadius: {
        full: '50%'
      },
      top: {
        homeTop: '220px'
      },
      backgroundSize: {
        icon: '28px',
        btn: '75%',
        welcomeBackImg: '100%',
        createAccount: '50%',
        62: '62%',
        30: '30%',
        97.5: '97.5%',
        100: '100%',
        85: '85%',
        101: '101%',
        141: '141%',
      },
      dropShadow: {
        homeCampaign: '0 4px 4px rgb(0 0 0 / 0.11)',
        linkedInProfile: `0 1px 2px rgba(42, 131, 236, 0.24)`,
        settingBox: `0 1px 5px rgba(42, 131, 236, 0.24)`,
        campaign: `0 1px 3px rgba(42, 131, 236, 0.24)`,
        userSettting: `0 0px 3px rgba(42, 131, 236, 0.1)`,
        admin: `0 2px 4px rgba(42, 131, 236, 0.4)`,
        grey: `0 25px 55px rgba(0, 0, 0, 0.05)`,
        lightGrey: `0 2px 4px rgba(0, 0, 0, 0.05)`,
      }
    },
  },
  plugins: [],
}
