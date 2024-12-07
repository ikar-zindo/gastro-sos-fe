import React from 'react';
import HeaderComponent from "./HeaderComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {selectAuth} from "../../../selectors/auth-selectors";

const HeaderContainer: React.FC = () => {
	const auth = useAppSelector(selectAuth);

	return <HeaderComponent auth={auth}/>;
};

export default HeaderContainer;