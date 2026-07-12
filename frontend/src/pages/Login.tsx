import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/apiClient";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#111111] text-white">
      <div className="w-1/2 bg-gray-200 text-gray-900 flex flex-col justify-between p-16">
        <div>
          <div className="w-12 h-12 border-4 border-orange-500 rounded-md mb-6"></div>
          <h1 className="text-5xl font-bold">TransitOps</h1>
          <p className="text-gray-600 mt-3">Smart Transport Operations Platform</p>

          <div className="mt-24">
            <h2 className="text-2xl font-semibold mb-5">One login, Four Roles</h2>
            <ul className="space-y-4 text-lg">
              <li>• Fleet Manager</li>
              <li>• Driver</li>
              <li>• Safety Officer</li>
              <li>• Financial Analyst</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-500">TransitOps © 2026 • RBAC Enabled</p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-105 rounded-xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-2">Sign in to your account</h1>
          <p className="text-gray-400 mb-8">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-orange-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-orange-500"
                placeholder="Enter your password"
              />
            </div>

            {error ? <p className="text-sm text-red-400">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400">
            Need an account? <a href="/register" className="text-orange-400 hover:underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}