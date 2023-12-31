import React from "react";
import { Route, Routes } from "react-router-dom";
import { Global } from "./Global";
import { Table } from "./Table";
import { Score } from "./Score";
import { UserMain } from "../layouts/Main/UserMain";

export const UserModules = () => {
  return (
    <UserMain>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/score/*" element={<Score />} />
        <Route path="/table/*" element={<Table />} />
      </Routes>
    </UserMain>
  );
};
