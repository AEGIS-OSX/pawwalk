// TODO: Implement Mailchimp API integration
// This endpoint should:
// 1. Validate the email address
// 2. POST to Mailchimp API with double opt-in enabled
// 3. Add to list: "pawwalk_launch"
// 4. Return success/error response
//
// Environment variables needed:
// - MAILCHIMP_API_KEY: Your Mailchimp API key
// - MAILCHIMP_LIST_ID: The list ID for "pawwalk_launch"
// - MAILCHIMP_SERVER_PREFIX: Your Mailchimp server prefix (e.g., "us1")
//
// Example implementation:
// import { NextRequest, NextResponse } from 'next/server';
//
// export async function POST(request: NextRequest) {
//   const { email } = await request.json();
//
//   if (!email || !email.includes('@')) {
//     return NextResponse.json(
//       { error: 'Invalid email' },
//       { status: 400 }
//     );
//   }
//
//   const apiKey = process.env.MAILCHIMP_API_KEY;
//   const listId = process.env.MAILCHIMP_LIST_ID;
//   const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
//
//   if (!apiKey || !listId || !serverPrefix) {
//     return NextResponse.json(
//       { error: 'Missing Mailchimp configuration' },
//       { status: 500 }
//     );
//   }
//
//   try {
//     const response = await fetch(
//       `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
//       {
//         method: 'POST',
//         headers: {
//           'Authorization': `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email_address: email,
//           status: 'pending', // Double opt-in
//           tags: ['launch'],
//         }),
//       }
//     );
//
//     if (!response.ok) {
//       const error = await response.json();
//       return NextResponse.json(
//         { error: error.detail || 'Failed to subscribe' },
//         { status: response.status }
//       );
//     }
//
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Placeholder: returns success for now
  // Replace with actual Mailchimp integration above
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Invalid email' },
      { status: 400 }
    );
  }

  // TODO: Implement actual Mailchimp API call
  return NextResponse.json({ success: true });
}
