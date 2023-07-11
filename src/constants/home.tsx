import React from 'react'
import {
  BuildingBankIcon,
  BuildingBankToolboxIcon,
  ClipboardTaskListIcon,
  DesktopPulseIcon,
  PeopleCommunityIcon,
  ToolboxIcon,
} from '@components/Icons'
import { Translation } from '@constants/translations'
import { t } from 'i18next'

export const data1 = [
  { id: 1, number: '43', text: 'Lorem ipsum dolor sit amet consectetur' },
  { id: 2, number: '200+', text: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, number: '95', text: 'Lorem ipsum dolor sit amet consecteturamet.' },
]

export const helps = [
  {
    id: 1,
    name: t(Translation.PAGE_HOME_SECTIONS_MASTERS_TITLE),
    icon: <PeopleCommunityIcon />,
    href: '/fill-the-form',
  },
  {
    id: 2,
    name: t(Translation.PAGE_HOME_SECTIONS_COMPANIES_TITLE),
    icon: <BuildingBankToolboxIcon />,
    href: '/fill-the-form',
  },
  {
    id: 3,
    name: t(Translation.PAGE_HOME_SECTIONS_EDUCATIONAL_INSTITUTES_TITLE),
    icon: <BuildingBankIcon />,
    href: '/fill-the-form',
  },
  {
    id: 4,
    name: t(Translation.PAGE_HOME_SECTIONS_MONITORING_SYSTEMS_TITLE),
    icon: <DesktopPulseIcon />,
    href: '/fill-the-form',
  },
  {
    id: 5,
    name: t(Translation.PAGE_HOME_SECTIONS_JOBS_TITLE),
    icon: <ToolboxIcon />,
    href: '/fill-the-form',
  },
  {
    id: 6,
    name: t(Translation.PAGE_HOME_SECTIONS_PRACTICE_TITLE),
    icon: <ClipboardTaskListIcon />,
    href: '/fill-the-form?path=Practice',
  },
]
