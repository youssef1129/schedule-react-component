import React from "react";
import { Meta, Story } from '@storybook/react'
import {Schedule,scheduleProps} from '../src/Schedule'

const meta: Meta = {
    title: 'Schedule',
    component: Schedule
}

export default meta

const Template: Story<scheduleProps> = (args)=> <Schedule {...args} />

export const Default = Template.bind({})