// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  tickets: {
    id: number;
    name: string;
    subject: string;
    date: string;
    time: string;
    lastMessage: string;
    completed : boolean;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ tickets: [ 
    {
      id: 1,
      name: "Emilia Williamson",
      subject: "Mould under sink",
      date: "2021-05-01",
      time: "10:00",
      lastMessage:
        "There is mould under the sink in the kitchen. Please can you send someone to fix it.",
      completed: false,
    },
    {
      id: 2,
      name: "Jason Chalangary",
      subject: "Broken toilet",
      date: "2021-07-01",
      time: "11:00",
      lastMessage:
        "The toilet in the bathroom is broken. Please can you send someone to fix it.",
        completed : true,
    },
    {
      id: 3,
      name: "Liam Smith",
      subject: "Broken window",
      date: "2021-08-01",
      time: "12:00",
      lastMessage:
        "The window in the bedroom is broken. Please can you send someone to fix it.",
      completed: false,
    },
    {
      id: 4,
      name: "Olivia Jones",
      subject: "Broken door",
      date: "2021-09-01",
      time: "13:00",
      lastMessage:
        "The door in the living room is broken. Please can you send someone to fix it.",
        completed: true,
    },

  ] });
}

