import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
export const cardData = [
  {
    img: "/photos/1.jpg",
    tag: "Engineering",
    title: "Revolutionizing software development with cutting-edge tools",
    description:
      "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
    authors: [
      { name: "Remy Sharp", avatar: "/icons/rail1.png" },
      { name: "Travis Howard", avatar: "/icons/rail.png" },
    ],
  },
  {
    img: "/photos/2.jpg",
    tag: "Product",
    title: "Innovative product features that drive success",
    description:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
    authors: [{ name: "Erica Johns", avatar: "/icons/rail.png" }],
  },
  {
    img: "/photos/3.jpg",
    tag: "Design",
    title: "Designing for the future: trends and insights",
    description:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
    authors: [{ name: "Kate Morrison", avatar: "/icons/rail.png" }],
  },
  {
    img: "/photos/4.jpg",
    tag: "Company",
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: "Cindy Baker", avatar: "/icons/rail.png" }],
  },
  {
    img: "/photos/5.jpg",
    tag: "Engineering",
    title: "Pioneering sustainable engineering solutions",
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: "Agnes Walker", avatar: "/icons/rail.png" },
      { name: "Trevor Henderson", avatar: "/icons/rail.png" },
    ],
  },
  {
    img: "/photos/6.jpg",
    tag: "Product",
    title: "Maximizing efficiency with our latest product updates",
    description:
      "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
    authors: [{ name: "Travis Howard", avatar: "/icons/rail.png" }],
  },
];

export const articleInfo = [
  {
    tag: "Engineering",
    title: "The future of AI in software engineering",
    description:
      "Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.",
    authors: [
      { name: "Remy Sharp", avatar: "/icons/rail.png" },
      { name: "Travis Howard", avatar: "/icons/rail.png" },
    ],
  },
  {
    tag: "Product",
    title: "Driving growth with user-centric product design",
    description:
      "Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users.",
    authors: [{ name: "Erica Johns", avatar: "/icons/rail.png" }],
  },
  {
    tag: "Design",
    title: "Embracing minimalism in modern design",
    description:
      "Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences.",
    authors: [{ name: "Kate Morrison", avatar: "/icons/rail.png" }],
  },
  {
    tag: "Company",
    title: "Cultivating a culture of innovation",
    description:
      "Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions.",
    authors: [{ name: "Cindy Baker", avatar: "/icons/rail.png" }],
  },
  {
    tag: "Engineering",
    title: "Advancing cybersecurity with next-gen solutions",
    description:
      "Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats.",
    authors: [
      { name: "Agnes Walker", avatar: "/icons/rail.png" },
      { name: "Trevor Henderson", avatar: "/icons/rail.png" },
    ],
  },
  {
    tag: "Product",
    title: "Enhancing customer experience through innovation",
    description:
      "Our innovative approaches are enhancing customer experience. Learn about the new features and improvements that are delighting our users.",
    authors: [{ name: "Travis Howard", avatar: "/icons/rail.png" }],
  },
  {
    tag: "Engineering",
    title: "Pioneering sustainable engineering solutions",
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: "Agnes Walker", avatar: "/icons/rail.png" },
      { name: "Trevor Henderson", avatar: "/icons/rail.png" },
    ],
  },
  {
    tag: "Product",
    title: "Maximizing efficiency with our latest product updates",
    description:
      "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
    authors: [{ name: "Travis Howard", avatar: "/icons/rail.png" }],
  },
  {
    tag: "Design",
    title: "Designing for the future: trends and insights",
    description:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
    authors: [{ name: "Kate Morrison", avatar: "/icons/rail.png" }],
  },
  {
    tag: "Company",
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: "Cindy Baker", avatar: "/icons/rail.png" }],
  },
];

export const appBarOptions = [
  {
    label: "My Profile",
    route: "/profile",
  },
  {
    label: "Booking History",
    route: "/history",
  },
  {
    label: "Daily Ticket",
    route: "/ticket",
  },
  {
    label: "Monthly Ticket",
    route: "/",
  },
  {
    label: " Ticket(M)",
    route: "/monthly",
  },
  {
    label: "Ticket(D)",
    route: "/daily",
  },
];

export const cardContentChipOptions = [
  {
    label: "All Categories",
  },
  {
    label: "Company",
  },
  {
    label: "Product",
  },
  {
    label: "Design",
  },
  {
    label: "Clone",
  },
];

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
}));

export const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

export const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

export const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const adultOptions = [
  { label: 1 },
  { label: 2 },
  { label: 3 },
  { label: 4 },
];
export const childOptions = [
  { label: 1 },
  { label: 2 },
  { label: 3 },
  { label: 4 },
];

export const ticketTypeOptions = [
  { label: "JOURNEY(J)" },
  { label: "RETURN(R)" },
];

export const trainOptions = [
  { label: "ORDINARY(O)" },
  { label: "MAIL/EXP(M/E)" },
  { label: "SUPERFAST(S)" },
];

export const sourceStationOptions = [
  { label: "CHAMPAHATI" },
  { label: "CANNING" },
  { label: "SONARPUR" },
  { label: "SEALDAH" },
  { label: "BALLYGAUNGE" },
  { label: "PARK CIRCUS" },
  { label: "JADAVPUR" },
  { label: "BAGHAJATIN" },
  { label: "NEW GARIA" },
];
export const destinationStationOptions = [
  { label: "CHAMPAHATI" },
  { label: "CANNING" },
  { label: "SONARPUR" },
  { label: "SEALDAH" },
  { label: "BALLYGAUNGE" },
  { label: "PARK CIRCUS" },
  { label: "JADAVPUR" },
  { label: "BAGHAJATIN" },
  { label: "NEW GARIA" },
];
export const viaOptions = [{ label: "SPR" }];
export const classOptions = [{ label: "SECOND" }, { label: "FIRST" }];
