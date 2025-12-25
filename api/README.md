# Contact API

Simple PHP API for handling contact form submissions.

## Endpoints

### POST /contact

Submit a contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about Clean Water",
  "message": "I'd like to know more about your programs."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We will get back to you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required",
    "Invalid email format"
  ]
}
```

## Rate Limiting

- **Limit**: 5 requests per hour per IP address
- **Response Code**: 429 Too Many Requests

## CORS

Allowed origins:
- https://cleanwaterndigbo.org
- https://www.cleanwaterndigbo.org
- http://localhost:8080 (development)

## Status Codes

- `200` - Success
- `400` - Validation error
- `405` - Method not allowed (use POST)
- `429` - Rate limit exceeded
- `500` - Server error

## Local Development

1. Copy `.env.example.php` to `.env.php`
2. Update credentials in `.env.php`
3. Start PHP server: `php -S localhost:8000`
4. Test endpoint: `curl -X POST http://localhost:8000/contact -d '{"name":"Test","email":"test@example.com","message":"Hello"}'`

## Deployment

See [API_DEPLOYMENT.md](../API_DEPLOYMENT.md) for full deployment instructions.
