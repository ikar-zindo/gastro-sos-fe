import React from "react";
import {Field, Form, Formik} from "formik";
import style from "../../../styles/common/UserSearch.module.css";
import {FilterForm} from "../../../store/users-slice";
import {useAppSelector} from "../../../hooks/hooks.ts";
import {selectFilterForm} from "../../../selectors/users-selectors.ts";

interface PropsInterface {
	onFilterChange: (filer: FilterForm) => void;
}

type FriendFormType = 'true' | 'false' | 'null'

type FormValues = {
	term: string;
	friend: FriendFormType;
}

export const UsersSearchForm: React.FC<PropsInterface> = React.memo(props => {
	const filter = useAppSelector(selectFilterForm);

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
			enableReinitialize
			initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
			onSubmit={submit}
		>
			{({isSubmitting}) => (
				<Form>
					<div className={style.searchForm}>

						<div className={style.searchField}>
							<Field type="text" name="term"/>
							<button type="submit" disabled={isSubmitting}>
								<svg xmlns="http://www.w3.org/2000/svg"
								     viewBox="0 0 24 24"
								     width="24"
								     height="24"
								     fill="currentColor">
									<path d="M10 2a8 8 0 015.292 13.708l5.707 5.707a1 1 0 01-1.414 1.414l-5.707-5.707A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"/>
								</svg>
							</button>
						</div>
						<Field name="friend" as="select" className={style.selectField}>
							<option value="null">All users</option>
							<option value="true">Only followed</option>
							<option value="false">Only unfollowed</option>
						</Field>
					</div>
					<div className={style.errorMessage}></div>
				</Form>
			)}
		</Formik>
	);
})