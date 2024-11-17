import React from 'react';
import HeaderComponent from "./HeaderComponent";
import {useAppSelector} from "../../../hooks/hooks";
import {getAuth} from "../../../selectors/auth-selectors";

const HeaderContainer: React.FC = () => {
	const auth = useAppSelector(getAuth);

	return <HeaderComponent auth={auth}/>;
};

export default HeaderContainer;