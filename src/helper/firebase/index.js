import * as admin from 'firebase-admin';

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCNrE1U5XdM8ULp\nN6XQXOAYr0X6CWJrpc9w5TYE6mvjQYcoI/yyjmQqVYM/BzeRk8n6cZbMt/cVHj3u\nGxhAMj1mOTg8ilZKsulRqgMcOKRQ3uU8IudLV9OrCLZ2MJ4aUO388wxqNCuvdrJe\nZMlylnn2nqGlLQgLXtOaugjgdftqws9ynBx465KD3l8FH0Vma69fK474Rlpi/ZX5\nfiXrmoqqd9nyDuHlkaLkgNGSjgZ0j9fp0xCKh7BlHOawpuwzhfrWkMTMkpp9exUy\nyNiQmpXis4jaujCi/Wiy1p66oNRnfOohEsD6rNpigIs2JKYTxVL4Ke1GecSZuNcP\nC/vOBjehAgMBAAECggEAAUvPgaSUy2sp+ndpc1x6Kgz7y1O9JwYjaEwXNa3NsrdQ\nLNLsIQJnp7HUa3tIgUg0cO+2RRAKI729AXnq0PbfXsP3aqm1rDrH+C427OdBbOz7\nyhROqz7gifV13Thzey2niRN8gayRrr9bq+c+UZJPXNfVhkJBIIDWV5l2ndPD1ary\n81UrLGiiyDoKLpkHdYDcW2SrHuAeYTIDrTYu1Rgnn4tteccNCbPt16WQL0wDE5ll\nF75B73cCKMauYE3tgMrqQpRdHYk805BZMTJ0neBb3rREq5iyNGNlWH8ynkIon01s\nleQqtR67PI2Lnzhy71jarDdL+QMJXdyc5k5okaXHQQKBgQC/OJISExeeURH3vY/6\nFxnB2lsHr1h/6IRS9WLIk1qY0TkJ5P6eMjbnRaRD/5CqRvfzBQscfeEf/z6pRovR\nSGgkAtTdxAQZdfLFT2IpxD7f53UDlVI66RPxW1BUduBZ/5O5P4KRp/g4qJUSuslL\nDPWBcuGiheVnTwEkVXe0dBg8MQKBgQC9qr4Awg/ukHNZc4SYimy1TN8cRrpLocOS\njFUgz6CF/ahn/3Xjqvi5vO58e/TW2NFYb1vkFezspI65Yd0ipuiWrZw5VngTdLBx\nq4xVxuzF7hd4sqixskE/4enLZ3aFqnY1MadFFRtOdCs6GlWz/kF9Klot8Vsq6wPx\nGJbbsnKGcQKBgERSeh5rI+01Gi5iVKcOye0xj4TXac+JzH23n2v6+kvPtYmLgE4V\nsvg/Mcn57j5ozP7PtoCfmWhNUp44zowgStVTDauO9cgDFJLbIj+6Fpz5nh2BpLfX\nv4BlF/aV4uNFJgryXjycv1u/IERo6LMgFjgCTAw9uxGGcOoCf5rCQEaBAoGAQnV1\npmZZlspe4NUtfRXkCZMqCopt9Np14P/zRE/8e3bqb6Z/9IqQJOUi29PDcxT+JfK/\nTCiyoCj5KdQ03FOH5GRo/V5jLM4SlYH65oORq7lF2DEiE0HWwz+x4Ggci7GzQeho\nKDjBHLhv/SgFJ9DLucQBXV/ZBizbcLuhANKCdsECgYBJik5OFjM6qx+P6roqirOs\nMGDL+57Ud+Ia33NXZ2L8g5B0VBoYAYY7UVvdspmwJeaEgP7qFyGzZ9QEkpiEWxUl\nJ6LX1g5ce8DULRKjF9Fg7V0/WgXAZ/PbVeDcKvpYp0qOedBQQyXKtb1A8oFHGQt6\nLohgFhv5EqPs5JQp1uTglQ==\n-----END PRIVATE KEY-----\n',
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
  }),
});

export default firebaseApp;
