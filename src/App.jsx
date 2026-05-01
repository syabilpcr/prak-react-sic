import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

// Menggunakan React.lazy() untuk meng-import komponen secara dinamis
// Ini meningkatkan performa dengan memuat komponen hanya saat dibutuhkan

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Pages - Main
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const ErrorRouter = React.lazy(() => import("./pages/ErrorRouter"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Pages - Auth
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    /* Suspense menangani tampilan sementara (Loading) saat komponen lazy sedang dimuat */
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* Kelompok Route 1: Menggunakan MainLayout (Sidebar, Header, dsb)[cite: 1] */}
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="error/:code" element={<ErrorRouter />} />
          {/* Catch-all route untuk halaman tidak ditemukan di dalam MainLayout[cite: 1] */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Kelompok Route 2: Menggunakan AuthLayout (Login, Register, Forgot)[cite: 1] */}
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;