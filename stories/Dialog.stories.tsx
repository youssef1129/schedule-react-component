import React from "react";
import { Meta, Story } from '@storybook/react'
import {Dialog,dialogProps} from '../src/Dialog'

const meta: Meta = {
    title: 'Dialog',
    component: Dialog
}

export default meta

const Template: Story<dialogProps> = (args)=> <Dialog {...args} />

export const Default = Template.bind({})