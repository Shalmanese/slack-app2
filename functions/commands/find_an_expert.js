const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
    if (text.match("help")){
      callback(null, {
        text: `This bot helps find women experts in various fields and various locations\n
Sample Usage:\n
/find_an_expert tech\n
/find_an_expert trade`,
        attachments: []
      });
    }

	var filteredArray = blob.filter(el=> {
        return (el["Areas of Expertise"] + " " + el["Location/Notes"]).toLowerCase().match(text.toLowerCase());
      });
      var response = "Found " + filteredArray.length + " experts on " + text + "\n";
      filteredArray.forEach(el => {
        response = response + el["Name"] + " | " + el["Email"] + "\n"
      });
      callback(null, { 
        text: response,
        attachments: []
      });


    // Only send a response to certain messages
    if (text.match(/hey|hello|hi|sup/i)) {
      var err = "";
      //var localBlob = getBlob();
      callback(null, {
        text: `GOT AN IM EVENT Hey there! <@${user}> said ${text}` + localBlob.length,
        attachments: [
          // You can customize your messages with attachments.
          // See https://api.slack.com/docs/message-attachments for more info.
        ]
      });
    } else {
      callback(null, {
        text: `OH BOY, THIS SHOULDNT HAPPEN` + ` Hey there! <@${user}> said ${text}`,
        attachments: [

      ]

      });
    }
	
	callback(null, {
    text: `Hello, <@${user}>...\nYou said: ${text}`,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};

var blob = [
  {
    "Name": "Ann Wang",
    "Title + Institution or Affiliations": "Photographer for Reuters",
    "Category": "Media",
    "Areas of Expertise": "Conflict on Myanmar China boarder, migration, environmental, public health in south east asia",
    "Email": "annwphoto@gmail.com",
    "Phone/Twitter/Website": "annwang077\nintegrate: annwang077\nwww.annwphoto.com",
    "Location/Notes": "Yangon, Myanmar (but am Taiwanese)",
    "Languages Spoken": ""
  },
  {
    "Name": "Helen McCabe",
    "Title + Institution or Affiliations": "Director, Health Programs, Yale-China Association, and Executive Director, The Five Project for International Autism and Disability Support",
    "Category": "Non-Profit",
    "Areas of Expertise": "Disability Policy and Practice in China",
    "Email": "helenwithhope2002@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New Haven, CT",
    "Languages Spoken": ""
  },
  {
    "Name": "Elanah Uretsky",
    "Title + Institution or Affiliations": "Visiting Assistant Professor, Anthropology; Health: Science, Society, and Policy; and The Heller School for Social Policy and Management, Brandeis University",
    "Category": "Academic",
    "Areas of Expertise": "Medical Anthropology, Chinese Anthropology, Gender and Sexuality",
    "Email": "euretsky@brandeis.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Waltham, MA",
    "Languages Spoken": ""
  },
  {
    "Name": "Jennifer Hsu",
    "Title + Institution or Affiliations": "Assistant Professor, University of Alberta",
    "Category": "academic",
    "Areas of Expertise": "China, NGOs, civil society, development, state-society relations",
    "Email": "jhsu@ualberta.ca",
    "Phone/Twitter/Website": "@jennifer_hsu",
    "Location/Notes": "Alberta, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Manya Koetse",
    "Title + Institution or Affiliations": "Founder & editor-in-chief of What's on Weibo, China social trend watcher",
    "Category": "Media",
    "Areas of Expertise": "Chinese social trends, Chinese media landscape, digital trends, internet culture & Weibo",
    "Email": "manya@whatsonweibo.com",
    "Phone/Twitter/Website": "@manyapan",
    "Location/Notes": "Amsterdam/Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Mary Gallagher",
    "Title + Institution or Affiliations": "Professor, Political Science, and Director of the Kenneth A. Lieberthal and Richard H. Rogel Center for Chinese Studies, University of Michigan",
    "Category": "Academic",
    "Areas of Expertise": "Labor Relations and Workers' Rights in China",
    "Email": "metg@umich.edu",
    "Phone/Twitter/Website": "https://twitter.com/marygao",
    "Location/Notes": "Ann Arbor, MI",
    "Languages Spoken": ""
  },
  {
    "Name": "Yuen Yuen Ang",
    "Title + Institution or Affiliations": "Associate Professor of Political Science, University of Michigan",
    "Category": "Academic",
    "Areas of Expertise": "China's Political Economy",
    "Email": "yuenang@umich.edu",
    "Phone/Twitter/Website": "https://twitter.com/yuenyuenang?lang=en https://sites.lsa.umich.edu/yy-ang/",
    "Location/Notes": "Ann Arbor, MI",
    "Languages Spoken": ""
  },
  {
    "Name": "Penelope Prime",
    "Title + Institution or Affiliations": "Director, China Research Center, Georgia State University",
    "Category": "",
    "Areas of Expertise": "China's economy",
    "Email": "pprime@gsu.edu",
    "Phone/Twitter/Website": "404-413-7285 http://robinson.gsu.edu/profile/penelope-b-prime/",
    "Location/Notes": "Atlanta, GA, USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Maria Repnikova",
    "Title + Institution or Affiliations": "Assistant Professor and Director of Global Center for Information Studies, Georgia State University, PIP Fellow V.",
    "Category": "Academic",
    "Areas of Expertise": "Chinese media politics, crisis governance, nation-building, China-Russia relations/comparisons",
    "Email": "mrepnikova@gsu.edu",
    "Phone/Twitter/Website": "http://www.mariarepnikova.com",
    "Location/Notes": "Atlanta, US",
    "Languages Spoken": ""
  },
  {
    "Name": "Amy King",
    "Title + Institution or Affiliations": "Australia National University",
    "Category": "Academic",
    "Areas of Expertise": "China-Japan, regional security, Chinese foreign policy",
    "Email": "amy.king@anu.edu.au",
    "Phone/Twitter/Website": "@amysarahking   www.amykingonline.com",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Evelyn Goh",
    "Title + Institution or Affiliations": "Australia National University",
    "Category": "Academic",
    "Areas of Expertise": "East Asian security & international relations",
    "Email": "evelyn.goh@anu.edu.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Jane Golley",
    "Title + Institution or Affiliations": "Associate Professor and Deputy Director, Australian Centre on China in the World, Australian National University",
    "Category": "Academic",
    "Areas of Expertise": "China's reform and development, demographic change and economic growth, inequality, One Belt One Road",
    "Email": "jane.golley@anu.edu.au",
    "Phone/Twitter/Website": "http://ciw.anu.edu.au/people/curriculum_vitae/jane_golley.php",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Joyce Nip",
    "Title + Institution or Affiliations": "University of Sydney",
    "Category": "Academic",
    "Areas of Expertise": "Media/journalism, internet and social media",
    "Email": "joyce.nip@sydney.edu.au",
    "Phone/Twitter/Website": "61 (2) 9351 2432",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Linda Jakobson",
    "Title + Institution or Affiliations": "CEO and Founding Director, China Matters",
    "Category": "Academic",
    "Areas of Expertise": "Chinese foreign policy, South China Sea, Taiwan",
    "Email": "linda.jakobson@chinamatters.org.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Louisa Lim",
    "Title + Institution or Affiliations": "University of Melbourne",
    "Category": "Author/academic",
    "Areas of Expertise": "China human rights. Author of The People's Republic of Amnesia: Tiananmen Revisited, Teaching journalism.",
    "Email": "limlc@umich.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Merriden Varrall",
    "Title + Institution or Affiliations": "Director, East Asia Program, Lowy Institute",
    "Category": "Think tank",
    "Areas of Expertise": "political science, diplomacy, Chinese foreign policy, Chinese students, power relations, social contract",
    "Email": "MVarrall@lowyinstitute.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Mikala Tai",
    "Title + Institution or Affiliations": "Director, 4A Centre for Contemporary Asian Art & Lecturer The University of Melbourne",
    "Category": "Academic / Curatorial",
    "Areas of Expertise": "Contemporary Asian Art - in particular China (PhD Focus), Hong Kong, Indonesia and Pakistan.",
    "Email": "mikala.tai@4a.com.au",
    "Phone/Twitter/Website": "www.4a.com.au",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Rebecca Fabrizi",
    "Title + Institution or Affiliations": "Australia National University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese foreign policy & global governance structures",
    "Email": "rebecca.fabrizi@anu.edu.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Sue Harris-Rimmer",
    "Title + Institution or Affiliations": "Australia National University",
    "Category": "Academic",
    "Areas of Expertise": "governance, gender in Asia",
    "Email": "susan.harris-rimmer@anu.edu.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Wendy Ng",
    "Title + Institution or Affiliations": "Lecturer (Assistant Professor), Melbourne Law School",
    "Category": "Academic",
    "Areas of Expertise": "Chinese anti-monopoly law (competition law, antitrust)",
    "Email": "",
    "Phone/Twitter/Website": "@wendyengee",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Lauren Johnston",
    "Title + Institution or Affiliations": "University of Melbourne",
    "Category": "Academic",
    "Areas of Expertise": "development and international economics, China/Africa",
    "Email": "lauren.johnston@unimelb.edu.au",
    "Phone/Twitter/Website": "61 3 8344 5032",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Sue Trevaskes",
    "Title + Institution or Affiliations": "Professor, ANU",
    "Category": "Academic",
    "Areas of Expertise": "criminal justice and policing",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Ling Li",
    "Title + Institution or Affiliations": "University of Vienna, Lecturer",
    "Category": "Academic",
    "Areas of Expertise": "Corruption in China, Chinese politics and law, Chinese Communist Party",
    "Email": "liling6234@gmail.com",
    "Phone/Twitter/Website": "https://univie.academia.edu/LingLi",
    "Location/Notes": "Austria",
    "Languages Spoken": ""
  },
  {
    "Name": "Tobie Meyer-Fong",
    "Title + Institution or Affiliations": "Professor, History, Johns Hopkins University",
    "Category": "Academic",
    "Areas of Expertise": "Social and Cultural History of Late Imperial China",
    "Email": "tmeyerf@jhu.edu",
    "Phone/Twitter/Website": "http://history.jhu.edu/directory/tobie-meyer-fong/",
    "Location/Notes": "Baltimore, MD",
    "Languages Spoken": ""
  },
  {
    "Name": "Sunny Yu",
    "Title + Institution or Affiliations": "Commercial Marketing Manager, South East Asia & Korea, IHG",
    "Category": "",
    "Areas of Expertise": "Marketing, hospitality, hotel properties, China/international commercial marketing",
    "Email": "sunnyrong.yu@ihg.com",
    "Phone/Twitter/Website": "66 2 620 8514",
    "Location/Notes": "Bangkok",
    "Languages Spoken": ""
  },
  {
    "Name": "Anne Stevenson-Yang",
    "Title + Institution or Affiliations": "Co-founder, J Capital Research",
    "Category": "Research",
    "Areas of Expertise": "China economy",
    "Email": "anne@jcapitalresearch.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Barbara Carletta Chen",
    "Title + Institution or Affiliations": "China Undergraduate Admissions Representative, University of Tulsa. Member: International Association of College Admissions Counselors",
    "Category": "Education",
    "Areas of Expertise": "Chinese (Mainland) Higher Education, Chinese Secondary Education, college admissions, educational transitions, educational migration",
    "Email": "bchen715@yahoo.com",
    "Phone/Twitter/Website": "White__rice (that's two underscores)",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Carma Elliot",
    "Title + Institution or Affiliations": "Director China, British Council / Minister (Culture and Education), British Embassy Beijing",
    "Category": "Education",
    "Areas of Expertise": "China general, UK-China relations, State-Society relations, Culture, Education",
    "Email": "Carma.Elliot@britishcouncil.org.cn",
    "Phone/Twitter/Website": "note: former diplomat",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Chenni Xu",
    "Title + Institution or Affiliations": "Account Director, Brunswick Group and Co-lead of Brunswick Beijing's Women's Network",
    "Category": "Consultant",
    "Areas of Expertise": "Gender inequality in China, feminist economics, China politics, women leadership, gender issues in rural China, domestic violence, how the female body is portrayed in art and literature",
    "Email": "cxu@brunswickgroup.com / chenni.xu@gmail.com",
    "Phone/Twitter/Website": "(86) 13810983905",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Christina Larson",
    "Title + Institution or Affiliations": "China Correspondent, Bloomberg Businessweek and Bloomberg News; previously writer at Science magazine and Foreign Policy",
    "Category": "Media",
    "Areas of Expertise": "China: science, technology, innovation, environment, culture",
    "Email": "christina.larson@gmail.com",
    "Phone/Twitter/Website": "@larsonchristina, www.christina-larson.com",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Cui Weiping 崔卫平",
    "Title + Institution or Affiliations": "Professor, Beijing Film Academy",
    "Category": "Academic/Media",
    "Areas of Expertise": "Chinese film, society, art, social issues",
    "Email": "",
    "Phone/Twitter/Website": "(86) 13167395670 https://en.wikipedia.org/wiki/Cui_Weiping @cuiweiping",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Elizabeth Knup",
    "Title + Institution or Affiliations": "Country Director, China, Ford Foundation",
    "Category": "NGO",
    "Areas of Expertise": "China general, civil society, philanthropy, US-China relations",
    "Email": "edknup@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Emily Feng",
    "Title + Institution or Affiliations": "Correspondent, Financial Times",
    "Category": "Media",
    "Areas of Expertise": "Chinese politics, US-China, industry, western China, technology",
    "Email": "emily.feng@ft.com",
    "Phone/Twitter/Website": "8613241163635 (mobile and Whatsapp)",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Enoch Li",
    "Title + Institution or Affiliations": "MD, Organizational Change & Play Consultant, BEARAPY / INSEAD",
    "Category": "Consultant",
    "Areas of Expertise": "mental health, entrepreneurs depression, executive well being, corporate culture, psychology of playfulness, stress management, women leadership",
    "Email": "enoch@bearapy.me / nochnoch@nochnoch.com",
    "Phone/Twitter/Website": "www.bearapy.me / NochNoch.com",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Erica Li",
    "Title + Institution or Affiliations": "Associate Professor of Finance at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "Corporate governance, capital structure, asset pricing, macroeconomics, debt",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/erica-xn-li",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Isolda Morillo",
    "Title + Institution or Affiliations": "China correspondent, Associated Press",
    "Category": "Media",
    "Areas of Expertise": "China news, human rights, literature, art, politics",
    "Email": "",
    "Phone/Twitter/Website": "https://twitter.com/MomoAdalois",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Jennifer Huang",
    "Title + Institution or Affiliations": "Professor of Finance at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "Liquidity and asset pricing, mutual funds, internal capital allocation, taxes, stock market crashes.",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/jennifer-huang",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Lam",
    "Title + Institution or Affiliations": "Co-founder, Kaiterra (formerly known as Origins), maker of Laser Egg",
    "Category": "Entrepreneur",
    "Areas of Expertise": "China pollution, environment",
    "Email": "info@originstech.com",
    "Phone/Twitter/Website": "(86) 400-863-0600  http://originstech.com/",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Joanna Chiu",
    "Title + Institution or Affiliations": "China and Mongolia Correspondent, AFP",
    "Category": "Media",
    "Areas of Expertise": "China general, politics, human rights, civil society, social and legal issues, women, LGBT, overseas Chinese, economy",
    "Email": "contact@joannachiu.com",
    "Phone/Twitter/Website": "www.joannachiu.com https://twitter.com/joannachiu",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Jocelyn Ford",
    "Title + Institution or Affiliations": "Documentary Filmmaker, Journalist, Educator",
    "Category": "Media",
    "Areas of Expertise": "Diversity and discrimination sensitivity training for PRC youth, Tibetan gender issues, Ethnic minorities, Global competency workshops for Chinese secondary students",
    "Email": "jocelynford@gmail.com",
    "Phone/Twitter/Website": "www.tibetaninbeijing.com",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Jordyn Dahl",
    "Title + Institution or Affiliations": "Journalist, Forbes; Editor, Carnegie-Tsinghua Center",
    "Category": "Media/Think Tank",
    "Areas of Expertise": "China technology, science, and innovation",
    "Email": "jordyndahl6@gmail.com",
    "Phone/Twitter/Website": "@jordyn_dahl",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Katherine Wilhelm",
    "Title + Institution or Affiliations": "program officer, Ford Foundation China office; former lawyer, former foreign correspondent",
    "Category": "civil society/law",
    "Areas of Expertise": "mainland China legal system, civil society, media",
    "Email": "kwlists@yahoo.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Kathinka Furst",
    "Title + Institution or Affiliations": "Consultant",
    "Category": "Research",
    "Areas of Expertise": "Environmental law, Civil society, rule of law",
    "Email": "kathinka.furst@gmail.com",
    "Phone/Twitter/Website": 861861061628,
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Laura Young",
    "Title + Institution or Affiliations": "Attorney, Wang and Wang, LLP",
    "Category": "Law",
    "Areas of Expertise": "Intellectual property, trademarks",
    "Email": "lyoung@wangandwang.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Liang Chao",
    "Title + Institution or Affiliations": "Assistant Professor of Operations Management at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "New product introduction, innovation, product rollover strategies, food safety, product recall, revenue and pricing management facing strategic consumers.",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/liang-chao",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Lijia Zhang",
    "Title + Institution or Affiliations": "Author, Socialism is Great! A Worker's Memoir",
    "Category": "Literature, society",
    "Areas of Expertise": "Politics, social issues, writing, labour",
    "Email": "Contact box: http://www.lijiazhang.com/?p=27eme4666725",
    "Phone/Twitter/Website": "http://www.lijiazhang.com/",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Lucy Hornby",
    "Title + Institution or Affiliations": "Correspondent, Financial Times",
    "Category": "Media",
    "Areas of Expertise": "China politics, economy, environment, general",
    "Email": "",
    "Phone/Twitter/Website": "https://twitter.com/HornbyLucy",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Marije Vlaskamp",
    "Title + Institution or Affiliations": "China correspondent, Dutch media",
    "Category": "Media",
    "Areas of Expertise": "general, contemporary history, social issues",
    "Email": "marijev@xs4all.nl",
    "Phone/Twitter/Website": "0086 13911735954 @marijevlaskamp",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Rosie Blau",
    "Title + Institution or Affiliations": "China correspondent, The Economist",
    "Category": "Media",
    "Areas of Expertise": "China general, civil society, etc",
    "Email": "",
    "Phone/Twitter/Website": "https://twitter.com/RosieBlau",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Burto",
    "Title + Institution or Affiliations": "Growth, Planet Labs",
    "Category": "civic exchange",
    "Areas of Expertise": "Tech, religion, language acquisition, application of 老干妈; Beijing 1998-99 & 2006-14",
    "Email": "burtosarah@gmail.com",
    "Phone/Twitter/Website": "https://twitter.com/burtosa",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Wang Xinling",
    "Title + Institution or Affiliations": "Research manager at China Policy",
    "Category": "Consultance",
    "Areas of Expertise": "Chinese financial markets and macroeconomy",
    "Email": "wxinling0@gmail.com",
    "Phone/Twitter/Website": "159 1075 1371",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Yanmei Xie",
    "Title + Institution or Affiliations": "China policy analyst, Gavekal Dragonomics",
    "Category": "Research",
    "Areas of Expertise": "Economic policy",
    "Email": "yxie@gavekal.com",
    "Phone/Twitter/Website": "(8610) 84549987 ext 123",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Yuan Ying",
    "Title + Institution or Affiliations": "Greenpeace East Asia",
    "Category": "NGO",
    "Areas of Expertise": "Renewable Energy",
    "Email": "yuan.ying@greenpeace.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Zhang Xiaomeng",
    "Title + Institution or Affiliations": "Associate Professor of Organizational Behavior, Associate Dean for Executive Education at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "Innovation, leadership, motivation, creativity, interactional relationships, leader behavior, empowerment, corporate governance.",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/zhang-xiaomeng",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Huang Wei",
    "Title + Institution or Affiliations": "Greenpeace East Asia",
    "Category": "NGO",
    "Areas of Expertise": "air pollution, coal, China overseas energy investments",
    "Email": "huang.wei@greenpeace.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Jazreel Goh",
    "Title + Institution or Affiliations": "Regional Business Development Manager British Council (East Asia), leads the British Council’s East Asia Consulting Team",
    "Category": "Education",
    "Areas of Expertise": "Education, UK-China education links",
    "Email": "Jazreel.Goh@britishcouncil.org.cn",
    "Phone/Twitter/Website": "note:  socio-economics and marketing expert.",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Li Yan",
    "Title + Institution or Affiliations": "China Deputy Program Director, Greenpeace",
    "Category": "NGO/Research",
    "Areas of Expertise": "Climate, Energy",
    "Email": "yan.li@greenpeace.org,",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Megha Rajagopalan",
    "Title + Institution or Affiliations": "China bureau chief and Asia correspondent, BuzzFeed News",
    "Category": "Media",
    "Areas of Expertise": "State surveillance, censorship, human rights, Chinese foreign policy, China-North Korea relations, Chinese media",
    "Email": "megha.rajagopalan@buzzfeed.com",
    "Phone/Twitter/Website": "WhatsApp: +86 13801028244 Twitter: @meghara",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Qian Liu(Louise), Phd.,",
    "Title + Institution or Affiliations": "Managing Director, Greater China, The Economist Group",
    "Category": "Media, Consultancy",
    "Areas of Expertise": "Gender economics, Labour economics",
    "Email": "qianliu@economist.com",
    "Phone/Twitter/Website": "@Louise刘倩",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Roberta Lipson",
    "Title + Institution or Affiliations": "CEO, United Family Healthcare and Chindex International",
    "Category": "Healthcare, Hospitals",
    "Areas of Expertise": "health, medicine, demographics, ageing",
    "Email": "Roberta.lipson@ufh.com.cn",
    "Phone/Twitter/Website": "(86)13901367354 Assistant Mellisa Yin 13911868401, www.ufh.com.cn",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Snow Hua",
    "Title + Institution or Affiliations": "Partner/CEO, Cherubic Ventures",
    "Category": "Business/Investing",
    "Areas of Expertise": "Asia technology and investments",
    "Email": "info@cherubicvc.com",
    "Phone/Twitter/Website": "www.cherubicvc.com",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Wang Jing",
    "Title + Institution or Affiliations": "Food and Agriculture Campaigner, Greenpeace East Asia",
    "Category": "NGO",
    "Areas of Expertise": "Food and agriculture, China's meat industry",
    "Email": "jing.wang@greenpeace.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Xiong Jing",
    "Title + Institution or Affiliations": "Director, Women's Media Monitor Network and Editor, Feminist Voices",
    "Category": "NGO",
    "Areas of Expertise": "China women's rights, society",
    "Email": "",
    "Phone/Twitter/Website": "(86)18211094984",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Yuan Yang",
    "Title + Institution or Affiliations": "Beijing correspondent, Financial Times",
    "Category": "Media",
    "Areas of Expertise": "Chinese internet, esp. censorship, infosec and internet architecture; Economics, esp. feminist economics;",
    "Email": "yuan.yang@ft.com",
    "Phone/Twitter/Website": "@yuanfenyang http://yuanfenyang.wordpress.com",
    "Location/Notes": "Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Even Rogers Pay",
    "Title + Institution or Affiliations": "Agriculture & agtech analyst. Based at China Policy -- policy research and strategic advisory firm",
    "Category": "business / investment research",
    "Areas of Expertise": "Agriculture policy and regulatory change, agricultural technology, climate change, food water energy nexus, high tech agriculture (drones, sensors, IoT, cloud computing), precision agriculture, GMO policy, seed research, environmental regulatory in agriculture, belt and road agriculture policy, agribusiness M&A",
    "Email": "even.pay@gmail.com",
    "Phone/Twitter/Website": "@even_pay",
    "Location/Notes": "Beijing, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Rosie Levine",
    "Title + Institution or Affiliations": "Program Director, Beijing Cultural Heritage Protection Center (CHP); Yenching Scholar (2016-2018), Yenching Academy at Peking University",
    "Category": "NGO, research,",
    "Areas of Expertise": "Cultural Heritage Preservation in China, Beijing cultural heritage, architecture, Modern Chinese history",
    "Email": "rosie@bjchp.org",
    "Phone/Twitter/Website": 13521217130,
    "Location/Notes": "Beijing, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Alison M. Friedman",
    "Title + Institution or Affiliations": "Ping Pong Productions 乒乓策划",
    "Category": "founder/director",
    "Areas of Expertise": "China and international performing arts exchange, dance, theater - West Kowloon Cultural District Authority's Artistic Director",
    "Email": "alison@pingpongarts.org",
    "Phone/Twitter/Website": "www.pingpongarts.org / @pingpongarts",
    "Location/Notes": "Beijing, China / Washington DC, USA NOTE: Not sure about current role",
    "Languages Spoken": ""
  },
  {
    "Name": "Jerusha McCormack",
    "Title + Institution or Affiliations": "Visiting Professor, School of English and International Studies, Beijing Foreign Studies; also Visiting Academic, Centre for Asian Studies, Trinity College Dublin, Ireland.\nUniversity, China",
    "Category": "Academic/freelance writer",
    "Areas of Expertise": "Comparative civilizational studies (China & the West) over 3000 years: sourcebook, \nComparing Civilizations: China and the West (with John Blair, 4th edition in press)",
    "Email": "mjerusha@gmail.com",
    "Phone/Twitter/Website": "comparativeculturestudies.org",
    "Location/Notes": "Beijing, China and Dublin, Ireland",
    "Languages Spoken": ""
  },
  {
    "Name": "Elizabeth (Liz) Haenle",
    "Title + Institution or Affiliations": "CEO SAGE Worldwide-consulting and speaker's bureau",
    "Category": "Event consulting, politics",
    "Areas of Expertise": "events consulting, US-China relations, entrepreneurship, running a business in China, women in leadership",
    "Email": "liz@sageworldwide.com",
    "Phone/Twitter/Website": "www.sageworldwide.com @sagethinking",
    "Location/Notes": "Beijing/ New York/ D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Jennytha Raj",
    "Title + Institution or Affiliations": "Companies: Mering Global (CEO), Drinking Buddies 啤友汇",
    "Category": "Industry",
    "Areas of Expertise": "Craft beer, global manufacturing and sourcing",
    "Email": "jennytha@meringglobal.com / jennytha@drinkingbuddies.cn",
    "Phone/Twitter/Website": "@jennytha",
    "Location/Notes": "Bejing, HK, London",
    "Languages Spoken": ""
  },
  {
    "Name": "Rachel Stern",
    "Title + Institution or Affiliations": "Assistant Prof of Law and Political Science, U.C. Berkeley",
    "Category": "Academic",
    "Areas of Expertise": "Chinese law and politics. Esp. environmental politics and law, the legal profession, Chinese courts",
    "Email": "rstern@law.berkeley.edu",
    "Phone/Twitter/Website": "510-642-2008 (office). @racstern",
    "Location/Notes": "Berkeley, CA",
    "Languages Spoken": ""
  },
  {
    "Name": "Catherin Ruth (Katja) Levy",
    "Title + Institution or Affiliations": "Assistant Professor, Freie-Universitat Berlin",
    "Category": "Academic",
    "Areas of Expertise": "Politics, law, civil society, German-China relations, Latin America-China relations",
    "Email": "katja.levy@fu-berlin",
    "Phone/Twitter/Website": "http://www.geschkult.fu-berlin.de/e/oas/sinologie/institut/mitarbeiter/1_professoren/Levy.html",
    "Location/Notes": "Berlin",
    "Languages Spoken": ""
  },
  {
    "Name": "Didi Kirsten Tatlow",
    "Title + Institution or Affiliations": "China journalist. Fellow, MERICS",
    "Category": "Media",
    "Areas of Expertise": "China general",
    "Email": "",
    "Phone/Twitter/Website": "https://twitter.com/dktatlow",
    "Location/Notes": "Berlin",
    "Languages Spoken": ""
  },
  {
    "Name": "Samantha Hoffman, PhD",
    "Title + Institution or Affiliations": "Visiting Academic Fellow at the Mercator Institute for China Studies (MERICS) and a Research Consultant at the International Institute for Strategic Studies (IISS)",
    "Category": "Research",
    "Areas of Expertise": "Chinese politics, focus on social management, state security, internal security and stability mechanisms",
    "Email": "contact@samanthahoffman.net",
    "Phone/Twitter/Website": "@he_shumei; https://www.merics.org/en/team/samantha-hoffman  and  https://www.iiss.org/en/persons/samantha-s-hoffman",
    "Location/Notes": "Berlin",
    "Languages Spoken": ""
  },
  {
    "Name": "Katrin Kinzelbach",
    "Title + Institution or Affiliations": "Associate director, GPPi, Global Public Policy Institute",
    "Category": "Academic/ Think tank",
    "Areas of Expertise": "human rights, diplomacy, China in international organizations",
    "Email": "kkinzelbach@gppi.net",
    "Phone/Twitter/Website": "http://www.gppi.net/team/katrin-kinzelbach/",
    "Location/Notes": "Berlin",
    "Languages Spoken": ""
  },
  {
    "Name": "Yinan He",
    "Title + Institution or Affiliations": "Associate Professor, Department of International Relations, Lehigh University",
    "Category": "Academic",
    "Areas of Expertise": "East Asian politics and security",
    "Email": "yinhew@gmail.com",
    "Phone/Twitter/Website": "https://twitter.com/yinhew1?lang=en",
    "Location/Notes": "Bethlehem, PA",
    "Languages Spoken": ""
  },
  {
    "Name": "Sara Friedman",
    "Title + Institution or Affiliations": "Associate Professor of Anthropology and Gender Studies, Indiana University",
    "Category": "Academic",
    "Areas of Expertise": "Gender and Sexuality in Contemporary China and Taiwan",
    "Email": "slfriedm@indiana.edu",
    "Phone/Twitter/Website": "https://genderstudies.indiana.edu/about/faculty/friedman-sara.html",
    "Location/Notes": "Bloomington, IN",
    "Languages Spoken": ""
  },
  {
    "Name": "Nele Fabian",
    "Title + Institution or Affiliations": "PhD Candidate in Chinese History",
    "Category": "Academic",
    "Areas of Expertise": "Chinese (P.R. and Hong Kong) modern environmental history (esp. history of waste management), history of urban administration, urban social history",
    "Email": "nele.fabian@ruhr-uni-bochum.de",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Bochum, Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Min Ye",
    "Title + Institution or Affiliations": "Assistant Professor, Academic Director of Asian Studies, The Frederick S. Pardee School of Global Studies, Boston University",
    "Category": "Academic",
    "Areas of Expertise": "Foreign Direct Investment, China's Regional Policies",
    "Email": "ye@bu.edu",
    "Phone/Twitter/Website": "https://www.bu.edu/pardeeschool/profile/min-ye/",
    "Location/Notes": "Boston, MA",
    "Languages Spoken": ""
  },
  {
    "Name": "Suzanne Scoggins",
    "Title + Institution or Affiliations": "Assistant Professor, Clark University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics: policing, frontline police, stability maintenance, internal security, and state society relations",
    "Email": "sscoggins@clarku.edu",
    "Phone/Twitter/Website": "(+1) 415-606-0903",
    "Location/Notes": "Boston, MA",
    "Languages Spoken": ""
  },
  {
    "Name": "Theresa Fallon",
    "Title + Institution or Affiliations": "Director, Centre for Russia, Europe, Asia Studies (CREAS)",
    "Category": "think tank",
    "Areas of Expertise": "EU-Asia, maritime security, energy, Belt & Road Initiative (BRI)",
    "Email": "theresa.fallon@creasbrussels.org",
    "Phone/Twitter/Website": "@TheresaAFallon",
    "Location/Notes": "Brussels",
    "Languages Spoken": ""
  },
  {
    "Name": "Vanessa FRANGVILLE",
    "Title + Institution or Affiliations": "Lecture in China Studies, Université libre de Bruxelles, Belgium",
    "Category": "Academic",
    "Areas of Expertise": "Ethnic minority policies; Chinese cinema; ethnic minority films",
    "Email": "vanessafrangville@gmail.com",
    "Phone/Twitter/Website": "http://msh.ulb.ac.be/equipes/east/?sub=membres-east",
    "Location/Notes": "Brussels, Belgium",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristin Stapleton",
    "Title + Institution or Affiliations": "Associate Professor, History, University at Buffalo",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Urban Studies",
    "Email": "kstaple@buffalo.edu",
    "Phone/Twitter/Website": "http://history.buffalo.edu/faculty/stapleton/",
    "Location/Notes": "Buffalo, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Dorothy J. Solinger",
    "Title + Institution or Affiliations": "Professor, Political Science, Univ. of Cal. Irvine",
    "Category": "Academic",
    "Areas of Expertise": "China politics",
    "Email": "dorjsoli@uci.edu",
    "Phone/Twitter/Website": "949-854-2872",
    "Location/Notes": "California",
    "Languages Spoken": ""
  },
  {
    "Name": "Ann Bierbower",
    "Title + Institution or Affiliations": "Director of Operations, China Skinny",
    "Category": "Research/Marketing",
    "Areas of Expertise": "Chinese consumers, imported products, Chinese travel, Chinese internet useage",
    "Email": "ann@chinaskinny.com",
    "Phone/Twitter/Website": "www.chinaskinny.com\n@thechinaskinny",
    "Location/Notes": "California/Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Eleanor Freund",
    "Title + Institution or Affiliations": "Research Assistant, Harvard Kennedy School's Belfer Center for Science and International Affairs",
    "Category": "Academic think tank",
    "Areas of Expertise": "US-China relations, Asia-Pacific security issues, US foreign policy",
    "Email": "eleanor_freund@hks.harvard.edu",
    "Phone/Twitter/Website": "@eleanor_freund",
    "Location/Notes": "Cambridge, MA",
    "Languages Spoken": ""
  },
  {
    "Name": "Lynette Ong",
    "Title + Institution or Affiliations": "Professor, Pol Sci, University of Toronto",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics. Social movement. Development. Authoritarian Politics.",
    "Email": "Lynette.Ong@utoronto.ca",
    "Phone/Twitter/Website": "lynetteong.com",
    "Location/Notes": "Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Aynne Kokas",
    "Title + Institution or Affiliations": "Assistant Professor, Media Studies, University of Virginia",
    "Category": "Academic",
    "Areas of Expertise": "China's Foregin Relations",
    "Email": "ak3ff@virginia.edu",
    "Phone/Twitter/Website": "https://twitter.com/shotinshanghai?lang=en",
    "Location/Notes": "Charlottesville, VA",
    "Languages Spoken": ""
  },
  {
    "Name": "Johanna Ransmeier",
    "Title + Institution or Affiliations": "Professor of Chinese history at the University of Chicago",
    "Category": "Academic",
    "Areas of Expertise": "Her book, Sold People: Traffickers and Family Life in North China, is a meticulously researched history of human trafficking in the late Qing and early Republican periods.",
    "Email": "",
    "Phone/Twitter/Website": "https://history.uchicago.edu/directory/johanna-ransmeier",
    "Location/Notes": "Chicago",
    "Languages Spoken": ""
  },
  {
    "Name": "Linlin Wu",
    "Title + Institution or Affiliations": "PR, WHO World Health Organization",
    "Category": "",
    "Areas of Expertise": "",
    "Email": "wul@who.int",
    "Phone/Twitter/Website": "86 10 6532 7191",
    "Location/Notes": "China",
    "Languages Spoken": ""
  },
  {
    "Name": "Regina Hui",
    "Title + Institution or Affiliations": "VP, communications, McDonald's China",
    "Category": "PR, restaurant",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "(86) 138 1109 0306",
    "Location/Notes": "China",
    "Languages Spoken": ""
  },
  {
    "Name": "Katherine Alexander",
    "Title + Institution or Affiliations": "University of Colorado, Boulder",
    "Category": "academic",
    "Areas of Expertise": "Ming-Qing China, Chinese literature, Chinese popular religion, Taiwan history and culture",
    "Email": "katherine.alexander@colorado.edu",
    "Phone/Twitter/Website": "@thian_un",
    "Location/Notes": "Colorado",
    "Languages Spoken": ""
  },
  {
    "Name": "Sheena Greitens",
    "Title + Institution or Affiliations": "Assistant Professor, Political Science, University of Missouri and Non-Resident",
    "Category": "Academic",
    "Areas of Expertise": "East Asian politics and security, Chinese foreign and security policy",
    "Email": "sheena.greitens@gmail.com",
    "Phone/Twitter/Website": "https://twitter.com/sheenagreitens?lang=en",
    "Location/Notes": "Columbia, MO",
    "Languages Spoken": ""
  },
  {
    "Name": "Dorothy Dwoskin",
    "Title + Institution or Affiliations": "former USTR trade negotiator and former Microsoft executive",
    "Category": "Trade, govt, tech",
    "Areas of Expertise": "",
    "Email": "dorothy.dwoskin@outlook.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Elsa Kania",
    "Title + Institution or Affiliations": "adjunct fellow at the Center for a New American Security",
    "Category": "Research",
    "Areas of Expertise": "Chinese defense innovation in emerging technologies",
    "Email": "cstevens@cnas.org",
    "Phone/Twitter/Website": "https://www.cnas.org/people/elsa-b-kania",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Emily Weinstein",
    "Title + Institution or Affiliations": "Research Analyst at Pointe Bello, M.A. Candidate at Georgetown University",
    "Category": "Consulting, Academic",
    "Areas of Expertise": "U.S.-China Relations, Sino-North Korean Relations, Chinese political warfare, Chinese government and politics, security policy",
    "Email": "esw54@georgetown.edu",
    "Phone/Twitter/Website": "@emily_sw1",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Kate O'Keeffe",
    "Title + Institution or Affiliations": "Journalist, Wall Street Journal",
    "Category": "Media",
    "Areas of Expertise": "China, corruption, business, US",
    "Email": "kathryn.okeeffe@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Lotta Danielsson",
    "Title + Institution or Affiliations": "Vice President, US-Taiwan Business Council",
    "Category": "Industry",
    "Areas of Expertise": "Taiwan, technology, cybersecurity, trade, supply chain, defense & security",
    "Email": "lottadm@us-taiwan.org",
    "Phone/Twitter/Website": "(703) 465-2930 @ustaiwan\n@taiwandefense",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Orit Frenkel",
    "Title + Institution or Affiliations": "former USTR trade official and former GE executive",
    "Category": "Trade, govt, tech",
    "Areas of Expertise": "",
    "Email": "orit@frenkelstrategies.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Rachael Burton",
    "Title + Institution or Affiliations": "Deputy Director, The Project 2049 Institute",
    "Category": "Think tank",
    "Areas of Expertise": "Taiwan, China, Chinese political warfare, PLA, cross-Strait, US-China relations, US-Japan relations, Burma",
    "Email": "burton@project2049.net",
    "Phone/Twitter/Website": "@RBurton_",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Sabrina Tsai",
    "Title + Institution or Affiliations": "Research Associate, Congressional-Executive Commission on China",
    "Category": "Government",
    "Areas of Expertise": "US-China relations; Hong Kong; Chinese civil society, governance and rule of law; US-Taiwan and cross-Strait relations; Chinese foreign policy; regional security in Asia",
    "Email": "Sabrina.tsai@mail.house.gov",
    "Phone/Twitter/Website": "@sbtsai",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Cook",
    "Title + Institution or Affiliations": "Senior Research Analyst, Freedom House",
    "Category": "NGO",
    "Areas of Expertise": "Press freedom, internet freedom, religious freedom, human rights, China Media Bulletin",
    "Email": "cook@freedomhouse.org",
    "Phone/Twitter/Website": "@Sarah_G_Cook https://freedomhouse.org/expert/sarah-cook",
    "Location/Notes": "DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Mei Fong",
    "Title + Institution or Affiliations": "Author of \"One Child,\" former WSJ",
    "Category": "Media",
    "Areas of Expertise": "China's population control policies and their impacts in China and globally",
    "Email": "",
    "Phone/Twitter/Website": "@meifongwriter",
    "Location/Notes": "DC area",
    "Languages Spoken": ""
  },
  {
    "Name": "Lauren Dickey",
    "Title + Institution or Affiliations": "King's College London/National University of Singapore",
    "Category": "Academic",
    "Areas of Expertise": "Chinese defense/security policy; cross-Strait issues; Taiwan",
    "Email": "lauren.dickey@kcl.ac.uk",
    "Phone/Twitter/Website": "@lfdickey",
    "Location/Notes": "DC/Taipei/London",
    "Languages Spoken": ""
  },
  {
    "Name": "Geeta Kochhar",
    "Title + Institution or Affiliations": "Assistant Professor, Jawaharlal Nehru University",
    "Category": "Academic",
    "Areas of Expertise": "China studies, urbanization, international relations",
    "Email": "jidujnu@gmail.com",
    "Phone/Twitter/Website": "https://sites.google.com/a/jnu.ac.in/geetakochhar/",
    "Location/Notes": "Delhi, India",
    "Languages Spoken": ""
  },
  {
    "Name": "Isabella Jackson",
    "Title + Institution or Affiliations": "Assistant Professor in Chinese History, Trinity College Dublin",
    "Category": "Academic",
    "Areas of Expertise": "Late Qing and Republican China; foreign colonialism in China; youth and slavery in modern Chinese History",
    "Email": "isabella.jackson@tcd.ie",
    "Phone/Twitter/Website": "00353 1896 3166",
    "Location/Notes": "Dublin, Ireland",
    "Languages Spoken": ""
  },
  {
    "Name": "Heidi Ningkang Wang-Kaeding",
    "Title + Institution or Affiliations": "Assistant Professor, Trinity College Dublin",
    "Category": "Academic",
    "Areas of Expertise": "environmental foreign relations in PRC; interest groups in Chinese foreign policy; International Relations",
    "Email": "heidi.nk.wang@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Dublin, Ireland",
    "Languages Spoken": ""
  },
  {
    "Name": "Sophia Woodman",
    "Title + Institution or Affiliations": "Chancellor's Fellow, University of Edinburgh, School of Social and Political Science,",
    "Category": "Academic",
    "Areas of Expertise": "Citizenship, human rights and social movements; contemporary China; law and society; regional autonomy frameworks; migration",
    "Email": "Sophia.Woodman@ed.ac.uk",
    "Phone/Twitter/Website": "http://www.sps.ed.ac.uk/staff/sociology/sophia_woodman",
    "Location/Notes": "Edinburgh",
    "Languages Spoken": ""
  },
  {
    "Name": "Ka Zeng",
    "Title + Institution or Affiliations": "Professor & Director of Asian Studies, Political Science, University of Arkansas",
    "Category": "Academic",
    "Areas of Expertise": "International Political Economy",
    "Email": "ka.zeng@gmail.com",
    "Phone/Twitter/Website": "https://fulbright.uark.edu/departments/political-science/directory/index/uid/kzeng/name/Ka+Zeng/",
    "Location/Notes": "Fayetteville, AR",
    "Languages Spoken": ""
  },
  {
    "Name": "Dusica Ristivojevic",
    "Title + Institution or Affiliations": "Lecturer and researcher, University of Helsinki",
    "Category": "Academic/ Think thank/ Non- profit",
    "Areas of Expertise": "Social organizing in China and its regional and global connections, China's foreign affairs, feminism, democratization, the protection of the protectors of human rights",
    "Email": "dusica.dusica@gmail.com",
    "Phone/Twitter/Website": "@du0305",
    "Location/Notes": "Finland, Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Amanda Shuman",
    "Title + Institution or Affiliations": "University of Freiburg",
    "Category": "Academic",
    "Areas of Expertise": "PRC history, sports and running in China, digital humanities, China-Africa relations under Mao",
    "Email": "amanda.shuman@sinologie.uni-freiburg.de",
    "Phone/Twitter/Website": "@AmandaUCSC www.amandashuman.net",
    "Location/Notes": "Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristin Shi-Kupfer",
    "Title + Institution or Affiliations": "Director of Research Area on Public Policy and Society, MERICS",
    "Category": "Think Tank",
    "Areas of Expertise": "media policy, civil society, religious policy and ideology in China",
    "Email": "kristin.shi-kupfer(at)merics.de",
    "Phone/Twitter/Website": "(49) 30 3440 999-0",
    "Location/Notes": "Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Mirjam Meissner",
    "Title + Institution or Affiliations": "Head of Programme, Economy and Tecnology, MERICS",
    "Category": "Think Tank",
    "Areas of Expertise": "Industrial innovation policy, infrastructure policy, renewable energy policy",
    "Email": "mirjam.meissner(at)merics.de",
    "Phone/Twitter/Website": "(49) 30 3440 999-0",
    "Location/Notes": "Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Kathrin Neunteufel-Steyer",
    "Title + Institution or Affiliations": "VISPIRON Systems GmbH, Head of China Desk / MSc Asian Politics, Dipl. Wirtschaftssinologin",
    "Category": "Industry",
    "Areas of Expertise": "Chinese economy, China's industry politics, Chinese investments in Europe, Chinese working culture, China's political role in East Asia, Chinese law, Chinese automotive industry",
    "Email": "kathrin.neunteufel@gmx.net",
    "Phone/Twitter/Website": "49(0)151/11349075",
    "Location/Notes": "Germany, Munich",
    "Languages Spoken": ""
  },
  {
    "Name": "Caterina Bellinetti",
    "Title + Institution or Affiliations": "PhD Student, University of Glasgow",
    "Category": "research",
    "Areas of Expertise": "Second Sino-Japanese war, Chinese photography, Propaganda, Maoism, Chinese female iconography",
    "Email": "m.bellinetti.1@research.gla.ac.uk",
    "Phone/Twitter/Website": "@ducky_cat",
    "Location/Notes": "Glasgow",
    "Languages Spoken": ""
  },
  {
    "Name": "Hongling Liang",
    "Title + Institution or Affiliations": "Lecturer in Chinese studies, University of Glasgow,",
    "Category": "Academic",
    "Areas of Expertise": "Chinese studies, Europe and China, France-China education links, Transnational Education, transcultural studies, Translation.",
    "Email": "Hongling.liang@glasgow.ac.uk",
    "Phone/Twitter/Website": "@liang_hongling",
    "Location/Notes": "Glasgow, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Katherine Kaup",
    "Title + Institution or Affiliations": "Professor, Departments of Asian Studies and Political Science, Furman University",
    "Category": "Academic",
    "Areas of Expertise": "Ethinc Minority Policy",
    "Email": "Kate.Kaup@furman.edu",
    "Phone/Twitter/Website": "http://www2.furman.edu/academics/asianstudies/meet-our-faculty/Pages/Katherine-Palmer-Kaup.aspx",
    "Location/Notes": "Greenville, SC",
    "Languages Spoken": ""
  },
  {
    "Name": "Cora Francisca Jungbluth",
    "Title + Institution or Affiliations": "Project Manager in “Shaping Sustainable Economies” program at Bertelsmann Stiftung",
    "Category": "Academic",
    "Areas of Expertise": "Business and Cultural Studies, (Chinese Studies).",
    "Email": "cora.jungbluth@bertelsmann-stiftung.de",
    "Phone/Twitter/Website": "https://www.bertelsmann-stiftung.de/en/about-us/who-we-are/contact/profile/cid/cora-francisca-jungbluth/",
    "Location/Notes": "Gütersloh, Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Insa Ewert",
    "Title + Institution or Affiliations": "Research Fellow/ GIGA German Insitute of Global and Area Studies",
    "Category": "Think Tank, academic",
    "Areas of Expertise": "EU-China relations, trade and investment, Sino-German relations, EU politics",
    "Email": "insa.ewert@giga-hamburg.de; insaewert@online.de",
    "Phone/Twitter/Website": "@insa_e, www.insaewert.eu",
    "Location/Notes": "Hamburg, Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Thuraya Talib",
    "Title + Institution or Affiliations": "Marketing & F&B Consultant/Founder of Lionne Inc.",
    "Category": "",
    "Areas of Expertise": "Marketing Consultancy. F&B Marketing, F&B Consultancy, Restaurant Consultancy",
    "Email": "WeChat/Instagram/Skype: thurayatalib",
    "Phone/Twitter/Website": "86  13018900921",
    "Location/Notes": "Hangzhou Note: Note: I am Currently filming an Arabic TV show (the first) about life in China. \nAnd open for any collaboration for main business or for the show.",
    "Languages Spoken": ""
  },
  {
    "Name": "Sophia Yan",
    "Title + Institution or Affiliations": "Freelance Correspondent; Social Science Research Council Abe Fellow",
    "Category": "Media",
    "Areas of Expertise": "China current affairs/news, business, politics, domestic & foreign policy, finance, technology, innovation, entrepreneurship. US-China relations, Taiwan, Hong Kong, Asia current affairs/news, impact of gender rights/issues on economy; Asian American issues",
    "Email": "sophia@sophia-yan.com",
    "Phone/Twitter/Website": "twitter @sophia_yan",
    "Location/Notes": "Hawaii",
    "Languages Spoken": ""
  },
  {
    "Name": "Marina Rudyak",
    "Title + Institution or Affiliations": "Lecturer, PhD Candidate, Institute of Chinese Studies, Heidelbergberg University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese foreign aid; Chinese foreign economic policy, esp. in Belt and Road; China-Central Asia relations; China-Africa; Esotheric/Coded communication in Chinese politics",
    "Email": "marina.rudyak@zo.uni-heidelberg.de",
    "Phone/Twitter/Website": "http://www.zo.uni-heidelberg.de/sinologie/institute/staff/rudyak/ ; china-aid-blog.com ; +49-(0)6221 54 7635",
    "Location/Notes": "Heidelberg, Germany",
    "Languages Spoken": ""
  },
  {
    "Name": "Amanda Whitfort",
    "Title + Institution or Affiliations": "Universty of Hong Kong",
    "Category": "Academic",
    "Areas of Expertise": "Environment, also a barrister",
    "Email": "whitfort@hku.hk",
    "Phone/Twitter/Website": 39172976,
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Anson Chan",
    "Title + Institution or Affiliations": "Hong Kong 2020 (pro-democracy think tank)",
    "Category": "Politician (former-)",
    "Areas of Expertise": "Former HK Chief-Sec. Hong Kong politics",
    "Email": "chanfanganson@gmail.com",
    "Phone/Twitter/Website": "Tel 2520.2383 | Fax 2520.2380",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Babette Radclyffe-Thomas",
    "Title + Institution or Affiliations": "PhD candidate at London College  of Fashion, University of the Arts London",
    "Category": "Academic/Industry",
    "Areas of Expertise": "Chinese fashion and beauty, Chinese fashion media/identity and gender studies.",
    "Email": "babettescarlet@gmail.com",
    "Phone/Twitter/Website": "@chicstranger",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Frances Eve",
    "Title + Institution or Affiliations": "HK-based researcher, Network of Chinese Human Rights Defenders (CHRD)",
    "Category": "NGO",
    "Areas of Expertise": "China human rights",
    "Email": "franceseve@nchrd.org",
    "Phone/Twitter/Website": "(852) 6695 4083",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Kelly Yang",
    "Title + Institution or Affiliations": "SCMP, The Kelly Yang Project, Scholastic",
    "Category": "Media & Education",
    "Areas of Expertise": "Education in Hong Kong & China, social, women",
    "Email": "kelly (at) kellyyang.edu.hk",
    "Phone/Twitter/Website": "@kellyyanghk",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Lucetta Kam",
    "Title + Institution or Affiliations": "Professor, Hong Kong Baptist University",
    "Category": "Academic",
    "Areas of Expertise": "LGBT, sexuality, sociology, feminism",
    "Email": "lucettakam@yahoo.com.hk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Maya Wang",
    "Title + Institution or Affiliations": "Human Rights Watch",
    "Category": "NGO",
    "Areas of Expertise": "China researcher for Human Rights Watch",
    "Email": "wangm@hrw.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Meredith McBride",
    "Title + Institution or Affiliations": "",
    "Category": "Non-profit",
    "Areas of Expertise": "Hong kong human rights, labor rights",
    "Email": "",
    "Phone/Twitter/Website": "hkhelperscampaign.com",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Puja Kapai",
    "Title + Institution or Affiliations": "University of Hong Kong - Director, Center for Comparative and Public Law",
    "Category": "Academic/Law",
    "Areas of Expertise": "Comparitive law, Hong Kong law, social issues, domestic workers, slavery",
    "Email": "puja@hku.hk",
    "Phone/Twitter/Website": "(852) 3917 7922",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Shirley Yam",
    "Title + Institution or Affiliations": "Hong Kong Journalist Association",
    "Category": "NGO",
    "Areas of Expertise": "Press freedom, Hong Kong/China",
    "Email": "shirleyhkja@gmail.com",
    "Phone/Twitter/Website": "9613 3828",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Su-Mei Thompson",
    "Title + Institution or Affiliations": "Women's Foundation",
    "Category": "NGO",
    "Areas of Expertise": "Gender, sexuality - Hong Kong/China",
    "Email": "sthompson@thewomensfoundationhk.org",
    "Phone/Twitter/Website": "Tel: 25811163",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Susan Finder",
    "Title + Institution or Affiliations": "Hong Kong based China law expert \nSupreme People's Court Monitor",
    "Category": "Academic/Law",
    "Areas of Expertise": "Law, legal reform",
    "Email": "susan.finder@outlook.com",
    "Phone/Twitter/Website": "https://supremepeoplescourtmonitor.com/",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Suzanne Pepper",
    "Title + Institution or Affiliations": "Chinese University academic, blogger at chinaelectionsblog.net/hkfocus/",
    "Category": "Author/academic",
    "Areas of Expertise": "Hong Kong politics, China politics",
    "Email": "pepper@cuhk.edu.hk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Sylvia Yu (S.J. Friedman)",
    "Title + Institution or Affiliations": "Author, 852 Campaign Co-founder",
    "Category": "Author/Journalist/NGO",
    "Areas of Expertise": "Comfort women, trafficking, women's rights",
    "Email": "sylviayu@rocketmail.com",
    "Phone/Twitter/Website": "Twitter: @Sylvia_YF  Facebook: @ComfortWomenBook",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Victoria Wisniewski Otero",
    "Title + Institution or Affiliations": "Justice Centre",
    "Category": "NGO",
    "Areas of Expertise": "Refugees, asylum seeker, migrant worker rights",
    "Email": "victoria@justicecentre.org.hk",
    "Phone/Twitter/Website": "T (852) 3109 7359, F (852) 3422 3019",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Petula Ho",
    "Title + Institution or Affiliations": "University of Hong Kong",
    "Category": "Academic",
    "Areas of Expertise": "Gender and Sexuality Associate Professor, Department of Social Work and Social Adminstration",
    "Email": "psyho@hku.hk",
    "Phone/Twitter/Website": "(852) 3917 2091",
    "Location/Notes": "HK",
    "Languages Spoken": ""
  },
  {
    "Name": "Leta Hong Fincher",
    "Title + Institution or Affiliations": "Tsinghua/Harvard",
    "Category": "Author/academic",
    "Areas of Expertise": "Gender in China. Author of Leftover Women.",
    "Email": "https://twitter.com/LetaHong",
    "Phone/Twitter/Website": "",
    "Location/Notes": "HK/US",
    "Languages Spoken": ""
  },
  {
    "Name": "Alison Friedman",
    "Title + Institution or Affiliations": "Artistic Director, Hong Kong West Kowloon Cultural Center",
    "Category": "",
    "Areas of Expertise": "Cultural Policy, U.S.-China cultural diplomacy",
    "Email": "alison@pingpongarts.org",
    "Phone/Twitter/Website": "https://twitter.com/alisonmfriedman?lang=en",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Ann Huss",
    "Title + Institution or Affiliations": "Associate Master and Dean of General Education, Morningside College",
    "Category": "Academic",
    "Areas of Expertise": "20th Century Chinese Literature",
    "Email": "ahuss@cuhk.edu.hk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Claudia Mo",
    "Title + Institution or Affiliations": "Civic Party Hong Kong (pro-democracy)",
    "Category": "Politician",
    "Areas of Expertise": "Hong Kong politics, press freedom",
    "Email": "contact@msmo.hk / claudiamo.cp@gmail.com",
    "Phone/Twitter/Website": "9071 1900",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Denise Wong",
    "Title + Institution or Affiliations": "Red Cross",
    "Category": "NGO",
    "Areas of Expertise": "Disaster relief / Hong Kong Red Cross",
    "Email": "wf.wong@redcross.org.hk",
    "Phone/Twitter/Website": 98426002,
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Jo Lusby",
    "Title + Institution or Affiliations": "",
    "Category": "Consultant",
    "Areas of Expertise": "publishing, literature, IP, creative industry",
    "Email": "jolusby@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Kitty N. Wong",
    "Title + Institution or Affiliations": "Independent llustrator",
    "Category": "Arts & Culture",
    "Areas of Expertise": "Illustration",
    "Email": "hello@kittynwong.com",
    "Phone/Twitter/Website": "@kittynwong",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Klavier Wang",
    "Title + Institution or Affiliations": "Post-doc, Academy of Hong Kong Studies, The Education University of HK",
    "Category": "Academic",
    "Areas of Expertise": "social movement, national identity, HK-Taiwan comparison, media studies",
    "Email": "klavier.wong5@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Luiza Duarte",
    "Title + Institution or Affiliations": "Asia Correspondent, GloboNews TV",
    "Category": "Media",
    "Areas of Expertise": "China general news, China-Brazil relations, China-Latin America, press freedom",
    "Email": "luizaduart@gmail.com",
    "Phone/Twitter/Website": "@duarteluiza_",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Severine Arsene",
    "Title + Institution or Affiliations": "Managing Editor, AsiaGlobal Online - Asia Global Institute - The University of Hong kong",
    "Category": "academic",
    "Areas of Expertise": "China general, Internet, cyber policy",
    "Email": "sarsene@hku.hk",
    "Phone/Twitter/Website": "@severinearsene",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Sheridan Prasso",
    "Title + Institution or Affiliations": "Author, The Asian Mystique: Dragon Ladies, Geisha Girls & Fantasies of the Exotic Orient; long-time Asia correspondent, currently Senior Writer at Bloomberg News",
    "Category": "Media",
    "Areas of Expertise": "China, gender, stereytypes, culture, foreign reporting",
    "Email": "sheri@sheridanprasso.com",
    "Phone/Twitter/Website": "www.sheridanprasso.com",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Tiffany Ap",
    "Title + Institution or Affiliations": "WWD Asia Correspondent",
    "Category": "Media",
    "Areas of Expertise": "The business of fashion, beauty, retail in China",
    "Email": "tap@wwd.com",
    "Phone/Twitter/Website": "@aptiffany",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Carolyn Wu",
    "Title + Institution or Affiliations": "Spokesperson, Apple",
    "Category": "PR, tech",
    "Areas of Expertise": "",
    "Email": "carolyn_wu@apple.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Leontine Chuang",
    "Title + Institution or Affiliations": "Director, PILnet for Hong Kong",
    "Category": "Law, NGO",
    "Areas of Expertise": "China law, rule of law, public interest law",
    "Email": "lchuang@pilnet.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Sari Arho Havrén",
    "Title + Institution or Affiliations": "PhD in international relations, China studies, APAC futurist",
    "Category": "Government, policy, strategic foresight, innovation",
    "Areas of Expertise": "Foresight, especially China (and Asia), innovation, politics, history, digitalisation",
    "Email": "Sari.arhohavren@gmail.com",
    "Phone/Twitter/Website": "@sariarhohavren",
    "Location/Notes": "Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Gabriela Nunez Wong",
    "Title + Institution or Affiliations": "PhD Student, Department of Asian and International Studies, City University of Hong Kong",
    "Category": "Academic",
    "Areas of Expertise": "Rise of emerging powers, China and Latin American relations, developmental state",
    "Email": "gsnunezw@yahoo.es",
    "Phone/Twitter/Website": "(852) 60110021",
    "Location/Notes": "Hong Kong & Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Gan Jie",
    "Title + Institution or Affiliations": "Professor of Finance, Associate Dean for Technology Innovation and Entrepreneurship at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "Chinese economy, industrial sector, banking reform, stock market governance, robotics & automation, technology innovation. Also publishes a large-scale microsurvey (2,000 companies each time) on China's industrial economy.",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/gan-jie",
    "Location/Notes": "Hong Kong & Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Denise van der Kamp",
    "Title + Institution or Affiliations": "PhD candidate, UC Berkeley",
    "Category": "Academic",
    "Areas of Expertise": "Chinese environmental politics, regulation, market governance",
    "Email": "dvanderkamp@berkeley.edu",
    "Phone/Twitter/Website": "@d_vanderkamp",
    "Location/Notes": "Hong Kong, Berkeley",
    "Languages Spoken": ""
  },
  {
    "Name": "Sonika Gupta",
    "Title + Institution or Affiliations": "Associate Professor, China Studies Centre, IIT Madras, Chennai",
    "Category": "Academic",
    "Areas of Expertise": "Chinese foreign Policy,  Cross-Strait Relations, Minorities in China,  Tibetan Exile Community, Internet in China",
    "Email": "sonika@iitm.ac.in",
    "Phone/Twitter/Website": "@SonikaIIT",
    "Location/Notes": "Indian Institute of Technology Madras, Chennai, India",
    "Languages Spoken": ""
  },
  {
    "Name": "Samantha Vortherms",
    "Title + Institution or Affiliations": "Assistant Professor, University of California, Irvine",
    "Category": "Academic",
    "Areas of Expertise": "Chinese political science, migration, hukou, citizenship",
    "Email": "s.vortherms@uci.edu",
    "Phone/Twitter/Website": "samanthavortherms.com",
    "Location/Notes": "Irvine, California",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Weiss",
    "Title + Institution or Affiliations": "Associate Professor, Government, Cornell University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Foreign Policy",
    "Email": "jcw335@cornell.edu",
    "Phone/Twitter/Website": "https://twitter.com/jessicacweiss?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    "Location/Notes": "Ithaca, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Wendy Leutert",
    "Title + Institution or Affiliations": "Post-Doctoral Fellow at the Penn Center for the Study of Contemporary China",
    "Category": "Academic",
    "Areas of Expertise": "China SOEs, economic reform, SOE reform",
    "Email": "wl239@cornell.edu",
    "Phone/Twitter/Website": "@wendyleutert",
    "Location/Notes": "Ithaca, NY/US",
    "Languages Spoken": ""
  },
  {
    "Name": "Christine Susanna Tjhin",
    "Title + Institution or Affiliations": "Senior Researcher, Centre for Strategic & International Studies (CSIS) Indonesia",
    "Category": "Thinktank",
    "Areas of Expertise": "China's diplomacy; Indonesia China partnership; Pluralism in Indonesia & Chinese Indonesian politics",
    "Email": "christine.tjhin@csis.or.id",
    "Phone/Twitter/Website": "@cataya, www.csis.or.id",
    "Location/Notes": "Jakarta, Indonesia.",
    "Languages Spoken": ""
  },
  {
    "Name": "Shellen Wu",
    "Title + Institution or Affiliations": "Associate Professor, History, University of Tennessee, Knoxville",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Environmental Policy",
    "Email": "swu5@utk.edu",
    "Phone/Twitter/Website": "http://history.utk.edu/people/shellen-wu/",
    "Location/Notes": "Knoxville, TN",
    "Languages Spoken": ""
  },
  {
    "Name": "Virginia Harper Ho",
    "Title + Institution or Affiliations": "Professor, School of Law, University of Kansas",
    "Category": "Academic",
    "Areas of Expertise": "Comparative Corporate and Securities Law",
    "Email": "vharperho@ku.edu",
    "Phone/Twitter/Website": "https://law.ku.edu/faculty/virginia-harper-ho",
    "Location/Notes": "Lawrence, KS",
    "Languages Spoken": ""
  },
  {
    "Name": "Hui Faye Xiao",
    "Title + Institution or Affiliations": "Associate Professor, Dep't of East Asian Languages and Cultures, University of Kansas",
    "Category": "Academic",
    "Areas of Expertise": "feminist literature, gender and family, cultural representations of divorce",
    "Email": "hxiao@ku.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Lawrence, US",
    "Languages Spoken": ""
  },
  {
    "Name": "Joana Matias",
    "Title + Institution or Affiliations": "MA candidate, University of Paris 8",
    "Category": "Academic",
    "Areas of Expertise": "Women's and queer literature in China and Taiwan",
    "Email": "matiasjoanarita@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Leeds, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Afra Wang",
    "Title + Institution or Affiliations": "MA/MSc, Columbia University & LSE; contributor of New York Times Chinese",
    "Category": "Academic; Media",
    "Areas of Expertise": "International history, US-China relations, Hong Kong issues",
    "Email": "zw2398@columbia.edu",
    "Phone/Twitter/Website": "@afrazhaowang",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Agatha Kratz",
    "Title + Institution or Affiliations": "Associate Director, Rhodium Group",
    "Category": "Think tank",
    "Areas of Expertise": "Chinese economic and infrastructure diplomacy, Belt and Road, EU-China relations, and Chinese outward investment”",
    "Email": "akratz@rhg.com",
    "Phone/Twitter/Website": "@AgathaKratz",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Aleksandra Kubat",
    "Title + Institution or Affiliations": "PhD candidate in Chinese Studies Research at King's College London",
    "Category": "Academic",
    "Areas of Expertise": "Chinese political system, elite politics, party schools system and cadre training, contemporary political ttheory, research methods and methodologies in contemporary China Studies.",
    "Email": "aleksandra.kubat@kcl.ac.uk",
    "Phone/Twitter/Website": "@aleKubat",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Eva Pils",
    "Title + Institution or Affiliations": "King's College London",
    "Category": "Academic",
    "Areas of Expertise": "law, human rights, politics",
    "Email": "eva.pils@kcl.ac.uk",
    "Phone/Twitter/Website": "eva.pils@kcl.ac.uk",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Harriet Evans",
    "Title + Institution or Affiliations": "Professor, University of Westminster",
    "Category": "Academic",
    "Areas of Expertise": "sexuality; gender; Old Beijing; Chinese culture (politics & development)",
    "Email": "evansh@westminster.ac.uk",
    "Phone/Twitter/Website": "Phone: 44-20-791-5000 ext 68905\n\nhttps://www.westminster.ac.uk/about-us/our-people/directory/evans-harriet",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Jude Howell",
    "Title + Institution or Affiliations": "Professor, Department of International Development, London School of Economics and Political Science (LSE)",
    "Category": "Academic",
    "Areas of Expertise": "civil society, international NGOs, community governance, social unrest",
    "Email": "j.a.howell@lse.ac.uk",
    "Phone/Twitter/Website": "44 (0)20 7955 7360\n\nhttp://www.lse.ac.uk/researchAndExpertise/Experts/profile.aspx?KeyValue=j.a.howell@lse.ac.uk",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Julia Lovell",
    "Title + Institution or Affiliations": "Reader, Department of History, Classics and Archaeology\nBirkbeck, University of London",
    "Category": "Academic",
    "Areas of Expertise": "Chinese nationalism; international export of Maoism; Chinese history; Chinese literature",
    "Email": "ubra235@mail.bbk.ac.uk",
    "Phone/Twitter/Website": "020 7079 0604\n\nhttp://www.bbk.ac.uk/history/our-staff/academic-staff/dr-julia-lovell\n\nhttps://en.wikipedia.org/wiki/Julia_Lovell",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Xiaoning Lu",
    "Title + Institution or Affiliations": "Lecturer in Modern Chinese Culture and Language, SOAS, University of London",
    "Category": "Academic",
    "Areas of Expertise": "Chinese-language cinemas, socialist cinema and culture",
    "Email": "xl1@soas.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Alice Slevison",
    "Title + Institution or Affiliations": "Senior Asia Pacific Analyst at Allan & Associates, Australian Strategic Policy Institute, China Desk: Australian Government",
    "Category": "Political risk, Think-tank, Government",
    "Areas of Expertise": "Australia-China relations; Security in China/HK/TW, Chinese maritime interests",
    "Email": "alice.slevison@gmail.com; aslevison@allan-assoc.com",
    "Phone/Twitter/Website": "@aliceslevison 44 07513 699 007",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Isabel Hilton",
    "Title + Institution or Affiliations": "CEO China Dialogue Trust, Visiting professor, Lau Institute, King's College London",
    "Category": "Academic, Think tank, Media",
    "Areas of Expertise": "Politics, international affairs, climate, energy, environment",
    "Email": "isabel.hilton@chinadialogue.net",
    "Phone/Twitter/Website": "44 (0) 20 7324 4683 (office) https://www.chinadialogue.net",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Jie Yu",
    "Title + Institution or Affiliations": "Head of China Foresight at  London School of Economics and Political Science",
    "Category": "Academic/ Think tank",
    "Areas of Expertise": "China's economic diplomacy; Decision-making of China's foreign policy; the Communist Party--SOEs relation;EU/UK- China relations",
    "Email": "j.yu7@lse.ac.uk",
    "Phone/Twitter/Website": "@Yu_JieC",
    "Location/Notes": "London",
    "Languages Spoken": ""
  },
  {
    "Name": "Kathryn Rand",
    "Title + Institution or Affiliations": "Assistant Director, Great Britain China Centre",
    "Category": "Public Body / Non-profit / Legal",
    "Areas of Expertise": "China politics and law, UK-China relations, anti-corruption, civil society, environmental governance, LGBT rights, feminist activism, human rights, business and human rights",
    "Email": "kathryn.rand@gbcc.org.uk / katinchengdu@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London / Beijing / Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Angharad Fletcher",
    "Title + Institution or Affiliations": "PhD Candidate: University of Hong Kong and King's College, London",
    "Category": "Academic",
    "Areas of Expertise": "History of disease, colonial history, war crimes in the Asia-Pacific, gender and labour history in Hong Kong and the PRC",
    "Email": "angharad.fletcher@kcl.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London and Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessie Lau",
    "Title + Institution or Affiliations": "Journalist",
    "Category": "Journalist/media",
    "Areas of Expertise": "Hong Kong, China, gender, ethnic minorities, diversity",
    "Email": "jessielau@live.com",
    "Phone/Twitter/Website": "www.laujessie.com",
    "Location/Notes": "London, Hong Kong",
    "Languages Spoken": ""
  },
  {
    "Name": "Ilaria Carrozza",
    "Title + Institution or Affiliations": "hD Candidate at the London School of Economics and Political Science",
    "Category": "Academic",
    "Areas of Expertise": "China’s foreign policy; Sino-African relations; international security; Asia-Pacific security; peacekeeping; peacebuilding; China in international organisations; Chinese aid and development assistance; Sino-Japanese relations; Belt and Road; South-South cooperation",
    "Email": "I.Carrozza@lse.ac.uk",
    "Phone/Twitter/Website": "@ilaria_carrozza",
    "Location/Notes": "London, Oslo",
    "Languages Spoken": ""
  },
  {
    "Name": "Bi-yu Chang",
    "Title + Institution or Affiliations": "Senior Teaching Fellow (Department of Politics and International Studies), Deputy Director (Center of Taiwan Studies), SOAS",
    "Category": "Academic",
    "Areas of Expertise": "The politics of culture in Taiwan.",
    "Email": "bc18@soas.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Ming-yeh Rawnsley",
    "Title + Institution or Affiliations": "Research Associate, Center of Taiwan Studies, SOAS",
    "Category": "Academic",
    "Areas of Expertise": "East Asian Cinema, media in Taiwan and China, democratization",
    "Email": "mr33@soas.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Nicola Leveringhaus",
    "Title + Institution or Affiliations": "Lecturer/Assistant Professor, Department of War Studies, School of Security Studies, King’s College London, UK",
    "Category": "Academic",
    "Areas of Expertise": "China and nuclear weapons, Chinese security and foreign policy",
    "Email": "nicola.leveringhaus@kcl.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Ozge Soylemez",
    "Title + Institution or Affiliations": "PhD Candidate, King's College London",
    "Category": "Academic",
    "Areas of Expertise": "Chinese foreign policy, global governance, international relations",
    "Email": "ozge.soylemez@kcl.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Ye Liu",
    "Title + Institution or Affiliations": "Lecturer in international development, Kings College London",
    "Category": "Academic",
    "Areas of Expertise": "Education, social mobility, One-Child policy, gender and geographical inequality",
    "Email": "ye.liu@kcl.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "London, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Yuan Ren",
    "Title + Institution or Affiliations": "Freelance",
    "Category": "Journalist/Media",
    "Areas of Expertise": "Chinese women, Beijing, cultural heritage, traditions and rituals, food (especially northern cuisine)",
    "Email": "yulaana@gmail.com",
    "Phone/Twitter/Website": "; https://www.linkedin.com/in/yuan-ren-5456b69b/",
    "Location/Notes": "London/Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Melissa Chan",
    "Title + Institution or Affiliations": "The Global Reporting Centre",
    "Category": "Media",
    "Areas of Expertise": "China: general news, human rights, US-China foreign policy, Asia regional security, press freedom, North Korea",
    "Email": "melissa.k.chan@gmail.com",
    "Phone/Twitter/Website": "@melissakchan",
    "Location/Notes": "Los Angeles/Berlin",
    "Languages Spoken": ""
  },
  {
    "Name": "Rya Butterfield",
    "Title + Institution or Affiliations": "Assistant Professor, Nicholls State University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese civil society, rhetorical theory, social and political reform movements, Republican Period, communication studies",
    "Email": "rya.butterfield@nicholls.edu",
    "Phone/Twitter/Website": "www.ryabutterfield.com @RyaButterfield\n985.448.4071",
    "Location/Notes": "Louisiana, USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Astrid Møller-Olsen",
    "Title + Institution or Affiliations": "PhD candidate, Centre for Languages and Literature, Lund University",
    "Category": "",
    "Areas of Expertise": "Contemporary Sinophone fiction: urban fiction, Hong Kong, Shanghai, Beijing, Taipei, literary sense-scapes, memory studies, narrative time and space",
    "Email": "astrid.moller-olsen@ostas.lu.se",
    "Phone/Twitter/Website": "http://www.sol.lu.se/en/person/AstridMollerOlsen/ and https://writingchina.net/",
    "Location/Notes": "Lund, Sweden",
    "Languages Spoken": ""
  },
  {
    "Name": "Marina Svensson",
    "Title + Institution or Affiliations": "Professor & Director\nCentre for East and South-East Asian Studies, Lund University",
    "Category": "Academic",
    "Areas of Expertise": "human rights;legal developments; cultural heritage; investigative journalism and China’s media ecology; documentary film and visual cultures; China’s digital society.",
    "Email": "marina.svensson@ace.lu.se",
    "Phone/Twitter/Website": "http://www.ace.lu.se/about-the-centre/staff/marina-svensson",
    "Location/Notes": "Lund, Sweden",
    "Languages Spoken": ""
  },
  {
    "Name": "Christine Wong",
    "Title + Institution or Affiliations": "Professor and Director of the Centre for Contemproary Chinese Studies, University of Melbourne",
    "Category": "Academic",
    "Areas of Expertise": "public finance; centre-local relations",
    "Email": "christine.wong@unimelb.edu.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Melbourne",
    "Languages Spoken": ""
  },
  {
    "Name": "Rachel Marsden",
    "Title + Institution or Affiliations": "Lecturer in Art Curatorship, University of Melbourne, and Founder/Curator, 'The Temporary', Independent arts writer",
    "Category": "Academic, curator, arts writer",
    "Areas of Expertise": "Transcultural curating, contemporary Chinese (and Asian) arts and culture, including social art practices; artists' residencies; creative professional development; translation, language and intercultural communication; indepedent (self) publishing.",
    "Email": "email@rachelmarsden.co.uk",
    "Phone/Twitter/Website": "(61) 0401701602 www.rachelmarsden.co.uk @rachmarsden",
    "Location/Notes": "Melbourne",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Rogers",
    "Title + Institution or Affiliations": "Research Fellow, University of Melbourne",
    "Category": "academic",
    "Areas of Expertise": "Poverty alleviation, agriculture, climate change, water management, resettlement",
    "Email": "rogerssm@unimelb.edu.au",
    "Phone/Twitter/Website": "@sarahrogersgeog",
    "Location/Notes": "Melbourne",
    "Languages Spoken": ""
  },
  {
    "Name": "Marusia Musacchio",
    "Title + Institution or Affiliations": "Journalist, Radio Centro",
    "Category": "Media",
    "Areas of Expertise": "Chinese politics, history",
    "Email": "marusia.musacchio@gmail.com",
    "Phone/Twitter/Website": "@tintachina88",
    "Location/Notes": "Mexico, San Francisco, California",
    "Languages Spoken": ""
  },
  {
    "Name": "June Teufel Dreyer",
    "Title + Institution or Affiliations": "Prof of Pol Science and International Studies, Univ of Miami, Coral Gables Florida",
    "Category": "Academic",
    "Areas of Expertise": "Sino-Japanese relations, Taiwan, security studies, cross-strait relations, ethnic minorities",
    "Email": "jdreyer@miami.edu",
    "Phone/Twitter/Website": "(305) 284-2403",
    "Location/Notes": "Miami. Florida",
    "Languages Spoken": ""
  },
  {
    "Name": "Dawn Murphy",
    "Title + Institution or Affiliations": "Assistant Professor, International Security Studies, U.S. Air War College",
    "Category": "Academic",
    "Areas of Expertise": "China's relations with the Middle East and Africa, Chinese foreign policy",
    "Email": "dcmurphy@gwmail.gwu.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Montgomery, AL",
    "Languages Spoken": ""
  },
  {
    "Name": "Kimberly Manning",
    "Title + Institution or Affiliations": "Associate Professor, Political Science",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Politics, Women and Politics, Social Movements, LGBTQ rights, and Social Policy Reform.",
    "Email": "kimberley.manning@concordia.ca",
    "Phone/Twitter/Website": "http://www.concordia.ca/artsci/sdbi/faculty.html?fpid=kimberley-manning",
    "Location/Notes": "Montreal",
    "Languages Spoken": ""
  },
  {
    "Name": "Raisa Epikhina",
    "Title + Institution or Affiliations": "Lecturer / reseracher at Lomonosov Moscow State University and the Institute of Business Studies of the Russian Presidential Academy (IBS RANEPA)",
    "Category": "Academic",
    "Areas of Expertise": "China's electric power sector; China'economy",
    "Email": "repikhina@econ.msu.ru",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Moscow, Russia",
    "Languages Spoken": ""
  },
  {
    "Name": "Alice Fang",
    "Title + Institution or Affiliations": "User experience researcher, Google; Master's candidate, Peking University Yenching Academy",
    "Category": "Industry",
    "Areas of Expertise": "e-commerce, technology in rural China, Chinese design",
    "Email": "alicefang@cs.stanford.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Mountain View, CA, US",
    "Languages Spoken": ""
  },
  {
    "Name": "Allison Moore",
    "Title + Institution or Affiliations": "Senior Access to Justice Expert, United Nations Development Programme, Myanmar Rule of law",
    "Category": "Other",
    "Areas of Expertise": "Rule of Law",
    "Email": "allison.moore@undp.org, allisonhopemoore@yahoo.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Myanmar",
    "Languages Spoken": ""
  },
  {
    "Name": "Lily Kuo",
    "Title + Institution or Affiliations": "Journalist, Quartz, Quartz Africa",
    "Category": "media",
    "Areas of Expertise": "China and Africa, China general news, Hong Kong.",
    "Email": "m.lilkuo@gmail.com",
    "Phone/Twitter/Website": "@lilkuo",
    "Location/Notes": "Nairobi, Kenya",
    "Languages Spoken": ""
  },
  {
    "Name": "Ardi Bouwers",
    "Title + Institution or Affiliations": "Professor, Amsterdam University College",
    "Category": "Academic/Media",
    "Areas of Expertise": "China general, politics, media, communication",
    "Email": "ardi@chinacircle.nl",
    "Phone/Twitter/Website": "Twitter: @ardibouwers: www.chinacircle.nl",
    "Location/Notes": "Netherlands",
    "Languages Spoken": ""
  },
  {
    "Name": "Alka Acharya",
    "Title + Institution or Affiliations": "Professor, Centre for East Asian Studies, Jawaharlal Nehru University, New Delhi 110067",
    "Category": "Academic",
    "Areas of Expertise": "Chines economy, Sino-Indian border dispute",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New Delhi",
    "Languages Spoken": ""
  },
  {
    "Name": "Pooja Bhatt",
    "Title + Institution or Affiliations": "Research Associate, Centre for Air Power Studies (CAPS); PhD candidate, Jawaharlal Nehru University (JNU).",
    "Category": "Academic/ Think tank",
    "Areas of Expertise": "China's foreign policy, South China Sea, BRI, Maritime developments in Indian Ocean (Book on SCS in progress)",
    "Email": "poojabhatt.jnu@gmail.com",
    "Phone/Twitter/Website": "Twitter: @pooja1487 ;http://capsindia.org/faculty",
    "Location/Notes": "New Delhi, India",
    "Languages Spoken": ""
  },
  {
    "Name": "Monika Chansoria",
    "Title + Institution or Affiliations": "Senior Fellow, Centre for Land Warfare Studies (CLAWS); Senior Visiting Fellow, The Japan Institute of International Affairs (JIIA)",
    "Category": "Academic/ Think tank",
    "Areas of Expertise": "China, Taiwan, contemporary Asian security, Nuclear weapons’ proliferation issues, great power politics and strategy in the Indo-Pacific with focus on China",
    "Email": "monika194@gmail.com",
    "Phone/Twitter/Website": "Twitter: @MonikaChansoria ;http://www.claws.in/faculty-detail.php?fID=28",
    "Location/Notes": "New Delhi, India/ Tokyo, Japan",
    "Languages Spoken": ""
  },
  {
    "Name": "Angel Hsu",
    "Title + Institution or Affiliations": "Assistant Professor, Environmental Studies, Yale-NUS College/Yale University",
    "Category": "Academic",
    "Areas of Expertise": "Environmental Policy, U.S.-China Relations on Climate Change",
    "Email": "angel.hsu.05@gmail.com",
    "Phone/Twitter/Website": "https://twitter.com/ecoangelhsu?lang=en",
    "Location/Notes": "New Haven, CT",
    "Languages Spoken": ""
  },
  {
    "Name": "Deborah Davis",
    "Title + Institution or Affiliations": "Professor, Yale University",
    "Category": "Academic",
    "Areas of Expertise": "Professor, Yale University",
    "Email": "Deborah.Davis@yale.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New Haven, CT",
    "Languages Spoken": ""
  },
  {
    "Name": "Denise Ho",
    "Title + Institution or Affiliations": "Assistant Professor, History, Yale University",
    "Category": "Academic",
    "Areas of Expertise": "20th Century Chinese history, Society and Culture during  the Mao era",
    "Email": "denise.ho@yale.edu",
    "Phone/Twitter/Website": "https://history.yale.edu/people/denise-y-ho",
    "Location/Notes": "New Haven, CT",
    "Languages Spoken": ""
  },
  {
    "Name": "Yali Chen",
    "Title + Institution or Affiliations": "Princeton University Post-doc",
    "Category": "Academic",
    "Areas of Expertise": "PLA; China security",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New Jersey",
    "Languages Spoken": ""
  },
  {
    "Name": "Elizabeth Economy",
    "Title + Institution or Affiliations": "C.V. Starr Senior Fellow and Director of Asia Studies, Council on Foreign Relations",
    "Category": "Think Tank",
    "Areas of Expertise": "Environment, energy, U.S.-China relations, Chinese politics",
    "Email": "eeconomy@cfr.org",
    "Phone/Twitter/Website": "@LizEconomy",
    "Location/Notes": "New York",
    "Languages Spoken": ""
  },
  {
    "Name": "Elizabeth Lynch",
    "Title + Institution or Affiliations": "China Law and Policy",
    "Category": "research",
    "Areas of Expertise": "Chinese criminal law, rule of law, civil society, politico-legal apparatus",
    "Email": "elynch@chinalawandpolicy.com",
    "Phone/Twitter/Website": "@chinalawpolicy\nwww.chinalawandpolicy.com",
    "Location/Notes": "New York",
    "Languages Spoken": ""
  },
  {
    "Name": "Natalia Cote-Muñoz",
    "Title + Institution or Affiliations": "Inter-American Dialogue China and Latin America Young Scholar, Harvard Kennedy School Master in Public Policy",
    "Category": "Think tank/Academic",
    "Areas of Expertise": "China and Latin America relations, including soft power, investment, infrastructure. Gender and feminism in China and Latin America.",
    "Email": "ncotemunoz@alumni.harvard.edu",
    "Phone/Twitter/Website": "@ncotemunoz\nhttps://www.linkedin.com/in/ncotemunoz/",
    "Location/Notes": "New York",
    "Languages Spoken": "English, Spanish, French, Mandarin"
  },
  {
    "Name": "Rorry Daniels",
    "Title + Institution or Affiliations": "Deputy Project Director, Forum on Asia-Pacific Security, National Committee on American Foreign Policy",
    "Category": "Think Tank",
    "Areas of Expertise": "East Asian security issues, US-China relations, cross-Taiwan Strait relations, North Korean nuclear issue, US alliance relations",
    "Email": "rorry.daniels@ncafp.org",
    "Phone/Twitter/Website": "(212) 224-1142",
    "Location/Notes": "New York",
    "Languages Spoken": ""
  },
  {
    "Name": "Sun Baohong",
    "Title + Institution or Affiliations": "Dean's Distinguished Chair Professor of Marketing, Associate Dean of CKGSB Americas at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "E-commerce, social media, consumer choice, dynamic and interactive marketing, customer information management.",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/sun-baohong",
    "Location/Notes": "New York",
    "Languages Spoken": ""
  },
  {
    "Name": "Sara Hsu",
    "Title + Institution or Affiliations": "Associate Professor of Economics, State University of New York at New Paltz and Forbes contributor",
    "Category": "Academic",
    "Areas of Expertise": "Economy and finance of China",
    "Email": "sara_hsu@yahoo.com, hsus@newpaltz.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New York",
    "Languages Spoken": ""
  },
  {
    "Name": "Maggie Rauch",
    "Title + Institution or Affiliations": "Research analyst",
    "Category": "Research, tech",
    "Areas of Expertise": "Research travel tech globally, with a focus on China and APAC",
    "Email": "mrauch@phocuswright.com",
    "Phone/Twitter/Website": "www.phocuswright.com",
    "Location/Notes": "New York (often in China)",
    "Languages Spoken": ""
  },
  {
    "Name": "Abigail Coplin",
    "Title + Institution or Affiliations": "PhD Candidate, Columbia University. Post-doc at Yale University as of 7/1/2017.",
    "Category": "Academic",
    "Areas of Expertise": "Science and technology (esp. biotechnology), tech policy, state-society relations, sociology.",
    "Email": "aec2168@columbia.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New York and New Haven",
    "Languages Spoken": ""
  },
  {
    "Name": "Joyce Lai",
    "Title + Institution or Affiliations": "Associate - Seward & Kissel LLP",
    "Category": "Law/Finance",
    "Areas of Expertise": "Hedge funds, private funds; Hong Kong native (I practice U.S. securities law)",
    "Email": "joycelylai@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New York City",
    "Languages Spoken": ""
  },
  {
    "Name": "Jan Berris",
    "Title + Institution or Affiliations": "Vice President, National Committee on U.S.-China Relations",
    "Category": "Non-Profit",
    "Areas of Expertise": "U.S.-China Relations\nHistory of the Jews in China",
    "Email": "",
    "Phone/Twitter/Website": "212-645-9677",
    "Location/Notes": "New York City, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Qin Gao",
    "Title + Institution or Affiliations": "Professor, School of Social Work, Columbia University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Poverty, inequality and income redistribution, Chinese social welfare policies",
    "Email": "qin.gao@columbia.edu",
    "Phone/Twitter/Website": "https://twitter.com/gaoqin505",
    "Location/Notes": "New York City, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Weiping Wu",
    "Title + Institution or Affiliations": "Professor, Urban Planning, and Director of the M.S. Urban Planning Program, Columbia University",
    "Category": "Academic",
    "Areas of Expertise": "Urban Developent, Migration and Urbanization",
    "Email": "weiping.wu@columbia.edu",
    "Phone/Twitter/Website": "https://www.arch.columbia.edu/faculty/515-weiping-wu",
    "Location/Notes": "New York City, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Ke Li",
    "Title + Institution or Affiliations": "Assistant Professor, John Jay College of Criminal Justice, the City University of New York",
    "Category": "Academic",
    "Areas of Expertise": "Law and society, courts, legal professions, contentious politics and gender in China",
    "Email": "like2@umail.iu.edu",
    "Phone/Twitter/Website": "@like2soc",
    "Location/Notes": "New York City, US",
    "Languages Spoken": ""
  },
  {
    "Name": "Dorothy Ko",
    "Title + Institution or Affiliations": "Columbia University, Barnard College",
    "Category": "Academic",
    "Areas of Expertise": "History of China, Women's Gender and Sexuality Studies",
    "Email": "dko@barnard.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New York, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Joan Kaufman",
    "Title + Institution or Affiliations": "Harvard/Tsinghua/Schwarzman Scholars",
    "Category": "Academic",
    "Areas of Expertise": "Mainland China: Gender, health, population, HIV/AIDS, civil society",
    "Email": "joan.kaufman@schwarzmanscholars.org",
    "Phone/Twitter/Website": "781 718 8793",
    "Location/Notes": "New York, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Joan Kaufman",
    "Title + Institution or Affiliations": "Lecturer, Harvard University",
    "Category": "Academic",
    "Areas of Expertise": "demography, population, women's rights, health,",
    "Email": "joan_kaufman@harvard.edu",
    "Phone/Twitter/Website": "86 1370 106 1549",
    "Location/Notes": "New York, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Madeleine Zelin",
    "Title + Institution or Affiliations": "Dean Lung Professor of Chinese Studies, Columbia University",
    "Category": "Academic",
    "Areas of Expertise": "Modern legal history and the role of law in the Chinese economy",
    "Email": "mhz1@columbia.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New York, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Ying Qian",
    "Title + Institution or Affiliations": "Assistant Prof, East Asian Studies, Columbia University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese cinema and media studies, Chinese literature",
    "Email": "yq2189@columbia.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "New York, NY",
    "Languages Spoken": ""
  },
  {
    "Name": "Anne Marie-Brady",
    "Title + Institution or Affiliations": "Global Fellow at the Wilson Center, Editor-in-chief of The Polar Journal, Professor in Political Science, University of Canterbury, NZ.",
    "Category": "Academic",
    "Areas of Expertise": "Chinese propaganda system, Chinese media, China's foreign propaganda, CCP politics and the Party-State relationship, China's polar and maritime policies, One Belt One Road policy, China and South Pacific, China and Arctic, China and Antarctica, foreigners in China, New Zealand-China relations, China's global rise",
    "Email": "anne-marie.brady@canterbury.ac.nz",
    "Phone/Twitter/Website": "@thepolarjournal",
    "Location/Notes": "New Zealand",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret Lewis",
    "Title + Institution or Affiliations": "Professor of Law, Seton Hall University School of Law (in Taiwan, 2017-18)",
    "Category": "Academic",
    "Areas of Expertise": "Legal Reform in China and Taiwan",
    "Email": "margaret.katri.lewis@gmail.com",
    "Phone/Twitter/Website": "https://law.shu.edu/faculty/full-time/margaret-lewis.cfm",
    "Location/Notes": "Newark, NJ",
    "Languages Spoken": ""
  },
  {
    "Name": "Joan Johnson-Freese",
    "Title + Institution or Affiliations": "Professor, US Naval War College",
    "Category": "Academic",
    "Areas of Expertise": "Space Issues (Policy, Militarization, etc.)",
    "Email": "joanjohnsonfreese@gmail.com",
    "Phone/Twitter/Website": "401-261-2045",
    "Location/Notes": "Newport, RI USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Lina Benabdallah, PhD",
    "Title + Institution or Affiliations": "Assistant Professor of Politics and International Affairs, Wake Forest University",
    "Category": "Academic",
    "Areas of Expertise": "Foreign policy, China-Africa, human resource development",
    "Email": "www.Linabenabdallah.com",
    "Phone/Twitter/Website": "@LBenabdallah",
    "Location/Notes": "North Carolina, US",
    "Languages Spoken": ""
  },
  {
    "Name": "Shelley Rigger",
    "Title + Institution or Affiliations": "Professor, Davidson College",
    "Category": "Academic",
    "Areas of Expertise": "Taiwan politics, cross-Strait relations",
    "Email": "shrigger@davidson.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "North Carolina, USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Sabina Knight",
    "Title + Institution or Affiliations": "Professor, Chinese and Comparative Literature and Director for Comparative Literature, Smith College",
    "Category": "Academic",
    "Areas of Expertise": "Chinese literature",
    "Email": "dsknight@smith.edu",
    "Phone/Twitter/Website": "https://www.smith.edu/academics/faculty/sabina-knight",
    "Location/Notes": "Northampton, MA",
    "Languages Spoken": ""
  },
  {
    "Name": "Karla Simon",
    "Title + Institution or Affiliations": "Chairperson ICCSL\nAffiliated Scholar\nUS-Asia Law Institute, NYU Law",
    "Category": "Academic/Law",
    "Areas of Expertise": "China law and civil society",
    "Email": "kwskarla@gmail.com",
    "Phone/Twitter/Website": "1 860.248.3208",
    "Location/Notes": "Note: deceased",
    "Languages Spoken": ""
  },
  {
    "Name": "Karrie Koesel",
    "Title + Institution or Affiliations": "Associate Professor, Political Science, University of Notre Dame",
    "Category": "Academic",
    "Areas of Expertise": "Chinese religion and politics",
    "Email": "kkoesel1@nd.edu",
    "Phone/Twitter/Website": "http://keough.nd.edu/profile/karrie-koesel/",
    "Location/Notes": "Notre Dame, IN",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Dauncey",
    "Title + Institution or Affiliations": "Associate Professor, School of Sociology and Social Policy, University of Nottingham",
    "Category": "Academic",
    "Areas of Expertise": "Disability, gender, social change, citizenship, fashion, literature, culture, film",
    "Email": "sarah.dauncey@nottingham.ac.uk",
    "Phone/Twitter/Website": "@chinesesarah",
    "Location/Notes": "Nottingham, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Ann Lee",
    "Title + Institution or Affiliations": "New York University",
    "Category": "academic",
    "Areas of Expertise": "China U.S. relations",
    "Email": "ann@professorannlee.com",
    "Phone/Twitter/Website": "professorannlee.com/",
    "Location/Notes": "NYC",
    "Languages Spoken": ""
  },
  {
    "Name": "Renee Xia",
    "Title + Institution or Affiliations": "NY-based director, CHRD",
    "Category": "NGO",
    "Areas of Expertise": "China human rights",
    "Email": "reneexia@nchrd.org",
    "Phone/Twitter/Website": "1 863 866 1012",
    "Location/Notes": "NYC",
    "Languages Spoken": ""
  },
  {
    "Name": "Ying Zhu",
    "Title + Institution or Affiliations": "Chair, Dept of Media Culture at Staten Island-CUNY",
    "Category": "Academic",
    "Areas of Expertise": "Chinese cinema and media studies",
    "Email": "ying.zhu@csi.cuny.edu",
    "Phone/Twitter/Website": "http://www.chinafile.com/contributors/ying-zhu",
    "Location/Notes": "NYC",
    "Languages Spoken": ""
  },
  {
    "Name": "Siqi Tu",
    "Title + Institution or Affiliations": "PhD Candidate, the Graduate Center, City University of New York",
    "Category": "Academic",
    "Areas of Expertise": "Elite education, transnational mobility (China-US in particular), upper middle class in urban China",
    "Email": "tusiqi247@gmail.com",
    "Phone/Twitter/Website": "@Eudaimonia47",
    "Location/Notes": "NYC/Shanhgai",
    "Languages Spoken": ""
  },
  {
    "Name": "Linda Benson",
    "Title + Institution or Affiliations": "Professor Emerita, Oakland",
    "Category": "Academic",
    "Areas of Expertise": "Xinjiang, history",
    "Email": "",
    "Phone/Twitter/Website": "https://oakland.edu/history/top-links/history-faculty-staff/linda-benson/",
    "Location/Notes": "Oakland",
    "Languages Spoken": ""
  },
  {
    "Name": "Cecilie Figenschou Bakke",
    "Title + Institution or Affiliations": "China and East Asia Director, Norwegian Centre for Human Rights, University of Oslo",
    "Category": "Academic",
    "Areas of Expertise": "China, human rights, dialogue,",
    "Email": "c.f.bakke@nchr.uio.no",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Oslo",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristin Dalen",
    "Title + Institution or Affiliations": "Researcher, Fafo Research Foundation, Oslo; PhD Candidate, University of Bergen, Norway",
    "Category": "Academic",
    "Areas of Expertise": "China’s welfare state, social capital, political trust, legitimacy, living conditions, migration",
    "Email": "kristin.dalen@fafo.no",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Oslo, Norway",
    "Languages Spoken": ""
  },
  {
    "Name": "Pascale Massot",
    "Title + Institution or Affiliations": "Assistant Professor, School of Political Studies, University of Ottawa",
    "Category": "Academic",
    "Areas of Expertise": "global and comparative political economy, natural resources, Canada foreign and trade relations in the Asia-Pacific",
    "Email": "pmassot@uottawa.ca",
    "Phone/Twitter/Website": "https://uniweb.uottawa.ca/members/990 https://pascalemassot.com/",
    "Location/Notes": "Ottawa, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Anna Lora-Wainwright",
    "Title + Institution or Affiliations": "Associate Professor, University of Oxford",
    "Category": "Academic",
    "Areas of Expertise": "environment, geography of China",
    "Email": "anna.lora-wainwright@ouce.ox.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Oxford",
    "Languages Spoken": ""
  },
  {
    "Name": "Rosemary Foot",
    "Title + Institution or Affiliations": "Professor (Emerita) University of Oxford",
    "Category": "Academic",
    "Areas of Expertise": "China’s international relations and human rights",
    "Email": "Rosemary.Foot@sant.ox.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Oxford",
    "Languages Spoken": ""
  },
  {
    "Name": "Vivienne Shue",
    "Title + Institution or Affiliations": "Professor (Emerita) University of Oxford",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics",
    "Email": "Vivienne.Shue@sant.ox.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Oxford",
    "Languages Spoken": ""
  },
  {
    "Name": "Patricia Thornton",
    "Title + Institution or Affiliations": "Associate Professor, Dep't of Politics and International Relations, Merton College, University of Oxford",
    "Category": "Academic",
    "Areas of Expertise": "Governance; political, socio-economic, and cultural history of modern China",
    "Email": "",
    "Phone/Twitter/Website": "@PM_Thornton",
    "Location/Notes": "Oxford, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Ros Holmes",
    "Title + Institution or Affiliations": "Junior Research Fellow- University of Oxford",
    "Category": "Academic",
    "Areas of Expertise": "Modern and Contemporary Chinese Art, Online Visual Culture",
    "Email": "ros.holmes@history.ox.ac.uk",
    "Phone/Twitter/Website": "@ros_holmes; www.themediatedimage.com",
    "Location/Notes": "Oxford, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Alice Ekman",
    "Title + Institution or Affiliations": "Head of China Research, Center for Asian Studies, Institut Français des Relations Internationales (IFRI)",
    "Category": "Think Tank",
    "Areas of Expertise": "China, Taiwan, South Korea",
    "Email": "ekman@ifri.org",
    "Phone/Twitter/Website": "@alice_ekman https://www.ifri.org/fr/a-propos/equipe/alice-ekman",
    "Location/Notes": "Paris",
    "Languages Spoken": ""
  },
  {
    "Name": "Isabelle Thireau",
    "Title + Institution or Affiliations": "Professor, L'Ecole des Hautes Estudes en Sciences Sociales (EHESS); Diretor, CNRS",
    "Category": "Academic",
    "Areas of Expertise": "labor; migration; rural areas; norms & justice",
    "Email": "thireau@ehess.fr",
    "Phone/Twitter/Website": "http://cecmc.ehess.fr/index.php?2639",
    "Location/Notes": "Paris",
    "Languages Spoken": ""
  },
  {
    "Name": "Marie Holzmann",
    "Title + Institution or Affiliations": "President, Solidarité Chine",
    "Category": "Research; Advocate",
    "Areas of Expertise": "Contemporary China; human rights; human rights defenders & dissidents",
    "Email": "marie@holzman.fr",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Paris",
    "Languages Spoken": ""
  },
  {
    "Name": "Marie-Helene Schwoob",
    "Title + Institution or Affiliations": "Research Fellow, IDDRI (Institut du Developpement Durable et des Relations Internationales), Agronomist and PhD in political science",
    "Category": "Academic; Think tank",
    "Areas of Expertise": "China; rural areas; agriculture; food security; agricultural modernization; farmers / peasants; sustainable development; environment",
    "Email": "mariehelene.schwoob@iddri.org\nmh.schwoob@gmail.com",
    "Phone/Twitter/Website": "@MhSchwoob",
    "Location/Notes": "Paris",
    "Languages Spoken": ""
  },
  {
    "Name": "Stéphanie Balme",
    "Title + Institution or Affiliations": "Professor, Sciences Po; co-founder, Sino-French Rule of Law Dialogue",
    "Category": "Academic",
    "Areas of Expertise": "law; judiciary; governance; constitutionalism; rule of law; bureaucracy",
    "Email": "stephanie.balme@sciencespo.fr",
    "Phone/Twitter/Website": "33 (0)1 58 71 70 84\n\nhttp://www.sciencespo.fr/ceri/en/users/stephaniebalme",
    "Location/Notes": "Paris",
    "Languages Spoken": ""
  },
  {
    "Name": "Françoise Nicolas",
    "Title + Institution or Affiliations": "Senior Research Fellow and Director, Center for Asian Studies, Institut Français des Relations Internationales (IFRI)",
    "Category": "Think Tank",
    "Areas of Expertise": "Emerging economies, with a focus on East Asia, East Asian regional economic integration",
    "Email": "nicolas@ifri.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Paris",
    "Languages Spoken": ""
  },
  {
    "Name": "Dao Nguyen",
    "Title + Institution or Affiliations": "Essenzia, founder CEO",
    "Category": "Business                   /research",
    "Areas of Expertise": "Cartography of taste : smell and taste. Fragrance, cosmetics, fine food #TasteOfChina",
    "Email": "hello@essenziabydao.com",
    "Phone/Twitter/Website": "essenziabydao.com",
    "Location/Notes": "Paris, France",
    "Languages Spoken": ""
  },
  {
    "Name": "Gwendoline Debéthune",
    "Title + Institution or Affiliations": "Associate Junior Researcher at the Research Centre on Modern and contemporary China (CECMC)",
    "Category": "Academic",
    "Areas of Expertise": "Women and microcredit / microfinance; Women’s hidden economy",
    "Email": "gwendoline.debethune@gmail.com",
    "Phone/Twitter/Website": "http://cecmc.ehess.fr/index.php?2461\n\nhttps://www.linkedin.com/in/debethune/?ppe=1",
    "Location/Notes": "Paris, France",
    "Languages Spoken": ""
  },
  {
    "Name": "Seung-Youn Oh",
    "Title + Institution or Affiliations": "Assistant professor, Bryn Mawr College",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Political Economy, Industrial policy, SOE reform, foreign direct investment, China and the WTO, CPE and IPE in East Asia broadly",
    "Email": "seungyoun.oh@gmail.com",
    "Phone/Twitter/Website": "https://syoh.blogs.brynmawr.edu/",
    "Location/Notes": "Philadelphia, PA",
    "Languages Spoken": ""
  },
  {
    "Name": "Roselyn Hsueh",
    "Title + Institution or Affiliations": "Associate Professor, Department of Political Science, Temple University",
    "Category": "Academic",
    "Areas of Expertise": "States and Markets, Foreign Direct Investment, Trade, Telecommunications, Textiles, Sectors, Globalization, Geopolitics, Comparative Institutions, Comparative Capitalism, Political Economy of Development, BRICS",
    "Email": "rhsueh@temple.edu",
    "Phone/Twitter/Website": "@RoselynHsueh http://www.roselynhsueh.com",
    "Location/Notes": "Philadelphia, USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Calla Wiemer",
    "Title + Institution or Affiliations": "Professor, University of the Philippines",
    "Category": "Academic",
    "Areas of Expertise": "Chinese economy; Chinese economic relations with Southeast Asia",
    "Email": "calla.wiemer@econ.upd.edu.ph",
    "Phone/Twitter/Website": "www.callawiemer.com",
    "Location/Notes": "Philippines",
    "Languages Spoken": ""
  },
  {
    "Name": "Teresa Woodland",
    "Title + Institution or Affiliations": "Consultant, WuDeLan Partners",
    "Category": "Business",
    "Areas of Expertise": "Leadership development in China, HR issues",
    "Email": "teresa_woodland@wudelan.com",
    "Phone/Twitter/Website": "1 (412) 478-6235",
    "Location/Notes": "Pittsburgh PA/US",
    "Languages Spoken": ""
  },
  {
    "Name": "Kay Shimizu",
    "Title + Institution or Affiliations": "Assistant Research Professor, Political Science, University of Pittsburgh",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Political Economy",
    "Email": "kayshimizu@pitt.edu",
    "Phone/Twitter/Website": "http://www.polisci.pitt.edu/person/kaoru-kay-shimizu",
    "Location/Notes": "Pittsburgh, PA",
    "Languages Spoken": ""
  },
  {
    "Name": "Isabelle Cheng",
    "Title + Institution or Affiliations": "Senior Lecturer in East Asian Studies, University of Portsmouth",
    "Category": "Academic",
    "Areas of Expertise": "Marriage migration and multiculturism in Taiwan",
    "Email": "isabelle.cheng@port.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Portsmouth, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Yu Zhou",
    "Title + Institution or Affiliations": "Professor, Earth Science and Geography, Vassar College",
    "Category": "Academic",
    "Areas of Expertise": "Innovation and China's high-tech industry",
    "Email": "yuzhou@vassar.edu",
    "Phone/Twitter/Website": "https://www.vassar.edu/faculty/yuzhou/",
    "Location/Notes": "Poughkeepsie, New York",
    "Languages Spoken": ""
  },
  {
    "Name": "Zheng Guan",
    "Title + Institution or Affiliations": "PhD student, Princeton University",
    "Category": "Academic",
    "Areas of Expertise": "Modern Chinese history, war and social history",
    "Email": "z.guan@princeton.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Princeton, US",
    "Languages Spoken": ""
  },
  {
    "Name": "Svetlana Krivokhizh",
    "Title + Institution or Affiliations": "National Research Univeristy Higher School of Economics (Saint-Petersburg)",
    "Category": "academic",
    "Areas of Expertise": "soft power, public diplomacy, theory of international relations",
    "Email": "skrivokhizh@hse.ru",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Saint-Petersburg (Rus)",
    "Languages Spoken": ""
  },
  {
    "Name": "Janet Theiss",
    "Title + Institution or Affiliations": "Associate Professor, History, and Director, Asia Center, University of Utah",
    "Category": "Academic",
    "Areas of Expertise": "Gender and Family in Modern China",
    "Email": "janet.theiss@utah.edu",
    "Phone/Twitter/Website": "https://faculty.utah.edu/u0028818-JANET_M_THEISS/research/index.hml",
    "Location/Notes": "Salt Lake City, UT",
    "Languages Spoken": ""
  },
  {
    "Name": "Gina Tam",
    "Title + Institution or Affiliations": "Assistant professor, Dept of history at Trinity University, San Antonio",
    "Category": "Academic",
    "Areas of Expertise": "20th century China, nationalism, identity, and language and dialects",
    "Email": "gtam@trinity.edu",
    "Phone/Twitter/Website": "@DGTam86",
    "Location/Notes": "San Antonio, TX",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret (Molly) Roberts",
    "Title + Institution or Affiliations": "Assistant Professor, Department of Political Science",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics, information",
    "Email": "meroberts@ucsd.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "San Diego",
    "Languages Spoken": ""
  },
  {
    "Name": "Susan Shirk",
    "Title + Institution or Affiliations": "Chair, 21st Century China Center, UCSD",
    "Category": "academic",
    "Areas of Expertise": "Chinese politics and foreign policy",
    "Email": "sshirk@ucsd.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "San Diego",
    "Languages Spoken": ""
  },
  {
    "Name": "Andrea Lingenfelter",
    "Title + Institution or Affiliations": "University of San Francisco",
    "Category": "Literary translator/academic",
    "Areas of Expertise": "Translation, contemporary poetry and fiction, women writers, Hong Kong, Shanghai",
    "Email": "ondi@speakeasy.org ; ondi.lingenfelter@gmail.com",
    "Phone/Twitter/Website": "@OndiLing",
    "Location/Notes": "San Francisco",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristen McDonald",
    "Title + Institution or Affiliations": "China Program Director, Pacific Environment",
    "Category": "NGO",
    "Areas of Expertise": "environmental movement, environmental policy, water, dams, overseas dam building, Nu/Salween River, Jinsha/upper Yangtze River, rafting in China, water pollution, NGOs, civil society",
    "Email": "kmcdonald@pacificenvironment.org",
    "Phone/Twitter/Website": "415-399-8850 x 314; 510-859-5841 (cell)",
    "Location/Notes": "San Francisco Bay Area, USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristen McDonald",
    "Title + Institution or Affiliations": "China Program Director, Pacific Environment",
    "Category": "Non-Profit",
    "Areas of Expertise": "Chinese resource management",
    "Email": "kmcdonald@pacificenvironment.org",
    "Phone/Twitter/Website": "https://www.pacificenvironment.org/team-members/kristen-mcdonald/",
    "Location/Notes": "San Francisco, CA",
    "Languages Spoken": ""
  },
  {
    "Name": "Susan Whiting",
    "Title + Institution or Affiliations": "Associate Professor, Political Science and Adjunct Associate Professor, International Studies, University of Washington",
    "Category": "Academic",
    "Areas of Expertise": "Land and Property Rights",
    "Email": "swhiting@u.washington.edu",
    "Phone/Twitter/Website": "http://faculty.washington.edu/swhiting/",
    "Location/Notes": "Seattle, WA",
    "Languages Spoken": ""
  },
  {
    "Name": "Tabitha G. Mallory",
    "Title + Institution or Affiliations": "Consultant, China Ocean Institute, LLC; Affiliate Professor, Jackson School of International Studies, University of Washington",
    "Category": "Academic",
    "Areas of Expertise": "China foreign and environmental policy, ocean and fisheries policy, maritime security, \"marine ecological civilization building",
    "Email": "tabitha@china-ocean.org",
    "Phone/Twitter/Website": "www.china-ocean.org; https://jsis.washington.edu/people/tabitha-grace-mallory/",
    "Location/Notes": "Seattle, Washington",
    "Languages Spoken": ""
  },
  {
    "Name": "Casey Hall",
    "Title + Institution or Affiliations": "Freelance journalist/contributor of China content for WWD, SCMP, CNN, Forbes, International New York Times, WSJ Asia",
    "Category": "Media",
    "Areas of Expertise": "Chinese consumers, fashion, luxury, design, interior design, retail, beauty, e-commerce.",
    "Email": "casey@caseyhall.me",
    "Phone/Twitter/Website": "8615821850702 / @shanghaicasey",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Chang Yiyang",
    "Title + Institution or Affiliations": "Senior Analyst, Emerging Strategy",
    "Category": "research",
    "Areas of Expertise": "China Education, Edtech",
    "Email": "yiyang.chang@emerging-strategy.com",
    "Phone/Twitter/Website": "(+86) 21 6191 1101",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Lisa Movius",
    "Title + Institution or Affiliations": "China Bureau Chief, The Art Newspaper",
    "Category": "Arts, Journalism",
    "Areas of Expertise": "Contemporary art, musuems, art market, indie music, youth culture, cultural industries, fashion, theatre, Shanghai culture",
    "Email": "LMovius@hotmail.com",
    "Phone/Twitter/Website": "86-13004153002",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Louise Adele Roy",
    "Title + Institution or Affiliations": "Director of Patient Support, Lactation Counsellor, Ferguson Women's Health",
    "Category": "Health",
    "Areas of Expertise": "Breastfeeding, women's health, Obstetrics, Prenatal education",
    "Email": "louise.roy@fergusonhealth.com",
    "Phone/Twitter/Website": "(86) 13524384642",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Ye Tan",
    "Title + Institution or Affiliations": "Independent economic analyst",
    "Category": "Research",
    "Areas of Expertise": "Chinese economy",
    "Email": "",
    "Phone/Twitter/Website": "(86) 13701953916",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Leksa Lee",
    "Title + Institution or Affiliations": "Assistant Professor Faculty Fellow, New York University Shanghai",
    "Category": "Academic",
    "Areas of Expertise": "Museums, Local government / small business relations, Cultural heritage and authenticity, Museums in local development projects",
    "Email": "leksa dot lee at nyu dot edu",
    "Phone/Twitter/Website": "https://shanghai.nyu.edu/academics/faculty/directory/leksa-lee",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Lena Scheen",
    "Title + Institution or Affiliations": "Assistant Professor of Global China Studies at New York University (NYU) Shanghai",
    "Category": "Academic",
    "Areas of Expertise": "Shanghai (history, culture, social issues, urban planning, literature, etc)",
    "Email": "lms14@nyu.edu",
    "Phone/Twitter/Website": "https://shanghai.nyu.edu/academics/faculty/directory/lena-scheen",
    "Location/Notes": "Shanghai",
    "Languages Spoken": ""
  },
  {
    "Name": "Lenora Chu",
    "Title + Institution or Affiliations": "author (HarperCollins), journalist",
    "Category": "media / research",
    "Areas of Expertise": "Chinese education / culture, general, U.S.-China education comparisons, author of Little Soldiers",
    "Email": "lenorachu@gmail.com",
    "Phone/Twitter/Website": "www.lenorachu.com / @LenoraChu",
    "Location/Notes": "Shanghai / U.S.",
    "Languages Spoken": ""
  },
  {
    "Name": "Jamie Barys",
    "Title + Institution or Affiliations": "CEO, UnTour Food Tours. Correspondent, Culinary Backstreets & Fathom. Freelance Journalist. Former Managing Editor of Talk Magazine.",
    "Category": "Food, Media",
    "Areas of Expertise": "Food, with a focus on local cuisine, dining trends and street food. I have also written extensively about the Shanghai F&B world",
    "Email": "jamie@untourfoodtours.com",
    "Phone/Twitter/Website": "untourfoodtours.com 186.1650.4269",
    "Location/Notes": "Shanghai & Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Juliet Zhu",
    "Title + Institution or Affiliations": "Professor of Marketing, Associate Dean for EMBA Programs at Cheung Kong Graduate School of Business (CKGSB)",
    "Category": "Academic",
    "Areas of Expertise": "Philanthropy, consumer behavior, creativity, advertising, branding, consumer information processing and psychology, design and structural effects of physical environment.",
    "Email": "Contact via CKGSB Communications Manager: markdreyer@ckgsb.edu.cn",
    "Phone/Twitter/Website": "http://english.ckgsb.edu.cn/faculty_content/zhu-rui-juliet",
    "Location/Notes": "Shanghai & Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Peggy Liu",
    "Title + Institution or Affiliations": "Founder and Chairperson of Joint US-China Collaboration on Clean Energy (JUCCCE)",
    "Category": "NGO, Business",
    "Areas of Expertise": "Economics, Environment and Sustainability, Energy, Technology, Business, Cities, Urbanisation, Future Tech",
    "Email": "For media requests: <hello@juccce.org>",
    "Phone/Twitter/Website": "(also search for Peggy Liu speaker profile) http://www.juccce.org/peggyliu",
    "Location/Notes": "Shanghai, Beijing, US, UK, int'l",
    "Languages Spoken": ""
  },
  {
    "Name": "Joyce Ling",
    "Title + Institution or Affiliations": "VP of Strategy, Publicis.Sapient",
    "Category": "business/advertising",
    "Areas of Expertise": "China digital, Chinese consumers, fashion, luxury retail, omnichannel commerce, consumer trends, professional women in China",
    "Email": "joyce.ling@publicis.sapient.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Shanghai, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Kochling",
    "Title + Institution or Affiliations": "Managing Principal, Shanghai Blossom; Co-Founder Women's Exective Network (WEN) Shanghai",
    "Category": "Research / Business",
    "Areas of Expertise": "Ethnographer, trendcaster, strategist. Focus on China cultural and commercial insight/foresight to drive transformative growth. Separately, work with range of NGOs to advance professional women to board level.",
    "Email": "sarah.kochling@blossom-consultancy.com",
    "Phone/Twitter/Website": 13621798478,
    "Location/Notes": "Shanghai, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah O'Meara",
    "Title + Institution or Affiliations": "Sixth Tone, Managing Editor",
    "Category": "Journalist",
    "Areas of Expertise": "Current affairs",
    "Email": "skmomeara@gmail.com",
    "Phone/Twitter/Website": 18601799302,
    "Location/Notes": "Shanghai, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Crystyl Mo",
    "Title + Institution or Affiliations": "Academy Chair, China & Korea, World's 50 Best Restaurants; Partner & Strategic Advisor, Bon App; Holistic Coach",
    "Category": "Food/Technology/Wellness",
    "Areas of Expertise": "Food and Restaurants, Shanghai F&B, Apps and Start-Ups, Holistic Health and Functional Medicine, former China Correspondent",
    "Email": "c@crystyl.com",
    "Phone/Twitter/Website": "www.crystyl.com",
    "Location/Notes": "Shanghai/US",
    "Languages Spoken": ""
  },
  {
    "Name": "Naomi Wu",
    "Title + Institution or Affiliations": "Maker/Hardware enthusiast",
    "Category": "Tech",
    "Areas of Expertise": "Maker movement in China, Shenzhen hardware culture and markets, Open Source, 3D printing.",
    "Email": "media@sexycyborg.net",
    "Phone/Twitter/Website": "@realsexycyborg",
    "Location/Notes": "Shenzhen, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Zhang Xuemei",
    "Title + Institution or Affiliations": "Aide et Action; Sichuan Academy of Social Science",
    "Category": "NGO, academic",
    "Areas of Expertise": "Women's literacy & health; civil society; sociology",
    "Email": "Zhang.xuemei@aea-sea.org <-- doesn't work (March 6, 2017)",
    "Phone/Twitter/Website": "(86) 136883-94161",
    "Location/Notes": "Sichuan, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Selina Ho",
    "Title + Institution or Affiliations": "Assistant Professor, Lee Kuan Yew School of Public Policy, National University of Singapore",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics and foreign policy, China-India relations, China-Southeast Asia relations, Water issues in China, infrastructure projects",
    "Email": "selina.ho@nus.edu.sg,",
    "Phone/Twitter/Website": "http://lkyspp.nus.edu.sg/our-people/our-faculty/faculty-profile/selina-ho",
    "Location/Notes": "Singapore",
    "Languages Spoken": ""
  },
  {
    "Name": "Sally Lean (M.Ed)",
    "Title + Institution or Affiliations": "Director of World Languages, Singapore American School",
    "Category": "",
    "Areas of Expertise": "Chinese language teaching & learning; Chinese immersion; Chinese & international school education",
    "Email": "sally.lean@gmail.com",
    "Phone/Twitter/Website": "Skype: +61-280068022 / Twitter: @ChinaSally93",
    "Location/Notes": "Singapore / Beijing / Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Ximena Lemoine",
    "Title + Institution or Affiliations": "PhD Candidate, Washington University in St. Louis",
    "Category": "Academic",
    "Areas of Expertise": "Archaeology of China, neolithic Northern China, Inner Mongolia, plant and animal domestication, origins of agriculture, human-animal relationships, ancient and modern food security",
    "Email": "ximena.lemoine@wustl.edu",
    "Phone/Twitter/Website": "https://pages.wustl.edu/liu/people",
    "Location/Notes": "STL, Beijing, Chifeng",
    "Languages Spoken": ""
  },
  {
    "Name": "Lora Saalman",
    "Title + Institution or Affiliations": "SIPRI",
    "Category": "Scholar",
    "Areas of Expertise": "China, Korea",
    "Email": "",
    "Phone/Twitter/Website": "https://www.sipri.org/about/bios/dr-lora-saalman",
    "Location/Notes": "Stockholm, Sweden",
    "Languages Spoken": ""
  },
  {
    "Name": "Rebecka Eriksson",
    "Title + Institution or Affiliations": "PhD, Lecturer in Chinese/Modern Chinese Literature, Gothenburg University",
    "Category": "Academic",
    "Areas of Expertise": "Modern Chinese literature, early Chinese cinema, modern Chinese drama",
    "Email": "rebecka.vikollektivet@gmail.com",
    "Phone/Twitter/Website": "@gravtigern",
    "Location/Notes": "Stockholm, Sweden",
    "Languages Spoken": ""
  },
  {
    "Name": "Ceren Ergenc",
    "Title + Institution or Affiliations": "Associate Professor in China Studies, Xi'an Jiaotong-Liverpool University",
    "Category": "Academic",
    "Areas of Expertise": "China, local politics, political participation, public policy, urban politics, comparative politics (India), Belt & Road Initative, China-Turkey relations",
    "Email": "Ceren.Ergenc@xjtlu.edu.cn",
    "Phone/Twitter/Website": "https://twitter.com/CerenJilan",
    "Location/Notes": "Suzhou, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Nicole Talmacs",
    "Title + Institution or Affiliations": "Lecturer in Communication and Media Studies, Xi'an Jiaotong-Liverpool University, China",
    "Category": "Academic",
    "Areas of Expertise": "Chinese cinema and media studies",
    "Email": "nicole.talmacs@xjtlu.edu.cn",
    "Phone/Twitter/Website": "+8613776074873",
    "Location/Notes": "Suzhou, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Yik Chan Chin",
    "Title + Institution or Affiliations": "Lecturer in Media and Communication studies, Xi'an Jiaotong-Liverpoll University",
    "Category": "Academic",
    "Areas of Expertise": "China, tech, internet, censorship, communication. media",
    "Email": "yik-chan.chin@xijtlu.edu.cn",
    "Phone/Twitter/Website": "https://www.researchgate.net/profile/Yik_Chan_Chin  @YikChanChin",
    "Location/Notes": "Suzhou, China",
    "Languages Spoken": ""
  },
  {
    "Name": "Loredana Cesarino",
    "Title + Institution or Affiliations": "Lecturer, Xi'an Jiaotong - Liverpool University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese history, Chinese classical literature",
    "Email": "loredana.cesarino@xjtlu.edu.cn",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Suzhou, PRC",
    "Languages Spoken": ""
  },
  {
    "Name": "Carolyn Cartier",
    "Title + Institution or Affiliations": "Professor, University of Technology Sydney",
    "Category": "",
    "Areas of Expertise": "human geography and China studies",
    "Email": "Carolyn.Cartier@uts.edu.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Sydney",
    "Languages Spoken": ""
  },
  {
    "Name": "Luise Guest",
    "Title + Institution or Affiliations": "Director of Research, White Rabbit Collection of Chinese Contemporary Art",
    "Category": "Contemporary Art",
    "Areas of Expertise": "Chinese Contemporary Art, Women artists in China",
    "Email": "lguest@whiterabbitcollection.org",
    "Phone/Twitter/Website": "@LuiseGuest",
    "Location/Notes": "Sydney",
    "Languages Spoken": ""
  },
  {
    "Name": "Madeleine O'Dea",
    "Title + Institution or Affiliations": "Independent writer",
    "Category": "Media",
    "Areas of Expertise": "Chinese contemporary art and culture (30 year veteran covering China, author of The Phoenix Years, Art, Resistance and the Making of Modern China, Allen & Unwin, 2016; Pegasus Books, 2017)",
    "Email": "mmodea@hotmail.com",
    "Phone/Twitter/Website": "madeleineodea.com",
    "Location/Notes": "Sydney and Beijing",
    "Languages Spoken": ""
  },
  {
    "Name": "Andrea Myles",
    "Title + Institution or Affiliations": "China Australia Millenial Project",
    "Category": "Incubator",
    "Areas of Expertise": "China-Australia relations",
    "Email": "andrea@australiachina.org",
    "Phone/Twitter/Website": "https://twitter.com/BeijingBetty",
    "Location/Notes": "Sydney, Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Elena Collinson",
    "Title + Institution or Affiliations": "Senior Project and Research Officer, Australia-China Relations Institute, University of Technology Sydney",
    "Category": "Think Tank, academic",
    "Areas of Expertise": "Australia-China relations, Australia-China-US relations, South China Sea",
    "Email": "elena.collinson@uts.edu.au",
    "Phone/Twitter/Website": "@elenacollinson",
    "Location/Notes": "Sydney, Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Hannah Bretherton",
    "Title + Institution or Affiliations": "Project Coordinator and Researcher",
    "Category": "Academic, not-for-profit",
    "Areas of Expertise": "Australia-China relations, South China Sea, Chinese investment in Australia, Australian foreign policy, Chinese politics",
    "Email": "hannahbretherton@live.com",
    "Phone/Twitter/Website": "@hcbretherton",
    "Location/Notes": "Sydney, Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Jacinta Keast",
    "Title + Institution or Affiliations": "Research Assistant at China Matters",
    "Category": "Think Tank",
    "Areas of Expertise": "Australia-China relations, Chinese international students in Australia, Chinese language media in Australia",
    "Email": "jacinta.keast@chinamatters.org.au.",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Sydney, Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Simone van Nieuwenhuizen",
    "Title + Institution or Affiliations": "Project and Research Support Officer, UTS Australia-China Relations Institute",
    "Category": "Academic, think tank",
    "Areas of Expertise": "Chinese foreign policy, politics, society. China-Middle East Relations. Co-author of 'China and the New Maoists' (Zed Books, 2016).",
    "Email": "simone.vannieu@gmail.com",
    "Phone/Twitter/Website": "simonevann.com; @simoneyvan",
    "Location/Notes": "Sydney, Australia",
    "Languages Spoken": ""
  },
  {
    "Name": "Chen-Yi Tu (Crystal)",
    "Title + Institution or Affiliations": "PhD candidate, Institute of Oceanography, National Taiwan Universty & core-team member, Open Knowledge Taiwan",
    "Category": "Academic",
    "Areas of Expertise": "Marine science and maritime affair in Asia-Pacific",
    "Email": "tu.chenyi@gmail.com",
    "Phone/Twitter/Website": "@crystaltu_",
    "Location/Notes": "Taipei",
    "Languages Spoken": ""
  },
  {
    "Name": "Danielle Cave",
    "Title + Institution or Affiliations": "PhD scholar, Coral Bell School for Asia Pacific Affairs, Australian National University + Google Policy Fellow Digital Asia Hub, Hong Kong",
    "Category": "Think tank",
    "Areas of Expertise": "Asian cyber & geopolitics, Australia-Asia relations, China in the Pacific Islands",
    "Email": "Danielle.Cave@anu.edu.au",
    "Phone/Twitter/Website": "@DaniellesCave and @TheManelLog",
    "Location/Notes": "Taipei (but often in Canberra, Hong Kong)",
    "Languages Spoken": ""
  },
  {
    "Name": "Chen Hui-ling",
    "Title + Institution or Affiliations": "Partner, Winkler Partners",
    "Category": "Law/Finance",
    "Areas of Expertise": "Data Privacy, Insurance, Corporate Law, Litigation",
    "Email": "hchen@winklerpartners.com",
    "Phone/Twitter/Website": "http://www.winklerpartners.com/?page_id=163",
    "Location/Notes": "Taipei, Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Christine Chen",
    "Title + Institution or Affiliations": "Partner, Winkler Partners",
    "Category": "Law/Finance",
    "Areas of Expertise": "Intellectual Property, Employment (Immigration) Law",
    "Email": "cchen@winklerpartners.com",
    "Phone/Twitter/Website": "http://www.winklerpartners.com/?page_id=608",
    "Location/Notes": "Taipei, Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Holly Harrington 韓荷麗",
    "Title + Institution or Affiliations": "General Manager, Taiwan Startup Stadium; Curator, Startup Digest Taipei",
    "Category": "Business/Tech",
    "Areas of Expertise": "Taiwan technology startup ecosystem",
    "Email": "holly@startupstadium.tw",
    "Phone/Twitter/Website": "@taispy www.startupstadium.tw",
    "Location/Notes": "Taipei, Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Iris Hsu",
    "Title + Institution or Affiliations": "China correspondent, Committee to Protect Journalists",
    "Category": "Media",
    "Areas of Expertise": "Politics, international affairs, Taiwan, China's press freedom",
    "Email": "ihsu@cpj.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Taipei, Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Shihui Yang",
    "Title + Institution or Affiliations": "Director, Wild at Heart Legal Defense Association",
    "Category": "Nonprofit/legal",
    "Areas of Expertise": "Environmental protection, civic particpation, indigenous people's rights",
    "Email": "syang@wildatheart.org.tw",
    "Phone/Twitter/Website": "http://en.wildatheart.org.tw/",
    "Location/Notes": "Taipei, Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Ketty W. Chen",
    "Title + Institution or Affiliations": "Vice President, Taiwan Foundation for Democracy, Board Memberm Cross-Strait Exchanges Prospect Foundation (遠景基金會)",
    "Category": "think tank",
    "Areas of Expertise": "Democratization, Comparative Politics, Regional Security, Civil Society, Social Movements, Taiwan",
    "Email": "ketty@tfd.org.tw or kettychen@gmail.com",
    "Phone/Twitter/Website": "@HelloKetty1998 886-2-2708-0100",
    "Location/Notes": "Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Tina Cheng",
    "Title + Institution or Affiliations": "Partner, Cherubic Ventures",
    "Category": "Business/Investing",
    "Areas of Expertise": "Asia technology and investments",
    "Email": "info@cherubicvc.com",
    "Phone/Twitter/Website": "www.cherubicvc.com",
    "Location/Notes": "Taiwan",
    "Languages Spoken": ""
  },
  {
    "Name": "Liisi Karindi",
    "Title + Institution or Affiliations": "Expert at Asian Research Centre in Estonia; Service Manager at Enterprise Estonia (Entrepreneurship Centre )",
    "Category": "Business",
    "Areas of Expertise": "China's social and economic policy",
    "Email": "Liisi.Karindi@eas.ee",
    "Phone/Twitter/Website": "http://auke.ee/en/specialist/liisi-karindi/",
    "Location/Notes": "Tallinn, Estonia",
    "Languages Spoken": ""
  },
  {
    "Name": "Cara Wallis",
    "Title + Institution or Affiliations": "Associate Professor, Department of Communication, Texas A&M University",
    "Category": "Research",
    "Areas of Expertise": "gender, class, migration, mobile media, social media, Internet culture, ethnography",
    "Email": "cwallis@tamu.edu",
    "Phone/Twitter/Website": "@carawallis",
    "Location/Notes": "Texas",
    "Languages Spoken": ""
  },
  {
    "Name": "Ingrid d'Hooghe",
    "Title + Institution or Affiliations": "Senior Research Asoociate, Clingendael Institute Think Tank",
    "Category": "",
    "Areas of Expertise": "China's foreign policy and diplomacy",
    "Email": "ihooghe@clingendael.nl",
    "Phone/Twitter/Website": "@ingriddhooghe",
    "Location/Notes": "The Netherlands",
    "Languages Spoken": ""
  },
  {
    "Name": "Caylan Ford",
    "Title + Institution or Affiliations": "Independent documentarian, scholar",
    "Category": "Academic, documentary",
    "Areas of Expertise": "Human rights, Chinese external perception management, Falun Gong, political violence",
    "Email": "caylanf@gwu.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Toronto",
    "Languages Spoken": ""
  },
  {
    "Name": "Elif Nur Duman",
    "Title + Institution or Affiliations": "University of Toronto, MA in Political Science in Collaboration with Asia-Pacific Studies",
    "Category": "Research",
    "Areas of Expertise": "China's Foreign Policy, SCO, China' s Policies towards West, One Belt One Road",
    "Email": "elifnur.duman@mail.utoronto.ca",
    "Phone/Twitter/Website": "@elifnur_duman",
    "Location/Notes": "Toronto",
    "Languages Spoken": ""
  },
  {
    "Name": "Lotus Ruan",
    "Title + Institution or Affiliations": "Research Fellow, The Citizen Lab, Univ of Toronto",
    "Category": "Research",
    "Areas of Expertise": "information control mechanism in China, censorship and surveillance, cybersecurity, social media, China politics",
    "Email": "lotusruan[at]citizenlab.ca",
    "Phone/Twitter/Website": "@lotus_ruan",
    "Location/Notes": "Toronto",
    "Languages Spoken": ""
  },
  {
    "Name": "Diana Fu",
    "Title + Institution or Affiliations": "Assistant Professor, University of Toronto,",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics, civil society, protest, contentious politics, labor",
    "Email": "diana.fu@utoronto.ca",
    "Phone/Twitter/Website": "www.dianafu.org, @dianafutweets",
    "Location/Notes": "Toronto, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret Boittin",
    "Title + Institution or Affiliations": "Assistant Professor, Osgoode Hall Law School, York University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese law and politics, law and society, gender",
    "Email": "MBoittin@osgoode.yorku.ca",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Toronto, ON, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Kutulakos",
    "Title + Institution or Affiliations": "Executive Director & COO, Canada China Business Council",
    "Category": "Business, industry, NGO",
    "Areas of Expertise": "Trade, investment, marketing",
    "Email": "sarah@ccbc.com",
    "Phone/Twitter/Website": "@Skutulakos",
    "Location/Notes": "Toronto,Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Astrid Nordin",
    "Title + Institution or Affiliations": "Lecturer, Lancaster University, Department of Politics, Philosophy and Religion and Associate Director, Institute for Social Futures",
    "Category": "Academic",
    "Areas of Expertise": "Chinese international relations, Chinese culture, Chinese academics, online culture",
    "Email": "a.nordin@lancaster.ac.uk",
    "Phone/Twitter/Website": "Tel 0044(0)1524592422",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Jane Duckett",
    "Title + Institution or Affiliations": "Professor/Edward Caird Chair of Politics, University of Glasgow",
    "Category": "",
    "Areas of Expertise": "Chinese politics, social policy, health policy",
    "Email": "Jane.Duckett@glasgow.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Jonna Nyman",
    "Title + Institution or Affiliations": "Leverhulme Early Career Fellow (Postdoc), University of Sheffield (UK)",
    "Category": "Academic",
    "Areas of Expertise": "International Relations, Chinese energy and climate policy, security politics",
    "Email": "j.nyman@sheffield.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Lilli Hoiting Li",
    "Title + Institution or Affiliations": "PhD Research Fellow",
    "Category": "Academic",
    "Areas of Expertise": "Hong Kong and Chinese Journalism",
    "Email": "lillihoiting@gmail.com",
    "Phone/Twitter/Website": "lillihoiting.com",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Linda Pittwood",
    "Title + Institution or Affiliations": "PhD candidate Critical Theory and Cultural Studies, Co-editor wagic.org",
    "Category": "Academic",
    "Areas of Expertise": "Cultural studies, contemporary Chinese art, gender and feminism",
    "Email": "ajxlp@nottingham.ac.uk",
    "Phone/Twitter/Website": "Lindapittwood@hotmail.com",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Luisetta Mudie",
    "Title + Institution or Affiliations": "Chinese-English translator, former China correspondent",
    "Category": "Media, translation",
    "Areas of Expertise": "Chinese language. Chinese-English translation. Specialisms: contemporary literature (inc. poetry). Chinese media and social media. Documentary film.",
    "Email": "luisetta.mudie@gmail.com",
    "Phone/Twitter/Website": "@dreamburo",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Maria Rosaria Coduti",
    "Title + Institution or Affiliations": "PhD Candidate at SEAS, University of Sheffield",
    "Category": "Academic",
    "Areas of Expertise": "North Korea Analyst, Korea Peninsula studies, East Asian international relations and security, China's foreign policy, role theory applyed to the study of East Asian States' politics",
    "Email": "mariarosaria.coduti@studio.unibo.it",
    "Phone/Twitter/Website": "phone:+393455963495 @MariaCoduti",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Mei Xue",
    "Title + Institution or Affiliations": "PhD Candidate, Durham University, Durham,UK",
    "Category": "Academic",
    "Areas of Expertise": "Anthropology, Chinese Culture, Buddhism, Tibetan Buddhism (Jonang sect), Religious Art, Chinese Ancient Philosophy, International Relation",
    "Email": "mei.xue@durham.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Monica Merlin",
    "Title + Institution or Affiliations": "Lecturer, Arts of China, Christie's Education (University of Glasgow)",
    "Category": "Academic",
    "Areas of Expertise": "Chinese history of art and visual culture, women artists, gender and feminism",
    "Email": "merlinmonica@yahoo.it",
    "Phone/Twitter/Website": "@mmomica",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Winnie King",
    "Title + Institution or Affiliations": "Teaching Fellow, University of Bristol",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics, cross-strait relations, Chinese finance, China-EU relations",
    "Email": "winnie.king@bristol.ac.uk",
    "Phone/Twitter/Website": "@DrWinnieKing",
    "Location/Notes": "UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Irina Fedorenko",
    "Title + Institution or Affiliations": "PhD Candidate, University of Oxford",
    "Category": "Academic",
    "Areas of Expertise": "Civil Society, NGOs, social movements, environmentalism, environmental policy, air pollution, climate change, biodiversity, policy making, youth, student activism",
    "Email": "irina.fedorenko@gtc.ox.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "UK, Oxford",
    "Languages Spoken": ""
  },
  {
    "Name": "Alanna Krolikowski",
    "Title + Institution or Affiliations": "Princeton-Harvard China Center",
    "Category": "Academic",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "@AK_Alanna",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Ali Szalwinski",
    "Title + Institution or Affiliations": "Director of the Political and Security Affairs program, The National Bureau of Asian Research",
    "Category": "Think tank",
    "Areas of Expertise": "U.S.-China political and security relations",
    "Email": "aszalwinski@nbr.org",
    "Phone/Twitter/Website": "@aliszali",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Amy Chang",
    "Title + Institution or Affiliations": "Harvard Belfer Center, Cyber Security Project",
    "Category": "Policy, think tank, academic",
    "Areas of Expertise": "U.S.-China, cybersecurity, Chinese foreign policy, Chinese military and security",
    "Email": "",
    "Phone/Twitter/Website": "@quelquefois",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Bonnie Glaser",
    "Title + Institution or Affiliations": "Director, China Power Project, CSIS",
    "Category": "Think tank",
    "Areas of Expertise": "Taiwan, South China Sea, Chinese foreign and security policy, US-China relations",
    "Email": "bglaser@csis.org",
    "Phone/Twitter/Website": "https://www.csis.org/people/bonnie-s-glaser  (202) 775-3103 OR: 202.775.3242",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Cai Meina",
    "Title + Institution or Affiliations": "Professor, Univ of Connecticut",
    "Category": "Academic",
    "Areas of Expertise": "Asian studies, interdiscriplinary",
    "Email": "Meina.Cai@uconn.edu",
    "Phone/Twitter/Website": "http://asianamerican.uconn.edu/faculty/core/meina/",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Caitlin Campbell",
    "Title + Institution or Affiliations": "Senior Policy Analyst, U.S.-China Economic and Security Review Commission",
    "Category": "Research",
    "Areas of Expertise": "Chinese foreign policy and national security",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Carla Freeman, PhD",
    "Title + Institution or Affiliations": "Johns Hopkins SAIS",
    "Category": "Academic",
    "Areas of Expertise": "",
    "Email": "cfreeman5@jhu.edu",
    "Phone/Twitter/Website": "202-663-5890  http://www.fpi.sais-jhu.edu/",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Carla P. Freeman",
    "Title + Institution or Affiliations": "Associate Res. Professor, Johns Hopkins SAIS",
    "Category": "academic",
    "Areas of Expertise": "China international governance; environment; security",
    "Email": "cfreeman5@jhu.edu",
    "Phone/Twitter/Website": "@sinocentric; 202-663-5890",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Chichi Peng",
    "Title + Institution or Affiliations": "PhD student in the University of California, Santa Barbara/ President of North American Taiwan Studies Association",
    "Category": "academic",
    "Areas of Expertise": "Taiwan history, modern Chinese history, Sino-US relations, Asian American history",
    "Email": "chitingpeng@gmail.com",
    "Phone/Twitter/Website": "@chichi_peng",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Christina Yuen Zi Chung",
    "Title + Institution or Affiliations": "PhD student, Gender, Women, and Sexuality Studies, University of Washington",
    "Category": "Academic\nArts & Culture",
    "Areas of Expertise": "Hong Kong art, Chinese contemporary art, feminist studies",
    "Email": "cyuenzi@uw.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Cristina Garafola",
    "Title + Institution or Affiliations": "",
    "Category": "think tank",
    "Areas of Expertise": "Chinese security, Chinese miliary, Myanmar",
    "Email": "garafola@rand.org",
    "Phone/Twitter/Website": "@CLGarafola",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Jean Oi",
    "Title + Institution or Affiliations": "Professor, Stanford University",
    "Category": "Academic",
    "Areas of Expertise": "China political science",
    "Email": "joi@stanford.edu",
    "Phone/Twitter/Website": "https://politicalscience.stanford.edu/people/jean-c-oi",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Jennifer Pan",
    "Title + Institution or Affiliations": "Assistant Professor, Stanford University",
    "Category": "Academic",
    "Areas of Expertise": "China, political science, computational social science",
    "Email": "jp1@stanford.edu",
    "Phone/Twitter/Website": "http://jenpan.com/",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Teets",
    "Title + Institution or Affiliations": "Associate Professor, Middlebury College",
    "Category": "Academic",
    "Areas of Expertise": "China political science (specialize in civil society and local government innovation)",
    "Email": "jteets@middlebury.edu",
    "Phone/Twitter/Website": "http://www.middlebury.edu/academics/ps/faculty/node/25661",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Kay Ann Johnson",
    "Title + Institution or Affiliations": "Hampshire College, Prof., Social Sciences",
    "Category": "Academic",
    "Areas of Expertise": "Women, population policy",
    "Email": "kjohnson@hampshire.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Kerry E. Ratigan",
    "Title + Institution or Affiliations": "Assistant Professor, Amherst College",
    "Category": "Academic",
    "Areas of Expertise": "China political science",
    "Email": "kratigan@amherst.edu",
    "Phone/Twitter/Website": "https://www.amherst.edu/people/facstaff/kratigan 413-542-5610",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Ling Chen",
    "Title + Institution or Affiliations": "Assistant Professor, Johns Hopkins SAIS",
    "Category": "Academic",
    "Areas of Expertise": "Chinese political economy",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Maggie Greene",
    "Title + Institution or Affiliations": "Assistant Professor, Montana State University",
    "Category": "academic",
    "Areas of Expertise": "modern Chinese history, popular culture, digital culture",
    "Email": "margaret.greene1@montana.edu",
    "Phone/Twitter/Website": "@mcgreenesd ; www.mcgreene.org",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Maura Cunningham",
    "Title + Institution or Affiliations": "Digital Media Manager, Association for Asian Studies; freelance writer",
    "Category": "academia, media",
    "Areas of Expertise": "feminism, pop culture, modern history",
    "Email": "mauraelizabeth.cunningham@gmail.com",
    "Phone/Twitter/Website": "@mauracunningham",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Melanie Manion",
    "Title + Institution or Affiliations": "Duke Univ., Poli Sci, Prof",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics",
    "Email": "melanie.manion@duke.edu",
    "Phone/Twitter/Website": "https://polisci.duke.edu/people/melanie-manion  919.660.5951",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Nicole Smolinske",
    "Title + Institution or Affiliations": "Fellow, The National Bureau of Asian Research",
    "Category": "Think Tank",
    "Areas of Expertise": "Southeast Asia  (ASEAN, Thailand, Myanmar and the Philippines) /migration/labor and human rights",
    "Email": "nsmolinske@nbr.org",
    "Phone/Twitter/Website": "@nsmolinske",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Oriana Skyler Mastro",
    "Title + Institution or Affiliations": "Georgetown",
    "Category": "Academic",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "@osmastro",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Shanthi Kalathil",
    "Title + Institution or Affiliations": "Director, International Forum for Democratic Studies, National Endowment for Democracy",
    "Category": "Non-profit",
    "Areas of Expertise": "Chinese soft power, int'l development, Internet, projection of influence",
    "Email": "shanthik@ned.org",
    "Phone/Twitter/Website": "@shanthikalathil",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Shazeda Ahmed",
    "Title + Institution or Affiliations": "Ph.D. Student, UC Berkeley School of Information",
    "Category": "Academic",
    "Areas of Expertise": "Chinese information technology and cybersecurity policy, social credit system, cyber sovereignty, Internet governance",
    "Email": "shazeda@ischool.berkeley.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Siodhbhra Parkin",
    "Title + Institution or Affiliations": "Yale Law School",
    "Category": "Fellow",
    "Areas of Expertise": "Chinese domestic law and policy; LGBTQ rights; women's rights",
    "Email": "siodhbhra.parkin@yale.edu",
    "Phone/Twitter/Website": "@harvardian",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Sophie Richardson",
    "Title + Institution or Affiliations": "China director, Human Rights Watch HRW",
    "Category": "NGO",
    "Areas of Expertise": "China human rights",
    "Email": "richars@hrw.org",
    "Phone/Twitter/Website": "https://twitter.com/SophieHRW",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Victoria Tin-bor Hui",
    "Title + Institution or Affiliations": "University of Notre Dame",
    "Category": "Academic",
    "Areas of Expertise": "China’s expansion and contraction in history, Chinese citizenship in pre-modern times, HK’s Umbrella Movement, the One Country, Two Systems Model",
    "Email": "thui@nd.edu",
    "Phone/Twitter/Website": "574-631-7570",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Yaqiu Wang",
    "Title + Institution or Affiliations": "Researcher, Committee to Protect Journalists",
    "Category": "NGO",
    "Areas of Expertise": "press freedom, censorship, human rights",
    "Email": "wangyaqiu@gmail.com",
    "Phone/Twitter/Website": "@yaqiu",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Yaxue Cao",
    "Title + Institution or Affiliations": "Founder and editor of Chinachange.org",
    "Category": "Media/Activist",
    "Areas of Expertise": "Chinese society, rights, politics, press freedom",
    "Email": "yaxuecao@gmail.com",
    "Phone/Twitter/Website": "chinachange.org",
    "Location/Notes": "US",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret (Maggie) K. Lewis",
    "Title + Institution or Affiliations": "Professor, Seton Hall University, School of Law; CFR Term Member; PIP Fellow II, Fulbright Senior Scholar (Taiwan)",
    "Category": "Academic",
    "Areas of Expertise": "Chinese law, criminal justice, human rights, law of the sea, Taiwan",
    "Email": "margaret.lewis@shu.edu",
    "Phone/Twitter/Website": "http://law.shu.edu/faculty/full-time/margaret-lewis.cfm",
    "Location/Notes": "US, Taiwan (August 2017- June 2018)",
    "Languages Spoken": ""
  },
  {
    "Name": "Nong Hong",
    "Title + Institution or Affiliations": "Executive Director and Senior Fellow at the Institute for China-America Studies, concurrent fellow with the National Institute for South China Sea Studies, China Institute and University of Alberta, Canada",
    "Category": "Think Tank/Law",
    "Areas of Expertise": "International law, comparative politics, ocean governance in East Asia, law of the sea, international security, international dispute settlement and conflict resolution",
    "Email": "hongnong@chinaus-icas.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US, Washington D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Sylvia Zhang",
    "Title + Institution or Affiliations": "Fellow at the Institure for China-America Studies",
    "Category": "Think Tank",
    "Areas of Expertise": "China's maritime history, maritime policy, and international law concerning terrirotial aquisition",
    "Email": "zhangxinyue@chinaus-icas.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US, Washington D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Xin Hu",
    "Title + Institution or Affiliations": "Adjunct Fellow at the Institute for China-America Studies",
    "Category": "Think Tank",
    "Areas of Expertise": "China's maritime policy and China-ASEAN relations",
    "Email": "huxin@chinaus-icas.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "US, Washington D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Audrye Wong",
    "Title + Institution or Affiliations": "PhD Candidate, Woodrow Wilson School of Public and International Affairs, Princeton University",
    "Category": "Academic, Think tank",
    "Areas of Expertise": "China's economic statecraft, China's overseas influence, Belt and Road Initiative, China's foreign relations, China-SE Asia relations, China-US relations, Northeast Asia alliances",
    "Email": "audryewong@gmail.com",
    "Phone/Twitter/Website": "www.audryewong.com",
    "Location/Notes": "USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Elsa Kania",
    "Title + Institution or Affiliations": "Adjunct fellow at the Center for a New American Security",
    "Category": "",
    "Areas of Expertise": "Chinese defense innovation in emerging technologies",
    "Email": "",
    "Phone/Twitter/Website": "https://www.cnas.org/people/elsa-b-kania",
    "Location/Notes": "USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Shiran Shen",
    "Title + Institution or Affiliations": "Ph.D. (poli sci) and M.S. (eneng) candidate, Stanford University",
    "Category": "academic",
    "Areas of Expertise": "environmental politics and policy, air pollution, climate change",
    "Email": "srshen@stanford.edu",
    "Phone/Twitter/Website": "@ShiranShen  http://shiranshen.com",
    "Location/Notes": "USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Susan Jakes",
    "Title + Institution or Affiliations": "Editor, ChinaFile",
    "Category": "Media",
    "Areas of Expertise": "China - general",
    "Email": "susan.jakes@chinafile.com",
    "Phone/Twitter/Website": "@susanjakes",
    "Location/Notes": "USA",
    "Languages Spoken": ""
  },
  {
    "Name": "Sheena Chestnut Greitens",
    "Title + Institution or Affiliations": "Assistant Professor, University of Missouri and Non-Resident Senior Fellow, Brookings",
    "Category": "Research / Academic",
    "Areas of Expertise": "China internal security, human rights, policing, foreign policy",
    "Email": "greitenss@missouri.edu",
    "Phone/Twitter/Website": "@SheenaGreitens",
    "Location/Notes": "USA (Missouri)",
    "Languages Spoken": ""
  },
  {
    "Name": "Clara Gillispie",
    "Title + Institution or Affiliations": "Senior Director for Trade, Economic, and Energy Affairs at the National Bureau of Asian Research",
    "Category": "Think Tank",
    "Areas of Expertise": "trade, economic, energy, environment, innovation, IP; US-China relations; China-Asia relations; China-Russia relations",
    "Email": "cgillispie@nbr.org",
    "Phone/Twitter/Website": "@claireuh\nhttp://nbr.org/About/team.aspx?id=63dc43eb-526b-4910-935f-5bace9b99841",
    "Location/Notes": "USA (Washington, D.C.)",
    "Languages Spoken": ""
  },
  {
    "Name": "Amy Hanser",
    "Title + Institution or Affiliations": "Associate Professor, Sociology, University of British Columbia",
    "Category": "Academic",
    "Areas of Expertise": "Consumption and Inequality in China",
    "Email": "hanser@interchange.ubc.ca",
    "Phone/Twitter/Website": "https://soci.ubc.ca/persons/amy-hanser/",
    "Location/Notes": "Vancouver, BC Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Jie Yang",
    "Title + Institution or Affiliations": "Associate Professor of Anthropology, Simon Fraser University",
    "Category": "Academic",
    "Areas of Expertise": "Language and power, media, unemployment and urban poverty, mental health",
    "Email": "jie_yang@sfu.ca",
    "Phone/Twitter/Website": "778-782-4297",
    "Location/Notes": "Vancouver, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Josephine Chiu-Duke",
    "Title + Institution or Affiliations": "Co-director, Center for Chinese Research, UBC",
    "Category": "Academic",
    "Areas of Expertise": "Traditional and modern Chinese social history",
    "Email": "chiuduke(at)mail.ubc.ca",
    "Phone/Twitter/Website": "604 822 5732",
    "Location/Notes": "Vancouver, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Agnes Schick-Chen",
    "Title + Institution or Affiliations": "Professor of Sinology, Department of East Asian Studies, University of Vienna",
    "Category": "Academic",
    "Areas of Expertise": "Taiwan; China's political development; China's legal development",
    "Email": "agnes.schick-chen@univie.ac.at",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Vienna",
    "Languages Spoken": ""
  },
  {
    "Name": "Ling LI",
    "Title + Institution or Affiliations": "Chinese lawyer & Adjunct Professor,  University of Vienna, Department of East Asian Studies; Non-resident Fellow, NYU's US-Asia Law Institute",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Communist Party; legal development in a paty-state; corruption",
    "Email": "",
    "Phone/Twitter/Website": "Edinburgh",
    "Location/Notes": "Vienna",
    "Languages Spoken": ""
  },
  {
    "Name": "Julia Hartmann",
    "Title + Institution or Affiliations": "Curator and PhD student at Academy of Fine Arts, Vienna",
    "Category": "Academic/Curatorial",
    "Areas of Expertise": "Contemporary Chinese Art; all-female group exhibitions and female-led/queer-fem. movements in China (PhD focus); gender studies; exhibition history; feminist curating",
    "Email": "julia_hartmann@msn.com",
    "Phone/Twitter/Website": "@julesandart www.juliahartmann.com",
    "Location/Notes": "Vienna",
    "Languages Spoken": ""
  },
  {
    "Name": "Rebecca Catching",
    "Title + Institution or Affiliations": "Independent contemporary art curator",
    "Category": "Contemporary art and culture",
    "Areas of Expertise": "Poshumanism in contemporary East Asian art practice, social practice (art), contemporary Chinese art, Chinese museum system",
    "Email": "rebeccacatching@gmail.com",
    "Phone/Twitter/Website": 18616807704,
    "Location/Notes": "w",
    "Languages Spoken": ""
  },
  {
    "Name": "Kailing Xie",
    "Title + Institution or Affiliations": "Teaching fellow, Politics and International Studies, Warwick",
    "Category": "Academic",
    "Areas of Expertise": "Gender, social justice, identity politics, and race and nationalism in contemporary China",
    "Email": "Kailing.Xie@warwick.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Warwick, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Charlene Barshefsky",
    "Title + Institution or Affiliations": "WilmerHale",
    "Category": "",
    "Areas of Expertise": "trade",
    "Email": "charlene.barshefsky@wilmerhale.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Washington",
    "Languages Spoken": ""
  },
  {
    "Name": "Erica Downs",
    "Title + Institution or Affiliations": "China Studies division of CNA, a federally-funded research center",
    "Category": "Academic",
    "Areas of Expertise": "energy policy",
    "Email": "erica.s.downs@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Washington",
    "Languages Spoken": ""
  },
  {
    "Name": "Claire Reade",
    "Title + Institution or Affiliations": "CSIS, Senior Associate, Arnold & Porter Kaye Scholer Senior Counsel",
    "Category": "think tank, law",
    "Areas of Expertise": "China trade and investment",
    "Email": "claire.reade@apks.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Washington DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Elizabeth Freund LARUS",
    "Title + Institution or Affiliations": "Ph.D., Professor, University of Mary Washington; President, E Larus Consulting",
    "Category": "Academic, Consultant",
    "Areas of Expertise": "Chinese politics, cross-Strait relations, Taiwan's foreign policy, maritime security issues in the Asia-Pacific; US policy in the Asia-Pacific",
    "Email": "elarus@umw.edu, elarus@elarusconsulting.com",
    "Phone/Twitter/Website": "http://cas.umw.edu/polisci/about-the-faculty/elizabeth-freund-larus/ ,   elarusconsulting.com",
    "Location/Notes": "Washington DC area",
    "Languages Spoken": ""
  },
  {
    "Name": "Anne Sherman",
    "Title + Institution or Affiliations": "State Department-China Desk. Carnegie-Tsinghua Center",
    "Category": "government/think tank",
    "Areas of Expertise": "US-China relations",
    "Email": "annensherman@gmail.com",
    "Phone/Twitter/Website": "@annesher07",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Felicia Pullam",
    "Title + Institution or Affiliations": "Consultant; Former Obama Administration official at the U.S. Dept. of Commerce",
    "Category": "business / government",
    "Areas of Expertise": "Chinese foreign direct investment (FDI); corporate social responsibility; export promotion; U.S. state-level engagement; Olympic advocacy campaigns",
    "Email": "fpullam@gmail.com",
    "Phone/Twitter/Website": "@fpullam",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Larus",
    "Title + Institution or Affiliations": "Former H. Clinton foreign policy team and NSC and State Department on China.",
    "Category": "Government",
    "Areas of Expertise": "Foreign policy",
    "Email": "",
    "Phone/Twitter/Website": "@rosenbergerlm",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Louisa Greve",
    "Title + Institution or Affiliations": "Director of External Affairs, Uyghur Human Rights Project",
    "Category": "Non-Profit",
    "Areas of Expertise": "Human rights, civil society, ethnic minority policy, religion, Uyghurs",
    "Email": "LGreve@uhrp.org",
    "Phone/Twitter/Website": "@LouisaCGreve",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret Pearson",
    "Title + Institution or Affiliations": "Professor, Department of Government and Politics, University of Maryland",
    "Category": "Academic",
    "Areas of Expertise": "China's domestic political economy and institutions and Chinese foreign policy",
    "Email": "mpearson@umd.edu",
    "Phone/Twitter/Website": "https://gvpt.umd.edu/facultyprofile/Pearson/Margaret",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Samm Sacks",
    "Title + Institution or Affiliations": "Senior Fellow, Technology Policy Program, CSIS",
    "Category": "",
    "Areas of Expertise": "China innovation, cybersecurity, and emerging information and communication technology (ICT) policies",
    "Email": "SSacks@csis.org",
    "Phone/Twitter/Website": "https://www.csis.org/people/samm-sacks",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Sieren Ernst",
    "Title + Institution or Affiliations": "Environmental Consultant, CEO Co-Founder Climate Cost Project",
    "Category": "Non-profit/reserach",
    "Areas of Expertise": "China environment, emissions, climate change",
    "Email": "sernst@ethicsenvironment.com",
    "Phone/Twitter/Website": "http://www.theenergycollective.com/profile/397046",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Susan Lawrence",
    "Title + Institution or Affiliations": "Specialist in Asian Affairs, Congressional Research Service, Library of Congress",
    "Category": "Govt (Legislative Branch)",
    "Areas of Expertise": "Chinese politics and foreign policy",
    "Email": "slawrence@crs.loc.gov",
    "Phone/Twitter/Website": "https://www.uschina.org/susan-v-lawrence",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Tashi Rabgey, PhD",
    "Title + Institution or Affiliations": "Elliot School, GWU",
    "Category": "Researcher/NGO",
    "Areas of Expertise": "Tibet, PRC",
    "Email": "trabgey@email.gwu.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Tiffany Ma",
    "Title + Institution or Affiliations": "Senior Director, Bower Group Asia",
    "Category": "Think tank/NGO",
    "Areas of Expertise": "Cross-Strait relations, US-Taiwan relations, US-China relations, maritime security (South China Sea, Arctic)",
    "Email": "",
    "Phone/Twitter/Website": "@TiffanyMa2",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Zubayra Shamseden",
    "Title + Institution or Affiliations": "Chinese Outreach Coordinator, Uyghur Human Rights Project",
    "Category": "Nonprofit/research",
    "Areas of Expertise": "Xinjiang, human rights, religion",
    "Email": "zshams@uhrp.org",
    "Phone/Twitter/Website": "@UHRP_Chinese",
    "Location/Notes": "Washington, D.C.",
    "Languages Spoken": ""
  },
  {
    "Name": "Abigail Grace",
    "Title + Institution or Affiliations": "Berkman Center, Harvard University",
    "Category": "Think Tank",
    "Areas of Expertise": "U.S. strategic competition with China, Indo-Pacific strategy, Chinese approaches to multilateralism, Northeast Asia’s regional security architecture.",
    "Email": "agrace@cnas.org",
    "Phone/Twitter/Website": "@abigailcgrace",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Ashley Johnson",
    "Title + Institution or Affiliations": "Project Associate, The National Bureau of Asian Research",
    "Category": "Think Tank",
    "Areas of Expertise": "energy and climate policy; U.S.- Asia energy/trade relations; water issues in China, India, Bangladesh; climate change adaption and mitigation",
    "Email": "ajohnson@nbr.org",
    "Phone/Twitter/Website": "@ashjohnson812",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Jaime Horsley",
    "Title + Institution or Affiliations": "Lecturer of Law, Yale Law School; Senior Fellow, Paul Tsai China Center at Yale Law School",
    "Category": "Academic",
    "Areas of Expertise": "Open Government/Transparency; government accountability; public participation; administrative law",
    "Email": "jamie.horsley@yale.edu",
    "Phone/Twitter/Website": "https://law.yale.edu/jamie-p-horsley",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Jennifer Staats",
    "Title + Institution or Affiliations": "Director, China Program, Asia Center, United States Institute of Peace",
    "Category": "Think Tank",
    "Areas of Expertise": "China's Foreign Policy",
    "Email": "jstaats@usip.org",
    "Phone/Twitter/Website": "https://www.usip.org/people/jennifer-staats",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Joanna Lewis",
    "Title + Institution or Affiliations": "Associate Professor, Georgetown University",
    "Category": "Academic",
    "Areas of Expertise": "China energy; climate change; renewable energy industries, US-China energy and climate cooperation",
    "Email": "joanna.lewis@georgetown.edu",
    "Phone/Twitter/Website": "@JoannaILewis https://explore.georgetown.edu/people/jil9/",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Lindsey Ford",
    "Title + Institution or Affiliations": "Director for Asian Security, Asia Society Policy Institute",
    "Category": "Think Tank",
    "Areas of Expertise": "Asia-Pacific security affairs, multilateral summits, bilateral negotiations, foreign military assistance",
    "Email": "LFord@asiasociety.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Maeve Whelan-Wuest",
    "Title + Institution or Affiliations": "Researcher, Brookings Institution",
    "Category": "Think tank",
    "Areas of Expertise": "Taiwan politics and U.S.-Taiwan relations; cross-Strait relations; Hong Kong politics and political reform",
    "Email": "mwhelanwuest@brookings.edu",
    "Phone/Twitter/Website": "@maeveww",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Maeve Whelan-Wuest",
    "Title + Institution or Affiliations": "Former researcher, Brookings Institution",
    "Category": "Think tank",
    "Areas of Expertise": "Taiwan politics and U.S.-Taiwan relations; cross-Strait relations",
    "Email": "maeveww@gmail.com",
    "Phone/Twitter/Website": "@maeveww",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret Myers",
    "Title + Institution or Affiliations": "Program Director, Latin America and the World, Inter-American Dialogue",
    "Category": "Think tank",
    "Areas of Expertise": "China-Latin America relations, Chinese investment in Latin America",
    "Email": "mmyers@thedialogue.org",
    "Phone/Twitter/Website": "@MyersMargaret",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Oriana Mastro",
    "Title + Institution or Affiliations": "Assistant Professor, Security Studies, Edmund A. Walsh School of Foreign Service, Georgetown University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese Media",
    "Email": "om116@georgetown.edu",
    "Phone/Twitter/Website": "https://twitter.com/osmastro?lang=en",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Tashi Rabgey",
    "Title + Institution or Affiliations": "Research Professor, International Affairs, The Elliot School of International Affairs at George Washington University",
    "Category": "Academic",
    "Areas of Expertise": "Multinationalism, regional autonomy, Chinese constitutionalism",
    "Email": "tyrz42@gmail.com",
    "Phone/Twitter/Website": "https://elliott.gwu.edu/rabgey",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Wendy Cutler",
    "Title + Institution or Affiliations": "Vice President, Asia Society Policy Institute",
    "Category": "Think tank",
    "Areas of Expertise": "US-China trade relations, APEC, WTO",
    "Email": "wscutler (at) asiasociety.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Yun SUN",
    "Title + Institution or Affiliations": "Senior Associate with the East Asia Program at the Stimson Center.",
    "Category": "Think tank",
    "Areas of Expertise": "China foreign policy.",
    "Email": "ysun@stimson.org",
    "Phone/Twitter/Website": "https://www.stimson.org/users/3326 (202) 478-3434",
    "Location/Notes": "Washington, DC",
    "Languages Spoken": ""
  },
  {
    "Name": "Hongying Wang",
    "Title + Institution or Affiliations": "Associate Professor, Political Science and Balsillie School of International Affairs, University of Waterloo",
    "Category": "Academic",
    "Areas of Expertise": "China and Global Governance, Chinese Foreign Policy",
    "Email": "h279wang@uwaterloo.ca",
    "Phone/Twitter/Website": "https://uwaterloo.ca/political-science/people-profiles/hongying-wang",
    "Location/Notes": "Waterloo, ON, Canada",
    "Languages Spoken": ""
  },
  {
    "Name": "Gerda Wielander",
    "Title + Institution or Affiliations": "Professor, University of Westminster",
    "Category": "Academic",
    "Areas of Expertise": "PRC generally with specific expertise in religion (Christianity)/spirituality and politics, happiness (both social sciences and cultural studies), political discourse.",
    "Email": "G.Wielander@westminster.ac.uk",
    "Phone/Twitter/Website": "@GerdaWielander; 0044 3506 9139",
    "Location/Notes": "Westminster, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Ying Miao",
    "Title + Institution or Affiliations": "Lecturer in China Studies, Xi'an Jiaotong-Liverpool University",
    "Category": "Academic",
    "Areas of Expertise": "Class & social stratification, development studies, comparative development between China and the UK",
    "Email": "ying.miao@xjtlu.edu.cn",
    "Phone/Twitter/Website": "",
    "Location/Notes": "Xian",
    "Languages Spoken": ""
  },
  {
    "Name": "Florence Mok",
    "Title + Institution or Affiliations": "PhD candidate, History Department, University of York",
    "Category": "Academic",
    "Areas of Expertise": "Colonialism, Political Culture, Identity, State-Society Relations and Policy Making in Hong Kong",
    "Email": "ywfm500@york.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "York, UK",
    "Languages Spoken": ""
  },
  {
    "Name": "Alice Miller",
    "Title + Institution or Affiliations": "China leadership monitor, Hoover Institution",
    "Category": "Academic",
    "Areas of Expertise": "China elite politics",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "An Xiao Mina",
    "Title + Institution or Affiliations": "Berkman Center, Harvard University",
    "Category": "tech, media",
    "Areas of Expertise": "social media, internet culture, censorship",
    "Email": "",
    "Phone/Twitter/Website": "@anxiaostudio",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Anne Henochowicz",
    "Title + Institution or Affiliations": "freelance translator, former Translations Editor at China Digital Times",
    "Category": "media",
    "Areas of Expertise": "internet culture, censorship, resistance discourse",
    "Email": "annemh@alumni.upenn.edu",
    "Phone/Twitter/Website": "@annemhdc",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Anne Thurston",
    "Title + Institution or Affiliations": "Professor, Johns Hopkins SAIS",
    "Category": "Academic",
    "Areas of Expertise": "Tibet, grassroots organizing, civil society, NGOs",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Annemieke van den Dool",
    "Title + Institution or Affiliations": "University of Amsterdam & Harvard Law School",
    "Category": "Academic",
    "Areas of Expertise": "Legislative politics, law, environment, food/agriculture",
    "Email": "avddool@gmail.com",
    "Phone/Twitter/Website": "@SinoEnvironMiek",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Aurora Bewicke",
    "Title + Institution or Affiliations": "China Program Director, International Bridges to Justice; Lawyer",
    "Category": "Non-profit/Legal",
    "Areas of Expertise": "Rule of Law, criminal justice, international law and human rights standards",
    "Email": "abewicke@ibj.org, abewicke@bewickelaw.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Beth Notar",
    "Title + Institution or Affiliations": "Associate Professor of Anthropology, Trinity College",
    "Category": "Academic",
    "Areas of Expertise": "Contemporary China; the relationship between representations in popular culture, tourism and transformations of place in southwest China.",
    "Email": "beth.notar@trincoll.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Bonny Lin",
    "Title + Institution or Affiliations": "RAND",
    "Category": "",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Carlotta Clivio",
    "Title + Institution or Affiliations": "PhD Candidate, Grantham Research Institute on Climate Change and the Environment, LSE",
    "Category": "Academic, Think tank",
    "Areas of Expertise": "China's climate diplomacy and environmental policy",
    "Email": "@carlottaclivio",
    "Phone/Twitter/Website": "http://www.lse.ac.uk/GranthamInstitute/profile/carlotta-clivio",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Cathy Barbash",
    "Title + Institution or Affiliations": "Independent producer, consultant",
    "Category": "Arts & Culture",
    "Areas of Expertise": "Cultural policy reform, cultural industry development-performing arts, cultural project creation and management, PR for cultural sector",
    "Email": "cbarbash@yahoo.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Cathy Silber",
    "Title + Institution or Affiliations": "Skidmore College",
    "Category": "Academic",
    "Areas of Expertise": "Asian, Chinese literature",
    "Email": "csilber@skidmore.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Charlene Chu",
    "Title + Institution or Affiliations": "prior Fitch, current Autonomous Research",
    "Category": "Academic",
    "Areas of Expertise": "China's economy (debt, credit bubble, etc.)",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Christina Lin",
    "Title + Institution or Affiliations": "Nonresident Fellow at the Center for Transatlantic Relations at SAIS-Johns Hopkins University. Research consultant for Jane's Chemical, Biological, Radiological, and Nuclear Intelligence Centre at IHS Markit.",
    "Category": "Academic/Media",
    "Areas of Expertise": "China-Middle East/Mediterranean relations",
    "Email": "",
    "Phone/Twitter/Website": "Clin27@jhu.edu \n202-663-5882\nhttp://transatlanticrelations.org/fellows/christina-lin/",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Christina Xu",
    "Title + Institution or Affiliations": "Ethnographer",
    "Category": "industry",
    "Areas of Expertise": "China, mobile, youth, subculture",
    "Email": "christina.k.xu@gmail.com",
    "Phone/Twitter/Website": "@xuhulk",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Deborah Brautigam",
    "Title + Institution or Affiliations": "Bernard L. Schwartz Professor of International Political Economy and Director of the International Development Program (IDEV), and the China Africa Research Initiative (CARI) at Johns Hopkins University’s School of Advanced International Studies (SAIS) in Washington, DC",
    "Category": "Academic/Research",
    "Areas of Expertise": "China in Africa, Chinese foreign aid and investment",
    "Email": "dbrautigam@jhu.edu",
    "Phone/Twitter/Website": "https://deborahbrautigam.com/ \nhttp://www.chinaafricarealstory.com/ \n@D_Brautigam",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Deborah Seligsohn",
    "Title + Institution or Affiliations": "University of California, San Diego",
    "Category": "academic",
    "Areas of Expertise": "Environment, energy, climate change, regulatory affairs in US, China, India",
    "Email": "djseligsohn@gmail.com>",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Elena Barabantseva",
    "Title + Institution or Affiliations": "Professor, University of Manchester",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics and IR; migration",
    "Email": "",
    "Phone/Twitter/Website": "https://www.research.manchester.ac.uk/portal/E.V.Barabantseva.html",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Elizabeth Remick",
    "Title + Institution or Affiliations": "Associate Professor of Political Science, Tufts University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics; local state-building",
    "Email": "elizabeth.remick@tufts.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Fiona Cunningham",
    "Title + Institution or Affiliations": "PhD Candidate in Political Science, Massachusetts Institute of Technology, Pre-Doctoral Fellow, Cyber Security Project, Belfer Center for Science and International Affairs, Harvard Kennedy School",
    "Category": "Academic",
    "Areas of Expertise": "Chinese foreign policy, military strategy",
    "Email": "fcunning@mit.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Frances Kitt",
    "Title + Institution or Affiliations": "Researcher, East Asia & International Security, Lowy Institute",
    "Category": "Think tank",
    "Areas of Expertise": "China, Taiwan, Hong Kong, North Korea, South Korea",
    "Email": "fkitt@lowyinstitute.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Hannah Wurf",
    "Title + Institution or Affiliations": "researcher, Lowy Institute",
    "Category": "Think tank",
    "Areas of Expertise": "G20, economic governance, not China specialist",
    "Email": "HWurf@lowyinstitute.org",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Hardina Ohlendorf",
    "Title + Institution or Affiliations": "Research Associate, Centre of Taiwan Studies, SOAS",
    "Category": "Academic",
    "Areas of Expertise": "",
    "Email": "ho11@soas.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Hester Chan 陳欣怡",
    "Title + Institution or Affiliations": "Mres Humanities, London Consortium, Leiden U.",
    "Category": "Academic",
    "Areas of Expertise": "Female emancipation; power, performance, migration, cross-cultural gender politics.       mail@hesterchan.com",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Jane Orton",
    "Title + Institution or Affiliations": "Honorary, Melbourne Graduate School of Education, Unviersity of Melbourne",
    "Category": "Academic",
    "Areas of Expertise": "Chinese language education",
    "Email": "j.orton@unimelb.edu.au",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Jennifer Turner",
    "Title + Institution or Affiliations": "Wilson Center",
    "Category": "Think tank",
    "Areas of Expertise": "China environment",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Batke",
    "Title + Institution or Affiliations": "Director, China NGO Project, ChinaFile",
    "Category": "Nonprofit/research",
    "Areas of Expertise": "China NGO Project gathers information and analysis on the regulation of foreign NGOs in China, Jessica also writes for the China Leadership Monitor and has been a fellow at the Mercator Institute for China Studies where she wrote about the Chinese leadership. She speaks Uyghur",
    "Email": "jessica@chinafile.com.",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Chen Weiss",
    "Title + Institution or Affiliations": "Associate Professor, Cornell University",
    "Category": "Academic",
    "Areas of Expertise": "China's foreign relations, nationalism, popular sentiment, role of domestic politics in international relations.",
    "Email": "jessica.weiss@cornell.edu",
    "Phone/Twitter/Website": "http://www.jessicachenweiss.com/",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Drun",
    "Title + Institution or Affiliations": "Fellow, Party Watch Initiative",
    "Category": "Think tank",
    "Areas of Expertise": "Taiwan domestic politics, cross-Strait Relations, U.S.-China relations, PLA, US-Taiwan relations",
    "Email": "jessica.drun@gmail.com",
    "Phone/Twitter/Website": "@jessicadrun",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Jessica Yeung",
    "Title + Institution or Affiliations": "Associate Professor",
    "Category": "Academic",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Josepha Richard",
    "Title + Institution or Affiliations": "PhD Candidate, University of Sheffield (UK)",
    "Category": "Academic",
    "Areas of Expertise": "Guangdong regional identity and history, Opium Wars, Lingnan, Trade History in south-east China, Regional garden history (especially 19th century Guangzhou)",
    "Email": "richard.josepha@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Journalists",
    "Title + Institution or Affiliations": "List of female journalists in mainland China",
    "Category": "Media",
    "Areas of Expertise": "Various",
    "Email": "Twitter handles in link",
    "Phone/Twitter/Website": "https://twitter.com/joannachiu/lists/female-china-journos",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Juliana Loh",
    "Title + Institution or Affiliations": "Social Media, Marketing, China",
    "Category": "Marketing & Communications",
    "Areas of Expertise": "China media, social media, marketing",
    "Email": "jloh@julianaloh.com",
    "Phone/Twitter/Website": "@bilbaobab",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Julie O'Yang",
    "Title + Institution or Affiliations": "Independent",
    "Category": "Arts & Culture",
    "Areas of Expertise": "Arts, Media, Literature, History",
    "Email": "oyang.julie@gmail.com",
    "Phone/Twitter/Website": "http://julieoyang.com",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Julie O'yang",
    "Title + Institution or Affiliations": "Master of Arts, independent writer and artist",
    "Category": "Author, visual artist",
    "Areas of Expertise": "Literature, journalism, art, film, media, business",
    "Email": "julie@julieoyang.com",
    "Phone/Twitter/Website": "julieoyang.com | julieoyang.wordpress.com",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Justine Teo",
    "Title + Institution or Affiliations": "Chief Investment Officer, Esper Capital",
    "Category": "Hedge Fund",
    "Areas of Expertise": "China economics/finance",
    "Email": "justine.teo@espercapital.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Kellee Tsai",
    "Title + Institution or Affiliations": "HKUST & Johns Hopkins, Prof., Social Sciences",
    "Category": "Academic",
    "Areas of Expertise": "Shadow banking, non-governmental finance, state capitalism, political economy, gov. Five books",
    "Email": "ktsai@ust.hk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Kira Simon-Kennedy",
    "Title + Institution or Affiliations": "Co-founder & Director, China Residencies",
    "Category": "Arts & Culture",
    "Areas of Expertise": "Artist residencies, cultural exchange, independent music, film & documentaries",
    "Email": "kira@chinaresidencies.com",
    "Phone/Twitter/Website": "@sk_kira @chinaresidency chinaresidencies.org",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Kitty Smyth",
    "Title + Institution or Affiliations": "Founder, Jingpinou",
    "Category": "Business",
    "Areas of Expertise": "Chinese food industry, agriculture, agritech, trade with Europe",
    "Email": "kitty@jingpinou.com",
    "Phone/Twitter/Website": "@kksmyth",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristen Looney",
    "Title + Institution or Affiliations": "Assistant Professor of Asian Studies and Government, Georgetown University",
    "Category": "Academic",
    "Areas of Expertise": "Chinese politics; rural development",
    "Email": "Kristen.Looney@georgetown.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Kristin Vekasi",
    "Title + Institution or Affiliations": "Assistant Professor, University of Maine",
    "Category": "Academic",
    "Areas of Expertise": "China-Japan relations",
    "Email": "kristin.vekasi@maine.edu",
    "Phone/Twitter/Website": "https://umaine.edu/polisci/faculty-and-staff/kristin-vekasi/  207. 581.1876",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "LeighAnn Ragland",
    "Title + Institution or Affiliations": "DGI",
    "Category": "",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "@mu0ns",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Lily Chumley",
    "Title + Institution or Affiliations": "Assistant Professor, NYU",
    "Category": "Academic",
    "Areas of Expertise": "Chinese art education, creative labor, semiotics; book:  Creativity Class: Art School and Culture Work in Postsocialist China",
    "Email": "chumley@nyu.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Lit Lao",
    "Title + Institution or Affiliations": "Founder of Litchee Lab Makerspace",
    "Category": "Education",
    "Areas of Expertise": "Mainland China innovation/Maker education",
    "Email": "lit@litchee.cn",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Liz Carter",
    "Title + Institution or Affiliations": "Chinese-English translator, author of Let 100 Voices Speak",
    "Category": "",
    "Areas of Expertise": "Chinese language, translation",
    "Email": "ebcarter@gmail.com",
    "Phone/Twitter/Website": "@withoutdoing",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Lucy Sheen",
    "Title + Institution or Affiliations": "Actor, writer, filmmaker, published poet/ flash fiction & transracial adoptee advocate and published writer",
    "Category": "Theatre, TV, Film",
    "Areas of Expertise": "Identity Being British East Asian, Being a transracial adoptee",
    "Email": "lucy.sheen@icloud.com",
    "Phone/Twitter/Website": "(44) 7973 771137 www.lucysheen.com",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Malin Oud",
    "Title + Institution or Affiliations": "Director, Raoul Wallenberg Institute Stockholm Office",
    "Category": "Academic/Advisory",
    "Areas of Expertise": "Human rights",
    "Email": "malin.oud@rwi.lu.se",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Mareike Ohlberg",
    "Title + Institution or Affiliations": "Reseach associate, MERICS",
    "Category": "Think Tank",
    "Areas of Expertise": "China's subnational politics, official media policy and developments in Hong Kong and Taiwan",
    "Email": "mareike.ohlberg(at) merics.de",
    "Phone/Twitter/Website": "(49) 30 3440 999-0",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Margaret Morton",
    "Title + Institution or Affiliations": "MA Candidate, Georgetown University",
    "Category": "Security",
    "Areas of Expertise": "US-China Military Relations",
    "Email": "mm4356@georgetown.edu",
    "Phone/Twitter/Website": "@magsmorton",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Mary Kay Magistad",
    "Title + Institution or Affiliations": "Creator & host, Whose Century Is It? podcast, with PRI's The World",
    "Category": "Media",
    "Areas of Expertise": "China politics, civil society & societal trends, human rights, environment, general",
    "Email": "mkmagistad@gmail.com",
    "Phone/Twitter/Website": "pri.org/century , @mary.kay.magistad",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Melanie Hart",
    "Title + Institution or Affiliations": "Center for American Progress",
    "Category": "Think tank",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Melinda Moore",
    "Title + Institution or Affiliations": "ICBC Standard Bank",
    "Category": "Industry",
    "Areas of Expertise": "steel",
    "Email": "melinda.moore@icbcstandard.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Mieke Eoyang",
    "Title + Institution or Affiliations": "Analyst, Third Way",
    "Category": "Think tank",
    "Areas of Expertise": "North Korea",
    "Email": "",
    "Phone/Twitter/Website": "@MiekeEoyang ‏",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Min Jiang",
    "Title + Institution or Affiliations": "Associate Professor, UNC Charlotte",
    "Category": "Academic/Media",
    "Areas of Expertise": "Chinese media, media studies, communication studies",
    "Email": "Min.Jiang@uncc.edu",
    "Phone/Twitter/Website": "704-687-0768 |",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Mira Rapp-Hooper",
    "Title + Institution or Affiliations": "Senior Fellow in Asia-Pacific Security Program at CNAS",
    "Category": "Academic, Think-tank",
    "Areas of Expertise": "China and Asia mairtime and geopolitical security studies",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Molly Roberts",
    "Title + Institution or Affiliations": "Assistant Professor, UC San Diego Political Science",
    "Category": "Academic",
    "Areas of Expertise": "Online political censorship in China",
    "Email": "meroberts@ucsd.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Name?",
    "Title + Institution or Affiliations": "M.A Chinese Politics, ECNU,Shanghai, Columnist for China Series at Swarajya Magazine",
    "Category": "academia, media",
    "Areas of Expertise": "Sino-Indian bilateral relations, OBOR and Act East policy, media in China and India, Hindu-Buddhist cultural contacts in Sino-Indian relations,Chinese domestic politics",
    "Email": "maha2509@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Priscilla Song",
    "Title + Institution or Affiliations": "Associate Professor, Washington University in St. Louis",
    "Category": "Academic",
    "Areas of Expertise": "Medical Anthropology, transnational biomedical technology in urban China, healthcare, illness, technoscience",
    "Email": "priscillasong@wustl.edu",
    "Phone/Twitter/Website": "https://pages.wustl.edu/song",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Rajeswari Pillai Rajagopalan",
    "Title + Institution or Affiliations": "Senior Fellow, Observer Research Foundation, New Delhi",
    "Category": "Policy analyst",
    "Areas of Expertise": "Cyber warfare, Sino- American relations, Sino- Indian disputes",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Rityusha Mani Tiwary",
    "Title + Institution or Affiliations": "Associate Editor, China Report, New Delhi, India",
    "Category": "",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Ruixue Jia",
    "Title + Institution or Affiliations": "Assistant Professor, UC San Diego School of Global Policy and Strategy",
    "Category": "Academic",
    "Areas of Expertise": "Chinese economic development, and economic history",
    "Email": "rxjia@ucsd.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Samantha Culp",
    "Title + Institution or Affiliations": "Writer, Curator, Consultant - Paloma Powers",
    "Category": "Art / Culture",
    "Areas of Expertise": "Greater Chinese art, media, design, and emergent culture",
    "Email": "samanthaculp@gmail.com",
    "Phone/Twitter/Website": "http://www.twitter.com/samanthaculp",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Sara Newland",
    "Title + Institution or Affiliations": "Postdoctoral Fellow at Ash Center for Democratic Governance and Innovation, JFK School, Harvard; Assistant Professor, Smith College (starting Fall 2018)",
    "Category": "Academic",
    "Areas of Expertise": "",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Sarah Mak",
    "Title + Institution or Affiliations": "Teaching fellow at Univ. of London",
    "Category": "Academic",
    "Areas of Expertise": "Hong Kong, cities, nationalism",
    "Email": "",
    "Phone/Twitter/Website": "https://twitter.com/smakkers",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Sheila Melvin",
    "Title + Institution or Affiliations": "Writer, Consultant",
    "Category": "",
    "Areas of Expertise": "music and culture",
    "Email": "",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Shuang Qiu",
    "Title + Institution or Affiliations": "PhD Candidate, University of York",
    "Category": "Academic",
    "Areas of Expertise": "Living Apart Together (LAT) Relationships in China, gender studies, personal and intimate relationship, feminist sociology of everyday life",
    "Email": "sq596@york.ac.uk",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Sophie Beach",
    "Title + Institution or Affiliations": "Executive Editor, China Digital Times",
    "Category": "media",
    "Areas of Expertise": "human rights, censorship, politics",
    "Email": "",
    "Phone/Twitter/Website": "@sophie_beach",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Sriparna Pathak",
    "Title + Institution or Affiliations": "Assistant Professor, Centre for Southeast Asian Studies, Gauhati University, Guwahati 781014,Assam, India",
    "Category": "Academic",
    "Areas of Expertise": "Chinese economy, India-China trade relations, Chinese foreign policy",
    "Email": "sriparnapathak@gmail.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Stephanie Kleine-Ahlbrandt",
    "Title + Institution or Affiliations": "UN Council of Experts",
    "Category": "",
    "Areas of Expertise": "security, diplomacy",
    "Email": "stephanieka@stephanieka.net",
    "Phone/Twitter/Website": "@ska_kongshan",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Tricia Wang",
    "Title + Institution or Affiliations": "Global Tech Ethnographer, Co-founder of Cultivate Group, Affiliate at Harvard Berkman and Data and Society",
    "Category": "Industry/research",
    "Areas of Expertise": "Chinese internet, youth, migrants, identity, anonymity",
    "Email": "hi@triciawang.com",
    "Phone/Twitter/Website": "@triciawang / triciawang.com",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Valérie Niquet",
    "Title + Institution or Affiliations": "Head, Asia department, Foundation for Strategic Research (FRS)",
    "Category": "",
    "Areas of Expertise": "China, Taiwan, Hong-KongDefense and strategic Issues",
    "Email": "v.niquet@frstrategie.org",
    "Phone/Twitter/Website": "@Vniquet",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Victoria Hui",
    "Title + Institution or Affiliations": "University of Notre Dame",
    "Category": "Academic",
    "Areas of Expertise": "Hong Kong politics",
    "Email": "thui@nd.edu",
    "Phone/Twitter/Website": "(1) 574-631-7570",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Weiyi Shi",
    "Title + Institution or Affiliations": "Assistant Professor, UC San Diego School of Global Policy and Strategy",
    "Category": "Academic",
    "Areas of Expertise": "Chinese overseas investment and foreign policy",
    "Email": "w3shi@ucsd.edu",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Wendy Chen",
    "Title + Institution or Affiliations": "China economist, Nomura International",
    "Category": "economy",
    "Areas of Expertise": "",
    "Email": "wendy.chen@nomura.com",
    "Phone/Twitter/Website": "86 (0)21 6193 7237",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Yifan Cai",
    "Title + Institution or Affiliations": "PhD candidate, Clark University",
    "Category": "Academic",
    "Areas of Expertise": "e-commerce, shanzhai, sustainable transition, renewable energy, China-Africa",
    "Email": "ycai@clarku.com",
    "Phone/Twitter/Website": "",
    "Location/Notes": "",
    "Languages Spoken": ""
  },
  {
    "Name": "Zara Arshad",
    "Title + Institution or Affiliations": "Research Assistant, Victoria and Albert Museum (London). Founder, Design China",
    "Category": "Research/curatorial/design",
    "Areas of Expertise": "Design and architecture from China, Hong Kong, Taiwan, and Asia more broadly",
    "Email": "zara.arshad@network.rca.ac.uk",
    "Phone/Twitter/Website": "@zara_arshad; http://cargocollective.com/zara  http://www.design-china.org",
    "Location/Notes": "",
    "Languages Spoken": ""
  }
];
