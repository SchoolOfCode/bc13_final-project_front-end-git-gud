import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

// unprotected routes
const noAuthRequired = [
  "/",
  "/login",
  "/sign",
  "/termsofuse",
  "/privacypolicy",
  "/about",
  "/contact",
  "/cookiepolicy"
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
