/**src/Data/data.js**/
const HEADER = "Graphisher GitHub Actions Editor";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];
const BANNER_DATA = {
  HEADING: "Kein Stress, kein Code und nur Erfolge! Wir revolutionieren GitHub Actions",
  DECRIPTION:
    "Bearbeite jetzt deinen GitHub Actions-Workflow mit  unserem graphischen GitHub Actions Editor!",
  TUTORIAL_URL:
    "https://www.youtube.com",
  WATCH_TUTORIAL: "Zum Tutorial"
};
const SERVICE_DATA = {
  HEADING: "Worum geht es in unserem Projekt?",
  ALL_SERVICES: "KEIN STRESS, KEIN CODE UND NUR ERFOLGE! WIR REVOLUTIONIEREN GITHUB ACTIONS",
  SERVICE_LIST: [
    {
      LABEL: "Mehr aus GitHub rausholen",
      DESCRIPTION:
        "Die meisten Entwickler assoziieren die Quellcodeverwaltung mit GitHub. Die Plattform, kann  jedoch für viel mehr als nur das Synchronisieren von Git-Repositories verwendet werden. Unter anderem kann die Workflow-Engine GitHub Actions dafür eingesetzt  werden fast alle Ereignisse innerhalb GitHHub zu automatiseren. Sie bietet somit eine großartige Lösung für Continuous Integration/Continuous Deployment (CI/CD)-Pipelines.",
      URL: "images/service8.png"
    },
    {
      LABEL: "Was sind überhaupt CI/CD- Pipelines?",
      DESCRIPTION:
        "Du kannst einen CD-Workflow so konfigurieren, dass er ausgeführt wird, wenn ein GitHub-Ereignis auftritt z. B. wenn neuer Code in den Standardzweig deines Repositorys übertragen wird. Dies geht nach einem festgelegten Zeitplan, manuell oder wenn ein externes Ereignis auftritt. Diese Befehle müssen normalerweise extra gecoded werden und genau hier kommen wir  ins Spiel!",
      URL: "images/service4.png",
      ID: "service-img"
    },
    {
      LABEL: "Wir wir dir das Leben erleichtern",
      DESCRIPTION:
        "Unser graphischer Editor für GitHub Actions gibt dir die volle Kontrolle. Mit dessen Hilfe kannst du per Knopfdruck Workflows ausführen, die den Code in deinem Repository erstellen und auch Tests darüber ausführen. Konfiguriere deinen CI-Workflow beispielsweise so, dass er ausgeführt wird, wenn ein GitHub-Ereignis auftritt, z. B. wenn neuer Code in dein Repository übertragen wird. Wir ermöglichen dir sogar einen festgelegten Zeitplan einzustellen oder feste Ereignis zu definieren. Das alles ganz ohne Code!",
      URL: "images/service9.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Warum unseren Editor nutzen?",
  TITLE: "Fakt  ist",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "Wir sind der einzige GitHub Actions Editor auf dem Markt",
    "Wir ersparen  dir Zeit und Nerven.",
    "Wir haben alle Funktionen implimentiert, die du brauchst.",
    "Wir sind schnell",
    "Unser Kundenservice ist 24/7 telefonisch erreichbar.",
    "Wir lieben was wir tun.",
    "Du kannst Teil von etwas großem werden.",
    "Wir arbeiten für deinen Erfolg"
  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "Was unsere Nutzer sagen",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Der Grafische  GitHub Actions Editor hat mit seiner einfachen  Handhabung einen großen Unterschied für meine Arbeit mit GitHub gemacht. Meine CI/CD Projekte  laufen schneller als je zuvor und dank der vereinfachten Arbeit kann ich meine Programmierprojekte viel besser skalieren.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Programmiererin"
    },
    {
      DESCRIPTION:
        "Früher hatte ich 2 festangestellte, die sich den ganzen Tag nur um unsere CI/CD Aufgaben gekümmert haben. Der graphische Editor für GitHub Actions ermöglicht es uns nun, dass die ehemals für diese Thematik angestellten Mitarbeiter sich auf  kreativere Aufgaben konzentrieren können.",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Co-founder Software4You"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Checked  unser Social Media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "Neugierig geworden? Dann kontaktiere uns! Wir kommen gerne mit  dir ins Gespräch.",
  CONTACT_DETAILS: {
    HEADING: "Kontaktdaten",
    ADDRESS: "Coblitzallee 6, Mannheim",
    MOBILE: "+49 1562789002",
    EMAIL: "graphischereditor@githubactions.com"
  },
  SUBSCRIBE_NEWSLETTER: "abboniere unseren Newsletter",
  SUBSCRIBE: "Abonnieren"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
