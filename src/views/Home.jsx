import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { studentsState } from "../store";

const Home = () => {
	const [students, setStudents] = useRecoilState(studentsState)
	const deleteStudent = (e, index) => {
		e.preventDefault();
		if (window.confirm("Are you sure delete this data ?")) {
			setStudents(students.filter((s, i) => i !== index))
		}
		return;
	};
	useEffect(() => {
		localStorage.setItem('react-basic__students', JSON.stringify(students))
	}, [students])
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-md-8">
					<div className="d-flex justify-content-between align-items-center">
						<h3>Students Data</h3>
						<NavLink
							to="/student/create"
							className="btn btn-sm btn-primary">
							Add Data
						</NavLink>
					</div>
					<hr className="my-3" />
					<table className="table table-borderless">
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Department</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student, index) => {
								return (
									<tr key={index}>
										<th scope="row">{(index + 1)}</th>
										<td>{student.name}</td>
										<td>{student.email}</td>
										<td>{student.department}</td>
										<td className="d-flex justify-content-center align-items-center">
											<div style={{ cursor: "pointer" }} className="me-2 text-dark"
												onClick={(e) => deleteStudent(e, index) }>
												{/* prettier-ignore */}
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
													<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
												</svg>
											</div>
											<NavLink
												to={`/student/${index}/edit`}
												className="text-dark">
												{/* prettier-ignore */}
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
													<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
												</svg>
											</NavLink>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
