/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/Section";
import { verifyEmail } from "../services/AuthService";

type VerifyState = "loading" | "success" | "error";

export default function VerifyEmailPage() {
  const [state, setState] = useState<VerifyState>("loading");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setState("error");
      setMessage("No verification token provided in the URL.");
      return;
    }

    async function verify() {
      try {
        const response = await verifyEmail(token);
        if (response.status === "SUCCESS") {
          setState("success");
          setMessage(
            typeof response.data === "string" ? response.data : "Email verified successfully!"
          );
        } else {
          setState("error");
          setMessage(response.error?.Message ?? "Verification failed.");
        }
      } catch {
        setState("error");
        setMessage("Invalid or expired verification token.");
      }
    }

    void verify();
  }, []);

  return (
    <MainLayout>
      <div className="card bg-base-100 shadow-xl border border-base-300 w-full max-w-sm mx-auto mt-12">
        <div className="card-body items-center text-center gap-4">
          {state === "loading" && (
            <>
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p className="text-base-content/70">Verifying your email...</p>
            </>
          )}

          {state === "success" && (
            <>
              <div className="text-success text-2xl font-bold">OK</div>
              <h2 className="text-xl font-bold text-success">Email Verified!</h2>
              <p className="text-base-content/70">{message}</p>
              <Link to="/login" className="btn btn-primary mt-2">Go to Login</Link>
            </>
          )}

          {state === "error" && (
            <>
              <div className="text-error text-2xl font-bold">X</div>
              <h2 className="text-xl font-bold text-error">Verification Failed</h2>
              <p className="text-base-content/70">{message}</p>
              <Link to="/login" className="btn btn-neutral mt-2">Back to Login</Link>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
