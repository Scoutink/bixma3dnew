# Security Findings

## Cross-Origin Admin Token Exposure (`connect/userauthenticate.php`)
- The endpoint returns JSON with administrator `userid` and `wordpresstoken` values after validating credentials.
- It explicitly calls `addConnectHeader('*')`, which sends `Access-Control-Allow-Origin: *`, allowing any origin to make credentialed POST requests.
- A successful response is issued for any admin account found in the local database (or via the federated global login) and persists tokens back to the `users` table.
- An attacker who coaxes an admin into issuing a request from a malicious origin could obtain reusable admin tokens.

## Unauthenticated Asset Disclosure (`connect/upload.php`)
- Accepts an `uploadid` query parameter and retrieves the corresponding row from the `uploads` table without verifying the caller's identity or authorization.
- Returns base64-encoded `filedata`, metadata (dimensions, mime type), and internal path references in the JSON payload.
- Because the endpoint emits the caller's domain in `Access-Control-Allow-Origin`, any script on that domain (or a DNS hijack) can exfiltrate arbitrary uploaded files when an `uploadid` is known or guessed.

## Suggested Mitigations
- Restrict `Access-Control-Allow-Origin` to trusted administrative domains and require CSRF-resistant session tokens for `/connect/userauthenticate.php`.
- Require authenticated session context (e.g., via `$wtwconnect->hasPermission`) before returning upload metadata or binary data, and consider streaming files through signed URLs instead of raw base64 blobs.
- Audit other `/connect` endpoints for similar unauthenticated data disclosure patterns and align them with the permission checks already implemented in administrative handlers.
