import Advanced from "../assets/icon-advanced.svg";
import Arcade from "../assets/icon-arcade.svg";
import Pro from "../assets/icon-pro.svg";

export const StepInfo = [
  { id: 1, num: "1", name: "Step 1", info: "Your Info" },
  { id: 2, num: "2", name: "Step 2", info: "Select plan" },
  { id: 3, num: "3", name: "Step 3", info: "Add-ons" },
  { id: 4, num: "4", name: "Step 4", info: "Summary" },
];

export const Plans = [
  { id: 1, image: Arcade, name: "Arcade", price: "$9/mo" },
  { id: 2, image: Advanced, name: "Advanced", price: "$12/mo" },
  { id: 3, image: Pro, name: "Pro", price: "$15/mo" },
];

export const Picks = [
  {
    id: 1,
    title: "Online service",
    subtext: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    id: 2,
    title: "Larger storage",
    subtext: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    id: 3,
    title: "Customizable Profile",
    subtext: "Custom theme on your profile",
    price: "+$2/mo",
  },
];
