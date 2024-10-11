import React, {Suspense} from 'react';
import Loader from "../components/common/elements/Loader.jsx";

const WithSuspense = ({ Component }) => {
	return (
		<Suspense fallback={<Loader />}>
			<Component />
		</Suspense>
	);
};

export default WithSuspense;
