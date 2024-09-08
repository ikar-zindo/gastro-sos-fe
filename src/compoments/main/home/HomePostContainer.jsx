import HomePostsComponent from "./HomePostsComponent.jsx";
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

export const HomePostsContainer = connect(mapState,  mapDispatch)(HomePostsComponent)

export default HomePostsContainer;