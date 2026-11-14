/**
 * All the words on the landing page live here, so they can be edited
 * without touching the layout. Items marked TODO are placeholders.
 */

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Licensing", href: "#licensing" },
  { label: "How it works", href: "#how" },
  { label: "Members", href: "#membership" },
  { label: "Repertoire", href: "#repertoire" },
  { label: "Contact", href: "#contact" },
];

export const pillars = [
  {
    key: "license",
    title: "We license",
    body: "Shops, venues, broadcasters and event organisers get one licence to use music in public.",
  },
  {
    key: "collect",
    title: "We collect",
    body: "We collect the licence fees and keep track of which music is played.",
  },
  {
    key: "distribute",
    title: "We pay performers",
    body: "We pay the money to the singers, musicians and DJs whose performances were used.",
  },
] as const;

export const services = [
  {
    icon: "speaker",
    title: "Public performance licensing",
    body: "Licences for shops, restaurants, hotels, gyms and other places that play music in public.",
  },
  {
    icon: "dj",
    title: "DJ performance licensing",
    body: "Licences for DJ sets at clubs, parties, weddings, concerts and events.",
  },
  {
    icon: "radio",
    title: "Broadcast licensing",
    body: "Licences for TV, radio and cable channels.",
  },
  {
    icon: "streaming",
    title: "Digital and streaming licensing",
    body: "Licences for websites, apps and online platforms that use music.",
  },
  {
    icon: "distribute",
    title: "Royalty collection and payment",
    body: "We collect licence fees and pay royalties to the performers.",
  },
  {
    icon: "register",
    title: "Performer registration",
    body: "Singers, musicians and DJs can register with us to receive royalties.",
  },
] as const;

export const licensees = [
  { icon: "dj", label: "DJ nights and clubs" },
  { icon: "event", label: "Concerts, weddings and events" },
  { icon: "utensils", label: "Restaurants and cafés" },
  { icon: "hotel", label: "Hotels and resorts" },
  { icon: "shop", label: "Shops and shopping malls" },
  { icon: "gym", label: "Gyms and fitness centres" },
  { icon: "tv", label: "TV and radio" },
  { icon: "digital", label: "Digital platforms" },
  { icon: "transport", label: "Buses, airlines and launches" },
] as const;

export const steps = {
  users: [
    { title: "Contact us", body: "Tell us about your business or event and how you use music." },
    { title: "Get your quote", body: "We tell you the licence fee." },
    { title: "Pay and get your licence", body: "You can now use music legally." },
    { title: "Share what you play", body: "Broadcasters, DJs and large users send us their playlists." },
  ],
  performers: [
    { title: "Become a member", body: "Apply as a singer, musician or DJ." },
    { title: "Register your performances", body: "List the songs and recordings you have performed on." },
    { title: "We collect", body: "We license music users and track where your performances are used." },
    { title: "Get paid", body: "Receive your royalties with a clear statement." },
  ],
};

export const membership = {
  who: ["Singers", "Musicians", "DJs", "Bands", "Session players"],
  benefits: [
    "Royalties when your performances are used in public",
    "Protection of your rights as a performer",
    "Regular, clear royalty statements",
    "Help from our member support team",
  ],
  documents: ["National ID (NID) or passport", "List of your songs or recordings", "Bank account details", "Recent photograph"],
};

/** Sample entries for the repertoire search preview. TODO: connect to the real database. */
export const sampleRepertoire = [
  { title: "Bhorer Alo", performer: "Sample artist", id: "BMPS-000101" },
  { title: "Nodir Kul", performer: "Sample artist", id: "BMPS-000214" },
  { title: "Brishti Raat", performer: "Sample artist", id: "BMPS-000377" },
  { title: "Shohor er Gaan", performer: "Sample artist", id: "BMPS-000452" },
  { title: "Phire Esho", performer: "Sample artist", id: "BMPS-000589" },
  { title: "Megher Desh", performer: "Sample artist", id: "BMPS-000613" },
];

/** TODO: replace with real contact details. */
export const contact = {
  address: "Office address, Dhaka, Bangladesh",
  phone: "+880 1719-200083",
  email: "info@bmps.pro",
  hours: "Sunday to Thursday, 10:00 AM to 6:00 PM",
};
