import StoriesComponent from "./StoriesComponent.jsx";
import {connect} from "react-redux";

// const HomeContainer = () => {
// 	return (<StoreContext.Consumer>
// 			{store => {
// 				return (
// 					<div className={c.home}>
// 						<StoriesComponent store={store}/>
// 						<HomePostsComponent store={store}/>
// 					</div>)
// 			}
// 			}
// 		</StoreContext.Consumer>
// 	);
// }

let mapState = (state) => {
	return {
		homePage: state.homePage,
		users: state.users
	}
}

let mapDispatch = () => {
	return {

	}
}

export const StoriesContainer = connect(mapState,  mapDispatch)(StoriesComponent)

export default StoriesContainer;