import { IWheelDefinition } from "../../data/wheelDefinition";
import { DeveloperTrackIds } from "./trackIds";

export const DeveloperWheelDefinition: IWheelDefinition = {
  tracks: [
    {
      id: DeveloperTrackIds.DELIVERY,
      label: "Delivery",
      color: "#E74C3C",
      description:
        "Does he/she deliver assigned tasks on time and do these meet given criteria/can we rely on  him/her?",
    },
    {
      id: DeveloperTrackIds.INVESTIGATION_SPEED,
      label: "Investigation speed",
      color: "#9B59B6",
      description: "Is he/she able to solve a problem quickly?",
    },
    {
      id: DeveloperTrackIds.COMPLETION,
      label: "Completion",
      color: "#",
      description:
        "Can be the delivered tasks used/implemented immediately, no additional amendments required? ",
    },
    {
      id: DeveloperTrackIds.PROACTIVITY,
      label: "Proactivity",
      color: "#2980B9",
      description:
        "Is he/she proactive? Does he/she search for solutions how to make things better?",
    },
    {
      id: DeveloperTrackIds.ENGLISH,
      label: "English",
      color: "#1ABC9C",
      description: "Is he/she able to communicate in English?",
    },
    {
      id: DeveloperTrackIds.TEAM_PLAYER,
      label: "Team Player",
      color: "#F1C40F",
      description:
        "Is he/she a team player? Does he/she create positive atmosphere?",
    },
    {
      id: DeveloperTrackIds.WORKLIFE_BALANCE,
      label: "Work-life balance",
      color: "#F39C12",
      description: "",
    },
    {
      id: DeveloperTrackIds.SELF_STUDY,
      label: "Self study",
      color: "#839192",
      description: "",
    },
    {
      id: DeveloperTrackIds.COMMUNICATION,
      label: "Communication",
      color: "#EDBB99",
      description: "Communication abilities with the team",
    },
    {
      id: DeveloperTrackIds.COMMUNICATION,
      label: "Communication",
      color: "#EDBB99",
      description: "Communication abilities with the team",
    },
    {
      id: DeveloperTrackIds.COMMUNICATION,
      label: "Communication",
      color: "#EDBB99",
      description: "Communication abilities with the team",
    },
    {
      id: DeveloperTrackIds.CUSTOM1,
      label: "Custom 1",
      color: "#145A32",
      description: "Communication abilities with the team",
      customizable: true,
    },
    {
      id: DeveloperTrackIds.CUSTOM2,
      label: "Custom 2",
      color: "#48C9B0",
      description: "Communication abilities with the team",
      customizable: true,
    },
  ],
};
