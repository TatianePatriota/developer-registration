import {
  StyledContainerOptions,
  StyledDescription,
  StyledIcon,
  StyledInfo,
  StyledTitle,
} from "./StyledSelectOptions";

export type SelectOptionsType = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
};

export function SelectOptions({
  title,
  description,
  icon,
  selected,
  onClick,
}: SelectOptionsType) {
  return (
    <StyledContainerOptions selected={selected} onClick={onClick}>
      <StyledIcon>{icon}</StyledIcon>
      <StyledInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledInfo>
    </StyledContainerOptions>
  );
}
