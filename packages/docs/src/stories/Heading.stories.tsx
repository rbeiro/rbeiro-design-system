import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@rbeiro-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom Title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "h1 Heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2` porém com a propriedade `as` isso pode ser alterado.",
      },
    },
  },
};
