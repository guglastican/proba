# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please follow these steps:

1. **Do not** create a public GitHub issue.
2. Send an email to [your-security-contact@example.com] with details of the vulnerability.
3. Provide a detailed description of the issue, including:
   - Potential impact
   - Steps to reproduce
   - Suggested mitigation

## API Key Management

- NEVER commit API keys or sensitive credentials to version control
- Use environment files (.env, .env.local) for storing sensitive information
- Ensure .env files are listed in .gitignore
- Rotate API keys immediately if they are accidentally exposed
- Use the principle of least privilege when configuring API access

## Best Practices

- Keep dependencies up to date
- Use environment-specific configurations
- Implement proper access controls
- Regularly audit and rotate credentials

## Supported Versions

Only the latest version of the project receives security updates.
