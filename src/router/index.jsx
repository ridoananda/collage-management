import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Create from "../views/student/Create";
import Edit from "../views/student/Edit";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/student/create" element={<Create />}></Route>
			<Route path="/student/:id/edit" element={<Edit />}></Route>
		</Routes>
	);
};

export default Router;
