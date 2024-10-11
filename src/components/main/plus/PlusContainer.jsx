import React, {useState} from 'react';
import c from '../../../styles/main/plus.module.css'
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {HelloWorld} from "../../../../tests/components/HelloWorld.jsx";

const PlusContainer = () => {
	const dispatch = useDispatch();
	const [initialStatus, setInitialStatus] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: {
			errors,
		}
	} = useForm({
		defaultValues: {
			status: ""
		}
	});

	const onSubmit = (data) => {
		console.log("data", data);
	}

	return (
		<div className={c.plus}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("firstName", {required: true, maxLength: 20})} />
				<input {...register("lastName", {pattern: /^[A-Za-z]+$/i})} />
				<input type="number" {...register("age", {
					required: "Age is required",
					min: {
						message: "Age must be greater than 0",
						value: 0
					},
					max: {
						message: "Age must be lesser than 130",
						value: 130
					}
				})} />
				{errors.age && <span>{errors.age.message}</span>}
				<input type="submit"/>
			</form>
		</div>
	);
};

export default PlusContainer;