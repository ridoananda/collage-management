import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { studentsState } from "../../store"

const Create = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [department, setDepartment] = useState("")
	const [students, setStudents] = useRecoilState(studentsState);
	const navigate = useNavigate()
	const submitHandler = (e) => {
		e.preventDefault()
		setStudents([{name, email, department}, ...students])
		navigate("/")
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="card">
						<div className="card-header">Create Student</div>
						<div className="card-body">
							<form onSubmit={submitHandler}>
								<div className="mb-3">
									<label
										htmlFor="name"
										className="form-label">
										Name
									</label>
									<input
										type="text"
										className="form-control"
										id="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="email"
										className="form-label">
										Email address
									</label>
									<input
										type="text"
										className="form-control"
										id="email"
										value={email}
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
									<button
										type="submit"
										className="btn btn-primary">
										Create
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
	
}

export default Create
