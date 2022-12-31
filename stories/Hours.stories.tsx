import React from "react";
import { Meta, Story } from '@storybook/react'
import {Hours, hoursProps} from '../src/Hours'

const meta: Meta = {
    title: 'Hours',
    component: Hours
}

export default meta

const Template: Story<hoursProps> = (args)=> <Hours {...args} />

export const Default = Template.bind({})