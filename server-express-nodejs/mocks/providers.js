const baseUrl = "http://localhost:8080";

const getOffersFromAkbank = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "akbank",
        name: "Akbank",
        logo: `${baseUrl}/images/akbank.png`,
        totalPayment: 11437.02,
        monthlyPayment: 948.5,
        interestRate: 1.97,
        type: "ihtiyac-kredi",
      });
    }, 2000);
  });
};

const getOffersFromGaranti = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "garanti",
        name: "Garanti",
        logo: `${baseUrl}/images/garanti.png`,
        totalPayment: 10872.56,
        monthlyPayment: 901.88,
        interestRate: 0.99,
        type: "ihtiyac-kredi",
      });
    }, 11000);
  });
};

const getOffersFromYapikredi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "yapikredi",
        name: "Yapı Kredi",
        logo: `${baseUrl}/images/yapikredi.png`,
        totalPayment: 10055,
        monthlyPayment: 833.33,
        interestRate: 0,
        type: "ihtiyac-kredi",
      });
    }, 9000);
  });
};

const getOffersFromIsbank = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "isbank",
        name: "İş Bankası",
        logo: `${baseUrl}/images/isbank.png`,
        totalPayment: 11430.07,
        monthlyPayment: 948.5,
        interestRate: 1.64,
        type: "ihtiyac-kredi",
      });
    }, 7000);
  });
};

const getOffersFromFinansbank = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "finansbank",
        name: "Finansbank",
        logo: `${baseUrl}/images/finansbank.png`,
        totalPayment: 11220.01,
        monthlyPayment: 930.41,
        interestRate: 1.39,
        type: "ihtiyac-kredi",
      });
    }, 5000);
  });
};

const getOffersFromDenizbank = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "denizbank",
        name: "Denizbank",
        logo: `${baseUrl}/images/denizbank.png`,
        totalPayment: 11147.76,
        monthlyPayment: 928.98,
        interestRate: 1.37,
        type: "ihtiyac-kredi",
      });
    }, 1000);
  });
};

const getOffersFromTeb = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uid: "teb",
        name: "Teb",
        logo: `${baseUrl}/images/teb.png`,
        totalPayment: 11432,
        monthlyPayment: 948.5,
        interestRate: 1.64,
        type: "ihtiyac-kredi",
      });
    }, 3000);
  });
};

module.exports = {
  garanti: {
    getOffers: getOffersFromGaranti,
  },
  akbank: {
    getOffers: getOffersFromAkbank,
  },
  yapikredi: {
    getOffers: getOffersFromYapikredi,
  },
  isbank: {
    getOffers: getOffersFromIsbank,
  },
  finansbank: {
    getOffers: getOffersFromFinansbank,
  },

  denizbank: {
    getOffers: getOffersFromDenizbank,
  },
  teb: {
    getOffers: getOffersFromTeb,
  },
};
