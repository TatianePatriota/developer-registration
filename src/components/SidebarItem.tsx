import { Link } from "react-router-dom";
import {
  StyledDescription,
  StyledIconArea,
  StyledInfo,
  StyledPoint,
  StyledSidebarItem,
  StyledTitle,
} from "./StyledSidebarItem";
import { ContactsIcon, IconProfile, ProfessionalIcon } from "./Icons";

export enum IconsName {
  Profile = "Profile",
  Book = "Profissional",
  Email = "Email",
}

export type SidebarItemType = {
  title: string;
  description: string;
  iconName: IconsName;
  path: string;
  active: boolean;
};

export type itemType = {
  iconSidebar: IconsName;
};

export function SidebarIcons({ iconSidebar }: itemType) {
  switch (iconSidebar) {
    case IconsName.Profile:
      return <IconProfile />;
    case IconsName.Book:
      return <ProfessionalIcon />;
    case IconsName.Email:
      return <ContactsIcon />;
    default:
      return <></>;
  }
}

export function SidebarItem({
  title,
  description,
  iconName,
  path,
  active,
}: SidebarItemType) {
  return (
    <StyledSidebarItem>
      <Link to={path}>
        <StyledInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledInfo>
        <StyledIconArea active={active}>
          <SidebarIcons iconSidebar={iconName} />
        </StyledIconArea>
        <StyledPoint active={active} />
      </Link>
    </StyledSidebarItem>
  );
}
