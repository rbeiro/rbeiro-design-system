import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@rbeiro-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/rbeiro.png",
    alt: "Gabriel Ribeiro",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: "undefnied",
  },
};
