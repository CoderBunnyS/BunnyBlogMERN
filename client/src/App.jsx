import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Layout from "./components/layout";
import { AuthProvider } from "./context/AuthContext";
import Callback from "./components/Callback";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
         <Route path="/callback" element={<Callback />} />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/add-blog/"
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        />
        <Route
          path="/edit-blog/:id"
          element={
            <Layout>
              <EditBlog />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
