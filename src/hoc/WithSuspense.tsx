import React, {Suspense} from 'react';
import Preloader from "../components/common/elements/Preloader";

interface WithSuspenseProps {
	Component: React.ComponentType;
}

const WithSuspense: React.FC<WithSuspenseProps> = ({ Component }) => {
	return (
		<Suspense fallback={<Preloader />}>
			<Component />
		</Suspense>
	);
};

export default WithSuspense;
