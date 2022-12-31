import React from "react";
import { Meta, Story } from '@storybook/react'
import {Calendar, calendarProps} from '../src/Calendar'

const meta: Meta = {
    title: 'Calendar',
    component: Calendar
}

export default meta

const Template: Story<calendarProps> = (args)=> <Calendar {...args} />

export const Default = Template.bind({})