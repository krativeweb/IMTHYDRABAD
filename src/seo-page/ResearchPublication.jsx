"use client";

import { useEffect } from "react";
import Link from "next/link";
  
export default function ResearchPublication() {
  // Initialize AOS  
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  // Sorted publication lists
  const publicationsA = [
  //     {
  //   author: "A. Sarath Babu",
  //   title:
  //     "Dividend initiations, regulatory reforms, and institutional monitoring of insider trading: Evidence from India",
  //   journal: "Economics Letters",
  //   volume: "259",
  //   publicationDate: "February 2026 (Published 29 December 2025)",
  //   category: "A",
  //   url: "https://www.sciencedirect.com/science/article/pii/S0165176525006391?dgcid=coauthor",
  // },
  // {
  //   author: "Chakrapani Chaturvedula",
  //   title:
  //     "Dividend initiations, regulatory reforms, and institutional monitoring of insider trading: Evidence from India",
  //   journal: "Economics Letters",
  //   volume: "259",
  //   publicationDate: "February 2026 (Published 29 December 2025)",
  //   category: "A",
  //   url: "https://www.sciencedirect.com/science/article/pii/S0165176525006391?dgcid=coauthor",
  // },
  // {
  //   author: "Nikhil Rastogi",
  //   title:
  //     "Dividend initiations, regulatory reforms, and institutional monitoring of insider trading: Evidence from India",
  //   journal: "Economics Letters",
  //   volume: "259",
  //   publicationDate: "February 2026 (Published 29 December 2025)",
  //   category: "A",
  //   url: "https://www.sciencedirect.com/science/article/pii/S0165176525006391?dgcid=coauthor",
  // },
  // {
  //   author: "K. Sriharsha Reddy",
  //   title:
  //     "Dividend initiations, regulatory reforms, and institutional monitoring of insider trading: Evidence from India",
  //   journal: "Economics Letters",
  //   volume: "259",
  //   publicationDate: "February 2026 (Published 29 December 2025)",
  //   category: "A",
  //   url: "https://www.sciencedirect.com/science/article/pii/S0165176525006391?dgcid=coauthor",
  // },
    {
      
      author: "Arun Kumar Biswal",
      title: "Product subsidy and expected consumption with inventory inaccuracy: Implications of RFID adoption in Indian Public Distribution System",
      journal: "Computers & Industrial Engineering",
    },
    {
      author: "Ata Assaf",
      title: "Multivariate Long Memory Structure in the Cryptocurrency Markets: The Impact of COVID-19",
      journal: "International Review of Financial Analysis",
      coAuthors: ["Husni Chariff", "Avishek Bhandari", "Dr Ender Demir"],
    },
    {
      author: "Chakrapani Chaturvedula",
      title: "Price Manipulation, Front Running and Bulk Trades Evidence from India",
      journal: "Emerging Markets Review",
      coAuthors: ["NP Bang", "Nikhil Rastogi", "S Kumar"],
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Competitive dynamics in not-for-profit organizations: evidence from India",
      journal: "Asia Pacific Journal of Management",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Positioning Strategies of Indian Nonprofit Organizations for Grant Acquisition",
      journal: "Public Administration Quarterly",
    },
    {
      author: "Deviprasad Ghosh",
      title: "Barriers and facilitators of B2B degree of digital use and brand engagement: an integration of technology and behavioral perspectives",
      journal: "Journal of Business & Industrial Marketing",
      coAuthors: ["Satyabhusan Dash"],
    },
    {
      author: "Esha Saha",
      title: "The interplay of emerging technologies in pharmaceutical supply chain performance: An empirical investigation for the rise of Pharma 4.0",
      journal: "Technological Forecasting and Social Change",
      coAuthors: ["Pradeep Rathore", "Ratri Parida", "Nripendra P Rana"],
    },
    {
      author: "Gunjan Malhotra",
      title: "Does Impact of Campaign and Consumer Guilt help in exploring the role of National Identity and Purchase Decisions of Consumers",
      journal: "Journal of Retailing and Consumer Services",
      coAuthors: ["Mahesh Ramalingam"],
    },
    {
      author: "Indranil Ghosh",
      title: "Coivd 19 news and the US equity market interactions: An inspection through econometrics and machine learning lens",
      journal: "Annals of Operations Research",
      coAuthors: ["Tamal Datta Chaudhuri", "Layal Isskandarani", "Mohammad Zoynul Abedin"],
    },
    {
      author: "Indranil Ghosh",
      title: "A hybrid approach to forecasting futures prices with simultaneous consideration of optimality in ensemble feature selection and advanced artificial intelligence",
      journal: "Technological Forecasting and Social Change",
      coAuthors: ["Esteban Alfaro-Cortes", "Matias Gamez", "Noelia Garcia"],
    },
    {
      author: "Indranil Ghosh",
      title: "Time-varying relationship between geopolitical uncertainty and agricultural investment",
      journal: "Finance Research Letters",
      coAuthors: ["Rabin K Jana", "Paritosh Pramanik"],
    },
    {
      author: "Indranil Ghosh",
      title: "Do travel uncertainty and invasion rhetoric spur Metaverse financial asset? -Gauging the role of media Influence",
      journal: "Finance Research Letters",
      coAuthors: ["Esteban Alfaro-Cortes", "Matias Gamez", "Noelia Garcia"],
    },
    {
      author: "Indranil Ghosh",
      title: "Prediction and interpretation of daily NFT and DeFi prices dynamics: Inspection through ensemble machine learning & XAI",
      journal: "International Review of Financial Analysis",
      coAuthors: ["Esteban Alfaro-Cortés", "Matías Gámez", "Noelia García-Rubio"],
    },
    {
      author: "Indranil Ghosh",
      title: "An ensemble machine learning framework for Airbnb rental price modeling without using amenity-driven features",
      journal: "International Journal of Contemporary Hospitality Management",
      coAuthors: ["Rabin K Jana", "Mohammad Zoynul Abedin"],
    },
    {
      author: "Indranil Ghosh",
      title: "A granular machine learning framework for forecasting high-frequency financial market variables during the recent black swan event",
      journal: "Technological Forecasting and Social Change",
      coAuthors: ["Rabin K Jana"],
    },
    {
      author: "Indranil Ghosh",
      title: "An explainable AI-enabled granular ensemble machine learning framework to demystify fertilizer price movements",
      journal: "Journal of the Operational Research Society",
      coAuthors: ["Rabin K. Jana", "P. N. Ram Kumar"],
    },
    {
      author: "Indranil Ghosh",
      title: "Clean energy stock price forecasting and response to macroeconomic variables: A novel framework using Facebook's Prophet, NeuralProphet and explainable AI",
      journal: "Technological Forecasting and Social Change",
      coAuthors: ["Rabin K Jana", "Roubaud David", "Oksana Grebinevych", "Peter Wanke", "Yong Tan"],
    },
    {
      author: "Indranil Ghosh",
      title: "Modelling financial stress during the COVID-19 pandemic: Prediction and deeper insights",
      journal: "International Review of Economics & Finance",
      coAuthors: ["Rabin K. Jana", "Roubaud David", "Oksana Grebinevych", "Peter Wanke", "Yong Tan"],
    },
    {
      author: "Indranil Ghosh",
      title: "Reflections of public perception of Russia-Ukraine conflict and Metaverse on the financial outlook of Metaverse coins: Fresh evidence from Reddit sentiment analysis",
      journal: "International Review of Financial Analysis",
      coAuthors: ["Esteban Alfaro-Cortés", "Matías Gámez", "Noelia García-Rubio"],
    },
    {
      author: "Indranil Ghosh",
      title: "Prediction and decoding of metaverse coin dynamics: Inspection through MODWT-Facebook’s prophet-TBATS and XAI methodology",
      journal: "Annals of Operations Research",
      coAuthors: ["Rabin K. Jana", "Mohammad Zoynul Abedin", "Kazim Topuz"],
    },
    {
      author: "Indranil Ghosh",
      title: "Determinants of electronic waste generation in Bitcoin network: Evidence from the machine learning approach",
      journal: "Technological Forecasting and Social Change",
      coAuthors: ["Rabin k Jana", "Debajyoti Das", "Anupam Dutta"],
    },
    {
      author: "Manoj Das",
      title: "Why do you look familiar? Exploring the role of Employee-Customer identification in adopting the service offering",
      journal: "International Journal of Bank Marketing",
      coAuthors: ["Mahesh Ramalingam"],
    },
    {
      author: "Manoj Das",
      title: "What drives product involvement and satisfaction with OFDs amid Covid-19",
      journal: "Journal of Retailing and Consumer Services",
      coAuthors: ["Mahesh Ramalingam"],
    },
    {
      author: "Manoj Das",
      title: "To praise or not to praise- Role of word of mouth in food delivery apps",
      journal: "Journal of Retailing and Consumer Services",
      coAuthors: ["Mahesh Ramalingam"],
    },
    {
      author: "Mahesh Ramalingam",
      title: "Perceived anthropomorphism and purchase intention using artificial intelligence technology: examining the moderated effect of trust",
      journal: "Journal of Enterprise Information Management",
      coAuthors: ["Gunjan Malhotra"],
    },
    {
      author: "Neetu Mohammed",
      title: "Are you so good that they can't ignore you? Effect of coworker support on knowledge sharing through an affective events theory perspective",
      journal: "American Business Review",
      coAuthors: ["Abraham Cyril Issac"],
    },
    {
      author: "Nikhil Rastogi",
      title: "Order imbalance and returns: Evidence from India",
      journal: "International Journal of Managerial Finance",
      coAuthors: ["Nagi Reddy", "Kiran Kumar Kotha"],
    },
    {
      author: "Nitin Gupta",
      title: "Impact of Globalization on Consumer Acculturation: A Study of Urban, Educated, Middle Class Indian Consumers",
      journal: "Asia Pacific Journal of Marketing and Logistics",
    },
    {
      author: "Nitin Gupta",
      title: "Globalization Does Lead to Change in Consumer Behaviour: An empirical Evidence of Impact of Globalization on Changing Materialistic Values in Indian Consumers and its Aftereffects",
      journal: "Asia Pacific Journal of Marketing and Logistics",
    },
    {
      author: "Pradeep Kumar Mohanty",
      title: "Perceived government initiatives: Scale development, validation and impact on consumers' pro-environmental behaviour",
      journal: "Energy Policy",
      coAuthors: ["Archana Patro", "R.M. Harindranatha", "N. Senthil Kumar", "Debadutta Kumar Panda", "Ritesh Dubey"],
    },
    {
      author: "Pranay Sindhu",
      title: "What motivates customers to purchase from social commerce pages? A means-end chain approach",
      journal: "Information Technology & People",
      coAuthors: ["Kumkum Bharti"],
    },
    {
      author: "Praveen Puram",
      title: "The impact of trust-based challenges on user satisfaction in food sharing platforms: A text mining approach",
      journal: "Technological Forecasting and Social Change",
      coAuthors: ["Ben Krishna"],
    },
    {
      author: "Pushpesh Pant",
      title: "Fake news detection for sustainable supply chain management using deceptive tones: an application of ML, NLP and Explainable AI",
      journal: "",
      coAuthors: ["Rohit Yadav", "Muhammed Niyas KP", "Krishna Kumar Dadsena", "Saurabh Pratap", "Amit Sachan"],
    },
    {
      author: "Pushpesh Pant",
      title: "The impact of IoT on manufacturing firm performance: the moderating role of firm-level IoT commitment and expertise",
      journal: "International Journal of Production Research",
      coAuthors: ["Aishwarya Dash", "S. P. Sarmah", "M K Tiwari"],
    },
    {
      author: "Pushpesh Pant",
      title: "Overcoming strategies for supply chain digitization barriers: Implications for sustainable development goals",
      journal: "Business Strategy and the Environment",
      coAuthors: ["Krishna Kumar Dadsena", "Sanjoy Kumar Paul", "Saurabh Pratap"],
    },
    {
      author: "Purnima Khemani",
      title: "Do opposites attract? Understanding the influence of infographics and message credibility on investor perceptions and decision-making",
      journal: "",
    },
    {
      author: "Rambalak Yadav",
      title: "The interplay of emotional value, trend affinity and past practices in sustainable consumption: an application of theory of reciprocal determinism",
      journal: "Journal of Strategic Marketing",
      coAuthors: ["Yatish Joshi", "Amith Shankar"],
    },
    {
      author: "Rambalak Yadav",
      title: "Insights for luxury retailers to reach customers globally",
      journal: "Marketing Intelligence & Planning",
      coAuthors: ["Charles Jebarajakirthy", "Amith Shankar"],
    },
    {
      author: "Rambalak Yadav",
      title: "Application of consumer style inventory (CSI) to predict young Indian consumer’s intention to purchase organic food products",
      journal: "Food Quality and Preferences",
      coAuthors: ["Gyan Prakash", "Pankaj Kumar Singh"],
    },
    {
      author: "Rambalak Yadav",
      title: "Determinants of Consumer’ Green Purchase Behavior in a developing Nation: Applying and Extending the theory of a Planned behavior",
      journal: "Ecological Economics",
      coAuthors: ["Govind S Pathak"],
    },
    {
      author: "Rambalak Yadav",
      title: "Altruistic or egoistic: Which value promotes organic food consumption among young consumers? A study in the context of a developing nation",
      journal: "Journal of Retailing and Consumer Services",
    },
    {
      author: "Rambalak Yadav",
      title: "Young Consumers’ intention towards buying green products in a developing nation: Extending the theory of planned behavior",
      journal: "Journal of Cleaner Production",
      coAuthors: ["Govind S Pathak"],
    },
    {
      author: "Rambalak Yadav",
      title: "Understanding the impact of CSR domain on brand relationship quality",
      journal: "Marketing Intelligence and Planning",
      coAuthors: ["Amit Shankar", "Manish Gupta"],
    },
    {
      author: "Rambalak Yadav",
      title: "The impact of shopping motivation on sustainable consumption: A study in the context of green apparel",
      journal: "Journal of Cleaner Production",
      coAuthors: ["Sushant Kumar"],
    },
    {
      author: "Rambalak Yadav",
      title: "How psychological and contextual factors contribute to travelers’ propensity to choose green hotels",
      journal: "International Journal of Hospitality Management",
      coAuthors: ["MS Balaji", "Charles Jebarajakirithy"],
    },
    {
      author: "Rambalak Yadav",
      title: "The impact of the institutional environment on green consumption in India",
      journal: "Journal of Consumer Marketing",
      coAuthors: ["Naman Sreen", "Sushant Kumar", "Mark Gliem"],
    },
    {
      author: "Rambalak Yadav",
      title: "Analyzing the impact of consumer innovativeness and perceived risk in internet banking adoption: A Study of Indian consumers",
      journal: "International Journal of Bank Marketing",
      coAuthors: ["Vikas Chauhan", "Vipin Choudhary"],
    },
    {
      author: "Rambalak Yadav",
      title: "What drives diners' eco-friendly behaviour? The moderating role of planning routine",
      journal: "Journal of Retailing and Consumer Services",
      coAuthors: ["Shalini Talwar", "Puneet Kaur", "Anil Bilgihan", "Amandeep Dhir"],
    },
    {
      author: "Rambalak Yadav",
      title: "How Does Online Engagement Drive Consumers’ Webrooming Intention?: A Moderated-Mediation Approach",
      journal: "Journal of Global Information Management",
      coAuthors: ["Shankar A", "Manish Gupta", "Charles Jebarajakirthy"],
    },
    {
      author: "Rambalak Yadav",
      title: "Does gamified interaction strong consumer-brand connection? A study of mobile applications",
      journal: "Australasian Journal of Information Systems",
      coAuthors: ["Deepak Sangroya", "Yatish Joshi"],
    },
    {
      author: "Rohan Kumar Mishra",
      title: "Research on related party transactions (RPTs): A systematic review and bibliometric analysis",
      journal: "",
      coAuthors: ["Debidutta Pattnaik", "M. Kabir Hassan", "Abhijeet Chandra"],
    },
    {
      author: "Saikat Banerjee",
      title: "Imprinting effects of exposure to the Indian independence movement on export intensity of firms",
      journal: "Journal of Business Research",
      coAuthors: ["Amith Karna", "Sunil Sharma"],
    },
    {
      author: "Shantanu Bagchi",
      title: "Optimal Order split between local and global suppliers under stochastic yield and demand",
      journal: "International Journal of Mathematics in Operational Research",
      coAuthors: ["PS Sundararaghavan"],
    },
    {
      author: "Sourabh Bhattacharya",
      title: "Applications of artificial intelligence in closed-loop supply chains: Systematic literature review and future research agenda",
      journal: "Transportation Research Part E: Logistics and Transportation Review",
      coAuthors: ["Kannan Govindan", "Surajit Ghosh Dastidar", "Preeti Sharma"],
    },
    {
      author: "Sourabh Bhattacharya",
      title: "Barriers to Circular Supply Chain: the case of unorganized tire retreading in India",
      journal: "International Journal of Logistics Management",
      coAuthors: ["Vinay Kumar Kalakbandi"],
    },
    {
      author: "Sricharan Chirra",
      title: "Critical Success Factors for Sustainable Supply Chain Flexibility",
      journal: "Global Journal of Flexible Systems Management",
      coAuthors: ["Rakesh Raut"],
    },
    {
      author: "Vinay Kumar Kalakbandi",
      title: "Managing the misbehaving retailer under demand and uncertainty and imperfect information",
      journal: "European Journal of Operational Research",
    },
    {
      author: "Vinay Kumar Kalakbandi",
      title: "The impact of range extension on the attraction effect",
      journal: "Journal of Business Research",
      coAuthors: ["Pravesh Kumar Padamwar", "Jagrook Dawra"],
    },
    {
      author: "Vinay Kumar Kalakbandi",
      title: "Deliberation does not make attraction effect disappear: The role of induced cognitive reflection",
      journal: "Journal of Business Research",
      coAuthors: ["Parvesh Kumar Padamwar", "Jagrook Dawra"],
    },
    {
      author: "Wagner Junior Ladeira",
      title: "A meta-analysis on consumer ethical decision-making in P2P accommodations: Role of social, economic, and environmental benefits",
      journal: "International Journal of Hospitality Management",
      coAuthors: ["Fernando de Oliveira Santini", "Tareq Rasul", "M.S. Balaji", "Musarrat Shaheen"],
    },
  ].sort((a, b) => a.author.localeCompare(b.author));

  const publicationsB = [
    {
      author: "Aindrila Chatterjee",
      title: "Non-profit crisis leadership during the COVID-19 pandemic in India and the United States",
      journal: "Human Resource Development International",
      coAuthors: ["Katherine Rosenbusch", "Krishna Gajjar", "Sonal Soni"],
    },
    {
      author: "Amith Vikram Megaravalli",
      title: "Initial public offering: a critical review of literature",
      journal: "Qualitative Research in Financial Markets",
    },
    {
      author: "Avishek Bhandari",
      title: "Time-varying Nature of Stock Market Interdependence: A Global Perspective",
      journal: "Economic and Political Weekly",
      coAuthors: ["Kamaiah Bandi"],
    },
    {
      author: "Avishek Bhandari",
      title: "On the Dynamic of Inflation-Stock Returns in India",
      journal: "Journal of Quantitative Economics",
      coAuthors: ["Kamaiah Bandi"],
    },
    {
      author: "Avishek Bhandari",
      title: "Long Memory and Fractality Among Global Equity Markets: a Multivariate Wavelet Approach",
      journal: "Journal of Quantitative Economics",
      coAuthors: ["Kamaiah Bandi"],
    },
    {
      author: "Chauhan, Y.",
      title: "Information Asymmetry and Information Content of Insider Trades: Evidence from Indian Stock Market",
      journal: "Journal of Multinational Financial Management",
      coAuthors: ["Kumar, K. K.", "Chakrapani Chaturvedula"],
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Predictors of Microcredit Default in Indian Self-Help Groups",
      journal: "Annals of Public and Cooperative Economics",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Role of Identity in the business ecosystem: an inquiry in Indian stone carving clusters",
      journal: "International Journal of Organizational Analysis",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Misaligned Expectations and Non-Cooperative Behavior in Indian Microfinance: Evidences from a Survey",
      journal: "Journal of Economic Issues",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Entrepreneurial Orientation, Intermediation Services, Microfinance, and Microenterprises",
      journal: "Managerial and Decision Economics",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Public Private Partnerships and Value Creation: the Role of Relationship Dynamics",
      journal: "International Journal of Organizational Analysis",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Trust, Social Capital, and Intermediation Roles in Microfinance and Microenterprise Development",
      journal: "VOLUNTAS: International Journal of Voluntary and Nonprofit Organizations",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Organizational collaboration, hybrid structure, governance and value creation: Evidence from Indian public-private partnerships",
      journal: "Emergence: Complexity and Organization",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Impact of organizational culture on strategic planning",
      journal: "Management Decision",
    },
    {
      author: "Debadutta Kumar Panda",
      title: "The green identity and green strategy: an interplay",
      journal: "Technology Analysis and Strategic Management",
      coAuthors: ["Sriharsha Reddy", "Sridhar Viathianathan"],
    },
    {
      author: "Debadutta Kumar Panda",
      title: "Does the Cashless transaction work? An analysis of policy challenges in an emerging economy",
      journal: "Digital Policy, Regulation and Governance",
      coAuthors: ["Sriharsha Reddy", "Sridhar Viathianathan"],
    },
    {
      author: "Indranil Ghosh",
      title: "Predicting financial cycles with dynamic ensemble selection frameworks using leading, coincident and lagging indicators",
      journal: "Research in International Business and Finance",
      coAuthors: ["Tamal Datta Chaudhuri", "Layal Isskandarani", "Mohammad Zoynul Abedin"],
    },
    {
      author: "Indranil Ghosh",
      title: "Estimating the relative effects of raw material prices, sectoral outlook and market sentiment on stock prices",
      journal: "Resources Policy",
      coAuthors: ["Tamal Datta Chaudhuri", "Esteban Alfaro-Cortes", "Matias Gamez Martinez"],
    },
    {
      author: "Indranil Ghosh",
      title: "New Business capacity of developed, developing and least developing economies: inspection through state-of-the-art fuzzy clustering and PSO-GBR frameworks",
      journal: "Benchmarking: An International Journal",
      coAuthors: ["Rabin K Jana", "Paritosh Pramanik"],
    },
    {
      author: "Indranil Ghosh",
      title: "COVID-19 Media Chatter and Macroeconomic Reflectors on Black Swan: A Spanish and Indian Stock Markets Comparison",
      journal: "Risks",
      coAuthors: ["Esteban Alfaro-Cortés", "Matías Gámez", "Noelia García-Rubio"],
    },
    {
      author: "Juhi Gahlot Sarkar",
      title: "Brand it Green: Young consumers’ brand attitudes and purchase intensions toward green brand advertising appeals",
      journal: "Young Consumers",
      coAuthors: ["Abhigyan Sarkar", "Rambalak Yadav"],
    },
    {
      author: "Kalyana Chejarla",
      title: "MCDM application in logistics performance evaluation: A literature review",
      journal: "Journal of Multi-Criteria Decision Analysis",
      coAuthors: ["Omkarprasad S. Vaidya", "Sushil Kumar"],
    },
    {
      author: "Krishna Dixit",
      title: "Leveraging Social and Intellectual Capital for Social Entrepreneurship: A Model for Sustainable Business Practices in an Uncertain Environment",
      journal: "",
      coAuthors: ["Pranav Kumar", "Kumar Aashish", "Mohammad Zohair"],
    },
    {
      author: "Manish Gupta",
      title: "Engaging Employees for Quality of Life: Mediation by Psychological capital",
      journal: "The Service Industries Journal",
      coAuthors: ["Musarrat Shaheen", "Manoj Das"],
    },
    {
      author: "Mahesh Ramalingam",
      title: "How Effective are your Actions? Impact of perceived consumer effectiveness on green purchasing behaviour",
      journal: "Academy of Marketing Studies Journal",
      coAuthors: ["Manoj Das"],
    },
    {
      author: "Mahesh Ramalingam",
      title: "Managerial networking behavior for grant acquisition in nonprofits: an application of the behavioral reasoning theory (BRT)",
      journal: "International Review on Public and Nonprofit Marketing",
      coAuthors: ["Debadutta Kumar Panda"],
    },
    {
      author: "Mahesh Ramalingam",
      title: "From Clicks to Cuisine: Unveiling the Impact of Attitude and Positive Word of Mouth in Food Delivery App Usage",
      journal: "Journal of International Food & Agribusiness Marketing",
      coAuthors: ["Manoj Das"],
    },
    {
      author: "Mahesh Ramalingam",
      title: "Unlocking omnichannel capabilities to understand consumer retention: unravelling cross-channel integration and consumer empowerment",
      journal: "Benchmarking: An International Journal",
      coAuthors: ["Gunjan Malhotra"],
    },
    {
      author: "Nitin Gupta",
      title: "Customer perceptions of services based on SERVQUAL dimensions: A study of Indian commercial banks",
      journal: "Services Marketing Quarterly",
      coAuthors: ["Bose, Sunny"],
    },
    {
      author: "Nitin Gupta",
      title: "Extent of Susceptibility to Interpersonal Influence and Price Sensitivity among Indian Youth. Is there a Relationship between these Two Constructs?",
      journal: "Young Consumers",
    },
    {
      author: "Nitin Gupta",
      title: "Understanding Acculturation of Consumer Culture in an Emerging Market – An Analysis of Urban, Educated, Middle-class Indian Consumers",
      journal: "International Journal of Emerging Markets",
    },
    {
      author: "Nitin Gupta",
      title: "Influence of consumer cosmopolitanism on purchase intention of foreign vs local brands: a developing country perspective",
      journal: "International Journal of Emerging Markets",
      coAuthors: ["Ankur Srivastava", "Nripendra P Rana"],
    },
    {
      author: "Nikhil Rastogi",
      title: "Does bankruptcy law affect the relation between leverage and firm performance?",
      journal: "Indian Growth and Development Review",
      coAuthors: ["Satish Kumar"],
    },
    {
      author: "Power, J.L.",
      title: "Acceptability of workplace bullying: A comparative study on six continents",
      journal: "Journal of Business Research",
      coAuthors: [
        "Brotheridge, C.M.",
        "Blenkinsopp, J.",
        "Bowes-Sperry, L.",
        "Bozionelos, N.",
        "Buzády, Z.",
        "Chuang, A.",
        "Drnevich, D.",
        "Garzon-Vico, A.",
        "Leighton, C.",
        "Madero, S.M.",
        "Mak, W.",
        "Romina Mathew",
        "Monserrat, S.I.",
        "Mujtaba, B.G.",
        "Olivas-Lujan, M.R.",
        "Polycroniou, P.",
        "Sprigg, C.A.",
        "Axtell, C.",
        "Holman, D.",
        "Ruiz-Gutiérrez, J.A.",
        "Nnedumm, A. U. O.",
      ],
    },
    {
      author: "Pradeep Rathore",
      title: "Assessing impact of consumer perceived CSR on consumer attitude and purchase behaviour in retail segment: a stakeholder theory perspective",
      journal: "Society and Business Review",
      coAuthors: ["Esha Saha", "Sayan Chakraborty", "Aviral Kumar Tiwar"],
    },
    {
      author: "Preety Awasthi",
      title: "Consumer’s expectations from mobile CRM services: a banking context",
      journal: "Business Process Management Journal",
      coAuthors: ["Purnima S. Sangle"],
    },
    {
      author: "Preety Awasthi",
      title: "Adoption of CRM technology in multichannel environment: a review (2006-2010)",
      journal: "Business Process Management Journal",
      coAuthors: ["Purnima S. Sangle"],
    },
    {
      author: "Preety Awasthi",
      title: "The importance of value and context for mobile CRM services in banking",
      journal: "Business Process Management Journal",
      coAuthors: ["Purnima S. Sangle"],
    },
    {
      author: "Pushpesh Pant",
      title: "Performance measurement through corporate communication: evidence from Indian manufacturing firms",
      journal: "International Journal of Productivity and Performance Management",
      coAuthors: ["Ashok Nimiwal", "Shantanu Dutta", "Sarada Prasad Sarmah"],
    },
    {
      author: "Pushpesh Pant",
      title: "Working capital and firm performance: role of COVID-19 disruption",
      journal: "International Journal of Productivity and Performance Management",
      coAuthors: ["Pradeep Rathore", "Krishna Kumar Dadsena", "Bhaskar Shandilya"],
    },
    {
      author: "Pushpesh Pant",
      title: "Structural Supply Chain Complexity Index and Construct Validity: A Data-Driven Empirical Approach",
      journal: "International Journal of Emerging Markets",
      coAuthors: ["Shantanu Dutta", "S.P. Sarmah"],
    },
    {
      author: "Pushpesh Pant",
      title: "Interplay between CSR, female director, promoter ownership and firm performance: a resource orchestration theory perspective",
      journal: "Managerial Finance",
      coAuthors: ["Rohit Yadav", "Abhinav Vats"],
    },
    {
      author: "Rambalak Yadav",
      title: "Motivators and barriers to sustainable food consumption: Qualitative inquiry about organic food consumers in a developing nation",
      journal: "International Journal of Nonprofit and Voluntary Sector Marketing",
      coAuthors: ["Pankaj Kumar Singh", "Ankur Srivastava", "Anees Ahmad"],
    },
    {
      author: "Rambalak Yadav",
      title: "Adoption of Electronic Banking services in India: an Extension of UTAUT2 Model",
      journal: "Journal of Financial Services Marketing",
      coAuthors: ["Vikas Chauhan", "Vipin Choudhary"],
    },
    {
      author: "Rambalak Yadav",
      title: "Investigating the role of electric vehicle knowledge in consumer adoption: evidence from an emerging market",
      journal: "Benchmarking: An International Journal",
      coAuthors: ["Deepak Jaiswal", "Rishi Kant", "Pankaj Kumar Singh"],
    },
    {
      author: "Saikat Banerjee",
      title: "The dark shadow of corruption on new product development",
      journal: "Benchmarking: An International Journal",
    },
    {
      author: "Santanu Mandal",
      title: "Gen Zs and millennials’ orientation towards AI tools: an index approach",
      journal: "Technology Analysis & Strategic Management",
      coAuthors: ["Sarath Babu", "Raghu Raman"],
    },
    {
      author: "Shantanu Shankar Bagchi",
      title: "Optimization of postponement process for a two stage modular manufacturer",
      journal: "Journal of Global Operations and Strategic Sourcing",
      coAuthors: ["Jighyasu Gaur"],
    },
    {
      author: "Sriharsha Reddy",
      title: "Predictors of Microcredit Default in Indian Self-Help Groups",
      journal: "Annals of Public and Cooperative Economics",
    },
    {
      author: "Steven Raj Padakandla",
      title: "Climate sensitivity of rice yields: An agro climatic zone analysis in the undivided state of Andhra Pradesh, India",
      journal: "Journal of Public Affairs",
    },
    {
      author: "Steven Raj Padakandla",
      title: "Does climate impact vary across time horizons? A time–frequency analysis of climate-crop yields in India",
      journal: "Stochastic Environmental Research and Risk Assessment",
      coAuthors: ["Avishek Bhandari"],
    },
    {
      author: "Tulika Sharma",
      title: "Small and Medium Enterprises (SMEs) Navigating Through the Covid Pandemic in India: an Examination Through the Systems Approach",
      journal: "Systemic Practice and Action Research",
      coAuthors: ["Debadutta Panda", "Rohit Bhardwaj", "Sriharsha Reddy"],
    },
    {
      author: "Wagner Junior Ladeira",
      title: "Understanding heterogeneity in service research: a meta-analytic perspective",
      journal: "The Service Industries Journal",
      coAuthors: ["Tareq Rasul", "Fernando de Oliveira Santini", "John Lewis Rice", "Musarrat Shaheen"],
    },
  ].sort((a, b) => a.author.localeCompare(b.author));

  const cases = [
    {
      author: "Kalyan Chejarla",
      title: "Butterfly Edufields: Different Shades of Capacity",
      journal: "IVEY Publishing",
      coAuthors: ["Sourabh Bhattacharya", "Siddhartha Modukuri"],
    },
    {
      author: "Kalyan Chejarla",
      title: "CenturyPly Laminates: Redesigning the Supply Chain",
      journal: "IVEY Publishing",
    },
    {
      author: "Kalyan C Chejarla",
      title: "ElasticRun: Pathways to Growth",
      journal: "IVEY Publishing",
      publicationDate: "02 August 2023",
    },
    {
      author: "Nikhil Rastogi",
      title: "Ashiana Housing Ltd: The Right Time to Invest",
      journal: "IVEY Publishing",
      publicationDate: "25 Sept 2020",
    },
    {
      author: "Nikhil Rastogi",
      title: "Snowman Logistics Ltd: What Ails It?",
      journal: "IVEY Publishing",
      publicationDate: "20 January 2023",
    },
    {
      author: "Nitin Gupta",
      title: "ATHER ENERGY: Motivating India for  Ather Electric Scooters",
      journal: "IVEY Publishing",
    },
    {
      author: "Nitin Gupta",
      title: "Mahindra Electric Mobility Limited: The Electric Vehicles Dilemma",
      journal: "IVEY Publishing",
      publicationDate: "October 2018",
      caseId: "9B18A062",
    },
    {
      author: "Nitin Gupta",
      title: "Tata’s Air India: Brand Repositioning and Revitalization Challenges",
      journal: "IVEY Publishing",
      publicationDate: "8 January 2024",
      caseId: "W34124",
    },
    {
      author: "Nitin Gupta",
      title: "Tata Motors: Challenges for the Electric Vehicle Market Leader",
      journal: "IVEY Publishing",
      publicationDate: "12 January 2024",
      caseId: "W33811",
    },
    {
      author: "Rambalak Yadav",
      title: "Bakeys Cutlery: An Innovative Sustainable Product",
      journal: "IVEY Publishing",
      coAuthors: ["Pallavi Pandey"],
    },
    {
      author: "Rajita Singh",
      title: "SEmployee Advocate or Company Custodian: Choosing Sides in a Sexual Harassment Case",
      journal: "IVEY Publishing",
      publicationDate: "14 March 2023",
      coAuthors: ["Romina Mathew", "Anjali Bhole Desai", "Sudhanshu Bhatt"],
    },
    {
      author: "Sourabh Bhattacharya",
      title: "Butterfly Edufields: Value Chain Reconfiguration",
      journal: "IVEY Publishing",
      coAuthors: ["Kalyan Chejarla", "N Ravichandran"],
    },
    {
      author: "Sourabh Bhattacharya",
      title: "NILAGAI FOODS: Positioning Packaged Coconut Water in India",
      journal: "IVEY Publishing",
      coAuthors: ["Romina Mathew", "Rambalak Yadav"],
    },
    {
      author: "Sourabh Bhattacharya",
      title: "Bajaj RE60: The Branding Challenge of Disruptive Innovation",
      journal: "IVEY Publishing",
      coAuthors: ["Srividya Raghavan"],
    },
    {
      author: "Ritu Singh",
      title: "KAPS FOODS India Pvt. Ltd.: Data Mismanagement",
      journal: "IVEY Publishing",
      coAuthors: ["Vinay Kumar Kalakbandi"],
    },
  ].sort((a, b) => a.author.localeCompare(b.author));

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
<style
  dangerouslySetInnerHTML={{
    __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/researcharchive.webp") center/cover no-repeat, #f0f0f0;
        position: relative;
        height: 60vh;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
      .breadcrumb-item a {
        text-decoration: none;
      }

      /* Card Styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image Glow & Hover Effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social Icons */
      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000000ff;
      }

      /* Section Headers */
      .section-header {
        background-color: #163977;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      /* Content Sections */
      .content-section {
        background: #fff;
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
  }}
/>


      {/* Faculty Hero Section */}
      <section className="faculty-section">
        <div className="faculty-hero text-center text-white py-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-2">Research Publication</h2>
          <p className="text-white">
            A campus where ideas become influential. <br />
Faculty and scholars publish in global journals, contributing insights that shape policy, practice, and academic discourse.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                  Research Publication
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Title Section */}
        <div className="container-fluid p-3 border-bottom text-center" data-aos="fade-up">
          <h3 className="fw-bold text-uppercase text-warning">Research Publications</h3>
        </div>

        {/* Main Content */}
        <div className="container my-4" data-aos="fade-up">
          <div className="content-section">
            <p className="mb-3">
              IMT Hyderabad faculty members have published their research papers in journals like
              <span> European Journal of Operational Research</span>,
              <span> Transportation Research Part –E</span>,
              <span> International Journal of Hospitality Management</span>,
              <span> Food and Quality Preferences</span>,
              <span> Marketing Intelligence & Planning</span>,
              <span> Ecological Economics</span>,
              <span> Journal of Retailing and Consumer Services</span>,
              <span> Asia Pacific Journal of Management</span>,
              <span> International Journal of Mathematics in Operational Research</span>,
              <span> Emerging Markets Review</span>,
              <span> Journal of Business Research</span>,
              <span> International Journal of Operational Research</span>,
              <span> Economic and Political Weekly</span>,
              <span> Journal of Quantitative Economics</span>,
              <span> Int Journal of Nonprofit and Voluntary Sector Marketing</span>,
              <span> Young Consumers</span>,
              <span> International Journal of Bank Marketing</span>,
              <span> Annals of Public and Cooperative Economics</span>,
              <span> International Journal of Organizational Analysis</span>,
              <span> Journal of Economic Issues</span>,
              <span> Managerial and Decision Economics</span>,
              <span> Journal of Global Operations & Strategic Sourcing</span>,
              <span> International Journal of Organizational Analysis</span>,
              <span> VOLUNTAS: International Journal of Voluntary & Non-profit Organizations</span>,
              <span> Emergence: Complexity and Organization</span>,
              <span> Performance Improvement Quarterly</span>,
              <span> The Service Industries Journal</span>,
              <span> Journal of Multinational Financial Management</span>,
              <span> International Journal of Managerial Finance</span>,
              <span> Services Marketing Quarterly</span>,
              <span> Asia Pacific Journal of Marketing and Logistics</span>,
              <span> Journal of Cleaner Production</span>,
              <span> International Journal of Emerging Markets</span>,
              <span> Academy of Marketing Studies Journal</span>,
              <span> Journal of Public Affairs</span>,
              <span> Journal of Electronic Commerce in Organizations</span>,
              <span> International Journal of Tourism Research</span>,
              <span> Journal of Consumer Marketing</span>,
              <span> Business Process Management Journal</span>,
              <span> Journal of Financial Services Marketing</span>,
              <span> Journal of Sustainable Tourism</span>,
              <span> Computers & Industrial Engineering</span>,
              <span> Management Decision</span>,
              <span> Journal of Global Information Management</span>,
              <span> Benchmarking: An International Journal</span>,
              <span> Resources Policy</span>,
              <span> Energy Policy</span>,
              <span> Technological Forecasting and Social Change</span>,
              <span> Journal of Strategic Marketing</span>,
              <span> Journal of Multicriteria Decision Analysis</span>,
              <span> Stochastic Environmental Research and Risk Assessment</span>,
              <span> Public Administration Quarterly</span>,
              <span> Australasian Journal of Information Systems</span>,
              <span> Technology Analysis and Strategic Management</span>,
              <span> Finance Research Letters</span>,
              <span> Digital Policy, Regulation and Governance</span>,
              <span> International Review of Financial Analysis</span>, and
              <span> Annals of Operations Research</span>.
            </p>
            <p>
              Our faculty members have published their management cases with reputed publishers like
              <strong> HARVARD & IVEY</strong>.
            </p>
            <p>
              Prof. Rambalak Yadav was appointed as Guest Editor for one of the Special Issues for the top-ranked journal
              <strong> International Journal of Nonprofit and Voluntary Sector Marketing</strong>.
            </p>
            <p>
              Prof. (Dr.) Rambalak Yadav was appointed as a Member in the Editorial Review Board (ERB) in the
              <strong> Journal of Consumer Behaviour</strong> (Wiley Publication).
            </p>
          </div>
        </div>

        {/* Journal Publication Section */}
        <div className="container-fluid border-bottom text-center mt-5 pt-4" data-aos="fade-up">
          <h3 className="fw-bold text-warning">Journal Publication</h3>
        </div>
        <div className="container my-4" data-aos="fade-up">
          <div className="content-section">
            {/* A* Section */}
            <div className="section-header">A*</div>
            <ul className="list-unstyled">
              
              <li className="mb-3">
                <b>Arun Kumar Biswal</b>, Mamata Jenamani & Sri Krishna Kumar, “Warehouse efficiency improvement using RFID in a humanitarian supply chain: Implications for Indian food security system”,
                <i>Transportation Research Part –E</i>.
              </li>
              <li className="mb-3">
                <b>Indranil Ghosh</b>, Arijit De, “Maritime Fuel Price Prediction of European Ports using Least Square Boosting and Facebook Prophet: Additional Insights from Explainable Artificial Intelligence”,
                <i>Transportation Research Part E: Logistics and Transportation Review</i>.
              </li>
              <li className="mb-3">
                Wagner Junior Ladeira, Fernando de Oliveira Santini, Tareq Rasul, M.S. Balaji, <b>Musarrat Shaheen</b>,
                “A meta-analysis on consumer ethical decision-making in P2P accommodations: Role of social, economic, and environmental benefits”,
                <i>International Journal of Hospitality Management</i>.
              </li>
              <li className="mb-3">
                <b>Rambalak Yadav</b>, MS Balaji, Charles Jebarajakirithy, “How psychological and contextual factors contribute to travelers’ propensity to choose green hotels”,
                <i>International Journal of Hospitality Management</i>.
              </li>
              <li className="mb-3">
                Shalini Talwar, Puneet Kaur, <b>Rambalak Yadav</b>, Rajat Sharma & Amandeep Dhir, “Food waste and out-of-home dining: antecedents and consequents of the decision to take away leftovers after dining at restaurants”,
                <i>Journal of Sustainable Tourism</i>.
              </li>
              <li className="mb-3">
                <b>Sourabh Bhattacharya</b>, Kannan Govindan, <b>Surajit Ghosh Dastidar</b>, Preeti Sharma, “Applications of artificial intelligence in closed-loop supply chains: Systematic literature review and future research agenda”,
                <i>Transportation Research Part E: Logistics and Transportation Review</i>.
              </li>
              <li className="mb-0">
                <b>Vinay Kumar Kalakbandi</b>, “Managing the misbehaving retailer under demand and uncertainty and imperfect information”,
                <i>European Journal of Operational Research</i>.
              </li>
            </ul>

            {/* A Section */}
            <div className="section-header">A</div>
            {/* <ul className="list-unstyled">
              {publicationsA.map((pub, index) => (
                <li key={index} className="mb-3">
                  <b>{pub.author}</b>
                  {pub.coAuthors && pub.coAuthors.length > 0 && `, ${pub.coAuthors.join(", ")}`}, “{pub.title}”,
                  <i>{pub.journal}</i>.
                </li>
              ))}
            </ul> */}
            <ul className="list-unstyled">
  {publicationsA.map((pub, index) => (
    <li key={index} className="mb-3">
      <b>{pub.author}</b>
      {pub.coAuthors && pub.coAuthors.length > 0 &&
        `, ${pub.coAuthors.join(", ")}`}
      , “{pub.title}”, <i>{pub.journal}</i>
      {pub.url && (
        <>
          {" "}
          |{" "}
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            View Paper
          </a>
        </>
      )}
      .
    </li>
  ))}
</ul>


            {/* B Section */}
            <div className="section-header">B</div>
            <ul className="list-unstyled">
              {publicationsB.map((pub, index) => (
                <li key={index} className={index === publicationsB.length - 1 ? "mb-0" : "mb-3"}>
                  <b>{pub.author}</b>
                  {pub.coAuthors && pub.coAuthors.length > 0 && `, ${pub.coAuthors.join(", ")}`}, “{pub.title}”,
                  <i>{pub.journal}</i>.
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cases Section */}
        <div className="container-fluid border-bottom py-3 text-center" data-aos="fade-up">
          <h3 className="fw-bold text-warning">Cases</h3>
        </div>
        <div className="container my-4" data-aos="fade-up">
          <div className="content-section">
            <ul className="list-unstyled">
              {cases.map((c, index) => (
                <li key={index} className={index === cases.length - 1 ? "mb-0" : "mb-3"}>
                  <b>{c.author}</b>
                  {c.coAuthors && c.coAuthors.length > 0 && `, ${c.coAuthors.join(", ")}`}, “{c.title}”,
                  <i>{c.journal}</i>
                  {c.publicationDate && `, Publication date: ${c.publicationDate}`}
                  {c.caseId && `, ${c.caseId}`}.
                </li>
              ))}
            </ul>
          </div>
        </div>

       

      </section>
    </>
  );

}

