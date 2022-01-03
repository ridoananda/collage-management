import { atom, selector } from "recoil";

const studentsState = atom({
	key: 'students-keys',
	default: JSON.parse(localStorage.getItem('react-basic__students')) || [
		{
			name: "Rido Ananda",
			email: "ridoananda123@gmail.com",
			department: "Beban ortu",
		},
	],
})

export { studentsState }