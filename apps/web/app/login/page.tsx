import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="login-shell">
      <div className="login-card">
        <h1>Welcome back</h1>
        <p>Sign in to manage your Montessori school.</p>

        <form className="login-form">
          <label>
            Email
            <input type="email" placeholder="admin@montessori.edu" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="cta-button full">Sign in</button>
        </form>

        <Link href="/" className="back-link">Return to dashboard</Link>
      </div>
    </main>
  );
}
