var App = {

  pageTitle: {
    home: "Home",
    apply: "Apply",
    program: "Programs",
    momentum: "Momentum Program",
    pastProgram: "Past Programs",
    about: "About Us",
    partner: "Partners",
    dontate: "Donate"
  },

  button: {
    learnMore : "Learn More",
    detail : "Detail",
    search: "Search",
    startMyApplication: "Start My Application",
    beAMomentumPartner: "Be a Momentum Partner"
  },

  homeMenu: {
    item1 : {name: "Programs", link: "/programs"},
    item2 : {name: "Partners", link: "/partners"},
    item3 : {name: "About Us", link: "/about-us"},
    item4 : {name: "Donate", link: "/donate"}
  },

  pageMenu: {
    login: "Log in to your application",
    item1 : {name: "Programs", link: "/programs"},
    item2 : {name: "Apply", link: "/apply"},
    item3 : {name: "About", link: "/about-us"},
    item4 : {name: "Partners", link: "/partners"},
    item5 : {name: "Donate", link: "/donate"}
  },

  footer: {
    email: "recruitment@seo-vn.org",
    item1 : {name: "Programs.", link: "/programs"},
    item2 : {name: "Apply.", link: "/apply"},
    item3 : {name: "Partners.", link: "/partners"},
    item4 : {name: "About Us.", link: "/about-us"},
    item5 : {name: "Donate.", link: "/donate"}
  },

  home : {
    spotlight: {
      title: "Make an impact",
      description: "Sponsors for Educational Opportunity - Vietnam (SEO-Vietnam) provides superior educational and career programs to students to maximize their opportunities for professional success",
      link: "Apply Now"
    },
    company : {
      title: "SEO-Vietnam Mission",
      description: "We are committed to connecting high-achieving students and young professionals with structured opportunities to intern and work for leading businesses and non-profit organizations in Vietnam"
    },
    "partner" : {
      title : "Our Partners",
      description: "SEO-Vietnam has successfully partnered with 35 prestigious financial services, retail, and non-profit organizations to provide the best internship experience to our students in Vietnam",
      golds: ["/assets/images/logo/VN_Esports.png", "/assets/images/logo/PWC.png", "/assets/images/logo/PM-Vinataba.jpg", "/assets/images/logo/EY.png"],
      silvers: ["/assets/images/logo/HSC.jpg", "/assets/images/logo/Yola.jpg", "/assets/images/logo/Kinh_Do.png", "/assets/images/logo/E2.gif", "/assets/images/logo/VinaCapital.jpg", "/assets/images/logo/Horizon.jpg"]
    }
  },

  apply: {
    title: "What To Know Before Applying",
    left: {
      fact1: {title: "Check your eligibility", description: "Candidates must either be enrolled in an undergraduate/graduate program or graduate no sooner than December 2015"},
      fact2: {title: "Prepare your application", description: "While all candidates are welcome to apply, their alignment with SEO-V's mission, vision and values are strongly preferred"}
    },
    right: {
      title: "Dates and Deadlines",
      events: [
        {date: "01/16", name:"VN/Asia Webinar (Time TBD)"},
        {date: "20/12/15", name:"US/Europe Webinar (10 a.m. EST - 11 a.m. EST)"}
      ],
      deadline: {date: "15/01/16", description: "Deadline to Apply for 2016 Summer Program"}
    },
    process: {
      title: "Application Process Timeline",
      rounds: [
        {name: "Round 1", time: "15/12/15 - 15/01/16"},
        {name: "Round 2", time: "15/02/16 - 04/03/16"},
        {name: "Round 3", time: "16/03/16 - 16/04/16"},
        {name: "Final Offer", time: "April 2016"}
      ],
      paragraph: {
        title: "SEO-Vietnam Career Program",
        firstLine: "Location: Ho Chi Minh City and Hanoi",
        content: "SEO-Vietnam's placement process connects our students with top-notch financial services, retail, and non-profit organizations in Vietnam. Our career program also include rigorous training, mentorship and a Summer Seminar Series that featured executives and leaders in business, government and non-profit organizations"
      }
    }
  },

  partners : {
    title: "Our Partners",
    sideBarTitle: "View All",
    sideBars: [
      {
        title: "Finance",
        items: {
          golds: [
            {
              name: "EY",
              logo: "EY.png",
              description: "EY is a global leader in assurance, tax, transactions and advisory services. It is one of the 'Big Four' audit firms"
            },
            {
              name: "PwC",
              logo: "PWC.png",
              description: " PricewaterhouseCoopers is a multinational professional services network. It is the largest professional services firm in the world, and is one of the “Big Four” auditors"
            }
          ],
          silvers: [
            {
              name: "Horizon",
              logo: "Horizon.jpg",
              description: "Horizon Capital Group provides investment banking, corporate finance advisory, securities brokerage, and asset management services"
            },
            {
              name: "VinaCapital",
              logo: "VinaCapital.jpg",
              description: "VinaCapital is an investment management and real estate development firm in Vietnam, with a diversified portfolio of USD1.5 billion in assets under management"
            },
            {
              name: "HSC",
              logo: "HSC.jpg",
              description: "Ho Chi Minh City Securities Corporation is a professional securities brokerage and equity firm in Vietnam. HSC delivers a comprehensive list of financial services and provides professional investment advisory"
            }
          ],
          normals:[
            {
              name: "VIG",
              logo: "VIG.png",
              description: "VI (Vietnam Investments) Group is a private equity firm that focuses on high growth businesses in Vietnam"
            },
            {
              name: "Indochina Capital",
              logo: "Indochina_Capital.jpg",
              description: "Founded in 1999, Indochina Capital is one of Vietnam’s leading financial services and investment firms active in asset management"
            },
            {
              name: "ACB",
              logo: "ACB.png",
              description: "Asia Commercial Bank is the largest private bank in Vietnam by assets. Its branch network system totalled nearly 9000 employees offering a variety of services to clients"
            },
            {
              name: "SSI",
              logo: "SSI.jpg",
              description: "Saigon Securities Inc. is a leading and reputable financial corporation in Vietnamese market. SSI has an extensive branch network in Vietnam at major cities such as Hanoi, Ho Chi Minh City, Nha Trang, Vung Tau"
            }
          ]
        }
      }, {
        title: "Technology",
        items: {
          golds: [],
          silvers: [],
          normals:[
            {
              name: "M-Service",
              logo: "M_Service.png",
              description: "M_Service provides financial service under the brand name of MoMo. MoMo provides new channels for customers, who have a mobile phone, to access traditional retail financial services via an extensive distribution network of mobile operators"
            },
            {
              name: "Zalora",
              logo: "Zalora_Vietnam.jpg",
              description: "ZALORA is an e-commerce platform and website that provides fashion and footwear products. Users can view images and purchase their desired fashion product online while receiving fashion tips and advice from the site"
            },
            {
              name: "Lazada",
              logo: "Lazada_VN.png",
              description: "Lazada is part of Lazada Group - a privately owned e-commerce company headquartered in Sngapore that was found by Rocket Internet in 2011 with the goal of being “the Amazon.com of Southeast Asia”"
            },
            {
              name: "iVivu",
              logo: "ivivu.png",
              description: ":iVivu is a joint venture that offers a hotel management system for smart hotels in Australia. Catering to a customer base in Southeast Asian countries such as Vietnam, IVivu enables travelers to reserve social workshops, hotels, and medical facilities online"
            },
            {
              name: "Tiki",
              logo: "Tiki_VN.png",
              description: "Tiki.vn is an e-commerce startup in Vietnam which offers customer service 7 days a week, free nationwide delivery, a wide range of 35,000 products ranging from books in both Vietnamese and English, e-book devices, gifts, stationary, fashion apparel, and accessories"
            }
          ]
        }
      }, {
        title: "Entertainment",
        items: {
          golds: [
            {
              name: "Vietnam Esports",
              logo: "VN_Esports.png",
              description: "Vietnam Esports, formerly known as Garena Vietnam, was founded in 2009 and has been developing very fast in e-Sports & internet industry. Its featured product include Garena Plus, Gcafe, League of Legends, Fifa Online 3, etc."
            }],
          silvers: [],
          normals:[
            {
              name: "VNG",
              logo: "VNG.jpg",
              description: 'VNG motto is to "make the Internet change Vietnamese lives." It believes in the power of the Internet and sees it as its mission to bring Internet users meaningful experiences'
            },
            {
              name: "XLE",
              logo: "XLE_Group.png",
              description: "XLE seeks to become the central figure in transforming the sports’ eco-system in Vietnam. Besides making sports a great entertainment experience and a sustainable business; we also focus on developing youth and inspiring millions of sports fans in Vietnam"
            },
            {
              name: "YanTV",
              logo: "YAN.jpg",
              description: "YMG and its subsidiaries is a entertainment multi-media corporate in Vietnam focusing on developing synthetic forms of entertainment for the youth, being integrated in almost every major communication platforms including TV, digital, event and production"
            }]
        }
      }, {
        title: "FMCG",
        items: {
          golds: [
            {
              name: "Vinataba-Phillip Morris",
              logo: "PM-Vinataba.jpg",
              description: "Philip Morris International Inc. (PMI) is the leading international tobacco company, with six of the world’s top 15 international brands, including Marlboro, the number one cigarette brand worldwide"
            }],
          silvers: [
            {
              name: "Kido Group",
              logo: "Kinh_Do.png",
              description: "is a business group of Vietnam with an emphasis on food production, including baked goods, confections, snacks and soft drinks. The corporate group also includes companies in the fields of financial services, real estate and a retail bakery chain."
            }],
          normals:[]
        }
      }, {
        title: "Ngo",
        items: {
          golds: [],
          silvers: [],
          normals:[
            {
              name: "San Art",
              logo: "San_Art.png",
              description: "Sàn Art is an artist initiated, non-profit contemporary art organization committed to the exchange and excavation of cultural knowledge within an interdisciplinary community"
            },
            {
              name: "LIN",
              logo: "LIN.png",
              description: "The LIN Center for Community Development (LIN) provides support services to local NPOs, skilled volunteers and donors who are committed to building strong communities"
            }
          ]
        }
      }, {
        title: "Education",
        items: {
          golds: [],
          silvers: [
            {
              name: "Everest Education",
              logo: "E2.gif",
              description: "Founded by Harvard and Stanford graduates, E2 prepares students mentally and academically for rigors of an international education in E2's small classes, camps, and VIP tutoring"
            },
            {
              name: "Yola",
              logo: "Yola.jpg",
              description: "As a premier provider of educational services in Vietnam, YOLA provides a wide range of educational programs and products, including test preparation courses,English language, soft-skill training, after-school tutoring, summer camps, and development of educational content"
            }
          ],
          normals:[]
        }
      }
    ]
  },

  program : {
    title : "SEO-Vietnam Programs",
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: true,
        items: [{title: "Career program", active: true, link: "/programs"}, {title: "Momentum Program", active: false, link: "/momentum-program"}]
      }, {
        title: "Apply",
        link: "/apply",
        active: false,
        items: []
      }, {
        title: "Be a partner",
        link: "/partners",
        active: false,
        items: []
      }, {
        title: "Past programs",
        link: "/past-programs",
        active: false,
        items: []
      }
    ],
    content: {
      globalPresence: {
        image: "/assets/images/programs/Map.jpg",
        description: ["Chosen from a selective and diverse pool of applicants from all over the world, SEO-Vietnam participants have successfully secured internships through our platform with 35 partner companies across 6 different industries"],
        statisticImage: "/assets/images/programs/Demographic-Graph.jpg"
      },
      components: {
        title: "Program Components",
        items: [
          {
            title: "Internship Placement",
            lines: ["Since 2009, our annual career program has connected hundreds of high-performing students with top-notch internships in Vietnam"],
            images: ["/assets/images/programs/Internship-Placement_1.jpg", "/assets/images/programs/Internship-Placement_2.jpg"]
          },
          {
            title: "Training Program",
            lines: ["On top of the internship, our students attend a rigorous training program designed to build up technical knowledge and soft skills critical to career success"],
            images: ["/assets/images/programs/Training-Program_1.jpg", "/assets/images/programs/Training-Program_2.jpg"]
          },
          {
            title: "Careers Talk",
            lines: ["SEO-V Career Program also includes bi-weekly on-site visits and networking events at partner companies to gain insights on the working environment in Vietnam"],
            images: ["/assets/images/programs/Speaker-Series_1.jpg", "/assets/images/programs/Speaker-Series_2.jpg"]
          },
          {
            title: "Community Projects",
            lines: ["SEO-V inspires a sense of social responsibility as all its participants complete a 8-week project with a local non-profit"],
            images: ["/assets/images/programs/Community-Service_1.jpg", "/assets/images/programs/Community_Service-2.jpg"]
          }
        ]
      },
      speech: {
        text: "It does not matter where you start, it matters how fast you grow.",
        owner: "Tony Ngo, Founder & President"
      }
    }
  },

  momentumProgram : {
    title : "SEO-Vietnam Programs",
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: true,
        items: [{title: "Career program", active: false, link: "/programs"}, {title: "Momentum Program", active: true, link: "/momentum-program"}]
      }, {
        title: "Apply",
        link: "/apply",
        active: false,
        items: []
      }, {
        title: "Be a partner",
        link: "/partners",
        active: false,
        items: []
      }, {
        title: "Past programs",
        link: "/past-programs",
        active: false,
        items: []
      }
    ],
    content: {
      title: "Join Us",
      image: "/assets/images/programs/momentum/Momentum.jpg",
      lines: ["Lorem ipsum dolor sit amet, et usu fabulas vocibus, assum fabellas sensibus est te. Et priimpedit rationibus, modo commune qualis-que usu ei, nam eu habeo expetenda. Lorem ipsum dolor sit amet, et usu fabulas vocibus, assum fabellas sensibus est te. Et priimpedit rationibus, modo commune qualis-que usu ei, nam eu habeo expetenda."],
      partner: {
        title: "Partner",
        image: "/assets/images/programs/momentum/Partner_SEO-V.png",
        link: "#"
      },
      projects: {
        title: "Projects",
        logos: [
          {
            image: "/assets/images/programs/momentum/Project_1_Healthcare.jpg",
            link: "#"
          },
          {
            image: "/assets/images/programs/momentum/Project_2_Environment.jpg",
            link: "#"
          },
          {
            image: "/assets/images/programs/momentum/Project_3_Education.jpg",
            link: "#"
          }
        ]
      }
    }
  },

  pastPrograms : {
    title : "SEO-Vietnam Programs",
    description: {
      title: "SEO-Vietnam career program gives students an opportunity to secure 8-to-10-week internships with 35 employers in Vietnam across 6 different industries: Finance, Technology, Media & Entertainment, Education, FMCG, and Non-profit",
      text: "On top of internship placement, rigorous training, insightful speaker series and meaningful social work, our students build up a strong professional network and create friendship that last so much longer than the 10-week summer or spring experience"
    },
    instruction: "Select a year, or just scroll",
    sideBar : [
      {
        title: "Program Overview",
        link: "/programs",
        active: false,
        items: [{title: "Career program", active: false, link: "/programs"}, {title: "Momentum Program", active: false, link: "/momentum-program"}]
      }, {
        title: "Apply",
        link: "/apply",
        active: false,
        items: []
      }, {
        title: "Be a partner",
        link: "/partners",
        active: false,
        items: []
      }, {
        title: "Past programs",
        link: "/past-programs",
        active: true,
        items: []
      }
    ],
    timeline: {
      title: "SEO-Vietnam through History",
      chart: [
        {
          year: 2009,
          interns: {count: 5, subfix: "Interns"},
          companies: {count: 2, subfix: "Companies"}
        },
        {
          year: 2010,
          interns: {count: 13, subfix: "Interns"},
          companies: {count: 7, subfix: "Companies"}
        },
        {
          year: 2011,
          interns: {count: 26, subfix: "Interns"},
          companies: {count: 13, subfix: "Companies"}
        },
        {
          year: 2012,
          interns: {count: 27, subfix: "Interns"},
          companies: {count: 18, subfix: "Companies"}
        },
        {
          year: 2013,
          interns: {count: 37, subfix: "Interns"},
          companies: {count: 18, subfix: "Companies"}
        },
        {
          year: 2014,
          interns: {count: 57, subfix: "Interns"},
          companies: {count: 28, subfix: "Companies"}
        },
        {
          year: 2015,
          interns: {count: 66, subfix: "Interns"},
          companies: {count: 33, subfix: "Companies"}
        }
      ]
    },
    histories: [
      {
        year: 2015,
        events: [
          {
            description: "In 2015, SEO-Vietnam hosted its first career program in Hanoi, connecting more and more candidates to opportunities based in the region",
            image: "/assets/images/programs/past/2015_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "2015 is also the first year SEO-Vietnam initiated a spring career program tailored for local students in both Hanoi and HCMC",
            image: "/assets/images/programs/past/2015_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2014,
        events: [
          {
            description: "In 2014, SEO-Vietnam hosts the first series of live Webinar where candidates could ask questions for panelists directly",
            image: "/assets/images/programs/past/2014.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "We registered the biggest summer class of interns as 57 students secure internships from our partner companies",
            image: "/assets/images/programs/past/2014_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2013,
        events: [
          {
            description: "The SEO-Vietnam success story carried on as the class size increased by 37% compared to the previous year",
            image: "/assets/images/programs/past/2013_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "In 2013, SEO-Vietnam altered its community service component to give students a choice of three local NPOs to work with over a period of 8 weeks",
            image: "/assets/images/programs/past/2013_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2012,
        events: [
          {
            description: "In summer 2012, SEO-Vietnam made an impressive achievement – doubling the number of applicants",
            image: "/assets/images/programs/past/2012_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "Out of 482 candidates, we successfully selected 27 students and matched them with 17 partner employers.",
            image: "/assets/images/programs/past/2012_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2011,
        events: [
          {
            description: "In summer 2011, SEO-Vietnam successfully expanded our program to include more partner employers ranging from financial services firms, technology start-ups to educational institutions",
            image: "/assets/images/programs/past/2011_1.jpg",
            type: 2,
            isFirst: true
          },
          {
            description: "We hosted the first off-line info session at various universities to promote our organization to more local students",
            image: "/assets/images/programs/past/2011_2.jpg",
            type: 2
          }
        ]
      },
      {
        year: 2010,
        events: [
          {
            description: "In 2010, IIV partnered with Sponsors for Educational Opportunity (SEO) to form SEO-Vietnam. In its first year, SEO-Vietnam successfully placed 13 students in 7 firms at several prestigious financial services, retail, and non-profit organizations in Vietnam. We hosted a total of 13 summer seminar series, 9 training sessions and workshops, with one opening dinner accompanied by the welcoming speech by the founders of SEO, and provided a mentoring program.",
            type: 1,
            isFirst: true
          }
        ]
      },
      {
        year: 2009,
        events: [
          {
            description: "In 2009, Tony Ngo founded 'Interns in Vietnam' (IIV). The initial summer program of 2009 provided opportunities to connect 5 interns from a diversity of backgrounds with Vietnamese leading financial firms (Horizon Capital and IDG Ventures Vietnam). The interns were placed in different divisions of IIV’s partner companies, receiving on-the-job training and mentorship from a firm supervisor. This ideology of giving the interns first hand experience during their internship enhanced IIV’s quality as an internship provider in Vietnam, and also a close model to professional internships in New York or London. In addition, an emphasis on the “giving back to society” spirit was also put forward. Every intern was required to work on a community project of their own, contributing through volunteerism and leadership.",
            type: 1,
            isFirst: true
          }
        ]
      }
    ]
  },

  aboutUs : {
    title: "Who We Are",
    sideBar : [
      {
        title: "Our story",
        link: "/about-us",
        active: "story",
        items: []
      }, {
        title: "Our vision, mission, and values",
        link: "/about-us-vmv",
        active: "vmv",
        items: []
      }, {
        title: "Our people",
        link: "/about-us-people",
        active: "people",
        items: []
      }
    ],
    chairman: {
      image: "/assets/images/about-us/chairman.jpg",
      text: "Tony Ngo, Founder and President"
    },
    stories: [
      "Since 2007 when he first met with management teams in Vietnam as an investor, Tony Ngo has observed the need and potential for talented young leaders to shape the trajectory of Vietnam's development. In 2009, Tony founded 'Interns in Vietnam' (IIV) to develop leaders who will not only succeed on an individual level, but will also make a difference by driving business, economic, and social changes in their communities.",
      'In 2009, Tony founded "Interns in Vietnam" (IIV).',
      "IIV is predicated on cultivating professional development and leadership skills, and IIV’s first initiative achieves this through a summer internship program that connects high-achieving students with opportunities in Vietnam. The initial program successfully placed five students at Horizon Capital and IDG Ventures Vietnam in the summer of 2009.",
      "In 2010, IIV partnered with Sponsors for Educational Opportunity (SEO), a U.S based non-profit organization that provides educational and career programs to young people from underserved communities, to form SEO-Vietnam.",
      "In its first year, SEO-Vietnam received over 180 applications and successfully placed 13 students in 7 firms at several prestigious financial services, retail, and non-profit organizations in Vietnam. The program also expanded to include rigorous training, mentorship and a Summer Seminar Series that featured executives and leaders in business, government and non-profit organizations."
    ],
    vision: "SEO-Vietnam is a non-profit organization founded in 2009 with a vision to create a powerful network of support and develop leadership capacity among professionals who will make a difference in Vietnam. We aspire to be a driving force that will propel young, bright-minded and ambitious Vietnamese forward for a successful future of Vietnam by giving them guidance and opportunities to grow. We aim to inspire them to cultivate intellect, character, integrity and a sense of social responsibility for the progressive and sustainable development of the nation.",
    mission: [
        "Connecting high-achieving students and young professionals with structured opportunities to intern and work for leading businesses and non-profit organizations in Vietnam.",
        "Producing outstanding young professionals through rigorous training, mentoring and speaker events.",
        "Inspiring a sense of social responsibility."
    ],
    values: [
      {
        title: "Excellence and continuous self-improvement",
        text: "We are devoted to training high-caliber candidates with ambitions, lifelong learning drive and great potentials. We encourage both individual initiative, ability and creativity and teamwork."
      },
      {
        title: "Leadership",
        text: "We promote a dedication to serving a greater good."
      },
      {
        title: "Integrity",
        text: "We uphold the principle of offering opportunity based on merit, and treat every participant, partner, sponsor equally in every action and decision."
      },
      {
        title: "Diversity and Inclusion",
        text: "We foster an environment that encourages multicultural perspectives and conversations at all levels within our organization."
      }
    ],
    directors: [
      {
        image: "/assets/images/about-us/Board_Heather.jpg",
        name: "Heather Nguyen",
        title: "Chairwoman",
        description: "Cinema Marketing Director at Galaxy Studio",
        link: "https://vn.linkedin.com/in/heathernguyen"
      },
      {
        image: "/assets/images/about-us/Board_Tony.jpg",
        name: "Tony Ngo",
        title: "Founder and President",
        description: "Chairman and Co-CEO at Everest Education",
        link: "https://vn.linkedin.com/in/ztngo"
      },
      {
        image: "/assets/images/about-us/Board_Don.jpg",
        name: "Don Le",
        title: "Board Member",
        description: "Co-CEO at Everest Education",
        link: "https://vn.linkedin.com/in/donle35"
      },
      {
        image: "/assets/images/about-us/Board_Kelly.jpg",
        name: "Kelly Wong",
        title: "Board Member",
        description: "Group CFO at Kido Group",
        link: "https://vn.linkedin.com/in/kyhwong"
      },
      {
        image: "/assets/images/about-us/Board_Dana.jpg",
        name: "Dana Doan",
        title: "Board Member",
        description: "Founder and Strategic Advisor to the LIN Center for Community Development",
        link: "https://vn.linkedin.com/in/danarhdoan"
      },
      {
        image: "http://placehold.it/300x300?text=Person",
        name: "Giang Nguyen",
        title: "Board Member",
        description: "Head of Investment Banking South at Saigon Securities Inc.",
        link: "https://vn.linkedin.com/in/nguyen-giang-3a590248"
      },
      {
        image: "/assets/images/about-us/Board_Erik.jpg",
        name: "Erik Jonsson",
        title: "Board Member",
        description: "Co-Founder and CEO at Topmot.vn",
        link: "https://vn.linkedin.com/in/jonssonej"
      },
      {
        image: "/assets/images/about-us/Board_Dung_Le.jpg",
        name: "Dung Le",
        title: "Board Member",
        description: "Group Managing Director and CRO at Techcombank",
        link: "https://www.linkedin.com/in/badung-le-3951602a"
      }
    ],
    members: [
      {
        image: "/assets/images/about-us/Exec_Nam-Nguyen-CEO.jpg",
        name: "Nam Nguyen",
        title: "Executive Director",
        description: "Senior Investment Analyst at VIG",
        link: "https://vn.linkedin.com/in/namnguyenvn"
      },
      {
        image: "/assets/images/about-us/Exec_Thao-Recruitment.jpg",
        name: "Thao Duong",
        title: "Recruitment Director",
        description: "Senior at UT Dallas",
        link: "https://vn.linkedin.com/in/thaoduong252"
      },
      {
        image: "/assets/images/about-us/Exec_Chi-Mai-Marketing-D.jpg",
        name: "Chi Mai",
        title: "Overseas Marketing Director",
        description: "Investment Banking Analyst at UBS ",
        link: "https://vn.linkedin.com/in/chiyenmai"
      },
      {
        image: "/assets/images/about-us/Exec_Anh-Tran-Marketing-D.jpg",
        name: "Anh Tran",
        title: "Local Marketing Director",
        description: "Graduate Trainee at Castrol BP",
        link: "https://vn.linkedin.com/in/duc-anh-tran-22915748"
      },
      {
        image: "/assets/images/about-us/Exec_Binh-Ng-Alum-Relations.jpg",
        name: "Binh Nguyen",
        title: "Alumni Relations Director",
        description: "Business Development Lead at Kiva Fellow",
        link: "https://vn.linkedin.com/in/binhqnguyen"
      },
      {
        image: "/assets/images/about-us/Exec_Julie-Hoang-Alum-Relations-D.jpg",
        name: "Julie Hoang",
        title: "Alumni Relations Director",
        description: "CRM & Digital Analytics Consultant at Havas",
        link: "https://vn.linkedin.com/in/thaohoang08"
      },
      {
        image: "/assets/images/about-us/Exec_Hieu-Nguyen-Hanoi-Ops.jpg",
        name: "Hieu Nguyen",
        title: "Hanoi Ops Director",
        description: "Classical Music Singer",
        link: "https://vn.linkedin.com/in/hieu-nguyen-6699251b"
      },
      {
        image: "/assets/images/about-us/Exec_Linh-Nguyen-Hanoi-Ops.jpg",
        name: "Linh Nguyen",
        title: "Hanoi Ops Director",
        description: "Finance Director - PAN Food JSC",
        link: "#"
      },
      {
        image: "/assets/images/about-us/Exec_Thu-Nguyen.jpg",
        name: "Thu Nguyen",
        title: "HCMC Ops Director",
        description: "Marketing & Business Development Analyst at Everest Education",
        link: "https://vn.linkedin.com/in/thu-nguyen-89071730"
      },
      {
        image: "/assets/images/about-us/Exec_Tim-Nguyen_External-Relations.jpg",
        name: "Anh Nguyen",
        title: "External Relations Director",
        description: "Business Analyst at BCG",
        link: 'https://vn.linkedin.com/in/anh-"tim"-le-nguyen-52268630'
      },
      {
        image: "http://placehold.it/300x300?text=Person",
        name: "Khanh Nguyen",
        title: "Momentum Program Director",
        description: "Co-Founder at GAP Institute",
        link: "https://vn.linkedin.com/in/giakhanh"
      }
    ]
  },

  donate: {
    title: "Deepen Our Impact",
    description1: "This year, we have the ambitious goal of empowering more young Vietnam’s professionals by providing them with great internships, trainings, and networking opportunities. As we are working hard to expand the program, we now need your help more than ever.",
    description2: "There are currently 3 ways to make donation to us:",
    description3: "Thank you for your generous support!",
    payment: [
      {
        name : "By Paypal",
        link: "#",
        type: 1
      },
      {
        name : "By Venmo (for those in the US/EU)",
        link: "https://venmo.com/SEO-Vietnam",
        type: 2
      },
      {
        name : "By Bank Transfer (for those in Vietnam)",
        lines: [
          "HSBC Vietnam, HCMC Branch.",
          "Name: Nguyen Nhu Nam",
          "Account number: 102-051216-041"
        ],
        type: 3
      }
    ],
    image: "http://placehold.it/1200x300?text=Image",
    video: "https://www.youtube.com/embed/KOO6MdLuUaU"
  }
};
