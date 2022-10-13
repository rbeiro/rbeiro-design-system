import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@rbeiro-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, velit! Vero explicabo obcaecati itaque, minima quam doloremque reiciendis quasi magnam nisi officia nostrum id tempora, non accusamus recusandae fugit perspiciatis.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
