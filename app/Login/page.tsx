


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Next.js router for navigation
import { Box, Button, Container, TextField, Typography, Link, Alert } from "@mui/material";
import Image from "next/image";

const Login = () => {
  const router = useRouter(); // ✅ Initialize router
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // Error state

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Reset error on change
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError("Username and password are required!");
      return;
    }

    console.log("Login Successful:", formData);
    
    // ✅ Redirect to Overview page after successful login
    router.push("/Overview");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {/* GitHub Logo */}
      <Box sx={{ marginBottom: 2 }}>
        <Image src="/github-logo.png" alt="GitHub Logo" width={250} height={50} />
      </Box>

      {/* Login Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          boxShadow: 1,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h6" textAlign="center" mb={2}>
          Sign in to GitHub
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          margin="normal"
          label="Username or email"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#24292e" }}>
          Sign in
        </Button>
      </Box>

      {/* Footer Links */}
      <Box sx={{ mt: 2 }}>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
