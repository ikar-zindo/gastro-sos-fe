import React from "react";
import {Field, Form, Formik} from "formik";
import style from "../../../styles/common/UserSearch.module.css";
import {FilterForm} from "../../../store/users-slice";

interface PropsInterface {
	onFilterChange: (filer: FilterForm) => void;
};

type FormValues = {
	term: string;
	friend: string;
}

export const UsersSearchForm: React.FC<PropsInterface> = React.memo(props => {

	const submit = (values: FormValues, {setSubmitting}: {
		setSubmitting: (isSubmitting: boolean) => void
	}) => {
		const filter: FilterForm = {
			term: values.term,
			friend: values.friend === 'null' ? null : values.friend === 'true',
		};
		props.onFilterChange(filter);
		setSubmitting(false);
	}

	return (
		<Formik
			initialValues={{term: '', friend: 'null'}}
			onSubmit={submit}
		>
			{({isSubmitting}) => (
				<Form>
					<div className={style.searchForm}>

						<div className={style.searchField}>
							<Field type="text" name="term"/>
							<button type="submit" disabled={isSubmitting}>
								Find
							</button>
						</div>
						<Field name="friend" as="select" className={style.selectField}>
							<option value="null">All</option>
							<option value="true">Only followed</option>
							<option value="false">Only unfollowed</option>
						</Field>
					</div>
					<div className={style.errorMessage}></div>
				</Form>
			)}
		</Formik>
	);
});