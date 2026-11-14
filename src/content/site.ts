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
    body: "Businesses and broadcasters get one legal permission to play our whole repertoire, instead of chasing every songwriter and performer one by one.",
  },
  {
    key: "collect",
    title: "We collect",
    body: "Licence fees are invoiced fairly and matched against what is actually played, using usage reports, playlists and cue sheets.",
  },
  {
    key: "distribute",
    title: "We distribute",
    body: "Royalties reach the right rights-holders on a regular schedule, with clear statements showing where every taka came from.",
  },
] as const;

export const services = [
  {
    icon: "speaker",
    title: "Public performance licensing",
    body: "Blanket and per-event licences for restaurants, shops, hotels, gyms, offices and live events that play music in public.",
  },
  {
    icon: "radio",
    title: "Broadcast licensing",
    body: "Licences for TV, radio and cable channels, covering every song that goes out on air.",
  },
  {
    icon: "streaming",
    title: "Digital and streaming licensing",
    body: "Licences for websites, apps, streaming services and online platforms that use music.",
  },
  {
    icon: "collect",
    title: "Royalty collection",
    body: "Invoicing licence fees and gathering usage data so every public performance is accounted for.",
  },
  {
    icon: "distribute",
    title: "Royalty distribution",
    body: "Matching performances to registered works and paying the creators and publishers who own them.",
  },
  {
    icon: "register",
    title: "Member and works registration",
    body: "Registering lyricists, composers, performers and publishers, and the songs they have created.",
  },
] as const;

export const licensees = [
  { icon: "utensils", label: "Restaurants and cafés" },
  { icon: "hotel", label: "Hotels and resorts" },
  { icon: "shop", label: "Shops and shopping malls" },
  { icon: "gym", label: "Gyms and fitness centres" },
  { icon: "office", label: "Offices and waiting areas" },
  { icon: "event", label: "Concerts and events" },
  { icon: "tv", label: "TV and radio" },
  { icon: "digital", label: "Digital platforms" },
  { icon: "transport", label: "Buses, airlines and launches" },
] as const;

export const steps = {
  users: [
    { title: "Tell us about your business", body: "Share the type of venue or service, its size and how you use music." },
    { title: "Get your quote", body: "We calculate a fair licence fee from our published tariff." },
    { title: "Pay and receive your licence", body: "Your licence covers our full repertoire for the agreed period." },
    { title: "Report what you play", body: "Broadcasters and large users share playlists so creators are paid accurately." },
  ],
  creators: [
    { title: "Become a member", body: "Apply as a lyricist, composer, performer or publisher." },
    { title: "Register your works", body: "Add your songs and the share each rights-holder owns." },
    { title: "We track and collect", body: "We license music users and gather data on where your songs are played." },
    { title: "Get paid", body: "Receive royalty statements and payments for every licensed performance." },
  ],
};

export const membership = {
  who: ["Lyricists", "Composers", "Performers", "Music publishers", "Heirs of rights-holders"],
  benefits: [
    "Royalty income whenever your music is performed in public",
    "Protection of your performing rights",
    "Clear, regular royalty statements",
    "Support from a dedicated member services team",
  ],
  documents: ["National ID (NID) or passport", "List of your works", "Bank account details", "Recent photograph"],
};

/** Sample entries for the repertoire search preview. TODO: connect to the real database. */
export const sampleRepertoire = [
  { title: "Bhorer Alo", writer: "Sample writer", performer: "Sample artist", id: "BMPS-000101" },
  { title: "Nodir Kul", writer: "Sample writer", performer: "Sample artist", id: "BMPS-000214" },
  { title: "Brishti Raat", writer: "Sample writer", performer: "Sample artist", id: "BMPS-000377" },
  { title: "Shohor er Gaan", writer: "Sample writer", performer: "Sample artist", id: "BMPS-000452" },
  { title: "Phire Esho", writer: "Sample writer", performer: "Sample artist", id: "BMPS-000589" },
  { title: "Megher Desh", writer: "Sample writer", performer: "Sample artist", id: "BMPS-000613" },
];

/** TODO: replace with real contact details. */
export const contact = {
  address: "Office address, Dhaka, Bangladesh",
  phone: "+880 1XXX-XXXXXX",
  email: "info@bmps.pro",
  hours: "Sunday to Thursday, 10:00 AM to 6:00 PM",
};
