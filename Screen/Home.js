import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Input from "./Input";
import Scroling from "./Scroling";
import SinglePage from "./SinglePage";

const Home = ({navigation}) => {
  let arr = [
    {
      kind: "youtube#searchResult",
      etag: "PwFn-AhBl-EwO2vg7dfOa7wOtjc",
      id: {
        kind: "youtube#video",
        videoId: "gKizDojsdvs",
      },
      snippet: {
        publishedAt: "2022-04-10T04:45:01Z",
        channelId: "UCyoXW-Dse7fURq30EWl_CUA",
        title:
          "KGF (4K Quality) Full Movie | Yash Blockbuster Movie | Srinidhi Shetty, Ananth Nag, Ramachandra Raju",
        description:
          "The movie dates back to 1951. Here, two incidents take place; The birth of the hero and other in the Kolar Gold Fields (K.G.F) they ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gKizDojsdvs/default.jpg",
            width: 120,
            height: 90,
          },
          // snippet?.thumbnails.high
          medium: {
            url: "https://i.ytimg.com/vi/gKizDojsdvs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gKizDojsdvs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Goldmines",
        liveBroadcastContent: "none",
        publishTime: "2022-04-10T04:45:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "HUw50GBdtU8-F39N43PLnK7gjqk",
      id: {
        kind: "youtube#video",
        videoId: "Ek-2VWEvQkQ",
      },
      snippet: {
        publishedAt: "2019-04-04T12:30:00Z",
        channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
        title:
          "Full Video Song:  Sultan | KGF | Yash | Srinidhi Shetty | Ravi Basrur | T-Series",
        description:
          "Presenting the song full video song Sultan Ki from the movie KGF. Ritesh Sidhwani, Farhan Akhtar And AA Films Presents A ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Ek-2VWEvQkQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Ek-2VWEvQkQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Ek-2VWEvQkQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series",
        liveBroadcastContent: "none",
        publishTime: "2019-04-04T12:30:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Yg-sycZi-TXKsajmtUT6_8X87CI",
      id: {
        kind: "youtube#video",
        videoId: "ULEQb_l-N08",
      },
      snippet: {
        publishedAt: "2020-12-13T15:45:01Z",
        channelId: "UCyoXW-Dse7fURq30EWl_CUA",
        title:
          "K.G.F Full Movie | Yash, Srinidhi Shetty, Ananth Nag, Ramachandra Raju, Achyuth Kumar, Malavika",
        description:
          "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ULEQb_l-N08/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ULEQb_l-N08/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ULEQb_l-N08/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Goldmines",
        liveBroadcastContent: "none",
        publishTime: "2020-12-13T15:45:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "hPcaDpnBUv396B-KKuDNKWQFi30",
      id: {
        kind: "youtube#video",
        videoId: "1l0ddVTiYyQ",
      },
      snippet: {
        publishedAt: "2023-01-24T04:00:00Z",
        channelId: "UCd5Os4gT74gxngzUYqGUzzg",
        title:
          "Pathaan Advance Booking Breaks War &amp; KGF 2 Record | Suraj Kumar |",
        description:
          "Hello Everyone Welcome To The New video where we will discuss Whether Pathaan Breaks record of Kgf 2 or Not ! THIS VIDEO ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/1l0ddVTiYyQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/1l0ddVTiYyQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/1l0ddVTiYyQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Suraj Kumar",
        liveBroadcastContent: "none",
        publishTime: "2023-01-24T04:00:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Go5CkMO3WBjM_pyA1l3ToXHOjaw",
      id: {
        kind: "youtube#video",
        videoId: "R4He_Gcn7cA",
      },
      snippet: {
        publishedAt: "2022-04-24T10:00:12Z",
        channelId: "UCarJoVXH0T2pdtcHBu9J8Bw",
        title:
          "The Monster Song - KGF Chapter 2 | Adithi Sagar | Ravi Basrur | Yash | Sanjay Dutt | Prashanth Neel",
        description:
          "Everybody is a Gangster , Till you see the Monster (Promotional Song) Written and Directed by Prashanth Neel Produced by Vijay ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/R4He_Gcn7cA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/R4He_Gcn7cA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/R4He_Gcn7cA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Hombale Films",
        liveBroadcastContent: "none",
        publishTime: "2022-04-24T10:00:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "nBG-kdFMW9e7CHYYNUwmLVfNDgs",
      id: {
        kind: "youtube#video",
        videoId: "ljnLryXNMGc",
      },
      snippet: {
        publishedAt: "2022-05-22T05:28:10Z",
        channelId: "UCAEv0ANkT221wXsTnxFnBsQ",
        title:
          "Sulthana Video Song (Tamil) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel |Ravi Basrur|Hombale",
        description:
          "T-Series Tamil presents Sulthana Full Video Song From KGF Chapter 2 Tamil Movie. #KGFChapter2 #RockingStarYash ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ljnLryXNMGc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ljnLryXNMGc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ljnLryXNMGc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series Tamil",
        liveBroadcastContent: "none",
        publishTime: "2022-05-22T05:28:10Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "H7hy30eAhkQDBXds_VtxmzYYaIw",
      id: {
        kind: "youtube#video",
        videoId: "JKa05nyUmuQ",
      },
      snippet: {
        publishedAt: "2022-03-27T13:10:32Z",
        channelId: "UCn9BuiRZGR_tPM2GGT4jN-w",
        title:
          "KGF Chapter 2 Trailer|Hindi|Yash|Sanjay Dutt|Raveena Tandon|Srinidhi|Prashanth Neel|Vijay Kiragandur",
        description:
          "KGF Chapter 2 releases on 14th April, 2022 Presented by Ritesh Sidhwani, Farhan Akhtar and AA FIlms Written and Directed by ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JKa05nyUmuQ/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JKa05nyUmuQ/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JKa05nyUmuQ/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Excel Movies",
        liveBroadcastContent: "none",
        publishTime: "2022-03-27T13:10:32Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "L7K5bUm2UPfZKoDSD7axi-KjT7I",
      id: {
        kind: "youtube#video",
        videoId: "6Hvc-xpNTME",
      },
      snippet: {
        publishedAt: "2019-04-10T10:19:19Z",
        channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
        title:
          "Full Video: SALAAM ROCKY BHAI | KGF Chapter 1 | Yash, Srinidhi Shetty | Prashanth Neel",
        description:
          "We bring to you the full video song from the movie KGF Chapter 1. The movie is Starring Yash, Srinidhi Shetty, Ayyapa, B Suresh, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/6Hvc-xpNTME/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/6Hvc-xpNTME/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/6Hvc-xpNTME/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series",
        liveBroadcastContent: "none",
        publishTime: "2019-04-10T10:19:19Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "POrfrZGi1g3yllNxaviFVaJyj1I",
      id: {
        kind: "youtube#video",
        videoId: "qoZncUT-B9Y",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:11Z",
        channelId: "UCnSqxrSfo1sK4WZ7nBpYW1Q",
        title:
          "Mehabooba Video Song (Tamil) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur",
        description:
          "Watch Mehabooba Full Video Song From KGF Chapter 2 Tamil Movie. Subscribe to our Youtube Channel : http://bit.ly/1hE4KpS ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qoZncUT-B9Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qoZncUT-B9Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qoZncUT-B9Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lahari Music | T-Series",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "OiZ99Ki-b0CewuOTG0jfJ-RH9pQ",
      id: {
        kind: "youtube#video",
        videoId: "5CP9fycq8pk",
      },
      snippet: {
        publishedAt: "2022-04-06T07:28:43Z",
        channelId: "UCyvSN-Hw7dQ3IwV_w9NL5RA",
        title:
          "Falak Tu Garaj Tu Lyrical (Hindi) | KGF Chapter 2 | Rocking Star Yash | Prashanth Neel | Ravi Basrur",
        description:
          "Watch Falak Tu Garaj Tu Lyrical Video Song From KGF Chapter 2 Hindi Movie. Subscribe to our Youtube Channel ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/5CP9fycq8pk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/5CP9fycq8pk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/5CP9fycq8pk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MRT Music",
        liveBroadcastContent: "none",
        publishTime: "2022-04-06T07:28:43Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "ussWi3su0Afk707sSI3HOYfuUT8",
      id: {
        kind: "youtube#video",
        videoId: "aFnXDhzeheE",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:11Z",
        channelId: "UCUoj77TIUy9DhLNe5EVmF-A",
        title:
          "Full Video: Mehabooba (Malayalam) - KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur",
        description:
          "T-Series Malayalam presents Mehabooba Full Video Song From KGF Chapter 2 Malayalam Movie. #KGFChapter2 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/aFnXDhzeheE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/aFnXDhzeheE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/aFnXDhzeheE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series Malayalam",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "QN-WBsuI4BBR0qAdaVvQWb02v0U",
      id: {
        kind: "youtube#video",
        videoId: "E568ctRIdLE",
      },
      snippet: {
        publishedAt: "2022-07-04T06:07:07Z",
        channelId: "UCh5gGGS_dq4HF-r6A3Qihiw",
        title:
          "KGF 2 Kalashnikov-Ak47 Scene[HD print] | Kalashnikov scene | KGF get out of my way Scene |",
        description:
          "kgf chapter 2 hd clipKGF2 KALASHNIKOV Scene Rocky meets Adheera Scene Rocky Return Scene Get out of my way Scene ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/E568ctRIdLE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/E568ctRIdLE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/E568ctRIdLE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "SH Tech",
        liveBroadcastContent: "none",
        publishTime: "2022-07-04T06:07:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "rX6CgZTlyxEvjVoGAWq752Q-NKw",
      id: {
        kind: "youtube#video",
        videoId: "sEY3CCuvzeA",
      },
      snippet: {
        publishedAt: "2022-05-22T05:28:13Z",
        channelId: "UCUoj77TIUy9DhLNe5EVmF-A",
        title:
          "Sulthana Video Song(Malayalam) | KGF Chapter 2 | RockingStar Yash|Prashanth Neel|Ravi Basrur|Hombale",
        description:
          "T-Series Malayalam presents Sulthana Full Video Song From KGF Chapter 2 Malayalam Movie. #KGFChapter2 ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/sEY3CCuvzeA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/sEY3CCuvzeA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/sEY3CCuvzeA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series Malayalam",
        liveBroadcastContent: "none",
        publishTime: "2022-05-22T05:28:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "_UIno4ZVVdWEjp6n6SbOib6Iiiw",
      id: {
        kind: "youtube#video",
        videoId: "5xwM12SOXEE",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:12Z",
        channelId: "UCnSqxrSfo1sK4WZ7nBpYW1Q",
        title:
          "Mehabooba Video Song (Telugu) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur",
        description:
          "Watch Mehabooba Full Video Song From KGF Chapter 2 Telugu Movie. Subscribe to our Youtube Channel : http://bit.ly/1hE4KpS ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/5xwM12SOXEE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/5xwM12SOXEE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/5xwM12SOXEE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lahari Music | T-Series",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "q_-95njYQgY9q8du7XuGnOgqXm0",
      id: {
        kind: "youtube#video",
        videoId: "l4rry6wKeCM",
      },
      snippet: {
        publishedAt: "2021-08-25T05:38:49Z",
        channelId: "UCn9BuiRZGR_tPM2GGT4jN-w",
        title:
          "Sabse Bada Yodhaa | KGF Chapter 1 | Yash | Srinidhi Shetty | Prashanth Neel",
        description:
          "KGF Chapter 1 Presented by Ritesh Sidhwani, Farhan Akhtar, and AA Films Producer - Vijay Kiragandur, Hombale Films Director ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/l4rry6wKeCM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/l4rry6wKeCM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/l4rry6wKeCM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Excel Movies",
        liveBroadcastContent: "none",
        publishTime: "2021-08-25T05:38:49Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "m1pniubLQdLEnYVdvGNk_pCjYOE",
      id: {
        kind: "youtube#video",
        videoId: "q_hevkY0hhY",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:12Z",
        channelId: "UCAEv0ANkT221wXsTnxFnBsQ",
        title:
          "Full Video: Mehabooba (Tamil) KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur",
        description:
          "T-Series Tamil presents Mehabooba Full Video Song From KGF Chapter 2 Tamil Movie. #KGFChapter2 #RockingStarYash ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/q_hevkY0hhY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/q_hevkY0hhY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/q_hevkY0hhY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "T-Series Tamil",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FqIstWwTHpjm_GsYkDiYJ_Xp4Go",
      id: {
        kind: "youtube#video",
        videoId: "lfuOsQRah_A",
      },
      snippet: {
        publishedAt: "2022-05-08T07:28:12Z",
        channelId: "UCyvSN-Hw7dQ3IwV_w9NL5RA",
        title:
          "Falak Tu Garaj Tu Video Song(Hindi) | KGF Chapter 2 | Rocking Star Yash | Prashanth Neel|Ravi Basrur",
        description:
          "Watch Falak Tu Garaj Tu Full Video Song From KGF Chapter 2 Hindi Movie. Subscribe to our Youtube Channel ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/lfuOsQRah_A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/lfuOsQRah_A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/lfuOsQRah_A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MRT Music",
        liveBroadcastContent: "none",
        publishTime: "2022-05-08T07:28:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "ccoxyfXzbwJKCnn1ZRnCGHAwjFI",
      id: {
        kind: "youtube#video",
        videoId: "2hn32shF0uU",
      },
      snippet: {
        publishedAt: "2022-09-28T14:49:07Z",
        channelId: "UCMt3AHillu2hjdmgRiSXhBg",
        title:
          "Rocky Destroy Police station KGF Ch 2 . Rocky&#39;s Full name revealed. Rocky Attitude level",
        description:
          "Rocky Destroy Police station KGF Ch 2 . Rocky's Full name revealed. Rocky Attitude level MAX KGF Chapter 2 || Police station ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/2hn32shF0uU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/2hn32shF0uU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/2hn32shF0uU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Devsaria Fact",
        liveBroadcastContent: "none",
        publishTime: "2022-09-28T14:49:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "vsdRCj4knJIG3KSyZauDZki7j_I",
      id: {
        kind: "youtube#video",
        videoId: "Y5gY1MnqiPw",
      },
      snippet: {
        publishedAt: "2022-01-11T07:54:35Z",
        channelId: "UCn9BuiRZGR_tPM2GGT4jN-w",
        title:
          "Rocky meets Reena | KGF Chapter 1 | Yash | Srinidhi Shetty | Prashanth Neel",
        description:
          "Presented by Ritesh Sidhwani, Farhan Akhtar, and AA Films Producer - Vijay Kiragandur, Hombale Films Director - Prashanth ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Y5gY1MnqiPw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Y5gY1MnqiPw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Y5gY1MnqiPw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Excel Movies",
        liveBroadcastContent: "none",
        publishTime: "2022-01-11T07:54:35Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "5DZzkr-J5c869iFD4MwcoKUzhb8",
      id: {
        kind: "youtube#video",
        videoId: "C8ByfT19Xns",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:29Z",
        channelId: "UCnSqxrSfo1sK4WZ7nBpYW1Q",
        title:
          "Mehabooba Video Song (Malayalam) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur",
        description:
          "Watch Mehabooba Full Video Song From KGF Chapter 2 Malayalam Movie. Subscribe to our Youtube Channel ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/C8ByfT19Xns/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/C8ByfT19Xns/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/C8ByfT19Xns/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lahari Music | T-Series",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:29Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "_pDjypFBo9C_utgCgixQVa9hXKY",
      id: {
        kind: "youtube#video",
        videoId: "Qah9sSIXJqk",
      },
      snippet: {
        publishedAt: "2021-01-07T15:57:35Z",
        channelId: "UCarJoVXH0T2pdtcHBu9J8Bw",
        title:
          "KGF Chapter2 TEASER |Yash|Sanjay Dutt|Raveena Tandon|Srinidhi Shetty|Prashanth Neel|Vijay Kiragandur",
        description:
          "Here We Go, Glimpse Into An Empire Called KGF and a Glance of Rocky's World. Hombale Films Presents the Official Teaser of ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Qah9sSIXJqk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Qah9sSIXJqk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Qah9sSIXJqk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Hombale Films",
        liveBroadcastContent: "none",
        publishTime: "2021-01-07T15:57:35Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "am9C0DI2tvTCKDGBxQYtyj-IG00",
      id: {
        kind: "youtube#video",
        videoId: "TNFXSKbQ3JA",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:11Z",
        channelId: "UCnSqxrSfo1sK4WZ7nBpYW1Q",
        title:
          "Mehabooba Video Song (Kannada) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur",
        description:
          "Watch Mehabooba Full Video Song From KGF Chapter 2 Kannada Movie. Subscribe to our Youtube Channel ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/TNFXSKbQ3JA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/TNFXSKbQ3JA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/TNFXSKbQ3JA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lahari Music | T-Series",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "vvilQfxgC8xILkY1sxQy9PPrzIs",
      id: {
        kind: "youtube#video",
        videoId: "PWaPCqeCfeY",
      },
      snippet: {
        publishedAt: "2022-05-22T05:28:13Z",
        channelId: "UCyvSN-Hw7dQ3IwV_w9NL5RA",
        title:
          "Sulthan Video Song (Hindi) | KGF Chapter 2 | Rocking Star Yash |Prashanth Neel |Ravi Basrur |Hombale",
        description:
          "Watch Sulthan Full Video Song From KGF Chapter 2 Hindi Movie. Subscribe to our YouTube Channel : https://goo.gl/ipyBgP ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/PWaPCqeCfeY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/PWaPCqeCfeY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/PWaPCqeCfeY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MRT Music",
        liveBroadcastContent: "none",
        publishTime: "2022-05-22T05:28:13Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "qGelO7OjTh0KEQHRaLhb6B-m9JM",
      id: {
        kind: "youtube#video",
        videoId: "0JBArPmYf8k",
      },
      snippet: {
        publishedAt: "2022-05-18T05:28:12Z",
        channelId: "UCnSqxrSfo1sK4WZ7nBpYW1Q",
        title:
          "Toofan Video Song (Tamil) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel | Ravi Basrur |Hombale",
        description:
          "Watch Toofan Full Video Song From KGF Chapter 2 Tamil Movie. Subscribe to our Youtube Channel : http://bit.ly/1hE4KpS ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0JBArPmYf8k/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0JBArPmYf8k/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0JBArPmYf8k/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lahari Music | T-Series",
        liveBroadcastContent: "none",
        publishTime: "2022-05-18T05:28:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "RFr5Ca4OK71KMoZsrfpaOxgbIho",
      id: {
        kind: "youtube#video",
        videoId: "nXd6QIxKh9o",
      },
      snippet: {
        publishedAt: "2023-01-24T05:56:18Z",
        channelId: "UCFRlIV1mX-traJb5fd7S3nw",
        title:
          "KGF Babu : ಕೋಲಾರದಲ್ಲಿ 15 ಕೋಟಿ ರೂ. ಖರ್ಚು ಮಾಡಿದ್ದೀನಿ | 2023 Election | @newsfirstkannada",
        description:
          "KGF Babu : ಕೋಲಾರದಲ್ಲಿ 15 ಕೋಟಿ ರೂ. ಖರ್ಚು ಮಾಡಿದ್ದೀನಿ | 2023 Election | @newsfirstkannada ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nXd6QIxKh9o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nXd6QIxKh9o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nXd6QIxKh9o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "NewsFirst Kannada",
        liveBroadcastContent: "none",
        publishTime: "2023-01-24T05:56:18Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "2ChHMqozaoOwVWBZq2s76G5QCf4",
      id: {
        kind: "youtube#video",
        videoId: "2U7eBPOqcwU",
      },
      snippet: {
        publishedAt: "2023-01-23T13:08:30Z",
        channelId: "UCz0iMkwrDvGX9WHEY3fL46w",
        title:
          "Pathaan Box Office Collection | Pathaan Advance Booking Collection | KGF2 Vs Pathaan, Shahrukh khan",
        description:
          "Pathaan Box Office Collection | Pathaan Advance Booking Collection | KGF2 Vs Pathaan, Shahrukh khan Pathaan Advance ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/2U7eBPOqcwU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/2U7eBPOqcwU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/2U7eBPOqcwU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Crick Bolly",
        liveBroadcastContent: "none",
        publishTime: "2023-01-23T13:08:30Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "BnntKtsRQFpvoN4eYV5TIXnvg_c",
      id: {
        kind: "youtube#video",
        videoId: "_zG83L8mhTs",
      },
      snippet: {
        publishedAt: "2021-01-08T06:05:26Z",
        channelId: "UCjoDGt2-8dGF_-R63g7on6w",
        title:
          "KGF THEME SONG/KGF BGM FT POWERFUL PEOPLE MAKE PLACES POWERFUL ROCKY || Check Description",
        description:
          "Guys you can download groww app get 100 rupees for just signing in and 100 rupees for sharing your friends so just take ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/_zG83L8mhTs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/_zG83L8mhTs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/_zG83L8mhTs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MUSIC X BGM",
        liveBroadcastContent: "none",
        publishTime: "2021-01-08T06:05:26Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "pAIVc2dRr8u9oPzWdcuJLnaSizw",
      id: {
        kind: "youtube#video",
        videoId: "pNpk_C24muM",
      },
      snippet: {
        publishedAt: "2023-01-24T05:39:31Z",
        channelId: "UCFRlIV1mX-traJb5fd7S3nw",
        title:
          "KGF Babu : ನನ್ಗೆ ನಮ್ಮದೇ ಪಕ್ಷದವ್ರು ತೊಂದರೆ ಕೊಡ್ತಿದ್ದಾರೆ! | Congress | @newsfirstkannada",
        description:
          "KGF Babu : ನನ್ಗೆ ನಮ್ಮದೇ ಪಕ್ಷದವ್ರು ತೊಂದರೆ ಕೊಡ್ತಿದ್ದಾರೆ! | Congress ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/pNpk_C24muM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/pNpk_C24muM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/pNpk_C24muM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "NewsFirst Kannada",
        liveBroadcastContent: "none",
        publishTime: "2023-01-24T05:39:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Vi5rTmdOVS-arILomsQ3W6tseGU",
      id: {
        kind: "youtube#video",
        videoId: "utmnQ_aUGr8",
      },
      snippet: {
        publishedAt: "2022-05-22T05:28:11Z",
        channelId: "UCnSqxrSfo1sK4WZ7nBpYW1Q",
        title:
          "Sulthana Video Song (Telugu) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel|Ravi Basrur|Hombale",
        description:
          "Watch Sulthana Full Video Song From KGF Chapter 2 Telugu Movie. Subscribe to our Youtube Channel : http://bit.ly/1hE4KpS ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/utmnQ_aUGr8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/utmnQ_aUGr8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/utmnQ_aUGr8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Lahari Music | T-Series",
        liveBroadcastContent: "none",
        publishTime: "2022-05-22T05:28:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "xmk73rVOvDgcNeuyvTJJf87T-kk",
      id: {
        kind: "youtube#video",
        videoId: "suk3mW0tDPA",
      },
      snippet: {
        publishedAt: "2022-05-11T05:28:09Z",
        channelId: "UCyvSN-Hw7dQ3IwV_w9NL5RA",
        title:
          "Mehabooba Video Song (Hindi) | KGF Chapter 2 | RockingStar Yash | Prashanth Neel|Ravi Basrur|Hombale",
        description:
          "KGFChapter2 #RockingStarYash #MehaboobaSong #Mehabooba #KGFChapter2Songs #KGFChapter2Teaser #HombaleFilms ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/suk3mW0tDPA/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/suk3mW0tDPA/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/suk3mW0tDPA/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MRT Music",
        liveBroadcastContent: "none",
        publishTime: "2022-05-11T05:28:09Z",
      },
    },
  ];
  const [videoArray, setVideoArray] = useState( arr  || []);
  console.log("Home Page");
  return (
    <View>
      {/* <Header /> */}
      <Input setVideoArray={setVideoArray} />
      <View style={styles.box}>
        <Scroling data={videoArray} navigation={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 0,
  },
});
export default Home;
