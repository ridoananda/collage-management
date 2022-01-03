import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { studentsState } from "../../store"

const Edit = () => {
	let { id } = useParams()
	id = parseInt(id)
	const [students, setStudents] = useRecoilState(studentsState);
	const student = students.find((s,i) => i == id)
	const [name, setName] = useState(student.name)
	const [email, setEmail] = useState(student.email)
	const [department, setDepartment] = useState(student.department)
	const navigate = useNavigate()
	const submitHandler = (e) => {
		e.preventDefault()
		setStudents(students.map((s,i) => i == id ? {name, email, department} : s))
		navigate("/")
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="card">
						<div className="card-header">Edit Student</div>
						<div className="card-body">
							<form onSubmit={submitHandler}>
								<div className="mb-3">
									<label htmlFor="name" className="form-label">
										Name
									</label>
									<input type="text" className="form-control" id="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email address
									</label>
									<input type="text" className="form-control" id="email" value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="department" className="form-label">
										Department
									</label>
									<input type="text" className="form-control" id="department" 
										value={department}
										onChange={(e) => setDepartment(e.target.value) }
									/>
								</div>
								<div className="d-flex justify-content-end">
									<button type="submit" className="btn btn-primary">
										Edit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Edit;
