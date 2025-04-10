import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import foreImage from "../assets/profile-pictures/foreImage.jpg";
import Mtweka from "../assets/profile-pictures/Mtweka.jpg";
import Tembo from "../assets/profile-pictures/Tembo.jpg";
import Balloon from "../assets/profile-pictures/Balloon.jpg";
import Lion from "../assets/profile-pictures/Lion.jpg";
import Wildbeest from "../assets/profile-pictures/Wildbeest.jpg";
import Giraffe from "../assets/profile-pictures/Giraffe.jpg";
import image from "../assets/profile-pictures/image.jpg";

export const website = {
  title: "Mahak Tours and Adventure",
  description:
    "Exploring all that Tanzania has to offer is a dream for many. From epic Tanzania safari adventures spotting Africa’s Big Five, to climbing Kilimanjaro or relaxing on the paradise beaches of Zanzibar: Tanzania travel has it all. Looking for a taste of everything? Mahak Tours and Adventure create custom Africa travel itineraries suited to your every need – down to the very last detail.",
  logo: "https://mahaktours.com/wp-content/uploads/2021/06/mahak-tours-logo.png",
  social: {
    facebook: "https://www.facebook.com/mahaktours",
    twitter: "https://twitter.com/mahaktours",
    instagram: "https://www.instagram.com/mahaktours/",
    linkedin: "https://www.linkedin.com/company/mahaktours/",
  },
};



export const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "All Safaris", 
    href: "#",
    subItems: [
      { label: "Wildlife Safaris", href: "/Wildlife_Safaris" },
      { label: "Cultural Safaris", href: "/Cultural_Safaris" }
    ]
  },
  { 
    label: "Trekking", 
    href: "#",
    subItems: [
      { label: "Kilimanjaro", href: "#" },
      { label: "Meru", href: "#" }
    ]
  },
  { 
    label: "Day Trips", 
    href: "#",
    subItems: [
      { label: "Short Nature Walks", href: "#" },
      { label: "Local Village Tours", href: "#" }
    ]
  },
  { 
    label: "Zanzibar", 
    href: "/Zanzibar",
    subItems: [
      { label: "Beach Holidays", href: "/Zanzibar" },
      { label: "Historical Tours", href: "#" }
    ]
  },
  { 
    label: "About Us", 
    href: "/about",
    subItems: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about" }
    ]
  },
  { 
    label: "Contacts", 
    href: "/contact",
    subItems: [
      { label: "Contact Form", href: "/contact" },
      { label: "Location Map", href: "/map" }
    ]
  }
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: "",
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: "",
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: "",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: "",
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: "",
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: "",
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const contacts = [
  {
    address: "UDOM DODOMA,Tanzania ",
    phone1: "+255 753225961",
    phone2: "+255 752840889",
    email: "info@mahak.com.tz",
    facebook:"#",
    instagram:"#",
    twitter:"#",
    linkedin:"#",
    unknown:"#"
  }
];

export const  Pictures = {
  foreImage,
  Mtweka,
  Tembo,
  Balloon,
  Lion,
  Wildbeest,
  Giraffe,
};