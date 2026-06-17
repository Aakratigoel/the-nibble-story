import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      eventDate,
      eventType,
      numberOfGuests,
      cateringStyle,
      eventLocation,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: 'The Nibble Story <hello@thenibblestory.com>',
      to: ['thenibblestory@gmail.com'],
      subject: `New Event Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6f927f; border-bottom: 2px solid #6f927f; padding-bottom: 10px;">
            New Event Inquiry
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #2d3d34; margin-bottom: 10px;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #2d3d34; margin-bottom: 10px;">Event Details</h3>
            <p><strong>Event Date:</strong> ${eventDate}</p>
            <p><strong>Event Type:</strong> ${eventType}</p>
            <p><strong>Number of Guests:</strong> ${numberOfGuests}</p>
            <p><strong>Event Location:</strong> ${eventLocation || 'Not specified'}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #2d3d34; margin-bottom: 10px;">Catering Preferences</h3>
            <p><strong>Catering Style:</strong> ${cateringStyle.length > 0 ? cateringStyle.join(', ') : 'Not specified'}</p>
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #2d3d34; margin-bottom: 10px;">Additional Information</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This inquiry was submitted from The Nibble Story contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}
