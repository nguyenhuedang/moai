import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button, ButtonProps } from "./button";

// This default export determines where your story goes in the story list
export default {
	title: "Button",
	component: Button,
	argTypes: {
		style: {
			name: "style",
			type: { name: "object", required: true },
			defaultValue: JSON.stringify(Button.styles.outset),
			control: {
				type: "inline-radio",
				options: {
					outset: JSON.stringify(Button.styles.outset),
					flat: JSON.stringify(Button.styles.flat),
				},
			},
		},
		size: {
			name: "size",
			type: { name: "object", required: true },
			defaultValue: JSON.stringify(Button.sizes.medium),
			control: {
				type: "inline-radio",
				options: {
					medium: JSON.stringify(Button.sizes.medium),
					small: JSON.stringify(Button.sizes.small),
				},
			},
		},
		highlight: {
			name: "highlight",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		// icon: {
		// 	name: "icon",
		// 	type: { name: "object", required: false },
		// 	defaultValue: coreIcons.blank,
		// 	control: {
		// 		type: "select",
		// 		options: icons,
		// 	},
		// },
		disabled: {
			name: "disable",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		selected: {
			name: "selected",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		isFullWidth: {
			name: "isFullWidth",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		isBusy: {
			name: "isBusy",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		reverse: {
			name: "reverse",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
	},
};

const Template: Story<ButtonProps> = (args) => {
	return (
		<>
			<Button
				{...args}
				style={JSON.parse(args.style + "")}
				size={JSON.parse(args.size + "")}
			>
				{args.children}
			</Button>
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	children: "This is button",
};
