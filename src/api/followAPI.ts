import instanceAPI from "./instanceAPI";

export const followAPI = {
	getFollowUser(userId: number | string) {
		return instanceAPI.get(`follow/${userId}`);
	},

	followUser(userId: number | string) {
		return instanceAPI.post(`follow/${userId}`, {});
	},

	unfollowUser(userId: number | string) {
		return instanceAPI.delete(`follow/${userId}`);
	}
}