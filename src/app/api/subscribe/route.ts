import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 500 });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY!.split("-")[1];

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apiKey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      },
    );

    if (response.status >= 400) {
      const { detail } = await response.json();

      return NextResponse.json(
        {
          error: detail || "There was an error subscribing to the newsletter.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ error: "" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 },
    );
  }
}
