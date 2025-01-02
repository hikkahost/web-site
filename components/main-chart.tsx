"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  {
    requests: 3836,
    new_hosts: 10,
    date: "2024-04-02",
    new_users: 18,
    errors: 0,
    id: 1
  },
  {
    requests: 14390,
    new_hosts: 11,
    date: "2024-04-03",
    new_users: 94,
    errors: 10,
    id: 2
  },
  {
    requests: 8564,
    new_hosts: 4,
    date: "2024-04-04",
    new_users: 28,
    errors: 2,
    id: 3
  },
  {
    requests: 10303,
    new_hosts: 6,
    date: "2024-04-05",
    new_users: 58,
    errors: 1,
    id: 4
  },
  {
    requests: 12985,
    new_hosts: 6,
    date: "2024-04-06",
    new_users: 30,
    errors: 8,
    id: 5
  },
  {
    requests: 11061,
    new_hosts: 10,
    date: "2024-04-07",
    new_users: 10,
    errors: 83,
    id: 6
  },
  {
    requests: 12936,
    new_hosts: 4,
    date: "2024-04-08",
    new_users: 17,
    errors: 177,
    id: 7
  },
  {
    requests: 16594,
    new_hosts: 5,
    date: "2024-04-09",
    new_users: 13,
    errors: 789,
    id: 8
  },
  {
    requests: 14167,
    new_hosts: 2,
    date: "2024-04-10",
    new_users: 16,
    errors: 140,
    id: 9
  },
  {
    requests: 12071,
    new_hosts: 0,
    date: "2024-04-11",
    new_users: 11,
    errors: 217,
    id: 10
  },
  {
    requests: 11755,
    new_hosts: 1,
    date: "2024-04-12",
    new_users: 7,
    errors: 85,
    id: 11
  },
  {
    requests: 11608,
    new_hosts: 2,
    date: "2024-04-13",
    new_users: 15,
    errors: 71,
    id: 12
  },
  {
    requests: 12352,
    new_hosts: 11,
    date: "2024-04-14",
    new_users: 19,
    errors: 75,
    id: 13
  },
  {
    requests: 10919,
    new_hosts: 0,
    date: "2024-04-15",
    new_users: 10,
    errors: 55,
    id: 14
  },
  {
    requests: 10646,
    new_hosts: 1,
    date: "2024-04-16",
    new_users: 8,
    errors: 67,
    id: 15
  },
  {
    requests: 9751,
    new_hosts: 0,
    date: "2024-04-17",
    new_users: 6,
    errors: 116,
    id: 16
  },
  {
    requests: 9778,
    new_hosts: 1,
    date: "2024-04-18",
    new_users: 2,
    errors: 13,
    id: 17
  },
  {
    requests: 10017,
    new_hosts: 0,
    date: "2024-04-19",
    new_users: 0,
    errors: 22,
    id: 18
  },
  {
    requests: 9993,
    new_hosts: 1,
    date: "2024-04-20",
    new_users: 9,
    errors: 16,
    id: 19
  },
  {
    requests: 10348,
    new_hosts: 1,
    date: "2024-04-21",
    new_users: 14,
    errors: 15,
    id: 20
  },
  {
    requests: 11000,
    new_hosts: 2,
    date: "2024-04-22",
    new_users: 6,
    errors: 19,
    id: 21
  },
  {
    requests: 8662,
    new_hosts: 0,
    date: "2024-04-23",
    new_users: 6,
    errors: 0,
    id: 22
  },
  {
    requests: 11239,
    new_hosts: 1,
    date: "2024-04-24",
    new_users: 13,
    errors: 32,
    id: 23
  },
  {
    requests: 10435,
    new_hosts: 0,
    date: "2024-04-25",
    new_users: 2,
    errors: 28,
    id: 24
  },
  {
    requests: 9183,
    new_hosts: 0,
    date: "2024-04-26",
    new_users: 4,
    errors: 17,
    id: 25
  },
  {
    requests: 9421,
    new_hosts: 0,
    date: "2024-04-27",
    new_users: 5,
    errors: 48,
    id: 26
  },
  {
    requests: 9733,
    new_hosts: 0,
    date: "2024-04-28",
    new_users: 9,
    errors: 43,
    id: 27
  },
  {
    requests: 11604,
    new_hosts: 0,
    date: "2024-04-29",
    new_users: 5,
    errors: 48,
    id: 28
  },
  {
    requests: 9216,
    new_hosts: 0,
    date: "2024-04-30",
    new_users: 8,
    errors: 21,
    id: 29
  },
  {
    requests: 9879,
    new_hosts: 0,
    date: "2024-05-01",
    new_users: 12,
    errors: 21,
    id: 30
  },
  {
    requests: 9434,
    new_hosts: 0,
    date: "2024-05-02",
    new_users: 1,
    errors: 89,
    id: 31
  },
  {
    requests: 9681,
    new_hosts: 1,
    date: "2024-05-03",
    new_users: 3,
    errors: 23,
    id: 32
  },
  {
    requests: 8995,
    new_hosts: 0,
    date: "2024-05-04",
    new_users: 4,
    errors: 16,
    id: 33
  },
  {
    requests: 10360,
    new_hosts: 1,
    date: "2024-05-05",
    new_users: 11,
    errors: 21,
    id: 34
  },
  {
    requests: 11100,
    new_hosts: 4,
    date: "2024-05-06",
    new_users: 4,
    errors: 19,
    id: 35
  },
  {
    requests: 10213,
    new_hosts: 4,
    date: "2024-05-07",
    new_users: 5,
    errors: 33,
    id: 36
  },
  {
    requests: 10211,
    new_hosts: 2,
    date: "2024-05-08",
    new_users: 6,
    errors: 27,
    id: 37
  },
  {
    requests: 9170,
    new_hosts: 0,
    date: "2024-05-09",
    new_users: 4,
    errors: 40,
    id: 38
  },
  {
    requests: 9647,
    new_hosts: 0,
    date: "2024-05-10",
    new_users: 5,
    errors: 23,
    id: 39
  },
  {
    requests: 10721,
    new_hosts: 1,
    date: "2024-05-11",
    new_users: 6,
    errors: 51,
    id: 40
  },
  {
    requests: 10182,
    new_hosts: 0,
    date: "2024-05-12",
    new_users: 3,
    errors: 29,
    id: 41
  },
  {
    requests: 11238,
    new_hosts: 0,
    date: "2024-05-13",
    new_users: 11,
    errors: 57,
    id: 42
  },
  {
    requests: 7917,
    new_hosts: 4,
    date: "2024-05-14",
    new_users: 2,
    errors: 1,
    id: 43
  },
  {
    requests: 9724,
    new_hosts: 3,
    date: "2024-05-15",
    new_users: 14,
    errors: 20,
    id: 44
  },
  {
    requests: 10532,
    new_hosts: 1,
    date: "2024-05-16",
    new_users: 5,
    errors: 55,
    id: 45
  },
  {
    requests: 11985,
    new_hosts: 1,
    date: "2024-05-17",
    new_users: 5,
    errors: 22,
    id: 46
  },
  {
    requests: 11104,
    new_hosts: 2,
    date: "2024-05-18",
    new_users: 4,
    errors: 22,
    id: 47
  },
  {
    requests: 15184,
    new_hosts: 4,
    date: "2024-05-19",
    new_users: 6,
    errors: 48,
    id: 48
  },
  {
    requests: 10766,
    new_hosts: 4,
    date: "2024-05-20",
    new_users: 14,
    errors: 24,
    id: 49
  },
  {
    requests: 11412,
    new_hosts: 0,
    date: "2024-05-21",
    new_users: 2,
    errors: 42,
    id: 50
  },
  {
    requests: 9588,
    new_hosts: 0,
    date: "2024-05-22",
    new_users: 4,
    errors: 20,
    id: 51
  },
  {
    requests: 10686,
    new_hosts: 0,
    date: "2024-05-23",
    new_users: 11,
    errors: 31,
    id: 52
  },
  {
    requests: 9827,
    new_hosts: 0,
    date: "2024-05-24",
    new_users: 3,
    errors: 31,
    id: 53
  },
  {
    requests: 9355,
    new_hosts: 0,
    date: "2024-05-25",
    new_users: 6,
    errors: 23,
    id: 54
  },
  {
    requests: 10825,
    new_hosts: 0,
    date: "2024-05-26",
    new_users: 7,
    errors: 44,
    id: 55
  },
  {
    requests: 9915,
    new_hosts: 0,
    date: "2024-05-27",
    new_users: 3,
    errors: 30,
    id: 56
  },
  {
    requests: 9679,
    new_hosts: 0,
    date: "2024-05-28",
    new_users: 17,
    errors: 23,
    id: 57
  },
  {
    requests: 9177,
    new_hosts: 0,
    date: "2024-05-29",
    new_users: 6,
    errors: 31,
    id: 58
  },
  {
    requests: 9856,
    new_hosts: 0,
    date: "2024-05-30",
    new_users: 11,
    errors: 38,
    id: 59
  },
  {
    requests: 9238,
    new_hosts: 0,
    date: "2024-05-31",
    new_users: 4,
    errors: 97,
    id: 60
  },
  {
    requests: 10609,
    new_hosts: 5,
    date: "2024-06-01",
    new_users: 5,
    errors: 46,
    id: 61
  },
  {
    requests: 9911,
    new_hosts: 0,
    date: "2024-06-02",
    new_users: 5,
    errors: 56,
    id: 62
  },
  {
    requests: 11439,
    new_hosts: 4,
    date: "2024-06-03",
    new_users: 7,
    errors: 33,
    id: 63
  },
  {
    requests: 10695,
    new_hosts: 2,
    date: "2024-06-04",
    new_users: 3,
    errors: 41,
    id: 64
  },
  {
    requests: 10786,
    new_hosts: 1,
    date: "2024-06-05",
    new_users: 3,
    errors: 53,
    id: 65
  },
  {
    requests: 11197,
    new_hosts: 4,
    date: "2024-06-06",
    new_users: 12,
    errors: 61,
    id: 66
  },
  {
    requests: 10110,
    new_hosts: 3,
    date: "2024-06-07",
    new_users: 7,
    errors: 18,
    id: 67
  },
  {
    requests: 15372,
    new_hosts: 7,
    date: "2024-06-08",
    new_users: 13,
    errors: 26,
    id: 68
  },
  {
    requests: 12563,
    new_hosts: 4,
    date: "2024-06-09",
    new_users: 15,
    errors: 19,
    id: 69
  },
  {
    requests: 10425,
    new_hosts: 0,
    date: "2024-06-10",
    new_users: 11,
    errors: 38,
    id: 70
  },
  {
    requests: 8727,
    new_hosts: 0,
    date: "2024-06-11",
    new_users: 5,
    errors: 0,
    id: 71
  },
  {
    requests: 6938,
    new_hosts: 0,
    date: "2024-06-12",
    new_users: 5,
    errors: 18,
    id: 72
  },
  {
    requests: 10966,
    new_hosts: 2,
    date: "2024-06-13",
    new_users: 7,
    errors: 48,
    id: 73
  },
  {
    requests: 11166,
    new_hosts: 6,
    date: "2024-06-14",
    new_users: 11,
    errors: 21,
    id: 74
  },
  {
    requests: 17016,
    new_hosts: 5,
    date: "2024-06-15",
    new_users: 15,
    errors: 596,
    id: 75
  },
  {
    requests: 12275,
    new_hosts: 2,
    date: "2024-06-16",
    new_users: 15,
    errors: 46,
    id: 76
  },
  {
    requests: 12767,
    new_hosts: 4,
    date: "2024-06-17",
    new_users: 9,
    errors: 41,
    id: 77
  },
  {
    requests: 11206,
    new_hosts: 0,
    date: "2024-06-18",
    new_users: 11,
    errors: 74,
    id: 78
  },
  {
    requests: 10944,
    new_hosts: 0,
    date: "2024-06-19",
    new_users: 6,
    errors: 21,
    id: 79
  },
  {
    requests: 11110,
    new_hosts: 2,
    date: "2024-06-20",
    new_users: 4,
    errors: 34,
    id: 80
  },
  {
    requests: 11302,
    new_hosts: 4,
    date: "2024-06-21",
    new_users: 10,
    errors: 69,
    id: 81
  },
  {
    requests: 10113,
    new_hosts: 0,
    date: "2024-06-22",
    new_users: 15,
    errors: 20,
    id: 82
  },
  {
    requests: 11590,
    new_hosts: 0,
    date: "2024-06-23",
    new_users: 8,
    errors: 44,
    id: 83
  },
  {
    requests: 12098,
    new_hosts: 2,
    date: "2024-06-24",
    new_users: 19,
    errors: 23,
    id: 84
  },
  {
    requests: 11490,
    new_hosts: 0,
    date: "2024-06-25",
    new_users: 6,
    errors: 29,
    id: 85
  },
  {
    requests: 11187,
    new_hosts: 0,
    date: "2024-06-26",
    new_users: 3,
    errors: 57,
    id: 86
  },
  {
    requests: 10770,
    new_hosts: 2,
    date: "2024-06-27",
    new_users: 4,
    errors: 0,
    id: 87
  },
  {
    requests: 10183,
    new_hosts: 5,
    date: "2024-06-28",
    new_users: 11,
    errors: 11,
    id: 88
  },
  {
    requests: 12050,
    new_hosts: 5,
    date: "2024-06-29",
    new_users: 11,
    errors: 21,
    id: 89
  },
  {
    requests: 14026,
    new_hosts: 2,
    date: "2024-06-30",
    new_users: 11,
    errors: 15,
    id: 90
  },
  {
    requests: 11388,
    new_hosts: 1,
    date: "2024-07-01",
    new_users: 11,
    errors: 19,
    id: 91
  },
  {
    requests: 13162,
    new_hosts: 2,
    date: "2024-07-02",
    new_users: 7,
    errors: 121,
    id: 92
  },
  {
    requests: 13303,
    new_hosts: 6,
    date: "2024-07-03",
    new_users: 10,
    errors: 31,
    id: 93
  },
  {
    requests: 12716,
    new_hosts: 4,
    date: "2024-07-04",
    new_users: 12,
    errors: 31,
    id: 94
  },
  {
    requests: 14107,
    new_hosts: 3,
    date: "2024-07-05",
    new_users: 11,
    errors: 194,
    id: 95
  },
  {
    requests: 12412,
    new_hosts: 5,
    date: "2024-07-06",
    new_users: 9,
    errors: 46,
    id: 96
  },
  {
    requests: 127281,
    new_hosts: 3,
    date: "2024-07-07",
    new_users: 6,
    errors: 17083,
    id: 97
  },
  {
    requests: 11539,
    new_hosts: 2,
    date: "2024-07-08",
    new_users: 7,
    errors: 297,
    id: 98
  },
  {
    requests: 118243,
    new_hosts: 1,
    date: "2024-07-09",
    new_users: 9,
    errors: 16493,
    id: 99
  },
  {
    requests: 62756,
    new_hosts: 0,
    date: "2024-07-10",
    new_users: 14,
    errors: 7615,
    id: 100
  },
  {
    requests: 9549,
    new_hosts: 0,
    date: "2024-07-11",
    new_users: 2,
    errors: 8,
    id: 101
  },
  {
    requests: 9003,
    new_hosts: 1,
    date: "2024-07-12",
    new_users: 14,
    errors: 30,
    id: 102
  },
  {
    requests: 11767,
    new_hosts: 0,
    date: "2024-07-13",
    new_users: 11,
    errors: 17,
    id: 103
  },
  {
    requests: 11805,
    new_hosts: 2,
    date: "2024-07-14",
    new_users: 7,
    errors: 36,
    id: 104
  },
  {
    requests: 13025,
    new_hosts: 1,
    date: "2024-07-15",
    new_users: 4,
    errors: 631,
    id: 105
  },
  {
    requests: 107110,
    new_hosts: 0,
    date: "2024-07-16",
    new_users: 5,
    errors: 14155,
    id: 106
  },
  {
    requests: 261183,
    new_hosts: 1,
    date: "2024-07-17",
    new_users: 8,
    errors: 37035,
    id: 107
  },
  {
    requests: 184592,
    new_hosts: 4,
    date: "2024-07-18",
    new_users: 11,
    errors: 25604,
    id: 108
  },
  {
    requests: 124569,
    new_hosts: 2,
    date: "2024-07-19",
    new_users: 9,
    errors: 17242,
    id: 109
  },
  {
    requests: 35564,
    new_hosts: 1,
    date: "2024-07-20",
    new_users: 11,
    errors: 4105,
    id: 110
  },
  {
    requests: 12711,
    new_hosts: 4,
    date: "2024-07-21",
    new_users: 16,
    errors: 18,
    id: 111
  },
  {
    requests: 12957,
    new_hosts: 4,
    date: "2024-07-22",
    new_users: 13,
    errors: 41,
    id: 112
  },
  {
    requests: 258200,
    new_hosts: 3,
    date: "2024-07-23",
    new_users: 10,
    errors: 36655,
    id: 113
  },
  {
    requests: 255227,
    new_hosts: 0,
    date: "2024-07-24",
    new_users: 10,
    errors: 36009,
    id: 114
  },
  {
    requests: 81022,
    new_hosts: 3,
    date: "2024-07-25",
    new_users: 4,
    errors: 10264,
    id: 115
  },
  {
    requests: 161927,
    new_hosts: 0,
    date: "2024-07-26",
    new_users: 6,
    errors: 22391,
    id: 116
  },
  {
    requests: 194711,
    new_hosts: 0,
    date: "2024-07-27",
    new_users: 6,
    errors: 27486,
    id: 117
  },
  {
    requests: 10085,
    new_hosts: 2,
    date: "2024-07-28",
    new_users: 15,
    errors: 22,
    id: 118
  },
  {
    requests: 84061,
    new_hosts: 2,
    date: "2024-07-29",
    new_users: 15,
    errors: 11499,
    id: 119
  },
  {
    requests: 80867,
    new_hosts: 2,
    date: "2024-07-30",
    new_users: 7,
    errors: 11442,
    id: 120
  },
  {
    requests: 13556,
    new_hosts: 0,
    date: "2024-07-31",
    new_users: 8,
    errors: 988,
    id: 121
  },
  {
    requests: 100482,
    new_hosts: 1,
    date: "2024-08-01",
    new_users: 10,
    errors: 13830,
    id: 122
  },
  {
    requests: 206101,
    new_hosts: 0,
    date: "2024-08-02",
    new_users: 10,
    errors: 29246,
    id: 123
  },
  {
    requests: 22293,
    new_hosts: 2,
    date: "2024-08-03",
    new_users: 6,
    errors: 2212,
    id: 124
  },
  {
    requests: 151154,
    new_hosts: 0,
    date: "2024-08-04",
    new_users: 14,
    errors: 21254,
    id: 125
  },
  {
    requests: 171932,
    new_hosts: 0,
    date: "2024-08-05",
    new_users: 6,
    errors: 24334,
    id: 126
  },
  {
    requests: 262524,
    new_hosts: 3,
    date: "2024-08-06",
    new_users: 8,
    errors: 37070,
    id: 127
  },
  {
    requests: 163126,
    new_hosts: 1,
    date: "2024-08-07",
    new_users: 10,
    errors: 22559,
    id: 128
  },
  {
    requests: 236141,
    new_hosts: 1,
    date: "2024-08-08",
    new_users: 12,
    errors: 33536,
    id: 129
  },
  {
    requests: 193059,
    new_hosts: 0,
    date: "2024-08-09",
    new_users: 9,
    errors: 27403,
    id: 130
  },
  {
    requests: 173465,
    new_hosts: 0,
    date: "2024-08-10",
    new_users: 5,
    errors: 24617,
    id: 131
  },
  {
    requests: 227801,
    new_hosts: 0,
    date: "2024-08-11",
    new_users: 9,
    errors: 32395,
    id: 132
  },
  {
    requests: 233242,
    new_hosts: 0,
    date: "2024-08-12",
    new_users: 6,
    errors: 33165,
    id: 133
  },
  {
    requests: 213913,
    new_hosts: 0,
    date: "2024-08-13",
    new_users: 4,
    errors: 30429,
    id: 134
  },
  {
    requests: 167954,
    new_hosts: 0,
    date: "2024-08-14",
    new_users: 4,
    errors: 24062,
    id: 135
  },
  {
    requests: 201434,
    new_hosts: 0,
    date: "2024-08-15",
    new_users: 2,
    errors: 28785,
    id: 136
  },
  {
    requests: 238829,
    new_hosts: 1,
    date: "2024-08-16",
    new_users: 2,
    errors: 34031,
    id: 137
  },
  {
    requests: 7341,
    new_hosts: 2,
    date: "2024-08-17",
    new_users: 4,
    errors: 261,
    id: 138
  },
  {
    requests: 143102,
    new_hosts: 0,
    date: "2024-08-18",
    new_users: 8,
    errors: 20032,
    id: 139
  },
  {
    requests: 12141,
    new_hosts: 2,
    date: "2024-08-19",
    new_users: 6,
    errors: 16,
    id: 140
  },
  {
    requests: 10520,
    new_hosts: 0,
    date: "2024-08-20",
    new_users: 2,
    errors: 41,
    id: 141
  },
  {
    requests: 236150,
    new_hosts: 0,
    date: "2024-08-21",
    new_users: 9,
    errors: 33549,
    id: 142
  },
  {
    requests: 245487,
    new_hosts: 0,
    date: "2024-08-22",
    new_users: 6,
    errors: 34801,
    id: 143
  },
  {
    requests: 66877,
    new_hosts: 1,
    date: "2024-08-23",
    new_users: 5,
    errors: 8046,
    id: 144
  },
  {
    requests: 10501,
    new_hosts: 1,
    date: "2024-08-24",
    new_users: 5,
    errors: 17,
    id: 145
  },
  {
    requests: 9447,
    new_hosts: 0,
    date: "2024-08-25",
    new_users: 4,
    errors: 0,
    id: 146
  },
  {
    requests: 71193,
    new_hosts: 0,
    date: "2024-08-26",
    new_users: 9,
    errors: 9296,
    id: 147
  },
  {
    requests: 235995,
    new_hosts: 0,
    date: "2024-08-27",
    new_users: 11,
    errors: 33412,
    id: 148
  },
  {
    requests: 261291,
    new_hosts: 0,
    date: "2024-08-28",
    new_users: 7,
    errors: 37066,
    id: 149
  },
  {
    requests: 246236,
    new_hosts: 0,
    date: "2024-08-29",
    new_users: 3,
    errors: 35052,
    id: 150
  },
  {
    requests: 262122,
    new_hosts: 1,
    date: "2024-08-30",
    new_users: 15,
    errors: 35460,
    id: 151
  },
  {
    requests: 223784,
    new_hosts: 0,
    date: "2024-08-31",
    new_users: 12,
    errors: 31828,
    id: 152
  },
  {
    requests: 253879,
    new_hosts: 0,
    date: "2024-09-01",
    new_users: 11,
    errors: 36403,
    id: 153
  },
  {
    requests: 194519,
    new_hosts: 0,
    date: "2024-09-02",
    new_users: 8,
    errors: 27619,
    id: 154
  },
  {
    requests: 117577,
    new_hosts: 0,
    date: "2024-09-03",
    new_users: 9,
    errors: 16613,
    id: 155
  },
  {
    requests: 219179,
    new_hosts: 0,
    date: "2024-09-04",
    new_users: 2,
    errors: 31068,
    id: 156
  },
  {
    requests: 124682,
    new_hosts: 0,
    date: "2024-09-05",
    new_users: 6,
    errors: 17700,
    id: 157
  },
  {
    requests: 177602,
    new_hosts: 0,
    date: "2024-09-06",
    new_users: 3,
    errors: 25245,
    id: 158
  },
  {
    requests: 256157,
    new_hosts: 0,
    date: "2024-09-07",
    new_users: 9,
    errors: 36506,
    id: 159
  },
  {
    requests: 232498,
    new_hosts: 0,
    date: "2024-09-08",
    new_users: 8,
    errors: 33086,
    id: 160
  },
  {
    requests: 94225,
    new_hosts: 0,
    date: "2024-09-09",
    new_users: 1,
    errors: 13427,
    id: 161
  },
  {
    requests: 169370,
    new_hosts: 1,
    date: "2024-09-10",
    new_users: 8,
    errors: 24031,
    id: 162
  },
  {
    requests: 8335,
    new_hosts: 3,
    date: "2024-09-11",
    new_users: 7,
    errors: 65,
    id: 163
  },
  {
    requests: 12701,
    new_hosts: 8,
    date: "2024-09-12",
    new_users: 8,
    errors: 69,
    id: 164
  },
  {
    requests: 11135,
    new_hosts: 0,
    date: "2024-09-13",
    new_users: 4,
    errors: 33,
    id: 165
  },
  {
    requests: 10444,
    new_hosts: 3,
    date: "2024-09-14",
    new_users: 10,
    errors: 76,
    id: 166
  },
  {
    requests: 9759,
    new_hosts: 0,
    date: "2024-09-15",
    new_users: 4,
    errors: 16,
    id: 167
  },
  {
    requests: 8127,
    new_hosts: 0,
    date: "2024-09-16",
    new_users: 2,
    errors: 33,
    id: 168
  },
  {
    requests: 11922,
    new_hosts: 3,
    date: "2024-09-17",
    new_users: 2,
    errors: 47,
    id: 169
  },
  {
    requests: 11176,
    new_hosts: 1,
    date: "2024-09-18",
    new_users: 5,
    errors: 44,
    id: 170
  },
  {
    requests: 11783,
    new_hosts: 0,
    date: "2024-09-19",
    new_users: 3,
    errors: 61,
    id: 171
  },
  {
    requests: 11267,
    new_hosts: 2,
    date: "2024-09-20",
    new_users: 8,
    errors: 30,
    id: 172
  },
  {
    requests: 11249,
    new_hosts: 1,
    date: "2024-09-21",
    new_users: 3,
    errors: 55,
    id: 173
  },
  {
    requests: 11900,
    new_hosts: 6,
    date: "2024-09-22",
    new_users: 9,
    errors: 15,
    id: 174
  },
  {
    requests: 11145,
    new_hosts: 0,
    date: "2024-09-23",
    new_users: 4,
    errors: 44,
    id: 175
  },
  {
    requests: 11658,
    new_hosts: 2,
    date: "2024-09-24",
    new_users: 5,
    errors: 14,
    id: 176
  },
  {
    requests: 11439,
    new_hosts: 0,
    date: "2024-09-25",
    new_users: 7,
    errors: 22,
    id: 177
  },
  {
    requests: 11310,
    new_hosts: 1,
    date: "2024-09-26",
    new_users: 9,
    errors: 16,
    id: 178
  },
  {
    requests: 11087,
    new_hosts: 1,
    date: "2024-09-27",
    new_users: 9,
    errors: 16,
    id: 179
  },
  {
    requests: 11283,
    new_hosts: 1,
    date: "2024-09-28",
    new_users: 4,
    errors: 16,
    id: 180
  },
  {
    requests: 11432,
    new_hosts: 0,
    date: "2024-09-29",
    new_users: 7,
    errors: 23,
    id: 181
  },
  {
    requests: 10686,
    new_hosts: 0,
    date: "2024-09-30",
    new_users: 6,
    errors: 21,
    id: 182
  },
  {
    requests: 24051,
    new_hosts: 0,
    date: "2024-10-01",
    new_users: 6,
    errors: 21,
    id: 183
  },
  {
    requests: 78803,
    new_hosts: 0,
    date: "2024-10-02",
    new_users: 6,
    errors: 0,
    id: 184
  },
  {
    requests: 74171,
    new_hosts: 1,
    date: "2024-10-03",
    new_users: 1,
    errors: 21,
    id: 185
  },
  {
    requests: 51649,
    new_hosts: 0,
    date: "2024-10-04",
    new_users: 2,
    errors: 0,
    id: 186
  },
  {
    requests: 45795,
    new_hosts: 0,
    date: "2024-10-05",
    new_users: 5,
    errors: 0,
    id: 187
  },
  {
    requests: 76396,
    new_hosts: 0,
    date: "2024-10-06",
    new_users: 8,
    errors: 0,
    id: 188
  },
  {
    requests: 73677,
    new_hosts: 0,
    date: "2024-10-07",
    new_users: 6,
    errors: 5,
    id: 189
  },
  {
    requests: 78450,
    new_hosts: 0,
    date: "2024-10-08",
    new_users: 7,
    errors: 0,
    id: 190
  },
  {
    requests: 79819,
    new_hosts: 0,
    date: "2024-10-09",
    new_users: 6,
    errors: 0,
    id: 191
  },
  {
    requests: 69576,
    new_hosts: 0,
    date: "2024-10-10",
    new_users: 1,
    errors: 8,
    id: 192
  },
  {
    requests: 77976,
    new_hosts: 0,
    date: "2024-10-11",
    new_users: 6,
    errors: 33,
    id: 193
  },
  {
    requests: 79947,
    new_hosts: 0,
    date: "2024-10-12",
    new_users: 11,
    errors: 126,
    id: 194
  },
  {
    requests: 81525,
    new_hosts: 0,
    date: "2024-10-13",
    new_users: 4,
    errors: 0,
    id: 195
  },
  {
    requests: 58936,
    new_hosts: 1,
    date: "2024-10-14",
    new_users: 15,
    errors: 15,
    id: 196
  },
  {
    requests: 10740,
    new_hosts: 7,
    date: "2024-10-15",
    new_users: 2,
    errors: 0,
    id: 197
  },
  {
    requests: 8245,
    new_hosts: 2,
    date: "2024-10-16",
    new_users: 3,
    errors: 0,
    id: 198
  },
  {
    requests: 7324,
    new_hosts: 1,
    date: "2024-10-17",
    new_users: 6,
    errors: 1,
    id: 199
  },
  {
    requests: 8167,
    new_hosts: 0,
    date: "2024-10-18",
    new_users: 4,
    errors: 0,
    id: 200
  },
  {
    requests: 8525,
    new_hosts: 4,
    date: "2024-10-19",
    new_users: 6,
    errors: 7,
    id: 201
  },
  {
    requests: 10237,
    new_hosts: 5,
    date: "2024-10-20",
    new_users: 13,
    errors: 0,
    id: 202
  },
  {
    requests: 11060,
    new_hosts: 5,
    date: "2024-10-21",
    new_users: 13,
    errors: 22,
    id: 203
  },
  {
    requests: 9300,
    new_hosts: 2,
    date: "2024-10-22",
    new_users: 17,
    errors: 3,
    id: 204
  },
  {
    requests: 10402,
    new_hosts: 5,
    date: "2024-10-23",
    new_users: 11,
    errors: 1,
    id: 205
  },
  {
    requests: 10479,
    new_hosts: 3,
    date: "2024-10-24",
    new_users: 7,
    errors: 0,
    id: 206
  },
  {
    requests: 10730,
    new_hosts: 2,
    date: "2024-10-25",
    new_users: 6,
    errors: 0,
    id: 207
  },
  {
    requests: 7756,
    new_hosts: 1,
    date: "2024-10-26",
    new_users: 6,
    errors: 2,
    id: 208
  },
  {
    requests: 8986,
    new_hosts: 1,
    date: "2024-10-27",
    new_users: 10,
    errors: 55,
    id: 209
  },
  {
    requests: 8753,
    new_hosts: 0,
    date: "2024-10-28",
    new_users: 7,
    errors: 0,
    id: 210
  },
  {
    requests: 9946,
    new_hosts: 6,
    date: "2024-10-29",
    new_users: 9,
    errors: 2,
    id: 211
  },
  {
    requests: 13853,
    new_hosts: 4,
    date: "2024-10-30",
    new_users: 42,
    errors: 2,
    id: 212
  },
  {
    requests: 13977,
    new_hosts: 5,
    date: "2024-10-31",
    new_users: 182,
    errors: 4,
    id: 213
  },
  {
    requests: 11923,
    new_hosts: 2,
    date: "2024-11-01",
    new_users: 43,
    errors: 77,
    id: 214
  },
  {
    requests: 10124,
    new_hosts: 2,
    date: "2024-11-02",
    new_users: 25,
    errors: 3,
    id: 215
  },
  {
    requests: 11021,
    new_hosts: 3,
    date: "2024-11-03",
    new_users: 26,
    errors: 0,
    id: 216
  },
  {
    requests: 9203,
    new_hosts: 1,
    date: "2024-11-04",
    new_users: 12,
    errors: 1,
    id: 217
  },
  {
    requests: 8134,
    new_hosts: 3,
    date: "2024-11-05",
    new_users: 10,
    errors: 2,
    id: 218
  },
  {
    requests: 13508,
    new_hosts: 8,
    date: "2024-11-06",
    new_users: 19,
    errors: 1,
    id: 219
  },
  {
    requests: 10651,
    new_hosts: 1,
    date: "2024-11-07",
    new_users: 16,
    errors: 1,
    id: 220
  },
  {
    requests: 9621,
    new_hosts: 4,
    date: "2024-11-08",
    new_users: 14,
    errors: 5,
    id: 221
  },
  {
    requests: 9575,
    new_hosts: 3,
    date: "2024-11-09",
    new_users: 14,
    errors: 4,
    id: 222
  },
  {
    requests: 11175,
    new_hosts: 1,
    date: "2024-11-10",
    new_users: 21,
    errors: 5,
    id: 223
  },
  {
    requests: 11815,
    new_hosts: 2,
    date: "2024-11-11",
    new_users: 22,
    errors: 6,
    id: 224
  },
  {
    requests: 9449,
    new_hosts: 2,
    date: "2024-11-12",
    new_users: 8,
    errors: 0,
    id: 225
  },
  {
    requests: 6870,
    new_hosts: 0,
    date: "2024-11-13",
    new_users: 6,
    errors: 87,
    id: 226
  },
  {
    requests: 10654,
    new_hosts: 4,
    date: "2024-11-14",
    new_users: 19,
    errors: 6,
    id: 227
  },
  {
    requests: 13840,
    new_hosts: 2,
    date: "2024-11-15",
    new_users: 18,
    errors: 47,
    id: 228
  },
  {
    requests: 12151,
    new_hosts: 2,
    date: "2024-11-16",
    new_users: 10,
    errors: 171,
    id: 229
  },
  {
    requests: 10846,
    new_hosts: 2,
    date: "2024-11-17",
    new_users: 13,
    errors: 10,
    id: 230
  },
  {
    requests: 11565,
    new_hosts: 3,
    date: "2024-11-18",
    new_users: 18,
    errors: 22,
    id: 231
  },
  {
    requests: 15288,
    new_hosts: 3,
    date: "2024-11-19",
    new_users: 18,
    errors: 2074,
    id: 232
  },
  {
    requests: 12363,
    new_hosts: 2,
    date: "2024-11-20",
    new_users: 17,
    errors: 32,
    id: 233
  },
  {
    requests: 11402,
    new_hosts: 1,
    date: "2024-11-21",
    new_users: 13,
    errors: 2,
    id: 234
  },
  {
    requests: 15302,
    new_hosts: 6,
    date: "2024-11-22",
    new_users: 12,
    errors: 23,
    id: 235
  },
  {
    requests: 11660,
    new_hosts: 1,
    date: "2024-11-23",
    new_users: 8,
    errors: 6,
    id: 236
  },
  {
    requests: 12492,
    new_hosts: 3,
    date: "2024-11-24",
    new_users: 21,
    errors: 42,
    id: 237
  },
  {
    requests: 12153,
    new_hosts: 2,
    date: "2024-11-25",
    new_users: 11,
    errors: 23,
    id: 238
  },
  {
    requests: 10780,
    new_hosts: 3,
    date: "2024-11-26",
    new_users: 16,
    errors: 1,
    id: 239
  },
  {
    requests: 12938,
    new_hosts: 3,
    date: "2024-11-27",
    new_users: 12,
    errors: 71,
    id: 240
  },
  {
    requests: 9322,
    new_hosts: 0,
    date: "2024-11-28",
    new_users: 10,
    errors: 25,
    id: 241
  },
  {
    requests: 9465,
    new_hosts: 3,
    date: "2024-11-29",
    new_users: 9,
    errors: 11,
    id: 242
  },
  {
    requests: 10519,
    new_hosts: 0,
    date: "2024-11-30",
    new_users: 8,
    errors: 8,
    id: 243
  },
  {
    requests: 12110,
    new_hosts: 5,
    date: "2024-12-01",
    new_users: 16,
    errors: 7,
    id: 244
  },
  {
    requests: 12423,
    new_hosts: 2,
    date: "2024-12-02",
    new_users: 16,
    errors: 4,
    id: 245
  },
  {
    requests: 21038,
    new_hosts: 2,
    date: "2024-12-03",
    new_users: 18,
    errors: 96,
    id: 246
  },
  {
    requests: 14671,
    new_hosts: 2,
    date: "2024-12-04",
    new_users: 10,
    errors: 41,
    id: 247
  },
  {
    requests: 11925,
    new_hosts: 2,
    date: "2024-12-05",
    new_users: 23,
    errors: 23,
    id: 248
  },
  {
    requests: 13524,
    new_hosts: 3,
    date: "2024-12-06",
    new_users: 20,
    errors: 35,
    id: 249
  },
  {
    requests: 17469,
    new_hosts: 0,
    date: "2024-12-07",
    new_users: 28,
    errors: 1715,
    id: 250
  },
  {
    requests: 12617,
    new_hosts: 1,
    date: "2024-12-08",
    new_users: 29,
    errors: 1,
    id: 251
  },
  {
    requests: 20822,
    new_hosts: 11,
    date: "2024-12-09",
    new_users: 21,
    errors: 0,
    id: 252
  },
  {
    requests: 23209,
    new_hosts: 0,
    date: "2024-12-10",
    new_users: 20,
    errors: 25,
    id: 253
  },
  {
    requests: 22093,
    new_hosts: 0,
    date: "2024-12-11",
    new_users: 19,
    errors: 9,
    id: 254
  },
  {
    requests: 21401,
    new_hosts: 12,
    date: "2024-12-12",
    new_users: 26,
    errors: 44,
    id: 255
  },
  {
    requests: 20356,
    new_hosts: 4,
    date: "2024-12-13",
    new_users: 17,
    errors: 43,
    id: 256
  },
  {
    requests: 18645,
    new_hosts: 4,
    date: "2024-12-14",
    new_users: 18,
    errors: 58,
    id: 257
  },
  {
    requests: 15016,
    new_hosts: 3,
    date: "2024-12-15",
    new_users: 23,
    errors: 4,
    id: 258
  },
  {
    requests: 16933,
    new_hosts: 3,
    date: "2024-12-16",
    new_users: 8,
    errors: 30,
    id: 259
  },
  {
    requests: 14043,
    new_hosts: 0,
    date: "2024-12-17",
    new_users: 17,
    errors: 15,
    id: 260
  },
  {
    requests: 13413,
    new_hosts: 1,
    date: "2024-12-18",
    new_users: 25,
    errors: 1,
    id: 261
  },
  {
    requests: 13225,
    new_hosts: 5,
    date: "2024-12-19",
    new_users: 14,
    errors: 25,
    id: 262
  },
  {
    requests: 12415,
    new_hosts: 0,
    date: "2024-12-20",
    new_users: 8,
    errors: 0,
    id: 263
  },
  {
    requests: 11512,
    new_hosts: 0,
    date: "2024-12-21",
    new_users: 10,
    errors: 0,
    id: 264
  },
  {
    requests: 9904,
    new_hosts: 3,
    date: "2024-12-22",
    new_users: 11,
    errors: 0,
    id: 265
  },
  {
    requests: 11552,
    new_hosts: 1,
    date: "2024-12-23",
    new_users: 9,
    errors: 0,
    id: 266
  },
  {
    requests: 12550,
    new_hosts: 1,
    date: "2024-12-24",
    new_users: 9,
    errors: 20,
    id: 267
  },
  {
    requests: 11219,
    new_hosts: 0,
    date: "2024-12-25",
    new_users: 5,
    errors: 0,
    id: 268
  },
  {
    requests: 13099,
    new_hosts: 1,
    date: "2024-12-26",
    new_users: 9,
    errors: 0,
    id: 269
  },
  {
    requests: 14283,
    new_hosts: 3,
    date: "2024-12-27",
    new_users: 26,
    errors: 24,
    id: 270
  },
  {
    requests: 14941,
    new_hosts: 3,
    date: "2024-12-28",
    new_users: 8,
    errors: 0,
    id: 271
  },
  {
    requests: 15880,
    new_hosts: 2,
    date: "2024-12-29",
    new_users: 17,
    errors: 35,
    id: 272
  },
  {
    requests: 15740,
    new_hosts: 3,
    date: "2024-12-30",
    new_users: 16,
    errors: 1,
    id: 273
  },
  {
    requests: 16839,
    new_hosts: 10,
    date: "2024-12-31",
    new_users: 13,
    errors: 58,
    id: 274
  },
  {
    requests: 18968,
    new_hosts: 10,
    date: "2025-01-01",
    new_users: 17,
    errors: 3,
    id: 275
  },
  {
    requests: 6890,
    new_hosts: 1,
    date: "2025-01-02",
    new_users: 5,
    errors: 0,
    id: 276
  }
]

const chartConfig = {
  views: {
    label: "кол-во",
  },
  new_users: {
    label: "Пользователи",
    color: "hsl(var(--chart-1))",
  },
  new_hosts: {
    label: "Продаж",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function MainChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("new_users")

  const total = React.useMemo(
    () => ({
      new_users: chartData.reduce((acc, curr) => acc + curr.new_users, 0),
      new_hosts: chartData.reduce((acc, curr) => acc + curr.new_hosts, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex">
          {["new_users", "new_hosts"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("ru-RU", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ru-RU", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
